"use client";

import React from "react";
import { motion } from "framer-motion";

export default function Hero() {
  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      className="hero-section"
      style={{
        minHeight: "88vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "7rem 2rem 5rem",
        maxWidth: "900px",
        margin: "0 auto",
        position: "relative",
        overflowX: "hidden",
      }}
    >
      {/* Subtle warm radial glow */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          top: "35%",
          left: "45%",
          transform: "translate(-50%, -50%)",
          width: "min(520px, 100vw)",
          height: "min(520px, 100vw)",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, var(--accent-glow) 0%, transparent 70%)",
          pointerEvents: "none",
          zIndex: -1,
        }}
      />

      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, ease: "easeOut", delay: 0.08 }}
        style={{
          fontFamily: "'Plus Jakarta Sans', sans-serif",
          fontSize: "clamp(2.4rem, 6vw, 4rem)",
          fontWeight: 700,
          lineHeight: 1.08,
          letterSpacing: "-0.025em",
          marginBottom: "1.25rem",
          color: "var(--text)",
        }}
      >
        Habeebah Sulayman
      </motion.h1>

      {/* Concise Subheadline */}
      <motion.p
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, ease: "easeOut", delay: 0.16 }}
        style={{
          color: "var(--text-muted)",
          fontSize: "clamp(1.1rem, 2.2vw, 1.32rem)",
          maxWidth: "650px",
          marginBottom: "2.4rem",
          lineHeight: 1.65,
          fontWeight: 400,
        }}
      >
        Mobile Software Engineer building cross-platform{" "}
        <strong style={{ color: "var(--text)", fontWeight: 600 }}>
          Android and iOS
        </strong>{" "}
        apps with{" "}
        <strong style={{ color: "var(--text)", fontWeight: 600 }}>
          Kotlin Multiplatform
        </strong>
        , shipping production features end-to-end from architecture to store release.
      </motion.p>

      {/* CTAs */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, delay: 0.24 }}
        style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}
      >
        <button
          onClick={() => scrollTo("work")}
          style={{
            background: "var(--accent-btn-bg)",
            color: "var(--accent-btn-text)",
            padding: "0.8rem 1.7rem",
            borderRadius: "8px",
            fontWeight: 600,
            fontSize: "0.95rem",
            border: "none",
            cursor: "pointer",
            transition: "opacity 0.2s, transform 0.15s",
            fontFamily: "'Poppins', sans-serif",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.opacity = "0.88";
            e.currentTarget.style.transform = "translateY(-1px)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.opacity = "1";
            e.currentTarget.style.transform = "translateY(0)";
          }}
        >
          View My Work
        </button>
        <button
          onClick={() => scrollTo("contact")}
          style={{
            background: "transparent",
            color: "var(--text)",
            padding: "0.8rem 1.7rem",
            borderRadius: "8px",
            fontWeight: 500,
            fontSize: "0.95rem",
            border: "1px solid var(--border)",
            cursor: "pointer",
            transition: "border-color 0.2s, background 0.2s",
            fontFamily: "'Poppins', sans-serif",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = "var(--accent)";
            e.currentTarget.style.background = "var(--surface)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = "var(--border)";
            e.currentTarget.style.background = "transparent";
          }}
        >
          Get in touch
        </button>
      </motion.div>

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.4; }
        }
        @media (max-width: 679px) {
          .hero-section {
            min-height: auto !important;
            justify-content: flex-start !important;
            padding: 2.5rem 1.5rem 4rem !important;
          }
        }
      `}</style>
    </section>
  );
}
