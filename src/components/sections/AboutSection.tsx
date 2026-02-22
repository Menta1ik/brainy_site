import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

const stats = [
  { value: "15+", label: "Years" },
  { value: "100+", label: "Projects" },
  { value: "6+", label: "Industries" },
];

export function AboutSection() {
  return (
    <section className="py-24 lg:py-32 bg-brand-dark" aria-labelledby="about-heading">
      <Container>
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <div>
            <SectionHeading
              title="About BrainySoftware"
              subtitle="Your trusted technology partner since 2009"
              align="left"
            />
            <p className="text-sm leading-relaxed text-gray-500">
              With over 15 years of experience in the IT industry, BrainySoftware
              has established itself as a trusted partner for enterprises and
              startups alike. Based in Tallinn, Estonia, we specialize in
              developing cutting-edge solutions for fintech, telecom, banking,
              healthcare, insurance, and retail industries.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-gray-500">
              Our team of skilled professionals combines technical expertise with
              deep industry knowledge to deliver solutions that drive real
              business results.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-px bg-brand-border">
            {stats.map((stat) => (
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
