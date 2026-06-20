"use client";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

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
    fontSize: "0.9rem",
    textDecoration: "none",
    transition: "color 0.2s",
    fontFamily: "'Inter', sans-serif",
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
        padding: "1rem 2rem",
        background: scrolled
          ? "rgba(15, 17, 23, 0.95)"
          : "rgba(15, 17, 23, 0.85)",
        backdropFilter: "blur(14px)",
        WebkitBackdropFilter: "blur(14px)",
        borderBottom: "1px solid var(--border)",
        transition: "background 0.3s",
      }}
    >
      {/* Logo */}
      <Link
        href="/"
        style={{
          fontFamily: "'Space Grotesk', sans-serif",
          fontSize: "1.1rem",
          fontWeight: 700,
          color: "var(--accent-soft)",
          textDecoration: "none",
          letterSpacing: "0.02em",
        }}
      >
        H.O.S
      </Link>

      {/* Desktop links */}
      <ul
        className="hidden md:flex"
        style={{ gap: "2rem", listStyle: "none", margin: 0, padding: 0 }}
      >
        {[
          { label: "Experience", id: "experience" },
          { label: "Projects", id: "projects" },
          { label: "Skills", id: "skills" },
          { label: "About", id: "about" },
        ].map(({ label, id }) => (
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

      {/* CTA */}
      <a
        href="mailto:habibatsulayman@gmail.com"
        className="hidden md:inline-block"
        style={{
          background: "var(--accent)",
          color: "#fff",
          padding: "0.45rem 1.1rem",
          borderRadius: "6px",
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
          color: "var(--text-muted)",
          padding: "0.25rem",
        }}
      >
        <span className="sr-only">Open main menu</span>
        {!isOpen ? (
          <svg
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        ) : (
          <svg
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        )}
      </button>

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
            gap: "0.75rem",
          }}
        >
          {[
            { label: "Experience", id: "experience" },
            { label: "Projects", id: "projects" },
            { label: "Skills", id: "skills" },
            { label: "About", id: "about" },
          ].map(({ label, id }) => (
            <a
              key={id}
              href={`#${id}`}
              onClick={(e) => handleLinkClick(e, id)}
              style={{
                color: "var(--text-muted)",
                textDecoration: "none",
                fontSize: "1rem",
                fontWeight: 500,
                padding: "0.5rem 0",
              }}
            >
              {label}
            </a>
          ))}
          <a
            href="mailto:habibatsulayman@gmail.com"
            style={{
              background: "var(--accent)",
              color: "#fff",
              padding: "0.6rem 1rem",
              borderRadius: "6px",
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
    </nav>
  );
}
