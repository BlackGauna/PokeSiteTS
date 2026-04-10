import { db, type Transaction } from "@/db/db"
import { locationEncounterTable, locationTable } from "@/db/schemas/Location"
import type {
  LocationEncounterInsert,
  LocationInsert,
  LocationWithEncounters,
} from "@/server/types/Location"
import { ilike } from "drizzle-orm"
import type { Region } from "../enums/Region"

export const getRegionLocations = async (regionEnum: Region): Promise<LocationWithEncounters[]> => {
  try {
    const locations = await db.query.locationTable.findMany({
      where: { region: regionEnum },
      with: {
        encounters: {
          with: {
            pokemon: true,
          },
        },
      },
    })

    return locations as unknown as LocationWithEncounters[]
  } catch (error) {
    console.error("Error fetching region locations:", error)
    throw error
  }
}

export const getLocation = async (locationName: string) => {
  const [row] = await db
    .select({ id: locationTable.id })
    .from(locationTable)
    .where(ilike(locationTable.name, locationName.toLowerCase()))
    .limit(1)

  if (!row) return null

  const location = await db.query.locationTable.findFirst({
    where: { id: row.id },
    with: {
      encounters: {
        with: {
          pokemon: true,
        },
      },
    },
  })

  return location ?? null
}

export const getLocationId = async (locationName: string) => {
  const [row] = await db
    .select({ id: locationTable.id })
    .from(locationTable)
    .where(ilike(locationTable.name, locationName.toLowerCase()))
    .limit(1)

  if (!row) throw new Error(`Could not find location ${locationName}`)

  return row.id
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
      set: { boundsSw: location.boundsSw, boundsNe: location.boundsNe },
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
