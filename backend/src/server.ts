// import { Hono } from "hono"

import setupRoutes from "./routes/setup"
import pokedexRoutes from "./routes/pokedex"
import Elysia from "elysia"
import cors from "@elysiajs/cors"
import { testGetPokemonFromApi } from "./middleware/FillPokedex"

const app = new Elysia()
  .use(cors())
  .get("/", () => "Hi")
  .group("/api", app => app.use(pokedexRoutes))
  .group("/admin/setup", app => app.use(setupRoutes))
  .listen(3000)

console.log(`🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`)

const test = testGetPokemonFromApi()
console.log(test)

export type App = typeof app
