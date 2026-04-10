import type { ItemPlacementInsert, ItemPlacementWithRelations } from "@/server/types/Item"
import { db } from "../db"
import { itemPlacementsTable } from "../schemas/Item"

export const getItemPlacements = async () => {
  try {
    const result = await db.query.itemPlacementsTable.findMany({
      with: { item: true, location: true },
    })

    return result as unknown as ItemPlacementWithRelations[]
  } catch (error) {
    console.log(error)
  }
}

export const getItemPlacementsByLocation = async (locationName: string) => {
  const location = await db.query.locationTable.findFirst({
    where: { name: locationName },
    columns: { id: true },
  })
  if (!location) return []
  return await db.query.itemPlacementsTable.findMany({
    where: { locationId: location.id },
  })
}

export const addItemPlacement = async (itemPlacement: ItemPlacementInsert) => {
  try {
    return await db
      .insert(itemPlacementsTable)
      .values(itemPlacement)
      .onConflictDoUpdate({
        target: [itemPlacementsTable.coordinates, itemPlacementsTable.locationId],
        set: {
          itemId: itemPlacement.itemId,
          amount: itemPlacement.amount,
          isHidden: itemPlacement.isHidden,
        },
      })
  } catch (error) {
    throw new Error(`Could not add item placement: ${itemPlacement}`)
  }
}

export const getItems = async () => {
  try {
    const result = await db.query.itemsTable.findMany({})

    return result
  } catch (error) {
    console.log(error)
  }
}
