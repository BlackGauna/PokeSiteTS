import { forwardRef, useEffect, useImperativeHandle, useRef, useState } from "react"
import L from "leaflet"
import { useMap } from "react-leaflet"

export type RasterCoordsHandle = {
  unproject: (coords: L.PointExpression) => L.LatLng | undefined
}
const RasterCoordsProvider = forwardRef<RasterCoordsHandle | undefined>((_, ref) => {
  const rcRef = useRef<L.RasterCoords | null>(null)
  // const mapRef = useRef<L.Map | null>(null)
  const [imageWidth, imageHeight] = [13024, 6352]
  const maxZoom = 8

  const [rc, setRc] = useState<L.RasterCoords | null>(null)

  useImperativeHandle(
    ref,
    () => ({
      unproject: coords => {
        if (rc !== null) {
          return rc.unproject(coords)
        }
        return undefined
      },
    }),
    [rc, setRc],
  )

  const map = useMap()
  useEffect(() => {
    // console.log("load")
    // console.log("after ref")
    if (!map) return
    // console.log("test")

    const newRc = new L.RasterCoords(map, [imageWidth, imageHeight])
    setRc(newRc)
    rcRef.current = newRc

    map.setMaxZoom(maxZoom)
    map.setView(newRc.unproject([imageWidth / 2, imageHeight / 2]), 3)

    const tileLayer = L.tileLayer("tiles/{z}/{x}/{y}.png", {
      noWrap: true,
      bounds: newRc.getMaxBounds(),
    }).addTo(map)

    // return () => {
    //   // Cleanup when component unmounts
    //   // if (tileLayer) {
    //   //   tileLayer.remove()
    //   // }
    //   rcRef.current = null
    // }
  }, [imageWidth, imageHeight, map])

  useEffect(() => {
    console.log("rcRef", rc)
  }, [rc])

  return null
})

export default RasterCoordsProvider
