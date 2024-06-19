// type Props = {}
import L from "leaflet"
import "leaflet/dist/leaflet.css"
import { useContext, useEffect, useState } from "react"
import { LayerGroup, Marker, Popup } from "react-leaflet"
import * as GeoJSON from "geojson"
import { RasterCoordsContext } from "src/components/RasterCoordsProvider"

import * as overworldItemsFile from "../assets/OverworldItems.json"
import itemSprite from "../assets/sprites/item.png"
import itemStyles from "../styles/itemMarker.module.css"

const overworldItems = overworldItemsFile as GeoJSON.FeatureCollection<GeoJSON.Point>
function MapHandler() {
  const { rc: contextRc, isInitialized: contextInitialized } = useContext(RasterCoordsContext)
  const [rc, setRc] = useState<L.RasterCoords | null>(null)
  const [isInitialized, setisInitialized] = useState(contextInitialized)

  useEffect(() => {
    if (contextRc && contextInitialized) {
      setRc(contextRc)
      setisInitialized(contextInitialized)
    }
  }, [contextRc, contextInitialized])

  const generateItemMarkers = () => {
    const itemIcon = L.icon({
      iconUrl: itemSprite,
      iconSize: [50, 50],
      className: itemStyles.itemicon,
    })
    return (
      <LayerGroup>
        {overworldItems.features.map((itemFeature, index) => {
          const marker = (
            <Marker
              key={index}
              icon={itemIcon}
              position={coordsToLatlng(itemFeature.geometry.coordinates)}
            >
              <Popup>{itemFeature.properties!.name}</Popup>
            </Marker>
          )
          return marker
        })}
      </LayerGroup>
    )
  }

  const coordsToLatlng = (coords: [number, number] | [number, number, number] | number[]) => {
    const projected = rc!.unproject(coords as L.PointExpression)
    // const projected = latLng(coords)
    return projected
  }

  const generateItemMarkerPopup = (feature: GeoJSON.Feature<GeoJSON.Point>, layer: L.Layer) => {
    const popup: L.Popup = feature.properties!.name

    layer.bindPopup(popup)
  }

  // TODO: Maybe replace GeoJSONlayer with LayerGroup of Markers and Popups generated from the json manually. Because online some (many?) seem to do it that way
  return (
    <>
      {rc &&
        isInitialized && //   data={overworldItems} //   ref={geoLayer} // <GeoJSONLayer
        //   coordsToLatLng={coords => coordsToLatlng(coords)}
        //   onEachFeature={(feature: GeoJSON.Feature<GeoJSON.Point>, layer) =>
        //     generateItemMarkerPopup(feature, layer)
        //   }
        // />
        generateItemMarkers()}
    </>
  )
}

export default MapHandler
