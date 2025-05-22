// import { Hono } from "hono"

import cors from "@elysiajs/cors"
import Elysia from "elysia"
import { HttpStatusCode } from "elysia-http-status-code"
import { itemRoutes } from "./routes/item.routes"
import { locationRoutes } from "./routes/location.routes"
import pokedexRoutes from "./routes/pokedex"

const app = new Elysia()
  .use(cors({ origin: "*" }))
  .use(HttpStatusCode())
  .onRequest(request => {
    console.log(request.request.url)
  })
  .get("/", () => "Hi")
  .group("/api", app => app.use(pokedexRoutes))
  .group("/api", app => app.use(locationRoutes))
  .group("/api", app => app.use(itemRoutes))
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

// await getAndSaveLocations()
// const test = await getRegionLocations("hoenn-route-101-area")
// console.log(test)

// await insertItems()

export type App = typeof app
