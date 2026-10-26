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
    label: "Education",
    value: "BSc Microbiology · University of Ilorin · First in Faculty",
  },
  {
    label: "Open to",
    value: "Remote roles (Worldwide)",
  },
  {
    label: "Interests",
    value: "Mobile health, bioinformatics, infectious disease tech",
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
            From microbiology to mobile
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
          {/* Left — bio text */}
          <ScrollReveal delay={0.1}>
            <div
              style={{
                color: "var(--text-muted)",
                fontSize: "0.98rem",
                lineHeight: 1.8,
              }}
            >
              <p style={{ marginBottom: "1.1rem" }}>
                I&apos;m a mobile software engineer based in{" "}
                <strong style={{ color: "var(--text)" }}>Osun, Nigeria</strong>.
                I build Android and iOS apps with Kotlin Multiplatform and ship
                production features end-to-end — from architecture and backend
                integrations to store release.
              </p>
              <p>
                Before software, I studied{" "}
                <strong style={{ color: "var(--text)" }}>Microbiology</strong>{" "}
                at the University of Ilorin and graduated top of my faculty.
                That background shapes how I work: systematically, with
                attention to edge cases. It&apos;s also why I&apos;m drawn to
                healthtech and bioinformatics.
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
