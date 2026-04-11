import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import React from "react"
import ReactDOM from "react-dom/client"
import { RouterProvider, createBrowserRouter } from "react-router-dom"
import MapProvider from "./components/MapProvider.tsx"
import Navbar from "./components/Navbar.tsx"
import { ThemeProvider } from "./components/ThemeProvider.tsx"
import "./global.css"
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
      <ThemeProvider defaultTheme="system">
        <div className="flex h-screen w-screen flex-col">
          <Navbar />
          <RouterProvider router={router} />
        </div>
      </ThemeProvider>
    </QueryClientProvider>
  </React.StrictMode>,
)
