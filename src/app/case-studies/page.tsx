import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/sections/PageHero";
import { CTASection } from "@/components/sections/CTASection";
import { getFeaturedProjects } from "@/lib/sanity/fetchers";

export const metadata: Metadata = {
  title: "Case Studies | BrainySoftware",
  description:
    "Detailed case studies of successful software projects. Learn how we solved real-world problems for fintech, banking, healthcare, and other industries.",
  alternates: { canonical: "/case-studies" },
};

export default async function CaseStudiesPage() {
  const projects = await getFeaturedProjects();

  return (
    <>
      <PageHero
        title="Case Studies"
        subtitle="Real-world projects, real results. See how we solved complex challenges."
      />

      <section className="py-24 lg:py-32 bg-brand-dark">
        <Container>
          <div className="space-y-16">
            {projects.map((project, index) => (
              <article
                key={project._id}
                className="border-b border-brand-border pb-16 last:border-0 last:pb-0"
              >
                <div className="grid gap-12 lg:grid-cols-2 items-start">
                  {/* Left side - Content */}
                  <div>
                    <div className="inline-block mb-4">
                      <span className="text-xs uppercase tracking-widest font-medium text-brand-green">
                        Case Study {index + 1}
                      </span>
                    </div>

                    <h2 className="text-3xl font-medium text-white mb-3">
                      {project.title}
                    </h2>

                    {project.industry?.title && (
                      <p className="text-sm text-gray-500 mb-6 uppercase tracking-wider">
                        Industry: {project.industry.title}
                      </p>
                    )}

                    <div className="space-y-8 mb-8">
                      {/* Challenge */}
                      <div>
                        <h3 className="text-sm font-medium text-brand-green uppercase tracking-wider mb-3">
                          The Challenge
                        </h3>
                        <p className="text-gray-400 leading-relaxed">
                          {project.challenge}
                        </p>
                      </div>

                      {/* Solution */}
                      <div>
                        <h3 className="text-sm font-medium text-brand-green uppercase tracking-wider mb-3">
                          Our Solution
                        </h3>
                        <p className="text-gray-400 leading-relaxed">
                          {project.solution}
                        </p>
                      </div>

                      {/* Results */}
                      {project.results && project.results.length > 0 && (
                        <div>
                          <h3 className="text-sm font-medium text-brand-green uppercase tracking-wider mb-3">
                            Key Results
                          </h3>
                          <ul className="space-y-2">
                            {project.results.map((result) => (
                              <li
                                key={result}
                                className="flex items-start gap-3 text-gray-400"
                              >
                                <span className="text-brand-green mt-1 shrink-0">
                                  ✓
                                </span>
                                <span>{result}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Right side - Tech Stack & Details */}
                  <div className="bg-brand-gray p-8 border border-brand-border">
                    <h3 className="text-lg font-medium text-white mb-6">
                      Project Details
                    </h3>

                    {/* Technologies */}
                    {project.technologies && project.technologies.length > 0 && (
                      <div className="mb-8 pb-8 border-b border-brand-border">
                        <p className="text-xs uppercase tracking-wider text-gray-600 font-medium mb-4">
                          Technologies
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="px-3 py-1.5 bg-brand-dark border border-brand-border text-xs text-gray-400 hover:text-brand-green transition-colors"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Industry */}
                    {project.industry?.title && (
                      <div className="mb-8 pb-8 border-b border-brand-border">
                        <p className="text-xs uppercase tracking-wider text-gray-600 font-medium mb-3">
                          Industry
                        </p>
                        <p className="text-base text-white font-medium">
                          {project.industry.title}
                        </p>
                      </div>
                    )}

                    {/* View Details Link */}
                    <Link
                      href={`/portfolio/${project.slug.current}`}
                      className="inline-flex items-center justify-center font-medium tracking-wider uppercase transition-colors duration-200 cursor-pointer bg-brand-green text-black hover:bg-brand-green-dark px-6 py-2.5 text-xs w-full"
                    >
                      View Full Project
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16 lg:py-20 bg-brand-gray border-y border-brand-border">
        <Container>
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-sm text-gray-500 mb-4">READY TO START YOUR PROJECT?</p>
            <h2 className="text-2xl font-medium text-white mb-4">
              Let's discuss how we can help
            </h2>
            <p className="text-gray-400 mb-8">
              Our team is ready to turn your vision into reality. Contact us to schedule a consultation.
            </p>
            <a
              href="/contacts"
              className="inline-flex items-center justify-center font-medium tracking-wider uppercase transition-colors duration-200 cursor-pointer bg-brand-green text-black hover:bg-brand-green-dark px-8 py-3 text-sm"
            >
              Get Started
            </a>
          </div>
        </Container>
      </section>

      <CTASection />
    </>
  );
}
