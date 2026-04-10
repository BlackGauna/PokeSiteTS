import type { App } from "@/server/server"
import { treaty } from "@elysiajs/eden"

export const client = treaty<App>(import.meta.env.VITE_SERVER_URL!)
