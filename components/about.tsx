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
  {
    label: "Location",
    value: "Nigeria · Open to remote roles (Worldwide)",
  },
  {
    label: "Core Stack",
    value: "Kotlin · KMP · Jetpack Compose · Ktor · SQLDelight",
  },
];

const About: React.FC = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section
      id="about"
      style={{ background: "var(--surface)", padding: "5rem 2rem" }}
    >
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
              color: "var(--accent-soft)",
              fontWeight: 600,
              marginBottom: "0.5rem",
              fontFamily: "'Plus Jakarta Sans', sans-serif",
            }}
          >
            About
          </p>
          <h2
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontSize: "clamp(1.6rem, 3.5vw, 2.2rem)",
              fontWeight: 700,
              letterSpacing: "-0.01em",
              marginBottom: "2.2rem",
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
            gridTemplateColumns: "1.25fr 0.9fr",
            gap: "2.5rem",
            alignItems: "start",
          }}
          className="about-grid"
        >
          {/* Left — concise bio text */}
          <ScrollReveal delay={0.1}>
            <div
              style={{
                color: "var(--text-muted)",
                fontSize: "0.98rem",
                lineHeight: 1.8,
              }}
            >
              <p style={{ margin: 0 }}>
                I&apos;m a mobile software engineer based in{" "}
                <strong style={{ color: "var(--text)" }}>Nigeria</strong>,
                building cross-platform{" "}
                <strong style={{ color: "var(--text)" }}>
                  Android and iOS
                </strong>{" "}
                apps with{" "}
                <strong style={{ color: "var(--text)" }}>
                  Kotlin Multiplatform
                </strong>{" "}
                and{" "}
                <strong style={{ color: "var(--text)" }}>
                  Jetpack Compose
                </strong>
                . I care about clean architecture, reliable local persistence,
                and shipping well-tested features end-to-end from UI to store
                release.
              </p>
            </div>
          </ScrollReveal>

          {/* Right — detail cards */}
          <ScrollReveal delay={0.2}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "0.75rem",
              }}
            >
              {details.map(({ label, value }) => (
                <div
                  key={label}
                  style={{
                    background: "var(--bg)",
                    border: "1px solid var(--border)",
                    borderRadius: "10px",
                    padding: "1rem 1.25rem",
                  }}
                >
                  <p
                    style={{
                      fontSize: "0.72rem",
                      color: "var(--accent-soft)",
                      textTransform: "uppercase",
                      letterSpacing: "0.1em",
                      fontWeight: 600,
                      marginBottom: "0.25rem",
                      fontFamily: "'Plus Jakarta Sans', sans-serif",
                    }}
                  >
                    {label}
                  </p>
                  <p
                    style={{
                      fontSize: "0.9rem",
                      color: "var(--text)",
                      fontFamily: "'Plus Jakarta Sans', sans-serif",
                      fontWeight: 500,
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
