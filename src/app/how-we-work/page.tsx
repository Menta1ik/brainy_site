import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/sections/PageHero";
import { CTASection } from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "How We Work | BrainySoftware",
  description:
    "Our proven development process: Discovery, Design, Development, Testing, and Deployment. Learn how we deliver successful software projects.",
  alternates: { canonical: "/how-we-work" },
};

const processSteps = [
  {
    number: "01",
    title: "Discovery & Strategy",
    duration: "1-2 weeks",
    description:
      "We dive deep into your business needs, goals, and challenges. Our team conducts stakeholder interviews, analyzes competitive landscape, and defines clear success metrics.",
    activities: [
      "Business requirements analysis",
      "User research and interviews",
      "Technology stack recommendations",
      "Project roadmap and timeline",
    ],
  },
  {
    number: "02",
    title: "Design & Architecture",
    duration: "2-4 weeks",
    description:
      "Our architects and designers create comprehensive solution designs. We document system architecture, database schemas, API contracts, and UI/UX mockups.",
    activities: [
      "System architecture design",
      "Database schema design",
      "API specifications",
      "UI/UX wireframes and designs",
    ],
  },
  {
    number: "03",
    title: "Development & Implementation",
    duration: "Variable",
    description:
      "Our development team brings the design to life with clean, tested code. We follow agile methodologies with regular sprints, code reviews, and continuous integration.",
    activities: [
      "Agile sprint planning",
      "Feature development",
      "Code reviews and pair programming",
      "Continuous integration/deployment",
    ],
  },
  {
    number: "04",
    title: "Testing & Quality Assurance",
    duration: "Ongoing",
    description:
      "Comprehensive testing ensures reliability. We perform unit testing, integration testing, performance testing, and security audits throughout development.",
    activities: [
      "Functional testing",
      "Performance testing",
      "Security audits",
      "User acceptance testing",
    ],
  },
  {
    number: "05",
    title: "Deployment & Launch",
    duration: "1-2 weeks",
    description:
      "We carefully plan and execute production deployment with minimal downtime. Our team provides 24/7 support during launch.",
    activities: [
      "Production environment setup",
      "Data migration planning",
      "Deployment automation",
      "Post-launch monitoring",
    ],
  },
  {
    number: "06",
    title: "Support & Optimization",
    duration: "Ongoing",
    description:
      "After launch, we provide ongoing support, maintenance, and optimization. We monitor performance, fix issues, and implement improvements.",
    activities: [
      "24/7 technical support",
      "Performance monitoring",
      "Security patches",
      "Feature enhancements",
    ],
  },
];

export default function HowWeWorkPage() {
  return (
    <>
      <PageHero
        title="How We Work"
        subtitle="Our proven process for delivering successful software solutions"
      />

      <section className="py-24 lg:py-32 bg-brand-dark">
        <Container>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {processSteps.map((step, index) => (
              <div
                key={step.number}
                className="bg-brand-gray p-8 border border-brand-border hover:border-brand-green transition-colors"
              >
                <div className="flex items-start justify-between mb-6">
                  <span className="text-4xl font-bold text-brand-green/20">
                    {step.number}
                  </span>
                  <span className="text-xs uppercase tracking-wider text-gray-600">
                    {step.duration}
                  </span>
                </div>

                <h3 className="text-lg font-medium text-white mb-3">
                  {step.title}
                </h3>

                <p className="text-sm text-gray-400 mb-6">
                  {step.description}
                </p>

                <div className="space-y-2">
                  <p className="text-xs uppercase tracking-wider text-brand-green font-medium">
                    Key Activities:
                  </p>
                  <ul className="space-y-1">
                    {step.activities.map((activity) => (
                      <li
                        key={activity}
                        className="text-xs text-gray-500 flex items-start gap-2"
                      >
                        <span className="text-brand-green mt-1">•</span>
                        <span>{activity}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-24 lg:py-32 bg-brand-gray border-y border-brand-border">
        <Container>
          <div className="max-w-3xl mx-auto">
            <div className="mb-12">
              <h2 className="text-2xl font-medium text-white mb-4">
                Why Our Process Works
              </h2>
              <p className="text-gray-400">
                We've refined our development process over 15+ years working with
                enterprises across fintech, banking, telecom, healthcare, and insurance.
                Our methodology ensures quality, transparency, and on-time delivery.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              <div>
                <h3 className="text-lg font-medium text-white mb-3">
                  Agile & Iterative
                </h3>
                <p className="text-sm text-gray-400">
                  We work in 2-week sprints with regular demos and feedback loops.
                  This allows us to adapt to changes and deliver incremental value.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium text-white mb-3">
                  Transparent Communication
                </h3>
                <p className="text-sm text-gray-400">
                  Daily standups, weekly updates, and regular stakeholder meetings
                  keep everyone aligned and informed throughout the project.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium text-white mb-3">
                  Quality First
                </h3>
                <p className="text-sm text-gray-400">
                  Code reviews, automated testing, and continuous integration ensure
                  high quality from day one. We measure and track quality metrics.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <CTASection />
    </>
  );
}
