import { index, integer, pgTable, serial, smallint, text, uniqueIndex } from "drizzle-orm/pg-core"
import { pokemonEncounterMethod } from "../enums/EncounterMethod"
import { regionsEnum } from "../enums/Region"
import { pokemonTable } from "./Pokemon"

export const locationTable = pgTable(
  "location",
  {
    id: serial("id").primaryKey(),
    name: text("name").notNull().unique(),
    region: regionsEnum().notNull(),
    boundsSw: integer().array().notNull(),
    boundsNe: integer().array().notNull(),
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
      .references(() => pokemonTable.id)
      .notNull(),

    encounterChance: smallint("encounter_chance").notNull(),
    encounterMethod: pokemonEncounterMethod("encounter_method").notNull(),
    minLevel: smallint("min_level").notNull(),
    maxLevel: smallint("max_level").notNull(),
  },
  table => [index().on(table.locationId, table.pokemonId)],
)
