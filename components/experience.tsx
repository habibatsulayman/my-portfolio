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

const experiences = [
  {
    role: "Software Engineer",
    company: "Layer Axis · London (Remote)",
    date: "Apr 2025 — Present",
    badge: { label: "Pre-launch", type: "pre" },
    description: (
      <>
        Full-stack mobile engineer on{" "}
        <strong style={{ color: "var(--text)" }}>AssistantX</strong> — a
        cross-platform AI assistant app built in Kotlin Multiplatform, targeting
        Android and iOS from a shared codebase. Part of a team; own
        the full feature lifecycle from design through PR review by the CTO.
      </>
    ),
    bullets: [
      <>
        Designed and implemented an end-to-end account deletion flow across
        Firebase Auth Admin SDK, Ktor/PostgreSQL backend, and RevenueCat —
        sequenced to prevent orphaned records; compliant with GDPR and Play
        Store data deletion policies.
      </>,
      <>
        Built a real-time chat history search bar using debounced{" "}
        <code style={{ color: "var(--accent-soft)", fontSize: "0.82rem" }}>
          StateFlow
        </code>{" "}
        queries against SQLDelight, with{" "}
        <code style={{ color: "var(--accent-soft)", fontSize: "0.82rem" }}>
          flatMapLatest
        </code>{" "}
        cancellation to prevent race conditions.
      </>,
      <>
        Implemented in-app theme switching (Light / Dark / System) persisted
        via DataStore Preferences, with zero-flicker startup using{" "}
        <code style={{ color: "var(--accent-soft)", fontSize: "0.82rem" }}>
          runBlocking
        </code>{" "}
        initial value.
      </>,
      <>
        Authored 8+ unit tests with MockK and{" "}
        <code style={{ color: "var(--accent-soft)", fontSize: "0.82rem" }}>
          UnconfinedTestDispatcher
        </code>
        , covering theme switching, URL routing, and chat history clearing.
      </>,
    ],
    tags: [
      "Kotlin Multiplatform",
      "Jetpack Compose",
      "SQLDelight",
      "Ktor",
      "Firebase",
      "RevenueCat",
      "Clean Architecture",
      "MVVM",
      "MockK",
    ],
  },
  {
    role: "Contributor — Localisation",
    company: "Duplicate Contacts Remover · Layer Axis",
    date: "May — Jun 2026",
    badge: { label: "Live on Play Store", type: "live" },
    description: (
      <>
        Expanded a production Android app from English-only to 6 languages,
        increasing accessibility for an estimated 2+ billion speakers of
        Spanish, Arabic, Hindi, French, and Bengali. Also implemented the
        Google Play in-app review flow to surface timely rating prompts.
      </>
    ),
    bullets: [
      <>
        Created 12 new resource files across 5 locales, translating 57 string
        resources (285 localised strings total).
      </>,
      <>
        Implemented Arabic&apos;s 6-form plural system (
        <code style={{ color: "var(--accent-soft)", fontSize: "0.82rem" }}>
          zero / one / two / few / many / other
        </code>
        ) using Android&apos;s plural resource API.
      </>,
      <>
        Added{" "}
        <code style={{ color: "var(--accent-soft)", fontSize: "0.82rem" }}>
          android:localeConfig
        </code>{" "}
        to enable Android 13&apos;s per-app language preference picker in
        Settings.
      </>,
      <>
        Migrated a hardcoded English plural hack to a proper{" "}
        <code style={{ color: "var(--accent-soft)", fontSize: "0.82rem" }}>
          pluralStringResource
        </code>{" "}
        call — cleaner and fully internationalised.
      </>,
      <>
        Integrated the Google Play In-App Review API (
        <code style={{ color: "var(--accent-soft)", fontSize: "0.82rem" }}>
          play:review-ktx 2.0.2
        </code>
        ) — flow triggered automatically after a successful merge operation,
        using{" "}
        <code style={{ color: "var(--accent-soft)", fontSize: "0.82rem" }}>
          RateUsState
        </code>{" "}
        in DataStore with snooze logic to respect Google&apos;s quota limits.
      </>,
    ],
    tags: [
      "Android",
      "Kotlin",
      "Jetpack Compose",
      "i18n / L10n",
      "Android Resources",
      "Android 13 API",
      "Play In-App Review",
    ],
  },
];

