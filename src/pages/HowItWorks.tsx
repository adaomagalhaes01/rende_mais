import { Search, CalendarCheck, CreditCard, Star, ShieldCheck } from "lucide-react"

export default function HowItWorks() {
  return (
    <div style={{ fontFamily: "'Inter', sans-serif" }}>
      {/* Header */}
      <div style={{ background: "#111827", padding: "80px 24px", textAlign: "center", color: "white" }}>
        <h1 style={{ fontSize: "clamp(32px, 5vw, 48px)", fontWeight: 800, marginBottom: "16px" }}>Como funciona a Renda+</h1>
        <p style={{ fontSize: "18px", color: "#9ca3af", maxWidth: "600px", margin: "0 auto" }}>
          Um processo simples, transparente e extremamente seguro para contratares profissionais de qualidade em Angola.
        </p>
      </div>

      {/* Steps */}
      <div style={{ maxWidth: "1000px", margin: "0 auto", padding: "64px 24px" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: "64px" }}>
          
          <div style={{ display: "flex", gap: "32px", alignItems: "center", flexWrap: "wrap" }}>
            <div style={{ flex: 1, minWidth: "300px" }}>
              <div style={{ width: "64px", height: "64px", background: "var(--primary)", color: "white", borderRadius: "16px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "24px", fontWeight: 800, marginBottom: "20px" }}>
                1
              </div>
              <h2 style={{ fontSize: "28px", fontWeight: 800, marginBottom: "16px" }}>Pesquisa e Escolhe</h2>
              <p style={{ fontSize: "16px", color: "#6b7280", lineHeight: 1.7, marginBottom: "16px" }}>
                Digita o serviço que precisas. O nosso algoritmo irá apresentar os melhores prestadores perto de ti, com base nas suas avaliações, histórico e disponibilidade. Podes ver o perfil completo de cada um e o preço cobrado antes de tomar qualquer decisão.
              </p>
            </div>
            <div style={{ flex: 1, minWidth: "300px", background: "#f8f9fa", padding: "40px", borderRadius: "24px", display: "flex", justifyContent: "center" }}>
              <Search size={80} style={{ color: "var(--primary)" }} />
            </div>
          </div>

          <div style={{ display: "flex", gap: "32px", alignItems: "center", flexWrap: "wrap", flexDirection: "row-reverse" }}>
            <div style={{ flex: 1, minWidth: "300px" }}>
              <div style={{ width: "64px", height: "64px", background: "var(--primary)", color: "white", borderRadius: "16px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "24px", fontWeight: 800, marginBottom: "20px" }}>
                2
              </div>
              <h2 style={{ fontSize: "28px", fontWeight: 800, marginBottom: "16px" }}>Agenda o Serviço</h2>
              <p style={{ fontSize: "16px", color: "#6b7280", lineHeight: 1.7, marginBottom: "16px" }}>
                Envia uma solicitação para o prestador escolhido. Podes usar o nosso chat interno para partilhar fotos do problema, negociar detalhes e combinar o melhor horário para o atendimento. Tudo sem precisares partilhar o teu número pessoal.
              </p>
            </div>
            <div style={{ flex: 1, minWidth: "300px", background: "#f8f9fa", padding: "40px", borderRadius: "24px", display: "flex", justifyContent: "center" }}>
              <CalendarCheck size={80} style={{ color: "var(--primary)" }} />
            </div>
          </div>

          <div style={{ display: "flex", gap: "32px", alignItems: "center", flexWrap: "wrap" }}>
            <div style={{ flex: 1, minWidth: "300px" }}>
              <div style={{ width: "64px", height: "64px", background: "var(--primary)", color: "white", borderRadius: "16px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "24px", fontWeight: 800, marginBottom: "20px" }}>
                3
              </div>
              <h2 style={{ fontSize: "28px", fontWeight: 800, marginBottom: "16px" }}>Pagamento Seguro (Escrow)</h2>
              <p style={{ fontSize: "16px", color: "#6b7280", lineHeight: 1.7, marginBottom: "16px" }}>
                Ao contratar, o dinheiro é retido na nossa plataforma de forma segura. O profissional faz o serviço sabendo que o dinheiro já está garantido, e tu só o libertas após confirmares presencialmente que o trabalho foi bem feito!
              </p>
            </div>
            <div style={{ flex: 1, minWidth: "300px", background: "#f8f9fa", padding: "40px", borderRadius: "24px", display: "flex", justifyContent: "center" }}>
              <CreditCard size={80} style={{ color: "var(--primary)" }} />
            </div>
          </div>

          <div style={{ display: "flex", gap: "32px", alignItems: "center", flexWrap: "wrap", flexDirection: "row-reverse" }}>
            <div style={{ flex: 1, minWidth: "300px" }}>
              <div style={{ width: "64px", height: "64px", background: "var(--primary)", color: "white", borderRadius: "16px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "24px", fontWeight: 800, marginBottom: "20px" }}>
                4
              </div>
              <h2 style={{ fontSize: "28px", fontWeight: 800, marginBottom: "16px" }}>Avalia o Profissional</h2>
              <p style={{ fontSize: "16px", color: "#6b7280", lineHeight: 1.7, marginBottom: "16px" }}>
                No final, podes dar 1 a 5 estrelas e deixar um comentário. Isso ajuda a manter a nossa comunidade segura e garante que apenas os melhores prestadores recebem os selos de verificação máxima.
              </p>
            </div>
            <div style={{ flex: 1, minWidth: "300px", background: "#f8f9fa", padding: "40px", borderRadius: "24px", display: "flex", justifyContent: "center" }}>
              <Star size={80} style={{ color: "var(--primary)" }} />
            </div>
          </div>

        </div>
      </div>
      
      {/* Trust banner */}
      <div style={{ background: "rgba(16, 185, 129, 0.1)", padding: "48px 24px", textAlign: "center" }}>
        <ShieldCheck size={48} style={{ color: "#10b981", margin: "0 auto 16px" }} />
        <h3 style={{ fontSize: "24px", fontWeight: 800, color: "#111827", marginBottom: "8px" }}>Garantia Renda+</h3>
        <p style={{ color: "#6b7280", maxWidth: "500px", margin: "0 auto" }}>
          Se o serviço não for entregue conforme o acordado, garantimos a devolução do teu dinheiro após uma análise justa pela nossa equipa de mediação.
        </p>
      </div>
    </div>
  )
}
