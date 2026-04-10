import { streamSetupLocations, streamSetupPokedex } from "@/api/AdminApi"
import { useEffect, useRef, useState } from "react"

function Spinner() {
  return (
    // Animated Spinner from https://github.com/n3r4zzurr0/svg-spinners/
    <svg
      className="animate-[spin_1.5s_linear_infinite] fill-gray-300"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M10.14,1.16a11,11,0,0,0-9,8.92A1.59,1.59,0,0,0,2.46,12,1.52,1.52,0,0,0,4.11,10.7a8,8,0,0,1,6.66-6.61A1.42,1.42,0,0,0,12,2.69h0A1.57,1.57,0,0,0,10.14,1.16Z" />
    </svg>
  )
}

function DatabaseSetup() {
  const [logLines, setLogLines] = useState<string[]>([])
  const [isRunning, setIsRunning] = useState(false)
  const logRef = useRef<HTMLDivElement>(null)

  const appendLog = (line: string) => setLogLines(prev => [...prev, line])

  const runTask = async (label: string, task: (onLog: (msg: string) => void) => Promise<void>) => {
    setIsRunning(true)
    setLogLines([`Starting: ${label}…`])
    try {
      await task(appendLog)
      appendLog("Done.")
    } catch (e) {
      appendLog(`Error: ${String(e)}`)
    } finally {
      setIsRunning(false)
    }
  }

  // Scroll to bottom whenever log grows
  useEffect(() => {
    if (logRef.current) {
      logRef.current.scrollTop = logRef.current.scrollHeight
    }
  }, [logLines])

  return (
    <div className="flex h-screen place-items-center justify-center gap-10">
      <div className="ml-8 flex flex-col gap-3">
        <button
          className="flex w-60 justify-center rounded-lg bg-blue-500 p-2 font-bold disabled:bg-blue-400"
          onClick={() => runTask("Fill Pokédex (Gen 3)", streamSetupPokedex)}
          disabled={isRunning}
        >
          {isRunning ? <Spinner /> : "Fill Pokédex (Gen 3)"}
        </button>
        <button
          className="flex w-60 justify-center rounded-lg bg-green-600 p-2 font-bold disabled:bg-green-400"
          onClick={() => runTask("Fill Locations (Hoenn)", streamSetupLocations)}
          disabled={isRunning}
        >
          {isRunning ? <Spinner /> : "Fill Locations (Hoenn)"}
        </button>
      </div>

      <div
        className="min-w-0 grow flex-col flex-wrap gap-2 place-self-start overflow-hidden pt-8"
        style={{ whiteSpace: "pre-line" }}
      >
        <div>
          <b>Log:</b>
        </div>
        <div ref={logRef} className="me-auto mr-10 h-[80vh] max-w-4xl overflow-y-auto border-2">
          {logLines.map((line, i) => (
            <p key={i} className="px-2">
              {line}
            </p>
          ))}
        </div>
      </div>
    </div>
  )
}

export default DatabaseSetup
