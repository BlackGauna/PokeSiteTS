import L, { latLng, LatLng, latLngBounds } from "leaflet"
import "leaflet-rastercoords"
import "leaflet-search"
import "leaflet-search-types"
import "leaflet-search/dist/leaflet-search.min.css"
import "leaflet/dist/leaflet.css"

import { useCallback, useContext, useEffect, useRef, useState } from "react"
import {
  FeatureGroup,
  LayerGroup,
  Marker,
  Popup,
  useMap,
  useMapEvent,
  useMapEvents,
} from "react-leaflet"

import { useGetRegionLocations } from "../api/LocationApi.ts"
import AreaRectangle from "../components/AreaRectangle.tsx"
import { RasterCoordsContext } from "../components/RasterCoordsProvider.tsx"
import { ScrollArea } from "../components/ui/scroll-area.tsx"
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../components/ui/table.tsx"
import itemStyles from "../styles/itemMarker.module.css"
import "../styles/leaflet-search.css"

import { ItemForm } from "@/components/ItemForm.tsx"
import { useGetItemPlacements } from "../api/ItemApi.ts"
import { locationCoords } from "../assets/locationCoords.ts"

function MapHandler() {
  const { rc: contextRc, isInitialized: contextInitialized } = useContext(RasterCoordsContext)
  const [rc, setRc] = useState<L.RasterCoords | null>(null)
  const [isInitialized, setisInitialized] = useState(contextInitialized)
  const [mapZoom, setMapZoom] = useState(1)
  const [activeInfo, setActiveInfo] = useState<string | null>(null)
  const [formPosition, setFormPosition] = useState<L.LatLng | null>(null)
  const [mousePosition, setMousePosition] = useState<L.LatLng | null>(null)

  const itemPopupRef = useRef<L.Popup | null>(L.popup())

  const map = useMap()
  map.on("zoomend", () => {
    const zoomLevel = map.getZoom()
    setMapZoom(zoomLevel)
  })

  // clear the active area, i.e. the catchable pokemon shown when clicking on empty area
  useMapEvent("click", () => {
    setActiveInfo(null)
  })

  const items = useRef<L.LayerGroup | null>(null)
  const areaRefs = useRef<Map<string, L.Rectangle>>(new Map())
  const itemRefs = useRef<Map<number, L.Marker>>(new Map())

  const { data: locations } = useGetRegionLocations("hoenn")
  const { data: itemPlacements } = useGetItemPlacements()

  useEffect(() => {
    if (contextRc && contextInitialized) {
      setRc(contextRc)
      setisInitialized(contextInitialized)
    }
  }, [contextRc, contextInitialized])

  //... adding search in items layer containing item markers, to make them searchable
  useEffect(() => {
    const searchControl = new L.Control.Search({
      sourceData: (text: string, callback) => {
        // TODO: expand to also find by encounter pokemon names
        const matches = Object.entries(locationCoords)
          .filter(([key]) => {
            const encounters = locations?.find(location => location.name === key)?.encounters
            const names = encounters?.map(encounter => encounter.pokemon.name) || []

            const hasPokemon = names.some(name => name.toLowerCase().includes(text.toLowerCase()))

            return (
              areaRefs.current.has(key) &&
              (key.toLowerCase().includes(text.toLowerCase()) || hasPokemon)
            )
          })
          .map(([key]) => {
            const layer = areaRefs.current.get(key)

            if (!layer) return null

            return {
              title: key,
              loc: layer.getBounds().getCenter(),
            }
          })

        // search item placements
        if (itemPlacements) {
          itemPlacements
            ?.filter(itemPlacement =>
              itemPlacement.item.name.toLowerCase().includes(text.toLowerCase()),
            )
            .forEach(itemPlacement => {
              const marker = itemRefs.current.get(itemPlacement.id)
              if (!marker) return null
              const match = {
                title: `${itemPlacement.item.name} (${itemPlacement.location.name})`,
                loc: marker.getLatLng() as L.LatLng,
              }
              matches.push(match)
            })
        }
        return callback(matches)
      },
      // for showing the search results, when searching for a pokemon
      // otherwise, it will show no previews, because the pokemon name is not the title of the area
      filterData: (_text: string, records: object) => {
        return records
      },

      initial: false,

      delayType: 200,
      autoType: false,

      marker: undefined,
      moveToLocation: (latlng: L.LatLng, title: string, map: L.Map) => {
        map.closePopup()
        map.setView(latlng, map.getZoom())

        let itemFound = false
        itemRefs.current.forEach(marker => {
          const test = marker.getLatLng()
          // need to compare the string represenation, because of float imprecision (I guess)
          if (test.toString() !== latlng.toString()) return

          itemFound = true
          marker.openPopup()
        })

        if (!itemFound) setActiveInfo(title)
      },
    })

    map.addControl(searchControl)

    return () => {
      map.removeControl(searchControl)
    }
  }, [map, areaRefs, locations, itemPlacements])

  const projectAreaCoords = (coords: number[][] | [number[], number[]]) => {
    if (!rc) return latLngBounds([0, 0], [0, 0])
    const projected = latLngBounds([
      rc.unproject(coords[0] as L.PointExpression),
      rc.unproject(coords[1] as L.PointExpression),
    ])
    return projected
  }

  const coordsToLatlng = useCallback(
    (coords: [number, number] | [number, number, number] | number[]) => {
      if (!rc) return latLng(0, 0)
      const projected = rc!.unproject(coords as L.PointExpression)

      return projected
    },
    [rc],
  )

  const generateItemMarkers = useCallback(() => {
    // only continue, if map is initialized, so we can use the project the markers correctly
    if (!isInitialized || !itemPlacements) return <></>

    const itemIcon = L.icon({
      iconUrl: "/sprites/item.png",
      iconSize: mapZoom < 8 ? [32, 32] : [50, 50],
      className: itemStyles.itemicon,
    })

    const itemGroup = itemPlacements?.map(itemPlacement => {
      const marker = (
        <Marker
          title={itemPlacement.item?.name}
          key={itemPlacement.id}
          icon={itemIcon}
          ref={el => {
            if (el) {
              itemRefs.current.set(itemPlacement.id, el)
            }
          }}
          position={coordsToLatlng(itemPlacement.coordinates) as LatLng}
        >
          <Popup>
            {itemPlacement.item.name} x{itemPlacement.amount}
          </Popup>
        </Marker>
      )
      return marker
    })

    return itemGroup
  }, [isInitialized, itemPlacements, mapZoom, coordsToLatlng])

  const generatePolygons = () => {
    const polygons = []
    for (const [areaName, coords] of Object.entries(locationCoords)) {
      if (coords[0][0] === 0) continue
      polygons.push(
        <AreaRectangle
          key={areaName}
          areaName={areaName}
          bounds={projectAreaCoords(coords)}
          show={activeInfo === areaName}
          setActiveInfo={setActiveInfo}
          ref={el => {
            if (el) {
              areaRefs.current.set(areaName, el)
            }
          }}
        />,
      )
    }
    return polygons
  }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const cachedEncounters = useCallback(() => generateEncounterTable(), [activeInfo, locations])

  const methodSort = [
    "walk",
    "surf",
    "old-rod",
    "good-rod",
    "super-rod",
    "rock-smash",
    "headbutt",
    "dark-grass",
    "grass-spots",
    "cave-spots",
    "bridge-spots",
    "super-rod-spots",
    "surf-spots",
    "yellow-flowers",
    "purple-flowers",
    "red-flowers",
    "rough-terrain",
    "gift",
    "gift-egg",
    "only-one",
  ]
  const methodIndex: { [key: string]: number } = {}
  methodSort.forEach((method, index) => {
    methodIndex[method] = index
  })

  const generateEncounterTable = () => {
    const empty = <></>
    if (!activeInfo || !locations) return empty

    const location = locations.find(element => element.name === activeInfo)
    if (!location) return empty

    const encounters = location.encounters.sort(
      (a, b) => methodIndex[a.encounterMethod!] - methodIndex[b.encounterMethod!],
    )

    return (
      // key on scroll area to force rerender when activeInfo changes, so that scroll position is reset
      <ScrollArea key={activeInfo} className="h-full" type="auto">
        <Table onMouseEnter={handleTableMouseOver} onMouseLeave={handleTableMouseOver}>
          <TableHeader>
            <TableRow>
              <TableHead className="w-32">Pokemon</TableHead>
              <TableHead className="w-16 text-center">Level</TableHead>
              <TableHead className="w-12 text-center">Method</TableHead>
              <TableHead className="w-4 text-center">Chance</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {encounters.map((element, index) => (
              <TableRow key={element.pokemon.name + index}>
                <TableCell className="flex items-center">
                  <img className="-m-3 w-10" src={`/sprites/pokemon/${element.pokemon.id}.gif`} />
                  <span className="ml-2">{element.pokemon.name}</span>
                </TableCell>
                <TableCell className="text-center">{`${element.minLevel} - ${element.maxLevel} `}</TableCell>
                <TableCell className="text-center">{element.encounterMethod} </TableCell>
                <TableCell className="text-center">{`${element.encounterChance}%`} </TableCell>
              </TableRow>
            ))}
          </TableBody>
          <TableCaption>Catchable pokemon at {activeInfo}</TableCaption>
        </Table>
      </ScrollArea>
    )
  }

  const handleTableMouseOver = () => {
    if (map.scrollWheelZoom.enabled()) map.scrollWheelZoom.disable()
    else map.scrollWheelZoom.enable()
  }

  const latLngToPixelCoords = (latlng: L.LatLng) => {
    if (!rc) return L.point(0, 0)

    const pixelCoords = rc.project(latlng)
    return pixelCoords
  }

  const [pendingKeyEvent, setPendingKeyEvent] = useState(false)
  useMapEvents({
    async keypress(e) {
      if (pendingKeyEvent || e.originalEvent.key !== "a" || itemPopupRef.current?.isOpen()) return
      setPendingKeyEvent(true)

      // await new Promise(resolve => setTimeout(resolve, 2000))
      setFormPosition(mousePosition)
      setPendingKeyEvent(false)
    },
    mousemove: e => {
      const mousePos = e.latlng
      setMousePosition(mousePos)
    },
  })

  return (
    <>
      <LayerGroup ref={items}>{rc && isInitialized && generateItemMarkers()}</LayerGroup>
      {/* FeatureGroup containing the rectangles of the encounter areas */}
      <FeatureGroup>{rc && isInitialized && generatePolygons()}</FeatureGroup>
      {activeInfo && (
        <div
          ref={el => {
            if (el) L.DomEvent.disableClickPropagation(el as HTMLElement) // stop leaflet mouse events over the table
          }}
          className="absolute right-0 bottom-0 z-[10000] h-[50%] w-1/3 cursor-auto border-2 border-b-0 border-solid border-green-500 bg-white/50 p-1 text-black backdrop-blur-md"
        >
          {cachedEncounters()}
        </div>
      )}

      {formPosition && (
        <Popup position={formPosition} ref={itemPopupRef}>
          <ItemForm position={latLngToPixelCoords(formPosition)}></ItemForm>
        </Popup>
      )}
    </>
  )
}

export default MapHandler
