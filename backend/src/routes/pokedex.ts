import { Pokemon, PokemonType, PokemonWithName } from "@schemas/Pokemon"
import { eq } from "drizzle-orm"
import Elysia, { t } from "elysia"
// import { Hono } from "hono"
import { db } from "src/db/db"

const getPokemon = async () => {
  const result = await db.query.Pokemon.findFirst({
    where: eq(Pokemon.name, "Rattata"),
  })

  // need to wrap the result in an array and type it as an array of the type because Treaty does not send correct typing to client side otherwise.
  return [result] as PokemonType[]
}

const pokedexRoutes = new Elysia({ prefix: "/pokemon" })
  .get("/", async () => getPokemon())

  .get("/id/:idOrName", async ({ params: { idOrName } }) => getPokemonwithNames(idOrName), {
    params: t.Object({
      idOrName: t.Union([t.String()]),
    }),
  })

const getPokemonwithNames = async (idOrName: number | string) => {
  try {
    if (typeof idOrName === "number") {
      const result = await db.query.Pokemon.findFirst({
        where: eq(Pokemon.id, idOrName),
        with: { names: true },
      })
      return [result] as PokemonWithName[]
    } else {
      const result = await db.query.Pokemon.findFirst({
        where: eq(Pokemon.name, idOrName),
        with: { names: true },
      })

      return [result] as PokemonWithName[]
    }
  } catch (error) {
    throw console.error(error)
  }
}

export default pokedexRoutes
