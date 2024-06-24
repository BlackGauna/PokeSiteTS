import L, { LatLng, latLngBounds } from "leaflet"
import "leaflet/dist/leaflet.css"
import { useContext, useEffect, useRef, useState } from "react"
import { FeatureGroup, LayerGroup, Marker, Popup, useMap, useMapEvent } from "react-leaflet"
import * as GeoJSON from "geojson"
import { RasterCoordsContext } from "src/components/RasterCoordsProvider"
import "leaflet-search"
import "leaflet-search-types"
import "leaflet-search/dist/leaflet-search.min.css"
import { searchPokemonInCache, useAllPokemon } from "src/api/PokemonApi"
import { useQueryClient } from "@tanstack/react-query"

import overworldItemsFile from "../assets/OverworldItems.json"
import itemSprite from "../assets/sprites/item.png"
import itemStyles from "../styles/itemMarker.module.css"
import locationEncounters from "../assets/LocationEncounters.json"
import AreaRectangle from "src/components/AreaRectangle"

const overworldItems = overworldItemsFile as GeoJSON.FeatureCollection<GeoJSON.Point>
console.log("overworldItems", overworldItems)

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
    //... adding data in items layer containing item markers ...
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

  const projectAreaCoords = (coords: number[][]) => {
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
    console.log("locationEncounters", locationEncounters)
    const locationName = locationEncounters[0].name
    const bounds = projectAreaCoords(locationEncounters[0].area)
    const polygon = (
      <AreaRectangle
        bounds={bounds}
        show={activeInfo === locationName}
        setActiveInfo={setActiveInfo}
      />
    )
    return polygon
  }

  useEffect(() => {
    console.log("activeInfo", activeInfo)
  }, [activeInfo])

  return (
    <>
      <LayerGroup ref={items}>{rc && isInitialized && generateItemMarkers()}</LayerGroup>
      <FeatureGroup>{rc && isInitialized && generatePolygon()}</FeatureGroup>
      <div className="absolute bottom-0 right-0 z-[1000] m-2 w-2/5 border-2 border-dashed border-red-600 text-black">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis similique facilis
        cupiditate iste, officia dolorem voluptatibus? Consequatur asperiores quam itaque harum
        repudiandae aut iusto quasi facilis accusantium quia. Natus, facilis?
      </div>
    </>
  )
}

export default MapHandler
