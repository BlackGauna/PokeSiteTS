import { ReactNode, createContext, useEffect, useMemo, useRef, useState } from "react"
import L from "leaflet"
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
}: {
  center: number[]
  initialZoom: number
  children: ReactNode
}) => {
  const rcRef = useRef<L.RasterCoords | null>(null)
  const [isInitialized, setIsInitialized] = useState(false)
  // const mapRef = useRef<L.Map | null>(null)
  const [imageWidth, imageHeight] = [13024, 6352]

  const path = "tiles/{z}/{x}/{y}.png"
  const maxZoom = 6

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

    map.setMaxZoom(maxZoom)
    map.setMaxBounds(newRc.getMaxBounds())
    map.setView(newRc.unproject(center as L.PointExpression), initialZoom)
    map.setMinZoom(map.getBoundsZoom(newRc.getMaxBounds()))

    const tileLayer = L.tileLayer(path, {
      noWrap: true,
      bounds: newRc.getMaxBounds(),
    }).addTo(map)
  }, [imageWidth, imageHeight, map, center, initialZoom])

  const contextProviderValue = useMemo(
    () => ({
      rc: rcRef.current,
      isInitialized: isInitialized,
    }),
    [isInitialized, rcRef],
  )

  return (
    <RasterCoordsContext.Provider value={contextProviderValue}>
      {children}
    </RasterCoordsContext.Provider>
  )
}

export default RasterCoordsProvider
