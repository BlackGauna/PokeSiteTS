import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import React from "react"
import ReactDOM from "react-dom/client"
import { RouterProvider, createBrowserRouter } from "react-router-dom"
import MapProvider from "./components/MapProvider.tsx"
import "./global.css"
import "./index.css"
import DatabaseSetup from "./pages/DatabaseSetup.tsx"

const router = createBrowserRouter([
  {
    path: "/setup",
    element: <DatabaseSetup />,
  },
  {
    path: "/",
    element: <MapProvider />,
    errorElement: <div>Error, site not found!</div>,
  },
])

export const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>,
)
