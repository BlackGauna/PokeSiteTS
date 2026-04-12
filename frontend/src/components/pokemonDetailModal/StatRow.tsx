import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip"
import { cn } from "@/lib/utils"
import type { PokemonPercentiles } from "@/server/db/queries/pokemon.queries"
import type { Pokemon } from "@/server/types/Pokemon"
import { TYPE_BADGE_LIGHT } from "./constants"

type PercentileBadgeProps = {
  value: number
  className: string
  tooltip: string
}

function PercentileBadge({ value, className, tooltip }: PercentileBadgeProps) {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <span
          className={cn(
            "cursor-default rounded px-1 py-0.5 text-xs tabular-nums",
            className,
          )}
        >
          {value}%
        </span>
      </TooltipTrigger>
      <TooltipContent>{tooltip}</TooltipContent>
    </Tooltip>
  )
}

type StatRowProps = {
  label: string
  value: number
  barColor: string
  percentiles?: PokemonPercentiles[keyof PokemonPercentiles]
  types: Pokemon["types"]
}

// Renders as `display: contents` — cells go directly into the parent grid.
export default function StatRow({ label, value, barColor, percentiles, types }: StatRowProps) {
  return (
    <>
      <span className="text-muted-foreground text-right text-xs font-medium uppercase">
        {label}
      </span>

      <div className="bg-muted h-2 overflow-hidden rounded-full self-center">
        <div
          className={cn("h-full rounded-full", barColor)}
          style={{ width: `${Math.round((value / 255) * 100)}%` }}
        />
      </div>

      <span className="text-right text-sm tabular-nums">{value}</span>

      {/* Global badge */}
      <div className="flex justify-center">
        {percentiles && (
          <PercentileBadge
            value={percentiles.global}
            className="bg-muted text-muted-foreground"
            tooltip={`Better than ${percentiles.global}% of all Pokémon`}
          />
        )}
      </div>

      {/* Type-1 badge */}
      <div className="flex justify-center">
        {percentiles && types[0] && percentiles.byType[types[0]] !== undefined && (
          <PercentileBadge
            value={percentiles.byType[types[0]]!}
            className={TYPE_BADGE_LIGHT[types[0]] ?? "bg-gray-100 text-gray-600"}
            tooltip={`Better than ${percentiles.byType[types[0]]!}% of ${types[0]}-type Pokémon`}
          />
        )}
      </div>

      {/* Type-2 badge — column always present for alignment, empty for mono-type */}
      <div className="flex justify-center">
        {percentiles && types[1] && percentiles.byType[types[1]] !== undefined && (
          <PercentileBadge
            value={percentiles.byType[types[1]]!}
            className={TYPE_BADGE_LIGHT[types[1]] ?? "bg-gray-100 text-gray-600"}
            tooltip={`Better than ${percentiles.byType[types[1]]!}% of ${types[1]}-type Pokémon`}
          />
        )}
      </div>
    </>
  )
}
