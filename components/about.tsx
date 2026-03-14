"use client";

import React, { useRef } from 'react';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import { SiHtml5, SiCss3, SiJavascript, SiKotlin, SiAndroid } from 'react-icons/si';
import { FaCode, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

function ScrollReveal({ children, delay = 0, className }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: 'easeOut', delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        <ScrollReveal className="text-center">
          <h2 className="text-base text-champagne-mist-600 font-semibold leading-7 dark:text-champagne-mist-400">Introduction</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-50 sm:text-4xl">About me</p>
        </ScrollReveal>

        <div className="grid grid-cols-1 gap-x-4 lg:gap-x-8 gap-y-16 sm:gap-y-20 lg:grid-cols-2 lg:items-center mt-12">

          {/* Left column: Image */}
          <ScrollReveal delay={0.1} className="flex items-center justify-center">
            <div className="relative">
              <div className="absolute -inset-3 rounded-full bg-[var(--color-champagne-mist-400)]/10 blur-2xl" aria-hidden />
              <Image
                src="/projects/my-image.png"
                alt="Habeebah Olasubomi"
                width={300}
                height={300}
                className="relative rounded-full ring-4 ring-[var(--color-champagne-mist-400)]/20 shadow-xl"
              />
            </div>
          </ScrollReveal>

          {/* Right column */}
          <ScrollReveal delay={0.2} className="px-4 lg:px-0 lg:pr-4 lg:pt-4">
            <p className="text-md leading-8 text-gray-600 dark:text-gray-300 max-w-xl mb-8">
              I build interfaces that people enjoy using—on the web and now on Android. With Kotlin and Jetpack Compose, I&apos;m expanding my craft into mobile experiences that are both beautiful and functional.
            </p>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              {/* Tech Stack Card */}
              <article className="rounded-2xl bg-white shadow-sm ring-1 ring-gray-900/5 p-5 dark:bg-gray-800 dark:ring-white/5 hover:shadow-md transition-shadow duration-200">
                <h3 className="flex items-center gap-2 text-base font-semibold text-gray-900 dark:text-gray-50 mb-1">
                  <FaCode className="text-[var(--color-champagne-mist-600)]" />
                  Tech Stack
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">Technologies I work with regularly.</p>
                <div className="flex flex-wrap gap-2">
                  {[
                    { icon: <SiHtml5 className="text-orange-600" />, label: 'HTML5' },
                    { icon: <SiCss3 className="text-blue-600" />, label: 'CSS3' },
                    { icon: <SiJavascript className="text-yellow-500" />, label: 'JavaScript' },
                    { icon: <SiKotlin className="text-violet-600" />, label: 'Kotlin' },
                    { icon: <SiAndroid className="text-green-600" />, label: 'Android' },
                  ].map(({ icon, label }) => (
                    <div key={label} title={label} className="flex items-center gap-1.5 px-2.5 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-lg">
                      {icon}
                      <span className="text-xs text-gray-600 dark:text-gray-300 font-medium">{label}</span>
                    </div>
                  ))}
                </div>

                <h4 className="mt-5 text-base font-semibold text-gray-900 dark:text-gray-50">Socials</h4>
                <div className="mt-2 flex items-center gap-4">
                  <a href="https://github.com/habibatsulayman" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-gray-500 dark:text-gray-400 hover:text-[var(--color-champagne-mist-600)] dark:hover:text-[var(--color-champagne-mist-400)] transition-colors text-xl">
                    <FaGithub />
                  </a>
                  <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-gray-500 dark:text-gray-400 hover:text-[var(--color-champagne-mist-600)] dark:hover:text-[var(--color-champagne-mist-400)] transition-colors text-xl">
                    <FaLinkedin />
                  </a>
                  <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="text-gray-500 dark:text-gray-400 hover:text-[var(--color-champagne-mist-600)] dark:hover:text-[var(--color-champagne-mist-400)] transition-colors text-xl">
                    <FaTwitter />
                  </a>
                </div>
              </article>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default About;
