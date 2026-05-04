import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { waLink } from "@/lib/company";

const links = [
  { href: "#servicos", label: "Serviços" },
  { href: "#diferenciais", label: "Diferenciais" },
  { href: "#depoimentos", label: "Depoimentos" },
  { href: "#contato", label: "Contato" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      data-testid="navbar"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        transition: "all 0.3s ease",
        background: scrolled ? "rgba(6, 13, 26, 0.85)" : "transparent",
        backdropFilter: scrolled ? "blur(18px)" : "none",
        borderBottom: scrolled
          ? "1px solid rgba(41, 184, 232, 0.12)"
          : "1px solid transparent",
      }}
    >
      <div
        style={{
          maxWidth: 1240,
          margin: "0 auto",
          padding: "14px 24px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <a
          href="#top"
          data-testid="navbar-logo"
          style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none" }}
        >
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
              fontSize: 18,
              boxShadow: "0 6px 20px -6px rgba(41, 184, 232, 0.6)",
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
              letterSpacing: "-0.01em",
            }}
          >
            H4 <span style={{ color: "#29b8e8" }}>Company</span>
          </span>
        </a>

        <nav
          className="desktop-nav"
          style={{ display: "flex", alignItems: "center", gap: 36 }}
        >
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              data-testid={`nav-link-${l.label.toLowerCase()}`}
              style={{
                color: "#c4cee0",
                textDecoration: "none",
                fontSize: 14.5,
                fontWeight: 500,
                transition: "color 0.2s ease",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#29b8e8")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#c4cee0")}
            >
              {l.label}
            </a>
          ))}
          <a
            href={waLink()}
            target="_blank"
            rel="noreferrer"
            data-testid="navbar-cta"
            className="btn-primary"
            style={{ padding: "11px 20px", fontSize: 14 }}
          >
            Falar com especialista
          </a>
        </nav>

        <button
          className="mobile-toggle"
          data-testid="navbar-mobile-toggle"
          aria-label="Menu"
          onClick={() => setOpen((v) => !v)}
          style={{
            display: "none",
            background: "rgba(255,255,255,0.05)",
            border: "1px solid rgba(255,255,255,0.1)",
            color: "#fff",
            padding: 10,
            borderRadius: 10,
            cursor: "pointer",
          }}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open && (
        <div
          data-testid="navbar-mobile-menu"
          style={{
            background: "rgba(6, 13, 26, 0.98)",
            backdropFilter: "blur(20px)",
            padding: "18px 24px 26px",
            borderTop: "1px solid rgba(41,184,232,0.1)",
          }}
        >
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              style={{
                display: "block",
                padding: "14px 0",
                color: "#e6ecf5",
                textDecoration: "none",
                fontSize: 16,
                fontWeight: 500,
                borderBottom: "1px solid rgba(255,255,255,0.06)",
              }}
            >
              {l.label}
            </a>
          ))}
          <a
            href={waLink()}
            target="_blank"
            rel="noreferrer"
            className="btn-primary"
            style={{ marginTop: 18, width: "100%" }}
          >
            Falar com especialista
          </a>
        </div>
      )}

      <style>{`
        @media (max-width: 900px) {
          .desktop-nav { display: none !important; }
          .mobile-toggle { display: inline-flex !important; }
        }
      `}</style>
    </header>
  );
}
