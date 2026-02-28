"use client";

const services = [
  "Low-code Development",
  "Custom Software",
  "QA & Testing",
  "IT Consultancy",
  "Product Design",
  "Dedicated Teams",
];

export function HeroVisual() {
  return (
    <div className="relative w-full">
      {/* Green radial glow behind terminal */}
      <div
        className="pointer-events-none absolute inset-0 -inset-x-8 [background:radial-gradient(60%_60%_at_50%_50%,rgba(140,197,65,0.10)_0%,transparent_100%)]"
      />

      {/* Terminal window */}
      <div className="relative border border-brand-border bg-brand-gray">
        {/* Traffic-light header */}
        <div className="flex items-center gap-1.5 border-b border-brand-border px-4 py-3">
          <span className="h-2.5 w-2.5 rounded-full bg-red-500/50" />
          <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/50" />
          <span className="h-2.5 w-2.5 rounded-full bg-brand-green/50" />
          <span className="ml-3 text-xs text-gray-700">brainysoft.sh</span>
          <span className="ml-auto text-xs text-gray-700">EST. 2009</span>
        </div>

        {/* Terminal body */}
        <div className="p-6">
          <p className="text-xs">
            <span className="text-brand-green">$</span>
            <span className="text-gray-500"> brainy --mode=enterprise</span>
          </p>

          <ul className="mt-4 space-y-2.5">
            {services.map((service) => (
              <li key={service} className="flex items-center gap-3 text-xs">
                <span className="shrink-0 text-brand-green">✓</span>
                <span className="text-gray-400">{service}</span>
              </li>
            ))}
          </ul>

          <p className="mt-5 text-xs">
            <span className="text-gray-600">Status: </span>
            <span className="text-brand-green">ready_for_deployment</span>
            <span className="text-brand-green animate-blink">
              █
            </span>
          </p>
        </div>
      </div>

      {/* Stats row — attached below terminal with gap-px grid */}
      <div className="mt-px grid grid-cols-3 gap-px bg-brand-border">
        {[
          { value: "15+", label: "Years Exp." },
          { value: "100+", label: "Projects" },
          { value: "50+", label: "Clients" },
        ].map((stat) => (
          <div
            key={stat.label}
            className="bg-brand-dark px-4 py-5 text-center"
          >
            <div className="text-2xl font-medium text-brand-green">
              {stat.value}
            </div>
            <div className="mt-1 text-xs uppercase tracking-wider text-gray-600">
              {stat.label}
            </div>
          </div>
        ))}
      </div>

      {/* Decorative corner accent */}
      <div className="pointer-events-none absolute -bottom-3 -right-3 h-6 w-6 border-b border-r border-brand-green/40" />
      <div className="pointer-events-none absolute -top-3 -left-3 h-6 w-6 border-l border-t border-brand-green/40" />
    </div>
  );
}
