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

type Badge = { label: string; type: "live" | "pre" | "personal" };

interface Project {
  name: string;
  emoji: string;
  image?: string;
  imageFit?: "cover" | "portrait"; // cover = web screenshot, portrait = phone screenshot
  badge?: Badge;
  description: string;
  tags: string[];
  links: { label: string; href: string }[];
}

const mainProjects: Project[] = [
  {
    name: "AssistantX",
    emoji: "🤖",
    image: "/projects/assistantx.jpg",
    imageFit: "portrait",
    badge: { label: "Pre-launch", type: "pre" },
    description:
      "Cross-platform AI assistant app for Android and iOS built in Kotlin Multiplatform at Layer Axis. I contributed key features including real-time chat search, theme customisation, settings infrastructure, and a GDPR-compliant account deletion flow.",
    tags: ["KMP", "Compose", "SQLDelight", "Firebase"],
    links: [{ label: "Website ↗", href: "https://getassistant.app" }],
  },
  {
    name: "Duplicate Contacts Remover",
    emoji: "📇",
    image: "/projects/duplicate-contacts.PNG",
    imageFit: "portrait",
    badge: { label: "Live", type: "live" },
    description:
      "Production Android app that detects and merges duplicate contacts — built by Layer Axis. I contributed full internationalisation across 6 languages including Arabic's complex 6-form plural system.",
    tags: ["Android", "Kotlin", "i18n"],
    links: [
      {
        label: "Play Store ↗",
        href: "https://play.google.com/store/apps/details?id=com.layeraxis.duplicatecontacts",
      },
      {
        label: "GitHub ↗",
        href: "https://github.com/rasheedsulayman/DuplicateContactsRemover",
      },
    ],
  },
  {
    name: "Spendly",
    emoji: "💸",
    image: "/projects/spendly-homepage.png",
    imageFit: "portrait",
    badge: { label: "Personal Project", type: "personal" },
    description:
      "Android expense tracking app built from scratch with Kotlin and Jetpack Compose. Log, categorise, and review daily spending with a clean Material 3 interface.",
    tags: ["Kotlin", "Compose", "Android"],
    links: [
      {
        label: "GitHub ↗",
        href: "https://github.com/habibatsulayman/spendly",
      },
    ],
  },
  {
    name: "Smart Chef",
    emoji: "🍽️",
    image: "/projects/smart-chef.png",
    badge: { label: "Personal Project", type: "personal" },
    description:
      "AI-powered recipe suggester — enter ingredients you have, get tailored recipe ideas. Built with web technologies and integrated with an AI model API.",
    tags: ["JavaScript", "AI API", "Web"],
    links: [
      {
        label: "Live demo ↗",
        href: "https://smart-chef-by-habeebah.netlify.app/",
      },
      {
        label: "GitHub ↗",
        href: "https://github.com/habibatsulayman/smart-chef",
      },
    ],
  },
];

const funProjects: Project[] = [
  {
    name: "Tip Calculator",
    emoji: "🧮",
    image: "/projects/tip-calculator.jpg",
    description:
      "A clean, interactive tip calculator. Enter your bill, choose a tip percentage, and split it across the table — built for fun with plain HTML, CSS, and JavaScript.",
    tags: ["HTML", "CSS", "JavaScript"],
    links: [
      {
        label: "Live demo ↗",
        href: "https://tipcalcbyhabeebah.netlify.app",
      },
    ],
  },
];

const badgeStyles: Record<string, React.CSSProperties> = {
  live: { background: "rgba(74,222,128,0.15)", color: "var(--green)" },
  pre: { background: "var(--accent-glow)", color: "var(--accent-soft)" },
  personal: { background: "rgba(255,255,255,0.06)", color: "var(--text-muted)" },
};

