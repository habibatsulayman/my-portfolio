"use client";
import Link from "next/link";
import { useState, useEffect } from "react";

const navItems = [
  { label: "About", id: "about" },
  { label: "Work", id: "work" },
  { label: "Experience", id: "experience" },
  { label: "Case studies", id: "case-studies" },
  { label: "Skills", id: "skills" },
  { label: "Testimonials", id: "testimonials" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });

    const onStorage = (e: StorageEvent) => {
      if (e.key === "color-scheme") {
        const meta = document.querySelector<HTMLMetaElement>(
          'meta[name="color-scheme"]'
        );
        if (meta) {
          meta.content = e.newValue ?? "light dark";
        }
      }
    };
    window.addEventListener("storage", onStorage);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("storage", onStorage);
    };
  }, []);

  const toggleTheme = () => {
    const meta = document.querySelector<HTMLMetaElement>(
      'meta[name="color-scheme"]'
    );
    const systemIsDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    const systemScheme = systemIsDark ? "dark" : "light";

    let stored: string | null = null;
    try {
      stored = localStorage.getItem("color-scheme");
    } catch {}

    const currentRendered =
      stored === "light" || stored === "dark" ? stored : systemScheme;
    const target = currentRendered === "dark" ? "light" : "dark";

    try {
      if (target === systemScheme) {
        localStorage.removeItem("color-scheme");
        if (meta) meta.content = "light dark";
      } else {
        localStorage.setItem("color-scheme", target);
        if (meta) meta.content = target;
      }
    } catch {
      if (meta) meta.content = target;
    }
  };

  const handleLinkClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    targetId: string
  ) => {
    e.preventDefault();
    document.getElementById(targetId)?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  const linkStyle: React.CSSProperties = {
    color: "var(--text-muted)",
    fontSize: "0.88rem",
    textDecoration: "none",
    transition: "color 0.2s",
    fontFamily: "'Poppins', sans-serif",
  };

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0.9rem 2rem",
        background: scrolled ? "var(--nav-bg-scrolled)" : "var(--nav-bg)",
        backdropFilter: "blur(14px)",
        WebkitBackdropFilter: "blur(14px)",
        borderBottom: "1px solid var(--border)",
        transition: "background 0.3s, border-color 0.3s",
      }}
    >
      {/* Brand Kit Horizontal Lockup */}
      <Link
        href="/"
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "0.65rem",
          textDecoration: "none",
        }}
      >
        <svg
          width="34"
          height="34"
          viewBox="0 0 256 256"
          fill="none"
          aria-hidden="true"
          style={{ flexShrink: 0, display: "block" }}
        >
          <rect
            width="256"
            height="256"
            rx="58"
            style={{ fill: "light-dark(#141414, #EADFCF)" }}
          />
          <path
            d="M72 56V198"
            strokeWidth="28"
            strokeLinecap="round"
            style={{ stroke: "light-dark(#F5EFE6, #141414)" }}
          />
          <path
            d="M72 130C72 104 92 102 108 102C126 102 142 114 142 138V198"
            strokeWidth="28"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{ stroke: "light-dark(#F5EFE6, #141414)" }}
          />
          <circle
            cx="179"
            cy="197"
            r="15"
            style={{ fill: "light-dark(#C9B79C, #8C7456)" }}
          />
        </svg>
      </Link>

      {/* Desktop links */}
      <ul
        className="hidden md:flex"
        style={{ gap: "1.6rem", listStyle: "none", margin: 0, padding: 0 }}
      >
        {navItems.map(({ label, id }) => (
          <li key={id}>
            <a
              href={`#${id}`}
              onClick={(e) => handleLinkClick(e, id)}
              style={linkStyle}
              onMouseEnter={(e) =>
                (e.currentTarget.style.color = "var(--text)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = "var(--text-muted)")
              }
            >
              {label}
            </a>
          </li>
        ))}
      </ul>

      {/* Right actions: Theme Toggle + CTA + Mobile Hamburger */}
      <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
        <button
          type="button"
          onClick={toggleTheme}
          className="theme-toggle-btn"
          style={{
            background: "var(--surface)",
            border: "1px solid var(--border)",
            borderRadius: "8px",
            width: "38px",
            height: "38px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            color: "var(--text)",
            transition: "border-color 0.2s, background 0.2s",
            flexShrink: 0,
          }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.borderColor = "var(--accent)")
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.borderColor = "var(--border)")
          }
        >
          <span className="theme-opt-dark" style={{ display: "inline-flex" }}>
            <span className="visually-hidden">Switch to dark theme</span>
            <svg
              width="17"
              height="17"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
            </svg>
          </span>
          <span className="theme-opt-light" style={{ display: "none" }}>
            <span className="visually-hidden">Switch to light theme</span>
            <svg
              width="17"
              height="17"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <circle cx="12" cy="12" r="5" />
              <line x1="12" y1="1" x2="12" y2="3" />
              <line x1="12" y1="21" x2="12" y2="23" />
              <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
              <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
              <line x1="1" y1="12" x2="3" y2="12" />
              <line x1="21" y1="12" x2="23" y2="12" />
              <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
              <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
            </svg>
          </span>
        </button>

        <a
          href="#contact"
          onClick={(e) => handleLinkClick(e, "contact")}
          className="hidden md:inline-block"
          style={{
            background: "var(--accent-btn-bg)",
            color: "var(--accent-btn-text)",
            padding: "0.5rem 1.15rem",
            borderRadius: "8px",
            textDecoration: "none",
            fontSize: "0.85rem",
            fontWeight: 500,
            transition: "opacity 0.2s",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.85")}
          onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
        >
          Get in touch
        </a>

        {/* Mobile hamburger */}
        <button
          className="flex md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          type="button"
          aria-controls="mobile-menu"
          aria-expanded={isOpen}
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            color: "var(--text)",
            padding: "0.25rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "40px",
            height: "40px",
            flexShrink: 0,
          }}
        >
          <span className="visually-hidden">Open main menu</span>
          {!isOpen ? (
            <svg
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
              style={{ display: "block", flexShrink: 0 }}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          ) : (
            <svg
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
              style={{ display: "block", flexShrink: 0 }}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div
          id="mobile-menu"
          style={{
            position: "fixed",
            top: "64px",
            left: 0,
            right: 0,
            background: "var(--surface)",
            borderBottom: "1px solid var(--border)",
            padding: "1rem 2rem",
            display: "flex",
            flexDirection: "column",
            gap: "0.65rem",
          }}
        >
          {navItems.map(({ label, id }) => (
            <a
              key={id}
              href={`#${id}`}
              onClick={(e) => handleLinkClick(e, id)}
              style={{
                color: "var(--text)",
                textDecoration: "none",
                fontSize: "0.95rem",
                fontWeight: 500,
                padding: "0.45rem 0",
              }}
            >
              {label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={(e) => handleLinkClick(e, "contact")}
            style={{
              background: "var(--accent-btn-bg)",
              color: "var(--accent-btn-text)",
              padding: "0.65rem 1rem",
              borderRadius: "8px",
              textDecoration: "none",
              fontSize: "0.9rem",
              fontWeight: 600,
              textAlign: "center",
              marginTop: "0.25rem",
            }}
          >
            Get in touch
          </a>
        </div>
      )}

      <style>{`
        /* Branch theme toggle icons via meta[name="color-scheme"] + prefers-color-scheme */
        @media (prefers-color-scheme: dark) {
          :root:not(:has(> head > meta[name="color-scheme"][content="light"])) .theme-opt-dark {
            display: none !important;
          }
          :root:not(:has(> head > meta[name="color-scheme"][content="light"])) .theme-opt-light {
            display: inline-flex !important;
          }
        }
        :root:has(> head > meta[name="color-scheme"][content="dark"]) .theme-opt-dark {
          display: none !important;
        }
        :root:has(> head > meta[name="color-scheme"][content="dark"]) .theme-opt-light {
          display: inline-flex !important;
        }
      `}</style>
    </nav>
  );
}
