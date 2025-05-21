import { getItemPlacements } from "@/db/api/item.queries"
import type { ItemPlacementWithItem } from "@/db/schemas"
import Elysia from "elysia"

export const itemRoutes = new Elysia({ prefix: "items" }).get(
  "/placements",
  async () => await getItemPlacementsRoute(),
)

const getItemPlacementsRoute = async () => {
  const result = await getItemPlacements()

  return result as ItemPlacementWithItem[]
}
