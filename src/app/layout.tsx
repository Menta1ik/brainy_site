import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { JsonLd } from "@/components/seo/JsonLd";
import { SITE_CONFIG } from "@/lib/constants";
import { getLogoUrl } from "@/lib/sanity/fetchers";
import "./globals.css";

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.url),
  title: {
    default: "BrainySoftware | Custom Software Development in Estonia",
    template: "%s | BrainySoftware",
  },
  description: SITE_CONFIG.description,
  keywords: [
    "custom software development",
    "Tallinn",
    "Estonia",
    "low-code",
    "web development",
    "mobile development",
    "IT consultancy",
    "software company",
  ],
  openGraph: {
    title: "BrainySoftware | Custom Software Development",
    description: SITE_CONFIG.description,
    url: SITE_CONFIG.url,
    siteName: SITE_CONFIG.name,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "BrainySoftware | Custom Software Development",
    description: SITE_CONFIG.description,
  },
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": ["Organization", "LocalBusiness"],
  "@id": `${SITE_CONFIG.url}/#organization`,
  name: SITE_CONFIG.name,
  url: SITE_CONFIG.url,
  description: SITE_CONFIG.description,
  email: SITE_CONFIG.email,
  telephone: SITE_CONFIG.phone,
  foundingDate: String(SITE_CONFIG.foundingYear),
  address: {
    "@type": "PostalAddress",
    streetAddress: SITE_CONFIG.address.street,
    addressLocality: SITE_CONFIG.address.city,
    postalCode: SITE_CONFIG.address.postalCode,
    addressCountry: SITE_CONFIG.address.countryCode,
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ],
    opens: "10:00",
    closes: "17:00",
  },
  sameAs: Object.values(SITE_CONFIG.social),
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "IT Services",
    itemListElement: [
      "Web Development",
      "Mobile Development",
      "QA & Testing",
      "IT Consultancy",
      "UI/UX Design",
      "Dedicated Team",
    ].map((name) => ({
      "@type": "Offer",
      itemOffered: { "@type": "Service", name },
    })),
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const logoUrl = await getLogoUrl();

  return (
    <html lang="en">
      <body className={`${jetbrainsMono.variable} ${jetbrainsMono.className} antialiased`}>
        <JsonLd data={organizationJsonLd} />
        <Header logoUrl={logoUrl} />
        <main className="min-h-screen pt-[72px]">{children}</main>
        <Footer logoUrl={logoUrl} />
      </body>
    </html>
  );
}
