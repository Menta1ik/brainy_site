import { Button } from "@/components/ui/Button";

export function HeroSection() {
  return (
    <section className="relative flex min-h-[90vh] items-center bg-brand-dark overflow-hidden">
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: "linear-gradient(#8cc541 1px, transparent 1px), linear-gradient(90deg, #8cc541 1px, transparent 1px)",
        backgroundSize: "60px 60px"
      }} />

      <div className="relative mx-auto max-w-7xl px-6 py-32 lg:px-8">
        <div className="max-w-3xl">
          <div className="mb-6 h-px w-12 bg-brand-green" />
          <p className="mb-6 text-xs font-medium uppercase tracking-[0.3em] text-brand-green">
            Custom Software Development
          </p>
          <h1 className="text-4xl font-medium leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
            We Can Transform
            <br />
            Every Digital Process
          </h1>
          <p className="mt-8 max-w-xl text-sm leading-relaxed text-gray-500">
            We transform businesses of most major sectors with powerful and
            adaptable digital solutions that satisfy the needs of today.
          </p>
          <div className="mt-12 flex flex-wrap gap-4">
            <Button href="/services" size="lg">
              Our Services
            </Button>
            <Button href="/contacts" variant="outline" size="lg">
              Contact Us
            </Button>
          </div>
        </div>
      </div>

      {/* Bottom border */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-brand-border" />
    </section>
  );
}
