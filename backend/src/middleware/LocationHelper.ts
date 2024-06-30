import Pokedex from "pokedex-promise-v2"
import { timer, writeToTestFile } from "src/utils/general"
import overworldAreas from "@tests/OverworldAreas"

const P = new Pokedex({
  cacheLimit: 1000 * 60 * 60 * 24 * 30,
  timeout: 1000 * 30,
})

type Encounter = {
  name: string
  encounterChance: number
  encounterMethod: string
  minLevel: number
  maxLevel: number
}

type Location = {
  names: string[] | null
  area: number[]
  encounters: Encounter[]
}

type LocationJson = Record<string, Location>

// let locationsJson: LocationJson = {}
type CustomEncounterDetail = {
  chance: number
  max_level: number
  method: string
  min_level: number
}
type CustomPokemonEncounters = Record<string, CustomEncounterDetail[]>

export const test = () => {
  const pokemonEncountersRaw: Record<string, CustomEncounterDetail[]> = {}
  pokemonEncountersRaw["zigzagoon"] = []
  console.log(pokemonEncountersRaw["zigzagoon"])
}

// filtered for only overworld locations for now
export const getOverworldLocations = async (region: string) => {
  const overWorldFilter = ["city", "town", "route"] as const

  //   locationsJson = {}
  const regionInfo = await P.getRegionByName(region)
  console.log("regionInfo", regionInfo.name)

  let locations = regionInfo.locations
  locations = locations.filter(location =>
    overWorldFilter.find(filter => location.name.includes(filter)),
  )

  let test = {}

  for (const [index, location] of locations.entries()) {
    console.log(`Location ${index + 1} of ${locations.length}`)

    const locationInfo = await P.getLocationByName(location.name)
    const locationTimer = timer(1500)
    console.log("locationInfo", locationInfo.name)
    if (locationInfo.areas.length < 1) continue

    const combinedEncounters: CustomPokemonEncounters = {}

    for (const [areaIndex, area] of locationInfo.areas.entries()) {
      console.log(`    Area ${areaIndex + 1} of ${locationInfo.areas.length}`)

      const timeout = timer(1500)
      const areaInfo = await P.getLocationAreaByName(area.name)
      const encounters = areaInfo.pokemon_encounters

      const filtered = filterEncounters(locationInfo.name, encounters)

      // maybe need to combine the encounters of all areas in a location. At least for the overworld
      //   for (const [pokemonName, details] of Object.entries(filtered)) {
      //     if (!combinedEncounters[pokemonName]) {
      //       combinedEncounters[pokemonName] = []
      //     }
      //     combinedEncounters[pokemonName].push(...details)
      //   }

      const areaName =
        areaInfo.name === locationInfo.name + "-area" ? locationInfo.name : areaInfo.name
      console.log("      filtered: " + Object.keys(filtered).length)

      if (Object.keys(filtered).length > 0) {
        test = {
          ...test,
          [areaName]: {
            area: findAreaByRouteName(areaName),
            // area: [[], []],
            encounters: filtered,
          },
        }
      }

      await timeout
    }
    await locationTimer
  }
  writeToTestFile(test)
  console.log("wrote test file")
}

const filterEncounters = (
  locationName: string,
  encounters: Pokedex.LocationAreaPokemonEncounter[],
) => {
  const checkForVersions = ["emerald"] as const
  type CheckForVersionsType = (typeof checkForVersions)[number]

  const pokemonEncountersRaw: Record<string, CustomEncounterDetail[]> = {}

  for (const encounterInfo of encounters) {
    for (const versionDetail of encounterInfo.version_details) {
      const isVersion =
        checkForVersions.indexOf(versionDetail.version.name as CheckForVersionsType) > -1

      if (isVersion) {
        if (!pokemonEncountersRaw[encounterInfo.pokemon.name]) {
          //   console.log(`field ${encounterInfo.pokemon.name} not available yet`)
          pokemonEncountersRaw[encounterInfo.pokemon.name] = []
        }

        for (const encounterDetail of versionDetail.encounter_details) {
          const encounter: CustomEncounterDetail = {
            chance: encounterDetail.chance,
            max_level: encounterDetail.max_level,
            method: encounterDetail.method.name,
            min_level: encounterDetail.min_level,
          }
          pokemonEncountersRaw[encounterInfo.pokemon.name as string].push(encounter)
        }
      }
    }
  }
  return pokemonEncountersRaw
}

// Function to find area by route name
const findAreaByRouteName = (routeName: string) => {
  const routeData = overworldAreas[routeName]
  if (routeData && routeData.area && routeData.area.length === 2) {
    return routeData.area
  } else {
    return [[], []] // Route not found or invalid area data
  }
}

export const testFilterNames = {}
