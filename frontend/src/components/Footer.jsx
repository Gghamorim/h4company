import { Instagram } from "lucide-react";
import { COMPANY } from "@/lib/company";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer
      data-testid="footer"
      style={{
        background: "#03080f",
        borderTop: "1px solid rgba(255,255,255,0.06)",
        padding: "48px 24px 32px",
      }}
    >
      <div
        style={{
          maxWidth: 1240,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1.5fr 1fr 1fr",
          gap: 40,
        }}
        className="footer-grid"
      >
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 14 }}>
            <div
              style={{
                width: 38,
                height: 38,
                borderRadius: 10,
                background: "linear-gradient(135deg, #29b8e8, #1a9bd1)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontWeight: 800,
                color: "#03131f",
                fontSize: 17,
              }}
            >
              H4
            </div>
            <span
              style={{
                color: "#fff",
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontWeight: 700,
                fontSize: 18,
              }}
            >
              {COMPANY.name}
            </span>
          </div>
          <p style={{ color: "#7a8aa3", fontSize: 14, lineHeight: 1.65, maxWidth: 380, marginBottom: 18 }}>
            Especialistas em auxílio-acidente. Cuidamos de toda a burocracia
            com o INSS para você receber o benefício que é seu por direito.
          </p>
          <a
            href={COMPANY.instagram}
            target="_blank"
            rel="noreferrer"
            data-testid="footer-instagram"
            aria-label="Instagram H4 Company"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 10,
              padding: "10px 16px",
              background: "rgba(41, 184, 232, 0.08)",
              border: "1px solid rgba(41, 184, 232, 0.2)",
              borderRadius: 999,
              color: "#8fdff5",
              textDecoration: "none",
              fontSize: 13,
              fontWeight: 600,
              transition: "all 0.25s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "rgba(41, 184, 232, 0.18)";
              e.currentTarget.style.borderColor = "rgba(41, 184, 232, 0.45)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "rgba(41, 184, 232, 0.08)";
              e.currentTarget.style.borderColor = "rgba(41, 184, 232, 0.2)";
            }}
          >
            <Instagram size={16} /> {COMPANY.instagramHandle}
          </a>
        </div>

        <div>
          <h4
            style={{
              color: "#fff",
              fontSize: 13,
              fontWeight: 700,
              letterSpacing: "0.08em",
              marginBottom: 16,
            }}
          >
            NAVEGAÇÃO
          </h4>
          {[
            { href: "#servicos", label: "Serviços" },
            { href: "#diferenciais", label: "Diferenciais" },
            { href: "#depoimentos", label: "Depoimentos" },
            { href: "#formulario", label: "Fale conosco" },
          ].map((l) => (
            <a
              key={l.href}
              href={l.href}
              style={{
                display: "block",
                color: "#8a97b0",
                textDecoration: "none",
                fontSize: 14,
                padding: "6px 0",
                transition: "color 0.2s ease",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#29b8e8")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#8a97b0")}
            >
              {l.label}
            </a>
          ))}
        </div>

        <div>
          <h4
            style={{
              color: "#fff",
              fontSize: 13,
              fontWeight: 700,
              letterSpacing: "0.08em",
              marginBottom: 16,
            }}
          >
            CONTATO
          </h4>
          <p style={{ color: "#8a97b0", fontSize: 14, marginBottom: 8 }}>
            {COMPANY.phone}
          </p>
          <p style={{ color: "#8a97b0", fontSize: 14, marginBottom: 8 }}>
            {COMPANY.address}
          </p>
          <p style={{ color: "#8a97b0", fontSize: 14 }}>{COMPANY.email}</p>
        </div>
      </div>

      <div
        style={{
          maxWidth: 1240,
          margin: "40px auto 0",
          paddingTop: 24,
          borderTop: "1px solid rgba(255,255,255,0.06)",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: 10,
        }}
      >
        <p style={{ color: "#6b7a93", fontSize: 13 }}>
          © {year} {COMPANY.name}. Todos os direitos reservados.
        </p>
        <p style={{ color: "#6b7a93", fontSize: 13 }}>CNPJ em sigilo · Alphaville · SP</p>
      </div>

      <style>{`
        @media (max-width: 760px) {
          .footer-grid { grid-template-columns: 1fr !important; gap: 28px !important; }
        }
      `}</style>
    </footer>
  );
}
