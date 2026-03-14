import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-base text-champagne-mist-600 font-semibold leading-7 dark:text-champagne-mist-400 mb-2">Get in touch</p>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-50 sm:text-4xl">Connect with me</h2>
          <p className="mt-2 text-lg leading-8 text-gray-600 dark:text-gray-300">
            I&apos;d love to hear from you! If you have any questions, comments or feedback, please feel free to reach out.
          </p>
        </div>
        <form action="#" method="POST" className="mx-auto mt-12 max-w-xl sm:mt-16">
          <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
            <div>
              <label htmlFor="first-name" className="block text-sm font-semibold leading-6 text-gray-900 dark:text-gray-50">
                First name
              </label>
              <div className="mt-2.5">
                <input
                  type="text"
                  name="first-name"
                  id="first-name"
                  autoComplete="given-name"
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <label htmlFor="last-name" className="block text-sm font-semibold leading-6 text-gray-900 dark:text-gray-50">
                Last name
              </label>
              <div className="mt-2.5">
                <input
                  type="text"
                  name="last-name"
                  id="last-name"
                  autoComplete="family-name"
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-900 dark:text-gray-50">
                Email
              </label>
              <div className="mt-2.5">
                <input
                  type="email"
                  name="email"
                  id="email"
                  autoComplete="email"
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="message" className="block text-sm font-semibold leading-6 text-gray-900 dark:text-gray-50">
                Message
              </label>
              <div className="mt-2.5">
                <textarea
                  name="message"
                  id="message"
                  rows={4}
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  defaultValue={''}
                />
              </div>
            </div>
          </div>
          <div className="mt-10">
            <button
              type="submit"
              className="block w-full bg-champagne-mist-600 rounded-md dark:bg-champagne-mist-500 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm dark:hover:bg-champagne-mist-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
            >
              Send now
            </button>
          </div>
        </form>
        {/* Brand and contact email block below the form */}
        <div className="mx-auto mt-16 max-w-xl text-center">
          <a href="#top" className="text-lg font-bold text-gray-900 dark:text-gray-50 hover:underline">
            H.O.S
          </a>

          <div className="mt-1 text-sm text-gray-600 dark:text-gray-300">
            <a href="mailto:hello@hos.dev" className="hover:underline">
              hello@hos.dev
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
