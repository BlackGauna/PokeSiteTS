import { relations } from "drizzle-orm"
import { pgTable, primaryKey, serial, smallint, text } from "drizzle-orm/pg-core"
import { PokemonMove } from "./PokemonMove"
import { NamesTableBase, PokemonTypes } from "./Shared"

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

export const Move = pgTable("move", {
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

export const MoveName = pgTable(
  "move_name",
  {
    ...NamesTableBase,
    id: serial("id").unique(),
    moveId: smallint("move_id")
      .references(() => Move.id)
      .notNull(),
  },
  table => ({
    pk: primaryKey({ columns: [table.moveId, table.language] }),
  }),
)

export const MoveRelations = relations(Move, ({ many }) => ({
  names: many(MoveName),
  pokemon: many(PokemonMove),
}))

export const MoveNameRelations = relations(MoveName, ({ one }) => ({
  names: one(Move, {
    fields: [MoveName.moveId],
    references: [Move.id],
  }),
}))

export type MoveType = typeof Move.$inferInsert
export type MoveNameType = typeof MoveName.$inferInsert
