export const SITE_CONFIG = {
  name: "BrainySoftware",
  url: "https://brainysoft.biz",
  description:
    "Custom software development company with 15+ years of experience in Tallinn, Estonia. We specialize in web development, mobile apps, low-code platforms, and IT consultancy.",
  email: "info@brainysoft.biz",
  phone: "+372 699 14 26",
  address: {
    street: "Roseni tn 13",
    city: "Tallinn",
    postalCode: "10111",
    country: "Estonia",
    countryCode: "EE",
  },
  workingHours: "Mon - Sat: 10:00 AM - 5:00 PM",
  foundingYear: 2009,
  social: {
    linkedin: "https://linkedin.com/company/brainysoft",
    facebook: "https://facebook.com/brainysoft",
    twitter: "https://twitter.com/brainysoft",
  },
} as const;

export const NAV_ITEMS = [
{ label: "Why Choose Us", href: "/company/why-choose-us" },
  { label: "Services", href: "/services" },
  { label: "Contacts", href: "/contacts" },
] as const;

export const SERVICES = [
  {
    title: "Low-code Development",
    description:
      "Accelerate application delivery with low-code platforms. We reduce development complexity so companies of any size can increase productivity and speed to market.",
    icon: "globe",
  },
  {
    title: "Custom Software",
    description:
      "End-to-end development of scalable, enterprise-grade software solutions. From architecture design to deployment and long-term support.",
    icon: "smartphone",
  },
  {
    title: "QA & Testing",
    description:
      "Comprehensive multi-stage testing, automated test pipelines, and independent software auditing to ensure reliability before every release.",
    icon: "check-circle",
  },
  {
    title: "IT Consultancy",
    description:
      "Technology strategy, workflow optimization, and digital transformation consulting. We help you modernize infrastructure and consolidate application portfolios.",
    icon: "lightbulb",
  },
  {
    title: "Product Design",
    description:
      "User-centered UI/UX design backed by research and usability testing. We create intuitive interfaces that drive engagement and conversion.",
    icon: "palette",
  },
  {
    title: "Dedicated Teams",
    description:
      "Build your remote development team tailored to your project requirements. Skilled professionals managed and motivated by our proven processes.",
    icon: "users",
  },
] as const;

export const INDUSTRIES = [
  { title: "Fintech", icon: "trending-up" },
  { title: "Telecom", icon: "radio" },
  { title: "Banking", icon: "building" },
  { title: "Healthcare", icon: "heart" },
  { title: "Insurance", icon: "shield" },
  { title: "Retail & E-commerce", icon: "shopping-cart" },
] as const;
