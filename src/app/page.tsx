import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProblemSection from "@/components/ProblemSection";
import CaseStudy from "@/components/CaseStudy";
import WhyMeSection from "@/components/WhyMeSection";
import ServicesSection from "@/components/ServicesSection";
import FinalCTA from "@/components/FinalCTA";

export const metadata: Metadata = {
  title: "José Miguel García | Ingeniero de Operaciones & Automatización con IA",
  description:
    "Ingeniero Industrial y Máster en Marketing Digital e IA Generativa. Desarrollo aplicaciones web a medida, extracción de guías con IA (Claude API) y trazabilidad QR para bodegas, distribución y talleres.",
  keywords: [
    "José Miguel García",
    "Operations Engineer",
    "AI Automation",
    "Automatización Industrial",
    "Ingeniero Industrial",
    "Extracción guías de despacho IA",
    "Trazabilidad QR bodega",
    "Chilemat Quillota",
    "Desarrollo Next.js operaciones",
    "Supabase PostgreSQL logística"
  ],
  authors: [{ name: "José Miguel García" }],
  creator: "José Miguel García",
  publisher: "José Miguel García",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "es_CL",
    url: "https://josemiguelgarcia.engineer",
    title: "José Miguel García | Ingeniero de Operaciones & Automatización con IA",
    description:
      "Elimina el papeleo manual y los cuellos de botella operativos en tu bodega o taller con software a medida, IA y trazabilidad QR.",
    siteName: "José Miguel García — Ops & AI Automation",
  },
  twitter: {
    card: "summary_large_image",
    title: "José Miguel García | Ingeniero de Operaciones & Automatización con IA",
    description:
      "Automatización de operaciones físicas, pipelines de extracción con IA y trazabilidad QR.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "José Miguel García - Operations & AI Automation Engineer",
  description:
    "Desarrollo de software operativo a medida, extracción de documentos con IA y sistemas de trazabilidad QR para distribución, almacenes y faenas.",
  founder: {
    "@type": "Person",
    name: "José Miguel García",
    jobTitle: "Operations & AI Automation Architect",
    alumniOf: "Ingeniería Industrial & Máster en Marketing Digital e IA Generativa",
  },
  areaServed: ["Chile", "Latinoamérica", "Remoto"],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Servicios de Automatización Operativa",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Diagnóstico Operativo y Arquitectura de Software",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Pipelines de Extracción de Documentos con IA (Claude / LLM)",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Aplicaciones Web Operativas y Trazabilidad QR a Medida",
        },
      },
    ],
  },
};

export default function Home() {
  return (
    <>
      {/* Datos Estructurados Schema.org para Google */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="min-h-screen bg-[#090D14] text-slate-100 selection:bg-emerald-500/30 selection:text-emerald-300">
        <Navbar />
        <Hero />
        <ProblemSection />
        <CaseStudy />
        {/* Autoridad y credenciales ANTES de los precios para generar confianza */}
        <WhyMeSection />
        {/* Oferta de servicios, inversión y hoja de ruta */}
        <ServicesSection />
        <FinalCTA />
      </main>
    </>
  );
}