import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center text-center px-6">
      <div className="h-px w-12 bg-brand-green mb-6" />
      <h1 className="text-5xl font-medium text-white">404</h1>
      <p className="mt-4 text-sm text-gray-500">Page not found</p>
      <Button href="/" className="mt-8">
        Back to Home
      </Button>
    </div>
  );
}
