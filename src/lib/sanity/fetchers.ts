import { client } from "./client";
import { urlFor } from "./image";
import {
  SERVICES_QUERY,
  SERVICE_BY_SLUG_QUERY,
  FEATURED_PROJECTS_QUERY,
  PROJECT_BY_SLUG_QUERY,
  INDUSTRIES_QUERY,
  HERO_QUERY,
  CONTACT_INFO_QUERY,
  TEAM_MEMBERS_QUERY,
  ABOUT_SECTION_QUERY,
  SITE_SETTINGS_QUERY,
} from "./queries";
import type {
  SanityService,
  SanityProject,
  SanityIndustry,
  SanityHeroSection,
  SanityTeamMember,
  SanityAboutSection,
  SanitySiteSettings,
} from "./types";
import { SERVICES, INDUSTRIES } from "@/lib/constants";

export async function getServices(): Promise<SanityService[]> {
  try {
    const data = await client.fetch<SanityService[]>(SERVICES_QUERY, {}, {
      next: { revalidate: 3600, tags: ["service"] },
    });
    if (data && data.length > 0) return data;
  } catch (e) {
    console.error("Failed to fetch services from Sanity:", e);
  }
  return SERVICES.map((s, i) => ({
    _id: `fallback-service-${i}`,
    title: s.title,
    slug: { current: s.title.toLowerCase().replace(/\s+/g, "-") },
    shortDescription: s.description,
    iconName: s.icon,
    order: i,
  }));
}

export async function getServiceBySlug(slug: string): Promise<SanityService | null> {
  try {
    const data = await client.fetch<SanityService>(SERVICE_BY_SLUG_QUERY, { slug }, {
      next: { revalidate: 3600, tags: ["service"] },
    });
    if (data) return data;
  } catch (e) {
    console.error("Failed to fetch service by slug:", e);
  }
  // fallback: find in constants
  const found = SERVICES.find(
    (s) => s.title.toLowerCase().replace(/\s+/g, "-") === slug
  );
  if (!found) return null;
  const idx = SERVICES.indexOf(found as typeof SERVICES[number]);
  return {
    _id: `fallback-service-${idx}`,
    title: found.title,
    slug: { current: slug },
    shortDescription: found.description,
    iconName: found.icon,
    order: idx,
  };
}

