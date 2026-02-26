import { revalidateTag } from "next/cache";
import { type NextRequest, NextResponse } from "next/server";
import { parseBody } from "next-sanity/webhook";

export const dynamic = "force-dynamic";

type WebhookPayload = {
  _type: string;
};

export async function POST(req: NextRequest) {
  try {
    if (!process.env.REVALIDATE_SECRET) {
      return new Response("Missing REVALIDATE_SECRET environment variable", {
        status: 500,
      });
    }

    const { isValidSignature, body } = await parseBody<WebhookPayload>(
      req,
      process.env.REVALIDATE_SECRET,
    );

    if (!isValidSignature) {
      return NextResponse.json({ message: "Invalid signature" }, { status: 401 });
    }

    if (!body?._type) {
      return NextResponse.json({ message: "Bad Request" }, { status: 400 });
    }

    revalidateTag(body._type);

    return NextResponse.json({ revalidated: true, type: body._type, now: Date.now() });
  } catch (err) {
    console.error("Revalidation error:", err);
    return new Response("Internal server error", { status: 500 });
  }
}
