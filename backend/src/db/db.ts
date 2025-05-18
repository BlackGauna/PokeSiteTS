import * as moveSchemas from "@schemas/Move"
import * as pokemonSchemas from "@schemas/Pokemon"
import * as pokemonMoveSchemas from "@schemas/PokemonMove"
import * as sharedSchemas from "@schemas/Shared"
import { drizzle } from "drizzle-orm/postgres-js"
import postgres from "postgres"

const client = postgres(process.env.DATABASE_URL!)

export const db = drizzle(client, {
  schema: { ...pokemonSchemas, ...sharedSchemas, ...moveSchemas, ...pokemonMoveSchemas },
  logger: false,
})
