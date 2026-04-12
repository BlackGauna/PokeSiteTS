import type { PokemonPercentiles } from "@/server/db/queries/pokemon.queries"
import type { PokemonWithNamesAndMoves } from "@/server/types/Pokemon"
import { QueryClient, type QueryFunctionContext, useQuery } from "@tanstack/react-query"
import { client } from "./client"

export type PokemonDetail = {
  pokemon: PokemonWithNamesAndMoves
  percentiles: PokemonPercentiles
}

const pokemonKeys = {
  all: ["pokemon"] as const,
  detail: (name: string) => [{ ...pokemonKeys.all, name: name }] as const,
}

const fetchAllPokemon = async () => {
  const res = await client.api.pokemon.get()

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

  return res.data as unknown as PokemonDetail
}

export const useAllPokemon = () => {
  const query = useQuery({
    queryKey: pokemonKeys.all,
    queryFn: async () => fetchAllPokemon(),
  })

  return query
}

export const usePokemon = (name: string, enabled = true) => {
  return useQuery({
    queryKey: pokemonKeys.detail(name),
    queryFn: fetchPokemon,
    retry: false,
    enabled,
  })
}

export const searchPokemonInCache = (queryClient: QueryClient, name: string) => {
  const cachedPokemon = queryClient.getQueryData<PokemonWithNamesAndMoves[]>(pokemonKeys.all)
  // console.log("cache:", cachedPokemon)

  if (!cachedPokemon) {
    return undefined
  }

  const targetPokemon = cachedPokemon?.find(
    pokemon => pokemon.name.toLowerCase() === name.toLowerCase(),
  )

  // console.log("targetPokemon", targetPokemon)
  return targetPokemon
}
