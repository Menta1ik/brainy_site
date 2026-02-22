import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/sections/PageHero";
import { ContactForm } from "@/components/sections/ContactForm";
import { SITE_CONFIG } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with BrainySoftware. We are based in Tallinn, Estonia. Email us at info@brainysoft.biz or call +372 699 14 26.",
  alternates: { canonical: "/contacts" },
};

const contactDetails = [
  {
    label: "Email",
    value: SITE_CONFIG.email,
    href: `mailto:${SITE_CONFIG.email}`,
  },
  {
    label: "Phone",
    value: SITE_CONFIG.phone,
    href: `tel:${SITE_CONFIG.phone}`,
  },
  {
    label: "Address",
    value: `${SITE_CONFIG.address.street}, ${SITE_CONFIG.address.city}, ${SITE_CONFIG.address.postalCode}`,
    href: undefined,
  },
  {
    label: "Hours",
    value: SITE_CONFIG.workingHours,
    href: undefined,
  },
];

export default function ContactsPage() {
  return (
    <>
      <PageHero
        title="Get in Touch"
        subtitle="Give us a call or drop by anytime. We endeavour to answer all enquiries within 24 hours on business days."
      />
      <section className="py-24 lg:py-32 bg-brand-dark">
        <Container>
          <div className="grid gap-16 lg:grid-cols-5">
            <div className="lg:col-span-2">
              <h2 className="text-xl font-medium text-white">
                Contact Information
              </h2>
              <div className="mt-8 space-y-6">
                {contactDetails.map((detail) => (
                  <div key={detail.label} className="border-l border-brand-border pl-4">
                    <p className="text-xs uppercase tracking-wider text-gray-600">
                      {detail.label}
                    </p>
                    {detail.href ? (
                      <a
                        href={detail.href}
                        className="mt-1 block text-sm text-gray-400 hover:text-brand-green transition-colors"
                      >
                        {detail.value}
                      </a>
                    ) : (
                      <p className="mt-1 text-sm text-gray-400">{detail.value}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-3">
              <div className="border border-brand-border bg-brand-gray p-8">
                <h2 className="mb-8 text-xl font-medium text-white">
                  Send Us a Message
                </h2>
                <ContactForm />
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
