// type Props = {}
import L from "leaflet"
import "leaflet/dist/leaflet.css"
import { useEffect } from "react"
import { MapContainer, Marker, useMap } from "react-leaflet"

const RasterCoordsInit = () => {
  // const mapRef = useRef<L.Map | null>(null)
  const [imageWidth, imageHeight] = [13024, 6352]
  const maxZoom = 8

  const map = useMap()
  useEffect(() => {
    console.log("load")

    console.log("after ref")
    if (!map) return
    console.log("test")

    const rc = new L.RasterCoords(map, [imageWidth, imageHeight])
    map.setMaxZoom(maxZoom)
    map.setView(rc.unproject([imageWidth / 2, imageHeight / 2]), 3)

    L.tileLayer("tiles/{z}/{x}/{y}.png", {
      noWrap: true,
      bounds: rc.getMaxBounds(),
    }).addTo(map)
  }, [imageWidth, imageHeight, map])

  return null
}

function Map() {
  return (
    <>
      <MapContainer center={[0, 0]} className="h-screen w-screen" crs={L.CRS.Simple}>
        <RasterCoordsInit />
      </MapContainer>
    </>
  )
}

export default Map
