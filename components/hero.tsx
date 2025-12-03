import React from 'react';
import Image from 'next/image';

const Hero = () => {
  return (
    <section className="flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] text-center">
      <div className="mx-auto max-w-2xl">
        <Image
          src="/projects/my-image.png"
          alt="Habeebah Olasubomi"
          width={128}
          height={128}
          className="rounded-full mx-auto mb-8"
        />
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-gray-50 sm:text-6xl">
          Hi, I'm Habeebah Sulayman
        </h1>
        <p className="mt-6 text-md leading-8 text-gray-600 dark:text-gray-300 p-2">
          A Frontend developer with 2+ years of experience, passionate about building responsive and functional websites and mobile applications.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <a
            href="#"
            className="rounded-md bg-[var(--color-champagne-mist-600)] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[var(--color-champagne-mist-500)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-champagne-600"
          >
            Download My CV
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
