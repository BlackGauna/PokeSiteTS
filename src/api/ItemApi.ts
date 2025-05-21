import { useQuery } from "@tanstack/react-query"
import type { ItemPlacementWithItem } from "../../backend/src/db/schemas/Item"
import { client } from "./client"

const itemKeys = {
  all: ["items"] as const,
  allPlacements: () => [...itemKeys.all, "placements"] as const,
}

const getItemPlacements = async () => {
  const res = await client.api.items.placements.get()
  if (res.error) {
    throw res.error
  }

  return res.data as ItemPlacementWithItem[]
}

export const useGetItemPlacements = () => {
  const query = useQuery({
    queryKey: itemKeys.allPlacements(),
    queryFn: async () => await getItemPlacements(),
  })

  return query
}
