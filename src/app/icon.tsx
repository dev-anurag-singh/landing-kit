import { ImageResponse } from "next/og";

// Landing Kit favicon — a stacked-cards mark on the studio indigo.
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
          position: "relative",
          background: "#4f46e5",
          borderRadius: 7,
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 7,
            left: 7,
            width: 12,
            height: 12,
            borderRadius: 3,
            background: "rgba(255,255,255,0.5)",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: 13,
            left: 13,
            width: 12,
            height: 12,
            borderRadius: 3,
            background: "#ffffff",
          }}
        />
      </div>
    ),
    { ...size },
  );
}
