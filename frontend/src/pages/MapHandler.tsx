import L, { latLng, LatLng, latLngBounds } from "leaflet"
import "leaflet-rastercoords"
import "leaflet-search"
import "leaflet-search-types"
import "leaflet-search/dist/leaflet-search.min.css"
import "leaflet/dist/leaflet.css"

import { useCallback, useContext, useEffect, useMemo, useRef, useState } from "react"
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
import itemStyles from "../styles/itemMarker.module.css"
import "../styles/leaflet-search.css"

import EncounterTable from "@/components/EncounterTable.tsx"
import { ItemForm } from "@/components/ItemForm.tsx"
import { useGetItemPlacements } from "../api/ItemApi.ts"

function MapHandler() {
  const { rc, isInitialized } = useContext(RasterCoordsContext)
  const [mapZoom, setMapZoom] = useState(1)
  const [activeInfo, setActiveInfo] = useState<string | null>(null)
  const [formPosition, setFormPosition] = useState<L.LatLng | null>(null)

  const mouseRef = useRef<L.LatLng | null>(null)
  const itemPopupRef = useRef<L.Popup | null>(L.popup())
  const areaRefs = useRef<Map<string, L.Rectangle>>(new Map())
  const itemRefs = useRef<Map<number, L.Marker>>(new Map())

  const map = useMap()

  useMapEvent("click", () => {
    setActiveInfo(null)
  })

  useMapEvent("zoomend", () => {
    setMapZoom(map.getZoom())
  })

  const { data: locations } = useGetRegionLocations("hoenn")
  const { data: itemPlacements } = useGetItemPlacements()

  // Add search control over locations (by name or encounter pokemon) and item placements
  useEffect(() => {
    const searchControl = new L.Control.Search({
      sourceData: (text: string, callback) => {
        const matches = (locations ?? [])
          .filter(location => {
            const names = location.encounters?.map(e => e.pokemon.name) ?? []
            const hasPokemon = names.some(name => name.toLowerCase().includes(text.toLowerCase()))
            return (
              areaRefs.current.has(location.name) &&
              (location.name.toLowerCase().includes(text.toLowerCase()) || hasPokemon)
            )
          })
          .map(location => {
            const layer = areaRefs.current.get(location.name)
            if (!layer) return null
            return { title: location.name, loc: layer.getBounds().getCenter() }
          })

        if (itemPlacements) {
          itemPlacements
            .filter(itemPlacement =>
              itemPlacement.item.name.toLowerCase().includes(text.toLowerCase()),
            )
            .forEach(itemPlacement => {
              const marker = itemRefs.current.get(itemPlacement.id)
              if (!marker) return
              matches.push({
                title: `${itemPlacement.item.name} (${itemPlacement.location.name})`,
                loc: marker.getLatLng() as L.LatLng,
              })
            })
        }
        return callback(matches)
      },
      // Show all results including those matched by pokemon name, not just by location title
      filterData: (_text: string, records: object) => records,

      initial: false,
      delayType: 200,
      autoType: false,

      marker: undefined,
      moveToLocation: (latlng: L.LatLng, title: string, map: L.Map) => {
        map.closePopup()
        map.setView(latlng, map.getZoom())

        let itemFound = false
        itemRefs.current.forEach(marker => {
          if (marker.getLatLng().toString() !== latlng.toString()) return
          itemFound = true
          marker.openPopup()
        })

        if (!itemFound) setActiveInfo(title)
      },
    })

    map.addControl(searchControl as unknown as L.Control)
    return () => {
      map.removeControl(searchControl as unknown as L.Control)
    }
  }, [map, locations, itemPlacements])

  const coordsToLatlng = useCallback(
    (coords: [number, number] | [number, number, number] | number[]) => {
      if (!rc) return latLng(0, 0)
      return rc.unproject(coords as L.PointExpression)
    },
    [rc],
  )

  const itemIcon = useMemo(
    () =>
      L.icon({
        iconUrl: "/sprites/item.png",
        iconSize: mapZoom < 8 ? [32, 32] : [50, 50],
        className: itemStyles.itemicon,
      }),
    [mapZoom],
  )

  const itemMarkers = useCallback(() => {
    if (!isInitialized || !itemPlacements) return <></>

    return itemPlacements.map(itemPlacement => (
      <Marker
        title={itemPlacement.item?.name}
        key={itemPlacement.id}
        icon={itemIcon}
        ref={el => {
          if (el) itemRefs.current.set(itemPlacement.id, el)
        }}
        position={coordsToLatlng(itemPlacement.coordinates) as LatLng}
      >
        <Popup>
          {itemPlacement.item.name} x{itemPlacement.amount}
        </Popup>
      </Marker>
    ))
  }, [isInitialized, itemPlacements, coordsToLatlng, itemIcon])

  const projectAreaCoords = useCallback(
    (coords: number[][] | [number[], number[]]) => {
      if (!rc) return latLngBounds([0, 0], [0, 0])
      return latLngBounds([
        rc.unproject(coords[0] as L.PointExpression),
        rc.unproject(coords[1] as L.PointExpression),
      ])
    },
    [rc],
  )

  const polygons = useMemo(() => {
    return (locations ?? []).flatMap(location => {
      if (!location.boundsSw[0]) return []
      return [
        <AreaRectangle
          key={location.name}
          areaName={location.name}
          bounds={projectAreaCoords([location.boundsSw, location.boundsNe])}
          show={activeInfo === location.name}
          setActiveInfo={setActiveInfo}
          ref={el => {
            if (el) areaRefs.current.set(location.name, el)
          }}
        />,
      ]
    })
  }, [locations, activeInfo, projectAreaCoords])

  const latLngToPixelCoords = (latlng: L.LatLng) => {
    if (!rc) return L.point(0, 0)
    return rc.project(latlng)
  }

  useMapEvents({
    keypress(e) {
      if (e.originalEvent.key !== "a" || itemPopupRef.current?.isOpen()) return
      setFormPosition(mouseRef.current)
    },
    mousemove: e => {
      mouseRef.current = e.latlng
    },
  })

  return (
    <>
      <LayerGroup>{rc && isInitialized && itemMarkers()}</LayerGroup>
      <FeatureGroup>{rc && isInitialized && polygons}</FeatureGroup>
      {activeInfo && (
        <div
          ref={el => {
            if (el) L.DomEvent.disableClickPropagation(el as HTMLElement)
          }}
          className="bg-background border-border absolute top-0 right-0 z-1000 h-full w-1/3 min-w-93.75 border-t border-l p-1"
        >
          <EncounterTable activeInfo={activeInfo} locations={locations} />
        </div>
      )}
      {formPosition && (
        <Popup position={formPosition} ref={itemPopupRef}>
          <ItemForm position={latLngToPixelCoords(formPosition)} />
        </Popup>
      )}
    </>
  )
}

export default MapHandler
