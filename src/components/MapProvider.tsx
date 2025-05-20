import { MapContainer } from "react-leaflet"

import L from "leaflet"
import "leaflet/dist/leaflet.css"
import MapHandler from "../pages/MapHandler"
import RasterCoordsProvider from "./RasterCoordsProvider"

function MapProvider() {
  return (
    <MapContainer
      center={[0, 0]}
      className="z-0 h-screen w-screen"
      zoomSnap={0.5}
      zoomDelta={0.5}
      crs={L.CRS.Simple}
      preferCanvas={true}
      maxZoom={8}
    >
      <RasterCoordsProvider center={[3719, 5338]} initialZoom={0}>
        <MapHandler />
      </RasterCoordsProvider>
    </MapContainer>
  )
}

export default MapProvider
