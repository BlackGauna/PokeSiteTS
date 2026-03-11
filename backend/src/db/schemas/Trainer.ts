import { relations } from "drizzle-orm"
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

export const trainerRelations = relations(trainerTable, ({ many }) => ({
  fights: many(trainerFightTable),
}))

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

export const trainerFightRelations = relations(trainerFightTable, ({ one, many }) => ({
  trainer: one(trainerTable, {
    fields: [trainerFightTable.trainerId],
    references: [trainerTable.id],
  }),
  fightPokemon: many(trainerFightPokemonTable),
  location: one(locationTable, {
    fields: [trainerFightTable.locationId],
    references: [locationTable.id],
  }),
}))

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

export const trainerFightPokemonRelations = relations(
  trainerFightPokemonTable,
  ({ one, many }) => ({
    trainerFight: one(trainerFightTable, {
      fields: [trainerFightPokemonTable.trainerFightId],
      references: [trainerFightTable.id],
    }),
    pokemon: one(pokemonTable, {
      fields: [trainerFightPokemonTable.pokemonId],
      references: [pokemonTable.id],
    }),
    moves: many(trainerFightPokemonMoveTable),
  }),
)

export const trainerFightPokemonMoveTable = pgTable("trainer-fight-pokemon-moves", {
  fightPokemonId: integer()
    .references(() => trainerFightPokemonTable.id, { onDelete: "cascade" })
    .notNull(),
  moveId: integer()
    .references(() => moveTable.id, { onDelete: "cascade" })
    .notNull(),
})

export const trainerFightPokemonMoveRelations = relations(
  trainerFightPokemonMoveTable,
  ({ one }) => ({
    trainerFightPokemon: one(trainerFightPokemonTable, {
      fields: [trainerFightPokemonMoveTable.fightPokemonId],
      references: [trainerFightPokemonTable.id],
    }),
    move: one(moveTable, {
      fields: [trainerFightPokemonMoveTable.moveId],
      references: [moveTable.id],
    }),
  }),
)

export type TrainerInsert = typeof trainerTable.$inferInsert
export type Trainer = typeof trainerTable.$inferSelect

export type TrainerFightInsert = typeof trainerFightTable.$inferInsert
export type TrainerFight = typeof trainerFightTable.$inferSelect

export type TrainerFightPokemonInsert = typeof trainerFightPokemonTable.$inferInsert
export type TrainerFightPokemon = typeof trainerFightPokemonTable.$inferSelect

export type TrainerFightPokemonMoveInsert = typeof trainerFightPokemonMoveTable.$inferInsert
export type TrainerFightPokemonMove = typeof trainerFightPokemonMoveTable.$inferSelect

export type TrainerFightPokemonInsertWithMoves = TrainerFightPokemonInsert & { moves: number[] }
export type TrainerFightInsertAllInfo = TrainerFightInsert & {
  pokemons: TrainerFightPokemonInsertWithMoves[]
}
export type TrainerInsertAllInfo = TrainerInsert & {
  fights: TrainerFightInsertAllInfo[]
}
