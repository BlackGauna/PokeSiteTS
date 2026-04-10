import { addItemPlacement, getItemPlacements, getItems } from "@/db/queries/item.queries"
import {
  itemPlacementInsertSchema,
  type Item,
  type ItemPlacementInsert,
  type ItemPlacementWithItem,
} from "@/server/types/Item"

import Elysia from "elysia"

export const itemRoutes = new Elysia({ prefix: "items" })
  .get("/", async () => await getItemsRoute())
  .get("/placements", async () => await getItemPlacementsRoute())
  .post("/placements", async ({ body }) => await addItemPlacementRoute(body), {
    body: itemPlacementInsertSchema,
  })

const getItemPlacementsRoute = async () => {
  const result = await getItemPlacements()

  return result as ItemPlacementWithItem[]
}

const getItemsRoute = async () => {
  const result = await getItems()

  return result as Item[]
}

const addItemPlacementRoute = async (body: ItemPlacementInsert) => {
  return await addItemPlacement(body)
}
