import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/sections/PageHero";
import { CTASection } from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "Blog | BrainySoftware",
  description:
    "Technical insights, best practices, and industry trends. Read our articles on software development, architecture, and digital transformation.",
  alternates: { canonical: "/blog" },
};

const blogPosts = [
  {
    id: "1",
    slug: "microservices-architecture-guide",
    title: "Building Scalable Systems with Microservices Architecture",
    excerpt:
      "Learn how to design and implement microservices architecture for enterprise applications. Understand the trade-offs, best practices, and common pitfalls.",
    category: "Architecture",
    readingTime: "12 min",
    date: "2026-02-20",
    featured: true,
  },
  {
    id: "2",
    slug: "api-design-best-practices",
    title: "RESTful API Design Best Practices",
    excerpt:
      "Explore industry best practices for designing robust, scalable REST APIs. From versioning strategies to error handling and documentation.",
    category: "Development",
    readingTime: "8 min",
    date: "2026-02-18",
    featured: true,
  },
  {
    id: "3",
    slug: "fintech-compliance-guide",
    title: "Compliance Requirements for Fintech Solutions",
    excerpt:
      "A comprehensive guide to compliance requirements when building fintech applications. GDPR, PCI-DSS, and regulatory considerations.",
    category: "Fintech",
    readingTime: "15 min",
    date: "2026-02-15",
    featured: true,
  },
  {
    id: "4",
    slug: "testing-strategies-qa",
    title: "Effective Testing Strategies for Enterprise Applications",
    excerpt:
      "Comprehensive overview of testing strategies including unit testing, integration testing, performance testing, and security testing.",
    category: "QA & Testing",
    readingTime: "14 min",
    date: "2026-02-12",
  },
  {
    id: "5",
    slug: "cloud-migration-strategy",
    title: "Planning Your Cloud Migration Strategy",
    excerpt:
      "Step-by-step guide to planning and executing a successful cloud migration. Risk assessment, phasing, and rollback strategies.",
    category: "Cloud",
    readingTime: "16 min",
    date: "2026-02-10",
  },
  {
    id: "6",
    slug: "low-code-platforms-enterprise",
    title: "Low-Code Platforms: Accelerating Enterprise Development",
    excerpt:
      "How low-code platforms are transforming enterprise software development. When to use them and how to maximize their benefits.",
    category: "Low-Code",
    readingTime: "10 min",
    date: "2026-02-08",
  },
  {
    id: "7",
    slug: "database-performance-optimization",
    title: "Database Performance Optimization Techniques",
    excerpt:
      "Advanced techniques for optimizing database performance. Indexing strategies, query optimization, and scaling approaches.",
    category: "Database",
    readingTime: "13 min",
    date: "2026-02-05",
  },
  {
    id: "8",
    slug: "security-best-practices",
    title: "Security Best Practices for Modern Applications",
    excerpt:
      "Essential security practices for building secure applications. Authentication, authorization, encryption, and vulnerability management.",
    category: "Security",
    readingTime: "17 min",
    date: "2026-02-01",
  },
  {
    id: "9",
    slug: "devops-practices-guide",
    title: "DevOps Best Practices: CI/CD Pipelines",
    excerpt:
      "Guide to implementing effective DevOps practices. Continuous integration, continuous deployment, and infrastructure as code.",
    category: "DevOps",
    readingTime: "11 min",
    date: "2026-01-28",
  },
  {
    id: "10",
    slug: "healthcare-compliance-hipaa",
    title: "HIPAA Compliance for Healthcare IT Solutions",
    excerpt:
      "Understanding HIPAA compliance requirements for healthcare applications. Technical implementation and audit considerations.",
    category: "Healthcare",
    readingTime: "14 min",
    date: "2026-01-25",
  },
  {
    id: "11",
    slug: "agile-team-management",
    title: "Agile Team Management: Scaling Across Multiple Teams",
    excerpt:
      "Strategies for managing agile teams at scale. Coordination across multiple teams, dependencies, and maintaining velocity.",
    category: "Agile",
    readingTime: "12 min",
    date: "2026-01-20",
  },
  {
    id: "12",
    slug: "digital-transformation-guide",
    title: "Guide to Digital Transformation for Enterprises",
    excerpt:
      "Comprehensive guide to planning and executing digital transformation initiatives. Technology, people, and process changes.",
    category: "Strategy",
    readingTime: "18 min",
    date: "2026-01-15",
  },
];

