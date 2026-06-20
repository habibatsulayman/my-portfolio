"use client";

import React, { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

const phrases = [
  "Android / KMP Engineer",
  "Kotlin Multiplatform · Android · iOS",
  "Clean Architecture · MVVM · SQLDelight",
  "Building AssistantX @ Layer Axis",
];

const stats = [
  { num: "1", suffix: "+", label: "Year at Layer Axis" },
  { num: "2", suffix: "", label: "Platforms (Android · iOS)" },
  { num: "1", suffix: "", label: "Live Play Store app" },
  { num: "6", suffix: "", label: "Languages localised" },
];

export default function Hero() {
  const [displayText, setDisplayText] = useState("");
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  const statsRef = useRef(null);
  const statsInView = useInView(statsRef, { once: true });

  useEffect(() => {
    const phrase = phrases[phraseIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting) {
      if (charIndex < phrase.length) {
        timeout = setTimeout(() => {
          setDisplayText(phrase.slice(0, charIndex + 1));
          setCharIndex((c) => c + 1);
        }, 60);
      } else {
        timeout = setTimeout(() => setDeleting(true), 1800);
      }
    } else {
      if (charIndex > 0) {
        timeout = setTimeout(() => {
          setDisplayText(phrase.slice(0, charIndex - 1));
          setCharIndex((c) => c - 1);
        }, 35);
      } else {
        setDeleting(false);
        setPhraseIndex((p) => (p + 1) % phrases.length);
      }
    }

    return () => clearTimeout(timeout);
  }, [charIndex, deleting, phraseIndex]);

  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "8rem 2rem 4rem",
        maxWidth: "820px",
        margin: "0 auto",
        position: "relative",
      }}
    >
      {/* Subtle background glow */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          top: "30%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "500px",
          height: "500px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(108,99,255,0.12) 0%, transparent 70%)",
          pointerEvents: "none",
          zIndex: -1,
        }}
      />

      {/* Eyebrow */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, ease: "easeOut" }}
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "0.5rem",
          fontSize: "0.8rem",
          letterSpacing: "0.1em",
          color: "var(--accent-soft)",
          textTransform: "uppercase",
          marginBottom: "1.5rem",
          fontFamily: "'Space Grotesk', sans-serif",
        }}
      >
        <span
          style={{
            width: "7px",
            height: "7px",
            borderRadius: "50%",
            background: "var(--green)",
            boxShadow: "0 0 8px var(--green)",
            display: "inline-block",
            animation: "pulse 2s ease-in-out infinite",
          }}
        />
        Available for opportunities
      </motion.div>

      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
        style={{
          fontFamily: "'Space Grotesk', sans-serif",
          fontSize: "clamp(2.2rem, 5.5vw, 3.6rem)",
          fontWeight: 700,
          lineHeight: 1.1,
          letterSpacing: "-0.02em",
          marginBottom: "1rem",
          color: "var(--text)",
        }}
      >
        Habeebah Sulayman
        <br />
        <span
          style={{
            background:
              "linear-gradient(120deg, var(--accent), var(--accent-soft))",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          Mobile Software Engineer
        </span>
      </motion.h1>

      {/* Terminal typewriter */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        style={{
          fontFamily: "'Space Grotesk', monospace",
          fontSize: "clamp(1rem, 2vw, 1.15rem)",
          color: "var(--accent-soft)",
          marginBottom: "1.8rem",
          minHeight: "1.8em",
        }}
      >
        {displayText}
        <span
          style={{
            display: "inline-block",
            width: "2px",
            height: "1em",
            background: "var(--accent)",
            marginLeft: "2px",
            verticalAlign: "text-bottom",
            animation: "blink 1s step-end infinite",
          }}
        />
      </motion.div>

      {/* Bio */}
      <motion.p
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        style={{
          color: "var(--text-muted)",
          fontSize: "1.05rem",
          maxWidth: "580px",
          marginBottom: "2.5rem",
          lineHeight: 1.75,
        }}
      >
        I build cross-platform mobile apps with{" "}
        <strong style={{ color: "var(--text)" }}>Kotlin Multiplatform</strong> —
        from shared business logic to native UI, backend integrations, and Play
        Store deployment. Currently shipping an AI assistant at{" "}
        <strong style={{ color: "var(--text)" }}>Layer Axis</strong>, London.
      </motion.p>

      {/* CTAs */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}
      >
        <button
          onClick={() => scrollTo("projects")}
          style={{
            background: "var(--accent)",
            color: "#fff",
            padding: "0.75rem 1.6rem",
            borderRadius: "8px",
            fontWeight: 500,
            fontSize: "0.95rem",
            border: "none",
            cursor: "pointer",
            transition: "background 0.2s, transform 0.15s",
            fontFamily: "'Inter', sans-serif",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = "#5850E8";
            e.currentTarget.style.transform = "translateY(-1px)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "var(--accent)";
            e.currentTarget.style.transform = "translateY(0)";
          }}
        >
          View my work
        </button>
        <button
          onClick={() => scrollTo("experience")}
          style={{
            background: "transparent",
            color: "var(--text)",
            padding: "0.75rem 1.6rem",
            borderRadius: "8px",
            fontWeight: 500,
            fontSize: "0.95rem",
            border: "1px solid var(--border)",
            cursor: "pointer",
            transition: "border-color 0.2s, color 0.2s",
            fontFamily: "'Inter', sans-serif",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = "var(--accent)";
            e.currentTarget.style.color = "var(--accent-soft)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = "var(--border)";
            e.currentTarget.style.color = "var(--text)";
          }}
        >
          Experience
        </button>
      </motion.div>

      {/* Stats */}
      <motion.div
        ref={statsRef}
        initial={{ opacity: 0, y: 20 }}
        animate={statsInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.2 }}
        style={{
          display: "flex",
          gap: "2.5rem",
          flexWrap: "wrap",
          marginTop: "3rem",
          paddingTop: "2rem",
          borderTop: "1px solid var(--border)",
        }}
      >
        {stats.map(({ num, suffix, label }) => (
          <div key={label}>
            <div
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: "1.6rem",
                fontWeight: 700,
                color: "var(--text)",
              }}
            >
              {num}
              <span style={{ color: "var(--accent)" }}>{suffix}</span>
            </div>
            <div
              style={{
                color: "var(--text-muted)",
                fontSize: "0.8rem",
                marginTop: "2px",
              }}
            >
              {label}
            </div>
          </div>
        ))}
      </motion.div>

      {/* Keyframe styles */}
      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.4; }
        }
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
      `}</style>
    </section>
  );
}
