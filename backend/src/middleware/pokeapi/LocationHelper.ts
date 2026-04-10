import { parseEncounterMethod } from "@/db/enums/EncounterMethod"
import { insertLocationWithEncounters } from "@/db/queries/location.queries"
import { getPokemonIdByName } from "@/db/queries/pokemon.queries"
import type { LocationEncounterInsert, LocationInsert } from "@/server/types/Location"
import Pokedex from "pokedex-promise-v2"
import locationAreas from "../../../imports/overworldAreas"

type LogFn = (msg: string) => void

const P = new Pokedex({
  cacheLimit: 1000 * 60 * 60 * 24 * 30,
  timeout: 1000 * 30,
})

const region = "hoenn"
const version = "emerald"

export const getAndSaveLocations = async (onLog?: LogFn): Promise<void> => {
  const log: LogFn = onLog ?? (msg => console.log(msg))

  const regionInfo = await P.getRegionByName(region)
  log(`Fetched region: ${regionInfo.name} (${regionInfo.locations.length} locations)`)

  const locations = await Promise.all(
    regionInfo.locations.map(loc => P.getLocationByName(loc.name)),
  )

  const locationAreas_ = (await Promise.all(locations.map(loc => getLocationAreas(loc)))).flat()
  log(`Fetched ${locationAreas_.length} location areas`)

  for (const area of locationAreas_) {
    const { location, encounters } = parseAreaDb(area)
    const resolvedEncounters = await encounters
    log(`Saving ${location.name} (${resolvedEncounters.length} encounters)`)
    await insertLocationWithEncounters(location, resolvedEncounters)
  }

  // Save cities and towns that don't have separate area entries in PokeAPI
  const townsAndCities = locations.filter(
    loc => loc.name.includes("-city") || loc.name.includes("-town"),
  )
  log(`Saving ${townsAndCities.length} towns/cities...`)
  for (const loc of townsAndCities) {
    const townLocation = buildLocationInsert(loc.name, loc.name)
    await insertLocationWithEncounters(townLocation, [])
  }

  log("Done saving locations")
}

const getLocationAreas = async (location: Pokedex.Location): Promise<Pokedex.LocationArea[]> =>
  (await Promise.all(location.areas.map(area => P.getLocationAreaByName(area.name)))).flat()

/** Resolve pixel bounds from overworldAreas for a given raw name (before region-stripping). */
function resolveBounds(rawName: string): { boundsSw: number[]; boundsNe: number[] } {
  const entry = locationAreas[rawName]
  const sw = entry?.area[0]
  const ne = entry?.area[1]
  return {
    boundsSw: sw && sw.length === 2 ? sw : [0, 0],
    boundsNe: ne && ne.length === 2 ? ne : [0, 0],
  }
}

/** Build a LocationInsert, looking up coordinates by rawName in overworldAreas. */
function buildLocationInsert(rawName: string, dbName: string): LocationInsert {
  return {
    name: dbName,
    region,
    ...resolveBounds(rawName),
  }
}

/** Strip region prefix/suffix to get the DB-stored name. */
function toDbName(rawName: string): string {
  return rawName.replace(`${region}-`, "").replace(`-${region}`, "")
}

function parseAreaDb(areaInfo: Pokedex.LocationArea): {
  location: LocationInsert
  encounters: Promise<LocationEncounterInsert[]>
} {
  // Remove "-area" suffix first, then derive the DB name by stripping the region prefix.
  // The rawName (before region-strip) matches overworldAreas keys.
  const rawName = areaInfo.name.replace("-area", "")
  const dbName = toDbName(rawName)

  const location = buildLocationInsert(rawName, dbName)
  const encounters = parseEncounters(areaInfo.pokemon_encounters)

  return { location, encounters }
}

const parseEncounters = async (
  encounters: Pokedex.LocationAreaPokemonEncounter[],
): Promise<LocationEncounterInsert[]> => {
  const parsed: LocationEncounterInsert[] = []

  for (const encounter of encounters) {
    const emeraldDetails = encounter.version_details.filter(
      d => d.version.name.toLowerCase() === version,
    )
    if (emeraldDetails.length === 0) continue

    const pokemonId = await getPokemonIdByName(encounter.pokemon.name)

    for (const detail of emeraldDetails.flatMap(v => v.encounter_details)) {
      const method = parseEncounterMethod(detail.method.name)
      if (!method) throw new Error(`Unknown encounter method "${detail.method.name}"`)

      parsed.push({
        pokemonId,
        locationId: 0, // filled by insertLocationWithEncounters
        encounterChance: detail.chance,
        minLevel: detail.min_level,
        maxLevel: detail.max_level,
        encounterMethod: method,
      })
    }
  }

  return parsed
}
