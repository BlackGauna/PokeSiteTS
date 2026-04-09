import { drizzle } from "drizzle-orm/postgres-js"
import { allRelations } from "./relations"

export const db = drizzle(process.env.DATABASE_URL!, { relations: allRelations })

export type Transaction = Parameters<Parameters<(typeof db)["transaction"]>[0]>[0]
