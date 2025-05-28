import type { PokemonEncounterMethod } from "backend/src/db/enums/EncounterMethod"
import type { LocationEncounter } from "backend/src/db/schemas/Location"
import type { PokemonType } from "backend/src/db/schemas/Pokemon"

export type GroupedEncounter = {
  pokemon: PokemonType
  encounterChance: number
  encounterMethod: PokemonEncounterMethod
  minLevel: number
  maxLevel: number
  encounters: LocationEncounter[]
}
