"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Input, Textarea } from "@/components/ui/Input";

type FormStatus = "idle" | "submitting" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setErrors({});

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      phone: formData.get("phone") as string,
      subject: formData.get("subject") as string,
      message: formData.get("message") as string,
      honeypot: formData.get("honeypot") as string,
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        if (result.details?.fieldErrors) {
          const fieldErrors: Record<string, string> = {};
          for (const [field, msgs] of Object.entries(result.details.fieldErrors)) {
            fieldErrors[field] = (msgs as string[])[0];
          }
          setErrors(fieldErrors);
          setStatus("idle");
        } else {
          setStatus("error");
        }
        return;
      }

      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="border border-brand-green/30 bg-brand-green/5 p-8 text-center">
        <div className="mx-auto h-px w-12 bg-brand-green mb-6" />
        <h3 className="text-lg font-medium text-white">
          Thank you
        </h3>
        <p className="mt-2 text-sm text-gray-500">
          We&apos;ll get back to you within 24 hours.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="absolute -left-[9999px]" aria-hidden="true">
        <input type="text" name="honeypot" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <Input label="Name" name="name" required placeholder="Your name" error={errors.name} />
        <Input label="Email" name="email" type="email" required placeholder="your@email.com" error={errors.email} />
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <Input label="Phone" name="phone" type="tel" placeholder="+372 ..." error={errors.phone} />
        <Input label="Subject" name="subject" required placeholder="How can we help?" error={errors.subject} />
      </div>
      <Textarea label="Message" name="message" required placeholder="Tell us about your project..." error={errors.message} />

      {status === "error" && (
        <div className="border border-red-500/30 bg-red-500/5 p-4 text-xs text-red-400">
          Something went wrong. Please try again or email us directly.
        </div>
      )}

      <Button type="submit" disabled={status === "submitting"}>
        {status === "submitting" ? "Sending..." : "Send Message"}
      </Button>
    </form>
  );
}
