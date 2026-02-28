import { createClient } from "@sanity/client";
import fs from "fs";
import path from "path";

// Load env variables from .env.local
const envPath = path.join(process.cwd(), ".env.local");
const envContent = fs.readFileSync(envPath, "utf-8");
const envVars: Record<string, string> = {};
envContent.split("\n").forEach((line) => {
  const [key, ...valueParts] = line.split("=");
  if (key && valueParts.length > 0) {
    envVars[key.trim()] = valueParts.join("=").trim();
  }
});

Object.assign(process.env, envVars);

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  useCdn: false,
  token: process.env.SANITY_API_TOKEN!,
  apiVersion: "2024-01-01",
});

const updates = [
  { slug: "credit-scoring-system", order: 7 },
  { slug: "online-lending-automation", order: 8 },
  { slug: "automated-credit-decisioning", order: 9 },
  { slug: "digital-loan-origination", order: 10 },
];

async function updateOrders() {
  try {
    console.log("Updating project orders...\n");

    for (const update of updates) {
      const doc = await client.fetch<{ _id: string }>(
        `*[_type == "project" && slug.current == $slug][0]`,
        { slug: update.slug }
      );

      if (!doc) {
        console.log(`✗ Project "${update.slug}" not found`);
        continue;
      }

      await client.patch(doc._id).set({ order: update.order }).commit();
      console.log(`✓ Updated "${update.slug}" order to ${update.order}`);
    }

    console.log("\n✓ Order update completed!");
  } catch (error) {
    console.error("✗ Update failed:", error instanceof Error ? error.message : error);
    process.exit(1);
  }
}

updateOrders();
