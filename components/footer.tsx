"use client";

import React from "react";

const Footer = () => {
  const scrollToTop = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer
      style={{
        padding: "2rem",
        borderTop: "1px solid var(--border)",
        color: "var(--text-muted)",
        fontSize: "0.85rem",
        fontFamily: "'Poppins', sans-serif",
      }}
    >
      <div
        className="footer-inner"
        style={{
          maxWidth: "900px",
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "1rem",
        }}
      >
        <a
          href="#top"
          onClick={scrollToTop}
          aria-label="Scroll back to top"
          style={{
            display: "inline-flex",
            alignItems: "center",
            textDecoration: "none",
            transition: "transform 0.2s ease",
          }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.transform = "translateY(-2px)")
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.transform = "translateY(0)")
          }
        >
          <svg
            width="32"
            height="32"
            viewBox="0 0 256 256"
            fill="none"
            aria-hidden="true"
            style={{ display: "block" }}
          >
            <rect
              width="256"
              height="256"
              rx="58"
              style={{ fill: "light-dark(#141414, #EADFCF)" }}
            />
            <path
              d="M72 56V198"
              strokeWidth="28"
              strokeLinecap="round"
              style={{ stroke: "light-dark(#F5EFE6, #141414)" }}
            />
            <path
              d="M72 130C72 104 92 102 108 102C126 102 142 114 142 138V198"
              strokeWidth="28"
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{ stroke: "light-dark(#F5EFE6, #141414)" }}
            />
            <circle
              cx="179"
              cy="197"
              r="15"
              style={{ fill: "light-dark(#C9B79C, #8C7456)" }}
            />
          </svg>
        </a>

        <p style={{ margin: 0 }}>© 2026 Habeebah Sulayman</p>
      </div>

      <style>{`
        @media (max-width: 679px) {
          .footer-inner {
            flex-direction: column !important;
            justify-content: center !important;
            text-align: center !important;
            gap: 0.85rem !important;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
