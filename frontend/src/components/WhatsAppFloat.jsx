import { useEffect, useState } from "react";
import { MessageCircle } from "lucide-react";
import { waLink } from "@/lib/company";

export default function WhatsAppFloat() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 320);
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <a
      href={waLink()}
      target="_blank"
      rel="noreferrer"
      data-testid="whatsapp-float"
      aria-label="Falar no WhatsApp"
      style={{
        position: "fixed",
        bottom: 24,
        left: 24,
        width: 62,
        height: 62,
        borderRadius: "50%",
        background: "#25D366",
        display: visible ? "flex" : "none",
        alignItems: "center",
        justifyContent: "center",
        color: "#fff",
        textDecoration: "none",
        boxShadow: "0 14px 34px -10px rgba(37, 211, 102, 0.6)",
        zIndex: 99,
        transition: "transform 0.25s ease",
      }}
      className="wa-pulse"
      onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.08)")}
      onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
    >
      <MessageCircle size={28} strokeWidth={2.2} />
    </a>
  );
}
