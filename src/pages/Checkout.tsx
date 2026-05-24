import { Link, useNavigate } from "react-router-dom"
import { ShieldCheck, ChevronLeft, CreditCard } from "lucide-react"

export default function Checkout() {
  const navigate = useNavigate()

  const handlePayment = (e: React.FormEvent) => {
    e.preventDefault()
    // Simulated payment processing
    setTimeout(() => {
      navigate("/cliente/dashboard")
    }, 1000)
  }

  return (
    <div style={{ background: "#f9fafb", minHeight: "100vh", fontFamily: "'Inter', sans-serif" }}>
      <div style={{ background: "white", padding: "16px 24px", borderBottom: "1px solid #e5e7eb" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto", display: "flex", alignItems: "center" }}>
          <Link to={-1 as any} style={{ display: "flex", alignItems: "center", gap: "8px", textDecoration: "none", color: "#374151", fontWeight: 600 }}>
            <ChevronLeft size={20} /> Voltar
          </Link>
        </div>
      </div>

      <div style={{ maxWidth: "800px", margin: "0 auto", padding: "40px 24px" }}>
        <h1 style={{ fontSize: "28px", fontWeight: 800, color: "#111827", marginBottom: "8px" }}>Finalizar Pedido</h1>
        <p style={{ color: "#6b7280", marginBottom: "32px" }}>Paga de forma segura e o dinheiro só é libertado no fim do serviço.</p>

        <div style={{ display: "flex", gap: "32px", flexWrap: "wrap", alignItems: "flex-start" }}>
          
          <div style={{ flex: "1 1 400px" }}>
            <form onSubmit={handlePayment} style={{ background: "white", borderRadius: "16px", padding: "32px", border: "1px solid #e5e7eb" }}>
              <h2 style={{ fontSize: "18px", fontWeight: 700, marginBottom: "20px", color: "#111827", display: "flex", alignItems: "center", gap: "8px" }}>
                <CreditCard size={20} style={{ color: "var(--primary)" }} /> Detalhes do Pagamento
              </h2>
              
              <div style={{ display: "flex", gap: "12px", marginBottom: "24px" }}>
                <div style={{ flex: 1, border: "2px solid var(--primary)", background: "rgba(255,138,0,0.05)", borderRadius: "12px", padding: "16px", textAlign: "center", cursor: "pointer", fontWeight: 700 }}>
                  Multicaixa
                </div>
                <div style={{ flex: 1, border: "1px solid #e5e7eb", borderRadius: "12px", padding: "16px", textAlign: "center", cursor: "pointer", color: "#6b7280", fontWeight: 600 }}>
                  Digital
                </div>
              </div>

              <div style={{ marginBottom: "20px" }}>
                <label style={{ display: "block", fontSize: "14px", fontWeight: 600, color: "#374151", marginBottom: "8px" }}>Nome no Cartão</label>
                <input type="text" placeholder="Nome Completo" required style={{ width: "100%", height: "48px", border: "1px solid #e5e7eb", borderRadius: "8px", padding: "0 16px", outline: "none", fontSize: "15px", background: "#f9fafb" }} />
              </div>
              
              <div style={{ marginBottom: "24px" }}>
                <label style={{ display: "block", fontSize: "14px", fontWeight: 600, color: "#374151", marginBottom: "8px" }}>Número (Express ou Referência)</label>
                <input type="text" placeholder="XXX XXX XXX" required style={{ width: "100%", height: "48px", border: "1px solid #e5e7eb", borderRadius: "8px", padding: "0 16px", outline: "none", fontSize: "15px", background: "#f9fafb" }} />
              </div>

              <button type="submit" style={{ width: "100%", background: "var(--primary)", color: "white", padding: "16px", borderRadius: "12px", fontWeight: 700, fontSize: "16px", border: "none", cursor: "pointer", boxShadow: "0 4px 12px rgba(255,138,0,0.3)" }}>
                Pagar e Confirmar 8.000 Kz
              </button>
            </form>
          </div>

          <div style={{ flex: "1 1 300px", background: "white", borderRadius: "16px", padding: "24px", border: "1px solid #e5e7eb" }}>
            <h3 style={{ fontSize: "16px", fontWeight: 700, marginBottom: "16px", color: "#111827" }}>Resumo do Pedido</h3>
            
            <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "20px" }}>
              <img src="/p3.jpg" alt="Provider" style={{ width: "60px", height: "60px", borderRadius: "12px", objectFit: "cover" }} />
              <div>
                <div style={{ fontWeight: 700, color: "#111827" }}>Carlos Mendes</div>
                <div style={{ fontSize: "13px", color: "#6b7280" }}>Eletricista Profissional</div>
              </div>
            </div>

            <div style={{ borderTop: "1px solid #e5e7eb", paddingTop: "16px", marginBottom: "16px" }}>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "12px", color: "#4b5563", fontSize: "14px" }}>
                <span>Serviço Base</span>
                <span>8.000 Kz</span>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "16px", color: "#4b5563", fontSize: "14px" }}>
                <span>Taxa da Plataforma</span>
                <span>Grátis</span>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", fontWeight: 800, fontSize: "18px", color: "#111827" }}>
                <span>Total</span>
                <span>8.000 Kz</span>
              </div>
            </div>

            <div style={{ display: "flex", alignItems: "flex-start", gap: "12px", background: "rgba(16, 185, 129, 0.1)", padding: "16px", borderRadius: "12px" }}>
              <ShieldCheck size={20} style={{ color: "#10b981", flexShrink: 0 }} />
              <p style={{ fontSize: "13px", color: "#065f46", lineHeight: 1.5, margin: 0 }}>
                O teu dinheiro está seguro na nossa carteira digital. Só é libertado para o prestador quando o serviço for concluído e tu aprovares.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
