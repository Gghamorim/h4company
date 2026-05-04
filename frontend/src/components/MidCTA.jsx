import { ArrowRight, Clock } from "lucide-react";

export default function MidCTA() {
  return (
    <section
      data-testid="mid-cta"
      style={{
        padding: "80px 24px",
        background: "#060d1a",
      }}
    >
      <div
        className="reveal"
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          position: "relative",
          overflow: "hidden",
          borderRadius: 28,
          padding: "70px 40px",
          textAlign: "center",
          background:
            "linear-gradient(135deg, #0a1628 0%, #0f1f3a 50%, #162a4d 100%)",
          border: "1px solid rgba(41, 184, 232, 0.3)",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: -100,
            left: "50%",
            transform: "translateX(-50%)",
            width: 500,
            height: 500,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(41, 184, 232, 0.25), transparent 60%)",
            filter: "blur(30px)",
            pointerEvents: "none",
          }}
        />

        <div
          style={{
            position: "relative",
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            padding: "6px 14px",
            background: "rgba(41, 184, 232, 0.18)",
            border: "1px solid rgba(41, 184, 232, 0.4)",
            borderRadius: 999,
            fontSize: 12,
            fontWeight: 700,
            color: "#8fdff5",
            marginBottom: 22,
            letterSpacing: "0.08em",
          }}
        >
          <Clock size={13} /> ANÁLISE GRATUITA · SÓ PAGA SE GANHAR
        </div>

        <h2
          style={{
            position: "relative",
            fontSize: "clamp(32px, 5vw, 52px)",
            color: "#fff",
            fontWeight: 800,
            marginBottom: 18,
            lineHeight: 1.15,
          }}
        >
          Descubra em 2 minutos se <br className="br-hide" />
          <span className="accent-gradient">você tem direito.</span>
        </h2>
        <p
          style={{
            position: "relative",
            color: "#c4cee0",
            fontSize: 18,
            maxWidth: 580,
            margin: "0 auto 38px",
            lineHeight: 1.55,
          }}
        >
          Fale agora com um especialista e receba uma análise{" "}
          <strong style={{ color: "#fff" }}>100% gratuita do seu caso</strong>.
        </p>

        <a
          href="#formulario"
          data-testid="mid-cta-button"
          className="btn-primary"
          style={{ position: "relative", padding: "20px 40px", fontSize: 17 }}
        >
          Solicitar análise gratuita <ArrowRight size={20} />
        </a>
      </div>

      <style>{`
        @media (max-width: 600px) {
          .br-hide { display: none; }
        }
      `}</style>
    </section>
  );
}
