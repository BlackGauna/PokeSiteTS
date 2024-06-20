import L from "leaflet"
import "leaflet/dist/leaflet.css"
import { useContext, useEffect, useRef, useState } from "react"
import { LayerGroup, Marker, Popup, useMap } from "react-leaflet"
import * as GeoJSON from "geojson"
import { RasterCoordsContext } from "src/components/RasterCoordsProvider"
import "leaflet-search"
import "leaflet-search-types"
import "leaflet-search/dist/leaflet-search.min.css"

import * as overworldItemsFile from "../assets/OverworldItems.json"
import itemSprite from "../assets/sprites/item.png"
import itemStyles from "../styles/itemMarker.module.css"
import { usePokemon } from "src/api/PokemonApi"

const overworldItems = overworldItemsFile as GeoJSON.FeatureCollection<GeoJSON.Point>
function MapHandler() {
  const { rc: contextRc, isInitialized: contextInitialized } = useContext(RasterCoordsContext)
  const [rc, setRc] = useState<L.RasterCoords | null>(null)
  const [isInitialized, setisInitialized] = useState(contextInitialized)

  const map = useMap()

  const items = useRef<L.LayerGroup | null>(null)
  const { data, isPending } = usePokemon("Rattata")

  if (!isPending) {
    console.log("data", data)
  }

  useEffect(() => {
    if (contextRc && contextInitialized) {
      setRc(contextRc)
      setisInitialized(contextInitialized)
    }
  }, [contextRc, contextInitialized])

  useEffect(() => {
    //... adding data in items layer containing item markers ...
    const searchControl = new L.Control.Search({
      layer: items.current!,
      initial: false,
      delayType: 200,
      marker: undefined,
    })
    searchControl.on("search:locationfound", e => {
      e.layer.openPopup()
    })
    map.addControl(searchControl)

    return () => {
      map.removeControl(searchControl)
    }
  }, [map])

  const generateItemMarkers = () => {
    const itemIcon = L.icon({
      iconUrl: itemSprite,
      iconSize: [50, 50],
      className: itemStyles.itemicon,
    })

    const group =
      // <LayerGroup ref={items}>
      overworldItems.features.map((itemFeature, index) => {
        const marker = (
          <Marker
            title={itemFeature.properties!.name}
            key={index}
            icon={itemIcon}
            position={coordsToLatlng(itemFeature.geometry.coordinates)}
          >
            <Popup>{itemFeature.properties!.name}</Popup>
          </Marker>
        )
        return marker
      })
    // </LayerGroup>
    return group
  }

  const coordsToLatlng = (coords: [number, number] | [number, number, number] | number[]) => {
    const projected = rc!.unproject(coords as L.PointExpression)
    // const projected = latLng(coords)
    return projected
  }

  return (
    <>
      <LayerGroup ref={items}>{rc && isInitialized && generateItemMarkers()}</LayerGroup>
    </>
  )
}

export default MapHandler
