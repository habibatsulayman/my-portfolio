import React from 'react';
import Image from 'next/image';
import { FaGithub } from 'react-icons/fa';

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
  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-base text-champagne-mist-600 font-semibold leading-7 dark:text-champagne-mist-400 mb-2">My Portfolio</p>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-50 sm:text-4xl">My latest work</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
            Welcome to my web development portfolio! Explore a collection of projects showcasing my expertise in front-end and mobile-app development.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          {projects.map((project) => (
            <article key={project.name} className="group flex flex-col items-start justify-between">
              <div className="relative w-full overflow-hidden rounded-2xl">
                <a href={project.href} target="_blank" rel="noopener noreferrer" className="block">
                  <Image
                    src={project.imageUrl}
                    alt={project.name}
                    width={500}
                    height={500}
                    className={`transform aspect-video w-full sm:aspect-2/1 lg:aspect-3/2 transition-transform duration-300 ease-in-out group-hover:scale-105 group-active:scale-105 active:scale-105 focus:scale-105 ${'objectFit' in project && project.objectFit === 'contain' ? 'object-contain bg-gray-900' : 'object-cover bg-gray-100'}`}
                  />
                </a>
                <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
              </div>
              <div className="max-w-xl">
                <div className="group relative">
                  <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 dark:text-gray-50 group-hover:text-gray-600">
                    <a href={project.href}>
                      <span className="absolute inset-0" />
                      {project.name}
                    </a>
                  </h3>
                  <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600 dark:text-gray-300">{project.description}</p>
                </div>
                {'githubUrl' in project && project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative z-10 mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-50 transition-colors"
                  >
                    <FaGithub className="text-base" />
                    View Source Code
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
