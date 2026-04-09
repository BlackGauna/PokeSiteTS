import { Type, type Static } from "@sinclair/typebox"
import { createInsertSchema, createSelectSchema } from "drizzle-typebox"
import { locationEncounterTable, locationTable } from "../db/schemas/Location"
import { pokemonSchema } from "./Pokemon"

export const locationSchema = createSelectSchema(locationTable)
export const locationInsertSchema = createInsertSchema(locationTable)
export const locationEncounterSchema = createSelectSchema(locationEncounterTable)
export const locationEncounterInsertSchema = createInsertSchema(locationEncounterTable)

export const locationEncounterWithPokemonSchema = Type.Composite([
  locationEncounterSchema,
  Type.Object({ pokemon: pokemonSchema }),
])

export const locationWithEncountersSchema = Type.Composite([
  locationSchema,
  Type.Object({ encounters: Type.Array(locationEncounterWithPokemonSchema) }),
])

export type Location = Static<typeof locationSchema>
export type LocationInsert = Static<typeof locationInsertSchema>
export type LocationEncounter = Static<typeof locationEncounterSchema>
export type LocationEncounterInsert = Static<typeof locationEncounterInsertSchema>
export type LocationEncounterWithPokemon = Static<typeof locationEncounterWithPokemonSchema>
export type LocationWithEncounters = Static<typeof locationWithEncountersSchema>
