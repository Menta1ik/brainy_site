import { createClient } from "@sanity/client";
import { readFileSync } from "fs";
import { resolve } from "path";

// Load .env.local manually to avoid dotenv dependency
const envPath = resolve(__dirname, "../.env.local");
const envContent = readFileSync(envPath, "utf-8");
for (const line of envContent.split("\n")) {
  const trimmed = line.trim();
  if (!trimmed || trimmed.startsWith("#")) continue;
  const eqIdx = trimmed.indexOf("=");
  if (eqIdx === -1) continue;
  const key = trimmed.slice(0, eqIdx);
  const value = trimmed.slice(eqIdx + 1);
  if (!process.env[key]) process.env[key] = value;
}

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  token: process.env.SANITY_API_TOKEN!,
  apiVersion: "2024-01-01",
  useCdn: false,
});

async function seed() {
  console.log("Seeding Sanity...\n");

  // 1. Industries
  const industriesData = [
    { title: "Fintech", iconName: "trending-up", description: "Digital payment solutions, trading platforms, financial analytics, and regulatory technology for modern financial services.", order: 1 },
    { title: "Telecom", iconName: "radio", description: "Automation and digitalization of processes for mobile operators. Customer management systems, billing, and network analytics.", order: 2 },
    { title: "Banking", iconName: "building", description: "Core banking systems, digital banking, customer onboarding, and regulatory compliance tools for banks and financial institutions.", order: 3 },
    { title: "Healthcare", iconName: "heart", description: "Automation of processes for hospitals and clinics. Patient management systems, appointment scheduling, and EHR integration.", order: 4 },
    { title: "Insurance", iconName: "shield", description: "Customer and policy management, insurance claims processing, scoring, and risk assessment systems for insurance companies.", order: 5 },
    { title: "Retail & E-commerce", iconName: "shopping-cart", description: "Marketplaces, e-commerce platforms, ERP and CRM systems, inventory management, and supply chain digitalization.", order: 6 },
  ];

  const industryIds: Record<string, string> = {};
  for (const ind of industriesData) {
    const doc = await client.create({
      _type: "industry",
      ...ind,
      slug: { _type: "slug", current: ind.title.toLowerCase().replace(/[&\s]+/g, "-") },
    });
    industryIds[ind.title] = doc._id;
    console.log(`  ✓ Industry: ${ind.title}`);
  }

  // 2. Services
  const servicesData = [
    { title: "Low-code Development", shortDescription: "Accelerate application delivery with low-code platforms. We reduce development complexity so companies of any size can increase productivity and speed to market.", iconName: "globe", order: 1 },
    { title: "Custom Software", shortDescription: "End-to-end development of scalable, enterprise-grade software solutions. From architecture design to deployment and long-term support.", iconName: "smartphone", order: 2 },
    { title: "QA & Testing", shortDescription: "Comprehensive multi-stage testing, automated test pipelines, and independent software auditing to ensure reliability before every release.", iconName: "check-circle", order: 3 },
    { title: "IT Consultancy", shortDescription: "Technology strategy, workflow optimization, and digital transformation consulting. We help you modernize infrastructure and consolidate application portfolios.", iconName: "lightbulb", order: 4 },
    { title: "Product Design", shortDescription: "User-centered UI/UX design backed by research and usability testing. We create intuitive interfaces that drive engagement and conversion.", iconName: "palette", order: 5 },
    { title: "Dedicated Teams", shortDescription: "Build your remote development team tailored to your project requirements. Skilled professionals managed and motivated by our proven processes.", iconName: "users", order: 6 },
  ];

  for (const svc of servicesData) {
    await client.create({
      _type: "service",
      ...svc,
      slug: { _type: "slug", current: svc.title.toLowerCase().replace(/[&\s]+/g, "-") },
    });
    console.log(`  ✓ Service: ${svc.title}`);
  }

  // 3. Projects
  const projectsData = [
    { title: "Payment Processing Platform", description: "High-load transaction processing system for a European payment provider.", industryKey: "Fintech", order: 1 },
    { title: "Core Banking System", description: "Digital banking platform with customer management and regulatory compliance.", industryKey: "Banking", order: 2 },
    { title: "Claims Management Portal", description: "End-to-end insurance claims processing, scoring, and policy management.", industryKey: "Insurance", order: 3 },
    { title: "Telecom CRM", description: "Customer management and billing system for a mobile operator.", industryKey: "Telecom", order: 4 },
    { title: "Patient Management System", description: "Hospital workflow automation with appointment scheduling and EHR integration.", industryKey: "Healthcare", order: 5 },
    { title: "E-commerce Marketplace", description: "Multi-vendor marketplace with inventory management and analytics dashboard.", industryKey: "Retail & E-commerce", order: 6 },
  ];

  for (const proj of projectsData) {
    const { industryKey, ...rest } = proj;
    await client.create({
      _type: "project",
      ...rest,
      featured: true,
      slug: { _type: "slug", current: proj.title.toLowerCase().replace(/\s+/g, "-") },
      industry: { _type: "reference", _ref: industryIds[industryKey] },
    });
    console.log(`  ✓ Project: ${proj.title}`);
  }

  // 4. Team member
  await client.create({
    _type: "teamMember",
    name: "Vitaly Fatsky",
    slug: { _type: "slug", current: "vitaly-fatsky" },
    role: "Founder & CEO",
    shortBio:
      "Vitaly Fatsky is a Technology and Low-code evangelist with more than 15 years of experience in the technology sector. As the Founder and CEO of BrainySoftware, he leads a team of skilled professionals dedicated to delivering innovative software solutions for enterprises across multiple industries.",
    email: "vitaly.fatsky@brainysoft.ltd",
    yearsExperience: 15,
    specializations: ["Technology Evangelist", "Low-code Expert", "15+ Years"],
    order: 1,
  });
  console.log("  ✓ Team member: Vitaly Fatsky");

  // 5. Hero sections
  const heroes: Array<Record<string, unknown>> = [
    {
      page: "home",
      heading: "We Build Software\nThat Runs Business",
      subheading: "BrainySoftware is a custom software development company based in Tallinn, Estonia. For over 15 years we deliver scalable solutions for fintech, banking, telecom, healthcare, and insurance sectors.",
      ctaButtons: [
        { label: "Our Services", href: "/services", variant: "primary", _key: "btn1" },
        { label: "Contact Us", href: "/contacts", variant: "outline", _key: "btn2" },
      ],
    },
    { page: "services", heading: "We Offer a Wide Variety of IT Services", subheading: "Our team of experts delivers comprehensive technology solutions to help your business grow" },
    { page: "contacts", heading: "Get in Touch", subheading: "Give us a call or drop by anytime. We endeavour to answer all enquiries within 24 hours on business days." },
    { page: "team", heading: "Our Team", subheading: "Meet the people behind BrainySoftware" },
    { page: "why-choose-us", heading: "Your Partner for Software Innovation", subheading: "BrainySoftware is the partner of choice for many of the world's leading enterprises, SMEs, and technology challengers." },
  ];

  for (const hero of heroes) {
    await client.create({ _type: "heroSection", ...hero } as Parameters<typeof client.create>[0]);
    console.log(`  ✓ Hero: ${hero.page}`);
  }

  // 6. Site settings
  await client.create({
    _type: "siteSettings",
    title: "BrainySoftware",
    description:
      "Custom software development company with 15+ years of experience in Tallinn, Estonia. We specialize in web development, mobile apps, low-code platforms, and IT consultancy.",
    email: "info@brainysoft.biz",
    phone: "+372 699 14 26",
    address: {
      street: "Roseni tn 13",
      city: "Tallinn",
      postalCode: "10111",
      country: "Estonia",
    },
    workingHours: "Mon - Sat: 10:00 AM - 5:00 PM",
    socialLinks: {
      linkedin: "https://linkedin.com/company/brainysoft",
      facebook: "https://facebook.com/brainysoft",
      twitter: "https://twitter.com/brainysoft",
    },
  });
  console.log("  ✓ Site settings");

  // 7. Contact info
  await client.create({
    _type: "contactInfo",
    email: "info@brainysoft.biz",
    phone: "+372 699 14 26",
    address: "Roseni tn 13, Tallinn, 10111",
    workingHours: "Mon - Sat: 10:00 AM - 5:00 PM",
    responseTime: "within 24 hours on business days",
  });
  console.log("  ✓ Contact info");

  // 8. About section
  await client.create({
    _type: "aboutSection",
    title: "About BrainySoftware",
    subtitle: "Your trusted technology partner since 2009",
    paragraphs: [
      "BrainySoftware is the partner of choice for leading enterprises, SMEs, and technology challengers. We help businesses elevate their value through custom software development, low-code platforms, product design, QA, and consultancy services.",
      "Based in Tallinn, Estonia, we maintain and modernize IT infrastructure, automate business processes, and build reliable software solutions for fintech, banking, telecom, healthcare, insurance, and retail industries.",
    ],
    stats: [
      { value: "15+", label: "Years in Business", _key: "stat1" },
      { value: "100+", label: "Projects Delivered", _key: "stat2" },
      { value: "50+", label: "Enterprise Clients", _key: "stat3" },
    ],
  });
  console.log("  ✓ About section");

  console.log("\nSeed complete!");
}

seed().catch((err) => {
  console.error("Seed failed:", err);
  process.exit(1);
});
