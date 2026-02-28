import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/sections/PageHero";
import { CTASection } from "@/components/sections/CTASection";
import { getFeaturedProjects } from "@/lib/sanity/fetchers";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Selected case studies from BrainySoftware — custom software projects in fintech, banking, insurance, telecom, healthcare, and e-commerce.",
  alternates: { canonical: "/portfolio" },
};

export default async function PortfolioPage() {
  const projects = await getFeaturedProjects();

  return (
    <>
      <PageHero
        title="Our Work"
        subtitle="Selected projects across fintech, banking, telecom, healthcare, insurance, and retail"
      />

      <section className="py-24 lg:py-32 bg-brand-dark">
        <Container>
          <div className="grid gap-px bg-brand-border sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <Link
                key={project._id}
                href={`/portfolio/${project.slug.current}`}
                className="group relative bg-brand-gray p-8 transition-colors duration-300 hover:bg-brand-border/50"
              >
                <span className="text-xs text-gray-700 font-medium">
                  0{index + 1}
                </span>
                <h2 className="mt-4 text-base font-medium text-white group-hover:text-brand-green transition-colors">
                  {project.title}
                </h2>
                {project.industry?.title && (
                  <p className="mt-1 text-xs uppercase tracking-wider text-brand-green">
                    {project.industry.title}
                  </p>
                )}
                <p className="mt-3 text-xs leading-relaxed text-gray-600">
                  {project.description}
                </p>
                {project.technologies && project.technologies.length > 0 && (
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 text-xs border border-brand-border text-gray-700"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
                <div className="mt-6 h-px w-8 bg-brand-border transition-[width,background-color] duration-300 group-hover:w-12 group-hover:bg-brand-green" />
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <CTASection />
    </>
  );
}
