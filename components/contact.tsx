"use client";

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const Contact = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <section id="contact" ref={ref} className="py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="mx-auto max-w-xl text-center"
        >
          <p className="text-sm text-champagne-mist-600 font-semibold leading-7 dark:text-champagne-mist-400 mb-1">Get in touch</p>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-50 sm:text-4xl">Connect with me</h2>
          <p className="mt-3 text-base leading-7 text-gray-600 dark:text-gray-300">
            I&apos;d love to hear from you! If you have any questions, comments or feedback, feel free to reach out.
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
          action="#"
          method="POST"
          className="mx-auto mt-10 max-w-md bg-white dark:bg-gray-800/40 p-6 sm:p-8 rounded-2xl shadow-sm ring-1 ring-gray-900/5 dark:ring-white/10"
        >
          <div className="grid grid-cols-1 gap-y-5">
            <div className="grid grid-cols-1 gap-x-4 gap-y-5 sm:grid-cols-2">
              <div>
                <label htmlFor="first-name" className="block text-xs font-semibold leading-6 text-gray-900 dark:text-gray-100">
                  First name
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="first-name"
                    id="first-name"
                    autoComplete="given-name"
                    className="block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 dark:text-white dark:bg-gray-900/50 shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-700 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[var(--color-champagne-mist-500)] sm:text-sm sm:leading-6 transition-colors"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="last-name" className="block text-xs font-semibold leading-6 text-gray-900 dark:text-gray-100">
                  Last name
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="last-name"
                    id="last-name"
                    autoComplete="family-name"
                    className="block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 dark:text-white dark:bg-gray-900/50 shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-700 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[var(--color-champagne-mist-500)] sm:text-sm sm:leading-6 transition-colors"
                  />
                </div>
              </div>
            </div>
            <div>
              <label htmlFor="email" className="block text-xs font-semibold leading-6 text-gray-900 dark:text-gray-100">
                Email
              </label>
              <div className="mt-1">
                <input
                  type="email"
                  name="email"
                  id="email"
                  autoComplete="email"
                  className="block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 dark:text-white dark:bg-gray-900/50 shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-700 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[var(--color-champagne-mist-500)] sm:text-sm sm:leading-6 transition-colors"
                />
              </div>
            </div>
            <div>
              <label htmlFor="message" className="block text-xs font-semibold leading-6 text-gray-900 dark:text-gray-100">
                Message
              </label>
              <div className="mt-1">
                <textarea
                  name="message"
                  id="message"
                  rows={3}
                  className="block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 dark:text-white dark:bg-gray-900/50 shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-700 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[var(--color-champagne-mist-500)] sm:text-sm sm:leading-6 transition-colors"
                  defaultValue={''}
                />
              </div>
            </div>
          </div>
          <div className="mt-8">
            <button
              type="submit"
              className="block w-full rounded-md bg-[var(--color-champagne-mist-600)] px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-[var(--color-champagne-mist-500)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 transition-colors duration-200"
            >
              Send now
            </button>
          </div>
        </motion.form>

        {/* Brand and contact email block below the form */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mx-auto mt-16 max-w-sm text-center"
        >
          <a href="#top" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="text-xl font-bold tracking-tight text-gray-900 dark:text-gray-50 hover:text-[var(--color-champagne-mist-600)] dark:hover:text-[var(--color-champagne-mist-400)] transition-colors">
            H.O.S
          </a>
          <div className="mt-1 text-sm text-gray-600 dark:text-gray-400">
            <a href="mailto:hello@hos.dev" className="hover:text-[var(--color-champagne-mist-600)] dark:hover:text-[var(--color-champagne-mist-400)] transition-colors">
              hello@hos.dev
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
