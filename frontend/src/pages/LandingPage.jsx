import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import SocialProof from "@/components/SocialProof";
import ProblemSolution from "@/components/ProblemSolution";
import Services from "@/components/Services";
import Differentials from "@/components/Differentials";
import MidCTA from "@/components/MidCTA";
import LeadForm from "@/components/LeadForm";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export default function LandingPage() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="App" data-testid="landing-page">
      <Navbar />
      <main>
        <Hero />
        <SocialProof />
        <ProblemSolution />
        <Services />
        <Differentials />
        <MidCTA />
        <LeadForm />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
