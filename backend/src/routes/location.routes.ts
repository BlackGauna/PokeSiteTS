import { getLocation, getRegionLocations } from "@/db/api/location.queries"
import { parseRegion } from "@/db/enums/Region"
import { type LocationWithEncounters } from "@/db/schemas/Location"
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

  const region = await getRegionLocations(regionEnum)

  if (!region) {
    return status(HttpStatusEnum.HTTP_404_NOT_FOUND, "Region not found")
  }

  return region as unknown as LocationWithEncounters[]
}
