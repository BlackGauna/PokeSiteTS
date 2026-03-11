import type { PokemonEncounterMethod } from "backend/src/db/enums/EncounterMethod"
import type { LocationEncounter } from "backend/src/db/schemas/Location"
import type { Pokemon } from "backend/src/db/schemas/Pokemon"

export type GroupedEncounter = {
  pokemon: Pokemon
  encounterChance: number
  encounterMethod: PokemonEncounterMethod
  minLevel: number
  maxLevel: number
  encounters: LocationEncounter[]
}
