import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export function CTASection() {
  return (
    <section className="border-t border-brand-border bg-brand-dark py-24 lg:py-32">
      <Container className="text-center">
        <div className="mx-auto h-px w-12 bg-brand-green mb-8" />
        <h2 className="text-2xl font-medium text-white sm:text-3xl">
          Ready to Transform Your Business?
        </h2>
        <p className="mx-auto mt-4 max-w-lg text-sm text-gray-500">
          Let&apos;s discuss how we can help you achieve your goals with
          innovative software solutions.
        </p>
        <Button href="/contacts" size="lg" className="mt-10">
          Get in Touch
        </Button>
      </Container>
    </section>
  );
}
