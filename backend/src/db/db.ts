import postgres from "postgres"
import { drizzle } from "drizzle-orm/postgres-js"
import * as pokemonSchemas from "@schemas/pokemon"
import * as sharedSchemas from "@schemas/sharedSchemas"

const client = postgres(process.env.DATABASE_URL!)

export const db = drizzle(client, {
  schema: { ...pokemonSchemas, ...sharedSchemas },
  logger: true,
})
