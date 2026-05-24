import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import {
  ShieldCheck, Zap, Star, Clock, ArrowRight, CheckCircle,
  MapPin, Heart, ChevronRight, Search
} from "lucide-react"

const categories = [
  { name: "Limpeza", count: "1.2k" },
  { name: "Eletricidade", count: "850" },
  { name: "Canalização", count: "620" },
  { name: "Estética", count: "2.1k" },
  { name: "Explicações", count: "1.5k" },
  { name: "Informática", count: "930" },
  { name: "Construção", count: "450" },
  { name: "Mototáxi", count: "3.4k" },
]

const providers = [
  {
    id: 1, name: "Ana Maria", role: "Eletricista Profissional", rating: 4.9, reviews: 124,
    price: "A partir de 5.000 Kz",
    image: "/p1.jpg",
  },
  {
    id: 2, name: "Maria Costa", role: "Serviços de Limpeza", rating: 4.8, reviews: 89,
    price: "A partir de 3.500 Kz",
    image: "/p2.jpg",
  },
  {
    id: 3, name: "Carlos Mendes", role: "Técnico de Frio", rating: 5.0, reviews: 201,
    price: "A partir de 8.000 Kz",
    image: "/p3.jpg",
  },
]

const testimonials = [
  {
    id: 1, name: "Ana Rodrigues", location: "Talatona, Luanda", rating: 5,
    text: "Encontrei um eletricista excelente em menos de 30 minutos! O serviço foi rápido e o preço muito justo. Vou sempre usar a Renda+.",
    avatar: "/p4.jpg",
  },
  {
    id: 2, name: "Pedro Fonseca", location: "Kilamba, Luanda", rating: 5,
    text: "Já usei várias vezes para serviços de canalização e limpeza. Os profissionais são todos verificados e de confiança. Recomendo!",
    avatar: "/p5.jpg",
  },
  {
    id: 3, name: "Sofia Ndombele", location: "Viana, Luanda", rating: 5,
    text: "Como prestadora, a Renda+ mudou a minha vida. Triplicou os meus clientes e recebo os pagamentos de forma segura.",
    avatar: "/p6.jpg",
  },
]

const steps = [
  { icon: <Search size={32} style={{ color: "var(--primary)" }} />, title: "1. Encontra", desc: "Pesquisa o serviço que precisas e escolhe o profissional ideal pelas avaliações e preço." },
  { icon: <Clock size={32} style={{ color: "var(--primary)" }} />, title: "2. Agenda", desc: "Combina o horário e todos os detalhes pelo chat seguro integrado na plataforma." },
  { icon: <ShieldCheck size={32} style={{ color: "var(--primary)" }} />, title: "3. Paga Seguro", desc: "Paga via app. O dinheiro só é libertado quando o serviço estiver concluído." },
]

const stats = [
  { value: "15.000+", label: "Clientes Activos" },
  { value: "2.800+", label: "Profissionais Verificados" },
  { value: "98%", label: "Taxa de Satisfação" },
  { value: "11", label: "Bairros em Luanda" },
]

const faqs = [
  { q: "Como funciona o pagamento?", a: "O teu dinheiro fica retido na nossa carteira digital até confirmares que o serviço foi concluído com sucesso. Só então é libertado para o prestador. Total segurança para ambos." },
  { q: "Os profissionais são verificados?", a: "Sim. Todos os prestadores passam por verificação de BI, selfie facial e avaliação de antecedentes antes de serem aprovados na plataforma." },
  { q: "Que métodos de pagamento são aceites?", a: "Aceitamos Multicaixa Express, Unitel Money, Afrimoney, transferência bancária e carteira digital Renda+." },
  { q: "E se não ficar satisfeito com o serviço?", a: "Tens até 24 horas para contestar o serviço. A nossa equipa analisa o caso e o reembolso é processado em até 3 dias úteis." },
]

