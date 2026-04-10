import { useQuery } from "@tanstack/react-query"
import { client } from "./client"

const adminKeys = {
  pokedex: () => ["admin", "pokedex"] as const,
}

// ── Queries ──────────────────────────────────────────────────────────────────

const getPokedex = async () => {
  const res = await client.admin.setup.pokedex.get()
  if (res.error) throw res.error
  return res.data
}

export const useGetPokedex = (enabled = false) =>
  useQuery({
    queryKey: adminKeys.pokedex(),
    queryFn: getPokedex,
    enabled,
  })

// ── Streaming helpers ─────────────────────────────────────────────────────────
// These POST endpoints stream newline-delimited JSON `{ log: string }` messages.
// We use raw fetch instead of Eden Treaty because Treaty doesn't support streaming.

async function streamAdminSetup(
  endpoint: string,
  onLog: (msg: string) => void,
): Promise<void> {
  const res = await fetch(`${import.meta.env.VITE_SERVER_URL}/${endpoint}`, { method: "POST" })

  if (!res.ok || !res.body) {
    throw new Error(`HTTP ${res.status}: ${res.statusText}`)
  }

  const reader = res.body.getReader()
  const decoder = new TextDecoder()
  let buf = ""

  while (true) {
    const { done, value } = await reader.read()
    if (done) break
    buf += decoder.decode(value, { stream: true })
    const lines = buf.split("\n")
    buf = lines.pop() ?? ""
    for (const line of lines) {
      if (!line.trim()) continue
      try {
        onLog((JSON.parse(line) as { log: string }).log)
      } catch {
        // skip malformed chunks
      }
    }
  }
}

export const streamSetupPokedex = (onLog: (msg: string) => void) =>
  streamAdminSetup("admin/setup/pokedex", onLog)

export const streamSetupLocations = (onLog: (msg: string) => void) =>
  streamAdminSetup("admin/setup/locations", onLog)
