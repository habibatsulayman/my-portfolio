"use client";
import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <nav className="w-full fixed top-0 left-0 z-50 bg-white/80 dark:bg-champagne-mist-500 backdrop-blur-sm shadow-md">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-gray-800 dark:text-white hover:text-champagne-mist-300 transition-colors">
              <Link href="/">H.O.S</Link>
            </h1>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <a href="#about" onClick={(e) => handleLinkClick(e, 'about')} className="text-champagne-mist-900 dark:text-white font-bold transition-colors">
                About
              </a>
              <a href="#services" onClick={(e) => handleLinkClick(e, 'services')} className="text-champagne-mist-900 dark:text-white font-bold transition-colors">
                Services
              </a>
              <a
                href="#contact"
                onClick={(e) => handleLinkClick(e, 'contact')}
                className="bg-[var(--color-champagne-mist-600)] dark:bg-champagne-mist-900 text-white font-semibold rounded-full px-4 py-1.5 hover:bg-[var(--color-champagne-mist-500)] transition-all duration-300 shadow-sm"
              >
                Contact Me
              </a>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="bg-champagne-mist-600 dark:bg-champagne-mist-800 inline-flex items-center justify-center p-2 rounded-md text-gray-200 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-2 sm:px-3">
            <a href="#about" onClick={(e) => handleLinkClick(e, 'about')} className="text-champagne-mist-900 dark:text-champagne-mist-900 block px-3 py-1 rounded-md text-base font-medium">
              About
            </a>
            <a href="#services" onClick={(e) => handleLinkClick(e, 'services')} className="text-champagne-mist-900 block px-3 py-1 rounded-md text-base font-medium">
              Services
            </a>
            <a
              href="#contact"
              onClick={(e) => handleLinkClick(e, 'contact')}
              className="bg-[var(--color-champagne-mist-600)] text-white dark:bg-champagne-mist-900 inline px-3 py-1.5 rounded-md text-base font-medium"
            >
              Contact Me
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
