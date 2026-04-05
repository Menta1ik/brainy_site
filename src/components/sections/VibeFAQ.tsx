"use client";

import { Container } from "@/components/ui/Container";

const FAQS = [
  {
    question: "Is Vibe Coding only for prototyping?",
    answer: "Absolutely not. At BrainySoftware, we use Vibe Coding for production-grade engineering. This includes designing scalable backends, complex frontends, and deeply integrated AI services for enterprise-level applications."
  },
  {
    question: "How do you ensure code quality with AI?",
    answer: "We use a hybrid approach where AI handles the heavy lifting but the resulting code is strictly typed (TypeScript), follows architectural patterns, and is audited by high-level engineers. We focus on maintainable, audit-ready codebases."
  },
  {
    question: "What technologies are used in Vibe Engineering?",
    answer: "Our stack is built around modern, scalable technologies including Next.js, React, Node.js, Python, and Supabase / PostgreSQL. These are orchestrated using various LLM models (Gemini, GPT-4, Claude) for optimal system synthesis."
  },
  {
    question: "Is it secure for sensitive data?",
    answer: "Yes. All our Vibe-driven workflows are hosted on secure, isolated environments with strict access controls. We ensure data privacy and follow enterprise-grade security protocols (OWASP, GDPR compliance)."
  },
  {
    question: "How does it scale for high-load applications?",
    answer: "Since we generate production-grade code that runs on modern cloud infrastructure (AWS, Vercel), systems built through Vibe Engineering scale horizontally just like traditionally developed apps."
  }
];

export function VibeFAQ() {
  return (
    <section className="py-24 lg:py-32 bg-brand-dark/50">
      <Container>
        <div className="text-center mb-24">
          <h2 className="text-3xl font-medium tracking-tight text-white sm:text-4xl">
            Everything You Need to Know
          </h2>
          <p className="mt-4 text-muted-foreground/80">
            Common questions about our Vibe-Driven Engineering methodology.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-6">
          {FAQS.map((faq) => (
            <div key={faq.question} className="p-8 border border-brand-border bg-brand-gray/5 rounded-2xl hover:border-brand-green/30 transition-colors">
              <h3 className="text-lg font-medium text-white mb-3">
                {faq.question}
              </h3>
              <p className="text-muted-foreground/80 leading-relaxed text-sm">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
