import { useQuery } from "@tanstack/react-query"
import type { LocationWithEncounters } from "../../backend/src/db/schemas/Location"
import { client } from "./client"

const locationKeys = {
  all: ["locations"] as const,
  allfromRegion: (regionName: string) => [...locationKeys.all, regionName] as const,
  location: (name: string) => [...locationKeys.all, name] as const,
}

const fetchRegionLocations = async (regionName: string) => {
  const res = await client.api.locations.region({ name: regionName }).get()

  if (res.error) {
    throw res.error
  }

  return res.data as LocationWithEncounters[]
}

export const useGetRegionLocations = (regionName: string) => {
  const query = useQuery({
    queryKey: locationKeys.allfromRegion(regionName),
    queryFn: async () => fetchRegionLocations(regionName),
  })

  return query
}
