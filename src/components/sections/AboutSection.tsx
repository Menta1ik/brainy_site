import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RevealSection } from "@/components/ui/RevealSection";
import type { SanityAboutSection } from "@/lib/sanity/types";

const defaultStats = [
  { value: "15+", label: "Years in Business" },
  { value: "100+", label: "Projects Delivered" },
  { value: "50+", label: "Enterprise Clients" },
];

const defaultParagraphs = [
  "BrainySoftware is the partner of choice for leading enterprises, SMEs, and technology challengers. We help businesses elevate their value through custom software development, low-code platforms, product design, QA, and consultancy services.",
  "Based in Tallinn, Estonia, we maintain and modernize IT infrastructure, automate business processes, and build reliable software solutions for fintech, banking, telecom, healthcare, insurance, and retail industries.",
];

const highlights = [
  "End-to-end delivery from architecture to production",
  "Deep domain expertise across regulated industries",
  "Transparent, agile workflow with regular milestones",
  "Long-term support and continuous improvement",
];

interface AboutSectionProps {
  data?: SanityAboutSection | null;
}

export function AboutSection({ data }: AboutSectionProps) {
  const title = data?.title ?? "About BrainySoftware";
  const subtitle = data?.subtitle ?? "Your trusted technology partner since 2009";
  const paragraphs = data?.paragraphs?.length ? data.paragraphs : defaultParagraphs;
  const statsData = data?.stats?.length ? data.stats : defaultStats;

  return (
    <section className="py-24 lg:py-32 bg-brand-dark" aria-labelledby="about-heading">
      <Container>
        <div className="grid items-start gap-16 lg:grid-cols-2">
          {/* ── Left: copy ── */}
          <RevealSection>
            <SectionHeading title={title} subtitle={subtitle} align="left" />
            {paragraphs.map((p, i) => (
              <p
                key={i}
                className={`${i > 0 ? "mt-4 " : ""}text-sm leading-relaxed text-gray-500`}
              >
                {p}
              </p>
            ))}

            {/* Highlights list */}
            <ul className="mt-8 space-y-2.5">
              {highlights.map((item) => (
                <li key={item} className="flex items-start gap-3 text-xs text-gray-600">
                  <span className="mt-0.5 shrink-0 text-brand-green">›</span>
                  {item}
                </li>
              ))}
            </ul>
          </RevealSection>

          {/* ── Right: stats + visual ── */}
          <RevealSection delay={150}>
            {/* Stats grid */}
            <div className="grid grid-cols-3 gap-px bg-brand-border border border-brand-border">
              {statsData.map((stat) => (
                <div key={stat.label} className="bg-brand-gray p-8 text-center">
                  <div className="text-3xl font-medium text-brand-green">
                    {stat.value}
                  </div>
                  <div className="mt-2 text-xs uppercase tracking-wider text-gray-600">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Decorative info block */}
            <div className="mt-px border border-t-0 border-brand-border bg-brand-gray p-6">
              <div className="flex items-start gap-4">
                <div className="shrink-0 text-brand-green">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                      d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                      d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs font-medium uppercase tracking-wider text-gray-500">
                    Headquartered in
                  </p>
                  <p className="mt-0.5 text-sm text-white">Tallinn, Estonia 🇪🇪</p>
                  <p className="mt-1 text-xs text-gray-600">
                    Part of the EU — fully compliant with GDPR and EU regulations
                  </p>
                </div>
              </div>
            </div>
          </RevealSection>
        </div>
      </Container>
    </section>
  );
}
