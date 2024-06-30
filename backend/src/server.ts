// import { Hono } from "hono"

import setupRoutes from "./routes/setup"
import pokedexRoutes from "./routes/pokedex"
import Elysia from "elysia"
import cors from "@elysiajs/cors"
import { getOverworldLocations, test } from "./middleware/LocationHelper"
// import { preparePokemonAndMoves } from "./middleware/FillPokedex"

const app = new Elysia()
  .use(cors())
  .get("/", () => "Hi")
  .group("/api", app => app.use(pokedexRoutes))
  .group("/admin/setup", app => app.use(setupRoutes))
  .listen(3000)

console.log(`🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`)
console.log("database:", process.env.DATABASE_URL!)

// const test = testGetPokemonFromApi()
// console.log(test)

// preparePokemonAndMoves(1, 386)
//   .then(() => {
//     console.log("Inserted all data to db")
//   })
//   .catch(error => {
//     console.error("An error occured during preparePokemonAndMoves")
//     throw error
//   })

// getOverworldLocations("hoenn")

export type App = typeof app
