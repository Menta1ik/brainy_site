import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/sections/PageHero";
import { CTASection } from "@/components/sections/CTASection";
import { TestimonialsFilter } from "@/components/sections/TestimonialsFilter";

export const metadata: Metadata = {
  title: "Client Testimonials",
  description:
    "What our clients say about BrainySoftware. Reviews from enterprise clients across fintech, banking, telecom, healthcare, insurance, and retail.",
  alternates: { canonical: "/testimonials" },
};

const clientLogos = [
  "Fintech Co.",
  "BankGroup",
  "TelecomEU",
  "MedSystem",
  "InsureNet",
  "RetailPro",
];

export default function TestimonialsPage() {
  return (
    <>
      <PageHero
        title="Client Testimonials"
        subtitle="What our clients say about working with us. Trusted by enterprises across Europe for over 15 years."
      />

      {/* Stats strip */}
      <div className="border-b border-brand-border bg-brand-gray">
        <Container>
          <div className="grid grid-cols-3 divide-x divide-brand-border">
            {[
              { value: "50+", label: "Enterprise clients" },
              { value: "15+", label: "Years of trust" },
              { value: "4.9 / 5", label: "Average rating" },
            ].map((stat) => (
              <div key={stat.label} className="py-8 text-center">
                <div className="text-2xl font-medium text-brand-green">{stat.value}</div>
                <div className="mt-1 text-xs uppercase tracking-wider text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </Container>
      </div>

      {/* Filterable testimonials */}
      <section className="py-24 lg:py-32 bg-brand-dark">
        <Container>
          <TestimonialsFilter />
        </Container>
      </section>

      {/* Client logos */}
      <section className="border-y border-brand-border bg-brand-gray py-16">
        <Container>
          <p className="mb-8 text-center text-xs uppercase tracking-widest text-gray-700">
            Companies we&apos;ve worked with
          </p>
          <div className="grid grid-cols-3 gap-px bg-brand-border border border-brand-border md:grid-cols-6">
            {clientLogos.map((name) => (
              <div
                key={name}
                className="flex items-center justify-center bg-brand-dark px-6 py-6"
              >
                <span className="text-xs font-medium uppercase tracking-wider text-gray-700">
                  {name}
                </span>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <CTASection />
    </>
  );
}
