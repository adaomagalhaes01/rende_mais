import { Link } from "react-router-dom"
import { ShieldCheck, Zap, Users, Target } from "lucide-react"

export default function About() {
  return (
    <div style={{ padding: "64px 24px", maxWidth: "900px", margin: "0 auto", fontFamily: "'Inter', sans-serif" }}>
      <h1 style={{ fontSize: "clamp(32px, 5vw, 48px)", fontWeight: 800, color: "#111827", marginBottom: "24px" }}>
        Sobre a Renda<span style={{ color: "var(--primary)" }}>+</span>
      </h1>
      
      <p style={{ fontSize: "18px", lineHeight: 1.7, color: "#4b5563", marginBottom: "40px" }}>
        A Renda+ é uma startup focada em transformar a maneira como os angolanos contratam serviços e microtrabalhos. 
        Nascemos da necessidade de criar um ecossistema seguro e transparente, conectando milhares de profissionais 
        talentosos a clientes que procuram qualidade, confiança e rapidez.
      </p>
      
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "24px", marginBottom: "64px" }}>
        <div style={{ background: "white", padding: "32px", borderRadius: "16px", border: "1px solid #e5e7eb", boxShadow: "0 4px 6px rgba(0,0,0,0.05)" }}>
          <Target size={32} style={{ color: "var(--primary)", marginBottom: "16px" }} />
          <h3 style={{ fontSize: "20px", fontWeight: 700, marginBottom: "12px", color: "#111827" }}>Nossa Missão</h3>
          <p style={{ color: "#6b7280", lineHeight: 1.6 }}>
            Formalizar o mercado de prestação de serviços em Angola, proporcionando ferramentas digitais que geram mais renda para os trabalhadores e mais segurança para os consumidores.
          </p>
        </div>
        
        <div style={{ background: "white", padding: "32px", borderRadius: "16px", border: "1px solid #e5e7eb", boxShadow: "0 4px 6px rgba(0,0,0,0.05)" }}>
          <Users size={32} style={{ color: "var(--primary)", marginBottom: "16px" }} />
          <h3 style={{ fontSize: "20px", fontWeight: 700, marginBottom: "12px", color: "#111827" }}>Nossa Visão</h3>
          <p style={{ color: "#6b7280", lineHeight: 1.6 }}>
            Ser a plataforma número um em todo o território nacional, democratizando o acesso ao trabalho digno e permitindo que qualquer pessoa com talento possa empreender.
          </p>
        </div>
      </div>

      <h2 style={{ fontSize: "28px", fontWeight: 800, color: "#111827", marginBottom: "32px" }}>Nossos Valores</h2>
      
      <div style={{ display: "flex", flexDirection: "column", gap: "20px", marginBottom: "48px" }}>
        <div style={{ display: "flex", gap: "16px", alignItems: "flex-start" }}>
          <div style={{ padding: "12px", background: "rgba(255,138,0,0.1)", borderRadius: "12px", color: "var(--primary)" }}>
            <ShieldCheck size={24} />
          </div>
          <div>
            <h4 style={{ fontWeight: 700, fontSize: "18px", color: "#111827" }}>Segurança em 1º Lugar</h4>
            <p style={{ color: "#6b7280", marginTop: "4px" }}>Todos os nossos utilizadores passam por um processo rigoroso de verificação KYC para garantir um ambiente seguro para todos.</p>
          </div>
        </div>
        
        <div style={{ display: "flex", gap: "16px", alignItems: "flex-start" }}>
          <div style={{ padding: "12px", background: "rgba(255,138,0,0.1)", borderRadius: "12px", color: "var(--primary)" }}>
            <Zap size={24} />
          </div>
          <div>
            <h4 style={{ fontWeight: 700, fontSize: "18px", color: "#111827" }}>Agilidade e Excelência</h4>
            <p style={{ color: "#6b7280", marginTop: "4px" }}>Acreditamos que o tempo é valioso. A nossa tecnologia é otimizada para respostas rápidas, mesmo em conexões lentas.</p>
          </div>
        </div>
      </div>
      
      <div style={{ textAlign: "center", padding: "48px", background: "#f8f9fa", borderRadius: "16px" }}>
        <h3 style={{ fontSize: "24px", fontWeight: 800, marginBottom: "16px" }}>Junta-te a nós hoje</h3>
        <p style={{ color: "#6b7280", marginBottom: "24px" }}>Faz parte da comunidade que está a revolucionar os serviços em Angola.</p>
        <Link to="/registo-prestador" style={{ display: "inline-block", background: "var(--primary)", color: "white", padding: "12px 24px", borderRadius: "8px", fontWeight: 700, textDecoration: "none" }}>
          Tornar-se Prestador
        </Link>
      </div>
    </div>
  )
}
