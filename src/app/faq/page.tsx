import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/sections/PageHero";
import { CTASection } from "@/components/sections/CTASection";
import { SectionHeading } from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "FAQ | BrainySoftware",
  description:
    "Frequently asked questions about BrainySoftware's services, pricing, timeline, technologies, and support.",
  alternates: { canonical: "/faq" },
};

const faqCategories = [
  {
    title: "About Our Services",
    items: [
      {
        question: "What types of software solutions does BrainySoftware develop?",
        answer:
          "We specialize in custom enterprise software across multiple domains: fintech, banking, telecom, healthcare, insurance, and retail. We also offer low-code platform development, product design, QA & testing, and IT consultancy.",
      },
      {
        question: "Do you work with startups or only large enterprises?",
        answer:
          "We work with organizations of all sizes - from ambitious startups to Fortune 500 companies. Our scalable solutions adapt to your budget and complexity requirements.",
      },
      {
        question: "Can you help with legacy system modernization?",
        answer:
          "Yes, we specialize in modernizing legacy systems. We assess existing architecture, plan migration strategies, and implement modern tech stacks while minimizing disruption to your operations.",
      },
      {
        question: "Do you offer low-code development?",
        answer:
          "Yes, we develop solutions using our own low-code platforms and popular low-code frameworks. This approach reduces development time by 40-60% while maintaining quality.",
      },
    ],
  },
  {
    title: "Pricing & Budget",
    items: [
      {
        question: "How much does a custom software project cost?",
        answer:
          "Project costs vary widely based on complexity, timeline, and scope. A typical enterprise project ranges from €50K to €500K+. We offer flexible engagement models: fixed-price, time & materials, and dedicated teams.",
      },
      {
        question: "Do you offer fixed-price or hourly rate projects?",
        answer:
          "We offer both. Fixed-price works best for well-defined projects. Time & materials is ideal when requirements may evolve. Dedicated teams provide flexibility for long-term projects.",
      },
      {
        question: "What's included in your pricing?",
        answer:
          "Our pricing covers development, QA, deployment, and 30 days of post-launch support. Optional services include maintenance contracts, performance optimization, and security audits.",
      },
      {
        question: "Do you have hidden costs?",
        answer:
          "No. We provide transparent, detailed quotes upfront. Any scope changes are discussed and approved before implementation.",
      },
    ],
  },
  {
    title: "Timeline & Delivery",
    items: [
      {
        question: "How long does a typical project take?",
        answer:
          "Project duration depends on complexity. Simple projects: 2-3 months. Medium complexity: 4-8 months. Complex enterprise systems: 9-18 months. We provide detailed timelines after the discovery phase.",
      },
      {
        question: "Can you accelerate the timeline?",
        answer:
          "Yes. We can scale team size, work in parallel workstreams, or implement agile approaches with faster iterations. However, quality cannot be compromised. We'll discuss realistic acceleration options.",
      },
      {
        question: "How do you ensure on-time delivery?",
        answer:
          "We use agile methodologies with 2-week sprints and buffer time built into timelines. Regular tracking, risk management, and proactive communication ensure we meet deadlines.",
      },
      {
        question: "What happens if requirements change mid-project?",
        answer:
          "We welcome feedback and changes. We manage scope changes through our change control process - documenting impact on timeline and budget before implementation.",
      },
    ],
  },
  {
    title: "Technology & Architecture",
    items: [
      {
        question: "What technologies do you work with?",
        answer:
          "We work with modern tech stacks including Java/Spring Boot, Python/Django, Node.js, React, Vue.js, Next.js, PostgreSQL, Oracle, Kafka, AWS, Azure, and more. We choose technologies based on project requirements.",
      },
      {
        question: "Do you use cloud infrastructure?",
        answer:
          "Yes, we're experienced with AWS, Azure, and Google Cloud. We design scalable, resilient cloud architectures following best practices for security, performance, and cost optimization.",
      },
      {
        question: "How do you handle security and compliance?",
        answer:
          "Security is built-in from day one. We conduct security audits, implement encryption, follow OWASP guidelines, and ensure compliance with standards like GDPR, HIPAA, PCI-DSS, and SOC 2.",
      },
      {
        question: "Can you integrate with our existing systems?",
        answer:
          "Absolutely. We specialize in integrations with legacy systems, third-party APIs, and SaaS platforms. We use modern integration patterns and ensure data consistency across systems.",
      },
    ],
  },
  {
    title: "Support & Maintenance",
    items: [
      {
        question: "What support do you provide after launch?",
        answer:
          "We provide 30 days of included post-launch support covering deployment, initial bugs, and optimization. Beyond that, we offer maintenance packages ranging from basic (bug fixes) to comprehensive (24/7 monitoring, updates, enhancements).",
      },
      {
        question: "Do you offer 24/7 support?",
        answer:
          "Yes, we offer 24/7 support packages for critical systems. Priority support ensures rapid response to production issues.",
      },
      {
        question: "How much does ongoing maintenance cost?",
        answer:
          "Maintenance costs typically range from 15-25% of original project cost annually, depending on the support level (basic, standard, or premium).",
      },
      {
        question: "Can you help with feature enhancements after launch?",
        answer:
          "Yes. We can add new features, improve performance, or optimize the system. We work in sprints based on your priorities and budget.",
      },
    ],
  },
  {
    title: "Team & Communication",
    items: [
      {
        question: "Who will be my main contact?",
        answer:
          "You'll have a dedicated Project Manager who serves as your primary contact. They coordinate with architects, developers, and QA team members.",
      },
      {
        question: "How often will we communicate?",
        answer:
          "We maintain regular communication through daily standups (15 min), weekly demos, and bi-weekly business reviews. Custom communication plans available.",
      },
      {
        question: "Can I have dedicated developers?",
        answer:
          "Yes, we offer dedicated team models where developers work exclusively on your project. This is ideal for long-term projects or continuous development.",
      },
      {
        question: "What if I'm not satisfied with the team?",
        answer:
          "We're committed to your satisfaction. If there are concerns, we'll discuss and can adjust team composition, structure, or approach within agreed terms.",
      },
    ],
  },
];

