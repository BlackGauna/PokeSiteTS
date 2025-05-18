import { treaty } from "@elysiajs/eden"
import { QueryClient, type QueryFunctionContext, useQuery } from "@tanstack/react-query"
import type { PokemonWithNamesAndMoves } from "../../backend/src/db/schemas/Pokemon"
import type { App } from "../../backend/src/server"

const client = treaty<App>(import.meta.env.VITE_SERVER_URL)

const pokemonKeys = {
  all: [{ scope: "pokemon" }] as const,
  detail: (name: string) => [{ ...pokemonKeys.all[0], name: name }] as const,
}

const fetchAllPokemon = async () => {
  const res = await client.api.pokemon.get()
  console.log("res", res.data)

  if (res.error) {
    throw res.error
  }
  const allPokemon = res.data as PokemonWithNamesAndMoves[]

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
  console.log("cache:", cachedPokemon)

  if (!cachedPokemon) {
    return undefined
  }

  cachedPokemon.map(pokemon => {
    if (pokemon.name === undefined) {
      console.log("pokemon without name", pokemon)
    }
  })

  const targetPokemon = cachedPokemon?.find(
    pokemon => pokemon.name.toLowerCase() === name.toLowerCase(),
  )

  // console.log("targetPokemon", targetPokemon)
  return targetPokemon
}
