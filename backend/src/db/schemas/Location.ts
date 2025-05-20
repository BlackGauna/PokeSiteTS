import { relations } from "drizzle-orm"
import { index, integer, pgTable, serial, smallint, text, uniqueIndex } from "drizzle-orm/pg-core"
import { pokemonEncounterMethod } from "../enums/EncounterMethod"
import { regionsEnum } from "../enums/Region"
import { Pokemon, type PokemonType } from "./Pokemon"

export const locationTable = pgTable(
  "location",
  {
    id: serial("id").primaryKey(),
    name: text("name").notNull().unique(),
    region: regionsEnum().notNull(),
    boundsSw: integer().array(2).notNull(),
    boundsNe: integer().array(2).notNull(),
  },
  table => [uniqueIndex().on(table.name, table.region)],
)

export const locationEncounterTable = pgTable(
  "location_encounters",
  {
    locationId: integer("location_id")
      .notNull()
      .references(() => locationTable.id),

    pokemonId: smallint("pokemon_id")
      .references(() => Pokemon.id)
      .notNull(),

    encounterChance: smallint("encounter_chance").notNull(),
    encounterMethod: pokemonEncounterMethod("encounter_method"),
    minLevel: smallint("min_level").notNull(),
    maxLevel: smallint("max_level").notNull(),
  },
  table => [index().on(table.locationId, table.pokemonId)],
)

export const locationRelations = relations(locationTable, ({ many }) => ({
  encounters: many(locationEncounterTable),
}))

export const locationPokemonRelations = relations(locationEncounterTable, ({ one }) => ({
  location: one(locationTable, {
    fields: [locationEncounterTable.locationId],
    references: [locationTable.id],
  }),
  pokemon: one(Pokemon, {
    fields: [locationEncounterTable.pokemonId],
    references: [Pokemon.id],
  }),
}))

export type LocationInsert = typeof locationTable.$inferInsert
export type Location = typeof locationTable.$inferSelect
export type LocationWithEncounters = Location & { encounters: LocationEncounterWithPokemon[] }
export type LocationEncounterInsert = typeof locationEncounterTable.$inferInsert
export type LocationEncounter = typeof locationEncounterTable.$inferSelect
export type LocationEncounterWithPokemon = LocationEncounter & { pokemon: PokemonType }
