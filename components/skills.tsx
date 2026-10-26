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

const skillGroups = [
  {
    label: "Mobile",
    chips: [
      "Kotlin",
      "KMP",
      "Jetpack Compose",
      "Android SDK",
      "Metro DI",
      "Clean Architecture",
      "MVVM",
    ],
  },
  {
    label: "Data & backend",
    chips: [
      "SQLDelight",
      "Ktor",
      "Firebase",
      "RevenueCat",
      "PostgreSQL",
      "REST",
    ],
  },
  {
    label: "Testing & tools",
    chips: ["MockK", "JUnit", "Git", "Gradle", "BuildKonfig"],
  },
  {
    label: "Web",
    chips: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js"],
  },
];

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section
      id="skills"
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
            Stack
          </p>
          <h2
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontSize: "clamp(1.6rem, 3.5vw, 2.2rem)",
              fontWeight: 700,
              letterSpacing: "-0.01em",
              marginBottom: "2.5rem",
              color: "var(--text)",
            }}
          >
            Skills
          </h2>
        </motion.div>

        {/* Skills grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: "1.5rem",
          }}
          className="skills-grid"
        >
          {skillGroups.map((group, i) => (
            <ScrollReveal key={group.label} delay={i * 0.1}>
              <div
                style={{
                  background: "var(--bg)",
                  border: "1px solid var(--border)",
                  borderRadius: "12px",
                  padding: "1.4rem",
                  transition: "border-color 0.2s",
                  height: "100%",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.borderColor = "var(--accent)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.borderColor = "var(--border)")
                }
              >
                <h3
                  style={{
                    fontSize: "0.75rem",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: "var(--accent-soft)",
                    fontWeight: 600,
                    marginBottom: "1rem",
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    marginTop: 0,
                  }}
                >
                  {group.label}
                </h3>
                <div
                  style={{ display: "flex", flexWrap: "wrap", gap: "0.45rem" }}
                >
                  {group.chips.map((chip) => (
                    <span
                      key={chip}
                      style={{
                        fontSize: "0.82rem",
                        padding: "0.3rem 0.75rem",
                        borderRadius: "20px",
                        background: "var(--surface-2)",
                        border: "1px solid var(--border)",
                        color: "var(--text)",
                        fontFamily: "'Plus Jakarta Sans', sans-serif",
                        fontWeight: 500,
                      }}
                    >
                      {chip}
                    </span>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
