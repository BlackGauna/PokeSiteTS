import { TYPE_COLORS } from "@/constants/TypeColors"
import type { PokemonPercentiles } from "@/server/db/queries/pokemon.queries"
import type { Pokemon } from "@/server/types/Pokemon"
import { Separator } from "../ui/separator"
import StatRow from "./StatRow"

type StatsTabProps = {
  pokemon: Pokemon
  percentiles: PokemonPercentiles | undefined
}

export default function StatsTab({ pokemon, percentiles }: StatsTabProps) {
  const primaryType = pokemon.types[0]
  const barColor = primaryType ? (TYPE_COLORS[primaryType] ?? "bg-gray-400") : "bg-gray-400"

  // grid: label | bar | value | global% | type1% | type2%
  return (
    <div className="flex flex-col gap-4">
      <div className="grid grid-cols-[2.5rem_1fr_2rem_auto_auto_auto] items-center gap-x-2 gap-y-1.5">
        <StatRow
          label="HP"
          value={pokemon.hp}
          barColor={barColor}
          percentiles={percentiles?.hp}
          types={pokemon.types}
        />
        <StatRow
          label="ATK"
          value={pokemon.atk}
          barColor={barColor}
          percentiles={percentiles?.atk}
          types={pokemon.types}
        />
        <StatRow
          label="DEF"
          value={pokemon.def}
          barColor={barColor}
          percentiles={percentiles?.def}
          types={pokemon.types}
        />
        <StatRow
          label="SpA"
          value={pokemon.spAtk}
          barColor={barColor}
          percentiles={percentiles?.spAtk}
          types={pokemon.types}
        />
        <StatRow
          label="SpD"
          value={pokemon.spDef}
          barColor={barColor}
          percentiles={percentiles?.spDef}
          types={pokemon.types}
        />
        <StatRow
          label="SPE"
          value={pokemon.speed}
          barColor={barColor}
          percentiles={percentiles?.speed}
          types={pokemon.types}
        />
      </div>

      <Separator className="bg-border" />

      <div className="flex w-full justify-center">
        <div className="grid w-full grid-cols-2 gap-x-4 gap-y-1 px-12 text-sm">
          {pokemon.height !== null && (
            <div className="flex justify-between">
              <span className="text-muted-foreground">Height</span>
              <span className="tabular-nums">{(pokemon.height / 10).toFixed(1)} m</span>
            </div>
          )}

          {pokemon.captureRate !== null && (
            <div className="flex justify-between">
              <span className="text-muted-foreground">Catch rate</span>
              <span className="tabular-nums">{pokemon.captureRate}</span>
            </div>
          )}
          {pokemon.weight !== null && (
            <div className="flex justify-between">
              <span className="text-muted-foreground">Weight</span>
              <span className="tabular-nums">{(pokemon.weight / 10).toFixed(1)} kg</span>
            </div>
          )}
          {pokemon.baseExp !== null && (
            <div className="flex justify-between">
              <span className="text-muted-foreground">Base exp</span>
              <span className="tabular-nums">{pokemon.baseExp}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
