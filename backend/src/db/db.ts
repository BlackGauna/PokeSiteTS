import postgres from "postgres"
import { drizzle } from "drizzle-orm/postgres-js"
import * as pokemonSchemas from "@schemas/Pokemon"
import * as sharedSchemas from "@schemas/Shared"
import * as moveSchemas from "@schemas/Move"

const client = postgres(process.env.DATABASE_URL!)

export const db = drizzle(client, {
  schema: { ...pokemonSchemas, ...sharedSchemas, ...moveSchemas },
  logger: true,
})
