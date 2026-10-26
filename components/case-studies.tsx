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

const caseStudies = [
  {
    title: "Chat search without race conditions",
    problem:
      "Search-as-you-type over local chat history can fire overlapping queries and show stale results.",
    approach: (
      <>
        Debounced{" "}
        <code style={{ color: "var(--accent-soft)", fontSize: "0.85rem" }}>
          StateFlow
        </code>{" "}
        queries against SQLDelight, with{" "}
        <code style={{ color: "var(--accent-soft)", fontSize: "0.85rem" }}>
          flatMapLatest
        </code>{" "}
        cancelling outdated ones.
      </>
    ),
    result: "Real-time search shipped in Rova.",
  },
  {
    title: "Arabic plurals on Android",
    problem:
      "Arabic has six plural forms, and a hardcoded English plural hack couldn’t handle them.",
    approach: (
      <>
        Moved to Android&apos;s plural resources with{" "}
        <code style={{ color: "var(--accent-soft)", fontSize: "0.85rem" }}>
          pluralStringResource
        </code>
        , covering all six forms.
      </>
    ),
    result: "Properly internationalised strings across 6 languages in a live app.",
  },
];

export default function CaseStudies() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="case-studies" style={{ padding: "5rem 2rem" }}>
      <div style={{ maxWidth: "900px", margin: "0 auto" }}>
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
            Case studies
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
            How I think through problems
          </h2>
        </motion.div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "1.25rem",
          }}
        >
          {caseStudies.map((study, i) => (
            <ScrollReveal key={study.title} delay={i * 0.12}>
              <div
                style={{
                  background: "var(--surface)",
                  border: "1px solid var(--border)",
                  borderRadius: "12px",
                  padding: "1.6rem",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  gap: "1rem",
                  transition: "border-color 0.2s",
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
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    fontSize: "1.08rem",
                    fontWeight: 700,
                    color: "var(--text)",
                    margin: 0,
                  }}
                >
                  {study.title}
                </h3>

                <div>
                  <span
                    style={{
                      display: "block",
                      fontSize: "0.7rem",
                      textTransform: "uppercase",
                      letterSpacing: "0.1em",
                      color: "var(--accent-soft)",
                      fontWeight: 600,
                      fontFamily: "'Plus Jakarta Sans', sans-serif",
                      marginBottom: "0.2rem",
                    }}
                  >
                    Problem
                  </span>
                  <p
                    style={{
                      margin: 0,
                      fontSize: "0.9rem",
                      color: "var(--text-muted)",
                      lineHeight: 1.6,
                    }}
                  >
                    {study.problem}
                  </p>
                </div>

                <div>
                  <span
                    style={{
                      display: "block",
                      fontSize: "0.7rem",
                      textTransform: "uppercase",
                      letterSpacing: "0.1em",
                      color: "var(--accent-soft)",
                      fontWeight: 600,
                      fontFamily: "'Plus Jakarta Sans', sans-serif",
                      marginBottom: "0.2rem",
                    }}
                  >
                    Approach
                  </span>
                  <p
                    style={{
                      margin: 0,
                      fontSize: "0.9rem",
                      color: "var(--text-muted)",
                      lineHeight: 1.6,
                    }}
                  >
                    {study.approach}
                  </p>
                </div>

                <div style={{ marginTop: "auto" }}>
                  <span
                    style={{
                      display: "block",
                      fontSize: "0.7rem",
                      textTransform: "uppercase",
                      letterSpacing: "0.1em",
                      color: "var(--green)",
                      fontWeight: 600,
                      fontFamily: "'Plus Jakarta Sans', sans-serif",
                      marginBottom: "0.2rem",
                    }}
                  >
                    Result
                  </span>
                  <p
                    style={{
                      margin: 0,
                      fontSize: "0.9rem",
                      color: "var(--text)",
                      fontWeight: 500,
                      lineHeight: 1.6,
                    }}
                  >
                    {study.result}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
