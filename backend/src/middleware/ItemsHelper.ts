import { db } from "@/db/db"
import {
  itemPlacementsTable,
  itemsTable,
  type ItemInsert,
  type ItemPlacementInsert,
} from "@/db/schemas/Item"
import { itemLocations } from "imports/itemLocations"
import itemsJson from "../../imports/items.json"

export const insertItems = async () => {
  const itemNames: ItemInsert[] = itemsJson.items.map(name => ({ name: name }))

  try {
    await db.insert(itemsTable).values(itemNames).onConflictDoNothing()

    const dbItems = await db.query.itemsTable.findMany()
    const locations = await db.query.locationTable.findMany()

    const itemPlacements: ItemPlacementInsert[] = itemLocations.map(loc => ({
      itemId: dbItems.find(item => item.name === loc.name)!.id,
      amount: loc.amount,
      locationId: locations.find(location => location.name === loc.location)!.id,
      isHidden: loc.hidden,
      coordinates: loc.coordinates,
    }))

    await db.insert(itemPlacementsTable).values(itemPlacements).onConflictDoNothing()
  } catch (error) {
    console.log("error during insertItems")
    throw error
  }
}
