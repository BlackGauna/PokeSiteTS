import { pgTable, primaryKey, serial, smallint, text } from "drizzle-orm/pg-core"
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
