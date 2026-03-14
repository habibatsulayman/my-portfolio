import React from 'react';
import Image from 'next/image';
import { SiHtml5, SiCss3, SiJavascript, SiKotlin, SiAndroid } from 'react-icons/si';
import { FaCode, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base text-champagne-mist-600 font-semibold leading-7 dark:text-champagne-mist-400">Introduction</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-50 sm:text-4xl">About me</p>

        </div>

        <div className="grid grid-cols-1 gap-x-4 lg:gap-x-8 gap-y-16 sm:gap-y-20 lg:grid-cols-2 lg:items-start mt-12">
          {/* Left column: Image */}

          <div className="flex items-center justify-center sm:mx-0 sm:max-w-none">
            <Image
              src="/projects/my-image.png"
              alt="Habeebah Olasubomi"
              width={300}
              height={300}
              className="rounded-full"
            />
          </div>


          {/* Right column: Cards in grid */}
          <div className="px-4 lg:px-0 lg:pr-4 lg:pt-4">

            <p className="mt-4 mb-10 text-md leading-8 text-gray-600 dark:text-gray-300 max-w-3xl lg:mx-0">
              I build interfaces that people enjoy using—on the web and now on Android. With Kotlin and Jetpack Compose, I&apos;m expanding my craft into mobile experiences that are both beautiful and functional.
            </p>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2">
              {/* Tech Stack Card (now includes socials) */}
              <article className="rounded-2xl bg-white shadow ring-1 ring-gray-900/5 p-4 dark:bg-gray-800 dark:ring-white/5">
                <div className="flex items-start gap-4">
                  <div>
                    <h3 className="flex items-center gap-2 text-lg font-semibold text-gray-900 dark:text-gray-50"><FaCode className="hidden" />Tech Stack</h3>
                    <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">Technologies I work with regularly.</p>
                    <div className="mt-4 flex flex-wrap items-center gap-3">
                      <div className="flex items-center gap-2 px-2 py-1 bg-gray-100 rounded-full dark:bg-gray-700">
                        <SiHtml5 className="text-xl text-orange-600" aria-hidden />
                        <span className="sr-only">HTML5</span>
                      </div>

                      <div className="flex items-center gap-2 px-2 py-1 bg-gray-100 rounded-full dark:bg-gray-700">
                        <SiCss3 className="text-xl text-blue-600" aria-hidden />
                        <span className="sr-only">CSS3</span>
                      </div>

                      <div className="flex items-center gap-2 px-2 py-1 bg-gray-100 rounded-full dark:bg-gray-700">
                        <SiJavascript className="text-xl text-yellow-600" aria-hidden />
                        <span className="sr-only">JavaScript</span>
                      </div>

                      <div className="flex items-center gap-2 px-2 py-1 bg-gray-100 rounded-full dark:bg-gray-700">
                        <SiKotlin className="text-xl text-violet-600" aria-hidden />
                        <span className="sr-only">Kotlin</span>
                      </div>

                      <div className="flex items-center gap-2 px-2 py-1 bg-gray-100 rounded-full dark:bg-gray-700">
                        <SiAndroid className="text-xl text-green-600" aria-hidden />
                        <span className="sr-only">Jetpack Compose (Android)</span>
                      </div>
                    </div>

                    {/* Socials heading + icons inside the card */}
                    <h4 className="mt-4 text-lg font-semibold text-gray-900 dark:text-gray-50">Socials</h4>
                    <div className="mt-2 flex items-center gap-4">
                      <a href="https://github.com/" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-gray-500 dark:text-gray-400 hover:text-gray-800 dark:hover:text-white transition-colors text-[20px]">
                        <FaGithub />
                      </a>
                      <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-gray-500 dark:text-gray-400 hover:text-gray-800 dark:hover:text-white transition-colors text-[20px]">
                        <FaLinkedin />
                      </a>
                      <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="text-gray-500 dark:text-gray-400 hover:text-gray-800 dark:hover:text-white transition-colors text-[20px]">
                        <FaTwitter />
                      </a>
                    </div>
                  </div>
                </div>
              </article>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;

