import { Button } from "@/components/ui/Button";
import { HeroVisual } from "./HeroVisual";
import type { SanityHeroSection } from "@/lib/sanity/types";

interface HeroSectionProps {
  data?: SanityHeroSection | null;
}

export function HeroSection({ data }: HeroSectionProps) {
  const tagline = data?.tagline ?? "Software Development · Est. 2009";
  const heading = data?.heading ?? "We Build Software\nThat Runs Business";
  const subheading =
    data?.subheading ??
    "BrainySoftware is a custom software development company based in Tallinn, Estonia. For over 15 years we deliver scalable solutions for fintech, banking, telecom, healthcare, and insurance sectors.";
  const buttons = data?.ctaButtons ?? [
    { label: "Our Services", href: "/services", variant: "primary" as const },
    { label: "Contact Us", href: "/contacts", variant: "outline" as const },
  ];

  const headingLines = heading.split("\n");

  return (
    <section className="relative min-h-[90vh] flex items-center bg-brand-dark overflow-hidden">
      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            "linear-gradient(#8cc541 1px, transparent 1px), linear-gradient(90deg, #8cc541 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Accent glow — left side */}
      <div
        className="pointer-events-none absolute -left-64 top-1/2 h-[600px] w-[600px] -translate-y-1/2 rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(140,197,65,0.05) 0%, transparent 70%)",
        }}
      />

      <div className="relative mx-auto w-full max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* ── Left: copy ── */}
          <div>
            <div className="mb-6 h-px w-12 bg-brand-green" />
            <p className="mb-6 text-xs font-medium uppercase tracking-[0.3em] text-brand-green">
              {tagline}
            </p>
            <h1 className="text-4xl font-medium leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
              {headingLines.map((line, i) => (
                <span key={i}>
                  {i > 0 && <br />}
                  {line}
                </span>
              ))}
            </h1>
            <p className="mt-8 max-w-xl text-sm leading-relaxed text-gray-500">
              {subheading}
            </p>
            <div className="mt-12 flex flex-wrap gap-4">
              {buttons.map((btn) => (
                <Button
                  key={btn.href}
                  href={btn.href}
                  variant={btn.variant === "primary" ? "primary" : "outline"}
                  size="lg"
                >
                  {btn.label}
                </Button>
              ))}
            </div>

            {/* Trust strip */}
            <div className="mt-12 flex flex-wrap items-center gap-x-6 gap-y-2 border-t border-brand-border pt-8">
              <span className="text-xs text-gray-700">Trusted in:</span>
              {["Fintech", "Banking", "Telecom", "Healthcare", "Insurance"].map(
                (sector) => (
                  <span
                    key={sector}
                    className="text-xs uppercase tracking-wider text-gray-600"
                  >
                    {sector}
                  </span>
                )
              )}
            </div>
          </div>

          {/* ── Right: visual terminal ── */}
          <div className="hidden lg:flex items-center justify-center pl-8">
            <HeroVisual />
          </div>
        </div>
      </div>

      {/* Bottom border */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-brand-border" />
    </section>
  );
}
