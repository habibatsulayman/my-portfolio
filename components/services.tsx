"use client";

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const services = [
  {
    name: 'Web Development',
    description: 'I build fast, responsive websites using React and TypeScript — from landing pages to full applications.',
    icon: '🌐',
  },
  {
    name: 'Mobile App Development',
    description: 'I develop polished Android apps with Jetpack Compose and Kotlin, focusing on clean UI and smooth experience.',
    icon: '📱',
  },
];

export default function Services() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <section id="services" ref={ref} className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, ease: 'easeOut' }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="text-base font-semibold text-champagne-mist-600 leading-7 dark:text-champagne-mist-400">What I offer</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-50 sm:text-4xl">My services</p>
          <p className="mt-4 text-lg leading-8 text-gray-600 dark:text-gray-300">
            A selection of what I do best.
          </p>
        </motion.div>

        <div className="mx-auto mt-14 grid max-w-2xl grid-cols-1 gap-6 sm:gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          {services.map((service, i) => (
            <motion.div
              key={service.name}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, ease: 'easeOut', delay: 0.15 + i * 0.12 }}
              className="group flex flex-col gap-4 p-7 rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 hover:border-[var(--color-champagne-mist-400)] hover:shadow-md transition-all duration-300"
            >
              <span className="text-3xl">{service.icon}</span>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-50 group-hover:text-[var(--color-champagne-mist-600)] dark:group-hover:text-[var(--color-champagne-mist-400)] transition-colors duration-200">
                {service.name}
              </h3>
              <p className="text-base leading-7 text-gray-600 dark:text-gray-300">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
