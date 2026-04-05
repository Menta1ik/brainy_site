import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { VibeHero } from "@/components/sections/VibeHero";
import { TechStackSection } from "@/components/sections/TechStackSection";
import { VibeCapabilities } from "@/components/sections/VibeCapabilities";
import { VibeProcess } from "@/components/sections/VibeProcess";
import { VibeFAQ } from "@/components/sections/VibeFAQ";
import { CTASection } from "@/components/sections/CTASection";
import { JsonLd } from "@/components/seo/JsonLd";
import { SITE_CONFIG } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Vibe Engineering | AI-Native Software Development",
  description:
    "Explore Vibe-Driven Engineering at BrainySoftware. We build complex, mission-critical enterprise systems (Next.js, Python, LLM Orchestration) at the speed of thought.",
  alternates: { canonical: "/vibe-engineering" },
};

export default function VibeEngineeringPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Vibe Engineering",
    description: "Production-grade AI-native software engineering methodology focusing on mapping high-level intent into complex full-stack systems.",
    provider: {
      "@id": `${SITE_CONFIG.url}/#organization`,
    },
    url: `${SITE_CONFIG.url}/vibe-engineering`,
    areaServed: "EE",
    serviceType: "Software Engineering",
  };

  return (
    <main className="min-h-screen bg-brand-dark">
      <JsonLd data={jsonLd} />
      {/* Header is typically in layout.tsx, but some projects prefer local headers or it's handled by RootLayout */}
      {/* Based on project structure, layout.tsx likely has Header. If not, I include it. */}
      {/* Checking src/app/layout.tsx might be useful, but for now I follow the common pattern. */}
      
      <VibeHero />
      <TechStackSection />
      <VibeCapabilities />
      <VibeProcess />
      <VibeFAQ />
      <CTASection />
      
      {/* Footer is also typically in layout.tsx */}
    </main>
  );
}
