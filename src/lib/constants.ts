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
  { label: "Home", href: "/" },
  {
    label: "Company",
    href: "#",
    children: [
      { label: "Why Choose Us", href: "/company/why-choose-us" },
      { label: "Our Team", href: "/company/team" },
    ],
  },
  { label: "Services", href: "/services" },
  { label: "Contacts", href: "/contacts" },
] as const;

export const SERVICES = [
  {
    title: "Web Development",
    description:
      "We carry more than just good coding skills. Our experience makes us stand out from other web development companies.",
    icon: "globe",
  },
  {
    title: "Mobile Development",
    description:
      "Create complex enterprise software, ensure reliable software integration, modernise your legacy system.",
    icon: "smartphone",
  },
  {
    title: "QA & Testing",
    description:
      "Turn to our experts to perform comprehensive, multi-stage testing and auditing of your software.",
    icon: "check-circle",
  },
  {
    title: "IT Consultancy",
    description:
      "Trust our top minds to eliminate workflow pain points, implement new tech, and consolidate app portfolios.",
    icon: "lightbulb",
  },
  {
    title: "UI/UX Design",
    description:
      "Build the product you need on time with an experienced team that uses a clear and effective design process.",
    icon: "palette",
  },
  {
    title: "Dedicated Team",
    description:
      "Over the past decade, our customers succeeded by leveraging our process of building and motivating skilled professionals.",
    icon: "users",
  },
] as const;

export const INDUSTRIES = [
  { title: "Fintech", icon: "trending-up" },
  { title: "Telecom", icon: "radio" },
  { title: "Banking", icon: "building" },
  { title: "Healthcare", icon: "heart" },
  { title: "Insurance", icon: "shield" },
  { title: "Retail", icon: "shopping-cart" },
] as const;
