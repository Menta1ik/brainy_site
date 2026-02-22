// Sanity image source type
// eslint-disable-next-line @typescript-eslint/no-explicit-any
type SanityImageSource = Record<string, any>;

export interface SanityService {
  _id: string;
  title: string;
  slug: { current: string };
  shortDescription: string;
  icon?: SanityImageSource;
  image?: SanityImageSource;
  order: number;
  features?: string[];
}

export interface SanityProject {
  _id: string;
  title: string;
  slug: { current: string };
  description: string;
  image?: SanityImageSource;
  industry?: { title: string };
  technologies?: string[];
}

export interface SanityTeamMember {
  _id: string;
  name: string;
  slug: { current: string };
  role: string;
  bio?: unknown[];
  shortBio?: string;
  photo?: SanityImageSource;
  email?: string;
  socialLinks?: {
    linkedin?: string;
    twitter?: string;
    github?: string;
  };
  yearsExperience?: number;
  specializations?: string[];
}

export interface SanityIndustry {
  _id: string;
  title: string;
  slug: { current: string };
  description?: string;
  icon?: SanityImageSource;
}

export interface SanityHeroSection {
  heading: string;
  subheading?: string;
  backgroundImage?: SanityImageSource;
  ctaButtons?: {
    label: string;
    href: string;
    variant: "primary" | "secondary" | "outline";
  }[];
}

export interface SanitySiteSettings {
  title: string;
  description: string;
  logo?: SanityImageSource;
  logoWhite?: SanityImageSource;
  ogImage?: SanityImageSource;
  email: string;
  phone: string;
  address: {
    street: string;
    city: string;
    postalCode: string;
    country: string;
  };
  workingHours: string;
  socialLinks?: {
    twitter?: string;
    facebook?: string;
    linkedin?: string;
    instagram?: string;
  };
}
