import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  type SortingState,
  useReactTable,
} from "@tanstack/react-table"
import { ArrowDown, ArrowUp, ArrowUpDown } from "lucide-react"
import { useEffect, useMemo, useRef, useState } from "react"

import EncounterRow from "@/components/EncounterRow.tsx"
import {
  Table,
  TableBody,
  TableCaption,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table.tsx"
import { METHOD_INDEX } from "@/constants/mapConstants.ts"
import { cn } from "@/lib/utils.ts"
import type {
  LocationEncounterWithPokemon,
  LocationWithEncounters,
} from "@/server/types/Location.ts"
import type { GroupedEncounter } from "@/types/GroupedEncounter.ts"
import { useMap } from "react-leaflet"
import { ScrollArea } from "./ui/scroll-area"

// Row model factories must live outside the component — recreating them every render
// causes TanStack to rebuild its entire row model on each state update.
const coreRowModel = getCoreRowModel<GroupedEncounter>()
const sortedRowModel = getSortedRowModel<GroupedEncounter>()

const columnHelper = createColumnHelper<GroupedEncounter>()

const columns = [
  columnHelper.accessor("pokemon", {
    header: "Pokemon",
    sortingFn: (a, b) => a.original.pokemon.name.localeCompare(b.original.pokemon.name),
  }),
  columnHelper.accessor("minLevel", {
    header: "Level",
    sortingFn: "basic",
  }),
  columnHelper.accessor("encounterMethod", {
    header: "Method",
    sortingFn: (a, b) =>
      (METHOD_INDEX[a.original.encounterMethod] ?? Infinity) -
      (METHOD_INDEX[b.original.encounterMethod] ?? Infinity),
  }),
  columnHelper.accessor("encounterChance", {
    header: "Chance",
    sortingFn: "basic",
  }),
]

function groupEncounters(encounters: LocationEncounterWithPokemon[]): GroupedEncounter[] {
  const pokemonEncounters: GroupedEncounter[] = []

  for (const encounter of encounters) {
    const groupedEncounter = pokemonEncounters.find(
      group =>
        group.pokemon.id === encounter.pokemonId &&
        group.encounterMethod === encounter.encounterMethod,
    )

    if (!groupedEncounter) {
      pokemonEncounters.push({
        encounterChance: encounter.encounterChance,
        encounterMethod: encounter.encounterMethod,
        encounters: [encounter],
        maxLevel: encounter.maxLevel,
        minLevel: encounter.minLevel,
        pokemon: encounter.pokemon,
      })
      continue
    }

    groupedEncounter.encounters.push(encounter)
    groupedEncounter.encounterChance += encounter.encounterChance
    groupedEncounter.minLevel = Math.min(groupedEncounter.minLevel, encounter.minLevel)
    groupedEncounter.maxLevel = Math.max(groupedEncounter.maxLevel, encounter.maxLevel)
  }

  return pokemonEncounters
}

type EncounterTableProps = {
  activeInfo: string
  location: LocationWithEncounters | undefined
}

// Separate inner component so that `key={activeInfo}` on it (set by the outer component)
// naturally resets all state (sorting, open rows) whenever the selected location changes.
type ContentProps = {
  locationName: string
  encounters: GroupedEncounter[]
}

function EncounterTableContent({ locationName, encounters }: ContentProps) {
  const [sorting, setSorting] = useState<SortingState>([{ id: "encounterMethod", desc: false }])
  const [openRows, setOpenRows] = useState<Set<string>>(new Set())

  const table = useReactTable({
    data: encounters,
    columns,
    state: { sorting },
    onSortingChange: setSorting,
    getCoreRowModel: coreRowModel,
    getSortedRowModel: sortedRowModel,
  })

  function toggleRow(key: string) {
    setOpenRows(prev => {
      const next = new Set(prev)
      if (next.has(key)) next.delete(key)
      else next.add(key)
      return next
    })
  }

  const map = useMap()
  const containerRef = useRef<HTMLDivElement>(null)

  const gridLayout =
    "grid shrink-0 grid-cols-[minmax(0,2fr)_minmax(0,1fr)_minmax(0,1fr)_minmax(0,1fr)]"

  useEffect(() => {
    const el = containerRef.current
    if (!el || !map) return

    const disableZoom = () => {
      map.scrollWheelZoom.disable()
      map.dragging.disable() // Optional: prevents map dragging while over table
    }

    const enableZoom = () => {
      map.scrollWheelZoom.enable()
      map.dragging.enable()
    }

    // Attach native DOM listeners to bypass React's event system entirely
    el.addEventListener("mouseenter", disableZoom)
    el.addEventListener("mouseleave", enableZoom)

    return () => {
      el.removeEventListener("mouseenter", disableZoom)
      el.removeEventListener("mouseleave", enableZoom)
      // Ensure zoom is re-enabled if component unmounts
      map.scrollWheelZoom.enable()
    }
  }, [map])

  return (
    <div ref={containerRef} className="flex h-full flex-col overflow-hidden px-2">
      <Table className={gridLayout}>
        <TableHeader className="contents [&_tr]:border-0">
          {table.getHeaderGroups().map(headerGroup => (
            <TableRow
              key={headerGroup.id}
              className="col-span-full grid grid-cols-subgrid border-0 hover:bg-inherit"
            >
              {headerGroup.headers.map(header => (
                <TableHead
                  key={header.id}
                  className={cn(
                    "flex justify-center select-none",
                    header.column.getCanSort() && "cursor-pointer",
                  )}
                  onClick={header.column.getToggleSortingHandler()}
                >
                  <div className="flex items-center gap-1">
                    {flexRender(header.column.columnDef.header, header.getContext())}
                    {header.column.getIsSorted() === "asc" ? (
                      <ArrowUp size={13} />
                    ) : header.column.getIsSorted() === "desc" ? (
                      <ArrowDown size={13} />
                    ) : (
                      <ArrowUpDown size={13} className="text-muted-foreground" />
                    )}
                  </div>
                </TableHead>
              ))}
            </TableRow>
          ))}
        </TableHeader>
      </Table>

      <ScrollArea className="flex-1 overflow-y-auto">
        <Table className={cn(gridLayout, "gap-y-1.5")}>
          <TableBody className="contents">
            {table.getRowModel().rows.map((row, index) => {
              const enc = row.original
              const rowKey = `${enc.pokemon.id}_${enc.encounterMethod}`
              return (
                <EncounterRow
                  key={rowKey}
                  enc={enc}
                  rowKey={rowKey}
                  index={index}
                  isOpen={openRows.has(rowKey)}
                  onToggle={() => toggleRow(rowKey)}
                />
              )
            })}
          </TableBody>

          <TableCaption className="col-span-full">Catchable pokemon at {locationName}</TableCaption>
        </Table>
      </ScrollArea>
    </div>
  )
}

export default function EncounterTable({ activeInfo, location }: EncounterTableProps) {
  // Pre-sort by method then chance descending so the initial view is ordered
  // without needing TanStack's controlled sorting state at startup.
  const encounters = useMemo(
    () =>
      location
        ? groupEncounters(location.encounters).sort(
            (a, b) =>
              (METHOD_INDEX[a.encounterMethod] ?? Infinity) -
                (METHOD_INDEX[b.encounterMethod] ?? Infinity) ||
              b.encounterChance - a.encounterChance,
          )
        : [],
    [location],
  )

  if (!location) return null

  return (
    // key here makes EncounterTableContent fully remount on location change,
    // resetting sorting and open-row state automatically — no useEffect needed.
    <EncounterTableContent key={activeInfo} locationName={activeInfo} encounters={encounters} />
  )
}
