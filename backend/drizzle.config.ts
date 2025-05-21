import { defineConfig } from "drizzle-kit"

export default defineConfig({
  schema: ["./src/db/schemas/*", "./src/db/enums/*"],
  dialect: "postgresql",
  out: "./src/db/migrations",
  dbCredentials: {
    url: process.env.DATABASE_URL!,
  },
  verbose: true,
  strict: true,
})
