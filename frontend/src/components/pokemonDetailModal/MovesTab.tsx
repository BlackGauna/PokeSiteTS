import { usePokemon } from "@/api/PokemonApi"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import type { LearnMethod } from "@/server/db/enums/MoveLearnMethod"
import { Loader } from "lucide-react"
import { useState } from "react"
import { KNOWN_TABS, MISC_METHODS } from "./constants"
import MoveTable from "./MoveTable"

type MovesTabProps = { pokemonName: string }

export default function MovesTab({ pokemonName }: MovesTabProps) {
  const [fetched, setFetched] = useState(false)
  const { data, isPending } = usePokemon(pokemonName, fetched)

  if (!fetched) {
    setFetched(true)
  }

  if (isPending || !data) {
    return (
      <div className="flex h-32 items-center justify-center">
        <Loader className="text-muted-foreground animate-spin" size={24} />
      </div>
    )
  }

  const { moves } = data.pokemon

  const hasMisc = moves.some(m => MISC_METHODS.has(m.learnMethod))
  const availableTabs = KNOWN_TABS.filter(t => moves.some(m => m.learnMethod === t.key))
  if (hasMisc) availableTabs.push({ key: "misc" as LearnMethod, label: "Misc" })

  if (availableTabs.length === 0) {
    return <p className="text-muted-foreground py-4 text-center text-sm">No move data available.</p>
  }

  return (
    <Tabs defaultValue={availableTabs[0].key} className="flex min-h-0 flex-1 flex-col">
      <TabsList className="mb-3 flex h-auto shrink-0 flex-wrap gap-1 bg-transparent p-0">
        {availableTabs.map(t => (
          <TabsTrigger
            key={t.key}
            value={t.key}
            className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground rounded-md border px-2.5 py-1 text-xs data-[state=active]:shadow-none"
          >
            {t.label}
          </TabsTrigger>
        ))}
      </TabsList>
      <ScrollArea className="h-full min-h-0 w-full pr-4">
        {availableTabs.map(t => (
          <TabsContent key={t.key} value={t.key}>
            <MoveTable moves={moves} method={t.key as LearnMethod | "misc"} />
          </TabsContent>
        ))}
      </ScrollArea>
    </Tabs>
  )
}
