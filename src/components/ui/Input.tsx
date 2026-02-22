import { cn } from "@/lib/utils";
import { forwardRef } from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, className, ...props }, ref) => {
    return (
      <div className="w-full">
        <label className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-gray-500">
          {label}
          {props.required && <span className="text-brand-green ml-1">*</span>}
        </label>
        <input
          ref={ref}
          className={cn(
            "w-full border border-brand-border bg-brand-gray px-4 py-3 text-sm text-white transition-colors placeholder:text-gray-600 focus:border-brand-green focus:outline-none",
            error && "border-red-500 focus:border-red-500",
            className
          )}
          {...props}
        />
        {error && <p className="mt-1 text-xs text-red-400">{error}</p>}
      </div>
    );
  }
);

Input.displayName = "Input";

interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  error?: string;
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ label, error, className, ...props }, ref) => {
    return (
      <div className="w-full">
        <label className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-gray-500">
          {label}
          {props.required && <span className="text-brand-green ml-1">*</span>}
        </label>
        <textarea
          ref={ref}
          className={cn(
            "w-full border border-brand-border bg-brand-gray px-4 py-3 text-sm text-white transition-colors placeholder:text-gray-600 focus:border-brand-green focus:outline-none",
            error && "border-red-500 focus:border-red-500",
            className
          )}
          rows={5}
          {...props}
        />
        {error && <p className="mt-1 text-xs text-red-400">{error}</p>}
      </div>
    );
  }
);

Textarea.displayName = "Textarea";