function ProjectCard({ project, delay }: { project: Project; delay: number }) {

  return (
    <ScrollReveal delay={delay}>
      <div
        style={{
          background: "var(--surface)",
          border: "1px solid var(--border)",
          borderRadius: "12px",
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          transition: "border-color 0.2s, transform 0.2s",
          height: "100%",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.borderColor = "var(--accent)";
          e.currentTarget.style.transform = "translateY(-3px)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.borderColor = "var(--border)";
          e.currentTarget.style.transform = "translateY(0)";
        }}
      >
        {/* Project header image or emoji fallback */}
        {project.image ? (
          project.imageFit === "portrait" ? (
            // Portrait phone screenshot — show full image in a dark framed container
            <div
              style={{
                width: "100%",
                height: "240px",
                background: "#0a0a0f",
                borderBottom: "1px solid var(--border)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                overflow: "hidden",
                padding: "12px 0",
              }}
            >
              <img
                src={project.image}
                alt={project.name}
                style={{
                  height: "100%",
                  width: "auto",
                  maxWidth: "100%",
                  objectFit: "contain",
                  borderRadius: "8px",
                  display: "block",
                }}
              />
            </div>
          ) : (
            // Landscape web screenshot — fill the box
            <div
              style={{
                width: "100%",
                height: "200px",
                overflow: "hidden",
                borderBottom: "1px solid var(--border)",
                background: "var(--surface-2)",
              }}
            >
              <img
                src={project.image}
                alt={project.name}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  objectPosition: "top",
                  display: "block",
                }}
              />
            </div>
          )
        ) : (
          <div
            style={{
              width: "100%",
              height: "200px",
              background: "var(--surface-2)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "2.8rem",
              borderBottom: "1px solid var(--border)",
            }}
          >
            {project.emoji}
          </div>
        )}

        {/* Body */}
        <div
          style={{
            padding: "1.4rem",
            flex: 1,
            display: "flex",
            flexDirection: "column",
          }}
        >
          {/* Name + badge */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginBottom: "0.6rem",
            }}
          >
            <span
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontWeight: 600,
                fontSize: "1rem",
                color: "var(--text)",
              }}
            >
              {project.name}
            </span>
            {project.badge && (
              <span
                style={{
                  display: "inline-block",
                  fontSize: "0.65rem",
                  fontWeight: 600,
                  padding: "0.2rem 0.55rem",
                  borderRadius: "20px",
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                  ...badgeStyles[project.badge.type],
                }}
              >
                {project.badge.label}
              </span>
            )}
          </div>

          {/* Description */}
          <p
            style={{
              color: "var(--text-muted)",
              fontSize: "0.88rem",
              lineHeight: 1.6,
              flex: 1,
              marginBottom: "1rem",
            }}
          >
            {project.description}
          </p>

          {/* Tags */}
          <div
            style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem", marginBottom: "1rem" }}
          >
            {project.tags.map((tag) => (
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

          {/* Links */}
          <div style={{ display: "flex", gap: "0.75rem", marginTop: "auto" }}>
            {project.links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontSize: "0.8rem",
                  fontWeight: 500,
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
        </div>
      </div>
    </ScrollReveal>
  );
}

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="projects" style={{ padding: "5rem 2rem" }}>
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
            Work
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
            Projects
          </h2>
          <p
            style={{
              color: "var(--text-muted)",
              fontSize: "1rem",
              maxWidth: "520px",
              marginBottom: "3rem",
            }}
          >
            A selection of things I&apos;ve built — personal and professional.
          </p>
        </motion.div>

        {/* Main projects grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
            gap: "1.25rem",
            marginBottom: "4rem",
          }}
        >
          {mainProjects.map((project, i) => (
            <ProjectCard key={project.name} project={project} delay={i * 0.1} />
          ))}
        </div>

        {/* Fun Projects sub-section */}
        <ScrollReveal delay={0.1}>
          <div
            style={{
              borderTop: "1px solid var(--border)",
              paddingTop: "2.5rem",
            }}
          >
            <p
              style={{
                fontSize: "0.75rem",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "var(--accent)",
                fontWeight: 600,
                marginBottom: "0.4rem",
                fontFamily: "'Space Grotesk', sans-serif",
              }}
            >
              Built for fun
            </p>
            <p
              style={{
                color: "var(--text-muted)",
                fontSize: "0.9rem",
                marginBottom: "1.5rem",
              }}
            >
              Side experiments and smaller builds I&apos;ve shipped for the joy of shipping.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              {funProjects.map((project) => (
                <ScrollReveal key={project.name} delay={0.1}>
                  <div
                    style={{
                      background: "var(--surface)",
                      border: "1px solid var(--border)",
                      borderRadius: "10px",
                      padding: "1.2rem 1.5rem",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      gap: "1rem",
                      flexWrap: "wrap",
                      transition: "border-color 0.2s",
                    }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.borderColor = "var(--accent)")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.borderColor = "var(--border)")
                    }
                  >
                    <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                      {project.image ? (
                        <div
                          style={{
                            width: "56px",
                            height: "56px",
                            borderRadius: "8px",
                            overflow: "hidden",
                            border: "1px solid var(--border)",
                            flexShrink: 0,
                          }}
                        >
                          <img
                            src={project.image}
                            alt={project.name}
                            style={{
                              width: "100%",
                              height: "100%",
                              objectFit: "cover",
                              objectPosition: "top",
                            }}
                          />
                        </div>
                      ) : (
                        <span style={{ fontSize: "1.6rem" }}>{project.emoji}</span>
                      )}
                      <div>
                        <div
                          style={{
                            fontFamily: "'Space Grotesk', sans-serif",
                            fontWeight: 600,
                            fontSize: "0.95rem",
                            color: "var(--text)",
                            marginBottom: "0.2rem",
                          }}
                        >
                          {project.name}
                        </div>
                        <p
                          style={{
                            color: "var(--text-muted)",
                            fontSize: "0.82rem",
                            lineHeight: 1.5,
                            maxWidth: "420px",
                          }}
                        >
                          {project.description}
                        </p>
                      </div>
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem", alignItems: "flex-end" }}>
                      <div style={{ display: "flex", flexWrap: "wrap", gap: "0.35rem", justifyContent: "flex-end" }}>
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            style={{
                              fontSize: "0.7rem",
                              padding: "0.2rem 0.55rem",
                              borderRadius: "6px",
                              background: "var(--surface-2)",
                              color: "var(--text-muted)",
                              border: "1px solid var(--border)",
                              fontFamily: "'Space Grotesk', sans-serif",
                            }}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      {project.links.map((link) => (
                        <a
                          key={link.label}
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{
                            fontSize: "0.8rem",
                            fontWeight: 500,
                            color: "var(--accent-soft)",
                            textDecoration: "none",
                            transition: "color 0.2s",
                            whiteSpace: "nowrap",
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
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
