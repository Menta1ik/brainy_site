import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export function CTASection() {
  return (
    <section className="relative overflow-hidden border-t border-brand-border bg-brand-dark py-24 lg:py-32">
      {/* Dot pattern */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            "radial-gradient(circle, #8cc541 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      {/* Radial green glow — center bottom */}
      <div
        className="pointer-events-none absolute bottom-0 left-1/2 h-[400px] w-[700px] -translate-x-1/2"
        style={{
          background:
            "radial-gradient(ellipse at 50% 100%, rgba(140,197,65,0.10) 0%, transparent 60%)",
        }}
      />

      <Container className="relative text-center">
        {/* Decorative line */}
        <div className="mx-auto mb-8 h-px w-12 bg-brand-green" />

        <p className="mb-4 text-xs font-medium uppercase tracking-[0.25em] text-brand-green">
          Let&apos;s work together
        </p>

        <h2 className="text-2xl font-medium text-white sm:text-3xl lg:text-4xl">
          Ready to Transform
          <br />
          Your Business?
        </h2>

        <p className="mx-auto mt-5 max-w-lg text-sm text-gray-500">
          Let&apos;s discuss how we can help you achieve your goals with
          innovative software solutions. We typically respond within 24 hours.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Button href="/contacts" size="lg">
            Get in Touch
          </Button>
          <Button href="/services" size="lg" variant="outline">
            Explore Services
          </Button>
        </div>


      </Container>
    </section>
  );
}
