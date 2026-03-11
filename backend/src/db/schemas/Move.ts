import { relations } from "drizzle-orm"
import { pgTable, primaryKey, serial, smallint, text } from "drizzle-orm/pg-core"
import { pokemonMoveTable } from "./PokemonMove"
import { NamesTableBase, PokemonTypes } from "./Shared"
import { trainerFightPokemonMoveTable } from "./Trainer"

// export const Ailment = pgEnum("Ailment", [
//   "unknown",
//   "none",
//   "paralysis",
//   "sleep",
//   "freeze",
//   "burn",
//   "poison",
//   "confusion",
//   "infatuation",
//   "trap",
//   "nightmare",
//   "torment",
//   "disable",
//   "yawn",
//   "heal-block",
//   "no-type-immunity",
//   "leech-seed",
//   "embargo",
//   "perish-song",
//   "ingrain",
// ])

export const moveTable = pgTable("move", {
  id: serial("id").primaryKey(),
  name: text("name").notNull().unique(),
  power: smallint("power"),
  accuracy: smallint("accuracy"),
  pp: smallint("pp").notNull(),
  priority: smallint("priority").notNull(),
  type: PokemonTypes("type").notNull(),

  // ailment: Ailment("ailment"),
  // ailmentChance: smallint("ailmentChance"),
})

export const moveNameTable = pgTable(
  "move_name",
  {
    ...NamesTableBase,
    id: serial("id").unique(),
    moveId: smallint("move_id")
      .references(() => moveTable.id)
      .notNull(),
  },
  table => [primaryKey({ columns: [table.moveId, table.language] })],
)

export const moveRelations = relations(moveTable, ({ many }) => ({
  names: many(moveNameTable),
  pokemon: many(pokemonMoveTable),
  trainerPokemonMoves: many(trainerFightPokemonMoveTable),
}))

export const moveNameRelations = relations(moveNameTable, ({ one }) => ({
  names: one(moveTable, {
    fields: [moveNameTable.moveId],
    references: [moveTable.id],
  }),
}))

export type MoveType = typeof moveTable.$inferInsert
export type MoveNameType = typeof moveNameTable.$inferInsert
