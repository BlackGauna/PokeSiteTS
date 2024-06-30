import L, { LatLng, latLngBounds } from "leaflet"
import "leaflet/dist/leaflet.css"
import { useCallback, useContext, useEffect, useRef, useState } from "react"
import { FeatureGroup, LayerGroup, Marker, Popup, useMap, useMapEvent } from "react-leaflet"
import * as GeoJSON from "geojson"
import { RasterCoordsContext } from "src/components/RasterCoordsProvider"
import "leaflet-search"
import "leaflet-search-types"
import "leaflet-search/dist/leaflet-search.min.css"
import { searchPokemonInCache, useAllPokemon } from "src/api/PokemonApi"
import { useQueryClient } from "@tanstack/react-query"
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

import overworldItemsFile from "../assets/OverworldItems.json"
import itemSprite from "../assets/sprites/item.png"
import itemStyles from "../styles/itemMarker.module.css"
import locationEncounters from "../assets/LocationEncounters.json"
import areaEncounters from "../assets/areaTest.ts"
import AreaRectangle from "src/components/AreaRectangle"

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

  // get pokemon data from db and fill cache
  useAllPokemon()

  useEffect(() => {
    if (contextRc && contextInitialized) {
      setRc(contextRc)
      setisInitialized(contextInitialized)
    }
  }, [contextRc, contextInitialized])

  useEffect(() => {
    //... adding search in items layer containing item markers, to make them searchable
    const searchControl = new L.Control.Search({
      layer: items.current!,
      initial: false,
      delayType: 200,
      marker: undefined,
    })
    searchControl.on("search:locationfound", e => {
      e.layer.openPopup()
    })
    map.addControl(searchControl)

    return () => {
      map.removeControl(searchControl)
    }
  }, [map])

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
            <Popup>{searchPokemonInCache(queryClient, itemFeature.properties!.name)?.type}</Popup>
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

  const generatePolygon = () => {
    // console.log("locationEncounters", locationEncounters)
    // const locationName = locationEncounters[0].name
    // const bounds = projectAreaCoords(locationEncounters[0].area)

    const polygons = []
    for (const [areaName, areaDetails] of Object.entries(areaEncounters)) {
      if (areaDetails.area[0].length === 0) continue
      polygons.push(
        <AreaRectangle
          key={areaName}
          areaName={areaName}
          bounds={projectAreaCoords(areaDetails.area as number[][])}
          show={activeInfo === areaName}
          setActiveInfo={setActiveInfo}
        />,
      )
    }
    return polygons
  }

  const cachedEncounters = useCallback(() => generateEncounterList(), [activeInfo])

  const methodSort = [
    "walk",
    "old-rod",
    "good-rod",
    "super-rod",
    "surf",
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

  const generateEncounterList = () => {
    const empty = <></>
    if (!activeInfo) return empty
    // const locationPokemon = locationEncounters.find(element => element.name === activeInfo)!.pokemon

    // const encounterInfo = locationPokemon[0]

    if (!areaEncounters[activeInfo]) return empty

    const encounters = areaEncounters[activeInfo].encounters

    const tableInfos = []

    for (const [pokemonName, encounterDetails] of Object.entries(encounters)) {
      const pokemonInfo = searchPokemonInCache(queryClient, pokemonName)

      let sumOfChance = 0
      let minLevel = 100
      let maxLevel = 0

      type FilteredEncounters = {
        [key: string]: { chance: number; maxLevel: number; minLevel: number }
      }

      const filteredEncounters: FilteredEncounters = {}
      const length = encounterDetails.length
      for (const [index, encounter] of encounterDetails.entries()) {
        if (index === 0 || (index > 0 && encounter.method !== encounterDetails[index - 1].method)) {
          sumOfChance = 0
          minLevel = 100
          maxLevel = 0
        }

        sumOfChance += encounter.chance
        minLevel = encounter.min_level < minLevel ? encounter.min_level : minLevel
        maxLevel = encounter.max_level > maxLevel ? encounter.max_level : maxLevel
        filteredEncounters[encounter.method] = {
          chance: sumOfChance,
          maxLevel: maxLevel,
          minLevel: minLevel,
        }
      }

      // TODO: maybe can remove this additional loop, incorporate above
      for (const [method, filtered] of Object.entries(filteredEncounters)) {
        tableInfos.push({
          pokemon: pokemonInfo,
          chance: filtered.chance,
          minLevel: filtered.minLevel,
          maxLevel: filtered.maxLevel,
          method: method,
        })
      }
      tableInfos.sort((a, b) => methodIndex[a.method] - methodIndex[b.method])
      console.log("tableInfos", tableInfos)
    }

    return (
      <Table>
        <TableCaption>Catchable pokemon at {activeInfo}</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="">Pokemon</TableHead>
            <TableHead>Level</TableHead>
            <TableHead>Method</TableHead>
            <TableHead className="">Chance</TableHead>
          </TableRow>
        </TableHeader>
        {/* <TableBody>{tableRows}</TableBody> */}
        <TableBody>
          {tableInfos.map(element => (
            <TableRow key={element.pokemon?.name + element.method}>
              <TableCell className="flex items-center">
                <img
                  className="-m-3 w-10"
                  src={`src/assets/sprites/pokemon/${element.pokemon?.id}.gif`}
                />
                <span className="ml-4">
                  {element.pokemon?.names.find(el => el.language === "en")?.name}
                </span>
              </TableCell>
              <TableCell>{`${element.minLevel} - ${element.maxLevel} `}</TableCell>
              <TableCell>{element.method} </TableCell>
              <TableCell className="">{`${element.chance}%`} </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    )
  }

  return (
    <>
      <LayerGroup ref={items}>{rc && isInitialized && generateItemMarkers()}</LayerGroup>
      <FeatureGroup>{rc && isInitialized && generatePolygon()}</FeatureGroup>
      {activeInfo && (
        <div
          ref={el => {
            if (el) L.DomEvent.disableClickPropagation(el as HTMLElement) // stop leaflet mouse events over div element
          }}
          className="absolute bottom-0 right-0 z-[10000] min-h-40  w-1/3 cursor-auto border-2 border-solid border-green-500 bg-white/50 p-1 text-black  backdrop-blur-md"
        >
          {cachedEncounters()}
        </div>
      )}
    </>
  )
}

export default MapHandler