export default function Home() {
  return (
    <div style={{ fontFamily: "'Inter', system-ui, sans-serif" }}>

      {/* ===== HERO ===== */}
      <section style={{ background: "white", overflow: "hidden" }}>
        <div className="pt-8 pb-10 px-4 md:pt-14 md:pb-16 md:px-6" style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <div style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: "32px", flexWrap: "wrap" }}>

            {/* Left */}
            <motion.div
              initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55 }}
              style={{ flex: "1 1 320px", minWidth: 0 }}
            >
              <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "rgba(255,138,0,0.1)", color: "var(--primary)", borderRadius: "999px", padding: "6px 14px", fontSize: "13px", fontWeight: 600, marginBottom: "24px" }}>
                <span style={{ width: "8px", height: "8px", background: "var(--primary)", borderRadius: "999px", display: "inline-block", animation: "pulse-dot 1.5s infinite" }} />
                Disponível em Luanda
              </div>

              <h1 style={{ fontSize: "clamp(28px, 5vw, 58px)", fontWeight: 800, lineHeight: 1.1, color: "#111827", marginBottom: "16px", letterSpacing: "-0.5px" }}>
                Serviços rápidos e seguros à{" "}
                <span style={{ color: "var(--primary)" }}>distância de um clique</span>
              </h1>

              <p style={{ fontSize: "clamp(14px, 2.5vw, 17px)", color: "#6b7280", lineHeight: 1.65, marginBottom: "24px", maxWidth: "480px" }}>
                Conectamos pessoas a profissionais qualificados em Angola. Limpeza, reparações, explicações e muito mais — sempre com segurança.
              </p>

              <div style={{ display: "flex", gap: "10px", flexWrap: "wrap", marginBottom: "28px" }}>
                <Link to="/procurar" style={{ display: "inline-flex", alignItems: "center", gap: "7px", background: "var(--primary)", color: "white", padding: "12px 22px", borderRadius: "999px", fontWeight: 700, fontSize: "15px", textDecoration: "none", boxShadow: "0 6px 18px rgba(245,158,11,0.3)" }}>
                  <Search size={16} /> Procurar Serviços
                </Link>
                <Link to="/registo-prestador" style={{ display: "inline-flex", alignItems: "center", gap: "7px", background: "white", color: "#374151", padding: "12px 22px", borderRadius: "999px", fontWeight: 700, fontSize: "15px", textDecoration: "none", border: "2px solid #e5e7eb" }}>
                  Ser Prestador
                </Link>
              </div>

              <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "6px", color: "#6b7280", fontSize: "13px", fontWeight: 500 }}>
                  <ShieldCheck size={16} style={{ color: "#10b981" }} /> Profissionais Verificados
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "6px", color: "#6b7280", fontSize: "13px", fontWeight: 500 }}>
                  <Zap size={16} style={{ color: "var(--primary)" }} /> Atendimento Rápido
                </div>
              </div>
            </motion.div>

            {/* Right - Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.92 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: 0.1 }}
              className="hero-image-col"
              style={{ flex: "1 1 320px", minWidth: 0, position: "relative" }}
            >
              <div style={{ borderRadius: "24px", overflow: "hidden", aspectRatio: "4/3", boxShadow: "0 32px 64px rgba(0,0,0,0.15)" }}>
                <img
                  src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=900&auto=format&fit=crop"
                  alt="Profissional a trabalhar"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,0,0,0.5) 0%, transparent 60%)", display: "flex", alignItems: "flex-end", padding: "24px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                    <div style={{ display: "flex" }}>
                      {[1, 2, 3, 4].map(i => (
                        <img key={i} src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="user" style={{ width: "32px", height: "32px", borderRadius: "999px", border: "2px solid white", marginLeft: i > 1 ? "-8px" : "0", objectFit: "cover" }} />
                      ))}
                    </div>
                    <span style={{ color: "white", fontSize: "14px", fontWeight: 600 }}>+10k Clientes Satisfeitos</span>
                  </div>
                </div>
              </div>

              {/* Floating badge */}
              <div style={{ position: "absolute", bottom: "-20px", left: "-20px", background: "white", borderRadius: "16px", padding: "14px 18px", boxShadow: "0 12px 32px rgba(0,0,0,0.12)", display: "flex", alignItems: "center", gap: "12px", minWidth: "180px" }}>
                <div style={{ width: "44px", height: "44px", background: "#d1fae5", borderRadius: "999px", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <ShieldCheck size={22} style={{ color: "#10b981" }} />
                </div>
                <div>
                  <div style={{ fontWeight: 700, fontSize: "13px", color: "#111827" }}>Pagamento Seguro</div>
                  <div style={{ fontSize: "11px", color: "#9ca3af" }}>Retido até conclusão</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===== STATS ===== */}
      <section className="py-10 md:py-16 px-4 md:px-6" style={{ background: "var(--primary)" }}>
        <div className="stats-grid" style={{ maxWidth: "1280px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(130px, 1fr))", gap: "20px", textAlign: "center" }}>
          {stats.map(s => (
            <motion.div key={s.label} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }}>
              <div style={{ fontSize: "clamp(24px, 4vw, 36px)", fontWeight: 800, color: "white", letterSpacing: "-1px" }}>{s.value}</div>
              <div style={{ fontSize: "clamp(11px, 2vw, 14px)", color: "rgba(255,255,255,0.85)", marginTop: "4px", fontWeight: 500 }}>{s.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ===== CATEGORIES ===== */}
      <section className="py-12 md:py-20 px-4 md:px-6" style={{ background: "#f8f9fa" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "40px", flexWrap: "wrap", gap: "16px" }}>
            <div>
              <h2 style={{ fontSize: "clamp(28px, 4vw, 40px)", fontWeight: 800, color: "#111827", marginBottom: "8px" }}>O que precisas hoje?</h2>
              <p style={{ color: "#6b7280", fontSize: "16px" }}>Escolhe entre centenas de serviços disponíveis em Luanda</p>
            </div>
            <Link to="/procurar" style={{ display: "flex", alignItems: "center", gap: "6px", color: "var(--primary)", fontWeight: 600, textDecoration: "none", fontSize: "15px" }}>
              Ver todas <ArrowRight size={16} />
            </Link>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(140px, 1fr))", gap: "16px" }}>
            {categories.map(cat => (
              <motion.div key={cat.name} whileHover={{ y: -4 }} transition={{ duration: 0.2 }}>
                <Link
                  to={`/procurar?cat=${cat.name.toLowerCase()}`}
                  style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "10px", padding: "24px 16px", background: "white", borderRadius: "16px", border: "1px solid #e5e7eb", textDecoration: "none", textAlign: "center", transition: "border-color 0.2s, box-shadow 0.2s", boxShadow: "0 1px 4px rgba(0,0,0,0.04)" }}
                >
                  <div>
                    <div style={{ fontWeight: 700, color: "#111827", fontSize: "14px" }}>{cat.name}</div>
                    <div style={{ fontSize: "12px", color: "#9ca3af", marginTop: "2px" }}>{cat.count} profissionais</div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== PROVIDERS (Airbnb style) ===== */}
      <section className="py-12 md:py-20 px-4 md:px-6" style={{ background: "white" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <div style={{ marginBottom: "40px" }}>
            <h2 style={{ fontSize: "clamp(28px, 4vw, 40px)", fontWeight: 800, color: "#111827", marginBottom: "8px" }}>Profissionais em Destaque</h2>
            <p style={{ color: "#6b7280", fontSize: "16px" }}>Os mais bem avaliados da tua região</p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "28px" }}>
            {providers.map((p, i) => (
              <motion.div key={p.id} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.1 }}>
                <Link to={`/prestador/${p.id}`} style={{ display: "block", textDecoration: "none", borderRadius: "16px", overflow: "hidden", border: "1px solid #f3f4f6", transition: "box-shadow 0.2s" }}>
                  <div style={{ position: "relative", aspectRatio: "1/1", overflow: "hidden" }}>
                    <img src={p.image} alt={p.name} style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.4s" }} />
                    <button onClick={e => e.preventDefault()} style={{ position: "absolute", top: "12px", right: "12px", width: "32px", height: "32px", background: "rgba(255,255,255,0.85)", borderRadius: "999px", border: "none", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <Heart size={16} style={{ color: "#6b7280" }} />
                    </button>
                  </div>
                  <div style={{ padding: "16px" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "4px" }}>
                      <h3 style={{ fontWeight: 700, fontSize: "16px", color: "#111827" }}>{p.name}</h3>
                      <div style={{ display: "flex", alignItems: "center", gap: "4px", fontSize: "14px", fontWeight: 600, color: "#111827" }}>
                        <Star size={14} style={{ fill: "#f59e0b", color: "#f59e0b" }} />
                        {p.rating}
                        <span style={{ color: "#9ca3af", fontWeight: 400 }}>({p.reviews})</span>
                      </div>
                    </div>
                    <p style={{ fontSize: "14px", color: "#6b7280", marginBottom: "8px" }}>{p.role}</p>
                    <p style={{ fontSize: "15px", fontWeight: 600, color: "#111827" }}>{p.price}</p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== HOW IT WORKS ===== */}
      <section className="py-12 md:py-20 px-4 md:px-6" style={{ background: "#111827" }}>
        <div style={{ maxWidth: "1000px", margin: "0 auto", textAlign: "center" }}>
          <h2 style={{ fontSize: "clamp(28px, 4vw, 40px)", fontWeight: 800, color: "white", marginBottom: "12px" }}>Como a Renda+ funciona</h2>
          <p style={{ color: "#9ca3af", fontSize: "16px", marginBottom: "56px" }}>3 passos simples para resolver qualquer problema</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "32px" }}>
            {steps.map(step => (
              <motion.div key={step.title} whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: 24 }} viewport={{ once: true }} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "16px" }}>
                <div style={{ width: "80px", height: "80px", background: "#1f2937", borderRadius: "20px", display: "flex", alignItems: "center", justifyContent: "center", border: "1px solid #374151" }}>
                  {step.icon}
                </div>
                <h3 style={{ fontWeight: 700, fontSize: "18px", color: "white" }}>{step.title}</h3>
                <p style={{ color: "#9ca3af", fontSize: "15px", lineHeight: 1.6 }}>{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== TESTIMONIALS ===== */}
      <section className="py-12 md:py-20 px-4 md:px-6" style={{ background: "#f8f9fa" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "48px" }}>
            <h2 style={{ fontSize: "clamp(28px, 4vw, 40px)", fontWeight: 800, color: "#111827", marginBottom: "8px" }}>O que dizem os nossos utilizadores</h2>
            <p style={{ color: "#6b7280", fontSize: "16px" }}>Histórias reais de pessoas reais</p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "24px" }}>
            {testimonials.map((t, i) => (
              <motion.div key={t.id} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                style={{ background: "white", borderRadius: "16px", padding: "28px", border: "1px solid #e5e7eb", boxShadow: "0 2px 8px rgba(0,0,0,0.04)" }}>
                <div style={{ display: "flex", gap: "4px", marginBottom: "16px" }}>
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star key={j} size={16} style={{ fill: "#f59e0b", color: "#f59e0b" }} />
                  ))}
                </div>
                <p style={{ color: "#374151", fontSize: "15px", lineHeight: 1.7, marginBottom: "20px" }}>"{t.text}"</p>
                <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                  <img src={t.avatar} alt={t.name} style={{ width: "44px", height: "44px", borderRadius: "999px", objectFit: "cover" }} />
                  <div>
                    <div style={{ fontWeight: 700, fontSize: "14px", color: "#111827" }}>{t.name}</div>
                    <div style={{ display: "flex", alignItems: "center", gap: "4px", fontSize: "12px", color: "#9ca3af" }}>
                      <MapPin size={12} /> {t.location}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== APP DOWNLOAD CTA ===== */}
      <section className="py-12 md:py-20 px-4 md:px-6" style={{ background: "linear-gradient(135deg, var(--primary) 0%, var(--primary-dark) 100%)" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto", textAlign: "center" }}>
          <h2 style={{ fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 800, color: "white", marginBottom: "16px" }}>Faz download da app Renda+</h2>
          <p style={{ color: "rgba(255,255,255,0.85)", fontSize: "18px", marginBottom: "36px" }}>Disponível para Android. Optimizada para redes 2G/3G.</p>
          <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
            <a href="#" style={{ display: "flex", alignItems: "center", gap: "10px", background: "#111827", color: "white", padding: "14px 24px", borderRadius: "12px", textDecoration: "none", fontWeight: 600, fontSize: "15px" }}>
              <div style={{ textAlign: "left" }}>
                <div style={{ fontSize: "11px", opacity: 0.7, fontWeight: 400 }}>Descarregar na</div>
                <div>Google Play</div>
              </div>
            </a>
            <a href="#" style={{ display: "flex", alignItems: "center", gap: "10px", background: "rgba(255,255,255,0.15)", color: "white", padding: "14px 24px", borderRadius: "12px", textDecoration: "none", fontWeight: 600, fontSize: "15px", border: "1px solid rgba(255,255,255,0.3)" }}>
              <div style={{ textAlign: "left" }}>
                <div style={{ fontSize: "11px", opacity: 0.7, fontWeight: 400 }}>Usar no</div>
                <div>Navegador Web</div>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <section className="py-12 md:py-20 px-4 md:px-6" style={{ background: "white" }}>
        <div style={{ maxWidth: "760px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "48px" }}>
            <h2 style={{ fontSize: "clamp(28px, 4vw, 40px)", fontWeight: 800, color: "#111827", marginBottom: "8px" }}>Perguntas Frequentes</h2>
            <p style={{ color: "#6b7280", fontSize: "16px" }}>Tem dúvidas? Estamos aqui para ajudar.</p>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            {faqs.map((faq, i) => (
              <motion.div key={i} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
                style={{ background: "#f8f9fa", borderRadius: "12px", padding: "24px", border: "1px solid #e5e7eb" }}>
                <div style={{ display: "flex", alignItems: "flex-start", gap: "12px" }}>
                  <CheckCircle size={20} style={{ color: "var(--primary)", marginTop: "2px", flexShrink: 0 }} />
                  <div>
                    <h3 style={{ fontWeight: 700, fontSize: "16px", color: "#111827", marginBottom: "8px" }}>{faq.q}</h3>
                    <p style={{ color: "#6b7280", fontSize: "14px", lineHeight: 1.7 }}>{faq.a}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div style={{ textAlign: "center", marginTop: "40px" }}>
            <Link to="/procurar" style={{ display: "inline-flex", alignItems: "center", gap: "8px", color: "var(--primary)", fontWeight: 700, fontSize: "16px", textDecoration: "none" }}>
              Começar agora <ChevronRight size={18} />
            </Link>
          </div>
        </div>
      </section>

    </div>
  )
}
