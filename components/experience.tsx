"use client";

import React, { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";

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
    company: "Layer Axis",
    role: "Software Engineer",
    date: "April 2025 – Present · London (Remote)",
    badge: { label: "Live", type: "live" },
    description: (
      <>
        Building <strong style={{ color: "var(--text)" }}>Rova</strong>, a
        cross-platform AI assistant in Kotlin Multiplatform for Android and iOS.
        Built real-time chat history search using debounced{" "}
        <code style={{ color: "var(--accent-soft)", fontSize: "0.84rem" }}>
          StateFlow
        </code>{" "}
        queries on SQLDelight, with{" "}
        <code style={{ color: "var(--accent-soft)", fontSize: "0.84rem" }}>
          flatMapLatest
        </code>{" "}
        to prevent race conditions. Implemented a persistent{" "}
        <strong style={{ color: "var(--text)" }}>Custom Instructions</strong>{" "}
        system and cross-platform in-app review prompts (Play Core &amp;
        StoreKit). Built the settings screen with Light / Dark / System theme
        switching persisted in DataStore, FAQ / Privacy / Terms links, and clear
        chat history. Wrote 10+ unit tests with MockK and{" "}
        <code style={{ color: "var(--accent-soft)", fontSize: "0.84rem" }}>
          UnconfinedTestDispatcher
        </code>
        . Also run marketing for Rova and its sister app Cove across Twitter,
        WhatsApp and LinkedIn.
      </>
    ),
    tags: [
      "Kotlin Multiplatform",
      "Jetpack Compose",
      "Ktor",
      "Metro DI",
      "MVVM",
    ],
    links: [
      {
        label: "Layer Axis on LinkedIn ↗",
        href: "https://www.linkedin.com/company/layer-axis/",
      },
      { label: "Rova website ↗", href: "https://rovaai.app" },
    ],
  },
  {
    company: "Duplicate Contacts Remover",
    role: "Contributor, Localisation",
    date: "May 2026 – June 2026 · Layer Axis",
    badge: { label: "Live on Play Store", type: "live" },
    description: (
      <>
        Expanded a production Android app from English to 6 languages: 12
        resource files and 285 localised strings. Implemented Arabic&apos;s
        six-form plural system, added Android 13&apos;s per-app language picker,
        and integrated the Play In-App Review API with snooze logic that
        respects Google&apos;s quotas.
      </>
    ),
    tags: ["Android", "i18n / L10n", "Play In-App Review"],
    links: [
      {
        label: "Layer Axis on LinkedIn ↗",
        href: "https://www.linkedin.com/company/layer-axis/",
      },
      {
        label: "Play Store ↗",
        href: "https://play.google.com/store/apps/details?id=com.layeraxis.duplicatecontacts",
      },
    ],
  },
];

const badgeStyles: Record<string, React.CSSProperties> = {
  live: {
    background: "var(--green-bg)",
    color: "var(--green)",
  },
  pre: {
    background: "var(--accent-glow)",
    color: "var(--accent-soft)",
  },
};

