import { MapContainer } from "react-leaflet"

import L from "leaflet"
import "leaflet/dist/leaflet.css"
import MapHandler from "../pages/MapHandler"
import RasterCoordsProvider from "./RasterCoordsProvider"

function MapProvider() {
  return (
    <MapContainer
      center={[0, 0]}
      className="bg-background z-0 h-full w-full"
      crs={L.CRS.Simple}
      preferCanvas={true}
      maxZoom={16}
    >
      <RasterCoordsProvider initialZoom={0} maxZoom={16}>
        <MapHandler />
      </RasterCoordsProvider>
    </MapContainer>
  )
}

export default MapProvider
