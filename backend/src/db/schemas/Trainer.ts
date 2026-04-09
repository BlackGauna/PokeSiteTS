import { boolean, integer, pgTable, serial, smallint, text, unique } from "drizzle-orm/pg-core"
import { pgTrainerClass } from "../enums"
import { itemsTable } from "./Item"
import { locationTable } from "./Location"
import { moveTable } from "./Move"
import { pokemonTable } from "./Pokemon"

export const trainerTable = pgTable(
  "trainers",
  {
    id: serial().primaryKey(),
    name: text().notNull(),
    class: pgTrainerClass().notNull(),
    doubleBattle: boolean().notNull(), // is also true for all gym leader rematches, which modifies the pokemon genders. need to check for explicitely
  },
  table => [unique().on(table.name)],
)

// TODO: add held items relations
export const trainerFightTable = pgTable(
  "trainer-fights",
  {
    id: serial().primaryKey(),
    matchNumber: integer().notNull(),
    // TODO: better solution?
    starterPokemonId: integer(), // can be either 252, 255, or 258 for gen3
    coordinates: integer().array(),
    calcAsDoubleBattle: boolean().notNull().default(false),

    locationId: integer().references(() => locationTable.id, { onDelete: "set null" }),
    trainerId: integer()
      .references(() => trainerTable.id, { onDelete: "cascade" })
      .notNull(),
  },
  table => [
    unique().on(table.trainerId, table.locationId, table.matchNumber, table.starterPokemonId),
  ],
)

export const trainerFightPokemonTable = pgTable("trainer-fight-pokemon", {
  id: serial().primaryKey(),
  trainerFightId: integer()
    .references(() => trainerFightTable.id, { onDelete: "cascade" })
    .notNull(),
  pokemonId: integer()
    .references(() => pokemonTable.id, { onDelete: "cascade" })
    .notNull(),
  iv: smallint().notNull(),
  level: smallint().notNull(),
  heldItem: integer().references(() => itemsTable.id, { onDelete: "set null" }),
})

export const trainerFightPokemonMoveTable = pgTable("trainer-fight-pokemon-moves", {
  fightPokemonId: integer()
    .references(() => trainerFightPokemonTable.id, { onDelete: "cascade" })
    .notNull(),
  moveId: integer()
    .references(() => moveTable.id, { onDelete: "cascade" })
    .notNull(),
})
