import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { getServiceCardIcon } from "@/lib/icons";
import type { SanityService } from "@/lib/sanity/types";

const fallbackServices = [
  { title: "Low-code Development", shortDescription: "Deliver applications faster with minimal hand-coding. Low-code reduces development complexity, letting companies of any size increase productivity and speed to market.", iconName: "globe" },
  { title: "Custom Software", shortDescription: "Enterprise-grade software solutions from architecture to deployment. We handle complex integrations, legacy modernization, and scalable system design.", iconName: "smartphone" },
  { title: "Product Design", shortDescription: "With low-code, we spend more time creating and less on repetitive work. User-centered design backed by research, prototyping, and usability testing.", iconName: "palette" },
];

interface ServicesCardsProps {
  services?: SanityService[];
}

export function ServicesCards({ services }: ServicesCardsProps) {
  const displayServices =
    services && services.length > 0
      ? services.slice(0, 3).map((s) => ({
          title: s.title,
          shortDescription: s.shortDescription,
          iconName: s.iconName,
        }))
      : fallbackServices;

  return (
    <section className="border-y border-brand-border bg-brand-gray py-24 lg:py-32" aria-labelledby="services-heading">
      <Container>
        <SectionHeading
          title="What We Do"
          subtitle="Innovative solutions tailored to your business needs"
        />
        <div className="grid gap-px bg-brand-border md:grid-cols-3">
          {displayServices.map((service) => (
            <Card
              key={service.title}
              title={service.title}
              description={service.shortDescription}
              icon={getServiceCardIcon(service.iconName ?? "", "h-6 w-6")}
              href="/services"
              className="border-0"
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
