import { db, type Transaction } from "@/db/db"
import { locationEncounterTable, locationTable } from "@/db/schemas/Location"
import { pokemonTable } from "@/db/schemas/Pokemon"
import type {
  Location,
  LocationEncounterInsert,
  LocationInsert,
  LocationSearchEntry,
} from "@/server/types/Location"
import { eq, ilike } from "drizzle-orm"
import type { Region } from "../enums/Region"

export const getRegionLocations = async (regionEnum: Region): Promise<Location[]> => {
  try {
    const locations = await db
      .select({
        id: locationTable.id,
        name: locationTable.name,
        region: locationTable.region,
        boundsSw: locationTable.boundsSw,
        boundsNe: locationTable.boundsNe,
      })
      .from(locationTable)
      .where(eq(locationTable.region, regionEnum))

    return locations
  } catch (error) {
    console.error("Error fetching region locations:", error)
    throw error
  }
}

export const getRegionLocationSearchIndex = async (
  regionEnum: Region,
): Promise<LocationSearchEntry[]> => {
  const rows = await db
    .selectDistinct({
      locationName: locationTable.name,
      pokemonName: pokemonTable.name,
    })
    .from(locationTable)
    .innerJoin(locationEncounterTable, eq(locationEncounterTable.locationId, locationTable.id))
    .innerJoin(pokemonTable, eq(pokemonTable.id, locationEncounterTable.pokemonId))
    .where(eq(locationTable.region, regionEnum))

  const map = new Map<string, string[]>()
  for (const row of rows) {
    const existing = map.get(row.locationName)
    if (existing) {
      existing.push(row.pokemonName)
    } else {
      map.set(row.locationName, [row.pokemonName])
    }
  }

  return Array.from(map.entries()).map(([name, pokemonNames]) => ({ name, pokemonNames }))
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
