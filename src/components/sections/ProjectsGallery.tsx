import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RevealSection } from "@/components/ui/RevealSection";
import type { SanityProject } from "@/lib/sanity/types";

const fallbackProjects = [
  {
    title: "Payment Processing Platform",
    category: "Fintech",
    description:
      "High-load transaction processing system for a European payment provider.",
    slug: "payment-processing-platform",
  },
  {
    title: "Core Banking System",
    category: "Banking",
    description:
      "Digital banking platform with customer management and regulatory compliance.",
    slug: "core-banking-system",
  },
  {
    title: "Claims Management Portal",
    category: "Insurance",
    description:
      "End-to-end insurance claims processing, scoring, and policy management.",
    slug: "claims-management-portal",
  },
  {
    title: "Telecom CRM",
    category: "Telecom",
    description:
      "Customer management and billing system for a mobile operator.",
    slug: "telecom-crm",
  },
  {
    title: "Patient Management System",
    category: "Healthcare",
    description:
      "Hospital workflow automation with appointment scheduling and EHR integration.",
    slug: "patient-management-system",
  },
  {
    title: "E-commerce Marketplace",
    category: "Retail & E-commerce",
    description:
      "Multi-vendor marketplace with inventory management and analytics dashboard.",
    slug: "e-commerce-marketplace",
  },
  {
    title: "In-House Credit Scoring System",
    category: "Fintech",
    description:
      "Advanced credit scoring and decision management system for financial services.",
    slug: "credit-scoring-system",
  },
  {
    title: "Full Online Lending Automation",
    category: "Fintech",
    description:
      "End-to-end digital lending platform with automated underwriting and origination.",
    slug: "online-lending-automation",
  },
  {
    title: "Automated Credit Decisioning Platform",
    category: "Banking",
    description:
      "Enterprise credit decisioning system for banking operations.",
    slug: "automated-credit-decisioning",
  },
  {
    title: "Digital Loan Origination System",
    category: "Banking",
    description:
      "Modern digital loan origination platform for banking services.",
    slug: "digital-loan-origination",
  },
];

interface ProjectsGalleryProps {
  projects?: SanityProject[];
}

export function ProjectsGallery({ projects }: ProjectsGalleryProps) {
  const displayProjects =
    projects && projects.length > 0
      ? projects.map((p) => ({
          title: p.title,
          category: p.industry?.title ?? "",
          description: p.description,
          slug: p.slug.current,
        }))
      : fallbackProjects;

  return (
    <section
      className="py-24 lg:py-32 bg-brand-dark"
      aria-labelledby="projects-heading"
    >
      <Container>
        <SectionHeading
          title="Our Projects"
          subtitle="A selection of our recent work across various industries"
        />

        <div className="grid gap-px bg-brand-border sm:grid-cols-2 lg:grid-cols-3">
          {displayProjects.map((project, index) => (
            <RevealSection key={project.title} delay={index * 60}>
              <Link
                href={`/portfolio/${project.slug}`}
                className="group relative flex h-full flex-col bg-brand-gray p-8 transition-colors duration-300 hover:bg-brand-dark"
              >
                {/* Number */}
                <span className="text-xs font-medium text-gray-700">
                  {index + 1 < 10 ? `0${index + 1}` : index + 1}
                </span>

                {/* Title */}
                <h3 className="mt-4 text-base font-medium text-white transition-colors group-hover:text-brand-green">
                  {project.title}
                </h3>

                {/* Category badge */}
                <p className="mt-1 text-xs uppercase tracking-wider text-brand-green">
                  {project.category}
                </p>

                {/* Description */}
                <p className="mt-3 flex-1 text-xs leading-relaxed text-gray-600">
                  {project.description}
                </p>

                {/* CTA row */}
                <div className="mt-6 flex items-center justify-between">
                  <div className="h-px w-8 bg-brand-border transition-[width,background-color] duration-300 group-hover:w-12 group-hover:bg-brand-green" />
                  <svg
                    className="h-4 w-4 text-gray-700 opacity-0 transition-[opacity,color] duration-300 group-hover:opacity-100 group-hover:text-brand-green"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                    />
                  </svg>
                </div>
              </Link>
            </RevealSection>
          ))}
        </div>

        {/* View all link */}
        <div className="mt-12 text-center">
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-wider text-gray-600 transition-colors hover:text-brand-green"
          >
            View All Projects
            <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </Link>
        </div>
      </Container>
    </section>
  );
}
