"use client";

import { Button } from "@/components/ui/Button";

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center text-center px-6">
      <div className="h-px w-12 bg-red-500 mb-6" />
      <h1 className="text-2xl font-medium text-white">Something went wrong</h1>
      <p className="mt-4 text-sm text-gray-500">
        An unexpected error occurred.
      </p>
      <Button onClick={reset} className="mt-8">
        Try again
      </Button>
    </div>
  );
}
