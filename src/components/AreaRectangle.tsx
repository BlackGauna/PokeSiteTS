import L from "leaflet"
import { useEffect, useState } from "react"
import { Rectangle } from "react-leaflet"

function AreaRectangle({
  bounds,
  show,
  setActiveInfo,
}: {
  bounds: L.LatLngBounds
  show: boolean
  setActiveInfo: React.Dispatch<React.SetStateAction<string | null>>
}) {
  const [opacity, setOpacity] = useState(0)

  useEffect(() => {
    setOpacity(show ? 1 : 0)
  }, [show])

  return (
    <Rectangle
      key={"route-101" + opacity.toString()}
      bounds={bounds}
      color="black"
      opacity={opacity}
      fillOpacity={0}
      dashArray={[4, 8]}
      eventHandlers={{
        click: e => {
          // setOpacity(1)
          L.DomEvent.stopPropagation(e) // stops click event passing to parent map/layer
          setActiveInfo("route-101")
        },
      }}
    />
  )
}

export default AreaRectangle
