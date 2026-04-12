import { CornerDownRight } from "lucide-react"

import { TableCell, TableRow } from "@/components/ui/table.tsx"
import { TYPE_COLORS } from "@/constants/TypeColors"
import { cn } from "@/lib/utils.ts"
import type { GroupedEncounter } from "@/types/GroupedEncounter.ts"
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
  index: number
  isOpen: boolean
  onToggle: () => void
}

const EncounterRow = memo(({ enc, rowKey, index, isOpen, onToggle }: EncounterRowProps) => {
  const primaryType = enc.pokemon.types[0]
  const secondaryType = enc.pokemon.types[1]

  return (
    <>
      <TableRow
        className="bg-card text-card-foreground hover:bg-card-foreground/20 col-span-full mr-3 grid cursor-pointer grid-cols-subgrid overflow-hidden rounded-2xl border-0 shadow-sm"
        onClick={onToggle}
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

      {isOpen &&
        enc.encounters.map((subEnc, i) => (
          <TableRow
            key={`${rowKey}_${index}_sub_${i}`}
            className="bg-muted/40 text-card-foreground col-span-full mr-4 ml-2 grid grid-cols-subgrid overflow-hidden rounded-xl border"
          >
            <TableCell className="py-1.5 pl-3">
              <div className="flex items-center gap-1">
                <CornerDownRight
                  size={13}
                  strokeWidth={1.5}
                  className="text-muted-foreground shrink-0"
                />
                <img className="-m-2 w-8 shrink-0" src={`/sprites/pokemon/${enc.pokemon.id}.gif`} />
                <span className="ml-1 text-sm capitalize">{enc.pokemon.name}</span>
              </div>
            </TableCell>
            <TableCell className="py-1.5 text-center text-sm tabular-nums">
              {subEnc.minLevel === subEnc.maxLevel
                ? subEnc.minLevel
                : `${subEnc.minLevel}–${subEnc.maxLevel}`}
            </TableCell>
            <TableCell className="py-1.5 text-center text-sm">
              {formatMethod(subEnc.encounterMethod)}
            </TableCell>
            <TableCell className="text-primary py-1.5 text-center text-sm font-semibold">
              {subEnc.encounterChance}%
            </TableCell>
          </TableRow>
        ))}
    </>
  )
})

export default EncounterRow
