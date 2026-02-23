import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import type { SanityIndustry } from "@/lib/sanity/types";

const fallbackIndustries = [
  { title: "Fintech", description: "Digital payment solutions, trading platforms, financial analytics, and regulatory technology for modern financial services." },
  { title: "Telecom", description: "Automation and digitalization of processes for mobile operators. Customer management systems, billing, and network analytics." },
  { title: "Banking", description: "Core banking systems, digital banking, customer onboarding, and regulatory compliance tools for banks and financial institutions." },
  { title: "Healthcare", description: "Automation of processes for hospitals and clinics. Patient management systems, appointment scheduling, and EHR integration." },
  { title: "Insurance", description: "Customer and policy management, insurance claims processing, scoring, and risk assessment systems for insurance companies." },
  { title: "Retail & E-commerce", description: "Marketplaces, e-commerce platforms, ERP and CRM systems, inventory management, and supply chain digitalization." },
];

interface IndustriesSectionProps {
  industries?: SanityIndustry[];
}

export function IndustriesSection({ industries }: IndustriesSectionProps) {
  const displayIndustries =
    industries && industries.length > 0
      ? industries.map((ind) => ({
          title: ind.title,
          description: ind.description ?? "",
        }))
      : fallbackIndustries;

  return (
    <section className="border-y border-brand-border bg-brand-gray py-24 lg:py-32" aria-labelledby="industries-heading">
      <Container>
        <SectionHeading
          title="Industries We Serve"
          subtitle="Delivering specialized solutions across key sectors"
        />
        <div className="grid gap-px bg-brand-border sm:grid-cols-2 lg:grid-cols-3">
          {displayIndustries.map((industry) => (
            <div
              key={industry.title}
              className="group bg-brand-gray p-8 transition-all duration-300 hover:bg-brand-border/30"
            >
              <h3 className="text-sm font-medium uppercase tracking-wider text-white">
                {industry.title}
              </h3>
              <p className="mt-3 text-xs leading-relaxed text-gray-600">
                {industry.description}
              </p>
              <div className="mt-6 h-px w-8 bg-brand-border transition-all duration-300 group-hover:w-12 group-hover:bg-brand-green" />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
