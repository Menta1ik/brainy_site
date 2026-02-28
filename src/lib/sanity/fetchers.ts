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
  BLOG_POSTS_QUERY,
  BLOG_POST_BY_SLUG_QUERY,
} from "./queries";
import type {
  SanityService,
  SanityProject,
  SanityIndustry,
  SanityHeroSection,
  SanityTeamMember,
  SanityAboutSection,
  SanitySiteSettings,
  SanityBlogPost,
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
    {
      _id: "fb-proj-6",
      title: "In-House Credit Scoring System",
      slug: { current: "credit-scoring-system" },
      description: "Advanced credit scoring and decision management system for financial services.",
      industry: { title: "Fintech" },
      technologies: ["Python", "Machine Learning", "PostgreSQL"],
      challenge: "AFG India Holdings needed to develop proprietary credit scoring algorithms to replace expensive third-party services while maintaining accuracy and regulatory compliance for the Indian financial market.",
      solution: "Built in-house credit scoring engine using Python and machine learning models trained on historical credit data. Implemented real-time decision management system with automated approval workflows and compliance audit trails.",
      results: ["Reduced credit scoring cost by 65%", "Improved approval accuracy to 94%", "Processing time reduced to 2 minutes", "Enabled 3x faster loan origination"],
    },
    {
      _id: "fb-proj-7",
      title: "Full Online Lending Automation",
      slug: { current: "online-lending-automation" },
      description: "End-to-end digital lending platform with automated underwriting and origination.",
      industry: { title: "Financial Technology" },
      technologies: ["Node.js", "React", "Machine Learning", "PostgreSQL"],
      challenge: "eny Finance AG, a Swiss fintech, needed a complete digital lending solution to automate the entire loan origination process while meeting Swiss banking regulations and international compliance standards.",
      solution: "Developed comprehensive online lending platform with automated KYC verification, AI-powered credit assessment, document management, and digital contract signing. Integrated with Swiss banking infrastructure.",
      results: ["90% reduction in processing time", "Loan origination reduced from 5 days to 4 hours", "Customer satisfaction score: 4.9/5", "Operational cost savings: 52%"],
    },
    {
      _id: "fb-proj-8",
      title: "Automated Credit Decisioning Platform",
      slug: { current: "automated-credit-decisioning" },
      description: "Enterprise credit decisioning system for banking operations.",
      industry: { title: "Banking" },
      technologies: ["Java", "Apache Kafka", "Oracle", "Machine Learning"],
      challenge: "INDEXBANK (Credit Agricole Group), Ukraine's leading bank, required an automated credit decisioning system to handle thousands of daily loan applications while maintaining regulatory compliance and decision transparency.",
      solution: "Built scalable credit decisioning platform using Java microservices and Apache Kafka for event streaming. Implemented ML-based risk models, rule engines, and comprehensive audit logging for regulatory requirements.",
      results: ["Processes 15,000+ credit applications daily", "Decision accuracy: 96.2%", "Manual review time reduced by 80%", "Regulatory compliance: 100% audit pass rate"],
    },
    {
      _id: "fb-proj-9",
      title: "Digital Loan Origination System",
      slug: { current: "digital-loan-origination" },
      description: "Modern digital loan origination platform for banking services.",
      industry: { title: "Banking" },
      technologies: ["Spring Boot", "Angular", "PostgreSQL", "AWS"],
      challenge: "Bank Republic (Société Générale Group) needed to modernize their loan origination process to compete with digital-first lenders while maintaining enterprise-grade security and regulatory compliance.",
      solution: "Developed digital loan origination platform with Spring Boot backend, Angular frontend, and AWS infrastructure. Integrated identity verification, document processing, and real-time credit decisioning.",
      results: ["Loan processing time reduced from 7 days to 24 hours", "Online applications increased to 65% of total", "Customer dropout rate reduced to 8%", "ROI achieved in 8 months"],
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
    {
      _id: "fb-proj-6",
      title: "In-House Credit Scoring System",
      slug: { current: "credit-scoring-system" },
      description: "Advanced credit scoring and decision management system for financial services.",
      industry: { title: "Fintech" },
      technologies: ["Python", "Machine Learning", "PostgreSQL"],
      challenge: "AFG India Holdings needed to develop proprietary credit scoring algorithms to replace expensive third-party services while maintaining accuracy and regulatory compliance for the Indian financial market.",
      solution: "Built in-house credit scoring engine using Python and machine learning models trained on historical credit data. Implemented real-time decision management system with automated approval workflows and compliance audit trails.",
      results: ["Reduced credit scoring cost by 65%", "Improved approval accuracy to 94%", "Processing time reduced to 2 minutes", "Enabled 3x faster loan origination"],
    },
    {
      _id: "fb-proj-7",
      title: "Full Online Lending Automation",
      slug: { current: "online-lending-automation" },
      description: "End-to-end digital lending platform with automated underwriting and origination.",
      industry: { title: "Financial Technology" },
      technologies: ["Node.js", "React", "Machine Learning", "PostgreSQL"],
      challenge: "eny Finance AG, a Swiss fintech, needed a complete digital lending solution to automate the entire loan origination process while meeting Swiss banking regulations and international compliance standards.",
      solution: "Developed comprehensive online lending platform with automated KYC verification, AI-powered credit assessment, document management, and digital contract signing. Integrated with Swiss banking infrastructure.",
      results: ["90% reduction in processing time", "Loan origination reduced from 5 days to 4 hours", "Customer satisfaction score: 4.9/5", "Operational cost savings: 52%"],
    },
    {
      _id: "fb-proj-8",
      title: "Automated Credit Decisioning Platform",
      slug: { current: "automated-credit-decisioning" },
      description: "Enterprise credit decisioning system for banking operations.",
      industry: { title: "Banking" },
      technologies: ["Java", "Apache Kafka", "Oracle", "Machine Learning"],
      challenge: "INDEXBANK (Credit Agricole Group), Ukraine's leading bank, required an automated credit decisioning system to handle thousands of daily loan applications while maintaining regulatory compliance and decision transparency.",
      solution: "Built scalable credit decisioning platform using Java microservices and Apache Kafka for event streaming. Implemented ML-based risk models, rule engines, and comprehensive audit logging for regulatory requirements.",
      results: ["Processes 15,000+ credit applications daily", "Decision accuracy: 96.2%", "Manual review time reduced by 80%", "Regulatory compliance: 100% audit pass rate"],
    },
    {
      _id: "fb-proj-9",
      title: "Digital Loan Origination System",
      slug: { current: "digital-loan-origination" },
      description: "Modern digital loan origination platform for banking services.",
      industry: { title: "Banking" },
      technologies: ["Spring Boot", "Angular", "PostgreSQL", "AWS"],
      challenge: "Bank Republic (Société Générale Group) needed to modernize their loan origination process to compete with digital-first lenders while maintaining enterprise-grade security and regulatory compliance.",
      solution: "Developed digital loan origination platform with Spring Boot backend, Angular frontend, and AWS infrastructure. Integrated identity verification, document processing, and real-time credit decisioning.",
      results: ["Loan processing time reduced from 7 days to 24 hours", "Online applications increased to 65% of total", "Customer dropout rate reduced to 8%", "ROI achieved in 8 months"],
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

const FALLBACK_BLOG_POSTS: SanityBlogPost[] = [
  { _id: "bp-1", slug: { current: "microservices-architecture-guide" }, title: "Building Scalable Systems with Microservices Architecture", excerpt: "Learn how to design and implement microservices architecture for enterprise applications. Understand the trade-offs, best practices, and common pitfalls.", category: "Architecture", readingTime: 12, publishedAt: "2026-02-20", featured: true },
  { _id: "bp-2", slug: { current: "api-design-best-practices" }, title: "RESTful API Design Best Practices", excerpt: "Explore industry best practices for designing robust, scalable REST APIs. From versioning strategies to error handling and documentation.", category: "Development", readingTime: 8, publishedAt: "2026-02-18", featured: true },
  { _id: "bp-3", slug: { current: "fintech-compliance-guide" }, title: "Compliance Requirements for Fintech Solutions", excerpt: "A comprehensive guide to compliance requirements when building fintech applications. GDPR, PCI-DSS, and regulatory considerations.", category: "Fintech", readingTime: 15, publishedAt: "2026-02-15", featured: true },
  { _id: "bp-4", slug: { current: "testing-strategies-qa" }, title: "Effective Testing Strategies for Enterprise Applications", excerpt: "Comprehensive overview of testing strategies including unit testing, integration testing, performance testing, and security testing.", category: "QA & Testing", readingTime: 14, publishedAt: "2026-02-12" },
  { _id: "bp-5", slug: { current: "cloud-migration-strategy" }, title: "Planning Your Cloud Migration Strategy", excerpt: "Step-by-step guide to planning and executing a successful cloud migration. Risk assessment, phasing, and rollback strategies.", category: "Cloud", readingTime: 16, publishedAt: "2026-02-10" },
  { _id: "bp-6", slug: { current: "low-code-platforms-enterprise" }, title: "Low-Code Platforms: Accelerating Enterprise Development", excerpt: "How low-code platforms are transforming enterprise software development. When to use them and how to maximize their benefits.", category: "Low-Code", readingTime: 10, publishedAt: "2026-02-08" },
  { _id: "bp-7", slug: { current: "database-performance-optimization" }, title: "Database Performance Optimization Techniques", excerpt: "Advanced techniques for optimizing database performance. Indexing strategies, query optimization, and scaling approaches.", category: "Database", readingTime: 13, publishedAt: "2026-02-05" },
  { _id: "bp-8", slug: { current: "security-best-practices" }, title: "Security Best Practices for Modern Applications", excerpt: "Essential security practices for building secure applications. Authentication, authorization, encryption, and vulnerability management.", category: "Security", readingTime: 17, publishedAt: "2026-02-01" },
  { _id: "bp-9", slug: { current: "devops-practices-guide" }, title: "DevOps Best Practices: CI/CD Pipelines", excerpt: "Guide to implementing effective DevOps practices. Continuous integration, continuous deployment, and infrastructure as code.", category: "DevOps", readingTime: 11, publishedAt: "2026-01-28" },
  { _id: "bp-10", slug: { current: "healthcare-compliance-hipaa" }, title: "HIPAA Compliance for Healthcare IT Solutions", excerpt: "Understanding HIPAA compliance requirements for healthcare applications. Technical implementation and audit considerations.", category: "Healthcare", readingTime: 14, publishedAt: "2026-01-25" },
  { _id: "bp-11", slug: { current: "agile-team-management" }, title: "Agile Team Management: Scaling Across Multiple Teams", excerpt: "Strategies for managing agile teams at scale. Coordination across multiple teams, dependencies, and maintaining velocity.", category: "Agile", readingTime: 12, publishedAt: "2026-01-20" },
  { _id: "bp-12", slug: { current: "digital-transformation-guide" }, title: "Guide to Digital Transformation for Enterprises", excerpt: "Comprehensive guide to planning and executing digital transformation initiatives. Technology, people, and process changes.", category: "Strategy", readingTime: 18, publishedAt: "2026-01-15" },
];

export async function getBlogPosts(): Promise<SanityBlogPost[]> {
  try {
    const data = await client.fetch<SanityBlogPost[]>(BLOG_POSTS_QUERY, {}, {
      next: { revalidate: 3600, tags: ["blogPost"] },
    });
    if (data && data.length > 0) return data;
  } catch (e) {
    console.error("Failed to fetch blog posts from Sanity:", e);
  }
  return FALLBACK_BLOG_POSTS;
}

export async function getBlogPostBySlug(slug: string): Promise<SanityBlogPost | null> {
  try {
    const data = await client.fetch<SanityBlogPost>(BLOG_POST_BY_SLUG_QUERY, { slug }, {
      next: { revalidate: 3600, tags: ["blogPost"] },
    });
    if (data) return data;
  } catch (e) {
    console.error("Failed to fetch blog post by slug:", e);
  }
  return FALLBACK_BLOG_POSTS.find((p) => p.slug.current === slug) ?? null;
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
