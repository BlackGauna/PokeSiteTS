import type { PokemonEncounterMethod } from "@/server/db/enums/EncounterMethod"
import type { LocationEncounter } from "@/server/types/Location"
import type { Pokemon } from "@/server/types/Pokemon"

export type GroupedEncounter = {
  pokemon: Pokemon
  encounterChance: number
  encounterMethod: PokemonEncounterMethod
  minLevel: number
  maxLevel: number
  encounters: LocationEncounter[]
}
