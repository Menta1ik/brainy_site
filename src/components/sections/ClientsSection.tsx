import { Container } from "@/components/ui/Container";

const clients = [
  { name: "Fintech Co.", sector: "Fintech" },
  { name: "BankGroup", sector: "Banking" },
  { name: "TelecomEU", sector: "Telecom" },
  { name: "MedSystem", sector: "Healthcare" },
  { name: "InsureNet", sector: "Insurance" },
  { name: "RetailPro", sector: "Retail" },
];

export function ClientsSection() {
  return (
    <section className="border-y border-brand-border bg-brand-gray py-12">
      <Container>
        <p className="mb-8 text-center text-xs uppercase tracking-[0.25em] text-gray-700">
          Trusted by enterprises across Europe
        </p>
        <div className="grid grid-cols-3 gap-px bg-brand-border border border-brand-border md:grid-cols-6">
          {clients.map((client) => (
            <div
              key={client.name}
              className="group flex flex-col items-center justify-center gap-1 bg-brand-dark px-6 py-6 transition-colors duration-300 hover:bg-brand-border/40"
            >
              <span className="text-xs font-medium uppercase tracking-wider text-gray-700 transition-colors group-hover:text-gray-400">
                {client.name}
              </span>
              <span className="text-[10px] uppercase tracking-wider text-gray-800 transition-colors group-hover:text-brand-green/60">
                {client.sector}
              </span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
