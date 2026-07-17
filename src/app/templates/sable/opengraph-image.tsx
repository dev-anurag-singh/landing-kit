import { ImageResponse } from "next/og";

export const alt = "Sable — Autonomous AI agents for teams";
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
          background: "#08080b",
          color: "#ededf2",
          padding: "72px 80px",
          backgroundImage:
            "radial-gradient(50% 45% at 50% 0%, rgba(124,108,255,0.45), transparent 70%)",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              width: 40,
              height: 40,
              borderRadius: 10,
              background: "#7c6cff",
              color: "#0a0a0f",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 24,
              fontWeight: 700,
            }}
          >
            S
          </div>
          <div style={{ fontSize: 30, fontWeight: 600, letterSpacing: -0.5 }}>Sable</div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 82, fontWeight: 600, lineHeight: 1.02, letterSpacing: -3 }}>
            Your team&apos;s work,
          </div>
          <div
            style={{
              fontSize: 82,
              fontWeight: 600,
              lineHeight: 1.02,
              letterSpacing: -3,
              color: "#a99dff",
            }}
          >
            on autopilot.
          </div>
        </div>

        <div style={{ display: "flex", fontSize: 24, color: "#8b8b96", letterSpacing: 0.5 }}>
          Autonomous AI agents · 100+ integrations · SOC 2 Type II
        </div>
      </div>
    ),
    { ...size },
  );
}
