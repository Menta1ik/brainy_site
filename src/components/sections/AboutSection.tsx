import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
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
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <div>
            <SectionHeading
              title={title}
              subtitle={subtitle}
              align="left"
            />
            {paragraphs.map((p, i) => (
              <p key={i} className={`${i > 0 ? "mt-4 " : ""}text-sm leading-relaxed text-gray-500`}>
                {p}
              </p>
            ))}
          </div>

          <div className="grid grid-cols-3 gap-px bg-brand-border">
            {statsData.map((stat) => (
              <div
                key={stat.label}
                className="bg-brand-gray p-8 text-center"
              >
                <div className="text-3xl font-medium text-brand-green">
                  {stat.value}
                </div>
                <div className="mt-2 text-xs uppercase tracking-wider text-gray-600">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
