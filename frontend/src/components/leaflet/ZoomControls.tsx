import { Minus, Plus } from "lucide-react"
import { useMap } from "react-leaflet"
import { Separator } from "../ui/separator"

export default function ZoomControls() {
  const map = useMap()

  return (
    <div className="leaflet-bottom leaflet-left flex">
      {/* Position classes */}
      <div className="bg-card leaflet-control leaflet-bar text-card-foreground flex flex-col">
        <div
          onClick={() => map.zoomIn()}
          className="flex h-8 w-8 cursor-pointer items-center justify-center"
        >
          <Plus className="w-5" />
        </div>

        <div className="px-2">
          <Separator />
        </div>

        <div
          onClick={() => map.zoomOut()}
          className="flex h-8 w-8 cursor-pointer items-center justify-center"
        >
          <Minus className="w-5" />
        </div>
      </div>
    </div>
  )
}