export default function FAQPage() {
  return (
    <>
      <PageHero
        title="Frequently Asked Questions"
        subtitle="Everything you need to know about working with BrainySoftware"
      />

      <section className="py-24 lg:py-32 bg-brand-dark">
        <Container>
          <div className="space-y-16">
            {faqCategories.map((category, catIndex) => (
              <div key={catIndex}>
                <h2 className="text-xl font-medium text-white mb-8 pb-4 border-b border-brand-border">
                  {category.title}
                </h2>

                <div className="space-y-6">
                  {category.items.map((item, itemIndex) => (
                    <details
                      key={itemIndex}
                      className="group bg-brand-gray border border-brand-border hover:border-brand-green transition-colors cursor-pointer"
                    >
                      <summary className="p-6 flex items-center justify-between select-none hover:bg-brand-border/30">
                        <h3 className="text-base font-medium text-white pr-6">
                          {item.question}
                        </h3>
                        <svg
                          className="w-5 h-5 text-brand-green shrink-0 transition-transform group-open:rotate-180"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 14l-7 7m0 0l-7-7m7 7V3"
                          />
                        </svg>
                      </summary>

                      <div className="px-6 pb-6 border-t border-brand-border pt-6">
                        <p className="text-sm text-gray-400 leading-relaxed">
                          {item.answer}
                        </p>
                      </div>
                    </details>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16 lg:py-20 bg-brand-gray border-y border-brand-border">
        <Container>
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-sm text-gray-500 mb-4">DIDN'T FIND YOUR ANSWER?</p>
            <h2 className="text-2xl font-medium text-white mb-4">
              Get in touch with our team
            </h2>
            <p className="text-gray-400 mb-8">
              Our experts are ready to answer your questions and discuss your project.
            </p>
            <a
              href="/contacts"
              className="inline-flex items-center justify-center font-medium tracking-wider uppercase transition-colors duration-200 cursor-pointer bg-brand-green text-black hover:bg-brand-green-dark px-8 py-3 text-sm"
            >
              Contact Us
            </a>
          </div>
        </Container>
      </section>

      <CTASection />
    </>
  );
}
