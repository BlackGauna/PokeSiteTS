import { pgTable, smallint, text } from "drizzle-orm/pg-core"
import { createInsertSchema } from "drizzle-typebox"
import { NamesTable } from "./sharedSchemas"
import { relations } from "drizzle-orm"

export const Pokemons = pgTable("pokemon", {
  id: smallint("id").primaryKey(),
  name: text("name").notNull().unique(),
})

export const PokemonNames = pgTable("pokemonNames", {
  ...NamesTable,
  pokemonId: smallint("pokemonId")
    .references(() => Pokemons.id)
    .notNull(),
})

export const pokemonRelations = relations(Pokemons, ({ many }) => ({
  names: many(PokemonNames),
}))

export const pokemonNameRelations = relations(PokemonNames, ({ one }) => ({
  pokemon: one(Pokemons, {
    fields: [PokemonNames.pokemonId],
    references: [Pokemons.id],
  }),
}))

// NOT WORKING!!!! WITH ELYSIA ON CLIENT-SIDE ONLY TYPES UNKNOWN
// export const insertPokemon = createInsertSchema(Pokemons)
export const insertPokemonName = createInsertSchema(PokemonNames)
