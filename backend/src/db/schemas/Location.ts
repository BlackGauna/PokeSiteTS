import { relations } from "drizzle-orm"
import { integer, pgEnum, pgTable, serial, smallint, text } from "drizzle-orm/pg-core"
import { Pokemon } from "./Pokemon"

export const Location = pgTable("location", {
  id: serial("id").primaryKey(),
  name: text("name").notNull().unique(),
})

export const PokemonEncounterMethod = pgEnum("pokemon_encounter_method", [
  "walk",
  "old-rod",
  "good-rod",
  "super-rod",
  "surf",
  "rock-smash",
  "headbutt",
  "dark-grass",
  "grass-spots",
  "cave-spots",
  "bridge-spots",
  "super-rod-spots",
  "surf-spots",
  "yellow-flowers",
  "purple-flowers",
  "red-flowers",
  "rough-terrain",
  "gift",
  "gift-egg",
  "only-one",
])

export const LocationPokemon = pgTable("location_pokemon", {
  locationId: integer("location_id")
    .notNull()
    .references(() => Location.id),

  pokemonId: smallint("pokemon_id")
    .references(() => Pokemon.id)
    .notNull(),

  encounterChance: smallint("encounter_chance").notNull(),
  encounterMethod: PokemonEncounterMethod("encounter_method"),
  minLevel: smallint("min_level").notNull(),
  maxLevel: smallint("max_level").notNull(),
})

export const locationRelations = relations(Location, ({ many }) => ({
  pokemon: many(Pokemon),
}))
