// import { Hono } from "hono"

import setupRoutes from "./routes/setup"
import pokedexRoutes from "./routes/pokedex"
import Elysia from "elysia"
import cors from "@elysiajs/cors"

// const app = new Hono()
//   .use("/", cors())
//   .route("/api", pokedexRoutes)
//   .route("/admin/setup", setupRoutes)

const app = new Elysia()
  .onAfterHandle(({ request, set }) => {
    // Only process CORS requests
    if (request.method !== "OPTIONS") return

    const allowHeader = set.headers["Access-Control-Allow-Headers"]
    if (allowHeader === "*") {
      set.headers["Access-Control-Allow-Headers"] =
        request.headers.get("Access-Control-Request-Headers") ?? ""
    }
  })
  .use(cors())
  .get("/", () => "Hi")
  .group("/api", app => app.use(pokedexRoutes))
  .group("/admin/setup", app => app.use(setupRoutes))
  .listen(3000)

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`,
)

console.log("url:", process.env.DATABASE_URL)

export type App = typeof app
