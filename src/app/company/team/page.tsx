import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/sections/PageHero";
import { CTASection } from "@/components/sections/CTASection";
import { JsonLd } from "@/components/seo/JsonLd";
import { SITE_CONFIG } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Our Team",
  description:
    "Meet the leadership team at BrainySoftware. Vitaly Fatsky, Founder & CEO — Technology and Low-code evangelist with 15+ years of experience.",
  alternates: { canonical: "/company/team" },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Vitaly Fatsky",
  jobTitle: "Founder & CEO",
  email: "vitaly.fatsky@brainysoft.ltd",
  description:
    "Technology and Low-code evangelist with 15+ years of experience in the technology sector",
  worksFor: {
    "@id": `${SITE_CONFIG.url}/#organization`,
  },
};

export default function TeamPage() {
  return (
    <>
      <JsonLd data={personJsonLd} />
      <PageHero
        title="Our Team"
        subtitle="Meet the people behind BrainySoftware"
      />
      <section className="py-24 lg:py-32 bg-brand-dark">
        <Container>
          <div className="mx-auto max-w-2xl">
            <div className="border border-brand-border">
              {/* Header */}
              <div className="border-b border-brand-border bg-brand-gray p-8">
                <div className="flex items-center gap-6">
                  <div className="flex h-20 w-20 shrink-0 items-center justify-center border border-brand-border text-gray-600">
                    <svg className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                    </svg>
                  </div>
                  <div>
                    <h2 className="text-xl font-medium text-white">Vitaly Fatsky</h2>
                    <p className="mt-1 text-xs uppercase tracking-wider text-brand-green">Founder & CEO</p>
                  </div>
                </div>
              </div>

              {/* Body */}
              <div className="p-8 space-y-6">
                <div className="flex flex-wrap gap-2">
                  {["Technology Evangelist", "Low-code Expert", "15+ Years"].map((tag) => (
                    <span key={tag} className="border border-brand-border px-3 py-1 text-xs text-gray-500">
                      {tag}
                    </span>
                  ))}
                </div>

                <p className="text-sm leading-relaxed text-gray-500">
                  Vitaly Fatsky is a Technology and Low-code evangelist with more
                  than 15 years of experience in the technology sector. As the
                  Founder and CEO of BrainySoftware, he leads a team of skilled
                  professionals dedicated to delivering innovative software
                  solutions for enterprises across multiple industries.
                </p>

                <p className="text-sm leading-relaxed text-gray-500">
                  Under his leadership, BrainySoftware has grown into a trusted
                  partner for companies in fintech, banking, telecom, healthcare,
                  insurance, and retail.
                </p>

                <div className="border-t border-brand-border pt-6">
                  <a href="mailto:vitaly.fatsky@brainysoft.ltd" className="text-xs text-gray-600 hover:text-brand-green transition-colors">
                    vitaly.fatsky@brainysoft.ltd
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
      <CTASection />
    </>
  );
}
