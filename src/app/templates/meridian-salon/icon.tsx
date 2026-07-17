import { ImageResponse } from "next/og";

// Meridian favicon — the brand mark: an "M" on the shop's hot-orange.
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
          background: "#ec3013",
          borderRadius: 7,
          color: "#ffffff",
          fontSize: 22,
          fontWeight: 800,
        }}
      >
        M
      </div>
    ),
    { ...size },
  );
}
