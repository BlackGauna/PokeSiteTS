import { useQueryClient } from "@tanstack/react-query"
import L, { LatLng, latLngBounds } from "leaflet"
import "leaflet-search"
import "leaflet-search-types"
import "leaflet-search/dist/leaflet-search.min.css"
import "leaflet/dist/leaflet.css"
import { useCallback, useContext, useEffect, useRef, useState } from "react"
import { FeatureGroup, LayerGroup, Marker, Popup, useMap, useMapEvent } from "react-leaflet"

import { useGetRegionLocations } from "../api/LocationApi.ts"
import { searchPokemonInCache } from "../api/PokemonApi.ts"
import overworldItemsFile from "../assets/OverworldItems.json"
import itemSprite from "../assets/sprites/item.png"
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

import { locationCoords } from "../assets/locationCoords.ts"

const overworldItems = overworldItemsFile as GeoJSON.FeatureCollection<GeoJSON.Point>
// console.log("overworldItems", overworldItems)

function MapHandler() {
  const { rc: contextRc, isInitialized: contextInitialized } = useContext(RasterCoordsContext)
  const [rc, setRc] = useState<L.RasterCoords | null>(null)
  const [isInitialized, setisInitialized] = useState(contextInitialized)

  const [activeInfo, setActiveInfo] = useState<string | null>(null)

  const map = useMap()
  const queryClient = useQueryClient()

  // clear the active area, i.e. the catchable pokemon shown when clicking on empty area
  useMapEvent("click", () => {
    setActiveInfo(null)
  })

  const items = useRef<L.LayerGroup | null>(null)
  const areaRefs = useRef<Map<string, L.Rectangle>>(new Map())

  const { data: locations } = useGetRegionLocations("hoenn")

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
        console.log("matches", matches)

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
      moveToLocation: (latlng: LatLng, title: string, map: L.Map) => {
        map.setView(latlng, map.getZoom())

        setActiveInfo(title)
      },
    })
    searchControl.on("search:locationfound", e => {
      // setActiveInfo(e.title)
    })
    map.addControl(searchControl)

    return () => {
      map.removeControl(searchControl)
    }
  }, [map, areaRefs, locations])

  const generateItemMarkers = () => {
    const itemIcon = L.icon({
      iconUrl: itemSprite,
      iconSize: [50, 50],
      className: itemStyles.itemicon,
    })

    const group =
      // <LayerGroup ref={items}>
      overworldItems.features.map((itemFeature, index) => {
        const marker = (
          <Marker
            title={itemFeature.properties!.name}
            key={index}
            icon={itemIcon}
            position={coordsToLatlng(itemFeature.geometry.coordinates) as LatLng}
          >
            <Popup>{searchPokemonInCache(queryClient, itemFeature.properties!.name)?.types}</Popup>
          </Marker>
        )
        return marker
      })
    // </LayerGroup>
    return group
  }

  const projectAreaCoords = (coords: number[][] | [number[], number[]]) => {
    const projected = latLngBounds([
      rc!.unproject(coords[0] as L.PointExpression),
      rc!.unproject(coords[1] as L.PointExpression),
    ])
    return projected
  }

  const coordsToLatlng = (coords: [number, number] | [number, number, number] | number[]) => {
    const projected = rc!.unproject(coords as L.PointExpression)
    return projected
  }

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
          <TableCaption>Catchable pokemon at {activeInfo}</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-32">Pokemon</TableHead>
              <TableHead className="w-16 text-center">Level</TableHead>
              <TableHead className="w-12 text-center">Method</TableHead>
              <TableHead className="w-4 text-center">Chance</TableHead>
            </TableRow>
          </TableHeader>
          {/* <TableBody>{tableRows}</TableBody> */}
          <TableBody>
            {encounters.map(element => (
              <TableRow
                key={
                  element.pokemon.name +
                  element.encounterMethod +
                  element.encounterChance +
                  element.maxLevel
                }
              >
                <TableCell className="flex items-center">
                  <img
                    className="-m-3 w-10"
                    src={`src/assets/sprites/pokemon/${element.pokemon.id}.gif`}
                  />
                  <span className="ml-2">{element.pokemon.name}</span>
                </TableCell>
                <TableCell className="text-center">{`${element.minLevel} - ${element.maxLevel} `}</TableCell>
                <TableCell className="text-center">{element.encounterMethod} </TableCell>
                <TableCell className="text-center">{`${element.encounterChance}%`} </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </ScrollArea>
    )
  }

  const handleTableMouseOver = () => {
    if (map.scrollWheelZoom.enabled()) map.scrollWheelZoom.disable()
    else map.scrollWheelZoom.enable()
  }
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
          className="absolute bottom-0 right-0 z-[10000] h-[50%]  w-1/3 cursor-auto  border-2 border-b-0 border-solid border-green-500 bg-white/50  p-1 text-black backdrop-blur-md"
        >
          {cachedEncounters()}
        </div>
      )}
    </>
  )
}

export default MapHandler
