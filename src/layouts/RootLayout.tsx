import { Outlet } from "react-router-dom"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

export default function RootLayout() {
  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column", background: "#f8f9fa", fontFamily: "'Inter', system-ui, sans-serif" }}>
      <Navbar />

      <main style={{ flex: 1, display: "flex", flexDirection: "column" }}>
        <Outlet />
      </main>

      <Footer />

      <style>{`
        main { padding-bottom: 20px; }
      `}</style>
    </div>
  )
}
