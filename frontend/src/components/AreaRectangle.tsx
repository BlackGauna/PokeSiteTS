import L from "leaflet"
import { forwardRef, useMemo } from "react"
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
  const pathOptions = useMemo(
    () => ({ color: "white", opacity: show ? 1 : 0, fillOpacity: 0, dashArray: "4 8" }),
    [show],
  )

  return (
    <Rectangle
      bounds={bounds}
      pathOptions={pathOptions}
      ref={ref}
      eventHandlers={{
        click: e => {
          L.DomEvent.stopPropagation(e)
          setActiveInfo(areaName)
        },
      }}
    />
  )
})

export default AreaRectangle
