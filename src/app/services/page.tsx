import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/sections/PageHero";
import { CTASection } from "@/components/sections/CTASection";
import { JsonLd } from "@/components/seo/JsonLd";
import { SITE_CONFIG } from "@/lib/constants";
import { getServices } from "@/lib/sanity/fetchers";
import { getServiceIcon } from "@/lib/icons";

export const metadata: Metadata = {
  title: "IT Services",
  description:
    "BrainySoftware offers a wide variety of IT services: low-code development, custom software, QA & testing, IT consultancy, product design, and dedicated team solutions.",
  alternates: { canonical: "/services" },
};

export default async function ServicesPage() {
  const services = await getServices();

  const servicesJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: services.map((service, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Service",
        name: service.title,
        description: service.shortDescription,
        provider: {
          "@id": `${SITE_CONFIG.url}/#organization`,
        },
      },
    })),
  };

  return (
    <>
      <JsonLd data={servicesJsonLd} />
      <PageHero
        title="We Offer a Wide Variety of IT Services"
        subtitle="Our team of experts delivers comprehensive technology solutions to help your business grow"
      />
      <section className="py-24 lg:py-32 bg-brand-dark">
        <Container>
          <div className="space-y-0 divide-y divide-brand-border border-y border-brand-border">
            {services.map((service, index) => (
              <div
                key={service.title}
                className="group flex flex-col gap-8 py-12 lg:flex-row lg:items-center"
              >
                {/* Icon block */}
                <div className="flex h-20 w-20 shrink-0 items-center justify-center border border-brand-border text-brand-green transition-colors group-hover:border-brand-green/40">
                  {getServiceIcon(service.iconName ?? "", "h-10 w-10")}
                </div>

                {/* Text */}
                <div className="flex-1">
                  <span className="text-xs font-medium text-gray-700">
                    0{index + 1}
                  </span>
                  <h3 className="mt-1 text-lg font-medium text-white">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-sm text-gray-500 leading-relaxed">
                    {service.shortDescription}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>
      <CTASection />
    </>
  );
}
