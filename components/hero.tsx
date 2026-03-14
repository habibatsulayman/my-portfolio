"use client";

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

const roles = [
  'Software Developer',
  'Frontend Developer',
  'Android Developer',
];

function FadeUp({ delay, children, className }: { delay: number; children: React.ReactNode; className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.65, ease: 'easeOut', delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 2600);
    return () => clearInterval(timer);
  }, []);

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] text-center px-6 overflow-hidden">

      {/* Subtle background glow */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-1/3 -translate-x-1/2 -translate-y-1/2 w-[480px] h-[480px] rounded-full bg-[var(--color-champagne-mist-400)] opacity-10 blur-[120px]" />
      </div>

      <div className="mx-auto max-w-3xl">

        {/* Avatar */}
        <FadeUp delay={0} className="mb-8">
          <div className="relative inline-block">
            <Image
              src="/projects/my-image.png"
              alt="Habeebah Olasubomi"
              width={96}
              height={96}
              className="rounded-full ring-4 ring-[var(--color-champagne-mist-400)]/30 shadow-lg mx-auto"
              priority
            />
            {/* Available for work badge */}
            <span className="absolute bottom-1 right-1 flex items-center gap-1.5 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-full px-2 py-0.5 text-xs font-medium text-gray-700 dark:text-gray-200 shadow">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
              </span>
              Available
            </span>
          </div>
        </FadeUp>

        {/* Heading */}
        <FadeUp delay={0.15}>
          <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-gray-900 dark:text-gray-50">
            Hi, I&apos;m{' '}
            <span className="text-[var(--color-champagne-mist-600)] dark:text-[var(--color-champagne-mist-400)]">
              Habeebah Sulayman
            </span>
          </h1>
        </FadeUp>

        {/* Cycling role */}
        <FadeUp delay={0.3}>
          <div className="mt-4 h-9 flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.p
                key={roleIndex}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.4, ease: 'easeInOut' }}
                className="text-xl sm:text-2xl font-medium text-[var(--color-champagne-mist-600)] dark:text-[var(--color-champagne-mist-400)]"
              >
                {roles[roleIndex]}
              </motion.p>
            </AnimatePresence>
          </div>
        </FadeUp>

        {/* Tagline */}
        <FadeUp delay={0.45}>
          <p className="mt-5 text-base sm:text-lg leading-8 text-gray-600 dark:text-gray-300 max-w-xl mx-auto">
            2+ years of experience building responsive, functional websites and
            polished Android apps.
          </p>
        </FadeUp>

        {/* CTA */}
        <FadeUp delay={0.6}>
          <div className="mt-10 flex items-center justify-center">
            <a
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="rounded-full bg-[var(--color-champagne-mist-600)] px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-[var(--color-champagne-mist-500)] transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
            >
              View my work →
            </a>
          </div>
        </FadeUp>
      </div>

      {/* Scroll indicator */}
      <motion.button
        onClick={scrollToAbout}
        aria-label="Scroll to about section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-gray-400 dark:text-gray-500 hover:text-[var(--color-champagne-mist-600)] dark:hover:text-[var(--color-champagne-mist-400)] transition-colors cursor-pointer"
      >
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <motion.svg
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.4, repeat: Infinity, ease: 'easeInOut' }}
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </motion.svg>
      </motion.button>
    </section>
  );
}
