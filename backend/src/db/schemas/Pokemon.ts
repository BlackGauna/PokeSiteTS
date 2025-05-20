import { pgTable, primaryKey, smallint, text } from "drizzle-orm/pg-core"
// import { createInsertSchema } from "drizzle-typebox"
import { relations } from "drizzle-orm"
import { createInsertSchema, createSelectSchema } from "drizzle-typebox"
import { locationEncounterTable } from "./Location"
import { PokemonMove, type PokemonMoveType } from "./PokemonMove"
import { NamesTableBase, PokemonTypes } from "./Shared"

// TODO: add effort value gain when defeated, eg. 1 attack ev
export const Pokemon = pgTable("pokemons", {
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

export const PokemonName = pgTable(
  "pokemon_names",
  {
    ...NamesTableBase,
    pokemonId: smallint("pokemon_id")
      .references(() => Pokemon.id, { onDelete: "cascade" })
      .notNull(),
  },
  table => [primaryKey({ columns: [table.pokemonId, table.language] })],
)

export const pokemonRelations = relations(Pokemon, ({ many }) => ({
  names: many(PokemonName),
  moves: many(PokemonMove),
  encounters: many(locationEncounterTable),
}))

export const pokemonNameRelations = relations(PokemonName, ({ one }) => ({
  pokemon: one(Pokemon, {
    fields: [PokemonName.pokemonId],
    references: [Pokemon.id],
  }),
}))

// TODO: NOT WORKING ON VS CODE FOR SOME REASON FOR RPC; NEED TO CHECK!!!! ON CLIENT-SIDE ONLY TYPES UNKNOWN SHOWN
export const insertPokemonName = createInsertSchema(PokemonName)

export const selectPokemon = createSelectSchema(Pokemon)
export type PokemonType = typeof Pokemon.$inferSelect
export type PokemonNameType = typeof PokemonName.$inferInsert

export type PokemonWithNames = PokemonType & { names: PokemonNameType[] }
export type PokemonWithNamesAndMoves = PokemonWithNames & { moves: PokemonMoveType[] }
