import { Type, type Static } from "@sinclair/typebox"
import { createInsertSchema, createSelectSchema } from "drizzle-typebox"
import {
  trainerFightPokemonMoveTable,
  trainerFightPokemonTable,
  trainerFightTable,
  trainerTable,
} from "../db/schemas/Trainer"

export const trainerSchema = createSelectSchema(trainerTable)
export const trainerInsertSchema = createInsertSchema(trainerTable)
export const trainerFightSchema = createSelectSchema(trainerFightTable)
export const trainerFightInsertSchema = createInsertSchema(trainerFightTable)
export const trainerFightPokemonSchema = createSelectSchema(trainerFightPokemonTable)
export const trainerFightPokemonInsertSchema = createInsertSchema(trainerFightPokemonTable)
export const trainerFightPokemonMoveSchema = createSelectSchema(trainerFightPokemonMoveTable)
export const trainerFightPokemonMoveInsertSchema = createInsertSchema(trainerFightPokemonMoveTable)

// Compound insert types used by import scripts
export const trainerFightPokemonInsertWithMovesSchema = Type.Composite([
  trainerFightPokemonInsertSchema,
  Type.Object({ moves: Type.Array(Type.Number()) }),
])

export const trainerFightInsertAllInfoSchema = Type.Composite([
  trainerFightInsertSchema,
  Type.Object({ pokemons: Type.Array(trainerFightPokemonInsertWithMovesSchema) }),
])

export const trainerInsertAllInfoSchema = Type.Composite([
  trainerInsertSchema,
  Type.Object({ fights: Type.Array(trainerFightInsertAllInfoSchema) }),
])

export type Trainer = Static<typeof trainerSchema>
export type TrainerInsert = Static<typeof trainerInsertSchema>
export type TrainerFight = Static<typeof trainerFightSchema>
export type TrainerFightInsert = Static<typeof trainerFightInsertSchema>
export type TrainerFightPokemon = Static<typeof trainerFightPokemonSchema>
export type TrainerFightPokemonInsert = Static<typeof trainerFightPokemonInsertSchema>
export type TrainerFightPokemonMove = Static<typeof trainerFightPokemonMoveSchema>
export type TrainerFightPokemonMoveInsert = Static<typeof trainerFightPokemonMoveInsertSchema>
export type TrainerFightPokemonInsertWithMoves = Static<
  typeof trainerFightPokemonInsertWithMovesSchema
>
export type TrainerFightInsertAllInfo = Static<typeof trainerFightInsertAllInfoSchema>
export type TrainerInsertAllInfo = Static<typeof trainerInsertAllInfoSchema>