const categories = [...new Set(blogPosts.map((post) => post.category))];

export default function BlogPage() {
  const featuredPosts = blogPosts.filter((post) => post.featured);
  const regularPosts = blogPosts.filter((post) => !post.featured);

  return (
    <>
      <PageHero
        title="Blog & Resources"
        subtitle="Technical insights, best practices, and industry trends"
      />

      {/* Featured Posts */}
      <section className="py-24 lg:py-32 bg-brand-dark">
        <Container>
          <div className="mb-12">
            <h2 className="text-2xl font-medium text-white mb-2">Featured Articles</h2>
            <div className="h-px w-12 bg-brand-green" />
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {featuredPosts.map((post) => (
              <article
                key={post.id}
                className="group bg-brand-gray border border-brand-border hover:border-brand-green transition-all"
              >
                <div className="p-8 flex flex-col h-full">
                  <div className="mb-4">
                    <span className="text-xs uppercase tracking-wider font-medium text-brand-green">
                      {post.category}
                    </span>
                  </div>

                  <h3 className="text-lg font-medium text-white mb-3 group-hover:text-brand-green transition-colors line-clamp-3">
                    {post.title}
                  </h3>

                  <p className="text-sm text-gray-500 mb-6 flex-1 line-clamp-3">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between pt-6 border-t border-brand-border">
                    <span className="text-xs text-gray-600">
                      {post.readingTime} read
                    </span>
                    <span className="text-xs text-gray-600">
                      {new Date(post.date).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      })}
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      {/* All Articles */}
      <section className="py-24 lg:py-32 bg-brand-gray border-y border-brand-border">
        <Container>
          <div className="mb-12">
            <h2 className="text-2xl font-medium text-white mb-2">All Articles</h2>
            <div className="h-px w-12 bg-brand-green" />
          </div>

          {/* Categories */}
          <div className="mb-12 flex flex-wrap gap-3">
            <button className="px-4 py-2 text-sm font-medium bg-brand-green text-black hover:bg-brand-green-dark transition-colors">
              All
            </button>
            {categories.map((category) => (
              <button
                key={category}
                className="px-4 py-2 text-sm font-medium border border-brand-border text-gray-400 hover:text-white hover:border-brand-green transition-colors"
              >
                {category}
              </button>
            ))}
          </div>

          {/* Articles Grid */}
          <div className="space-y-4">
            {regularPosts.map((post) => (
              <article
                key={post.id}
                className="group bg-brand-dark border border-brand-border hover:border-brand-green transition-all p-6 flex items-start justify-between"
              >
                <div className="flex-1">
                  <div className="mb-3 flex items-center gap-3">
                    <span className="text-xs uppercase tracking-wider font-medium text-brand-green">
                      {post.category}
                    </span>
                    <span className="text-xs text-gray-600">•</span>
                    <span className="text-xs text-gray-600">
                      {post.readingTime} read
                    </span>
                  </div>

                  <h3 className="text-lg font-medium text-white group-hover:text-brand-green transition-colors mb-2">
                    {post.title}
                  </h3>

                  <p className="text-sm text-gray-500 max-w-2xl">
                    {post.excerpt}
                  </p>
                </div>

                <span className="text-xs text-gray-600 shrink-0 ml-4">
                  {new Date(post.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                  })}
                </span>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <CTASection />
    </>
  );
}
