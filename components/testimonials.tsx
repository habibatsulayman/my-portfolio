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

const testimonials = [
  {
    quote:
      "Habeebah consistently delivers clean, well-tested Kotlin Multiplatform code. She took ownership of features like real-time chat search and cross-platform settings in Rova from UI all the way through persistence and unit tests.",
    author: "Engineering Lead",
    role: "Layer Axis · London, UK",
  },
  {
    quote:
      "Her attention to detail during the 6-language localisation of Duplicate Contacts Remover — especially handling Arabic's complex six-form plural rules and Android 13's per-app language preferences — made the international rollout seamless.",
    author: "Product Team",
    role: "Layer Axis · London, UK",
  },
];

export default function Testimonials() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [activeIndex, setActiveIndex] = useState(0);

  const prev = () =>
    setActiveIndex((i) => (i === 0 ? testimonials.length - 1 : i - 1));
  const next = () =>
    setActiveIndex((i) => (i === testimonials.length - 1 ? 0 : i + 1));

  return (
    <section id="testimonials" style={{ padding: "5rem 2rem" }}>
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
            Testimonials
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
            What people say
          </h2>
        </motion.div>

        {/* Desktop 2-column grid */}
        <div
          className="testimonials-desktop"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "1.25rem",
          }}
        >
          {testimonials.map((item, i) => (
            <ScrollReveal key={item.author} delay={i * 0.12}>
              <TestimonialCard item={item} />
            </ScrollReveal>
          ))}
        </div>

        {/* Mobile Carousel */}
        <div className="testimonials-mobile" style={{ display: "none" }}>
          <div style={{ position: "relative", overflow: "hidden" }}>
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, x: 24 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -24 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
              >
                <TestimonialCard item={testimonials[activeIndex]} />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Carousel Controls (Prev / Dots / Next) */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "1rem",
              marginTop: "1.25rem",
            }}
          >
            <button
              type="button"
              onClick={prev}
              aria-label="Previous testimonial"
              style={{
                width: "36px",
                height: "36px",
                borderRadius: "50%",
                background: "var(--surface)",
                border: "1px solid var(--border)",
                color: "var(--text)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
              }}
            >
              ‹
            </button>

            <div style={{ display: "flex", gap: "0.45rem", alignItems: "center" }}>
              {testimonials.map((t, idx) => (
                <button
                  key={t.author}
                  type="button"
                  onClick={() => setActiveIndex(idx)}
                  aria-label={`View testimonial ${idx + 1}`}
                  style={{
                    width: idx === activeIndex ? "20px" : "8px",
                    height: "8px",
                    borderRadius: "999px",
                    background:
                      idx === activeIndex ? "var(--accent)" : "var(--border)",
                    border: "none",
                    padding: 0,
                    cursor: "pointer",
                    transition: "all 0.25s ease",
                  }}
                />
              ))}
            </div>

            <button
              type="button"
              onClick={next}
              aria-label="Next testimonial"
              style={{
                width: "36px",
                height: "36px",
                borderRadius: "50%",
                background: "var(--surface)",
                border: "1px solid var(--border)",
                color: "var(--text)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
              }}
            >
              ›
            </button>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 679px) {
          .testimonials-desktop {
            display: none !important;
          }
          .testimonials-mobile {
            display: block !important;
          }
        }
      `}</style>
    </section>
  );
}

function TestimonialCard({ item }: { item: (typeof testimonials)[0] }) {
  return (
    <blockquote
      style={{
        margin: 0,
        background: "var(--surface)",
        border: "1px solid var(--border)",
        borderRadius: "12px",
        padding: "1.6rem",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        gap: "1.25rem",
        transition: "border-color 0.2s",
      }}
      onMouseEnter={(e) =>
        (e.currentTarget.style.borderColor = "var(--accent)")
      }
      onMouseLeave={(e) =>
        (e.currentTarget.style.borderColor = "var(--border)")
      }
    >
      <p
        style={{
          margin: 0,
          color: "var(--text)",
          fontSize: "0.95rem",
          lineHeight: 1.7,
          fontStyle: "normal",
        }}
      >
        &ldquo;{item.quote}&rdquo;
      </p>

      <footer>
        <div
          style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontWeight: 600,
            fontSize: "0.9rem",
            color: "var(--text)",
          }}
        >
          {item.author}
        </div>
        <div
          style={{
            fontSize: "0.8rem",
            color: "var(--text-muted)",
          }}
        >
          {item.role}
        </div>
      </footer>
    </blockquote>
  );
}
