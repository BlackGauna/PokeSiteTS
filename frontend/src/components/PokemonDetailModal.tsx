import { usePokemon } from "@/api/PokemonApi"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { TYPE_COLORS } from "@/constants/TypeColors"
import { cn } from "@/lib/utils"
import type { Pokemon } from "@/server/types/Pokemon"
import MovesTab from "./pokemonDetailModal/MovesTab"
import StatsTab from "./pokemonDetailModal/StatsTab"

type Props = {
  pokemon: Pokemon | null
  onClose: () => void
}

export default function PokemonDetailModal({ pokemon, onClose }: Props) {
  const { data: detail } = usePokemon(pokemon?.name ?? "", pokemon !== null)
  const percentiles = detail?.percentiles

  return (
    <Dialog open={pokemon !== null} onOpenChange={open => !open && onClose()}>
      <DialogContent className="flex h-full max-h-[70vh] min-h-104 max-w-lg flex-col gap-4 overflow-hidden">
        {pokemon && (
          <>
            <DialogHeader>
              <div className="flex items-center gap-3">
                <img
                  className="h-16 w-16 object-contain"
                  src={`/sprites/pokemon/${pokemon.id}.gif`}
                  alt={pokemon.name}
                />
                <div>
                  <DialogTitle className="text-xl capitalize">{pokemon.name}</DialogTitle>
                  <div className="mt-1 flex gap-1">
                    {pokemon.types.map(type => (
                      <span
                        key={type}
                        className={cn(
                          "rounded px-1.5 py-0.5 text-xs text-white capitalize",
                          TYPE_COLORS[type] ?? "bg-gray-400",
                        )}
                      >
                        {type}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </DialogHeader>

            <Tabs defaultValue="stats" className="flex min-h-0 flex-1 flex-col overflow-hidden">
              <TabsList className="flex w-fit">
                <TabsTrigger value="stats">Stats</TabsTrigger>
                <TabsTrigger value="moves">Moves</TabsTrigger>
              </TabsList>

              <TabsContent value="stats" className="mt-3">
                <StatsTab pokemon={pokemon} percentiles={percentiles} />
              </TabsContent>

              <TabsContent value="moves" className="mt-3 flex min-h-0 flex-1 flex-col">
                <MovesTab pokemonName={pokemon.name} />
              </TabsContent>
            </Tabs>
          </>
        )}
      </DialogContent>
    </Dialog>
  )
}
