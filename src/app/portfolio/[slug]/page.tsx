import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/sections/PageHero";
import { CTASection } from "@/components/sections/CTASection";
import { JsonLd } from "@/components/seo/JsonLd";
import { Button } from "@/components/ui/Button";
import { getProjectBySlug, getFeaturedProjects } from "@/lib/sanity/fetchers";
import { SITE_CONFIG } from "@/lib/constants";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const projects = await getFeaturedProjects();
  return projects.map((p) => ({ slug: p.slug.current }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);
  if (!project) return {};
  return {
    title: project.title,
    description: project.description,
    alternates: { canonical: `/portfolio/${slug}` },
  };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const [project, allProjects] = await Promise.all([
    getProjectBySlug(slug),
    getFeaturedProjects(),
  ]);

  if (!project) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.title,
    description: project.description,
    creator: {
      "@type": "Organization",
      "@id": `${SITE_CONFIG.url}/#organization`,
      name: SITE_CONFIG.name,
    },
    url: `${SITE_CONFIG.url}/portfolio/${slug}`,
  };

  const otherProjects = allProjects.filter((p) => p.slug.current !== slug).slice(0, 3);

  return (
    <>
      <JsonLd data={jsonLd} />
      <PageHero
        title={project.title}
        subtitle={project.industry?.title}
      />

      <section className="py-24 lg:py-32 bg-brand-dark">
        <Container>
          <div className="grid gap-16 lg:grid-cols-3">
            {/* Main content */}
            <div className="lg:col-span-2 space-y-12">

              {/* Overview */}
              <div>
                <h2 className="text-xs font-medium uppercase tracking-wider text-brand-green mb-4">
                  Overview
                </h2>
                <p className="text-gray-400 leading-relaxed">{project.description}</p>
              </div>

              {/* Challenge */}
              {project.challenge && (
                <div>
                  <h2 className="text-xs font-medium uppercase tracking-wider text-brand-green mb-4">
                    Challenge
                  </h2>
                  <p className="text-gray-400 leading-relaxed">{project.challenge}</p>
                </div>
              )}

              {/* Solution */}
              {project.solution && (
                <div>
                  <h2 className="text-xs font-medium uppercase tracking-wider text-brand-green mb-4">
                    Solution
                  </h2>
                  <p className="text-gray-400 leading-relaxed">{project.solution}</p>
                </div>
              )}

              {/* Results */}
              {project.results && project.results.length > 0 && (
                <div>
                  <h2 className="text-xs font-medium uppercase tracking-wider text-brand-green mb-4">
                    Key Results
                  </h2>
                  <ul className="space-y-3">
                    {project.results.map((result) => (
                      <li key={result} className="flex items-start gap-3 text-sm text-gray-400">
                        <svg
                          className="mt-0.5 h-4 w-4 shrink-0 text-brand-green"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {result}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="pt-2">
                <Button href="/contacts" size="lg">
                  Start a Similar Project
                </Button>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Meta */}
              <div className="border border-brand-border p-6 space-y-5">
                {project.industry?.title && (
                  <div>
                    <span className="text-xs uppercase tracking-wider text-gray-600 block mb-1">Industry</span>
                    <span className="text-sm text-white">{project.industry.title}</span>
                  </div>
                )}
                {project.technologies && project.technologies.length > 0 && (
                  <div>
                    <span className="text-xs uppercase tracking-wider text-gray-600 block mb-2">Technologies</span>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 text-xs border border-brand-border text-gray-400"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Other projects */}
              {otherProjects.length > 0 && (
                <div className="border border-brand-border">
                  <div className="px-6 py-4 border-b border-brand-border">
                    <span className="text-xs font-medium uppercase tracking-wider text-gray-600">
                      Other Projects
                    </span>
                  </div>
                  {otherProjects.map((p) => (
                    <Link
                      key={p._id}
                      href={`/portfolio/${p.slug.current}`}
                      className="flex flex-col px-6 py-4 border-b border-brand-border last:border-b-0 hover:bg-brand-gray transition-colors group"
                    >
                      <span className="text-sm text-gray-400 group-hover:text-white transition-colors">
                        {p.title}
                      </span>
                      {p.industry?.title && (
                        <span className="text-xs text-brand-green mt-0.5">{p.industry.title}</span>
                      )}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>
        </Container>
      </section>

      <CTASection />
    </>
  );
}
