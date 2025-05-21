import * as enums from "@/db/enums"
import * as schemas from "@schemas/index"
import { drizzle } from "drizzle-orm/postgres-js"
import postgres from "postgres"

const client = postgres(process.env.DATABASE_URL!)

export const db = drizzle(client, {
  schema: {
    ...schemas,
    ...enums,
  },
  logger: false,
})

export type Transaction = Parameters<Parameters<(typeof db)["transaction"]>[0]>[0]