export async function getFeaturedProjects(): Promise<SanityProject[]> {
  try {
    const data = await client.fetch<SanityProject[]>(FEATURED_PROJECTS_QUERY, {}, {
      next: { revalidate: 3600, tags: ["project"] },
    });
    if (data && data.length > 0) return data;
  } catch (e) {
    console.error("Failed to fetch projects from Sanity:", e);
  }
  return [
    {
      _id: "fb-proj-0",
      title: "Payment Processing Platform",
      slug: { current: "payment-processing-platform" },
      description: "High-load transaction processing system for a European payment provider.",
      industry: { title: "Fintech" },
      technologies: ["Java", "Kafka", "PostgreSQL"],
      challenge: "European payment provider needed to handle 50,000+ daily transactions with strict compliance requirements. Existing system bottlenecked at 5,000 transactions/hour with unpredictable latency.",
      solution: "Designed microservices architecture using Kafka for event streaming, Java Spring Boot for services, and PostgreSQL for compliance-auditable storage. Implemented real-time monitoring and automated failover.",
      results: ["Processes 50,000+ transactions/hour", "99.99% uptime SLA achieved", "Compliance audit pass rate: 100%", "ROI: 340% in first year"],
    },
    {
      _id: "fb-proj-1",
      title: "Core Banking System",
      slug: { current: "core-banking-system" },
      description: "Digital banking platform with customer management and regulatory compliance.",
      industry: { title: "Banking" },
      technologies: ["Spring Boot", "Oracle", "React"],
      challenge: "Legacy banking system couldn't support new digital channels and compliance with modern regulations. System downtime averaged 4 hours/month.",
      solution: "Built modern core banking platform with Oracle database for transactional integrity, Spring Boot microservices, and React-based customer portal. Integrated real-time analytics.",
      results: ["Zero unplanned downtime in 2 years", "Supports 500K+ daily transactions", "Customer onboarding time reduced 70%", "Compliance score: 99.8%"],
    },
    {
      _id: "fb-proj-2",
      title: "Claims Management Portal",
      slug: { current: "claims-management-portal" },
      description: "End-to-end insurance claims processing, scoring, and policy management.",
      industry: { title: "Insurance" },
      technologies: ["Node.js", "PostgreSQL", "Vue.js"],
      challenge: "Insurance company had 30-day average claims processing time with high manual overhead and error rates around 8%.",
      solution: "Developed intelligent claims portal with automated validation rules, AI-powered risk scoring, and streamlined approval workflows using Node.js backend and Vue.js frontend.",
      results: ["Processing time reduced to 5 days", "Error rate dropped to 0.3%", "Operational cost savings: 45%", "Customer satisfaction increased 58%"],
    },
    {
      _id: "fb-proj-3",
      title: "Telecom CRM",
      slug: { current: "telecom-crm" },
      description: "Customer management and billing system for a mobile operator.",
      industry: { title: "Telecom" },
      technologies: ["Python", "Django", "React"],
      challenge: "Telecom operator struggled with fragmented customer data across legacy systems, leading to poor customer experience and billing disputes.",
      solution: "Created unified CRM platform with Python Django backend for data aggregation, real-time customer view, and integrated billing engine. React frontend for customer service teams.",
      results: ["Customer churn reduced 22%", "Billing disputes down 67%", "Support resolution time improved 40%", "System handles 2M+ subscribers"],
    },
    {
      _id: "fb-proj-4",
      title: "Patient Management System",
      slug: { current: "patient-management-system" },
      description: "Hospital workflow automation with appointment scheduling and EHR integration.",
      industry: { title: "Healthcare" },
      technologies: ["Java", "FHIR", "Angular"],
      challenge: "Hospital network with 15 locations had fragmented patient records, inefficient scheduling, and compliance issues with healthcare data standards.",
      solution: "Built FHIR-compliant EHR system with Java backend, unified patient records across all locations, AI-powered appointment scheduling, and Angular web interface.",
      results: ["30% more appointments per day", "Patient wait time reduced 45%", "HIPAA compliance certified", "Staff productivity increased 35%"],
    },
    {
      _id: "fb-proj-5",
      title: "E-commerce Marketplace",
      slug: { current: "e-commerce-marketplace" },
      description: "Multi-vendor marketplace with inventory management and analytics dashboard.",
      industry: { title: "Retail" },
      technologies: ["Next.js", "Stripe", "PostgreSQL"],
      challenge: "Retail company wanted to launch marketplace platform but needed to scale from 50K to 1M+ products while maintaining performance and managing multiple vendors.",
      solution: "Built scalable marketplace using Next.js for frontend, Stripe for payments, and PostgreSQL with Redis caching. Implemented vendor dashboard and real-time inventory sync.",
      results: ["Handles 1M+ products without degradation", "Average load time: 1.2 seconds", "Vendor satisfaction: 4.8/5", "Monthly GMV: $2.5M in year 2"],
    },
  ];
}

