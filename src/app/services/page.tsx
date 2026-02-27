import type { Metadata } from "next";
import Link from "next/link";
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
              <Link
                key={service.title}
                href={`/services/${service.slug.current}`}
                className="group flex flex-col gap-8 py-12 lg:flex-row lg:items-center hover:bg-brand-gray/30 transition-colors px-2 -mx-2"
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
                  <h3 className="mt-1 text-lg font-medium text-white group-hover:text-brand-green transition-colors">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-sm text-gray-500 leading-relaxed">
                    {service.shortDescription}
                  </p>
                </div>

                {/* Arrow */}
                <svg
                  className="hidden lg:block h-5 w-5 shrink-0 text-gray-700 group-hover:text-brand-green transition-colors"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Link>
            ))}
          </div>
        </Container>
      </section>
      <CTASection />
    </>
  );
}
