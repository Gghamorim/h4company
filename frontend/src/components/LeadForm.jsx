import { useState } from "react";
import { Send, CheckCircle2 } from "lucide-react";
import { waLink } from "@/lib/company";
import { api } from "@/lib/api";

const formatPhone = (v) => {
  const d = v.replace(/\D/g, "").slice(0, 11);
  if (d.length <= 2) return d;
  if (d.length <= 7) return `(${d.slice(0, 2)}) ${d.slice(2)}`;
  if (d.length <= 10) return `(${d.slice(0, 2)}) ${d.slice(2, 6)}-${d.slice(6)}`;
  return `(${d.slice(0, 2)}) ${d.slice(2, 7)}-${d.slice(7)}`;
};

export default function LeadForm() {
  const [form, setForm] = useState({ name: "", phone: "", message: "" });
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const validate = () => {
    const e = {};
    if (form.name.trim().length < 2) e.name = "Informe seu nome completo";
    const rawPhone = form.phone.replace(/\D/g, "");
    if (rawPhone.length < 10) e.phone = "Telefone inválido";
    if (form.message.trim().length < 5) e.message = "Escreva uma breve mensagem";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const onChange = (k) => (ev) => {
    const v = k === "phone" ? formatPhone(ev.target.value) : ev.target.value;
    setForm((p) => ({ ...p, [k]: v }));
    if (errors[k]) setErrors((p) => ({ ...p, [k]: undefined }));
  };

  const onSubmit = async (ev) => {
    ev.preventDefault();
    if (!validate()) return;

    setSubmitting(true);
    try {
      // Send data to API
      await api.post('/status', { client_name: form.name });

      // Open WhatsApp
      const msg = `Olá, sou *${form.name}*.\nTelefone: ${form.phone}\n\n${form.message}`;
      window.open(waLink(msg), "_blank");
      setSent(true);
    } catch (error) {
      console.log('API not available, proceeding with WhatsApp only');
      // Still open WhatsApp even if API fails
      const msg = `Olá, sou *${form.name}*.\nTelefone: ${form.phone}\n\n${form.message}`;
      window.open(waLink(msg), "_blank");
      setSent(true);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section
      id="formulario"
      data-testid="lead-form-section"
      style={{
        padding: "110px 24px",
        background:
          "linear-gradient(180deg, #060d1a 0%, #0a1628 100%)",
        position: "relative",
      }}
    >
      <div
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1fr 1.1fr",
          gap: 60,
          alignItems: "center",
        }}
        className="form-grid"
      >
        <div className="reveal">
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
            ANÁLISE GRATUITA
          </div>
          <h2
            style={{
              fontSize: "clamp(30px, 4.5vw, 44px)",
              color: "#fff",
              fontWeight: 700,
              marginBottom: 18,
            }}
          >
            Conte seu caso. <span className="accent-gradient">Nós cuidamos do resto.</span>
          </h2>
          <p
            style={{
              color: "#a8b4c8",
              fontSize: 16.5,
              lineHeight: 1.65,
              marginBottom: 28,
            }}
          >
            Preencha o formulário ao lado e um especialista em auxílio-acidente
            entrará em contato em até 2 horas úteis. A análise do seu caso é{" "}
            <strong style={{ color: "#fff" }}>100% gratuita</strong> e sem compromisso.
          </p>
          <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
            {[
              "Análise gratuita do seu caso",
              "Resposta em até 2h úteis",
              "Só paga se ganhar",
              "Atendimento humanizado",
            ].map((b) => (
              <li
                key={b}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                  color: "#d9e2f0",
                  fontSize: 15,
                  padding: "8px 0",
                }}
              >
                <CheckCircle2 size={18} color="#29b8e8" /> {b}
              </li>
            ))}
          </ul>
        </div>

        <form
          className="reveal"
          onSubmit={onSubmit}
          data-testid="lead-form"
          style={{
            background: "rgba(15, 31, 58, 0.6)",
            border: "1px solid rgba(41, 184, 232, 0.2)",
            borderRadius: 22,
            padding: 36,
            backdropFilter: "blur(10px)",
            boxShadow: "0 30px 80px -30px rgba(0,0,0,0.6)",
          }}
        >
          {sent ? (
            <div
              data-testid="form-success"
              style={{ textAlign: "center", padding: "26px 0" }}
            >
              <div
                style={{
                  width: 72,
                  height: 72,
                  borderRadius: "50%",
                  background: "rgba(34, 197, 94, 0.15)",
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: 18,
                }}
              >
                <CheckCircle2 size={40} color="#22c55e" />
              </div>
              <h3
                style={{
                  color: "#fff",
                  fontSize: 24,
                  fontWeight: 700,
                  marginBottom: 10,
                }}
              >
                Recebemos sua mensagem!
              </h3>
              <p style={{ color: "#a8b4c8", fontSize: 15, lineHeight: 1.6 }}>
                Você foi redirecionado ao WhatsApp. Caso não tenha aberto,{" "}
                <a
                  href={waLink()}
                  target="_blank"
                  rel="noreferrer"
                  style={{ color: "#29b8e8", fontWeight: 600 }}
                >
                  clique aqui
                </a>
                .
              </p>
              <button
                type="button"
                onClick={() => {
                  setSent(false);
                  setForm({ name: "", phone: "", message: "" });
                }}
                className="btn-ghost"
                style={{ marginTop: 22 }}
                data-testid="form-reset"
              >
                Enviar nova mensagem
              </button>
            </div>
          ) : (
            <>
              <div style={{ marginBottom: 18 }}>
                <label
                  htmlFor="name"
                  style={{
                    display: "block",
                    color: "#c4cee0",
                    fontSize: 13,
                    fontWeight: 600,
                    marginBottom: 8,
                  }}
                >
                  Nome completo
                </label>
                <input
                  id="name"
                  data-testid="form-input-name"
                  className={`field ${errors.name ? "err" : ""}`}
                  type="text"
                  placeholder="Ex: João Silva"
                  value={form.name}
                  onChange={onChange("name")}
                  autoComplete="name"
                />
                {errors.name && (
                  <p
                    data-testid="error-name"
                    style={{ color: "#f87171", fontSize: 12.5, marginTop: 6 }}
                  >
                    {errors.name}
                  </p>
                )}
              </div>

              <div style={{ marginBottom: 18 }}>
                <label
                  htmlFor="phone"
                  style={{
                    display: "block",
                    color: "#c4cee0",
                    fontSize: 13,
                    fontWeight: 600,
                    marginBottom: 8,
                  }}
                >
                  Telefone / WhatsApp
                </label>
                <input
                  id="phone"
                  data-testid="form-input-phone"
                  className={`field ${errors.phone ? "err" : ""}`}
                  type="tel"
                  placeholder="(11) 99999-9999"
                  value={form.phone}
                  onChange={onChange("phone")}
                  autoComplete="tel"
                />
                {errors.phone && (
                  <p
                    data-testid="error-phone"
                    style={{ color: "#f87171", fontSize: 12.5, marginTop: 6 }}
                  >
                    {errors.phone}
                  </p>
                )}
              </div>

              <div style={{ marginBottom: 22 }}>
                <label
                  htmlFor="message"
                  style={{
                    display: "block",
                    color: "#c4cee0",
                    fontSize: 13,
                    fontWeight: 600,
                    marginBottom: 8,
                  }}
                >
                  Como podemos te ajudar?
                </label>
                <textarea
                  id="message"
                  data-testid="form-input-message"
                  className={`field ${errors.message ? "err" : ""}`}
                  rows={4}
                  placeholder="Conte brevemente sobre o acidente e sua situação atual."
                  value={form.message}
                  onChange={onChange("message")}
                  style={{ resize: "vertical", minHeight: 110 }}
                />
                {errors.message && (
                  <p
                    data-testid="error-message"
                    style={{ color: "#f87171", fontSize: 12.5, marginTop: 6 }}
                  >
                    {errors.message}
                  </p>
                )}
              </div>

              <button
                type="submit"
                data-testid="form-submit"
                className="btn-primary"
                style={{ width: "100%", padding: "18px 28px", fontSize: 16 }}
                disabled={submitting}
              >
                {submitting ? "Enviando..." : "Quero minha análise gratuita"} <Send size={17} />
              </button>

              <p
                style={{
                  color: "#6b7a93",
                  fontSize: 12,
                  marginTop: 14,
                  textAlign: "center",
                }}
              >
                Ao enviar, você concorda em receber contato da equipe H4 Company.
              </p>
            </>
          )}
        </form>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .form-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
        }
      `}</style>
    </section>
  );
}
