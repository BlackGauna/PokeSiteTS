import { Type, type Static } from "@sinclair/typebox"
import { createInsertSchema, createSelectSchema } from "drizzle-typebox"
import { moveNameTable, moveTable } from "../db/schemas/Move"
import { pokemonMoveTable } from "../db/schemas/PokemonMove"

export const moveSchema = createSelectSchema(moveTable)
export const moveInsertSchema = createInsertSchema(moveTable)
export const moveNameSchema = createSelectSchema(moveNameTable)
export const moveNameInsertSchema = createInsertSchema(moveNameTable)
export const pokemonMoveSchema = createSelectSchema(pokemonMoveTable)
export const pokemonMoveInsertSchema = createInsertSchema(pokemonMoveTable)

export const pokemonMoveWithMoveSchema = Type.Composite([
  pokemonMoveSchema,
  Type.Object({ move: moveSchema }),
])

export type Move = Static<typeof moveSchema>
export type MoveInsert = Static<typeof moveInsertSchema>
export type MoveName = Static<typeof moveNameSchema>
export type MoveNameInsert = Static<typeof moveNameInsertSchema>
export type PokemonMove = Static<typeof pokemonMoveSchema>
export type PokemonMoveInsert = Static<typeof pokemonMoveInsertSchema>
export type PokemonMoveWithMove = Static<typeof pokemonMoveWithMoveSchema>
