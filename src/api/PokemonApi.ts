import { treaty } from "@elysiajs/eden"
import type { App } from "../../backend/src/server"
import { QueryFunctionContext, useQuery } from "@tanstack/react-query"
const client = treaty<App>(import.meta.env.VITE_SERVER_URL)

const pokemonKeys = {
  all: [{ all: true }] as const,
  detail: (name: string) => [{ ...pokemonKeys.all[0], name }],
}

const fetchPokemon = async ({
  queryKey: [{ name }],
}: QueryFunctionContext<ReturnType<(typeof pokemonKeys)["detail"]>>) => {
  const res = await client.api.pokemon.id({ idOrName: name }).get()

  if (res.error) {
    throw res.error
  }
  const pen = res.data[0]

  return pen
}

export const useAllPokemon = async () => {
  const query = useQuery({
    queryKey: ["items"],
    queryFn: async () => {
      const res = await client.api.pokemon.index.get()
      if (res.error) {
        throw res.error
      }
      const pen = res.data

      return pen
    },
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
