import Elysia from "elysia"
// import { Hono } from "hono"
import { db } from "src/db/db"

const pokedexRoutes = new Elysia({ prefix: "/" }).get("/", async () => {
  const result = await db.query.Pokemons.findFirst({
    with: { names: true },
  })

  return result
})

// const pokedexRoutes = new Hono().get("/", async c => {
//   const result = await db.query.Pokemons.findFirst({
//     with: { names: true },
//   })

//   c.json(result)
// })

export default pokedexRoutes
