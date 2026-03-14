"use client";

import React, { useRef } from 'react';
import Image from 'next/image';
import { FaGithub } from 'react-icons/fa';
import { motion, useInView } from 'framer-motion';

const projects = [
  {
    name: 'Tip Calculator',
    description: 'A simple tip calculator built with HTML, CSS and JS',
    href: 'https://tipcalcbyhabeebah.netlify.app',
    imageUrl: '/projects/tip-calculator.jpg',
  },
  {
    name: 'Recipe App',
    description: 'Suggests food recipes based on provided lists of ingredients using AI models',
    href: 'https://smart-chef-by-habeebah.netlify.app/',
    imageUrl: '/projects/smart-chef.png',
  },
  {
    name: 'Spendly',
    description: 'An Android expense tracking app that helps you log, categorise, and review your daily spending — built with Kotlin and Jetpack Compose.',
    href: 'https://github.com/habibatsulayman/spendly/releases/download/v1.0.0/spendly-v1.0.apk',
    imageUrl: '/projects/spendly-homepage.png',
    githubUrl: 'https://github.com/habibatsulayman/spendly',
    objectFit: 'contain' as const,
  },
];

const Projects = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <section id="projects" ref={ref} className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, ease: 'easeOut' }}
          className="mx-auto max-w-2xl text-center"
        >
          <p className="text-base text-champagne-mist-600 font-semibold leading-7 dark:text-champagne-mist-400 mb-2">My Portfolio</p>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-50 sm:text-4xl">My latest work</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
            Welcome to my web development portfolio! Explore a collection of projects showcasing my expertise in front-end and mobile-app development.
          </p>
        </motion.div>

        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          {projects.map((project, i) => (
            <motion.article
              key={project.name}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, ease: 'easeOut', delay: 0.15 + i * 0.1 }}
              className="group flex flex-col items-start justify-between"
            >
              <div className="relative w-full overflow-hidden rounded-2xl">
                <a href={project.href} target="_blank" rel="noopener noreferrer" className="block">
                  <Image
                    src={project.imageUrl}
                    alt={project.name}
                    width={500}
                    height={500}
                    className={`transform aspect-video w-full sm:aspect-2/1 lg:aspect-3/2 transition-transform duration-500 ease-out group-hover:scale-105 group-active:scale-105 active:scale-105 focus:scale-105 ${'objectFit' in project && project.objectFit === 'contain' ? 'object-contain bg-gray-900' : 'object-cover bg-gray-100'}`}
                  />
                </a>
                <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10 dark:ring-white/10" />
              </div>
              <div className="max-w-xl">
                <div className="group relative">
                  <h3 className="mt-5 flex items-center gap-2 text-xl font-semibold leading-6 text-gray-900 dark:text-gray-50 hover:text-[var(--color-champagne-mist-600)] dark:hover:text-[var(--color-champagne-mist-400)] transition-colors">
                    <a href={project.href} target="_blank" rel="noopener noreferrer">
                      <span className="absolute inset-0" />
                      {project.name} <span aria-hidden="true" className="text-sm opacity-0 group-hover:opacity-100 transition-opacity">↗</span>
                    </a>
                  </h3>
                  <p className="mt-4 text-base leading-7 text-gray-600 dark:text-gray-300">{project.description}</p>
                </div>
                {'githubUrl' in project && project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative z-10 mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-gray-500 dark:text-gray-400 hover:text-[var(--color-champagne-mist-600)] dark:hover:text-[var(--color-champagne-mist-400)] transition-colors"
                  >
                    <FaGithub className="text-lg" />
                    View Source Code
                  </a>
                )}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
