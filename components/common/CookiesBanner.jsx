'use client'
import { useEffect, useState } from "react";

export default function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookieConsent");
    if (!consent) {
      const timer = setTimeout(() => {
        setShowBanner(true);
      }, 2000); // 2 sec delay

      return () => clearTimeout(timer); // cleanup if unmounts
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookieConsent", "true");
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div
      style={{
        position: "fixed",
        bottom: "20px",
        right: "20px",
        width: "320px",
        maxWidth: "calc(100vw - 40px)",
        background: "linear-gradient(135deg, #8B4513 0%, #D2691E 100%)",
        color: "#fff",
        padding: "20px",
        borderRadius: "12px",
        boxShadow: "0 8px 32px rgba(0, 0, 0, 0.3)",
        fontSize: "14px",
        zIndex: 9999,
        fontFamily: "system-ui, -apple-system, sans-serif",
        border: "2px solid #CD853F",
      }}
    >
      <div style={{ marginBottom: "12px", fontWeight: "600", fontSize: "16px" }}>
        🍪 Cookie Notice
      </div>
      <div style={{ marginBottom: "16px", lineHeight: "1.4", opacity: "0.95" }}>
        This website uses only essential cookies for basic functionality.
      </div>
      <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
        <button
          onClick={handleAccept}
          style={{
            background: "#fff",
            border: "none",
            padding: "8px 16px",
            color: "#8B4513",
            cursor: "pointer",
            borderRadius: "6px",
            fontWeight: "600",
            fontSize: "13px",
            transition: "all 0.2s ease",
          }}
          onMouseOver={(e) => {
            e.target.style.background = "#f5f5f5";
            e.target.style.transform = "translateY(-1px)";
          }}
          onMouseOut={(e) => {
            e.target.style.background = "#fff";
            e.target.style.transform = "translateY(0)";
          }}
        >
          Accept
        </button>
        <a
          href="/privacy-policy"
          style={{
            color: "#FFE4B5",
            textDecoration: "underline",
            fontSize: "13px",
            alignSelf: "center",
            transition: "color 0.2s ease"
          }}
          onMouseOver={(e) => e.target.style.color = "#fff"}
          onMouseOut={(e) => e.target.style.color = "#FFE4B5"}
        >
          Learn more
        </a>
      </div>
    </div>
  );
}
