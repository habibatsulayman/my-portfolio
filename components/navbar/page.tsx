"use client";
import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  const linkClass =
    'relative text-gray-700 dark:text-gray-200 font-medium transition-colors duration-200 after:absolute after:left-0 after:-bottom-0.5 after:h-[2px] after:w-0 after:bg-[var(--color-champagne-mist-500)] after:transition-all after:duration-300 hover:text-[var(--color-champagne-mist-600)] hover:after:w-full dark:hover:text-[var(--color-champagne-mist-400)]';

  return (
    <nav
      className={`w-full fixed top-0 left-0 z-50 transition-all duration-300 ${scrolled
          ? 'bg-white/80 dark:bg-gray-950/80 backdrop-blur-md shadow-sm border-b border-gray-200/60 dark:border-gray-800/60'
          : 'bg-white/60 dark:bg-gray-950/60 backdrop-blur-sm'
        }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* Brand */}
          <h1 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white hover:text-[var(--color-champagne-mist-600)] dark:hover:text-[var(--color-champagne-mist-400)] transition-colors duration-200">
            <Link href="/">H.O.S</Link>
          </h1>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#about" onClick={(e) => handleLinkClick(e, 'about')} className={linkClass}>About</a>
            <a href="#services" onClick={(e) => handleLinkClick(e, 'services')} className={linkClass}>Services</a>
            <a
              href="#contact"
              onClick={(e) => handleLinkClick(e, 'contact')}
              className="rounded-full bg-[var(--color-champagne-mist-600)] text-white text-sm font-semibold px-4 py-1.5 hover:bg-[var(--color-champagne-mist-500)] transition-colors duration-200 shadow-sm"
            >
              Contact Me
            </a>
          </div>

          {/* Mobile hamburger */}
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="p-2 rounded-md text-gray-600 dark:text-gray-300 hover:text-[var(--color-champagne-mist-600)] transition-colors"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden border-t border-gray-200 dark:border-gray-800" id="mobile-menu">
          <div className="px-4 pt-3 pb-4 space-y-2">
            <a href="#about" onClick={(e) => handleLinkClick(e, 'about')} className="block px-3 py-2 text-gray-700 dark:text-gray-200 font-medium rounded-md hover:text-[var(--color-champagne-mist-600)] hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors">About</a>
            <a href="#services" onClick={(e) => handleLinkClick(e, 'services')} className="block px-3 py-2 text-gray-700 dark:text-gray-200 font-medium rounded-md hover:text-[var(--color-champagne-mist-600)] hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors">Services</a>
            <a href="#contact" onClick={(e) => handleLinkClick(e, 'contact')} className="block px-3 py-2 text-white bg-[var(--color-champagne-mist-600)] font-semibold rounded-md hover:bg-[var(--color-champagne-mist-500)] transition-colors">Contact Me</a>
          </div>
        </div>
      )}
    </nav>
  );
}
