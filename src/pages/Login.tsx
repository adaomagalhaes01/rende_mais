import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { ArrowLeft, Mail, Lock, Eye, EyeOff, Phone } from "lucide-react"
import { motion } from "framer-motion"

export default function Login() {
  const navigate = useNavigate()
  const [mode, setMode] = useState<"phone" | "email">("phone")
  const [showPass, setShowPass] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    navigate("/cliente/dashboard")
  }

  const inputStyle: React.CSSProperties = {
    width: "100%",
    height: "48px",
    border: "1.5px solid #e5e7eb",
    borderRadius: "10px",
    fontSize: "15px",
    background: "#f9fafb",
    color: "#111827",
    outline: "none",
    transition: "border-color 0.15s",
    boxSizing: "border-box",
  }

  return (
    <div style={{ minHeight: "100vh", display: "flex", fontFamily: "'Inter', system-ui, sans-serif" }}>

      {/* Left panel */}
      <div style={{ flex: 1, display: "none", background: "#111827", position: "relative", overflow: "hidden" }} className="login-left">
        <img
          src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=1200&auto=format&fit=crop"
          alt="Profissionais Angola"
          style={{ width: "100%", height: "100%", objectFit: "cover", opacity: 0.3, position: "absolute", inset: 0 }}
        />
        <div style={{ position: "relative", zIndex: 1, height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", padding: "40px" }}>
          <Link to="/" style={{ fontWeight: 800, fontSize: "28px", color: "white", textDecoration: "none" }}>
            Renda<span style={{ color: "var(--primary)" }}>+</span>
          </Link>
          <div>
            <h2 style={{ fontSize: "36px", fontWeight: 800, color: "white", lineHeight: 1.2, marginBottom: "16px" }}>
              Ganha mais fazendo o que sabes de melhor.
            </h2>
            <p style={{ color: "#9ca3af", fontSize: "17px", lineHeight: 1.6 }}>
              A plataforma líder em serviços e microtrabalho em Angola.
            </p>
          </div>
        </div>
      </div>

      {/* Right panel - form */}
      <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", padding: "40px 24px", background: "white", minWidth: 0 }}>
        <Link to="/" style={{ position: "absolute", top: "24px", left: "24px", display: "flex", alignItems: "center", gap: "6px", color: "#6b7280", textDecoration: "none", fontSize: "14px", fontWeight: 500 }}>
          <ArrowLeft size={18} /> Voltar
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}
          style={{ width: "100%", maxWidth: "400px" }}
        >
          {/* Logo mobile */}
          <div style={{ textAlign: "center", marginBottom: "32px" }}>
            <Link to="/" style={{ fontWeight: 800, fontSize: "28px", color: "#111827", textDecoration: "none" }}>
              Renda<span style={{ color: "var(--primary)" }}>+</span>
            </Link>
            <h1 style={{ fontSize: "24px", fontWeight: 800, color: "#111827", marginTop: "24px", marginBottom: "6px" }}>Bem-vindo(a) de volta</h1>
            <p style={{ color: "#6b7280", fontSize: "15px" }}>Acede à tua conta para continuar</p>
          </div>

          {/* Mode toggle */}
          <div style={{ display: "flex", background: "#f3f4f6", borderRadius: "10px", padding: "4px", marginBottom: "24px" }}>
            {(["phone", "email"] as const).map(m => (
              <button
                key={m}
                onClick={() => setMode(m)}
                style={{
                  flex: 1,
                  padding: "8px",
                  borderRadius: "8px",
                  border: "none",
                  cursor: "pointer",
                  fontWeight: 600,
                  fontSize: "14px",
                  background: mode === m ? "white" : "transparent",
                  color: mode === m ? "#111827" : "#6b7280",
                  boxShadow: mode === m ? "0 1px 4px rgba(0,0,0,0.08)" : "none",
                  transition: "all 0.2s",
                }}
              >
                {m === "phone" ? "Telefone" : "E-mail"}
              </button>
            ))}
          </div>

          <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            {mode === "phone" ? (
              <div>
                <label style={{ display: "block", fontWeight: 600, fontSize: "14px", color: "#374151", marginBottom: "6px" }}>Número de Telefone</label>
                <div style={{ position: "relative" }}>
                  <div style={{ position: "absolute", left: "12px", top: "50%", transform: "translateY(-50%)", fontWeight: 600, fontSize: "14px", color: "#374151", display: "flex", alignItems: "center", gap: "4px" }}>
                    <Phone size={14} /> +244
                  </div>
                  <input
                    type="tel"
                    placeholder="9XX XXX XXX"
                    required
                    style={{ ...inputStyle, paddingLeft: "80px", paddingRight: "16px" }}
                  />
                </div>
              </div>
            ) : (
              <div>
                <label style={{ display: "block", fontWeight: 600, fontSize: "14px", color: "#374151", marginBottom: "6px" }}>Endereço de E-mail</label>
                <div style={{ position: "relative" }}>
                  <Mail size={16} style={{ position: "absolute", left: "14px", top: "50%", transform: "translateY(-50%)", color: "#9ca3af" }} />
                  <input
                    type="email"
                    placeholder="teu@email.com"
                    required
                    style={{ ...inputStyle, paddingLeft: "42px", paddingRight: "16px" }}
                  />
                </div>
              </div>
            )}

            <div>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "6px" }}>
                <label style={{ fontWeight: 600, fontSize: "14px", color: "#374151" }}>Palavra-passe</label>
                <a href="#" style={{ fontSize: "13px", color: "var(--primary)", textDecoration: "none", fontWeight: 600 }}>Esqueceste-te?</a>
              </div>
              <div style={{ position: "relative" }}>
                <Lock size={16} style={{ position: "absolute", left: "14px", top: "50%", transform: "translateY(-50%)", color: "#9ca3af" }} />
                <input
                  type={showPass ? "text" : "password"}
                  placeholder="••••••••"
                  required
                  style={{ ...inputStyle, paddingLeft: "42px", paddingRight: "48px" }}
                />
                <button type="button" onClick={() => setShowPass(!showPass)} style={{ position: "absolute", right: "12px", top: "50%", transform: "translateY(-50%)", background: "none", border: "none", cursor: "pointer", color: "#9ca3af" }}>
                  {showPass ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            <button
              type="submit"
              style={{ width: "100%", height: "50px", background: "var(--primary)", color: "white", border: "none", borderRadius: "10px", fontWeight: 700, fontSize: "16px", cursor: "pointer", transition: "background 0.15s", marginTop: "8px", boxShadow: "0 6px 20px rgba(255,138,0,0.3)" }}
            >
              Entrar
            </button>

            <div style={{ display: "flex", alignItems: "center", gap: "12px", margin: "8px 0" }}>
              <div style={{ flex: 1, height: "1px", background: "#e5e7eb" }} />
              <span style={{ fontSize: "13px", color: "#9ca3af" }}>ou</span>
              <div style={{ flex: 1, height: "1px", background: "#e5e7eb" }} />
            </div>

            <button
              type="button"
              style={{ width: "100%", height: "48px", background: "white", color: "#374151", border: "1.5px solid #e5e7eb", borderRadius: "10px", fontWeight: 600, fontSize: "15px", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", gap: "10px" }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/></svg>
              Entrar com Google
            </button>
          </form>

          <p style={{ textAlign: "center", marginTop: "28px", fontSize: "14px", color: "#6b7280" }}>
            Ainda não tens conta?{" "}
            <Link to="/registo-prestador" style={{ color: "var(--primary)", fontWeight: 700, textDecoration: "none" }}>Registar-me</Link>
          </p>
        </motion.div>
      </div>

      <style>{`
        @media (min-width: 768px) {
          .login-left { display: block !important; }
        }
      `}</style>
    </div>
  )
}
