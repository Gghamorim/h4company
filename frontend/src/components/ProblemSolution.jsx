import { AlertTriangle, Check } from "lucide-react";

const pains = [
  "Pedido negado pelo INSS sem explicação clara",
  "Burocracia interminável e documentos rejeitados",
  "Perícia difícil e sensação de estar perdido",
  "Medo de não conseguir o benefício que é seu direito",
];

const solutions = [
  "Análise gratuita do seu caso por especialistas",
  "Cuidamos de toda a documentação e do INSS por você",
  "Preparação completa para a perícia médica",
  "Só paga se ganhar — zero risco para você",
];

export default function ProblemSolution() {
  return (
    <section
      data-testid="problem-solution"
      style={{
        padding: "100px 24px",
        background: "#060d1a",
        position: "relative",
      }}
    >
      <div
        style={{
          maxWidth: 1240,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 50,
        }}
        className="ps-grid"
      >
        <div className="reveal">
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              padding: "6px 14px",
              background: "rgba(239, 68, 68, 0.1)",
              border: "1px solid rgba(239, 68, 68, 0.3)",
              borderRadius: 999,
              fontSize: 12,
              fontWeight: 700,
              color: "#fca5a5",
              marginBottom: 18,
              letterSpacing: "0.05em",
            }}
          >
            <AlertTriangle size={13} /> O PROBLEMA
          </div>
          <h2
            style={{
              fontSize: "clamp(28px, 4vw, 40px)",
              color: "#fff",
              fontWeight: 700,
              marginBottom: 24,
            }}
          >
            Você está passando por{" "}
            <span style={{ color: "#f87171" }}>alguma dessas situações</span>?
          </h2>
          <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
            {pains.map((p) => (
              <li
                key={p}
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: 14,
                  padding: "16px 0",
                  borderBottom: "1px solid rgba(255,255,255,0.06)",
                  color: "#c4cee0",
                  fontSize: 16,
                  lineHeight: 1.55,
                }}
              >
                <span
                  style={{
                    width: 24,
                    height: 24,
                    borderRadius: "50%",
                    background: "rgba(239, 68, 68, 0.15)",
                    color: "#f87171",
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                    fontSize: 14,
                    fontWeight: 800,
                    marginTop: 2,
                  }}
                >
                  ×
                </span>
                {p}
              </li>
            ))}
          </ul>
        </div>

        <div
          className="reveal"
          style={{
            background:
              "linear-gradient(145deg, rgba(41, 184, 232, 0.08), rgba(15, 31, 58, 0.6))",
            border: "1px solid rgba(41, 184, 232, 0.25)",
            borderRadius: 24,
            padding: 40,
            position: "relative",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: -80,
              right: -80,
              width: 220,
              height: 220,
              borderRadius: "50%",
              background:
                "radial-gradient(circle, rgba(41, 184, 232, 0.25), transparent 70%)",
            }}
          />
          <div
            style={{
              position: "relative",
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              padding: "6px 14px",
              background: "rgba(41, 184, 232, 0.15)",
              border: "1px solid rgba(41, 184, 232, 0.4)",
              borderRadius: 999,
              fontSize: 12,
              fontWeight: 700,
              color: "#8fdff5",
              marginBottom: 18,
              letterSpacing: "0.05em",
            }}
          >
            ✓ A SOLUÇÃO
          </div>
          <h2
            style={{
              position: "relative",
              fontSize: "clamp(28px, 4vw, 40px)",
              color: "#fff",
              fontWeight: 700,
              marginBottom: 24,
            }}
          >
            A <span className="accent-gradient">H4 Company</span> resolve pra você
          </h2>
          <ul style={{ listStyle: "none", padding: 0, margin: 0, position: "relative" }}>
            {solutions.map((s) => (
              <li
                key={s}
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: 14,
                  padding: "16px 0",
                  borderBottom: "1px solid rgba(255,255,255,0.06)",
                  color: "#e6ecf5",
                  fontSize: 16,
                  lineHeight: 1.55,
                }}
              >
                <span
                  style={{
                    width: 26,
                    height: 26,
                    borderRadius: "50%",
                    background: "linear-gradient(135deg, #29b8e8, #1a9bd1)",
                    color: "#03131f",
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                    marginTop: 2,
                  }}
                >
                  <Check size={15} strokeWidth={3} />
                </span>
                {s}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .ps-grid { grid-template-columns: 1fr !important; gap: 30px !important; }
        }
      `}</style>
    </section>
  );
}
