"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

function ScrollReveal({
  children,
  delay = 0,
}: {
  children: React.ReactNode;
  delay?: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, ease: "easeOut", delay }}
    >
      {children}
    </motion.div>
  );
}

const details = [
  { label: "Location", value: "Osun, Nigeria · Open to remote (UK / EU)" },
  { label: "Experience", value: "Mobile Engineer · Kotlin · KMP · Android · iOS" },
  { label: "Primary stack", value: "Kotlin · KMP · Jetpack Compose · Ktor" },
  {
    label: "Background",
    value: "BSc Microbiology, University of Ilorin — First in Faculty",
  },
  {
    label: "Interests",
    value: "Mobile health · Bioinformatics · Infectious disease tech",
  },
];

const About: React.FC = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="about" style={{ padding: "5rem 2rem" }}>
      <div style={{ maxWidth: "900px", margin: "0 auto" }}>
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55 }}
        >
          <p
            style={{
              fontSize: "0.75rem",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "var(--accent)",
              fontWeight: 600,
              marginBottom: "0.5rem",
              fontFamily: "'Space Grotesk', sans-serif",
            }}
          >
            Background
          </p>
          <h2
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: "clamp(1.6rem, 3.5vw, 2.2rem)",
              fontWeight: 700,
              letterSpacing: "-0.01em",
              marginBottom: "2.5rem",
              color: "var(--text)",
            }}
          >
            About me
          </h2>
        </motion.div>

        {/* Two-column layout */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "3rem",
            alignItems: "start",
          }}
          className="about-grid"
        >
          {/* Left — bio text */}
          <ScrollReveal delay={0.1}>
            <div
              style={{
                color: "var(--text-muted)",
                fontSize: "0.95rem",
                lineHeight: 1.8,
              }}
            >
              <p style={{ marginBottom: "1rem" }}>
                I&apos;m a mobile software engineer based in{" "}
                <strong style={{ color: "var(--text)" }}>Osun, Nigeria</strong>,
                with experience building cross-platform Android and iOS apps
                using Kotlin Multiplatform. I&apos;ve worked with reputable
                companies in the{" "}
                <strong style={{ color: "var(--text)" }}>UK</strong>, shipping
                production-grade features end-to-end — from architecture
                through backend integrations to Play Store deployment.
              </p>
              <p>
                Before software, I studied{" "}
                <strong style={{ color: "var(--text)" }}>Microbiology</strong>{" "}
                at the University of Ilorin, graduating top of my faculty. That
                scientific background shapes how I think about problems —
                systematically, with attention to edge cases — and it&apos;s the
                reason I&apos;m drawn to healthtech and bioinformatics as
                long-term application areas.
              </p>
            </div>
          </ScrollReveal>

          {/* Right — detail cards */}
          <ScrollReveal delay={0.2}>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              {details.map(({ label, value }) => (
                <div
                  key={label}
                  style={{
                    background: "var(--surface)",
                    border: "1px solid var(--border)",
                    borderRadius: "10px",
                    padding: "1rem 1.25rem",
                  }}
                >
                  <p
                    style={{
                      fontSize: "0.72rem",
                      color: "var(--accent)",
                      textTransform: "uppercase",
                      letterSpacing: "0.1em",
                      fontWeight: 600,
                      marginBottom: "0.3rem",
                      fontFamily: "'Space Grotesk', sans-serif",
                    }}
                  >
                    {label}
                  </p>
                  <p
                    style={{
                      fontSize: "0.88rem",
                      color: "var(--text)",
                      fontFamily: "'Space Grotesk', sans-serif",
                    }}
                  >
                    {value}
                  </p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>

      <style>{`
        @media (max-width: 680px) {
          .about-grid {
            grid-template-columns: 1fr !important;
            gap: 1.5rem !important;
          }
        }
      `}</style>
    </section>
  );
};

export default About;
