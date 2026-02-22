import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

const industries = [
  { title: "Fintech", description: "Digital payment solutions, trading platforms, and financial analytics." },
  { title: "Telecom", description: "Communication platforms, network management, and customer portals." },
  { title: "Banking", description: "Core banking systems, digital banking, and regulatory compliance tools." },
  { title: "Healthcare", description: "Patient management, telemedicine solutions, and health data analytics." },
  { title: "Insurance", description: "Claims processing, policy management, and risk assessment systems." },
  { title: "Retail", description: "E-commerce platforms, inventory management, and customer experience solutions." },
];

export function IndustriesSection() {
  return (
    <section className="border-y border-brand-border bg-brand-gray py-24 lg:py-32" aria-labelledby="industries-heading">
      <Container>
        <SectionHeading
          title="Industries We Serve"
          subtitle="Delivering specialized solutions across key sectors"
        />
        <div className="grid gap-px bg-brand-border sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((industry) => (
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