const badgeStyles: Record<string, React.CSSProperties> = {
  live: {
    background: "rgba(74, 222, 128, 0.15)",
    color: "var(--green)",
  },
  pre: {
    background: "var(--accent-glow)",
    color: "var(--accent-soft)",
  },
};

export default function Experience() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section
      id="experience"
      style={{
        background: "var(--surface)",
        padding: "5rem 2rem",
      }}
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
              color: "var(--accent)",
              fontWeight: 600,
              marginBottom: "0.5rem",
              fontFamily: "'Space Grotesk', sans-serif",
            }}
          >
            Career
          </p>
          <h2
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: "clamp(1.6rem, 3.5vw, 2.2rem)",
              fontWeight: 700,
              letterSpacing: "-0.01em",
              marginBottom: "0.75rem",
              color: "var(--text)",
            }}
          >
            Experience
          </h2>
          <p
            style={{
              color: "var(--text-muted)",
              fontSize: "1rem",
              maxWidth: "520px",
              marginBottom: "3rem",
            }}
          >
            Full-time and contract engineering work on real products, in real
            teams.
          </p>
        </motion.div>

        {/* Cards */}
        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          {experiences.map((exp, i) => (
            <ScrollReveal key={exp.role} delay={i * 0.12}>
              <div
                style={{
                  background: "var(--bg)",
                  border: "1px solid var(--border)",
                  borderRadius: "12px",
                  padding: "1.8rem 2rem",
                  transition: "border-color 0.2s",
                  cursor: "default",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.borderColor = "var(--accent)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.borderColor = "var(--border)")
                }
              >
                {/* Card header */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    justifyContent: "space-between",
                    gap: "1rem",
                    flexWrap: "wrap",
                    marginBottom: "0.75rem",
                  }}
                >
                  <div>
                    <div
                      style={{
                        fontFamily: "'Space Grotesk', sans-serif",
                        fontSize: "1.05rem",
                        fontWeight: 600,
                        color: "var(--text)",
                      }}
                    >
                      {exp.role}
                    </div>
                    <div
                      style={{
                        color: "var(--accent-soft)",
                        fontSize: "0.95rem",
                        fontWeight: 500,
                        marginTop: "0.15rem",
                      }}
                    >
                      {exp.company}
                    </div>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "flex-end",
                      gap: "0.3rem",
                    }}
                  >
                    <span
                      style={{
                        fontSize: "0.8rem",
                        color: "var(--text-muted)",
                        fontFamily: "'Space Grotesk', sans-serif",
                        whiteSpace: "nowrap",
                      }}
                    >
                      {exp.date}
                    </span>
                    <span
                      style={{
                        display: "inline-block",
                        fontSize: "0.7rem",
                        fontWeight: 600,
                        padding: "0.2rem 0.6rem",
                        borderRadius: "20px",
                        letterSpacing: "0.06em",
                        textTransform: "uppercase",
                        ...badgeStyles[exp.badge.type],
                      }}
                    >
                      {exp.badge.label}
                    </span>
                  </div>
                </div>

                {/* Description */}
                <p
                  style={{
                    color: "var(--text-muted)",
                    fontSize: "0.92rem",
                    lineHeight: 1.7,
                    marginBottom: "1rem",
                  }}
                >
                  {exp.description}
                </p>

                {/* Bullets */}
                <ul style={{ listStyle: "none", padding: 0, margin: "0 0 1.2rem" }}>
                  {exp.bullets.map((bullet, bi) => (
                    <li
                      key={bi}
                      style={{
                        color: "var(--text-muted)",
                        fontSize: "0.88rem",
                        lineHeight: 1.65,
                        paddingLeft: "1.2rem",
                        position: "relative",
                        marginBottom: "0.35rem",
                      }}
                    >
                      <span
                        style={{
                          position: "absolute",
                          left: 0,
                          color: "var(--accent)",
                          fontSize: "0.8rem",
                        }}
                      >
                        →
                      </span>
                      {bullet}
                    </li>
                  ))}
                </ul>

                {/* Tags */}
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "0.4rem",
                    marginTop: "1rem",
                  }}
                >
                  {exp.tags.map((tag) => (
                    <span
                      key={tag}
                      style={{
                        fontSize: "0.73rem",
                        padding: "0.25rem 0.65rem",
                        borderRadius: "6px",
                        background: "var(--surface-2)",
                        color: "var(--text-muted)",
                        border: "1px solid var(--border)",
                        fontFamily: "'Space Grotesk', sans-serif",
                        fontWeight: 500,
                      }}
                    >
                      {tag}
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
