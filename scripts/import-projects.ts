import { createClient } from "@sanity/client";
import fs from "fs";
import path from "path";

// Load env variables from .env.local
const envPath = path.join(process.cwd(), ".env.local");
const envContent = fs.readFileSync(envPath, "utf-8");
const envVars: Record<string, string> = {};
envContent.split("\n").forEach((line) => {
  const [key, ...valueParts] = line.split("=");
  if (key && valueParts.length > 0) {
    envVars[key.trim()] = valueParts.join("=").trim();
  }
});

// Apply to process.env
Object.assign(process.env, envVars);

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  useCdn: false,
  token: process.env.SANITY_API_TOKEN!,
  apiVersion: "2024-01-01",
});

interface Project {
  title: string;
  slug: { _type: string; current: string };
  description: string;
  industry: string;
  technologies: string[];
  challenge: string;
  solution: string;
  results: string[];
  order: number;
  featured: boolean;
}

// Сначала получим ID индустрий
async function getIndustryId(industryTitle: string): Promise<string | null> {
  const query = `*[_type == "industry" && title == $title][0]._id`;
  const id = await client.fetch<string>(query, { title: industryTitle });
  return id || null;
}

// Новые проекты для импорта
const projectsToImport = [
  {
    title: "In-House Credit Scoring System",
    slug: "credit-scoring-system",
    description: "Advanced credit scoring and decision management system for financial services.",
    industry: "Fintech",
    technologies: ["Python", "Machine Learning", "PostgreSQL"],
    challenge: "AFG India Holdings needed to develop proprietary credit scoring algorithms to replace expensive third-party services while maintaining accuracy and regulatory compliance for the Indian financial market.",
    solution: "Built in-house credit scoring engine using Python and machine learning models trained on historical credit data. Implemented real-time decision management system with automated approval workflows and compliance audit trails.",
    results: ["Reduced credit scoring cost by 65%", "Improved approval accuracy to 94%", "Processing time reduced to 2 minutes", "Enabled 3x faster loan origination"],
    order: 7,
    featured: true,
  },
  {
    title: "Full Online Lending Automation",
    slug: "online-lending-automation",
    description: "End-to-end digital lending platform with automated underwriting and origination.",
    industry: "Fintech",
    technologies: ["Node.js", "React", "Machine Learning", "PostgreSQL"],
    challenge: "eny Finance AG, a Swiss fintech, needed a complete digital lending solution to automate the entire loan origination process while meeting Swiss banking regulations and international compliance standards.",
    solution: "Developed comprehensive online lending platform with automated KYC verification, AI-powered credit assessment, document management, and digital contract signing. Integrated with Swiss banking infrastructure.",
    results: ["90% reduction in processing time", "Loan origination reduced from 5 days to 4 hours", "Customer satisfaction score: 4.9/5", "Operational cost savings: 52%"],
    order: 8,
    featured: true,
  },
  {
    title: "Automated Credit Decisioning Platform",
    slug: "automated-credit-decisioning",
    description: "Enterprise credit decisioning system for banking operations.",
    industry: "Banking",
    technologies: ["Java", "Apache Kafka", "Oracle", "Machine Learning"],
    challenge: "INDEXBANK (Credit Agricole Group), Ukraine's leading bank, required an automated credit decisioning system to handle thousands of daily loan applications while maintaining regulatory compliance and decision transparency.",
    solution: "Built scalable credit decisioning platform using Java microservices and Apache Kafka for event streaming. Implemented ML-based risk models, rule engines, and comprehensive audit logging for regulatory requirements.",
    results: ["Processes 15,000+ credit applications daily", "Decision accuracy: 96.2%", "Manual review time reduced by 80%", "Regulatory compliance: 100% audit pass rate"],
    order: 9,
    featured: true,
  },
  {
    title: "Digital Loan Origination System",
    slug: "digital-loan-origination",
    description: "Modern digital loan origination platform for banking services.",
    industry: "Banking",
    technologies: ["Spring Boot", "Angular", "PostgreSQL", "AWS"],
    challenge: "Bank Republic (Société Générale Group) needed to modernize their loan origination process to compete with digital-first lenders while maintaining enterprise-grade security and regulatory compliance.",
    solution: "Developed digital loan origination platform with Spring Boot backend, Angular frontend, and AWS infrastructure. Integrated identity verification, document processing, and real-time credit decisioning.",
    results: ["Loan processing time reduced from 7 days to 24 hours", "Online applications increased to 65% of total", "Customer dropout rate reduced to 8%", "ROI achieved in 8 months"],
    order: 10,
    featured: true,
  },
];

async function importProjects() {
  try {
    console.log("Starting project import...\n");

    for (const project of projectsToImport) {
      // Проверяем, существует ли уже проект
      const existing = await client.fetch<string>(`*[_type == "project" && slug.current == $slug][0]._id`, {
        slug: project.slug,
      });

      if (existing) {
        console.log(`✓ Project "${project.title}" already exists, skipping...`);
        continue;
      }

      // Получаем ID индустрии
      const industryId = await getIndustryId(project.industry);
      if (!industryId) {
        console.log(`✗ Industry "${project.industry}" not found for project "${project.title}"`);
        continue;
      }

      // Создаем документ проекта
      const doc = {
        _type: "project",
        title: project.title,
        slug: { _type: "slug", current: project.slug },
        description: project.description,
        industry: {
          _type: "reference",
          _ref: industryId,
        },
        technologies: project.technologies,
        challenge: project.challenge,
        solution: project.solution,
        results: project.results,
        order: project.order,
        featured: project.featured,
      };

      const created = (await client.create(doc)) as unknown as Project & { _id: string };
      console.log(`✓ Created project: "${created.title}" (${created._id})`);
    }

    console.log("\n✓ Import completed successfully!");
  } catch (error) {
    console.error("✗ Import failed:", error instanceof Error ? error.message : error);
    process.exit(1);
  }
}

importProjects();
