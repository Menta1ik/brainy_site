import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeading({
  title,
  subtitle,
  align = "center",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "mb-16",
        align === "center" && "text-center",
        className
      )}
    >
      <div
        className={cn(
          "mb-6 h-px w-12 bg-brand-green",
          align === "center" && "mx-auto"
        )}
      />
      <h2 className="text-2xl font-medium tracking-tight text-white sm:text-3xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 max-w-xl text-sm text-gray-500 mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
}
