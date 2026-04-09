import cors from "@elysiajs/cors"
import Elysia from "elysia"
import { HttpStatusCode } from "elysia-http-status-code"
import { itemRoutes } from "./routes/item.routes"
import { locationRoutes } from "./routes/location.routes"
import pokemonRoutes from "./routes/pokemon.routes"

const app = new Elysia()
  .use(cors({ origin: "*" }))
  .use(HttpStatusCode())
  .onRequest(request => {
    console.log(request.request.url)
  })
  .get("/", () => "Hi")
  .group("/api", app => app.use(pokemonRoutes))
  .group("/api", app => app.use(locationRoutes))
  .group("/api", app => app.use(itemRoutes))
  .listen(3000)

console.log(`🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`)
console.log("database:", process.env.DATABASE_URL!)

export type App = typeof app
