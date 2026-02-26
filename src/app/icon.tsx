import { ImageResponse } from "next/og";
import { getLogoUrl } from "@/lib/sanity/fetchers";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default async function Icon() {
  const logoUrl = await getLogoUrl();

  if (!logoUrl) {
    // Fallback: simple "B" letter icon
    return new ImageResponse(
      (
        <div
          style={{
            width: 32,
            height: 32,
            background: "#22c55e",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 4,
            color: "#000",
            fontWeight: 700,
            fontSize: 20,
            fontFamily: "sans-serif",
          }}
        >
          B
        </div>
      ),
      { ...size }
    );
  }

  return new ImageResponse(
    (
      <div
        style={{
          width: 32,
          height: 32,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={logoUrl} width={32} height={32} style={{ objectFit: "contain" }} alt="favicon" />
      </div>
    ),
    { ...size }
  );
}
