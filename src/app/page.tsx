import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProblemSection from "@/components/ProblemSection";
import CaseStudy from "@/components/CaseStudy";
import ServicesSection from "@/components/ServicesSection";
import WhyMeSection from "@/components/WhyMeSection";
import FinalCTA from "@/components/FinalCTA";

export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-100 selection:bg-emerald-500 selection:text-zinc-950">
      <Navbar />
      <Hero />
      <ProblemSection />
      <CaseStudy />
      <ServicesSection />
      <WhyMeSection />
      <FinalCTA />
    </main>
  );
}