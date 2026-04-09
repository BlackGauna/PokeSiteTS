import L from "leaflet"
import "leaflet-rastercoords"
import { type ReactNode, createContext, useEffect, useMemo, useRef, useState } from "react"
import { useMap } from "react-leaflet"

export const RasterCoordsContext = createContext<RasterCoordsHandle>({
  rc: null,
  isInitialized: false,
})

export type RasterCoordsHandle = {
  rc: L.RasterCoords | null
  isInitialized: boolean
}

const RasterCoordsProvider = ({
  center,
  initialZoom,
  children,
  maxZoom,
}: {
  center: number[]
  initialZoom: number
  children?: ReactNode
  maxZoom: number
}) => {
  const rcRef = useRef<L.RasterCoords | null>(null)
  const [isInitialized, setIsInitialized] = useState(false)
  // const mapRef = useRef<L.Map | null>(null)
  const [imageWidth, imageHeight] = [13024, 6352]

  const path = "tiles/{z}/{x}/{y}.png"

  // const [rc, setRc] = useState<L.RasterCoords | null>(null)

  const map = useMap()
  useEffect(() => {
    // console.log("load")
    // console.log("after ref")
    if (!map) return
    // console.log("test")

    const newRc = new L.RasterCoords(map, [imageWidth, imageHeight])
    // setRc(newRc)
    rcRef.current = newRc
    setIsInitialized(true)

    const bounds = extendBounds(newRc.getMaxBounds(), 50)
    map.setMaxBounds(bounds)
    map.setView(bounds.getCenter(), initialZoom)
    map.setMinZoom(map.getBoundsZoom(newRc.getMaxBounds()))
    // map.setMinZoom(1)

    L.tileLayer(path, {
      className: "z-0",
      noWrap: true,
      bounds: newRc.getMaxBounds(),
      keepBuffer: 16,
      updateWhenZooming: false,
      updateWhenIdle: false,
      updateInterval: 100,
      tileSize: 256,
      maxNativeZoom: 6,
      maxZoom: maxZoom,
      attribution: "Onur",
    }).addTo(map)
  }, [imageWidth, imageHeight, map, center, initialZoom])

  const contextProviderValue = useMemo(
    () => ({
      rc: rcRef.current,
      isInitialized: isInitialized,
    }),
    [isInitialized, rcRef],
  )

  const extendBounds = (bounds: L.LatLngBounds, buffer: number) => {
    const sw = bounds.getSouthWest()
    const ne = bounds.getNorthEast()

    const newSw = L.latLng(sw.lat - buffer, sw.lng - buffer)
    const newNe = L.latLng(ne.lat + buffer, ne.lng + buffer)

    return L.latLngBounds(newSw, newNe)
  }

  return (
    <RasterCoordsContext.Provider value={contextProviderValue}>
      {children}
    </RasterCoordsContext.Provider>
  )
}

export default RasterCoordsProvider
