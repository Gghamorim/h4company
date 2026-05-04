import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    name: "Rafael Moretti",
    role: "Auxiliar de Produção — São Paulo",
    text: "Tive o pedido negado duas vezes pelo INSS sozinho. Com a H4 Company consegui meu auxílio-acidente em menos de 4 meses. Trabalho impecável.",
  },
  {
    name: "Juliana Prado",
    role: "Enfermeira — Barueri",
    text: "Sofri um acidente no trabalho e estava perdida na burocracia. A equipe cuidou de tudo — perícia, documentos, recursos. Receberam só quando eu recebi. Recomendo de olhos fechados.",
  },
  {
    name: "Eduardo Lins",
    role: "Motorista — Alphaville",
    text: "Atendimento humanizado do começo ao fim. Me explicaram cada passo e conquistaram meu benefício com valor correto. Parceria que vale cada minuto.",
  },
];

export default function SocialProof() {
  return (
    <section
      id="depoimentos"
      data-testid="social-proof"
      style={{
        padding: "100px 24px",
        background:
          "linear-gradient(180deg, #060d1a 0%, #0a1628 60%, #060d1a 100%)",
        position: "relative",
      }}
    >
      <div style={{ maxWidth: 1240, margin: "0 auto" }}>
        <div className="reveal" style={{ textAlign: "center", marginBottom: 60 }}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 14,
              padding: "14px 24px",
              background: "rgba(41, 184, 232, 0.08)",
              border: "1px solid rgba(41, 184, 232, 0.25)",
              borderRadius: 999,
              marginBottom: 24,
            }}
          >
            <div className="stars" style={{ fontSize: 20 }}>
              {"★".repeat(4)}
              <span style={{ opacity: 0.5 }}>★</span>
            </div>
            <div style={{ color: "#fff", fontWeight: 700, fontSize: 16 }}>
              4.6 · 71 avaliações
            </div>
          </div>

          <h2
            style={{
              fontSize: "clamp(28px, 4vw, 44px)",
              color: "#fff",
              fontWeight: 700,
              marginBottom: 14,
            }}
          >
            Histórias reais de <span className="accent-gradient">quem já recebeu</span>
          </h2>
          <p style={{ color: "#8a97b0", fontSize: 17, maxWidth: 580, margin: "0 auto" }}>
            Centenas de trabalhadores já conquistaram seu auxílio-acidente com a H4 Company.
          </p>
        </div>

        <div
          className="testimonials-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 26,
          }}
        >
          {testimonials.map((t, i) => (
            <article
              key={t.name}
              className="reveal card-tilt"
              data-testid={`testimonial-card-${i}`}
              style={{
                background: "rgba(15, 31, 58, 0.5)",
                border: "1px solid rgba(255, 255, 255, 0.08)",
                borderRadius: 20,
                padding: 32,
                transitionDelay: `${i * 0.08}s`,
              }}
            >
              <Quote size={28} color="#29b8e8" style={{ marginBottom: 18, opacity: 0.6 }} />
              <p style={{ color: "#d9e2f0", fontSize: 15.5, lineHeight: 1.7, marginBottom: 26 }}>
                “{t.text}”
              </p>
              <div style={{ display: "flex", gap: 3, marginBottom: 14 }}>
                {[...Array(5)].map((_, k) => (
                  <Star key={k} size={14} fill="#fcc419" color="#fcc419" />
                ))}
              </div>
              <div style={{ color: "#fff", fontWeight: 700, fontSize: 15 }}>
                {t.name}
              </div>
              <div style={{ color: "#7a8aa3", fontSize: 13 }}>{t.role}</div>
            </article>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .testimonials-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
