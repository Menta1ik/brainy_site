"use client";

import { Container } from "@/components/ui/Container";

const TECH_LOGOS = [
  {
    name: "Next.js",
    svg: (
      <svg viewBox="0 0 180 180" fill="currentColor" className="h-10 w-auto">
        <mask id="mask0_408_134" maskUnits="userSpaceOnUse" x="0" y="0" width="180" height="180">
          <circle cx="90" cy="90" r="90" fill="black" />
        </mask>
        <g mask="url(#mask0_408_134)">
          <circle cx="90" cy="90" r="90" fill="currentColor" fillOpacity="0.1" />
          <path d="M149.508 157.52L69.142 54H54V125.97H66.1136V69.3836L139.999 164.845C143.333 162.614 146.509 160.165 149.508 157.52Z" fill="currentColor" />
          <path d="M115.243 54V125.97H127.357V54H115.243Z" fill="currentColor" />
        </g>
      </svg>
    ),
    color: "hover:text-white"
  },
  {
    name: "React",
    svg: (
      <svg viewBox="-11.5 -10.23174 23 20.46348" fill="currentColor" className="h-11 w-auto">
        <circle cx="0" cy="0" r="2.05" />
        <g stroke="currentColor" strokeWidth="1" fill="none">
          <ellipse rx="11" ry="4.2" />
          <ellipse rx="11" ry="4.2" transform="rotate(60)" />
          <ellipse rx="11" ry="4.2" transform="rotate(120)" />
        </g>
      </svg>
    ),
    color: "hover:text-[#61DAFB]"
  },
  {
    name: "Tailwind CSS",
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-10 w-auto">
        <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z" />
      </svg>
    ),
    color: "hover:text-[#38B2AC]"
  },
  {
    name: "TypeScript",
    svg: (
      <svg viewBox="0 0 128 128" fill="currentColor" className="h-9 w-auto">
        <path d="M1.503 1.503h124.994v124.994h-124.994z" fill="none" />
        <path d="M0 0v128h128v-128h-128zm114.28 100.28c-1.65 9.17-10.33 15.42-21.73 15.42-12.08 0-20.52-6-23.73-15.68l9.88-5.75c2 6.08 6.55 9.87 13.08 9.87 6.45 0 11.23-3.22 11.23-8.87 0-6.17-5.07-8.32-13.68-12-10-4.32-23.33-9.1-23.33-24.87 0-13.58 10.33-23 25-23 12.18 0 21.05 5.57 24.15 14.47l-9.42 6.13c-2.3-5.22-6.53-8.13-13.35-8.13-6 0-12 2.72-12 8.37 0 5.37 4 7.6 12.75 11.4 11.2 4.88 23.95 9.57 23.95 24.93 0 2.22-.38 4.63-2.53 7.71zm-50.68-6.13h-12.43V40.75h-25.32v-10h63.22v10H63.6v53.4z" />
      </svg>
    ),
    color: "hover:text-[#3178C6]"
  },
  {
    name: "Sanity",
    svg: (
      <svg viewBox="0 0 100 100" fill="currentColor" className="h-10 w-auto">
        <path d="M50 0C22.4 0 0 22.4 0 50s22.4 50 50 50 50-22.4 50-50S77.6 0 50 0zm24.3 33.6c-4.4 0-7.9 3.5-7.9 7.9s3.5 7.9 7.9 7.9 7.9-3.5 7.9-7.9-3.5-7.9-7.9-7.9zm-24.3 22.1c-12.2 0-22.1-9.9-22.1-22.1s9.9-22.1 22.1-22.1 22.1 9.9 22.1 22.1-9.9 22.1-22.1 22.1zm-32.9.1c-4.4 0-7.9 3.5-7.9 7.9s3.5 7.9 7.9 7.9 7.9-3.5 7.9-7.9-3.5-7.9-7.9-7.9z" />
      </svg>
    ),
    color: "hover:text-[#F03E2F]"
  },
  {
    name: "PostgreSQL",
    svg: (
      <svg viewBox="0 0 512 512" fill="currentColor" className="h-11 w-auto">
        <path d="M198 1.1s-7 1.1-10.7 4.3c-2.3 2-6.5 6.4-8 12.3-1.6 6.3-1.2 12.3-.9 14.5.3 2 1.6 4.3 2.5 5.9 1 1.7 4.3 6.9 8.2 10.3 3.9 3.4 8.1 4.7 13.9 4.7h13.1c1.5 0 2.7-1.2 2.7-2.7V42.6c0-1.5-1.2-2.7-2.7-2.7H204c-4.4 0-8.6-.7-12.7-2.2-4.1-1.5-8.1-4-11.1-7.1-3.1-3.1-5.4-6.8-6.8-10.8-1.5-4-2.2-8.4-2.2-12.7 0-1.5-1.2-2.7-2.7-2.7h-3.4c-1.5 0-2.7 1.2-2.7 2.7 0 5.4.8 10.8 2.5 15.9.8 2.4 1.8 4.8 3.1 7 1.3 2.4 2.8 4.7 4.6 6.9 1.7 2.2 3.8 4.3 6.1 6.3l-2.4 2.4c-1.1 1.1-1.1 2.8 0 3.8 1.1 1.1 2.8 1.1 3.8 0l2.4-2.4c2 2.3 4.1 4.3 6.3 6.1 2.2 1.8 4.5 3.4 7 4.7 2.4 1.3 4.8 2.3 7.3 3.1 5.1 1.7 10.5 2.5 15.9 2.5h1.1c1.5 0 2.7-1.2 2.7-2.7V61.1c0-1.5-1.2-2.7-2.7-2.7H207c-5.4 0-10.8-.8-15.9-2.5-2.4-.8-4.8-1.8-7-3.1-2.4-1.3-4.7-2.8-6.9-4.6-2.2-1.7-4.3-3.8-6.3-6.1l2.4-2.4c1.1-1.1 1.1-2.8 0-3.8-1.1-1.1-2.8-1.1-3.8 0l-2.4 2.4c-2.3-2-4.3-4.1-6.1-6.3-1.8-2.2-3.4-4.5-4.7-7-1.3-2.4-2.3-4.8-3.1-7.3-1.7-5.1-2.5-10.5-2.5-15.9 0-1.5-1.2-2.7-2.7-2.7h-1.1c-1.5 0-2.7 1.2-2.7 2.7 0 4.3.7 8.6 2.2 12.7 1.5 4.1 3.8 7.8 6.8 10.8 3.1 3.2 6.8 5.6 10.9 7.2 4 1.5 8.3 2.2 12.7 2.2h12.5c1.5 0 2.7-1.2 2.7-2.7v-1.1c0-1.5-1.2-2.7-2.7-2.7h-4.3l-8.2-10.3c-.3-.5-.4-1.1-.4-1.7.1-.6.3-1.2.7-1.6l10.7-10.7c.4-.4.8-.6 1.3-.8.5-.1 1.1-.1 1.6.1L211 18c3-.3 6.1-.5 9.1-.5h13.2c1.5 0 2.7-1.2 2.7-2.7V6" />
      </svg>
    ),
    color: "hover:text-[#336791]"
  }
];

export function TechStackSection() {
  return (
    <section className="bg-brand-dark py-16 border-b border-brand-border overflow-hidden">
      <Container>
        {/* Subtitle Label */}
        <div className="mb-12 flex flex-col items-center">
          <p className="text-[10px] font-medium uppercase tracking-[0.5em] text-muted-foreground/80">
            Enterprise Grade Innovation Hub
          </p>
        </div>

        {/* Marquee Wrapper */}
        <div className="relative flex overflow-x-hidden group">
          <div className="animate-marquee flex whitespace-nowrap py-4 items-center">
            {/* Extended list for smooth loop - 4 sets for high density at larger sizes */}
            {[...TECH_LOGOS, ...TECH_LOGOS, ...TECH_LOGOS, ...TECH_LOGOS].map((tech, idx) => (
              <div
                key={idx}
                className={`mx-16 flex items-center justify-center transition-opacity transition-transform duration-500 transform grayscale opacity-40 hover:grayscale-0 hover:opacity-100 hover:scale-125 text-muted-foreground/80 ${tech.color}`}
                title={tech.name}
              >
                {tech.svg}
              </div>
            ))}
          </div>
        </div>
      </Container>

      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-25%); }
        }
        .animate-marquee {
          animation: marquee 40s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
