import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { PageHero } from "@/components/sections/PageHero";
import { CTASection } from "@/components/sections/CTASection";
import { getServices } from "@/lib/sanity/fetchers";
import { getServiceIcon } from "@/lib/icons";

export const metadata: Metadata = {
  title: "Why Choose Us",
  description:
    "BrainySoftware is the partner of choice for leading enterprises and startups. We offer low-code development, custom software, QA testing, IT consultancy, product design, and dedicated teams.",
  alternates: { canonical: "/company/why-choose-us" },
};

export default async function WhyChooseUsPage() {
  const services = await getServices();

  return (
    <>
      <PageHero
        title="Your Partner for Software Innovation"
        subtitle="BrainySoftware is the partner of choice for many of the world's leading enterprises, SMEs, and technology challengers."
      />
      <section className="py-24 lg:py-32 bg-brand-dark">
        <Container>
          <div className="grid gap-px bg-brand-border md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <Card
                key={service.title}
                title={service.title}
                description={service.shortDescription}
                icon={getServiceIcon(service.iconName ?? "", "h-7 w-7")}
              />
            ))}
          </div>
        </Container>
      </section>
      <CTASection />
    </>
  );
}
