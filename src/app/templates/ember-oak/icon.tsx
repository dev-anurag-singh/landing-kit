import { ImageResponse } from "next/og";

// Ember & Oak favicon — a lowercase serif "e" on warm terracotta.
export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#a54d31",
          borderRadius: 16,
          color: "#f8f2e8",
          fontSize: 22,
          fontStyle: "italic",
          fontWeight: 600,
          fontFamily: "Georgia, 'Times New Roman', serif",
        }}
      >
        e
      </div>
    ),
    { ...size },
  );
}
