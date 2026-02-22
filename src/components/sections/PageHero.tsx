import { Container } from "@/components/ui/Container";

interface PageHeroProps {
  title: string;
  subtitle?: string;
}

export function PageHero({ title, subtitle }: PageHeroProps) {
  return (
    <section className="border-b border-brand-border bg-brand-dark py-24 lg:py-28">
      <Container>
        <div className="h-px w-12 bg-brand-green mb-6" />
        <h1 className="text-2xl font-medium tracking-tight text-white sm:text-3xl lg:text-4xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-4 max-w-xl text-sm text-gray-500">
            {subtitle}
          </p>
        )}
      </Container>
    </section>
  );
}
