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
