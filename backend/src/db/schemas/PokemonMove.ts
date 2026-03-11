import { relations } from "drizzle-orm"
import { pgTable, primaryKey, smallint } from "drizzle-orm/pg-core"
import { moveLearnMethod } from "../enums/MoveLearnMethod"
import { moveTable } from "./Move"
import { pokemonTable } from "./Pokemon"
import { versionGroups } from "./Shared"

export const pokemonMoveTable = pgTable(
  "pokemon_moves",
  {
    pokemonId: smallint()
      .references(() => pokemonTable.id)
      .notNull(),
    moveId: smallint()
      .references(() => moveTable.id)
      .notNull(),
    learnMethod: moveLearnMethod().notNull(),
    level: smallint().notNull(),
    version: versionGroups().notNull(),
  },
  table => [primaryKey({ columns: [table.pokemonId, table.moveId] })],
)

export const pokemonMoveRelations = relations(pokemonMoveTable, ({ one }) => ({
  pokemon: one(pokemonTable, {
    fields: [pokemonMoveTable.pokemonId],
    references: [pokemonTable.id],
  }),
  move: one(moveTable, {
    fields: [pokemonMoveTable.moveId],
    references: [moveTable.id],
  }),
}))

export type PokemonMove = typeof pokemonMoveTable.$inferInsert
