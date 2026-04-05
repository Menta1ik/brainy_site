import { Button } from "@/components/ui/Button";
import { HeroVisual } from "./HeroVisual";
import type { SanityHeroSection } from "@/lib/sanity/types";

interface HeroSectionProps {
  data?: SanityHeroSection | null;
}

export function HeroSection({ data }: HeroSectionProps) {
  const tagline = data?.tagline ?? "LOW-CODE • HIGH-LEVEL DIGITAL PRODUCTS";
  const heading = data?.heading ?? "We build high-level digital products\non our NextGen low-code platform";
  const subheading =
    data?.subheading ??
    "BrainySoftware designs and delivers advanced applications on our own NextGen low-code platform.";
  const buttons = data?.ctaButtons ?? [
    { label: "Our Services", href: "/services", variant: "primary" as const },
    { label: "Contact Us", href: "/contacts", variant: "outline" as const },
  ];

  // Split heading by newline if present to maintain 2-line layout control
  const headingLines = heading.split('\n');
  const highlightText = "NextGen low-code";

  return (
    <section className="relative min-h-[95vh] flex items-center justify-center bg-brand-dark overflow-hidden">
      {/* ... (background effects unchanged) ... */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(to right, #1e1e2e 1px, transparent 1px),
            linear-gradient(to bottom, #1e1e2e 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px'
        }}
      />
      <div className="absolute inset-0 opacity-30">
        <div className="absolute left-[10%] top-0 h-full w-[1px] bg-gradient-to-b from-transparent via-brand-green to-transparent animate-[float_3s_ease-in-out_infinite]" />
        <div className="absolute left-[30%] top-0 h-full w-[1px] bg-gradient-to-b from-transparent via-brand-blue to-transparent animate-[float_5s_ease-in-out_infinite_1s]" />
        <div className="absolute right-[20%] top-0 h-full w-[1px] bg-gradient-to-b from-transparent via-brand-green to-transparent animate-[float_4s_ease-in-out_infinite_0.5s]" />
        <div className="absolute right-[40%] top-0 h-full w-[1px] bg-gradient-to-b from-transparent via-brand-blue to-transparent animate-[float_6s_ease-in-out_infinite_2s]" />
      </div>
      <div className="absolute inset-0 pointer-events-none">
        <div className="h-px w-full bg-gradient-to-r from-transparent via-brand-green/50 to-transparent animate-scan opacity-20" />
      </div>
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="h-[600px] w-[600px] rounded-full bg-brand-green/5 blur-[100px]" />
      </div>

      <div className="relative mx-auto w-full max-w-[1800px] px-6 py-24 lg:px-8 lg:py-32 text-center z-10">
        {/* Tagline */}
        <div className="mb-10 flex flex-col items-center">
          <div className="mb-4 h-px w-12 bg-brand-green/50" />
          <p className="text-[10px] sm:text-xs font-medium uppercase tracking-[0.4em] text-brand-green">
            {tagline}
          </p>
        </div>

        {/* Heading */}
        <h1 className="mx-auto max-w-7xl text-3xl font-medium leading-[1.1] tracking-normal text-white sm:text-4xl lg:text-5xl xl:text-6xl text-balance" style={{ wordSpacing: '-0.3em' }}>
          {headingLines.map((line, i) => {
            const hasHighlight = line.includes(highlightText);
            if (hasHighlight) {
              const [before, after] = line.split(highlightText);
              return (
                <span key={i} className="block mt-2">
                  {before}
                  <span className="bg-gradient-to-r from-brand-green via-brand-green to-brand-blue bg-clip-text text-transparent">
                    {highlightText}
                  </span>
                  {after}
                </span>
              );
            }
            return (
              <span key={i} className="block mb-2">
                {line}
              </span>
            );
          })}
        </h1>

        {/* Subheading */}
        <p className="mt-10 mx-auto max-w-[1600px] text-base lg:text-[18px] leading-relaxed text-muted-foreground/80 font-light tracking-tight" style={{ wordSpacing: '-0.02em' }}>
          {subheading}
        </p>

        {/* CTA Buttons */}
        <div className="mt-12 flex flex-wrap justify-center gap-6">
          {buttons.map((btn) => (
            <Button
              key={btn.href}
              href={btn.href}
              variant={btn.variant === "primary" ? "primary" : "outline"}
              size="lg"
              className="min-w-[180px] h-14"
            >
              {btn.label}
            </Button>
          ))}
        </div>

        {/* Expertise Strip */}
        <div className="mt-24 flex flex-col items-center gap-6">
          <div className="h-px w-full max-w-xs bg-gradient-to-r from-transparent via-brand-border to-transparent" />
          <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-4">
            <span className="text-[10px] uppercase tracking-widest text-muted-foreground/80">Expertise in:</span>
            {[
              "Marketplaces",
              "Education",
              "Healthcare",
              "Government",
              "Fintech",
              "Telecom",
            ].map((sector) => (
              <span
                key={sector}
                className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground/80 hover:text-brand-green transition-colors cursor-default"
              >
                {sector}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom accent line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-border to-transparent" />
    </section>
  );
}
