import Link from "next/link";
import { cn } from "@/lib/utils";

interface CardProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
  href?: string;
  className?: string;
}

export function Card({ title, description, icon, href, className }: CardProps) {
  const content = (
    <div
      className={cn(
        "group border border-brand-border bg-brand-gray p-8 transition-all duration-300 hover:border-brand-green/40",
        className
      )}
    >
      {icon && (
        <div className="mb-6 flex h-12 w-12 items-center justify-center border border-brand-border text-brand-green transition-colors group-hover:border-brand-green/40">
          {icon}
        </div>
      )}
      <h3 className="mb-3 text-lg font-medium tracking-wide text-white">{title}</h3>
      <p className="text-sm leading-relaxed text-gray-500">{description}</p>
    </div>
  );

  if (href) {
    return <Link href={href}>{content}</Link>;
  }

  return content;
}
