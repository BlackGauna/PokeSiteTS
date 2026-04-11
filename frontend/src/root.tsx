import { Outlet } from "react-router-dom"
import Navbar from "./components/Navbar"

export default function RootLayout() {
  return (
    <div className="flex h-screen w-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
    </div>
  )
}
