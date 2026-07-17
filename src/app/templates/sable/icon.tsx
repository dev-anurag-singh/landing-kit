import { ImageResponse } from "next/og";

// Sable favicon — the wordmark initial on electric violet.
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
          background: "#7c6cff",
          borderRadius: 8,
          color: "#0a0a0f",
          fontSize: 21,
          fontWeight: 700,
        }}
      >
        S
      </div>
    ),
    { ...size },
  );
}
