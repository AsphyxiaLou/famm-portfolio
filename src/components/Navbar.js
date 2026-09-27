'use client';

import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { Sun, Moon, ArrowUp } from 'lucide-react';

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [showGoUp, setShowGoUp] = useState(false);

  useEffect(() => {
    setMounted(true);

    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowGoUp(true);
      } else {
        setShowGoUp(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-40 bg-white/80 dark:bg-slate-950/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 transition-colors">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-2">
          {/* Responsive Brand Name */}
          <a href="#" className="font-bold text-base sm:text-lg text-blue-600 dark:text-blue-400 whitespace-nowrap">
            <span className="sm:hidden">FAMM</span>
            <span className="hidden sm:inline">Francis Arth Marquez Melig</span>
          </a>

          <nav className="flex items-center gap-3 sm:gap-6 text-xs sm:text-sm font-medium">
            <a href="#about" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              About
            </a>
            <a href="#skills" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              Skills
            </a>
            <a href="#projects" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              Projects
            </a>
            <a href="#contact" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              Contact
            </a>

            {/* Light / Dark Mode Toggle */}
            {mounted && (
              <button
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className="p-1.5 sm:p-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors cursor-pointer"
                aria-label="Toggle Theme"
              >
                {theme === 'dark' ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-slate-700" />}
              </button>
            )}
          </nav>
        </div>
      </header>

      {/* Floating Go Up Button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-6 right-6 z-50 p-3.5 rounded-full bg-blue-600 dark:bg-blue-500 text-white shadow-lg hover:bg-blue-700 dark:hover:bg-blue-600 hover:scale-110 active:scale-95 transition-all duration-300 cursor-pointer flex items-center justify-center ${
          showGoUp ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-4 pointer-events-none'
        }`}
        aria-label="Back to Top"
      >
        <ArrowUp className="w-5 h-5" />
      </button>
    </>
  );
}