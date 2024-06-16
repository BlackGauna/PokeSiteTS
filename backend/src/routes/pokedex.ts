import { Pokemon } from "@schemas/Pokemon"
import { eq } from "drizzle-orm"
import Elysia, { t } from "elysia"
// import { Hono } from "hono"
import { db } from "src/db/db"

const pokedexRoutes = new Elysia({ prefix: "/pokemon" })
  .get("/", async () => {
    const result = await db.query.Pokemon.findFirst({
      where: eq(Pokemon.name, "Rattata"),
      // with: { names: true },
    })
    return result
  })
  .get(
    "/:idOrName",
    async ({ params: { idOrName } }): Promise<PokemonWithNames> => {
      if (typeof idOrName === "number") {
        const result: PokemonWithNames = await db.query.Pokemon.findFirst({
          where: eq(Pokemon.id, idOrName),
          with: { names: true },
        })
        return result
      } else {
        const result: PokemonWithNames = await db.query.Pokemon.findFirst({
          where: eq(Pokemon.name, idOrName),
          with: { names: true },
        })
        return result
      }
    },
    {
      params: t.Object({
        idOrName: t.Union([t.Number(), t.String()]),
      }),
    },
  )

const getPokemonwithNames = async (idOrName: number | string) => {
  if (typeof idOrName === "number") {
    return await db.query.Pokemon.findFirst({
      where: eq(Pokemon.id, idOrName),
      with: { names: true },
    })
  } else {
    return await db.query.Pokemon.findFirst({
      where: eq(Pokemon.name, idOrName),
      with: { names: true },
    })
  }
}

export type PokemonWithNames = Awaited<ReturnType<typeof getPokemonwithNames>>
// const pokedexRoutes = new Hono().get("/", async c => {
//   const result = await db.query.Pokemons.findFirst({
//     with: { names: true },
//   })

//   c.json(result)
// })

export default pokedexRoutes
