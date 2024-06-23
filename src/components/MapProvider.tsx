import { MapContainer } from "react-leaflet"

import L from "leaflet"
import "leaflet/dist/leaflet.css"
import MapHandler from "src/pages/MapHandler"
import RasterCoordsProvider from "./RasterCoordsProvider"

function MapProvider() {
  return (
    <MapContainer center={[0, 0]} className="h-screen w-screen" crs={L.CRS.Simple}>
      <RasterCoordsProvider center={[3719, 5338]} initialZoom={5}>
        <MapHandler />
      </RasterCoordsProvider>
    </MapContainer>
  )
}

export default MapProvider
