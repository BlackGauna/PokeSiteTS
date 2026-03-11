import { pgTable, primaryKey, smallint, text } from "drizzle-orm/pg-core"
// import { createInsertSchema } from "drizzle-typebox"
import { relations } from "drizzle-orm"
import { createInsertSchema, createSelectSchema } from "drizzle-typebox"
import { locationEncounterTable } from "./Location"
import { pokemonMoveTable, type PokemonMove } from "./PokemonMove"
import { NamesTableBase, PokemonTypes } from "./Shared"

// TODO: add effort value gain when defeated, eg. 1 attack ev
export const pokemonTable = pgTable("pokemons", {
  id: smallint().primaryKey(),
  name: text().notNull().unique(),
  baseExp: smallint(),
  height: smallint(),
  weight: smallint(),
  hp: smallint().notNull(),
  atk: smallint().notNull(),
  spAtk: smallint().notNull(),
  def: smallint().notNull(),
  spDef: smallint().notNull(),
  speed: smallint().notNull(),
  types: PokemonTypes().array().notNull(),
  captureRate: smallint(),
})

export const pokemonNameTable = pgTable(
  "pokemon_names",
  {
    ...NamesTableBase,
    pokemonId: smallint("pokemon_id")
      .references(() => pokemonTable.id, { onDelete: "cascade" })
      .notNull(),
  },
  table => [primaryKey({ columns: [table.pokemonId, table.language] })],
)

export const pokemonRelations = relations(pokemonTable, ({ many }) => ({
  names: many(pokemonNameTable),
  moves: many(pokemonMoveTable),
  encounters: many(locationEncounterTable),
}))

export const pokemonNameRelations = relations(pokemonNameTable, ({ one }) => ({
  pokemon: one(pokemonTable, {
    fields: [pokemonNameTable.pokemonId],
    references: [pokemonTable.id],
  }),
}))

// TODO: NOT WORKING ON VS CODE FOR SOME REASON FOR RPC; NEED TO CHECK!!!! ON CLIENT-SIDE ONLY TYPES UNKNOWN SHOWN
export const insertPokemonName = createInsertSchema(pokemonNameTable)

export const selectPokemon = createSelectSchema(pokemonTable)
export type Pokemon = typeof pokemonTable.$inferSelect
export type PokemonName = typeof pokemonNameTable.$inferInsert

export type PokemonWithNames = Pokemon & { names: PokemonName[] }
export type PokemonWithNamesAndMoves = PokemonWithNames & { moves: PokemonMove[] }
