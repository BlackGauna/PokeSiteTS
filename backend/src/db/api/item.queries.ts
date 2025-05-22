import { eq, inArray } from "drizzle-orm"
import { db } from "../db"
import {
  itemPlacementsTable,
  locationTable,
  type ItemPlacementInsert,
  type ItemPlacementWithRelations,
} from "../schemas"

export const getItemPlacements = async () => {
  try {
    const result = await db.query.itemPlacementsTable.findMany({
      with: { item: true, location: true },
    })

    return result as ItemPlacementWithRelations[]
  } catch (error) {
    console.log(error)
  }
}

export const getItemPlacementsByLocation = async (locationName: string) => {
  return await db.query.itemPlacementsTable.findMany({
    where: inArray(
      itemPlacementsTable.locationId,
      db
        .select({ id: locationTable.id })
        .from(locationTable)
        .where(eq(locationTable.name, locationName)),
    ),
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
