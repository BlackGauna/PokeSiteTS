import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import React from "react"
import ReactDOM from "react-dom/client"
import { RouterProvider, createBrowserRouter } from "react-router-dom"
import MapProvider from "./components/MapProvider.tsx"
import { ThemeProvider } from "./components/ThemeProvider.tsx"
import "./global.css"
import DatabaseSetup from "./pages/DatabaseSetup.tsx"
import RootLayout from "./root.tsx"

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <div>Error, site not found!</div>,
    children: [
      {
        path: "/",
        element: <MapProvider />,
      },
      {
        path: "/setup",
        element: <DatabaseSetup />,
      },
    ],
  },
])

export const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider defaultTheme="system">
        <RouterProvider router={router} />
      </ThemeProvider>
    </QueryClientProvider>
  </React.StrictMode>,
)
