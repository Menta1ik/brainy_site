"use client";

import { Container } from "@/components/ui/Container";

const CAPABILITIES = [
  {
    title: "AI Orchestration",
    description: "Deeply integrated Large Language Model orchestration using Gemini 3.1 Pro and Claude 4.6 Opus. We leverage Antigravity for complex architectural reasoning and Claude Code for ultra-high-velocity implementation, creating systems that think as fast as they run.",
    icon: "zap"
  },
  {
    title: "Rapid Full-Stack Infrastructure",
    description: "Development of high-performance backends (Node.js/Python) and fluid, reactive frontends (React/Next.js) concurrently. Our vibe-native workflow automates boilerplate, focusing on core system architecture.",
    icon: "layers"
  },
  {
    title: "Enterprise Reliability",
    description: "Built-in audit trails, strict type safety (TypeScript), and scalable cloud infrastructure (AWS/Vercel). We use advanced IDEs like Antigravity to ensure architectural integrity while shipping at the speed of thought.",
    icon: "shield-check"
  },
  {
    title: "Complex Integrations",
    description: "Seamless connectivity between AI cores and legacy systems, third-party APIs, and modern SAS ecosystems. We map complex intent to real-world infrastructure and data flows.",
    icon: "cpu"
  }
];

export function VibeCapabilities() {
  return (
    <section className="py-24 lg:py-32 bg-brand-dark border-t border-brand-border">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24">
          <div>
            <div className="h-px w-12 bg-brand-green mb-6" />
            <h2 className="text-3xl font-medium tracking-tight text-white sm:text-4xl">
              Beyond Prototyping: <br />
              <span className="text-muted-foreground/80">Real Engineering.</span>
            </h2>
          </div>
          <div>
            <p className="text-lg text-muted-foreground/80 leading-relaxed">
              We leverage advanced AI-assisted development tools and methodologies to bypass the traditional bottlenecks of software engineering. This allows us to focus 100% on what matters: your business logic and system architecture.
            </p>
          </div>
        </div>

        <div className="mt-24 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
          {CAPABILITIES.map((cap) => (
            <div key={cap.title} className="group">
              <div className="flex h-12 w-12 items-center justify-center border border-brand-border text-brand-green bg-brand-gray/20 rounded-lg group-hover:border-brand-green/40 transition-colors">
                {/* Simplified Icon representation since we don't have lucide here directly in this block */}
                <span className="text-xs uppercase tracking-widest font-mono">0x{cap.title[0]}</span>
              </div>
              <h3 className="mt-6 text-xl font-medium text-white group-hover:text-brand-green transition-colors">
                {cap.title}
              </h3>
              <p className="mt-3 text-muted-foreground/80 leading-relaxed">
                {cap.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
