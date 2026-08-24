import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "Md Ali Hasan Riyad — Full-Stack Web Developer";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "#0F1620",
          color: "#EDEAE2",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", fontSize: 22, letterSpacing: 4, color: "#3F6D64" }}>
          FULL STACK WEB DEVELOPER
        </div>
        <div style={{ display: "flex", fontSize: 84, fontWeight: 700, marginTop: 20 }}>
          Md Ali Hasan{" "}
          <span style={{ color: "#E8A33D", marginLeft: 20 }}>Riyad</span>
        </div>
        <div style={{ display: "flex", fontSize: 28, color: "#9AA6B2", marginTop: 30 }}>
          Building products end to end — from database to browser.
        </div>
      </div>
    ),
    { ...size }
  );
}
