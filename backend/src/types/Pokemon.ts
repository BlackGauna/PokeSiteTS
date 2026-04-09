import { Type, type Static } from "@sinclair/typebox"
import { createInsertSchema, createSelectSchema } from "drizzle-typebox"
import { pokemonNameTable, pokemonTable } from "../db/schemas/Pokemon"
import { pokemonMoveSchema, pokemonMoveWithMoveSchema } from "./Move"

export const pokemonSchema = createSelectSchema(pokemonTable)
export const pokemonInsertSchema = createInsertSchema(pokemonTable)
export const pokemonNameSchema = createSelectSchema(pokemonNameTable)
export const pokemonNameInsertSchema = createInsertSchema(pokemonNameTable)

export const pokemonWithNamesSchema = Type.Composite([
  pokemonSchema,
  Type.Object({ names: Type.Array(pokemonNameSchema) }),
])

export const pokemonWithNamesAndMovesSchema = Type.Composite([
  pokemonWithNamesSchema,
  Type.Object({ moves: Type.Array(pokemonMoveWithMoveSchema) }),
])

// Simpler variant used by some queries (moves without nested move data)
export const pokemonWithNamesAndRawMovesSchema = Type.Composite([
  pokemonWithNamesSchema,
  Type.Object({ moves: Type.Array(pokemonMoveSchema) }),
])

export type Pokemon = Static<typeof pokemonSchema>
export type PokemonInsert = Static<typeof pokemonInsertSchema>
export type PokemonName = Static<typeof pokemonNameSchema>
export type PokemonNameInsert = Static<typeof pokemonNameInsertSchema>
export type PokemonWithNames = Static<typeof pokemonWithNamesSchema>
export type PokemonWithNamesAndMoves = Static<typeof pokemonWithNamesAndMovesSchema>
