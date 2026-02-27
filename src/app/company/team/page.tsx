import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/sections/PageHero";
import { CTASection } from "@/components/sections/CTASection";
import { JsonLd } from "@/components/seo/JsonLd";
import { SITE_CONFIG } from "@/lib/constants";
import { getTeamMembers } from "@/lib/sanity/fetchers";

export const metadata: Metadata = {
  title: "Our Team",
  description:
    "Meet the leadership team at BrainySoftware. Vitaly Fatsky, Founder & CEO — Technology and Low-code evangelist with 15+ years of experience.",
  alternates: { canonical: "/company/team" },
};

const fallbackMember = {
  name: "Vitaly Fatsky",
  role: "Founder & CEO",
  email: "vitaly.fatsky@brainysoft.ltd",
  specializations: ["Technology Evangelist", "Low-code Expert", "15+ Years"],
  shortBio: [
    "Vitaly Fatsky is a Technology and Low-code evangelist with more than 15 years of experience in the technology sector. As the Founder and CEO of BrainySoftware, he leads a team of skilled professionals dedicated to delivering innovative software solutions for enterprises across multiple industries.",
    "Under his leadership, BrainySoftware has grown into a trusted partner for companies in fintech, banking, telecom, healthcare, insurance, and retail.",
  ],
};

export default async function TeamPage() {
  const members = await getTeamMembers();

  const displayMembers =
    members.length > 0
      ? members.map((m) => ({
          name: m.name,
          role: m.role,
          email: m.email,
          specializations: m.specializations ?? [],
          shortBio: m.shortBio ? [m.shortBio] : [],
        }))
      : [fallbackMember];

  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: displayMembers[0].name,
    jobTitle: displayMembers[0].role,
    email: displayMembers[0].email,
    description: `${displayMembers[0].role} at BrainySoftware`,
    worksFor: {
      "@id": `${SITE_CONFIG.url}/#organization`,
    },
  };

  return (
    <>
      <JsonLd data={personJsonLd} />
      <PageHero
        title="Our Team"
        subtitle="Meet the people behind BrainySoftware"
      />
      <section className="py-24 lg:py-32 bg-brand-dark">
        <Container>
          <div className="grid gap-8 md:grid-cols-2">
            {displayMembers.map((member) => (
              <div key={member.name} className="border border-brand-border flex flex-col">
                {/* Header */}
                <div className="border-b border-brand-border bg-brand-gray p-8">
                  <div className="flex items-center gap-6">
                    <div className="flex h-20 w-20 shrink-0 items-center justify-center border border-brand-border text-gray-600">
                      <svg className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                      </svg>
                    </div>
                    <div>
                      <h2 className="text-xl font-medium text-white">{member.name}</h2>
                      <p className="mt-1 text-xs uppercase tracking-wider text-brand-green">{member.role}</p>
                    </div>
                  </div>
                </div>

                {/* Body */}
                <div className="flex flex-1 flex-col p-8 space-y-6">
                  {member.specializations.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                      {member.specializations.map((tag) => (
                        <span key={tag} className="border border-brand-border px-3 py-1 text-xs text-gray-500">
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}

                  {member.shortBio.map((paragraph, i) => (
                    <p key={i} className="text-sm leading-relaxed text-gray-500">
                      {paragraph}
                    </p>
                  ))}

                  {member.email && (
                    <div className="border-t border-brand-border pt-6">
                      <a href={`mailto:${member.email}`} className="text-xs text-gray-600 hover:text-brand-green transition-colors">
                        {member.email}
                      </a>
                    </div>
                  )}
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
