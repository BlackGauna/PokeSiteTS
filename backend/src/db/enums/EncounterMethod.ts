import { pgEnum } from "drizzle-orm/pg-core"

export const pokemonEncounterMethod = pgEnum("pokemon_encounter_method", [
  "walk",
  "old-rod",
  "good-rod",
  "super-rod",
  "surf",
  "rock-smash",
  "headbutt",
  "dark-grass",
  "grass-spots",
  "cave-spots",
  "bridge-spots",
  "super-rod-spots",
  "surf-spots",
  "yellow-flowers",
  "purple-flowers",
  "red-flowers",
  "rough-terrain",
  "gift",
  "gift-egg",
  "only-one",
  "pokeflute",
  "headbutt-low",
  "headbutt-normal",
  "headbutt-high",
  "squirt-bottle",
  "wailmer-pail",
  "seaweed",
  "roaming-grass",
  "roaming-water",
  "devon-scope",
  "feebas-tile-fishing",
  "island-scan",
  "sos-encounter",
  "bubbling-spots",
  "berry-piles",
  "npc-trade",
  "sos-from-bubbling-spot",
])

const pokemonEncounterMethods = pokemonEncounterMethod.enumValues
export type PokemonEncounterMethod = (typeof pokemonEncounterMethods)[number]

export const parseEncounterMethod = (input: string): PokemonEncounterMethod | null => {
  return pokemonEncounterMethods.includes(input as PokemonEncounterMethod)
    ? (input as PokemonEncounterMethod)
    : null
}
