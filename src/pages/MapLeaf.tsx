// type Props = {}
import L from "leaflet"
import "leaflet/dist/leaflet.css"
import { useEffect, useRef } from "react"
// eslint-disable-next-line @typescript-eslint/no-var-requires
import { treaty } from "@elysiajs/eden"
import { useQueryClient } from "@tanstack/react-query"
import "leaflet-rastercoords"
import type { PokemonType } from "../../backend/src/db/schemas/Pokemon"
import type { App } from "../../backend/src/server"
import * as overworldItems from "../assets/OverworldItems.json"
import "../utils/leaflet-zoom"

const client = treaty<App>(import.meta.env.VITE_SERVER_URL)

// Custom hook for fetching data
const fetchItemData = async (): Promise<PokemonType> => {
  const res = await client.api.pokemon.get()
  if (res.error) {
    throw res.error
  }
  return res.data[0]
}

function MapLeaf() {
  const queryClient = useQueryClient()

  const mapContainer = useRef<HTMLDivElement>(null)
  const map = useRef<L.Map>()
  const rc = useRef<L.RasterCoords>()

  const [imageWidth, imageHeight] = [13024, 6352]

  useEffect(() => {
    if (map.current) return // stops map from intializing more than once

    map.current = new L.Map(mapContainer.current!, {
      crs: L.CRS.Simple,
      minZoom: 2,
      maxZoom: 10,
      // zoomDelta: 0.25,
      // zoomSnap: 0,
    })

    rc.current = new L.RasterCoords(map.current, [imageWidth, imageHeight])
    map.current.setView(rc.current.unproject([7900, 4500]), 5)

    map.current.on("zoomend", () => {
      console.log(
        "current padding",
        (1200 - map.current!.getZoom() * 100) / Math.max(imageWidth, imageHeight),
      )
    })

    // add padding to bounds
    // TODO: refine padding value so that for each zoom level is good
    const paddedBounds = rc.current.getMaxBounds().pad(1000 / Math.max(imageWidth, imageHeight))
    // Create a Tile Layer inside Leaflet
    L.tileLayer("tiles/{z}/{x}/{y}.png", {
      noWrap: true,
      minNativeZoom: 0,
      maxNativeZoom: 8,
      maxZoom: 10,
      bounds: paddedBounds,
      // nativeZooms: [...Array(8).keys()],
    }).addTo(map.current)

    map.current?.setMaxBounds(paddedBounds)

    L.geoJSON(overworldItems as GeoJSON.GeoJsonObject, {
      pointToLayer: (_, coordsYX) => {
        const projectedCoords = rc.current!.unproject([coordsYX.lng, coordsYX.lat])
        console.log("coords", projectedCoords)
        return L.marker(projectedCoords)
      },

      onEachFeature: (feature, layer) => {
        if (feature.properties && feature.properties.name) {
          layer.on("click", async () => {
            const itemName = feature.properties.name

            try {
              // Check if data is already cached
              let itemData = queryClient.getQueryData(["item", itemName])

              if (!itemData) {
                // Fetch the data if not cached
                itemData = await queryClient.fetchQuery({
                  queryKey: ["item", itemName],
                  queryFn: () => fetchItemData(),
                })
              }

              layer.unbindPopup()
              // Bind the popup with the fetched data
              layer.bindPopup(JSON.stringify(itemData)).openPopup()
            } catch (error) {
              console.error("Failed to fetch item data:", error)
              layer.unbindPopup()
              layer.bindPopup("Failed to load data").openPopup()
            }
          })
        }
      },
    }).addTo(map.current)
  })

  return (
    <>
      <div className="h-screen w-screen" ref={mapContainer}></div>
    </>
  )
}

export default MapLeaf
