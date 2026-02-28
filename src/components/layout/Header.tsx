"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { NAV_ITEMS } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import { MobileMenu } from "./MobileMenu";

interface HeaderProps {
  logoUrl?: string | null;
}

export function Header({ logoUrl }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileOpen(false);
  }, [pathname]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-colors duration-300 border-b",
        isScrolled
          ? "bg-brand-dark/95 border-brand-border backdrop-blur-md"
          : "bg-transparent border-transparent"
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <Link href="/" className="flex items-center gap-2">
          {logoUrl && (
            <Image
              src={logoUrl}
              alt="BrainySoftware"
              width={32}
              height={32}
              className="h-8 w-auto"
              priority
            />
          )}
          <span className="text-lg font-medium tracking-wider text-white">
            BRAINY<span className="text-brand-green">SOFT</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Main navigation">
          {NAV_ITEMS.map((item) => (
            <div key={item.label} className="relative group">
              <Link
                href={item.href}
                className={cn(
                  "text-xs font-medium uppercase tracking-wider transition-colors hover:text-white",
                  pathname === item.href || pathname.startsWith(item.href + "/") ? "text-brand-green" : "text-gray-400"
                )}
              >
                {item.label}
              </Link>
            </div>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <Button href="/contacts" size="sm" className="hidden lg:inline-flex">
            Contact Us
          </Button>

          <button
            onClick={() => setIsMobileOpen(true)}
            className="lg:hidden p-2 text-gray-400"
            aria-label="Open menu"
          >
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      <MobileMenu isOpen={isMobileOpen} onClose={() => setIsMobileOpen(false)} logoUrl={logoUrl} />
    </header>
  );
}
