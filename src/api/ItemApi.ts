import { treaty } from "@elysiajs/eden"
import type { App } from "../../backend/src/server"
import { useQuery } from "@tanstack/react-query"
import { PokemonType } from "@server/db/schemas/Pokemon"
const client = treaty<App>(import.meta.env.VITE_SERVER_URL)

export const useGetItemTest = async () => {
  const query = useQuery({
    queryKey: ["items"],
    queryFn: async () => {
      const res = await client.api.pokemon.index.get()
      if (res.error) {
        throw res.error
      }
      const pen: PokemonType = res.data

      return pen
    },
  })

  return query
}
