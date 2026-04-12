import { TableCell, TableRow } from "@/components/ui/table.tsx"
import { TYPE_COLORS } from "@/constants/TypeColors"
import { cn } from "@/lib/utils.ts"
import type { GroupedEncounter } from "@/types/GroupedEncounter.ts"
import type { Pokemon } from "@/server/types/Pokemon"
import { memo } from "react"

function formatMethod(method: string): string {
  return method
    .split("-")
    .map(w => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ")
}

type EncounterRowProps = {
  enc: GroupedEncounter
  rowKey: string
  onSelect: (pokemon: Pokemon) => void
}

const EncounterRow = memo(({ enc, rowKey, onSelect }: EncounterRowProps) => {
  const primaryType = enc.pokemon.types[0]
  const secondaryType = enc.pokemon.types[1]

  return (
    <TableRow
      key={rowKey}
      className="bg-card text-card-foreground hover:bg-card-foreground/20 col-span-full mr-3 grid cursor-pointer grid-cols-subgrid overflow-hidden rounded-2xl border-0 shadow-sm"
      onClick={() => onSelect(enc.pokemon)}
    >
      <TableCell className="py-2">
        <div className="flex items-center gap-2">
          <img className="-m-3 w-10 shrink-0" src={`/sprites/pokemon/${enc.pokemon.id}.gif`} />
          <div className="ml-2 flex flex-col gap-0.5">
            <span className="font-medium capitalize">{enc.pokemon.name}</span>
            <div className="flex flex-row gap-1">
              {primaryType && (
                <span
                  className={cn(
                    "w-fit rounded px-1.5 py-0.5 text-xs text-white capitalize",
                    TYPE_COLORS[primaryType] ?? "bg-gray-400",
                  )}
                >
                  {primaryType}
                </span>
              )}
              {secondaryType && (
                <span
                  className={cn(
                    "w-fit rounded px-1.5 py-0.5 text-xs text-white capitalize",
                    TYPE_COLORS[secondaryType] ?? "bg-gray-400",
                  )}
                >
                  {secondaryType}
                </span>
              )}
            </div>
          </div>
        </div>
      </TableCell>
      <TableCell className="flex items-center justify-center py-2 tabular-nums">
        {enc.minLevel === enc.maxLevel ? enc.minLevel : `${enc.minLevel}–${enc.maxLevel}`}
      </TableCell>
      <TableCell className="flex items-center justify-center py-2">
        {formatMethod(enc.encounterMethod)}
      </TableCell>
      <TableCell className="text-primary flex items-center justify-center py-2 font-semibold">
        {enc.encounterChance}%
      </TableCell>
    </TableRow>
  )
})

export default EncounterRow
