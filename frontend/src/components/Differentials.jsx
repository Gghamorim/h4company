import { Users, Award, Eye, TrendingUp } from "lucide-react";

const items = [
  {
    icon: Users,
    title: "Atendimento humanizado",
    text: "Cada caso é único. Escutamos sua história e cuidamos de você como se fosse da família.",
  },
  {
    icon: Award,
    title: "Equipe especializada",
    text: "Advogados e peritos com anos de experiência específica em auxílio-acidente e direitos previdenciários.",
  },
  {
    icon: Eye,
    title: "Transparência total",
    text: "Você acompanha cada etapa do seu processo. Sem surpresas, sem taxas escondidas.",
  },
  {
    icon: TrendingUp,
    title: "Só paga se ganhar",
    text: "Zero risco: trabalhamos no êxito. Você só paga quando receber seu benefício.",
  },
];

export default function Differentials() {
  return (
    <section
      id="diferenciais"
      data-testid="differentials-section"
      style={{
        padding: "110px 24px",
        background: "#060d1a",
      }}
    >
      <div style={{ maxWidth: 1240, margin: "0 auto" }}>
        <div
          className="reveal"
          style={{ textAlign: "center", maxWidth: 640, margin: "0 auto 60px" }}
        >
          <div
            style={{
              display: "inline-block",
              padding: "6px 14px",
              background: "rgba(41, 184, 232, 0.08)",
              border: "1px solid rgba(41, 184, 232, 0.25)",
              borderRadius: 999,
              fontSize: 12,
              fontWeight: 700,
              color: "#8fdff5",
              marginBottom: 18,
              letterSpacing: "0.08em",
            }}
          >
            DIFERENCIAIS
          </div>
          <h2
            style={{
              fontSize: "clamp(30px, 4.5vw, 48px)",
              color: "#fff",
              fontWeight: 700,
              marginBottom: 16,
            }}
          >
            Por que escolher a <span className="accent-gradient">H4 Company</span>
          </h2>
          <p style={{ color: "#8a97b0", fontSize: 17, lineHeight: 1.6 }}>
            Mais de 500 benefícios conquistados. Especialistas que lutam pelo seu direito.
          </p>
        </div>

        <div
          className="diff-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: 20,
          }}
        >
          {items.map((it, i) => {
            const Icon = it.icon;
            return (
              <div
                key={it.title}
                className="reveal"
                data-testid={`differential-${i}`}
                style={{
                  display: "flex",
                  gap: 22,
                  padding: 28,
                  background: "rgba(15, 31, 58, 0.4)",
                  border: "1px solid rgba(255, 255, 255, 0.07)",
                  borderRadius: 18,
                  transition: "all 0.3s ease",
                  transitionDelay: `${i * 0.08}s`,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "rgba(41, 184, 232, 0.35)";
                  e.currentTarget.style.background = "rgba(22, 42, 77, 0.6)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.07)";
                  e.currentTarget.style.background = "rgba(15, 31, 58, 0.4)";
                }}
              >
                <div
                  style={{
                    width: 52,
                    height: 52,
                    borderRadius: 14,
                    background: "rgba(41, 184, 232, 0.15)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#3ccfff",
                    flexShrink: 0,
                  }}
                >
                  <Icon size={24} />
                </div>
                <div>
                  <h3
                    style={{
                      color: "#fff",
                      fontSize: 19,
                      fontWeight: 700,
                      marginBottom: 8,
                    }}
                  >
                    {it.title}
                  </h3>
                  <p style={{ color: "#a8b4c8", fontSize: 14.5, lineHeight: 1.65 }}>
                    {it.text}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        @media (max-width: 760px) {
          .diff-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