export async function getProjectBySlug(slug: string): Promise<SanityProject | null> {
  try {
    const data = await client.fetch<SanityProject>(PROJECT_BY_SLUG_QUERY, { slug }, {
      next: { revalidate: 3600, tags: ["project"] },
    });
    if (data) return data;
  } catch (e) {
    console.error("Failed to fetch project by slug:", e);
  }
  // fallback: find in static list
  const fallback = [
    {
      _id: "fb-proj-0",
      title: "Payment Processing Platform",
      slug: { current: "payment-processing-platform" },
      description: "High-load transaction processing system for a European payment provider.",
      industry: { title: "Fintech" },
      technologies: ["Java", "Kafka", "PostgreSQL"],
      challenge: "European payment provider needed to handle 50,000+ daily transactions with strict compliance requirements. Existing system bottlenecked at 5,000 transactions/hour with unpredictable latency.",
      solution: "Designed microservices architecture using Kafka for event streaming, Java Spring Boot for services, and PostgreSQL for compliance-auditable storage. Implemented real-time monitoring and automated failover.",
      results: ["Processes 50,000+ transactions/hour", "99.99% uptime SLA achieved", "Compliance audit pass rate: 100%", "ROI: 340% in first year"],
    },
    {
      _id: "fb-proj-1",
      title: "Core Banking System",
      slug: { current: "core-banking-system" },
      description: "Digital banking platform with customer management and regulatory compliance.",
      industry: { title: "Banking" },
      technologies: ["Spring Boot", "Oracle", "React"],
      challenge: "Legacy banking system couldn't support new digital channels and compliance with modern regulations. System downtime averaged 4 hours/month.",
      solution: "Built modern core banking platform with Oracle database for transactional integrity, Spring Boot microservices, and React-based customer portal. Integrated real-time analytics.",
      results: ["Zero unplanned downtime in 2 years", "Supports 500K+ daily transactions", "Customer onboarding time reduced 70%", "Compliance score: 99.8%"],
    },
    {
      _id: "fb-proj-2",
      title: "Claims Management Portal",
      slug: { current: "claims-management-portal" },
      description: "End-to-end insurance claims processing, scoring, and policy management.",
      industry: { title: "Insurance" },
      technologies: ["Node.js", "PostgreSQL", "Vue.js"],
      challenge: "Insurance company had 30-day average claims processing time with high manual overhead and error rates around 8%.",
      solution: "Developed intelligent claims portal with automated validation rules, AI-powered risk scoring, and streamlined approval workflows using Node.js backend and Vue.js frontend.",
      results: ["Processing time reduced to 5 days", "Error rate dropped to 0.3%", "Operational cost savings: 45%", "Customer satisfaction increased 58%"],
    },
    {
      _id: "fb-proj-3",
      title: "Telecom CRM",
      slug: { current: "telecom-crm" },
      description: "Customer management and billing system for a mobile operator.",
      industry: { title: "Telecom" },
      technologies: ["Python", "Django", "React"],
      challenge: "Telecom operator struggled with fragmented customer data across legacy systems, leading to poor customer experience and billing disputes.",
      solution: "Created unified CRM platform with Python Django backend for data aggregation, real-time customer view, and integrated billing engine. React frontend for customer service teams.",
      results: ["Customer churn reduced 22%", "Billing disputes down 67%", "Support resolution time improved 40%", "System handles 2M+ subscribers"],
    },
    {
      _id: "fb-proj-4",
      title: "Patient Management System",
      slug: { current: "patient-management-system" },
      description: "Hospital workflow automation with appointment scheduling and EHR integration.",
      industry: { title: "Healthcare" },
      technologies: ["Java", "FHIR", "Angular"],
      challenge: "Hospital network with 15 locations had fragmented patient records, inefficient scheduling, and compliance issues with healthcare data standards.",
      solution: "Built FHIR-compliant EHR system with Java backend, unified patient records across all locations, AI-powered appointment scheduling, and Angular web interface.",
      results: ["30% more appointments per day", "Patient wait time reduced 45%", "HIPAA compliance certified", "Staff productivity increased 35%"],
    },
    {
      _id: "fb-proj-5",
      title: "E-commerce Marketplace",
      slug: { current: "e-commerce-marketplace" },
      description: "Multi-vendor marketplace with inventory management and analytics dashboard.",
      industry: { title: "Retail" },
      technologies: ["Next.js", "Stripe", "PostgreSQL"],
      challenge: "Retail company wanted to launch marketplace platform but needed to scale from 50K to 1M+ products while maintaining performance and managing multiple vendors.",
      solution: "Built scalable marketplace using Next.js for frontend, Stripe for payments, and PostgreSQL with Redis caching. Implemented vendor dashboard and real-time inventory sync.",
      results: ["Handles 1M+ products without degradation", "Average load time: 1.2 seconds", "Vendor satisfaction: 4.8/5", "Monthly GMV: $2.5M in year 2"],
    },
  ];
  return fallback.find((p) => p.slug.current === slug) ?? null;
}

export async function getIndustries(): Promise<SanityIndustry[]> {
  try {
    const data = await client.fetch<SanityIndustry[]>(INDUSTRIES_QUERY, {}, {
      next: { revalidate: 3600, tags: ["industry"] },
    });
    if (data && data.length > 0) return data;
  } catch (e) {
    console.error("Failed to fetch industries from Sanity:", e);
  }
  return INDUSTRIES.map((ind, i) => ({
    _id: `fallback-industry-${i}`,
    title: ind.title,
    slug: { current: ind.title.toLowerCase().replace(/[&\s]+/g, "-") },
    iconName: ind.icon,
  }));
}

export async function getHeroSection(
  page: string,
): Promise<SanityHeroSection | null> {
  try {
    const data = await client.fetch<SanityHeroSection>(HERO_QUERY, { page }, {
      next: { revalidate: 3600, tags: ["heroSection"] },
    });
    // Ignore stale Sanity content with outdated headings
    const staleHeadings = ["We can transform every digital process"];
    if (data && !staleHeadings.includes(data.heading)) return data;
  } catch (e) {
    console.error(`Failed to fetch hero for page ${page}:`, e);
  }
  return null;
}

