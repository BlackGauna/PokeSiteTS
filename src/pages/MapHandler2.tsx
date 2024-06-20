import L from "leaflet"
import "leaflet/dist/leaflet.css"
import { useCallback, useContext, useEffect, useState } from "react"
import { useMap } from "react-leaflet"
import * as GeoJSON from "geojson"
import { RasterCoordsContext } from "src/components/RasterCoordsProvider"
import "leaflet-search"
import "leaflet-search-types"
import "leaflet-search/dist/leaflet-search.min.css"

import * as overworldItemsFile from "../assets/OverworldItems.json"
import itemSprite from "../assets/sprites/item.png"
import itemStyles from "../styles/itemMarker.module.css"

const overworldItems = overworldItemsFile as GeoJSON.FeatureCollection<GeoJSON.Point>

function MapHandler2() {
  const { rc: contextRc, isInitialized: contextInitialized } = useContext(RasterCoordsContext)
  const [rc, setRc] = useState<L.RasterCoords | null>(null)
  const [isInitialized, setIsInitialized] = useState(contextInitialized)
  const [itemsLayer, setItemsLayer] = useState<L.LayerGroup | null>(null)

  const map = useMap()

  useEffect(() => {
    if (contextRc && contextInitialized) {
      setRc(contextRc)
      setIsInitialized(contextInitialized)
    }
  }, [contextRc, contextInitialized])

  useEffect(() => {
    console.log("itemsLayer", itemsLayer)
    if (itemsLayer) {
      console.log("add search")

      map.addLayer(itemsLayer)

      const searchLayer = L.layerGroup().addTo(map)
      const searchControl = new L.Control.Search({
        layer: searchLayer,
        // initial: false,
        // hideMarkerOnCollapse: true,
        position: "topright",
      })

      console.log("searchControl", searchControl)
      map.addControl(searchControl)
    }
  }, [itemsLayer, map])

  const coordsToLatlng = useCallback(
    (coords: [number, number] | [number, number, number] | number[]) => {
      const projected = rc!.unproject(coords as L.PointExpression)
      return projected
    },
    [rc],
  )

  const generateItemMarkers = useCallback(() => {
    const itemIcon = L.icon({
      iconUrl: itemSprite,
      iconSize: [50, 50],
      className: itemStyles.itemicon,
    })

    const layerGroup = new L.LayerGroup()

    overworldItems.features.forEach((itemFeature, index) => {
      const marker = new L.Marker(coordsToLatlng(itemFeature.geometry.coordinates), {
        title: itemFeature.properties!.name,
        icon: itemIcon,
      }).bindPopup(itemFeature.properties!.name)
      layerGroup.addLayer(marker)
    })

    setItemsLayer(layerGroup)
  }, [coordsToLatlng])

  useEffect(() => {
    if (rc && isInitialized) {
      generateItemMarkers()
    }
  }, [rc, isInitialized, generateItemMarkers])

  return null // As map and markers are handled via Leaflet directly
}

export default MapHandler2
