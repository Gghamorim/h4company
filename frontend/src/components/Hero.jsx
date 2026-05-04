import { ArrowRight, MessageCircle, ShieldCheck, Star } from "lucide-react";
import { waLink } from "@/lib/company";

export default function Hero() {
  return (
    <section
      id="top"
      data-testid="hero-section"
      style={{
        position: "relative",
        minHeight: "100vh",
        paddingTop: 120,
        paddingBottom: 80,
        overflow: "hidden",
        background:
          "radial-gradient(ellipse at 20% 0%, rgba(41, 184, 232, 0.18) 0%, transparent 55%), radial-gradient(ellipse at 90% 40%, rgba(123, 143, 243, 0.12) 0%, transparent 60%), #060d1a",
      }}
    >
      <div
        className="grid-bg"
        style={{
          position: "absolute",
          inset: 0,
          opacity: 0.35,
          maskImage:
            "radial-gradient(ellipse at center, rgba(0,0,0,1) 0%, rgba(0,0,0,0.3) 70%, transparent 100%)",
        }}
      />

      <div
        style={{
          position: "relative",
          maxWidth: 1240,
          margin: "0 auto",
          padding: "0 24px",
          display: "grid",
          gridTemplateColumns: "1.1fr 1fr",
          gap: 60,
          alignItems: "center",
        }}
        className="hero-grid"
      >
        <div>
          <div
            className="reveal"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 10,
              padding: "8px 16px",
              background: "rgba(41, 184, 232, 0.1)",
              border: "1px solid rgba(41, 184, 232, 0.3)",
              borderRadius: 999,
              fontSize: 13,
              fontWeight: 600,
              color: "#8fdff5",
              marginBottom: 24,
            }}
          >
            <ShieldCheck size={15} />
            Especialistas em Auxílio-Acidente
          </div>

          <h1
            className="reveal"
            style={{
              fontSize: "clamp(36px, 6vw, 64px)",
              fontWeight: 800,
              color: "#fff",
              marginBottom: 22,
            }}
          >
            Sofreu um acidente?{" "}
            <span className="accent-gradient">Garantimos seu benefício no INSS.</span>
          </h1>

          <p
            className="reveal"
            style={{
              fontSize: "clamp(16px, 1.8vw, 19px)",
              color: "#a8b4c8",
              lineHeight: 1.65,
              marginBottom: 36,
              maxWidth: 560,
            }}
          >
            A H4 Company é especialista em{" "}
            <strong style={{ color: "#fff" }}>auxílio-acidente</strong>. Cuidamos
            de toda a burocracia com o INSS para você receber o benefício que é
            seu por direito — rápido, sem dor de cabeça e com acompanhamento do
            início ao fim.
          </p>

          <div
            className="reveal"
            style={{ display: "flex", flexWrap: "wrap", gap: 14, marginBottom: 40 }}
          >
            <a href="#formulario" data-testid="hero-cta-specialist" className="btn-primary">
              Quero saber se tenho direito <ArrowRight size={18} />
            </a>
            <a
              href={waLink("Olá! Sofri um acidente e gostaria de saber se tenho direito ao auxílio-acidente.")}
              target="_blank"
              rel="noreferrer"
              data-testid="hero-cta-whatsapp"
              className="btn-whatsapp"
            >
              <MessageCircle size={18} /> WhatsApp direto
            </a>
          </div>

          <div
            className="reveal"
            style={{ display: "flex", alignItems: "center", gap: 24, flexWrap: "wrap" }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <div className="stars" aria-label="4.6 estrelas">
                {"★".repeat(4)}
                <span style={{ opacity: 0.5 }}>★</span>
              </div>
              <div>
                <div style={{ color: "#fff", fontWeight: 700, fontSize: 15 }}>
                  4.6/5
                </div>
                <div style={{ color: "#7a8aa3", fontSize: 12 }}>
                  71 avaliações
                </div>
              </div>
            </div>
            <div
              style={{
                height: 36,
                width: 1,
                background: "rgba(255,255,255,0.1)",
              }}
            />
            <div>
              <div style={{ color: "#fff", fontWeight: 700, fontSize: 15 }}>
                +500 benefícios conquistados
              </div>
              <div style={{ color: "#7a8aa3", fontSize: 12 }}>
                Alphaville & região
              </div>
            </div>
          </div>
        </div>

        <div className="reveal" style={{ position: "relative" }}>
          <div
            className="float-slow glow-anim"
            style={{
              position: "relative",
              borderRadius: 24,
              overflow: "hidden",
              border: "1px solid rgba(41, 184, 232, 0.25)",
            }}
          >
            <img
              src="https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=1200&auto=format&fit=crop"
              alt="Especialista em auxílio-acidente atendendo cliente"
              loading="lazy"
              style={{
                width: "100%",
                height: "auto",
                display: "block",
                aspectRatio: "4/5",
                objectFit: "cover",
              }}
            />
            <div
              style={{
                position: "absolute",
                inset: 0,
                background:
                  "linear-gradient(180deg, transparent 40%, rgba(6, 13, 26, 0.7) 100%)",
              }}
            />
          </div>

          {/* Floating cards */}
          <div
            style={{
              position: "absolute",
              top: 30,
              left: -20,
              background: "rgba(15, 31, 58, 0.92)",
              backdropFilter: "blur(14px)",
              border: "1px solid rgba(41, 184, 232, 0.3)",
              borderRadius: 16,
              padding: "14px 18px",
              display: "flex",
              alignItems: "center",
              gap: 12,
              boxShadow: "0 20px 60px -20px rgba(0,0,0,0.6)",
            }}
            className="float-card"
          >
            <div
              style={{
                width: 38,
                height: 38,
                borderRadius: 10,
                background: "rgba(41, 184, 232, 0.18)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#3ccfff",
              }}
            >
              <ShieldCheck size={18} />
            </div>
            <div>
              <div style={{ color: "#fff", fontWeight: 700, fontSize: 14 }}>
                Sem custo inicial
              </div>
              <div style={{ color: "#8fdff5", fontSize: 12 }}>
                Só paga se ganhar
              </div>
            </div>
          </div>

          <div
            style={{
              position: "absolute",
              bottom: 30,
              right: -20,
              background: "rgba(15, 31, 58, 0.92)",
              backdropFilter: "blur(14px)",
              border: "1px solid rgba(41, 184, 232, 0.3)",
              borderRadius: 16,
              padding: "14px 18px",
              boxShadow: "0 20px 60px -20px rgba(0,0,0,0.6)",
            }}
            className="float-card"
          >
            <div style={{ color: "#8fdff5", fontSize: 11, fontWeight: 600, marginBottom: 4 }}>
              ANÁLISE GRATUITA
            </div>
            <div style={{ color: "#fff", fontWeight: 700, fontSize: 15 }}>
              Em até 2 horas
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .hero-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
          .float-card { display: none; }
        }
      `}</style>
    </section>
  );
}
