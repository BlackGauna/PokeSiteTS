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

function extendBounds(bounds: L.LatLngBounds, buffer: number): L.LatLngBounds {
  const sw = bounds.getSouthWest()
  const ne = bounds.getNorthEast()
  return L.latLngBounds(
    L.latLng(sw.lat - buffer, sw.lng - buffer),
    L.latLng(ne.lat + buffer, ne.lng + buffer),
  )
}

const RasterCoordsProvider = ({
  initialZoom,
  children,
  maxZoom,
}: {
  initialZoom: number
  children?: ReactNode
  maxZoom: number
}) => {
  const rcRef = useRef<L.RasterCoords | null>(null)
  const [isInitialized, setIsInitialized] = useState(false)
  const [imageWidth, imageHeight] = [13024, 6352]

  const path = "tiles/{z}/{x}/{y}.png"

  const map = useMap()
  useEffect(() => {
    if (!map) return

    const newRc = new L.RasterCoords(map, [imageWidth, imageHeight])
    rcRef.current = newRc
    setIsInitialized(true)

    const bounds = extendBounds(newRc.getMaxBounds(), 50)
    map.setMaxBounds(bounds)
    map.setView(bounds.getCenter(), initialZoom)
    map.setMinZoom(map.getBoundsZoom(newRc.getMaxBounds()))

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
      attribution: "",
    }).addTo(map)
  }, [map, initialZoom])

  const contextProviderValue = useMemo(
    () => ({
      rc: rcRef.current,
      isInitialized: isInitialized,
    }),
    [isInitialized],
  )

  return (
    <RasterCoordsContext.Provider value={contextProviderValue}>
      {children}
    </RasterCoordsContext.Provider>
  )
}

export default RasterCoordsProvider