export async function getAboutSection(): Promise<SanityAboutSection | null> {
  try {
    const data = await client.fetch<SanityAboutSection>(ABOUT_SECTION_QUERY, {}, {
      next: { revalidate: 3600, tags: ["aboutSection"] },
    });
    if (data) return data;
  } catch (e) {
    console.error("Failed to fetch about section:", e);
  }
  return null;
}

export async function getTeamMembers(): Promise<SanityTeamMember[]> {
  try {
    const data = await client.fetch<SanityTeamMember[]>(TEAM_MEMBERS_QUERY, {}, {
      next: { revalidate: 3600, tags: ["teamMember"] },
    });
    if (data && data.length > 0) return data;
  } catch (e) {
    console.error("Failed to fetch team members:", e);
  }
  return [
    {
      _id: "tm-1",
      name: "Vitaly Fatsky",
      slug: { current: "vitaly-fatsky" },
      role: "Founder & CEO",
      email: "vitaly.fatsky@brainysoft.ltd",
      yearsExperience: 15,
      specializations: ["Technology Evangelist", "Low-code Expert", "Enterprise Architecture"],
      shortBio: "Technology evangelist with 15+ years in software development. Leads BrainySoftware's vision for innovative solutions.",
    },
    {
      _id: "tm-2",
      name: "Marina Kovalenko",
      slug: { current: "marina-kovalenko" },
      role: "CTO & Lead Architect",
      email: "marina@brainysoft.biz",
      yearsExperience: 14,
      specializations: ["System Architecture", "Cloud Infrastructure", "Enterprise Solutions", "Tech Leadership"],
      shortBio: "Seasoned architect designing scalable enterprise solutions. 14 years building mission-critical systems.",
    },
    {
      _id: "tm-3",
      name: "Alexei Popov",
      slug: { current: "alexei-popov" },
      role: "Lead Developer - Backend",
      email: "alexei@brainysoft.biz",
      yearsExperience: 12,
      specializations: ["Backend Development", "Java/Spring Boot", "Microservices", "Database Design"],
      shortBio: "Expert backend engineer building high-performance systems. Passionate about clean code and scalability.",
    },
    {
      _id: "tm-4",
      name: "Sofia Bergström",
      slug: { current: "sofia-bergstrom" },
      role: "Lead Designer & UX Strategist",
      email: "sofia@brainysoft.biz",
      yearsExperience: 10,
      specializations: ["UI/UX Design", "Design Systems", "User Research", "Product Strategy"],
      shortBio: "Human-centered designer creating intuitive interfaces. Specializes in enterprise and fintech solutions.",
    },
    {
      _id: "tm-5",
      name: "Andres Nilsson",
      slug: { current: "andres-nilsson" },
      role: "QA Lead & Test Automation",
      email: "andres@brainysoft.biz",
      yearsExperience: 11,
      specializations: ["QA Strategy", "Test Automation", "CI/CD", "Performance Testing"],
      shortBio: "Quality assurance expert ensuring zero-defect delivery. 11 years testing enterprise applications.",
    },
    {
      _id: "tm-6",
      name: "Rebecca Schmidt",
      slug: { current: "rebecca-schmidt" },
      role: "Project Manager & Scrum Master",
      email: "rebecca@brainysoft.biz",
      yearsExperience: 9,
      specializations: ["Agile/Scrum", "Project Management", "Team Leadership", "Stakeholder Communication"],
      shortBio: "Agile leader coordinating successful delivery of complex projects. Dedicated to team excellence.",
    },
  ];
}

export async function getLogoUrl(): Promise<string | null> {
  try {
    const data = await client.fetch<SanitySiteSettings>(SITE_SETTINGS_QUERY, {}, {
      next: { revalidate: 3600, tags: ["siteSettings"] },
    });
    if (data?.logo) {
      return urlFor(data.logo).width(200).url();
    }
  } catch (e) {
    console.error("Failed to fetch logo from Sanity:", e);
  }
  return null;
}

export async function getContactInfo(): Promise<{
  email?: string;
  phone?: string;
  address?: string;
  workingHours?: string;
} | null> {
  try {
    const data = await client.fetch(CONTACT_INFO_QUERY, {}, {
      next: { revalidate: 3600, tags: ["contactInfo"] },
    });
    if (data) return data;
  } catch (e) {
    console.error("Failed to fetch contact info:", e);
  }
  return null;
}
