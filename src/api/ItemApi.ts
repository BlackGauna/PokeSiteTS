import { queryClient } from "@/main"
import { useMutation, useQuery } from "@tanstack/react-query"
import type {
  Item,
  ItemPlacementInsert,
  ItemPlacementWithRelations,
} from "../../backend/src/db/schemas/Item"
import { client } from "./client"

const itemKeys = {
  all: () => ["items"] as const,
  allPlacements: () => [...itemKeys.all(), "placements"] as const,
}

const getItemPlacements = async () => {
  const res = await client.api.items.placements.get()
  if (res.error) {
    throw res.error
  }

  return res.data as ItemPlacementWithRelations[]
}

const getItems = async () => {
  const res = await client.api.items.get()

  if (res.error) {
    throw res.error
  }

  return res.data as Item[]
}

export const useGetItemPlacements = () => {
  const query = useQuery({
    queryKey: itemKeys.allPlacements(),
    queryFn: async () => await getItemPlacements(),
  })

  return query
}

export const useGetItems = () => {
  const query = useQuery({
    queryKey: itemKeys.all(),
    queryFn: async () => await getItems(),
  })

  return query
}

// ######### Mutations ################

const addItemPlacement = async (itemPlacement: ItemPlacementInsert) => {
  const response = await client.api.items.placements.post(itemPlacement)

  if (response.status !== 200) {
    throw new Error("Error while saving item placement")
  }
}

export const useAddItemPlacement = () =>
  useMutation({
    mutationFn: addItemPlacement,
    onSuccess: () =>
      queryClient.invalidateQueries({
        queryKey: itemKeys.allPlacements(),
      }),
  })
