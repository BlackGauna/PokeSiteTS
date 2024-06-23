import { Pokemon, PokemonWithNamesAndMoves } from "@schemas/Pokemon"
import { eq } from "drizzle-orm"
import Elysia, { t } from "elysia"
// import { Hono } from "hono"
import { db } from "src/db/db"

const getAllPokemon = async () => {
  const result = await db.query.Pokemon.findMany({
    with: { moves: true, names: true },
  })

  // need to wrap the result in an array and type it as an array of the type because Treaty does not send correct typing to client side otherwise.
  return [result] as PokemonWithNamesAndMoves[][]
}

const pokedexRoutes = new Elysia({ prefix: "/pokemon" })
  .get("/", async () => getAllPokemon())

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
        with: { names: true, moves: true },
      })
      return [result] as PokemonWithNamesAndMoves[]
    } else {
      const result = await db.query.Pokemon.findFirst({
        where: eq(Pokemon.name, idOrName),
        with: { names: true, moves: true },
      })

      return [result] as PokemonWithNamesAndMoves[]
    }
  } catch (error) {
    throw console.error(error)
  }
}

export default pokedexRoutes
