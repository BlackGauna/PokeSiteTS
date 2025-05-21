import { eq, inArray } from "drizzle-orm"
import { db } from "../db"
import { itemPlacementsTable, locationTable, type ItemPlacementWithItem } from "../schemas"

export const getItemPlacements = async () => {
  try {
    const result = await db.query.itemPlacementsTable.findMany({
      with: { item: true },
    })

    return result as ItemPlacementWithItem[]
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
