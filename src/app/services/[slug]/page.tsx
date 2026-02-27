import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/sections/PageHero";
import { CTASection } from "@/components/sections/CTASection";
import { JsonLd } from "@/components/seo/JsonLd";
import { Button } from "@/components/ui/Button";
import { getServiceBySlug, getServices } from "@/lib/sanity/fetchers";
import { getServiceIcon } from "@/lib/icons";
import { SITE_CONFIG } from "@/lib/constants";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const services = await getServices();
  return services.map((s) => ({ slug: s.slug.current }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = await getServiceBySlug(slug);
  if (!service) return {};
  return {
    title: service.title,
    description: service.shortDescription,
    alternates: { canonical: `/services/${slug}` },
  };
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const [service, allServices] = await Promise.all([
    getServiceBySlug(slug),
    getServices(),
  ]);

  if (!service) notFound();

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.shortDescription,
    provider: {
      "@type": "Organization",
      "@id": `${SITE_CONFIG.url}/#organization`,
      name: SITE_CONFIG.name,
    },
    url: `${SITE_CONFIG.url}/services/${slug}`,
  };

  const otherServices = allServices.filter((s) => s.slug.current !== slug);

  return (
    <>
      <JsonLd data={serviceJsonLd} />
      <PageHero title={service.title} subtitle={service.shortDescription} />

      {/* Main content */}
      <section className="py-24 lg:py-32 bg-brand-dark">
        <Container>
          <div className="grid gap-16 lg:grid-cols-3">
            {/* Left: description & features */}
            <div className="lg:col-span-2 space-y-10">
              <div className="flex items-start gap-6">
                <div className="flex h-16 w-16 shrink-0 items-center justify-center border border-brand-border text-brand-green">
                  {getServiceIcon(service.iconName ?? "", "h-8 w-8")}
                </div>
                <div>
                  <p className="text-gray-400 leading-relaxed">
                    {service.shortDescription}
                  </p>
                </div>
              </div>

              {service.features && service.features.length > 0 && (
                <div>
                  <h2 className="text-sm font-medium uppercase tracking-wider text-brand-green mb-6">
                    What&apos;s included
                  </h2>
                  <ul className="space-y-3">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3 text-sm text-gray-400">
                        <svg
                          className="mt-0.5 h-4 w-4 shrink-0 text-brand-green"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="pt-4">
                <Button href="/contacts" size="lg">
                  Discuss Your Project
                </Button>
              </div>
            </div>

            {/* Right: other services */}
            <div className="space-y-px border border-brand-border">
              <div className="px-6 py-4 border-b border-brand-border">
                <span className="text-xs font-medium uppercase tracking-wider text-gray-600">
                  Other Services
                </span>
              </div>
              {otherServices.map((s) => (
                <Link
                  key={s._id}
                  href={`/services/${s.slug.current}`}
                  className="flex items-center gap-4 px-6 py-4 text-sm text-gray-500 hover:text-white hover:bg-brand-gray transition-colors border-b border-brand-border last:border-b-0"
                >
                  <span className="shrink-0 text-brand-green">
                    {getServiceIcon(s.iconName ?? "", "h-4 w-4")}
                  </span>
                  {s.title}
                </Link>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <CTASection />
    </>
  );
}
