import { client } from "./client";
import { urlFor } from "./image";
import {
  SERVICES_QUERY,
  FEATURED_PROJECTS_QUERY,
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
    const data = await client.fetch<SanityService[]>(SERVICES_QUERY);
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

export async function getFeaturedProjects(): Promise<SanityProject[]> {
  try {
    const data = await client.fetch<SanityProject[]>(FEATURED_PROJECTS_QUERY);
    if (data && data.length > 0) return data;
  } catch (e) {
    console.error("Failed to fetch projects from Sanity:", e);
  }
  return [
    { _id: "fb-proj-0", title: "Payment Processing Platform", slug: { current: "payment-processing-platform" }, description: "High-load transaction processing system for a European payment provider.", industry: { title: "Fintech" } },
    { _id: "fb-proj-1", title: "Core Banking System", slug: { current: "core-banking-system" }, description: "Digital banking platform with customer management and regulatory compliance.", industry: { title: "Banking" } },
    { _id: "fb-proj-2", title: "Claims Management Portal", slug: { current: "claims-management-portal" }, description: "End-to-end insurance claims processing, scoring, and policy management.", industry: { title: "Insurance" } },
    { _id: "fb-proj-3", title: "Telecom CRM", slug: { current: "telecom-crm" }, description: "Customer management and billing system for a mobile operator.", industry: { title: "Telecom" } },
    { _id: "fb-proj-4", title: "Patient Management System", slug: { current: "patient-management-system" }, description: "Hospital workflow automation with appointment scheduling and EHR integration.", industry: { title: "Healthcare" } },
    { _id: "fb-proj-5", title: "E-commerce Marketplace", slug: { current: "e-commerce-marketplace" }, description: "Multi-vendor marketplace with inventory management and analytics dashboard.", industry: { title: "Retail" } },
  ];
}

export async function getIndustries(): Promise<SanityIndustry[]> {
  try {
    const data = await client.fetch<SanityIndustry[]>(INDUSTRIES_QUERY);
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
    const data = await client.fetch<SanityHeroSection>(HERO_QUERY, { page });
    if (data) return data;
  } catch (e) {
    console.error(`Failed to fetch hero for page ${page}:`, e);
  }
  return null;
}

export async function getAboutSection(): Promise<SanityAboutSection | null> {
  try {
    const data = await client.fetch<SanityAboutSection>(ABOUT_SECTION_QUERY);
    if (data) return data;
  } catch (e) {
    console.error("Failed to fetch about section:", e);
  }
  return null;
}

export async function getTeamMembers(): Promise<SanityTeamMember[]> {
  try {
    const data = await client.fetch<SanityTeamMember[]>(TEAM_MEMBERS_QUERY);
    if (data && data.length > 0) return data;
  } catch (e) {
    console.error("Failed to fetch team members:", e);
  }
  return [];
}

export async function getLogoUrl(): Promise<string | null> {
  try {
    const data = await client.fetch<SanitySiteSettings>(SITE_SETTINGS_QUERY);
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
    const data = await client.fetch(CONTACT_INFO_QUERY);
    if (data) return data;
  } catch (e) {
    console.error("Failed to fetch contact info:", e);
  }
  return null;
}
