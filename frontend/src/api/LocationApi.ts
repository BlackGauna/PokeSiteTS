import { useQuery } from "@tanstack/react-query"
import type { Location, LocationSearchEntry, LocationWithEncounters } from "../../../backend/src/types/Location"
import { client } from "./client"

const locationKeys = {
  all: ["locations"] as const,
  allfromRegion: (regionName: string) => [...locationKeys.all, regionName] as const,
  searchIndex: (regionName: string) => [...locationKeys.all, regionName, "searchIndex"] as const,
  location: (name: string) => [...locationKeys.all, name] as const,
}

const fetchRegionLocations = async (regionName: string) => {
  const res = await client.api.locations.region({ name: regionName }).get()

  if (res.error) {
    throw res.error
  }

  return res.data as Location[]
}

const fetchRegionSearchIndex = async (regionName: string) => {
  const res = await client.api.locations.region({ name: regionName })["search-index"].get()

  if (res.error) {
    throw res.error
  }

  return res.data as LocationSearchEntry[]
}

const fetchLocation = async (locationName: string) => {
  const res = await client.api.locations.location({ name: locationName }).get()

  if (res.error) {
    throw res.error
  }

  return res.data as LocationWithEncounters
}

export const useGetRegionLocations = (regionName: string) => {
  return useQuery({
    queryKey: locationKeys.allfromRegion(regionName),
    queryFn: async () => fetchRegionLocations(regionName),
  })
}

export const useGetRegionSearchIndex = (regionName: string) => {
  return useQuery({
    queryKey: locationKeys.searchIndex(regionName),
    queryFn: async () => fetchRegionSearchIndex(regionName),
  })
}

export const useGetLocation = (locationName: string | null) => {
  return useQuery({
    queryKey: locationKeys.location(locationName ?? ""),
    queryFn: async () => fetchLocation(locationName!),
    enabled: locationName !== null,
  })
}
