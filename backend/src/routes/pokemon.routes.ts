import Elysia, { t } from "elysia"
import { getAllPokemon, getPokemonByIdOrName } from "../db/queries/pokemon.queries"

const pokemonRoutes = new Elysia({ prefix: "/pokemon" })
  .get("/", async () => await getAllPokemon())
  .get("/id/:idOrName", async ({ params: { idOrName } }) => getPokemonByIdOrName(idOrName), {
    params: t.Object({
      idOrName: t.Union([t.String()]),
    }),
  })

export default pokemonRoutes
