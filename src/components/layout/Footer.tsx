import Link from "next/link";
import Image from "next/image";
import { SITE_CONFIG, SERVICES } from "@/lib/constants";

interface FooterProps {
  logoUrl?: string | null;
}

export function Footer({ logoUrl }: FooterProps) {
  return (
    <footer className="border-t border-brand-border bg-brand-dark">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link href="/" className="inline-flex items-center gap-2">
              {logoUrl && (
                <Image
                  src={logoUrl}
                  alt="BrainySoftware"
                  width={32}
                  height={32}
                  className="h-8 w-auto"
                />
              )}
              <span className="text-lg font-medium tracking-wider text-white">
                BRAINY<span className="text-brand-green">SOFT</span>
              </span>
            </Link>
            <p className="mt-4 text-xs leading-relaxed text-gray-600">
              Over 15 years helping companies reach their goals with innovative
              software solutions.
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-xs font-medium uppercase tracking-wider text-gray-500">
              Navigation
            </h3>
            <ul className="space-y-2.5">
              {[
                { label: "Home", href: "/" },
                { label: "Why Choose Us", href: "/company/why-choose-us" },
                { label: "Our Team", href: "/company/team" },
                { label: "Services", href: "/services" },
                { label: "Contacts", href: "/contacts" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-xs text-gray-600 transition-colors hover:text-brand-green"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-xs font-medium uppercase tracking-wider text-gray-500">
              Services
            </h3>
            <ul className="space-y-2.5">
              {SERVICES.map((service) => (
                <li key={service.title}>
                  <Link
                    href={`/services/${service.title.toLowerCase().replace(/[&]+/g, "").replace(/\s+/g, "-").replace(/-+/g, "-")}`}
                    className="text-xs text-gray-600 transition-colors hover:text-brand-green"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-xs font-medium uppercase tracking-wider text-gray-500">
              Contact
            </h3>
            <address className="not-italic space-y-2.5 text-xs text-gray-600">
              <p>
                <a
                  href={`mailto:${SITE_CONFIG.email}`}
                  className="transition-colors hover:text-brand-green"
                >
                  {SITE_CONFIG.email}
                </a>
              </p>
              <p>
                <a
                  href={`tel:${SITE_CONFIG.phone}`}
                  className="transition-colors hover:text-brand-green"
                >
                  {SITE_CONFIG.phone}
                </a>
              </p>
              <p>
                {SITE_CONFIG.address.street}, {SITE_CONFIG.address.city},{" "}
                {SITE_CONFIG.address.postalCode}
              </p>
            </address>
          </div>
        </div>

        <div className="mt-12 border-t border-brand-border pt-8 flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-xs text-gray-700">
            &copy; {new Date().getFullYear()} {SITE_CONFIG.name}
          </p>
          <div className="flex gap-6">
            {Object.entries(SITE_CONFIG.social).map(([name, url]) => (
              <a
                key={name}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs uppercase tracking-wider text-gray-700 transition-colors hover:text-brand-green"
                aria-label={name}
              >
                {name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
