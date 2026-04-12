import { cn } from "@/lib/utils"
import type { LearnMethod } from "@/server/db/enums/MoveLearnMethod"
import type { PokemonWithNamesAndMoves } from "@/server/types/Pokemon"
import { TYPE_COLORS } from "@/constants/TypeColors"
import { MISC_METHODS, formatName } from "./constants"

type MoveTableProps = {
  moves: PokemonWithNamesAndMoves["moves"]
  method: LearnMethod | "misc"
}

export default function MoveTable({ moves, method }: MoveTableProps) {
  const filtered =
    method === "misc"
      ? moves.filter(m => MISC_METHODS.has(m.learnMethod))
      : moves.filter(m => m.learnMethod === method)

  const sorted =
    method === "level-up"
      ? [...filtered].sort((a, b) => a.level - b.level || a.move.name.localeCompare(b.move.name))
      : [...filtered].sort((a, b) => a.move.name.localeCompare(b.move.name))

  const showLevel = method === "level-up"
  const showMethod = method === "misc"

  const gridCols = showLevel
    ? "grid-cols-[2rem_1fr_4rem_2.5rem_2.5rem]"
    : showMethod
      ? "grid-cols-[5rem_1fr_4rem_2.5rem_2.5rem]"
      : "grid-cols-[1fr_4rem_2.5rem_2.5rem]"

  return (
    <div className="text-xs">
      <div className={cn("text-muted-foreground mb-1 grid gap-x-2 px-1 font-medium", gridCols)}>
        {showLevel && <span className="text-right">Lv</span>}
        {showMethod && <span>Method</span>}
        <span>Name</span>
        <span className="text-center">Type</span>
        <span className="text-right">Pow</span>
        <span className="text-right">Acc</span>
      </div>
      {sorted.map((pm, i) => (
        <div
          key={i}
          className={cn("hover:bg-muted/60 grid items-center gap-x-2 rounded px-1 py-0.5", gridCols)}
        >
          {showLevel && (
            <span className="text-muted-foreground text-right tabular-nums">{pm.level}</span>
          )}
          {showMethod && (
            <span className="text-muted-foreground truncate">{formatName(pm.learnMethod)}</span>
          )}
          <span className="capitalize">{formatName(pm.move.name)}</span>
          <span
            className={cn(
              "justify-self-center rounded px-1 py-0.5 text-center text-white capitalize",
              TYPE_COLORS[pm.move.type] ?? "bg-gray-400",
            )}
          >
            {pm.move.type}
          </span>
          <span className="text-right tabular-nums">{pm.move.power ?? "—"}</span>
          <span className="text-right tabular-nums">{pm.move.accuracy ?? "—"}</span>
        </div>
      ))}
    </div>
  )
}
