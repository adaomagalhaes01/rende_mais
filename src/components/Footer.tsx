import { Link } from "react-router-dom"
import { MapPin, Phone, Mail, Globe } from "lucide-react"

export default function Footer() {
  return (
    <footer style={{ background: "#111827", color: "white" }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "48px 16px 28px" }}>
        {/* Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: "32px", marginBottom: "40px" }}>

          {/* Brand */}
          <div>
            <Link to="/" style={{ textDecoration: "none", display: "inline-block", marginBottom: "12px" }}>
              <span style={{ fontWeight: 800, fontSize: "22px", color: "white" }}>
                Renda<span style={{ color: "var(--primary)" }}>+</span>
              </span>
            </Link>
            <p style={{ color: "#9ca3af", fontSize: "13px", lineHeight: "1.7", maxWidth: "240px", marginBottom: "16px" }}>
              A maior plataforma digital de serviços em Angola. Conectamos profissionais a clientes com qualidade e segurança.
            </p>
            <div style={{ display: "flex", gap: "8px" }}>
              {[
                { label: "FB", svg: <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg> },
                { label: "IG", svg: <Globe size={14} /> },
                { label: "TW", svg: <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" /></svg> },
                { label: "LI", svg: <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" /><circle cx="4" cy="4" r="2" /></svg> },
              ].map(s => (
                <a key={s.label} href="#" style={{ width: "32px", height: "32px", borderRadius: "999px", background: "#1f2937", display: "flex", alignItems: "center", justifyContent: "center", color: "#9ca3af", textDecoration: "none" }}>
                  {s.svg}
                </a>
              ))}
            </div>
          </div>

          {/* Para Clientes */}
          <div>
            <h3 style={{ fontWeight: 700, fontSize: "14px", marginBottom: "16px", color: "white", textTransform: "uppercase", letterSpacing: "0.05em" }}>Para Clientes</h3>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "10px" }}>
              {[
                { label: "Como Funciona", to: "/como-funciona" },
                { label: "Procurar Serviços", to: "/procurar" },
                { label: "FAQ", to: "/como-funciona" },
                { label: "Suporte", to: "/" },
              ].map(item => (
                <li key={item.label}>
                  <Link to={item.to} style={{ color: "#9ca3af", textDecoration: "none", fontSize: "13px" }}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Para Prestadores */}
          <div>
            <h3 style={{ fontWeight: 700, fontSize: "14px", marginBottom: "16px", color: "white", textTransform: "uppercase", letterSpacing: "0.05em" }}>Para Prestadores</h3>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "10px" }}>
              {[
                { label: "Tornar-se Prestador", to: "/registo-prestador" },
                { label: "Como Ganhar", to: "/como-funciona" },
                { label: "Regras", to: "/" },
                { label: "Suporte", to: "/" },
              ].map(item => (
                <li key={item.label}>
                  <Link to={item.to} style={{ color: "#9ca3af", textDecoration: "none", fontSize: "13px" }}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contactos */}
          <div>
            <h3 style={{ fontWeight: 700, fontSize: "14px", marginBottom: "16px", color: "white", textTransform: "uppercase", letterSpacing: "0.05em" }}>Contactos</h3>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              <div style={{ display: "flex", gap: "10px", alignItems: "flex-start" }}>
                <MapPin size={14} style={{ color: "var(--primary)", marginTop: "2px", flexShrink: 0 }} />
                <span style={{ color: "#9ca3af", fontSize: "13px", lineHeight: "1.6" }}>Talatona, Via AL15<br />Luanda, Angola</span>
              </div>
              <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
                <Phone size={14} style={{ color: "var(--primary)", flexShrink: 0 }} />
                <span style={{ color: "#9ca3af", fontSize: "13px" }}>+244 923 000 000</span>
              </div>
              <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
                <Mail size={14} style={{ color: "var(--primary)", flexShrink: 0 }} />
                <span style={{ color: "#9ca3af", fontSize: "13px" }}>suporte@rendamais.ao</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{ borderTop: "1px solid #1f2937", paddingTop: "20px", display: "flex", flexWrap: "wrap", gap: "12px", justifyContent: "space-between", alignItems: "center" }}>
          <p style={{ color: "#6b7280", fontSize: "12px" }}>
            &copy; {new Date().getFullYear()} Renda+ Angola. Todos os direitos reservados.
          </p>
          <div style={{ display: "flex", gap: "20px" }}>
            {["Termos de Uso", "Privacidade", "Cookies"].map(label => (
              <Link key={label} to="#" style={{ color: "#6b7280", fontSize: "12px", textDecoration: "none" }}>{label}</Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
