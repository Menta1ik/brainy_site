import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

const projects = [
  { title: "Fintech Platform", category: "Financial Technology" },
  { title: "Banking Dashboard", category: "Banking" },
  { title: "Insurance Portal", category: "Insurance" },
  { title: "Healthcare App", category: "Healthcare" },
];

export function ProjectsGallery() {
  return (
    <section className="py-24 lg:py-32 bg-brand-dark" aria-labelledby="projects-heading">
      <Container>
        <SectionHeading
          title="Our Projects"
          subtitle="A selection of our recent work across various industries"
        />
        <div className="grid gap-px bg-brand-border sm:grid-cols-2 lg:grid-cols-4">
          {projects.map((project, index) => (
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
              <p className="mt-1 text-xs text-gray-600">
                {project.category}
              </p>
              <div className="mt-6 h-px w-8 bg-brand-border transition-all duration-300 group-hover:w-12 group-hover:bg-brand-green" />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
