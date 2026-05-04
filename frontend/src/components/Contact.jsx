import { Phone, MapPin, MessageCircle, Mail, Instagram } from "lucide-react";
import { COMPANY, waLink } from "@/lib/company";

export default function Contact() {
  return (
    <section
      id="contato"
      data-testid="contact-section"
      style={{
        padding: "100px 24px",
        background: "#060d1a",
      }}
    >
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div className="reveal" style={{ textAlign: "center", marginBottom: 50 }}>
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
            CONTATO RÁPIDO
          </div>
          <h2
            style={{
              fontSize: "clamp(28px, 4vw, 40px)",
              color: "#fff",
              fontWeight: 700,
              marginBottom: 12,
            }}
          >
            Prefere falar <span className="accent-gradient">diretamente</span>?
          </h2>
          <p style={{ color: "#8a97b0", fontSize: 16.5 }}>
            Estamos prontos para te atender pelos canais abaixo.
          </p>
        </div>

        <div
          className="contact-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 22,
            marginBottom: 36,
          }}
        >
          {[
            {
              icon: Phone,
              label: "Telefone",
              value: COMPANY.phone,
              href: `tel:${COMPANY.phoneRaw}`,
              testId: "contact-phone",
            },
            {
              icon: MapPin,
              label: "Endereço",
              value: COMPANY.address,
              href: "https://maps.google.com/?q=Alphaville+Barueri",
              testId: "contact-address",
            },
            {
              icon: Mail,
              label: "E-mail",
              value: COMPANY.email,
              href: `mailto:${COMPANY.email}`,
              testId: "contact-email",
            },
            {
              icon: Instagram,
              label: "Instagram",
              value: COMPANY.instagramHandle,
              href: COMPANY.instagram,
              testId: "contact-instagram",
            },
          ].map((c, i) => {
            const Icon = c.icon;
            return (
              <a
                key={c.label}
                href={c.href}
                target={c.href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                data-testid={c.testId}
                className="reveal"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 18,
                  padding: 26,
                  background: "rgba(15, 31, 58, 0.5)",
                  border: "1px solid rgba(255, 255, 255, 0.08)",
                  borderRadius: 18,
                  textDecoration: "none",
                  transition: "all 0.3s ease",
                  transitionDelay: `${i * 0.08}s`,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "rgba(41, 184, 232, 0.4)";
                  e.currentTarget.style.transform = "translateY(-4px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.08)";
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                <div
                  style={{
                    width: 50,
                    height: 50,
                    borderRadius: 14,
                    background: "rgba(41, 184, 232, 0.15)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#3ccfff",
                    flexShrink: 0,
                  }}
                >
                  <Icon size={22} />
                </div>
                <div style={{ overflow: "hidden" }}>
                  <div style={{ color: "#7a8aa3", fontSize: 12, marginBottom: 2 }}>
                    {c.label}
                  </div>
                  <div
                    style={{
                      color: "#fff",
                      fontSize: 15,
                      fontWeight: 600,
                      whiteSpace: "nowrap",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                    }}
                  >
                    {c.value}
                  </div>
                </div>
              </a>
            );
          })}
        </div>

        <div className="reveal" style={{ textAlign: "center" }}>
          <a
            href={waLink()}
            target="_blank"
            rel="noreferrer"
            data-testid="contact-whatsapp-cta"
            className="btn-whatsapp"
            style={{ padding: "20px 40px", fontSize: 16 }}
          >
            <MessageCircle size={20} /> Falar agora no WhatsApp
          </a>
        </div>
      </div>

      <style>{`
        @media (max-width: 1100px) {
          .contact-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 600px) {
          .contact-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
