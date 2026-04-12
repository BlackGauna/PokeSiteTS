import Elysia, { t } from "elysia"
import {
  getAllPokemon,
  getPokemonByIdOrName,
  getPokemonPercentiles,
} from "../db/queries/pokemon.queries"
import type { Type } from "../db/schemas/Shared"

const pokemonRoutes = new Elysia({ prefix: "/pokemon" })
  .get("/", async () => await getAllPokemon())
  .get(
    "/id/:idOrName",
    async ({ params: { idOrName } }) => {
      const result = await getPokemonByIdOrName(idOrName)
      if (!Array.isArray(result) || result.length === 0) return result // propagate 404

      const pokemon = result[0]
      const percentiles = await getPokemonPercentiles(pokemon.id, pokemon.types as Type[])
      return { pokemon, percentiles }
    },
    {
      params: t.Object({
        idOrName: t.Union([t.String()]),
      }),
    },
  )

export default pokemonRoutes
