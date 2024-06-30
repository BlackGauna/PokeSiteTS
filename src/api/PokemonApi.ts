import { treaty } from "@elysiajs/eden"
import type { App } from "../../backend/src/server"
import { QueryClient, QueryFunctionContext, useQuery } from "@tanstack/react-query"
import { PokemonWithNamesAndMoves } from "@server/db/schemas/Pokemon"
const client = treaty<App>(import.meta.env.VITE_SERVER_URL)

const pokemonKeys = {
  all: [{ scope: "pokemon" }] as const,
  detail: (name: string) => [{ ...pokemonKeys.all[0], name: name }] as const,
}

const fetchAllPokemon = async () => {
  const res = await client.api.pokemon.index.get()

  if (res.error) {
    throw res.error
  }
  const allPokemon = res.data[0]

  return allPokemon
}

const fetchPokemon = async ({
  queryKey: [{ name }],
}: QueryFunctionContext<ReturnType<(typeof pokemonKeys)["detail"]>>) => {
  const res = await client.api.pokemon.id({ idOrName: name }).get()

  if (res.error) {
    throw res.error
  }
  const pokemon = res.data[0]

  return pokemon
}

export const useAllPokemon = () => {
  const query = useQuery({
    queryKey: pokemonKeys.all,
    queryFn: async () => fetchAllPokemon(),
  })

  return query
}

export const usePokemon = (name: string) => {
  return useQuery({
    queryKey: pokemonKeys.detail(name),
    queryFn: fetchPokemon,
    retry: false,
  })
}

export const searchPokemonInCache = (queryClient: QueryClient, name: string) => {
  const cachedPokemon = queryClient.getQueryData<PokemonWithNamesAndMoves[]>(pokemonKeys.all)
  // console.log("cache:", cachedPokemon)

  const targetPokemon = cachedPokemon?.find(
    pokemon => pokemon.name.toLowerCase() === name.toLowerCase(),
  )

  // console.log("targetPokemon", targetPokemon)
  return targetPokemon
}
