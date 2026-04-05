"use client";

import { Container } from "@/components/ui/Container";

const STEPS = [
  {
    title: "Intent Mapping",
    description: "Capture the high-level vision, context, and business goals. No code, just raw intent."
  },
  {
    title: "System Synthesis",
    description: "AI orchestrators design the architecture, data models, and API interfaces."
  },
  {
    title: "Accelerated Build",
    description: "Rapid generation of full-stack components: React frontends, Node/Python backends."
  },
  {
    title: "Fluid Refinement",
    description: "Iterative polishing and deployment to production-ready infrastructure."
  }
];

export function VibeProcess() {
  return (
    <section className="py-24 lg:py-32 bg-brand-dark/50 border-y border-brand-border">
      <Container>
        <div className="text-center mb-24">
          <h2 className="text-3xl font-medium tracking-tight text-white sm:text-4xl">
            The Vibe-Native Workflow
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-muted-foreground/80">
            A revolutionary approach to engineering that maps abstract concepts directly into production-grade systems.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {STEPS.map((step, index) => (
            <div key={step.title} className="relative p-8 border border-brand-border bg-brand-gray/10 rounded-2xl hover:bg-brand-gray/20 transition-colors group">
              <span className="absolute top-6 right-6 text-2xl font-bold text-brand-green opacity-20">
                0{index + 1}
              </span>
              <h3 className="text-xl font-medium text-white mb-4 group-hover:text-brand-green transition-colors">
                {step.title}
              </h3>
              <p className="text-sm text-muted-foreground/80 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
