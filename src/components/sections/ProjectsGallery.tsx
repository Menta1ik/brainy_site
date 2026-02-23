import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import type { SanityProject } from "@/lib/sanity/types";

const fallbackProjects = [
  { title: "Payment Processing Platform", category: "Fintech", description: "High-load transaction processing system for a European payment provider." },
  { title: "Core Banking System", category: "Banking", description: "Digital banking platform with customer management and regulatory compliance." },
  { title: "Claims Management Portal", category: "Insurance", description: "End-to-end insurance claims processing, scoring, and policy management." },
  { title: "Telecom CRM", category: "Telecom", description: "Customer management and billing system for a mobile operator." },
  { title: "Patient Management System", category: "Healthcare", description: "Hospital workflow automation with appointment scheduling and EHR integration." },
  { title: "E-commerce Marketplace", category: "Retail", description: "Multi-vendor marketplace with inventory management and analytics dashboard." },
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
        }))
      : fallbackProjects;

  return (
    <section className="py-24 lg:py-32 bg-brand-dark" aria-labelledby="projects-heading">
      <Container>
        <SectionHeading
          title="Our Projects"
          subtitle="A selection of our recent work across various industries"
        />
        <div className="grid gap-px bg-brand-border sm:grid-cols-2 lg:grid-cols-3">
          {displayProjects.map((project, index) => (
            <div
              key={project.title}
              className="group relative bg-brand-gray p-8 transition-all duration-300 hover:bg-brand-border/50"
            >
              <span className="text-xs text-gray-700 font-medium">
                0{index + 1}
              </span>
              <h3 className="mt-4 text-base font-medium text-white">
                {project.title}
              </h3>
              <p className="mt-1 text-xs uppercase tracking-wider text-brand-green">
                {project.category}
              </p>
              <p className="mt-3 text-xs leading-relaxed text-gray-600">
                {project.description}
              </p>
              <div className="mt-6 h-px w-8 bg-brand-border transition-all duration-300 group-hover:w-12 group-hover:bg-brand-green" />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
