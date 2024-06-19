// type Props = {}
import L from "leaflet"
import "leaflet/dist/leaflet.css"
import { useEffect, useRef, useState } from "react"
import { MapContainer } from "react-leaflet"
import RasterCoordsProvider, { RasterCoordsHandle } from "src/components/RasterCoordsProvider"

function Map() {
  const rcRef = useRef<RasterCoordsHandle | null>(null)
  const [rc, setRc] = useState<any>(null)
  useEffect(() => {
    console.log(rc)

    if (rc) {
      console.log("ref is there")

      console.log(rc.unproject([100, 100]))
      console.log(rc.unproject)
    } else console.log("ref not")
  }, [rc])

  return (
    <>
      <MapContainer center={[0, 0]} className="h-screen w-screen" crs={L.CRS.Simple}>
        <RasterCoordsProvider ref={setRc} />
      </MapContainer>
    </>
  )
}

export default Map
