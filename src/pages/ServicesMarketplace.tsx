import { useState } from "react"
import { Link } from "react-router-dom"
import { Search, SlidersHorizontal, Star, ShieldCheck, Clock, MapPin, CheckCircle2 } from "lucide-react"
import { motion } from "framer-motion"

const allProviders = [
  { id: 1, name: "Ana Maria", category: "Eletricidade", rating: 4.9, reviews: 124, price: "5.000 Kz/h", distance: "2.5 km", verified: true, available: true, time: "30 min", image: "/p1.jpg" },
  { id: 2, name: "Gracieth De Fatima", category: "Limpeza", rating: 4.8, reviews: 89, price: "3.500 Kz/h", distance: "1.2 km", verified: true, available: true, time: "15 min", image: "/pp2.jpeg" },
  { id: 3, name: "Adriano Manuel", category: "Canalização", rating: 5.0, reviews: 201, price: "8.000 Kz/h", distance: "5.0 km", verified: true, available: false, time: "Amanhã", image: "/p3.jpg" },
  { id: 4, name: "Patricio Ngola", category: "Estética", rating: 4.7, reviews: 56, price: "15.000 Kz", distance: "3.1 km", verified: false, available: true, time: "45 min", image: "/p4.jpg" },
  { id: 5, name: "Herodis Buela", category: "Informática", rating: 4.8, reviews: 77, price: "6.000 Kz/h", distance: "0.8 km", verified: true, available: true, time: "20 min", image: "/p5.jpg" },
  { id: 6, name: "Mariano Ngunzu", category: "Explicações", rating: 4.9, reviews: 145, price: "4.000 Kz/h", distance: "2.0 km", verified: true, available: true, time: "25 min", image: "/p6.jpg" },
  { id: 7, name: "Nicolau Jonas", category: "Construção", rating: 4.6, reviews: 38, price: "10.000 Kz/h", distance: "6.5 km", verified: true, available: false, time: "Amanhã", image: "/p7.jpg" },
  { id: 8, name: "Teresa Neto", category: "Limpeza", rating: 4.8, reviews: 103, price: "4.000 Kz/h", distance: "1.8 km", verified: true, available: true, time: "10 min", image: "/p1.jpg" },
]

const categories = ["Todas", "Limpeza", "Eletricidade", "Canalização", "Estética", "Explicações", "Informática", "Construção"]

