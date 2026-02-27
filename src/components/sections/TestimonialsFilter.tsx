"use client";

import { useState } from "react";

const testimonials = [
  {
    quote:
      "BrainySoftware delivered a rock-solid payment processing platform on time and within budget. Their deep understanding of fintech compliance requirements saved us months of rework.",
    author: "Head of Engineering",
    company: "European Fintech Company",
    industry: "Fintech",
  },
  {
    quote:
      "The low-code solution they built reduced our onboarding time by 60%. The team was proactive, communicative, and genuinely invested in our success.",
    author: "CTO",
    company: "Insurance Provider",
    industry: "Insurance",
  },
  {
    quote:
      "We needed a reliable partner for a complex EHR integration. BrainySoftware handled the entire project — from architecture to deployment — with exceptional quality.",
    author: "Head of Digital Transformation",
    company: "Healthcare Group",
    industry: "Healthcare",
  },
  {
    quote:
      "Their expertise in banking systems architecture is unmatched. The core banking platform they built handles 50,000+ daily transactions without issues. Exceptional team.",
    author: "VP of Technology",
    company: "Nordic Banking Group",
    industry: "Banking",
  },
  {
    quote:
      "BrainySoftware's CRM solution increased our customer satisfaction scores by 35% and reduced support costs significantly. Highly recommended for telecom companies.",
    author: "Operations Director",
    company: "European Telecom Operator",
    industry: "Telecom",
  },
  {
    quote:
      "The e-commerce platform they built scales beautifully. We went from managing 10K to 500K products with zero downtime. Their engineering excellence is remarkable.",
    author: "CEO",
    company: "International Retail Chain",
    industry: "Retail",
  },
  {
    quote:
      "Working with BrainySoftware was a game-changer. Their low-code approach cut our development time in half while maintaining the quality we needed.",
    author: "CTO",
    company: "FinTech Startup",
    industry: "Fintech",
  },
  {
    quote:
      "The team's understanding of healthcare compliance and FHIR standards made the entire implementation smooth. Patient data security was never a concern.",
    author: "IT Director",
    company: "Hospital Network",
    industry: "Healthcare",
  },
  {
    quote:
      "Outstanding communication, technical excellence, and delivery precision. BrainySoftware is a reliable partner for enterprise-grade solutions.",
    author: "Project Manager",
    company: "Global Financial Services",
    industry: "Banking",
  },
  {
    quote:
      "Their QA process is thorough and professional. The defect rate in production is 0.02% — the lowest among our vendors. Exceptional quality assurance.",
    author: "Quality Assurance Manager",
    company: "Insurance Conglomerate",
    industry: "Insurance",
  },
];

const industries = ["All", "Fintech", "Banking", "Healthcare", "Insurance", "Telecom", "Retail"];

export function TestimonialsFilter() {
  const [active, setActive] = useState("All");

  const filtered =
    active === "All"
      ? testimonials
      : testimonials.filter((t) => t.industry === active);

  return (
    <>
      {/* Filter tabs */}
      <div className="mb-12 flex flex-wrap gap-2">
        {industries.map((industry) => (
          <button
            key={industry}
            onClick={() => setActive(industry)}
            className={
              active === industry
                ? "px-4 py-1.5 text-xs font-medium uppercase tracking-wider bg-brand-green text-black transition-colors"
                : "px-4 py-1.5 text-xs font-medium uppercase tracking-wider border border-brand-border text-gray-600 hover:border-brand-green hover:text-brand-green transition-colors"
            }
          >
            {industry}
          </button>
        ))}
      </div>

      {/* Testimonials grid */}
      <div className="grid gap-px bg-brand-border md:grid-cols-2 lg:grid-cols-3">
        {filtered.map((t, idx) => (
          <div
            key={`${t.company}-${idx}`}
            className="group bg-brand-gray p-8 flex flex-col gap-6 hover:bg-brand-border/30 transition-colors duration-300"
          >
            <svg
              className="h-5 w-5 text-brand-green shrink-0"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>

            <p className="text-sm leading-relaxed text-gray-400 flex-1">{t.quote}</p>

            <div className="border-t border-brand-border pt-5">
              <div className="text-sm font-medium text-white">{t.author}</div>
              <div className="mt-0.5 text-xs text-gray-600">{t.company}</div>
              <div className="mt-2 inline-block px-2 py-0.5 text-xs border border-brand-border text-brand-green">
                {t.industry}
              </div>
            </div>
          </div>
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="py-16 text-center text-sm text-gray-600">
          No testimonials found for this category.
        </p>
      )}
    </>
  );
}
