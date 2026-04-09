import { pgTable, primaryKey, smallint, text } from "drizzle-orm/pg-core"
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
