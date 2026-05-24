import { useState } from "react"
import { Link, useLocation } from "react-router-dom"
import { Search, Bell, MapPin, LogIn, Menu, X } from "lucide-react"

export default function Navbar() {
  const location = useLocation()
  const [menuOpen, setMenuOpen] = useState(false)

  const navLinks = [
    { to: "/", label: "Início" },
    { to: "/procurar", label: "Serviços" },
    { to: "/como-funciona", label: "Como Funciona" },
    { to: "/sobre", label: "Sobre Nós" },
  ]

  const isActive = (to: string) => location.pathname === to

  return (
    <header style={{ position: "sticky", top: 0, zIndex: 100, width: "100%", backgroundColor: "rgba(255,255,255,0.97)", backdropFilter: "blur(8px)", borderBottom: "1px solid #e5e7eb" }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 16px", height: "60px", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "12px" }}>

        {/* Logo */}
        <Link to="/" style={{ display: "flex", alignItems: "center", gap: "6px", textDecoration: "none", flexShrink: 0 }}>
          <div style={{ height: "40px", display: "flex", alignItems: "center" }}>
            <img src="/LogoR.PNG" alt="Renda+" style={{ height: "100%", width: "auto" }} />
          </div>
          <span style={{ fontWeight: 800, fontSize: "20px", color: "#111827" }}>
            Renda<span style={{ color: "var(--primary)" }}>+</span>
          </span>
        </Link>

        {/* Desktop Nav Links */}
        <nav style={{ display: "flex", gap: "4px", alignItems: "center" }} className="desktop-only">
          {navLinks.map(link => (
            <Link
              key={link.to}
              to={link.to}
              style={{
                padding: "7px 14px",
                borderRadius: "8px",
                textDecoration: "none",
                fontWeight: 500,
                fontSize: "14px",
                color: isActive(link.to) ? "var(--primary)" : "#6b7280",
                backgroundColor: isActive(link.to) ? "rgba(245,158,11,0.08)" : "transparent",
                transition: "all 0.15s",
              }}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop Search */}
        <div style={{ display: "flex", flex: 1, maxWidth: "300px", position: "relative" }} className="desktop-only">
          <Search style={{ position: "absolute", left: "12px", top: "50%", transform: "translateY(-50%)", color: "#9ca3af", width: "15px", height: "15px" }} />
          <input
            type="text"
            placeholder="Procurar serviços..."
            style={{ width: "100%", height: "38px", paddingLeft: "34px", paddingRight: "12px", borderRadius: "999px", border: "1px solid #e5e7eb", background: "#f9fafb", fontSize: "13px", outline: "none", color: "#111827" }}
          />
        </div>

        {/* Right Actions */}
        <div style={{ display: "flex", alignItems: "center", gap: "6px", flexShrink: 0 }}>
          <div style={{ display: "flex", alignItems: "center", gap: "4px", fontSize: "12px", color: "#6b7280" }} className="desktop-only">
            <MapPin style={{ width: "13px", height: "13px", color: "var(--primary)" }} />
            <span>Luanda</span>
          </div>

          <button style={{ padding: "7px", borderRadius: "999px", border: "none", background: "transparent", cursor: "pointer", color: "#6b7280", position: "relative" }}>
            <Bell style={{ width: "19px", height: "19px" }} />
            <span style={{ position: "absolute", top: "5px", right: "5px", width: "7px", height: "7px", background: "#ef4444", borderRadius: "999px", border: "2px solid white" }} />
          </button>

          <Link
            to="/login"
            style={{ display: "flex", alignItems: "center", gap: "5px", padding: "7px 14px", borderRadius: "999px", background: "var(--primary)", color: "white", textDecoration: "none", fontWeight: 600, fontSize: "13px" }}
          >
            <LogIn style={{ width: "15px", height: "15px" }} />
            <span className="desktop-only">Entrar</span>
          </Link>

          {/* Hamburger (mobile only) */}
          <button
            className="mobile-only"
            onClick={() => setMenuOpen(o => !o)}
            style={{ padding: "7px", borderRadius: "8px", border: "none", background: "transparent", cursor: "pointer", color: "#374151" }}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <div className="mobile-only" style={{ background: "white", borderTop: "1px solid #e5e7eb", padding: "12px 16px 20px" }}>
          {/* Mobile Search */}
          <div style={{ position: "relative", marginBottom: "12px" }}>
            <Search style={{ position: "absolute", left: "12px", top: "50%", transform: "translateY(-50%)", color: "#9ca3af", width: "15px", height: "15px" }} />
            <input
              type="text"
              placeholder="Procurar serviços..."
              style={{ width: "100%", height: "42px", paddingLeft: "36px", paddingRight: "16px", borderRadius: "10px", border: "1px solid #e5e7eb", background: "#f9fafb", fontSize: "14px", outline: "none", color: "#111827", boxSizing: "border-box" }}
            />
          </div>
          {/* Nav links */}
          <nav style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
            {navLinks.map(link => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setMenuOpen(false)}
                style={{
                  padding: "11px 14px",
                  borderRadius: "10px",
                  textDecoration: "none",
                  fontWeight: 600,
                  fontSize: "15px",
                  color: isActive(link.to) ? "var(--primary)" : "#374151",
                  background: isActive(link.to) ? "rgba(245,158,11,0.07)" : "transparent",
                }}
              >
                {link.label}
              </Link>
            ))}
          </nav>
          {/* Location indicator */}
          <div style={{ display: "flex", alignItems: "center", gap: "6px", marginTop: "12px", paddingTop: "12px", borderTop: "1px solid #f3f4f6", color: "#6b7280", fontSize: "13px" }}>
            <MapPin size={14} style={{ color: "var(--primary)" }} /> Luanda, Angola
          </div>
        </div>
      )}

      <style>{`
        @media (min-width: 769px) {
          .mobile-only { display: none !important; }
        }
        @media (max-width: 768px) {
          .desktop-only { display: none !important; }
        }
      `}</style>
    </header>
  )
}
