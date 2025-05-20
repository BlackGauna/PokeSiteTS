import { db, type Transaction } from "@/db/db"
import {
  locationEncounterTable,
  locationTable,
  type LocationEncounterInsert,
  type LocationInsert,
  type LocationWithEncounters,
} from "@/db/schemas/Location"
import { eq, ilike } from "drizzle-orm"
import type { Region } from "../enums/Region"

export const getRegionLocations = async (regionEnum: Region): Promise<LocationWithEncounters[]> => {
  try {
    const locations = await db.query.locationTable.findMany({
      where: eq(locationTable.region, regionEnum),
      with: {
        encounters: {
          with: {
            pokemon: true,
          },
        },
      },
    })

    return locations
  } catch (error) {
    console.error("Error fetching region locations:", error)
    throw error
  }
}

export const getLocation = async (locationName: string) => {
  const location = await db.query.locationTable.findFirst({
    where: ilike(locationTable.name, locationName.toLowerCase()),
    with: {
      encounters: {
        with: {
          pokemon: true,
        },
      },
    },
  })

  if (!location) {
    return null
  }

  return location
}

export const insertLocationWithEncounters = async (
  location: LocationInsert,
  encounters: LocationEncounterInsert[],
) => {
  await db.transaction(async (tx: Transaction) => {
    const locationId = await insertLocationData(tx, location)

    if (encounters.length < 1) return

    await insertLocationEncounters(
      tx,
      encounters.map(encounter => ({ ...encounter, locationId })),
    )
  })
}

const insertLocationData = async (tx: Transaction, location: LocationInsert) => {
  const response = await tx
    .insert(locationTable)
    .values(location)
    .onConflictDoUpdate({
      target: [locationTable.name, locationTable.region],
      set: { name: location.name },
    })
    .returning({ id: locationTable.id })

  if (response.length < 1 || !response[0]) throw new Error("Could not save location")

  return response[0].id
}

const insertLocationEncounters = async (tx: Transaction, encounters: LocationEncounterInsert[]) => {
  if (encounters.length < 1) {
    console.log("empty")
  }
  await tx.insert(locationEncounterTable).values(encounters).onConflictDoNothing()
}
