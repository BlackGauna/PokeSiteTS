import { pgTable, serial, smallint } from "drizzle-orm/pg-core"
import { NamesTable, PokemonTypes } from "./Shared"
import { relations } from "drizzle-orm"
import { PokemonMove } from "./Pokemon"
import { createInsertSchema } from "drizzle-typebox"
import { Static } from "elysia"

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
  power: smallint("power"),
  accuracy: smallint("accuracy"),
  pp: smallint("pp").notNull(),
  priority: smallint("priority").notNull(),
  type: PokemonTypes("type").notNull(),

  // ailment: Ailment("ailment"),
  // ailmentChance: smallint("ailmentChance"),
})

export const MoveName = pgTable("move_name", {
  ...NamesTable,
  moveId: smallint("move_id")
    .references(() => Move.id)
    .notNull(),
})

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

const insertMove = createInsertSchema(Move)
export type MoveType = Static<typeof insertMove>
const insertMoveName = createInsertSchema(MoveName)
export type MoveNameType = Static<typeof insertMoveName>
