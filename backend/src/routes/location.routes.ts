import { parseRegion } from "@/db/enums/Region"
import {
  getLocation,
  getRegionLocationSearchIndex,
  getRegionLocations,
} from "@/db/queries/location.queries"
import Elysia, { status, t } from "elysia"
import { HttpStatusEnum } from "elysia-http-status-code/status"

export const locationRoutes = new Elysia({ prefix: "locations" })
  .get("/location/:name", async ({ params: { name } }) => await getLocationRoute(name), {
    params: t.Object({
      name: t.String(),
    }),
  })
  .get("/region/:name", async ({ params: { name } }) => await getRegionLocationsRoute(name), {
    params: t.Object({
      name: t.String(),
    }),
  })
  .get(
    "/region/:name/search-index",
    async ({ params: { name } }) => await getRegionSearchIndexRoute(name),
    {
      params: t.Object({
        name: t.String(),
      }),
    },
  )

const getLocationRoute = async (locationName: string) => {
  const location = await getLocation(locationName)
  if (!location) {
    return status(HttpStatusEnum.HTTP_404_NOT_FOUND, "Location not found")
  }
  return location
}

const getRegionLocationsRoute = async (regionName: string) => {
  const regionEnum = parseRegion(regionName)
  if (!regionEnum) {
    return status(HttpStatusEnum.HTTP_400_BAD_REQUEST, "Region name is not valid")
  }

  const locations = await getRegionLocations(regionEnum)
  return locations
}

const getRegionSearchIndexRoute = async (regionName: string) => {
  const regionEnum = parseRegion(regionName)
  if (!regionEnum) {
    return status(HttpStatusEnum.HTTP_400_BAD_REQUEST, "Region name is not valid")
  }

  return await getRegionLocationSearchIndex(regionEnum)
}
