import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-black">
      <div className="mx-auto max-w-7xl px-6 py-4 md:flex md:items-center md:justify-between lg:px-8">
        <div className="flex mb-2 items-center justify-center md:justify-start space-x-4">
          <a href="https://github.com/Habeebaholasubomi2001" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-gray-500 dark:text-gray-400 hover:text-gray-800 dark:hover:text-white transition-colors text-[18px]">
            <FaGithub />
          </a>
          <a href="http://linkedin.com/in/sulayman-habibat-olasubomi" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-gray-500 dark:text-gray-400 hover:text-gray-800 dark:hover:text-white transition-colors text-[18px]">
            <FaLinkedin />
          </a>
          <a href="https://twitter.com/@HabeebahOlasub1" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="text-gray-500 dark:text-gray-400 hover:text-gray-800 dark:hover:text-white transition-colors text-[18px]">
            <FaTwitter />
          </a>
        </div>
        <div className="md:order-1">
          <p className="text-center text-xs leading-5 text-gray-500">
            &copy; {new Date().getFullYear()} Habeebah Olasubomi. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