export default function ServicesMarketplace() {
  const [activeCategory, setActiveCategory] = useState("Todas")
  const [query, setQuery] = useState("")

  const filtered = allProviders.filter(p => {
    const matchCat = activeCategory === "Todas" || p.category === activeCategory
    const matchQ = query === "" || p.name.toLowerCase().includes(query.toLowerCase()) || p.category.toLowerCase().includes(query.toLowerCase())
    return matchCat && matchQ
  })

  return (
    <div style={{ minHeight: "100vh", background: "#f8f9fa", paddingBottom: "40px" }}>
      {/* Search header */}
      <div style={{ background: "white", borderBottom: "1px solid #e5e7eb", padding: "16px" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <h1 style={{ fontSize: "clamp(20px, 4vw, 28px)", fontWeight: 800, color: "#111827", marginBottom: "4px" }}>Encontra profissionais</h1>
          <p style={{ color: "#6b7280", fontSize: "13px", marginBottom: "14px" }}>Especialistas prontos para te ajudar</p>

          <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
            <div style={{ flex: 1, minWidth: "200px", position: "relative" }}>
              <Search style={{ position: "absolute", left: "12px", top: "50%", transform: "translateY(-50%)", color: "#9ca3af", width: "16px", height: "16px" }} />
              <input
                value={query}
                onChange={e => setQuery(e.target.value)}
                type="text"
                placeholder="Ex: Eletricista, Limpeza..."
                style={{ width: "100%", height: "46px", paddingLeft: "40px", paddingRight: "12px", borderRadius: "10px", border: "1.5px solid #e5e7eb", fontSize: "14px", outline: "none", boxSizing: "border-box", background: "#f9fafb", color: "#111827" }}
              />
            </div>
            <button style={{ height: "46px", padding: "0 14px", background: "white", border: "1.5px solid #e5e7eb", borderRadius: "10px", display: "flex", alignItems: "center", gap: "6px", cursor: "pointer", fontWeight: 600, fontSize: "13px", color: "#374151", whiteSpace: "nowrap" }}>
              <SlidersHorizontal size={16} /> Filtros
            </button>
            <button style={{ height: "46px", padding: "0 20px", background: "var(--primary)", border: "none", borderRadius: "10px", color: "white", fontWeight: 700, fontSize: "14px", cursor: "pointer", whiteSpace: "nowrap" }}>
              Pesquisar
            </button>
          </div>
        </div>
      </div>

      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "16px" }}>
        {/* Category pills - horizontally scrollable on mobile */}
        <div style={{ display: "flex", gap: "8px", overflowX: "auto", paddingBottom: "8px", marginBottom: "16px", scrollbarWidth: "none" }}>
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              style={{
                padding: "8px 16px",
                borderRadius: "999px",
                border: `1.5px solid ${activeCategory === cat ? "#111827" : "#e5e7eb"}`,
                background: activeCategory === cat ? "#111827" : "white",
                color: activeCategory === cat ? "white" : "#374151",
                fontWeight: 600,
                fontSize: "13px",
                cursor: "pointer",
                whiteSpace: "nowrap",
                flexShrink: 0,
                transition: "all 0.15s",
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Results header */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "16px", flexWrap: "wrap", gap: "8px" }}>
          <h2 style={{ fontSize: "16px", fontWeight: 700, color: "#111827" }}>
            {activeCategory === "Todas" ? "Todos os profissionais" : activeCategory}
            <span style={{ color: "#9ca3af", fontWeight: 400, fontSize: "14px", marginLeft: "6px" }}>({filtered.length})</span>
          </h2>
          <select style={{ border: "1px solid #e5e7eb", borderRadius: "8px", padding: "7px 10px", fontSize: "13px", color: "#374151", outline: "none", cursor: "pointer", background: "white" }}>
            <option>Mais próximos</option>
            <option>Melhor avaliados</option>
            <option>Menor preço</option>
          </select>
        </div>

        {/* Responsive Grid - 2 cols on mobile, 3-4 on desktop */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: "14px" }}>
          {filtered.map((p, i) => (
            <motion.div key={p.id} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.04 }}>
              <Link to={`/prestador/${p.id}`} style={{ display: "flex", flexDirection: "column", background: "white", borderRadius: "14px", border: "1px solid #e5e7eb", overflow: "hidden", textDecoration: "none", boxShadow: "0 1px 4px rgba(0,0,0,0.04)", height: "100%" }}>
                <div style={{ position: "relative", aspectRatio: "3/2", overflow: "hidden" }}>
                  <img src={p.image} alt={p.name} style={{ width: "100%", height: "100%", objectFit: "cover" }} loading="lazy" />
                  {p.verified && (
                    <div style={{ position: "absolute", top: "8px", left: "8px", background: "rgba(255,255,255,0.92)", borderRadius: "6px", padding: "2px 7px", display: "flex", alignItems: "center", gap: "3px" }}>
                      <ShieldCheck size={11} style={{ color: "#10b981" }} />
                      <span style={{ fontSize: "10px", fontWeight: 700, color: "#111827" }}>Verificado</span>
                    </div>
                  )}
                  <div
                    style={{ position: "absolute", top: "8px", right: "8px", width: "28px", height: "28px", background: "rgba(255,255,255,0.88)", borderRadius: "999px", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }}
                    onClick={e => e.preventDefault()}
                  >
                    <svg width="13" height="13" fill="none" stroke="#6b7280" strokeWidth="2" viewBox="0 0 24 24"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" /></svg>
                  </div>
                </div>
                <div style={{ padding: "12px", flex: 1, display: "flex", flexDirection: "column", gap: "4px" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                    <h3 style={{ fontWeight: 700, fontSize: "14px", color: "#111827" }}>{p.name}</h3>
                    <div style={{ display: "flex", alignItems: "center", gap: "2px", fontSize: "12px", fontWeight: 600, color: "#111827" }}>
                      <Star size={12} style={{ fill: "#f59e0b", color: "#f59e0b" }} />
                      {p.rating}
                    </div>
                  </div>
                  <p style={{ fontSize: "12px", color: "#6b7280" }}>{p.category}</p>
                  <div style={{ display: "flex", gap: "10px", fontSize: "11px", color: "#9ca3af", marginTop: "2px" }}>
                    <span style={{ display: "flex", alignItems: "center", gap: "2px" }}><MapPin size={10} />{p.distance}</span>
                    <span style={{ display: "flex", alignItems: "center", gap: "2px" }}><Clock size={10} />{p.time}</span>
                  </div>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "10px", paddingTop: "10px", borderTop: "1px solid #f3f4f6" }}>
                    <div>
                      <span style={{ fontWeight: 700, fontSize: "13px", color: "#111827" }}>{p.price}</span>
                      {p.available
                        ? <div style={{ display: "flex", alignItems: "center", gap: "3px", fontSize: "10px", color: "#10b981", fontWeight: 600, marginTop: "2px" }}><CheckCircle2 size={10} /> Disponível</div>
                        : <div style={{ display: "flex", alignItems: "center", gap: "3px", fontSize: "10px", color: "#f59e0b", fontWeight: 600, marginTop: "2px" }}><Clock size={10} /> Ocupado</div>
                      }
                    </div>
                    <Link to={`/prestador/${p.id}`} onClick={e => e.stopPropagation()} style={{ background: "rgba(245,158,11,0.1)", color: "var(--primary)", borderRadius: "7px", padding: "6px 12px", fontWeight: 700, fontSize: "12px", textDecoration: "none" }}>
                      Contratar
                    </Link>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 480px) {
          div[style*="minmax(220px"] {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
      `}</style>
    </div>
  )
}
