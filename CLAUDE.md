# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

PokeSiteTS is a full-stack Pokemon companion app with an interactive Leaflet map displaying catchable Pokemon, item locations, and trainer battles for Pokemon games.

## Commands

All commands use **Bun** as the package manager and runtime.

```bash
# Full stack development (backend + frontend concurrently)
bun run dev

# Frontend only
bun run dev2

# Production build
bun run build

# Lint (zero-warning policy)
bun run lint

# Preview production build
bun run preview
```

- Frontend runs on port **5777**
- Backend runs on port **3000**

### Backend (from `backend/` directory)
```bash
bun run --hot src/server.ts   # backend dev server with hot reload
```

### Database migrations (Drizzle)
```bash
cd backend && bun drizzle-kit push   # push schema changes to DB
```

## Architecture

### Stack
- **Frontend**: React 19, React Router 7, TanStack Query 5, Leaflet/React-Leaflet, Tailwind CSS 4, Radix UI, React Hook Form + Zod
- **Backend**: Elysia (Bun-native web framework), Drizzle ORM, PostgreSQL
- **Type-safe RPC**: Elysia Eden Treaty client — the frontend calls the backend with full TypeScript inference, no manual type definitions needed for API responses

### Frontend (`frontend/`)

**Routing** (React Router in `main.tsx`):
- `/` → `MapProvider` → `MapHandler` (main interactive map)
- `/setup` → `DatabaseSetup` (admin: seed Pokedex data from PokeAPI)

**Map architecture** — the core complexity lives here:
- `MapProvider.tsx` — React-Leaflet container
- `RasterCoordsProvider.tsx` — Context that provides `L.RasterCoords` for mapping pixel coordinates to Leaflet lat/lng. Required because the map is a raster image, not a geo map.
- `MapHandler.tsx` (~850 lines) — All map interaction: renders `AreaRectangle` overlays per location, item markers, encounter table on area click, zoom-dependent icon sizing, Leaflet search plugin integration
- `AreaRectangle.tsx` — Clickable `L.Rectangle` overlay for a location's bounding box

**State management**:
- Server state: TanStack Query with structured query keys (see `src/api/`)
- UI state: local `useState`
- Map state: Leaflet `L.Map` ref + `RasterCoordsProvider` context

**API client** (`src/api/`):
- `client.ts` — Elysia Treaty client pointing to `VITE_SERVER_URL`
- `LocationApi.ts`, `ItemApi.ts` — React Query hooks wrapping the treaty client

**Path aliases**: `@/` maps to `src/` (configured in `tsconfig.json` and `vite.config.ts`)

### Backend (`backend/src/`)

```
server.ts           — Elysia app entrypoint, mounts all routes
routes/             — Route handlers (location, item, pokedex/admin)
db/
  db.ts             — Drizzle + postgres connection
  schemas/          — Drizzle table definitions (Location, Pokemon, Item, Move, Trainer, PokemonMove)
  enums/            — PostgreSQL enum types (Region, EncounterMethod, ItemType, etc.)
  api/              — Query functions used by routes (*.queries.ts)
imports/            — Scripts to seed data from PokeAPI
```

Key routes:
- `GET /api/locations/region/:name` — all locations for a region
- `GET /api/locations/location/:name` — single location with encounters
- `GET /api/items/...` — item placements
- `POST /admin/setup/pokedex` — seed Pokedex from PokeAPI (pokedex-promise-v2)

### Environment

Copy `.env.example` to `.env`. Requires a `DATABASE_URL` for PostgreSQL. A `docker-compose.yaml` is in `backend/` for spinning up Postgres locally.

## Code Conventions

- **Formatter**: Prettier — no semicolons, double quotes, trailing commas (all), 100 char print width
- **No unused locals/params** enforced by TypeScript compiler
- Drizzle ESLint plugin is active — follow Drizzle query patterns to avoid lint errors
- CSS Modules used for complex component styles (e.g., `itemMarker.module.css`)
- `cn()` utility in `src/lib/utils.ts` (clsx + tailwind-merge) for conditional classNames
