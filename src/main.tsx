import React from "react"
import ReactDOM from "react-dom/client"
import "./index.css"
import "./global.css"
import { RouterProvider, createBrowserRouter } from "react-router-dom"
import DatabaseSetup from "./pages/DatabaseSetup.tsx"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import Map from "./pages/Map.tsx"

const router = createBrowserRouter([
  {
    path: "/setup",
    element: <DatabaseSetup />,
  },
  {
    path: "/",
    element: <Map />,
    errorElement: <div>Error, site not found!</div>,
  },
])

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>,
)
