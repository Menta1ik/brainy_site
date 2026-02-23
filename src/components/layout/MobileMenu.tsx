"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { NAV_ITEMS, SITE_CONFIG } from "@/lib/constants";
import { cn } from "@/lib/utils";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  logoUrl?: string | null;
}

export function MobileMenu({ isOpen, onClose, logoUrl }: MobileMenuProps) {
  const pathname = usePathname();
  const [expandedItem, setExpandedItem] = useState<string | null>(null);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 lg:hidden">
      <div className="fixed inset-0 bg-black/80" onClick={onClose} />

      <div className="fixed inset-y-0 right-0 w-full max-w-sm border-l border-brand-border bg-brand-dark">
        <div className="flex items-center justify-between p-6 border-b border-brand-border">
          <div className="flex items-center gap-2">
            {logoUrl && (
              <Image
                src={logoUrl}
                alt="BrainySoftware"
                width={28}
                height={28}
                className="h-7 w-auto"
              />
            )}
            <span className="text-lg font-medium tracking-wider text-white">
              BRAINY<span className="text-brand-green">SOFT</span>
            </span>
          </div>
          <button onClick={onClose} className="p-2 text-gray-400" aria-label="Close menu">
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <nav className="px-6" aria-label="Mobile navigation">
          {NAV_ITEMS.map((item) => (
            <div key={item.label} className="border-b border-brand-border">
              {"children" in item && item.children ? (
                <>
                  <button
                    onClick={() =>
                      setExpandedItem(expandedItem === item.label ? null : item.label)
                    }
                    className="flex w-full items-center justify-between py-4 text-sm uppercase tracking-wider text-gray-400"
                  >
                    {item.label}
                    <svg
                      className={cn(
                        "h-4 w-4 transition-transform",
                        expandedItem === item.label && "rotate-180"
                      )}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {expandedItem === item.label && (
                    <div className="pb-4 pl-4">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          onClick={onClose}
                          className={cn(
                            "block py-2 text-sm text-gray-500 hover:text-brand-green",
                            pathname === child.href && "text-brand-green"
                          )}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <Link
                  href={item.href}
                  onClick={onClose}
                  className={cn(
                    "block py-4 text-sm uppercase tracking-wider hover:text-brand-green",
                    pathname === item.href ? "text-brand-green" : "text-gray-400"
                  )}
                >
                  {item.label}
                </Link>
              )}
            </div>
          ))}
        </nav>

        <div className="mt-8 px-6 space-y-3 text-xs text-gray-600">
          <a href={`mailto:${SITE_CONFIG.email}`} className="block hover:text-brand-green">
            {SITE_CONFIG.email}
          </a>
          <a href={`tel:${SITE_CONFIG.phone}`} className="block hover:text-brand-green">
            {SITE_CONFIG.phone}
          </a>
        </div>
      </div>
    </div>
  );
}
