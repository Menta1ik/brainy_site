import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/sections/PageHero";
import { CTASection } from "@/components/sections/CTASection";
import { getBlogPosts } from "@/lib/sanity/fetchers";

export const metadata: Metadata = {
  title: "Blog | BrainySoftware",
  description:
    "Technical insights, best practices, and industry trends. Read our articles on software development, architecture, and digital transformation.",
  alternates: { canonical: "/blog" },
};

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

export default async function BlogPage() {
  const posts = await getBlogPosts();
  const featuredPosts = posts.filter((p) => p.featured);
  const regularPosts = posts.filter((p) => !p.featured);
  const categories = [...new Set(posts.map((p) => p.category))];

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
              <Link
                key={post._id}
                href={`/blog/${post.slug.current}`}
                className="group bg-brand-gray border border-brand-border hover:border-brand-green transition-colors"
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
                      {post.readingTime} min read
                    </span>
                    <span className="text-xs text-gray-600">
                      {formatDate(post.publishedAt)}
                    </span>
                  </div>
                </div>
              </Link>
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
            <span className="px-4 py-2 text-sm font-medium bg-brand-green text-black">
              All
            </span>
            {categories.map((category) => (
              <span
                key={category}
                className="px-4 py-2 text-sm font-medium border border-brand-border text-gray-400"
              >
                {category}
              </span>
            ))}
          </div>

          {/* Articles list */}
          <div className="space-y-4">
            {regularPosts.map((post) => (
              <Link
                key={post._id}
                href={`/blog/${post.slug.current}`}
                className="group bg-brand-dark border border-brand-border hover:border-brand-green transition-colors p-6 flex items-start justify-between"
              >
                <div className="flex-1">
                  <div className="mb-3 flex items-center gap-3">
                    <span className="text-xs uppercase tracking-wider font-medium text-brand-green">
                      {post.category}
                    </span>
                    <span className="text-xs text-gray-600">•</span>
                    <span className="text-xs text-gray-600">
                      {post.readingTime} min read
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
                  {formatDate(post.publishedAt)}
                </span>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <CTASection />
    </>
  );
}
