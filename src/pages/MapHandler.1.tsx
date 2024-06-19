import L from "leaflet"
import { useContext, useEffect, useRef, useState } from "react"
import { GeoJSON as GeoJSONLayer } from "react-leaflet"
import { RasterCoordsContext } from "src/components/RasterCoordsProvider"
import { overworldItems } from "./MapHandler"

export function MapHandler() {
  const { rc: contextRc, isInitialized: contextInitialized } = useContext(RasterCoordsContext)
  const [rc, setRc] = useState<L.RasterCoords | null>(null)
  const [isInitialized, setisInitialized] = useState(contextInitialized)

  const geoLayer = useRef<L.GeoJSON | null>(null)
  useEffect(() => {
    if (contextRc && contextInitialized) {
      setRc(contextRc)
      setisInitialized(contextInitialized)
    }
  }, [contextRc, contextInitialized])

  const coordsToLatlng = (coords: [number, number] | [number, number, number]) => {
    const projected = rc!.unproject(coords as L.PointExpression)
    // const projected = latLng(coords)
    return projected
  }

  return (
    <>
      {rc && isInitialized && (
        <GeoJSONLayer
          ref={geoLayer}
          data={overworldItems}
          coordsToLatLng={coords => coordsToLatlng(coords)}
        />
      )}
    </>
  )
}
