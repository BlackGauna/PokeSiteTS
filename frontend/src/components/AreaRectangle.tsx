import L from "leaflet"
import { forwardRef, useEffect, useState } from "react"
import { Rectangle } from "react-leaflet"

const AreaRectangle = forwardRef(function AreaRectangle(
  {
    areaName,
    bounds,
    show,
    setActiveInfo,
  }: {
    areaName: string
    bounds: L.LatLngBounds
    show: boolean
    setActiveInfo: React.Dispatch<React.SetStateAction<string | null>>
  },
  ref: React.Ref<L.Rectangle>,
) {
  const [opacity, setOpacity] = useState(0)

  useEffect(() => {
    setOpacity(show ? 1 : 0)
  }, [show])

  return (
    <Rectangle
      key={areaName + opacity.toString()} // add opacity, so React knows to update element after it changes
      bounds={bounds}
      color="white"
      opacity={opacity}
      fillOpacity={0}
      dashArray={[4, 8]}
      ref={ref}
      eventHandlers={{
        click: e => {
          L.DomEvent.stopPropagation(e) // stops click event passing to parent map/layer
          setActiveInfo(areaName)
          // if (!show) map.fitBounds(bounds, { maxZoom: 6 })
        },
      }}
    />
  )
})

export default AreaRectangle
