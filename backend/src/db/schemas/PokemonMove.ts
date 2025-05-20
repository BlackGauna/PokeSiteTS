import { relations } from "drizzle-orm"
import { pgTable, primaryKey, smallint } from "drizzle-orm/pg-core"
import { moveLearnMethod } from "../enums/MoveLearnMethod"
import { Move } from "./Move"
import { Pokemon } from "./Pokemon"
import { versionGroups } from "./Shared"

export const PokemonMove = pgTable(
  "pokemon_moves",
  {
    pokemonId: smallint()
      .references(() => Pokemon.id)
      .notNull(),
    moveId: smallint()
      .references(() => Move.id)
      .notNull(),
    learnMethod: moveLearnMethod().notNull(),
    level: smallint().notNull(),
    version: versionGroups().notNull(),
  },
  table => [primaryKey({ columns: [table.pokemonId, table.moveId] })],
)

export const pokemonMoveRelations = relations(PokemonMove, ({ one }) => ({
  pokemon: one(Pokemon, {
    fields: [PokemonMove.pokemonId],
    references: [Pokemon.id],
  }),
  move: one(Move, {
    fields: [PokemonMove.moveId],
    references: [Move.id],
  }),
}))

export type PokemonMoveType = typeof PokemonMove.$inferInsert
