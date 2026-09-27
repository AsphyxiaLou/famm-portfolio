'use client'; // This ensures the component works smoothly in client-side Next.js

import Image from 'next/image';
import { ArrowRight, Download } from 'lucide-react';

export default function Hero() {
  return (
    <section className="py-20 md:py-28 max-w-5xl mx-auto px-6 flex flex-col md:flex-row items-center gap-12 text-center md:text-left">
      
      {/* 1. Image and Effect Container */}
      <div className="relative group flex-shrink-0">
        {/* Subtle decorative background circle */}
        <div className="absolute inset-0 scale-105 rounded-full bg-blue-100 dark:bg-blue-900 blur-2xl opacity-60 group-hover:opacity-100 transition-opacity duration-500"></div>
        
        {/* The Profile Image */}
        <Image
          src="/profile.png" // Links to the image in the public folder
          alt="Profile Picture"
          width={180}
          height={180}
          priority // Tells Next.js to load this picture first for good performance
          className="relative rounded-full aspect-square object-cover border-4 border-white dark:border-slate-800 shadow-xl transition-all duration-300 transform group-hover:scale-110 group-hover:shadow-2xl group-hover:border-blue-300 dark:group-hover:border-blue-600 cursor-pointer"
        />
      </div>

      {/* 2. Text Content Container */}
      <div className="flex flex-col items-center md:items-start gap-5">
        <span className="px-4 py-1.5 text-xs font-semibold rounded-full bg-blue-100 text-blue-700 dark:bg-blue-900/50 dark:text-blue-300">
          Personal Portfolio
        </span>

        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-slate-100 leading-tight">
          Hi, I'm <span className="text-blue-600 dark:text-blue-400">Francis Arth Marquez Melig</span>
        </h1>

        <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 max-w-2xl leading-relaxed">
          An Information Technology student passionate about web development, mobile application development, and creating clean, user-focused digital solutions.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-4 mt-3 justify-center md:justify-start">
          <a
            href="#contact"
            className="flex items-center gap-2.5 px-7 py-3 rounded-xl bg-blue-600 text-white font-medium hover:bg-blue-700 transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0"
          >
            Get In Touch <ArrowRight className="w-5 h-5" />
          </a>
          <a
            href="/resume.pdf" // Placeholder path for resume
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2.5 px-7 py-3 rounded-xl border-2 border-slate-300 dark:border-slate-700 text-slate-800 dark:text-slate-100 font-medium hover:bg-slate-100 dark:hover:bg-slate-800 transition-all hover:border-slate-400 dark:hover:border-slate-600"
          >
            Download Resume <Download className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
}