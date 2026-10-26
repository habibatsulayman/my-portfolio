"use client";

import React, { useRef } from "react";
import Image from "next/image";
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
  imageFit?: "cover" | "portrait";
  imagePosition?: string;
  badge?: Badge;
  description: string;
  tags: string[];
  links: { label: string; href: string }[];
}

const mainProjects: Project[] = [
  {
    name: "Rova",
    emoji: "🤖",
    image: "/projects/AssistantX_Homescreen.PNG",
    imageFit: "portrait",
    badge: { label: "Live", type: "live" },
    description:
      "Cross-platform AI assistant for Android and iOS, built in Kotlin Multiplatform at Layer Axis, now on Google Play and the App Store. I built real-time chat history search, custom instructions, cross-platform in-app reviews, the settings screen with a Light / Dark / System theme selector, legal links, and clear chat history.",
    tags: ["KMP", "Compose", "SQLDelight", "Firebase", "RevenueCat"],
    links: [{ label: "Website ↗", href: "https://rovaai.app" }],
  },
  {
    name: "Duplicate Contacts Remover",
    emoji: "📇",
    image: "/projects/duplicate_contacts.png",
    imageFit: "portrait",
    imagePosition: "center",
    badge: { label: "Live", type: "live" },
    description:
      "Production Android app that finds and merges duplicate contacts. I took it from English-only to 6 languages, including Arabic’s six-form plural system, and added the Play In-App Review flow.",
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
    image: "/projects/spendly_homepage.png",
    imageFit: "portrait",
    badge: { label: "Personal Project", type: "personal" },
    description:
      "Android expense tracker built from scratch with Kotlin and Jetpack Compose. Log, categorise and review daily spending in a Material 3 interface.",
    tags: ["Kotlin", "Compose"],
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
      "AI recipe suggester: enter the ingredients you have and get tailored recipe ideas.",
    tags: ["JavaScript", "AI API"],
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

const badgeStyles: Record<string, React.CSSProperties> = {
  live: { background: "var(--green-bg)", color: "var(--green)" },
  pre: { background: "var(--accent-glow)", color: "var(--accent-soft)" },
  personal: {
    background: "var(--surface-2)",
    color: "var(--text-muted)",
  },
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
            <div
              style={{
                width: "100%",
                height: "280px",
                background: "#141414",
                borderBottom: "1px solid var(--border)",
                overflow: "hidden",
                position: "relative",
              }}
            >
              <Image
                src={project.image}
                alt={project.name}
                fill
                style={{
                  objectFit: "cover",
                  objectPosition: project.imagePosition ?? "top center",
                }}
                sizes="(max-width: 768px) 100vw, 400px"
              />
            </div>
          ) : (
            <div
              style={{
                width: "100%",
                height: "200px",
                overflow: "hidden",
                borderBottom: "1px solid var(--border)",
                background: "var(--surface-2)",
                position: "relative",
              }}
            >
              <Image
                src={project.image}
                alt={project.name}
                fill
                style={{
                  objectFit: "cover",
                  objectPosition: "top",
                }}
                sizes="(max-width: 768px) 100vw, 400px"
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
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontWeight: 600,
                fontSize: "1.05rem",
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
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "0.4rem",
              marginBottom: "1rem",
            }}
          >
            {project.tags.map((tag) => (
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
          <div style={{ display: "flex", gap: "0.9rem", marginTop: "auto" }}>
            {project.links.map((link) => (
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
        </div>
      </div>
    </ScrollReveal>
  );
}

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="work" style={{ padding: "5rem 2rem" }}>
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
            Selected work
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
            Things I&apos;ve built
          </h2>
        </motion.div>

        {/* Main projects grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
            gap: "1.25rem",
            marginBottom: "2.5rem",
          }}
        >
          {mainProjects.map((project, i) => (
            <ProjectCard key={project.name} project={project} delay={i * 0.1} />
          ))}
        </div>

        {/* Playground line */}
        <ScrollReveal delay={0.1}>
          <div
            style={{
              background: "var(--surface)",
              border: "1px solid var(--border)",
              borderRadius: "10px",
              padding: "1rem 1.4rem",
              display: "flex",
              alignItems: "center",
              gap: "0.9rem",
              flexWrap: "wrap",
              fontSize: "0.92rem",
              color: "var(--text-muted)",
            }}
          >
            <div
              style={{
                width: "36px",
                height: "36px",
                borderRadius: "6px",
                overflow: "hidden",
                border: "1px solid var(--border)",
                flexShrink: 0,
                position: "relative",
              }}
            >
              <Image
                src="/projects/tip-calculator.jpg"
                alt="Tip Calculator"
                fill
                style={{
                  objectFit: "cover",
                  objectPosition: "top",
                }}
                sizes="36px"
              />
            </div>
            <p style={{ margin: 0 }}>
              <strong style={{ color: "var(--text)" }}>Playground:</strong>{" "}
              <a
                href="https://tipcalcbyhabeebah.netlify.app"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: "var(--accent-soft)",
                  fontWeight: 600,
                  textDecoration: "none",
                }}
              >
                Tip Calculator ↗
              </a>
              , a small HTML/CSS/JS build made for fun.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
