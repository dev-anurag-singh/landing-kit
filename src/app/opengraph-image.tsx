import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/site";

export const alt = siteConfig.title;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#fbfaf9",
          color: "#1b1a19",
          padding: "72px 80px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div style={{ width: 34, height: 34, background: "#4f46e5" }} />
          <div style={{ fontSize: 26, fontWeight: 800, letterSpacing: 6 }}>LANDING KIT</div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 22 }}>
          <div style={{ fontSize: 78, fontWeight: 800, lineHeight: 1.04, letterSpacing: -2, maxWidth: 900 }}>
            Production-ready site templates.
          </div>
          <div style={{ fontSize: 30, color: "#6b6a68", maxWidth: 820, lineHeight: 1.4 }}>
            Polished, fully-built marketing sites — each on its own route, previewable live.
          </div>
        </div>

        <div style={{ display: "flex", fontSize: 23, color: "#6b6a68", letterSpacing: 1 }}>
          Next.js · Tailwind CSS · shadcn/ui
        </div>
      </div>
    ),
    { ...size },
  );
}
