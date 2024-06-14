// type Props = {}
import { CRS } from "leaflet"
import "leaflet/dist/leaflet.css"
import { MapContainer, TileLayer } from "react-leaflet"

function Map() {
  return (
    <>
      <div className="h-screen w-screen">
        <MapContainer
          center={[0, 50]}
          zoom={2}
          scrollWheelZoom={true}
          style={{ height: "100%" }}
          crs={CRS.Simple}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="/tiles/{z}/{x}/{y}.webp"
            minZoom={2}
            maxZoom={6}
            tms={false}
            bounds={[
              [0, 0],
              [1000, 1000],
            ]}
          />
          {/* <Marker position={[51.505, -0.09]}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker> */}
        </MapContainer>
      </div>
    </>
  )
}

export default Map
