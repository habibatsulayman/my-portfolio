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

const codeStyle: React.CSSProperties = {
  color: "var(--accent-soft)",
  fontSize: "0.85rem",
};

const caseStudies = [
  {
    title: "Chat search without race conditions",
    project: "Rova",
    problem:
      "Search-as-you-type over local chat history can fire overlapping queries and show stale results.",
    approach: (
      <>
        Debounced <code style={codeStyle}>StateFlow</code> queries against
        SQLDelight, with <code style={codeStyle}>flatMapLatest</code> cancelling
        outdated ones.
      </>
    ),
    result: "Real-time search shipped in Rova.",
  },
  {
    title: "Arabic plurals on Android",
    project: "Duplicate Contacts Remover",
    problem:
      "Arabic has six plural forms, and a hardcoded English plural hack couldn’t handle them.",
    approach: (
      <>
        Moved to Android&apos;s plural resources with{" "}
        <code style={codeStyle}>pluralStringResource</code>, covering all six
        forms.
      </>
    ),
    result: "Properly internationalised strings across 6 languages in a live app.",
  },
  {
    title: "Planning a month with 50:30:20",
    project: "Spendly",
    problem:
      "Spendly only tracked past spending, so I couldn't plan a month with the 50:30:20 rule I follow.",
    approach: (
      <>
        Income logged per stream feeds a configurable 50/30/20 split across
        Needs, Investment and Wants, and a monthly checklist updates each
        budget&apos;s balance as items are ticked off. Built with Compose, MVVM
        and Room.
      </>
    ),
    result: "Built and in daily use for planning my monthly budget.",
  },
];

const labelStyle: React.CSSProperties = {
  display: "block",
  fontSize: "0.7rem",
  textTransform: "uppercase",
  letterSpacing: "0.1em",
  color: "var(--accent-soft)",
  fontWeight: 600,
  fontFamily: "'Plus Jakarta Sans', sans-serif",
  marginBottom: "0.3rem",
};

const bodyStyle: React.CSSProperties = {
  margin: 0,
  fontSize: "0.9rem",
  color: "var(--text-muted)",
  lineHeight: 1.65,
};

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

        {/* Stacked full-width cards; Problem / Approach / Result sit side by side on desktop */}
        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          {caseStudies.map((study, i) => (
            <ScrollReveal key={study.title} delay={i * 0.1}>
              <article
                style={{
                  background: "var(--surface)",
                  border: "1px solid var(--border)",
                  borderRadius: "12px",
                  padding: "1.6rem 1.75rem",
                  transition: "border-color 0.2s",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.borderColor = "var(--accent)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.borderColor = "var(--border)")
                }
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "baseline",
                    justifyContent: "space-between",
                    flexWrap: "wrap",
                    gap: "0.5rem 1rem",
                    marginBottom: "1.2rem",
                  }}
                >
                  <h3
                    style={{
                      fontFamily: "'Plus Jakarta Sans', sans-serif",
                      fontSize: "1.1rem",
                      fontWeight: 700,
                      color: "var(--text)",
                      margin: 0,
                    }}
                  >
                    {study.title}
                  </h3>
                  <span
                    style={{
                      fontSize: "0.75rem",
                      fontWeight: 600,
                      color: "var(--text-muted)",
                      fontFamily: "'Plus Jakarta Sans', sans-serif",
                    }}
                  >
                    {study.project}
                  </span>
                </div>

                <div className="cs-grid">
                  <div>
                    <span style={labelStyle}>Problem</span>
                    <p style={bodyStyle}>{study.problem}</p>
                  </div>
                  <div>
                    <span style={labelStyle}>Approach</span>
                    <p style={bodyStyle}>{study.approach}</p>
                  </div>
                  <div>
                    <span style={{ ...labelStyle, color: "var(--green)" }}>
                      Result
                    </span>
                    <p
                      style={{
                        ...bodyStyle,
                        color: "var(--text)",
                        fontWeight: 500,
                      }}
                    >
                      {study.result}
                    </p>
                  </div>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>

      <style>{`
        .cs-grid {
          display: grid;
          grid-template-columns: 1fr 1.3fr 1fr;
          gap: 1.5rem;
        }
        @media (max-width: 760px) {
          .cs-grid {
            grid-template-columns: 1fr;
            gap: 1rem;
          }
        }
      `}</style>
    </section>
  );
}
