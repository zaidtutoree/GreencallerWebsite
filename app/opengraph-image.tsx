import { ImageResponse } from "next/og";

export const runtime = "nodejs";
export const alt =
  "Greencaller — a business number that rings you anywhere";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#04241a",
          padding: "68px 76px",
          position: "relative",
        }}
      >
        {/* glow */}
        <div
          style={{
            position: "absolute",
            top: -240,
            right: -160,
            width: 720,
            height: 720,
            borderRadius: 9999,
            background: "#00d16c",
            opacity: 0.22,
            filter: "blur(120px)",
            display: "flex",
          }}
        />

        {/* logo lockup */}
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <svg width="54" height="54" viewBox="0 0 24 24" fill="#00d16c">
            <path d="M5.6 6.9c0-1.3 1.5-2.1 2.6-1.4l1.6 1v11l-1.6 1c-1.1.7-2.6-.1-2.6-1.4V6.9Z" />
            <path d="M10.6 4.2c0-1.3 1.4-2.1 2.6-1.5l6.4 3.9c1 .7 1 2.2 0 2.9l-9 5.5V4.2Z" />
            <path d="M10.6 14.9l9 5.5c-.1.9-1.5 1.6-2.6 1l-6.4-3.9V14.9Z" opacity="0.92" />
          </svg>
          <span
            style={{
              fontSize: 44,
              fontWeight: 800,
              color: "#ffffff",
              letterSpacing: -1.6,
            }}
          >
            Greencaller
          </span>
        </div>

        {/* headline */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          <span
            style={{
              fontSize: 74,
              fontWeight: 700,
              color: "#ffffff",
              lineHeight: 1.05,
              letterSpacing: -3,
              maxWidth: 920,
            }}
          >
            Business number that rings you anywhere
          </span>
          <span
            style={{
              marginTop: 26,
              fontSize: 29,
              color: "rgba(255,255,255,0.62)",
              maxWidth: 780,
              lineHeight: 1.35,
            }}
          >
            One business number your team answers from a mobile, a laptop or a desk phone.
          </span>
        </div>

        {/* footer chips */}
        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          {["Live in minutes", "Keep your number", "14-day free trial"].map((t) => (
            <span
              key={t}
              style={{
                display: "flex",
                fontSize: 22,
                color: "#04241a",
                background: "#00d16c",
                padding: "12px 22px",
                borderRadius: 999,
                fontWeight: 600,
              }}
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    ),
    size,
  );
}
