import { ImageResponse } from "next/og";

// Apple touch icon — larger, padded version of the Landing Kit mark.
export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          position: "relative",
          background: "#4f46e5",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 44,
            left: 44,
            width: 66,
            height: 66,
            borderRadius: 16,
            background: "rgba(255,255,255,0.5)",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: 72,
            left: 72,
            width: 66,
            height: 66,
            borderRadius: 16,
            background: "#ffffff",
          }}
        />
      </div>
    ),
    { ...size },
  );
}
