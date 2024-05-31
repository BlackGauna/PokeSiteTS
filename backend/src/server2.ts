import { Hono } from "hono"
import { cors } from "hono/cors"

import setupRoutes from "./routes/setup"
import pokedexRoutes from "./routes/pokedex"

const app = new Hono()
  .use("/", cors())
  .route("/api", pokedexRoutes)
  .route("/admin/setup", setupRoutes)

// const app = new Elysia()
//   .use(cors())
//   .group("/api", app => app.use(pokedexRoutes))
//   .group("/admin/setup", app => app.use(setupRoutes))
//   .listen(3000)

// console.log(
//   `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`,
// )

console.log("url:", process.env.DATABASE_URL)

export type App = typeof app
