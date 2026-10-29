"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const screens = [
  { src: "/projects/Rova_homescreen.png", alt: "Rova home screen", label: "Rova" },
  { src: "/projects/spendly_homepage2.png", alt: "Spendly home screen", label: "Spendly" },
];

export default function Hero() {
  const [active, setActive] = useState(0);

  // Cycle the phone screens every few seconds (skipped for reduced-motion users)
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = setInterval(() => {
      setActive((i) => (i + 1) % screens.length);
    }, 3800);
    return () => clearInterval(id);
  }, []);

  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      className="hero-section"
      style={{
        minHeight: "88vh",
        display: "grid",
        gridTemplateColumns: "1.15fr 0.85fr",
        alignItems: "center",
        gap: "3rem",
        padding: "6rem 2rem 5rem",
        maxWidth: "1100px",
        margin: "0 auto",
        position: "relative",
        overflowX: "hidden",
      }}
    >
      {/* Subtle warm radial glow behind the phone */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          top: "50%",
          right: "5%",
          transform: "translateY(-50%)",
          width: "min(520px, 100vw)",
          height: "min(520px, 100vw)",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, var(--accent-glow) 0%, transparent 70%)",
          pointerEvents: "none",
          zIndex: -1,
        }}
      />

      {/* Left — text */}
      <div>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: "easeOut", delay: 0.08 }}
          style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontSize: "clamp(2.4rem, 5.5vw, 4rem)",
            fontWeight: 700,
            lineHeight: 1.08,
            letterSpacing: "-0.025em",
            marginBottom: "1.25rem",
            color: "var(--text)",
          }}
        >
          Habeebah Sulayman
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: "easeOut", delay: 0.16 }}
          style={{
            color: "var(--text-muted)",
            fontSize: "clamp(1.1rem, 2vw, 1.3rem)",
            maxWidth: "560px",
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
          , shipping production features end-to-end from architecture to store
          release.
        </motion.p>

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
      </div>

      {/* Right — phone mockup cycling through app screens (large screens only) */}
      <motion.div
        className="hero-phone"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut", delay: 0.3 }}
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "1.1rem",
        }}
      >
        <div
          style={{
            position: "relative",
            width: "270px",
            aspectRatio: "9 / 19",
            background: "#141414",
            borderRadius: "42px",
            padding: "10px",
            border: "1px solid var(--border)",
            boxShadow:
              "0 30px 60px -20px rgba(20, 20, 20, 0.35), 0 0 0 6px light-dark(#EADFCF, #22201E)",
          }}
        >
          <div
            style={{
              position: "relative",
              width: "100%",
              height: "100%",
              borderRadius: "33px",
              overflow: "hidden",
              background: "#0a0a0a",
            }}
          >
            <AnimatePresence initial={false}>
              <motion.div
                key={screens[active].src}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.6 }}
                style={{ position: "absolute", inset: 0 }}
              >
                <Image
                  src={screens[active].src}
                  alt={screens[active].alt}
                  fill
                  priority
                  sizes="270px"
                  style={{ objectFit: "cover", objectPosition: "top center" }}
                />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Screen indicator */}
        <div style={{ display: "flex", gap: "0.6rem", alignItems: "center" }}>
          {screens.map((s, i) => (
            <button
              key={s.label}
              type="button"
              onClick={() => setActive(i)}
              aria-label={`Show ${s.label}`}
              aria-pressed={i === active}
              style={{
                fontSize: "0.75rem",
                fontWeight: 600,
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                padding: "0.3rem 0.8rem",
                borderRadius: "999px",
                border: "1px solid var(--border)",
                background: i === active ? "var(--accent-btn-bg)" : "transparent",
                color: i === active ? "var(--accent-btn-text)" : "var(--text-muted)",
                cursor: "pointer",
                transition: "background 0.25s, color 0.25s",
              }}
            >
              {s.label}
            </button>
          ))}
        </div>
      </motion.div>

      <style>{`
        @media (max-width: 899px) {
          .hero-section {
            grid-template-columns: 1fr !important;
          }
          .hero-phone {
            display: none !important;
          }
        }
        @media (max-width: 679px) {
          .hero-section {
            min-height: auto !important;
            padding: 4.5rem 1.5rem 4rem !important;
          }
        }
      `}</style>
    </section>
  );
}
