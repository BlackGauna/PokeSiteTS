import { insertLocationWithEncounters } from "@/db/api/location.queries"
import { getPokemonIdByName } from "@/db/api/pokemon.queries"
import { parseEncounterMethod } from "@/db/enums/EncounterMethod"
import { type LocationEncounterInsert, type LocationInsert } from "@/db/schemas/Location"
import Pokedex from "pokedex-promise-v2"

const P = new Pokedex({
  cacheLimit: 1000 * 60 * 60 * 24 * 30,
  timeout: 1000 * 30,
})

const region = "hoenn"
const version = "emerald"

export const getAndSaveLocations = async () => {
  const locations = await getRegionLocations(region)
  console.log("locations", locations.length)

  const locationAreas = await Promise.all(
    locations.map(async location => {
      const areaInfos = await getLocationAreas(location)
      return areaInfos
    }),
  ).then(locationAreas => locationAreas.flat())

  for (const area of locationAreas) {
    const { location, encounters } = await parseAreaDb(area)

    await insertLocationWithEncounters(location, encounters)
  }

  // return writeToTestFile(finalLocations)
}

const getRegionLocations = async (regionName: string) => {
  const regionInfo = await P.getRegionByName(regionName)
  console.log("regionInfo", regionInfo.name)

  if (!regionInfo) {
    throw new Error(`Region ${regionName} not found`)
  }

  const areas = await Promise.all(
    regionInfo.locations.map(async location => {
      const locationInfo = await P.getLocationByName(location.name)
      return locationInfo
    }),
  ).then(areasArray => {
    return areasArray.flat()
  })

  return areas
}

const getLocationAreas = async (location: Pokedex.Location) => {
  const areaInfos = await Promise.all(
    location.areas.map(async area => {
      return await P.getLocationAreaByName(area.name)
    }),
  ).then(areaInfo => areaInfo.flat())

  return areaInfos
}

const parseAreaDb = async (
  areaInfo: Pokedex.LocationArea,
): Promise<{ location: LocationInsert; encounters: LocationEncounterInsert[] }> => {
  console.log("parsing area", areaInfo.name)
  const encounters = await parseEncounters(areaInfo.pokemon_encounters)

  // remove "-area" at the end of area name, as in that case the area is the same as the location itself
  const areaName = areaInfo.name
    .replace("-area", "")
    .replace(`${region}-`, "")
    .replace(`-${region}`, "")

  const location: LocationInsert = {
    name: areaName,
    region: region,
    boundsSw: [0, 0],
    boundsNe: [0, 0],
  }

  return { location, encounters }
}

const parseEncounters = async (encounters: Pokedex.LocationAreaPokemonEncounter[]) => {
  const parsedEncounters: LocationEncounterInsert[] = []

  for (const encounter of encounters) {
    const pokemonName = encounter.pokemon.name
    const filteredVersionDetails = encounter.version_details.filter(
      detail => detail.version.name.toLowerCase() === version.toLowerCase(),
    )

    if (filteredVersionDetails.length < 1) continue

    const pokemonId = await getPokemonIdByName(pokemonName)
    for (const encounterDetail of filteredVersionDetails.flatMap(v => v.encounter_details)) {
      const method = parseEncounterMethod(encounterDetail.method.name)
      if (!method)
        throw new Error(`Could not parse ${method} to pokemon encounter method of ${pokemonName}`)

      const locationEncounter: LocationEncounterInsert = {
        pokemonId: pokemonId,
        locationId: 0, // will be updated when location is saved to db
        encounterChance: encounterDetail.chance,
        minLevel: encounterDetail.min_level,
        maxLevel: encounterDetail.max_level,
        encounterMethod: method,
      }
      parsedEncounters.push(locationEncounter)
    }
  }

  return parsedEncounters
}
