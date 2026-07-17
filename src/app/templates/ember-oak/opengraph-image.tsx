import { ImageResponse } from "next/og";

export const alt = "Ember & Oak — Cozy Vintage Coffee House";
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
          background: "#f4ece0",
          color: "#2a211b",
          padding: "72px 80px",
          fontFamily: "Georgia, 'Times New Roman', serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              width: 44,
              height: 44,
              borderRadius: 999,
              background: "#a54d31",
              color: "#f8f2e8",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 26,
              fontStyle: "italic",
              fontWeight: 600,
            }}
          >
            e
          </div>
          <div style={{ fontSize: 30, fontWeight: 600, letterSpacing: 1 }}>Ember &amp; Oak</div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 88, fontWeight: 500, lineHeight: 1.02, letterSpacing: -2 }}>
            Slow coffee,
          </div>
          <div
            style={{
              fontSize: 88,
              fontWeight: 500,
              fontStyle: "italic",
              lineHeight: 1.02,
              letterSpacing: -2,
              color: "#a54d31",
            }}
          >
            warm rooms.
          </div>
        </div>

        <div style={{ display: "flex", fontSize: 24, color: "#6b5d51", letterSpacing: 1 }}>
          Small-lot roasted in-house · Hand-brewed · Portland · Est. 2009
        </div>
      </div>
    ),
    { ...size },
  );
}