function ExperienceCard({
  exp,
  delay,
}: {
  exp: (typeof experiences)[0];
  delay: number;
}) {
  const [open, setOpen] = useState(false);

  return (
    <ScrollReveal delay={delay}>
      <div
        style={{
          background: "var(--bg)",
          border: "1px solid var(--border)",
          borderRadius: "12px",
          overflow: "hidden",
          transition: "border-color 0.2s",
          cursor: "default",
        }}
        className="exp-card"
        onMouseEnter={(e) =>
          (e.currentTarget.style.borderColor = "var(--accent)")
        }
        onMouseLeave={(e) =>
          (e.currentTarget.style.borderColor = "var(--border)")
        }
      >
        {/* Header — always visible, clickable on mobile */}
        <button
          className="exp-header"
          onClick={() => setOpen((o) => !o)}
          aria-expanded={open}
          style={{
            width: "100%",
            background: "none",
            border: "none",
            cursor: "pointer",
            textAlign: "left",
            padding: "1.8rem 2rem",
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "space-between",
            gap: "1rem",
          }}
        >
          {/* Left: company + role + date (mobile) */}
          <div style={{ flex: 1, minWidth: 0 }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.6rem",
                flexWrap: "wrap",
                marginBottom: "0.25rem",
              }}
            >
              <span
                style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontSize: "1.08rem",
                  fontWeight: 700,
                  color: "var(--text)",
                }}
              >
                {exp.company}
              </span>
              <span
                className="badge-mobile"
                style={{
                  display: "inline-block",
                  fontSize: "0.65rem",
                  fontWeight: 600,
                  padding: "0.18rem 0.55rem",
                  borderRadius: "20px",
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                  whiteSpace: "nowrap",
                  ...badgeStyles[exp.badge.type],
                }}
              >
                {exp.badge.label}
              </span>
            </div>
            <div
              style={{
                color: "var(--accent-soft)",
                fontSize: "0.92rem",
                fontWeight: 600,
              }}
            >
              {exp.role}
            </div>
            <div
              className="date-mobile"
              style={{
                fontSize: "0.78rem",
                color: "var(--text-muted)",
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                marginTop: "0.3rem",
                display: "none",
              }}
            >
              {exp.date}
            </div>
          </div>

          {/* Right: date + badge (desktop) + chevron (mobile) */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-end",
              gap: "0.3rem",
              flexShrink: 0,
            }}
          >
            <span
              className="date-desktop"
              style={{
                fontSize: "0.8rem",
                color: "var(--text-muted)",
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                whiteSpace: "nowrap",
              }}
            >
              {exp.date}
            </span>
            <span
              className="badge-desktop"
              style={{
                display: "inline-block",
                fontSize: "0.7rem",
                fontWeight: 600,
                padding: "0.2rem 0.6rem",
                borderRadius: "20px",
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                whiteSpace: "nowrap",
                ...badgeStyles[exp.badge.type],
              }}
            >
              {exp.badge.label}
            </span>
            <span
              className="exp-chevron"
              aria-hidden
              style={{
                fontSize: "1.1rem",
                color: "var(--text-muted)",
                transition: "transform 0.25s ease",
                transform: open ? "rotate(180deg)" : "rotate(0deg)",
                display: "none",
                lineHeight: 1,
                marginTop: "0.15rem",
              }}
            >
              ▾
            </span>
          </div>
        </button>

        {/* Expandable body */}
        <div className="exp-body-desktop" style={{ padding: "0 2rem 1.8rem" }}>
          <ExpBody exp={exp} />
        </div>

        <AnimatePresence initial={false}>
          {open && (
            <motion.div
              className="exp-body-mobile"
              key="body"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              style={{ overflow: "hidden" }}
            >
              <div style={{ padding: "0 1.25rem 1.5rem" }}>
                <ExpBody exp={exp} />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <style>{`
        @media (min-width: 680px) {
          .exp-header { cursor: default !important; pointer-events: none; }
          .exp-body-desktop { display: block !important; }
          .exp-body-mobile { display: none !important; }
          .badge-mobile { display: none !important; }
          .badge-desktop { display: inline-block !important; }
          .date-mobile { display: none !important; }
          .date-desktop { display: inline-block !important; }
          .exp-chevron { display: none !important; }
        }

        @media (max-width: 679px) {
          .exp-header { cursor: pointer !important; pointer-events: auto; padding: 1.25rem !important; }
          .exp-body-desktop { display: none !important; }
          .exp-body-mobile { display: block; }
          .badge-mobile { display: inline-block !important; }
          .badge-desktop { display: none !important; }
          .date-mobile { display: block !important; }
          .date-desktop { display: none !important; }
          .exp-chevron { display: inline-block !important; }
        }
      `}</style>
    </ScrollReveal>
  );
}

function ExpBody({ exp }: { exp: (typeof experiences)[0] }) {
  return (
    <>
      <p
        style={{
          color: "var(--text-muted)",
          fontSize: "0.94rem",
          lineHeight: 1.75,
          marginBottom: "1.2rem",
        }}
      >
        {exp.description}
      </p>

      {/* Tags */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "0.4rem",
          marginBottom: "1rem",
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
              color: "var(--text)",
              border: "1px solid var(--border)",
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontWeight: 500,
            }}
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Links */}
      {exp.links && exp.links.length > 0 && (
        <div style={{ display: "flex", gap: "1.1rem", flexWrap: "wrap" }}>
          {exp.links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontSize: "0.82rem",
                fontWeight: 600,
                color: "var(--accent-soft)",
                textDecoration: "none",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.color = "var(--text)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = "var(--accent-soft)")
              }
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </>
  );
}

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
              color: "var(--accent-soft)",
              fontWeight: 600,
              marginBottom: "0.5rem",
              fontFamily: "'Plus Jakarta Sans', sans-serif",
            }}
          >
            Career
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
            Experience
          </h2>
        </motion.div>

        {/* Cards */}
        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          {experiences.map((exp, i) => (
            <ExperienceCard key={exp.company} exp={exp} delay={i * 0.12} />
          ))}
        </div>

        {/* Mobile hint */}
        <p
          className="exp-mobile-hint"
          style={{
            textAlign: "center",
            color: "var(--text-muted)",
            fontSize: "0.78rem",
            marginTop: "1.25rem",
            display: "none",
          }}
        >
          Tap a card to expand details
        </p>
      </div>

      <style>{`
        @media (max-width: 679px) {
          .exp-mobile-hint { display: block !important; }
        }
      `}</style>
    </section>
  );
}
