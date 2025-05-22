import { addItemPlacement, getItemPlacements, getItems } from "@/db/api/item.queries"
import {
  itemPlacementsTable,
  type Item,
  type ItemPlacementInsert,
  type ItemPlacementWithItem,
} from "@/db/schemas"
import { createInsertSchema } from "drizzle-typebox"
import Elysia from "elysia"

const _createItemPlacement = createInsertSchema(itemPlacementsTable, {})

export const itemRoutes = new Elysia({ prefix: "items" })
  .get("/", async () => await getItemsRoute())
  .get("/placements", async () => await getItemPlacementsRoute())
  .post("/placements", async ({ body }) => await addItemPlacementRoute(body), {
    body: _createItemPlacement,
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
