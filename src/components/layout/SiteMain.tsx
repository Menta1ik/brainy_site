"use client";

import { usePathname } from "next/navigation";

export function SiteMain({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  if (pathname.startsWith("/studio")) {
    return <>{children}</>;
  }

  return <main className="min-h-screen pt-[72px]">{children}</main>;
}
