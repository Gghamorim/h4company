import { HeartPulse, Scale, FileCheck, LifeBuoy, ArrowRight } from "lucide-react";
import { waLink } from "@/lib/company";

const services = [
  {
    icon: HeartPulse,
    title: "Auxílio-Acidente INSS",
    text: "Conquistamos seu benefício junto ao INSS após acidente que reduziu sua capacidade de trabalho. Análise gratuita do caso.",
    highlight: true,
  },
  {
    icon: FileCheck,
    title: "Revisão de Benefícios",
    text: "Seu auxílio foi negado ou calculado errado? Revisamos e recorremos para você receber o valor correto.",
  },
  {
    icon: Scale,
    title: "Acompanhamento Jurídico",
    text: "Do pedido administrativo ao processo judicial. Equipe especializada te acompanha em cada etapa.",
  },
  {
    icon: LifeBuoy,
    title: "Suporte Especializado",
    text: "Atendimento humanizado com time sênior. Tire dúvidas e receba orientação clara sobre seus direitos.",
  },
];

export default function Services() {
  return (
    <section
      id="servicos"
      data-testid="services-section"
      style={{
        padding: "110px 24px",
        background:
          "linear-gradient(180deg, #060d1a 0%, #0a1628 100%)",
        position: "relative",
      }}
    >
      <div style={{ maxWidth: 1240, margin: "0 auto" }}>
        <div className="reveal" style={{ maxWidth: 640, marginBottom: 60 }}>
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
            NOSSOS SERVIÇOS
          </div>
          <h2
            style={{
              fontSize: "clamp(30px, 4.5vw, 48px)",
              color: "#fff",
              fontWeight: 700,
              marginBottom: 18,
            }}
          >
            Especialistas em{" "}
            <span className="accent-gradient">Auxílio-Acidente</span>
          </h2>
          <p style={{ color: "#8a97b0", fontSize: 17, lineHeight: 1.6 }}>
            Do primeiro atendimento à concessão do seu benefício — cuidamos de
            toda a burocracia para você focar no que importa: sua recuperação.
          </p>
        </div>

        <div
          className="services-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: 22,
          }}
        >
          {services.map((s, i) => {
            const Icon = s.icon;
            return (
              <article
                key={s.title}
                data-testid={`service-card-${i}`}
                className="reveal card-tilt"
                style={{
                  background: s.highlight
                    ? "linear-gradient(160deg, rgba(41, 184, 232, 0.12), rgba(15, 31, 58, 0.6))"
                    : "rgba(15, 31, 58, 0.5)",
                  border: s.highlight
                    ? "1px solid rgba(41, 184, 232, 0.4)"
                    : "1px solid rgba(255, 255, 255, 0.08)",
                  borderRadius: 20,
                  padding: 32,
                  position: "relative",
                  overflow: "hidden",
                  transitionDelay: `${i * 0.08}s`,
                }}
              >
                {s.highlight && (
                  <div
                    style={{
                      position: "absolute",
                      top: 16,
                      right: 16,
                      padding: "4px 10px",
                      background: "linear-gradient(135deg, #29b8e8, #1a9bd1)",
                      color: "#03131f",
                      fontSize: 10,
                      fontWeight: 800,
                      borderRadius: 999,
                      letterSpacing: "0.08em",
                    }}
                  >
                    CARRO-CHEFE
                  </div>
                )}
                <div
                  style={{
                    width: 54,
                    height: 54,
                    borderRadius: 14,
                    background: s.highlight
                      ? "linear-gradient(135deg, #29b8e8, #1a9bd1)"
                      : "rgba(41, 184, 232, 0.14)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: s.highlight ? "#03131f" : "#3ccfff",
                    marginBottom: 22,
                  }}
                >
                  <Icon size={26} strokeWidth={2} />
                </div>
                <h3
                  style={{
                    fontSize: 20,
                    color: "#fff",
                    fontWeight: 700,
                    marginBottom: 10,
                  }}
                >
                  {s.title}
                </h3>
                <p style={{ color: "#a8b4c8", fontSize: 14.5, lineHeight: 1.65 }}>
                  {s.text}
                </p>
              </article>
            );
          })}
        </div>

        <div
          className="reveal"
          style={{ textAlign: "center", marginTop: 50 }}
        >
          <a
            href={waLink("Olá! Gostaria de uma análise gratuita do meu caso de auxílio-acidente.")}
            target="_blank"
            rel="noreferrer"
            data-testid="services-cta"
            className="btn-ghost"
          >
            Falar com um especialista agora <ArrowRight size={16} />
          </a>
        </div>
      </div>

      <style>{`
        @media (max-width: 1100px) {
          .services-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 600px) {
          .services-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
