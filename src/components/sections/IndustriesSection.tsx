import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RevealSection } from "@/components/ui/RevealSection";
import type { SanityIndustry } from "@/lib/sanity/types";

const fallbackIndustries = [
  {
    title: "Fintech",
    tag: "01",
    description:
      "Digital payment solutions, trading platforms, financial analytics, and regulatory technology for modern financial services.",
  },
  {
    title: "Telecom",
    tag: "02",
    description:
      "Automation and digitalization of processes for mobile operators. Customer management systems, billing, and network analytics.",
  },
  {
    title: "Banking",
    tag: "03",
    description:
      "Core banking systems, digital banking, customer onboarding, and regulatory compliance tools for banks and financial institutions.",
  },
  {
    title: "Healthcare",
    tag: "04",
    description:
      "Automation of processes for hospitals and clinics. Patient management systems, appointment scheduling, and EHR integration.",
  },
  {
    title: "Insurance",
    tag: "05",
    description:
      "Customer and policy management, insurance claims processing, scoring, and risk assessment systems for insurance companies.",
  },
  {
    title: "Retail & E-commerce",
    tag: "06",
    description:
      "Marketplaces, e-commerce platforms, ERP and CRM systems, inventory management, and supply chain digitalization.",
  },
];

interface IndustriesSectionProps {
  industries?: SanityIndustry[];
}

export function IndustriesSection({ industries }: IndustriesSectionProps) {
  const displayIndustries =
    industries && industries.length > 0
      ? industries.map((ind, i) => ({
          title: ind.title,
          tag: String(i + 1).padStart(2, "0"),
          description: ind.description ?? "",
        }))
      : fallbackIndustries;

  return (
    <section
      className="border-y border-brand-border bg-brand-gray py-24 lg:py-32"
      aria-labelledby="industries-heading"
    >
      <Container>
        <SectionHeading
          title="Industries We Serve"
          subtitle="Delivering specialized solutions across key sectors"
        />

        <div className="grid gap-px bg-brand-border sm:grid-cols-2 lg:grid-cols-3">
          {displayIndustries.map((industry, i) => (
            <RevealSection key={industry.title} delay={i * 80}>
              <div className="group h-full bg-brand-gray p-8 transition-all duration-300 hover:bg-brand-border/30">
                {/* Number tag */}
                <span className="text-xs font-medium text-gray-700">
                  {industry.tag}
                </span>

                {/* Title row */}
                <div className="mt-3 flex items-start justify-between gap-4">
                  <h3 className="text-sm font-medium uppercase tracking-wider text-white group-hover:text-brand-green transition-colors duration-300">
                    {industry.title}
                  </h3>
                  {/* Arrow indicator */}
                  <svg
                    className="mt-0.5 h-3.5 w-3.5 shrink-0 text-gray-700 opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:text-brand-green"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                    />
                  </svg>
                </div>

                <p className="mt-3 text-xs leading-relaxed text-gray-600">
                  {industry.description}
                </p>

                {/* Bottom accent line */}
                <div className="mt-6 h-px w-8 bg-brand-border transition-all duration-300 group-hover:w-12 group-hover:bg-brand-green" />
              </div>
            </RevealSection>
          ))}
        </div>
      </Container>
    </section>
  );
}
