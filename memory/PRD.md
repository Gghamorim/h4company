# H4 Company — Landing Page (Auxílio-Acidente)

## Problem Statement
Landing page moderna, responsiva e altamente persuasiva para a **H4 Company**, **especialista em Auxílio-Acidente** (benefício INSS após acidente que reduza capacidade de trabalho). Foco em: captação de leads via formulário e WhatsApp direto. Paleta azul escuro/cyan/cinza, visual limpo e profissional.

## Stack & Architecture
- React 19 + CSS custom (sem backend, sem database)
- Formulário redireciona para `wa.me/5511994042707` com mensagem pré-preenchida
- Componentes modulares em `/app/frontend/src/components/`

## User Personas
- Trabalhadores que sofreram acidente e precisam do auxílio-acidente INSS
- Beneficiários com pedido negado que precisam de revisão/recurso
- Pessoas perdidas na burocracia do INSS buscando orientação especializada

## Implemented (Dec 2025)
- ✅ Repositioning completo para Auxílio-Acidente como core business
- ✅ Hero: "Sofreu um acidente? Garantimos seu benefício no INSS." + badges (sem custo inicial / análise gratuita 2h)
- ✅ Prova social com depoimentos realistas (trabalhadores que receberam benefício)
- ✅ Problema + Solução focado em dores reais com INSS (negação, burocracia, perícia)
- ✅ Serviços: Auxílio-Acidente INSS (CARRO-CHEFE), Revisão de Benefícios, Acompanhamento Jurídico, Suporte Especializado
- ✅ Diferenciais: atendimento humanizado, equipe especializada, transparência, **só paga se ganhar**
- ✅ Mid CTA: "Descubra em 2 minutos se você tem direito" → "Solicitar análise gratuita"
- ✅ Formulário: "Conte seu caso. Nós cuidamos do resto." → "Quero minha análise gratuita"
- ✅ Contato, Rodapé, Botão flutuante WhatsApp, animações reveal-on-scroll
- ✅ 17/17 testes automatizados (desktop 1920 + mobile 390)
- ✅ SEO title/description focados em Auxílio-Acidente

## Backlog (P1/P2)
- [P1] Integração com Resend/SendGrid para armazenar leads além do WhatsApp
- [P1] Seção FAQ explicando quem tem direito ao auxílio-acidente
- [P2] Quiz de diagnóstico ("Você tem direito?") para melhor qualificação de leads
- [P2] Pixel Meta/Google Ads + eventos de conversão
- [P2] Cases reais com valores recuperados (anonimizados)
- [P2] Blog/SEO com artigos sobre direitos previdenciários

## Key Files
- `/app/frontend/src/pages/LandingPage.jsx`
- `/app/frontend/src/components/{Hero,Services,ProblemSolution,SocialProof,Differentials,MidCTA,LeadForm,Contact,Footer,Navbar,WhatsAppFloat}.jsx`
- `/app/frontend/src/lib/company.js` — contato + mensagens WhatsApp pré-definidas
