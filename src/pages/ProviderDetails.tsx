import { useParams, Link } from "react-router-dom"
import { Star, MapPin, Clock, ShieldCheck, CheckCircle2, ChevronLeft, Calendar } from "lucide-react"

export default function ProviderDetails() {
  const { id } = useParams()

  // Mock data for the provider
  const p = {
    id,
    name: "Carlos Mendes",
    role: "Eletricista Profissional & Técnico de Frio",
    rating: 4.9,
    reviews: 124,
    price: "8.000 Kz",
    priceUnit: "/ serviço",
    location: "Talatona, Luanda",
    distance: "2.5 km",
    verified: true,
    available: true,
    about: "Tenho mais de 10 anos de experiência na área de eletricidade e climatização industrial e residencial. Faço reparações, manutenções preventivas e montagem de raiz de qualquer tipo de equipamento de frio.",
    skills: ["Montagem de AC", "Reparação de quadros", "Fiação elétrica", "Limpeza de filtros"],
    image: "/p3.jpg",
    portfolio: [
      "/p1.jpg",
      "/p5.jpg",
      "/p7.jpg"
    ]
  }

  return (
    <div style={{ background: "#f9fafb", minHeight: "100vh", fontFamily: "'Inter', sans-serif" }}>
      {/* Header Back Button */}
      <div style={{ background: "white", padding: "16px 24px", borderBottom: "1px solid #e5e7eb" }}>
        <div style={{ maxWidth: "1000px", margin: "0 auto", display: "flex", alignItems: "center" }}>
          <Link to="/procurar" style={{ display: "flex", alignItems: "center", gap: "8px", textDecoration: "none", color: "#374151", fontWeight: 600 }}>
            <ChevronLeft size={20} /> Voltar aos resultados
          </Link>
        </div>
      </div>

      <div style={{ maxWidth: "1000px", margin: "0 auto", padding: "32px 24px", display: "flex", gap: "32px", flexWrap: "wrap", alignItems: "flex-start" }}>
        
        {/* Left Column (Main Info) */}
        <div style={{ flex: "1 1 600px", display: "flex", flexDirection: "column", gap: "24px" }}>
          
          <div style={{ background: "white", borderRadius: "16px", overflow: "hidden", border: "1px solid #e5e7eb" }}>
            <div style={{ width: "100%", height: "280px", background: "#f3f4f6" }}>
              <img src={p.image} alt={p.name} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            </div>
            
            <div style={{ padding: "32px" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "16px" }}>
                <div>
                  <h1 style={{ fontSize: "28px", fontWeight: 800, color: "#111827", marginBottom: "8px", display: "flex", alignItems: "center", gap: "12px" }}>
                    {p.name}
                    {p.verified && (
                      <span style={{ display: "inline-flex", alignItems: "center", gap: "4px", background: "rgba(16, 185, 129, 0.1)", color: "#10b981", fontSize: "12px", padding: "4px 8px", borderRadius: "8px" }}>
                        <ShieldCheck size={14} /> Verificado
                      </span>
                    )}
                  </h1>
                  <p style={{ fontSize: "16px", color: "#4b5563" }}>{p.role}</p>
                </div>
                
                <div style={{ textAlign: "right" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "18px", fontWeight: 700 }}>
                    <Star size={20} style={{ fill: "#f59e0b", color: "#f59e0b" }} />
                    {p.rating}
                  </div>
                  <div style={{ fontSize: "13px", color: "#6b7280", marginTop: "4px" }}>{p.reviews} avaliações</div>
                </div>
              </div>

              <div style={{ display: "flex", gap: "24px", margin: "24px 0", flexWrap: "wrap" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "8px", color: "#4b5563", fontSize: "14px" }}>
                  <MapPin size={18} style={{ color: "var(--primary)" }} /> {p.location} (a {p.distance})
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "8px", color: "#10b981", fontSize: "14px", fontWeight: 600 }}>
                  <Clock size={18} /> {p.available ? "Disponível Hoje" : "Ocupado"}
                </div>
              </div>

              <hr style={{ border: "none", borderTop: "1px solid #e5e7eb", margin: "24px 0" }} />

              <h2 style={{ fontSize: "18px", fontWeight: 700, marginBottom: "12px", color: "#111827" }}>Sobre o profissional</h2>
              <p style={{ color: "#4b5563", lineHeight: 1.6, fontSize: "15px" }}>{p.about}</p>

              <h2 style={{ fontSize: "18px", fontWeight: 700, margin: "24px 0 12px", color: "#111827" }}>Especialidades</h2>
              <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
                {p.skills.map(s => (
                  <span key={s} style={{ background: "#f3f4f6", color: "#374151", padding: "6px 12px", borderRadius: "8px", fontSize: "13px", fontWeight: 500 }}>
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div style={{ background: "white", borderRadius: "16px", padding: "32px", border: "1px solid #e5e7eb" }}>
            <h2 style={{ fontSize: "18px", fontWeight: 700, marginBottom: "20px", color: "#111827" }}>Portfólio de Trabalhos</h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(150px, 1fr))", gap: "12px" }}>
              {p.portfolio.map((img, i) => (
                <div key={i} style={{ aspectRatio: "1", borderRadius: "12px", overflow: "hidden" }}>
                  <img src={img} alt="Trabalho" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Right Column (Sticky Box) */}
        <div style={{ flex: "1 1 320px", position: "sticky", top: "100px" }}>
          <div style={{ background: "white", borderRadius: "16px", padding: "32px", border: "1px solid #e5e7eb", boxShadow: "0 10px 25px rgba(0,0,0,0.05)" }}>
            
            <div style={{ display: "flex", alignItems: "baseline", gap: "8px", marginBottom: "24px" }}>
              <span style={{ fontSize: "32px", fontWeight: 800, color: "#111827" }}>{p.price}</span>
              <span style={{ color: "#6b7280", fontWeight: 500 }}>{p.priceUnit}</span>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "12px", marginBottom: "32px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", color: "#4b5563", fontSize: "14px" }}>
                <CheckCircle2 size={18} style={{ color: "var(--primary)" }} /> Consulta inicial grátis
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", color: "#4b5563", fontSize: "14px" }}>
                <CheckCircle2 size={18} style={{ color: "var(--primary)" }} /> Deslocação incluída
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", color: "#4b5563", fontSize: "14px" }}>
                <CheckCircle2 size={18} style={{ color: "var(--primary)" }} /> Garantia de 30 dias
              </div>
            </div>

            <Link to={`/checkout/${p.id}`} style={{ display: "flex", justifyContent: "center", alignItems: "center", width: "100%", background: "var(--primary)", color: "white", padding: "16px", borderRadius: "12px", fontWeight: 700, fontSize: "16px", textDecoration: "none", boxShadow: "0 6px 16px rgba(255, 138, 0, 0.3)", marginBottom: "16px", transition: "transform 0.15s" }}>
              Contratar Agora
            </Link>

            <button style={{ width: "100%", background: "white", border: "1.5px solid #e5e7eb", color: "#374151", padding: "14px", borderRadius: "12px", fontWeight: 600, fontSize: "15px", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", gap: "8px" }}>
              <Calendar size={18} /> Agendar para depois
            </button>
            
            <p style={{ textAlign: "center", fontSize: "12px", color: "#9ca3af", marginTop: "24px", lineHeight: 1.5 }}>
              O teu pagamento é seguro com a Renda+. O prestador só recebe após o trabalho ser concluído.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
