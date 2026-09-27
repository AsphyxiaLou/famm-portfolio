'use client';

import { useRef } from 'react';
import { ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';

export default function Projects() {
  const scrollContainerRef = useRef(null);

  const projects = [
    {
      title: 'BloodConnect (Capstone Project)',
      description: 'A predictive system designed for Red Cross that forecasts blood shortages and provides prescriptive recommendations to prevent blood wastage and improve inventory management.',
      tags: ['Capstone', 'Data Analytics', 'Next.js', 'Machine Learning'],
      github: '#',
      demo: '#',
    },
    {
      title: 'RentRide - Car Rental SaaS',
      description: 'A modern Software-as-a-Service (SaaS) platform enabling users to seamlessly browse, book, and rent vehicles online.',
      tags: ['SaaS', 'Web App', 'React / Next.js', 'Database'],
      github: '#',
      demo: '#',
    },
    {
      title: 'BUKSU Digital Student Handbook',
      description: 'An online system built for the Supreme Student Council (SSC) allowing students to conveniently access and navigate the university handbook digitally without needing a physical copy.',
      tags: ['Web System', 'SSC Project', 'JavaScript', 'Tailwind CSS'],
      github: '#',
      demo: '#',
    },
    {
      title: 'Central Mindanao Newswatch Mobile App',
      description: 'A mobile application and cloud storage platform enabling news publishers to upload digital newspapers, manage archives, and provide online access to readers.',
      tags: ['Mobile App', 'Cloud Storage', 'Database'],
      github: '#',
      demo: '#',
    },
    {
      title: 'Library Room Reservation System',
      description: 'A booking system for university students to reserve library study rooms in advance, eliminating the hassle of manually checking room availability on campus.',
      tags: ['Web Application', 'Booking System', 'Database'],
      github: '#',
      demo: '#',
    },
    {
      title: 'SIKMA Adventure',
      description: 'A 2D platformer game developed in Java emphasizing core Object-Oriented Programming (OOP) concepts such as inheritance, polymorphism, and encapsulation.',
      tags: ['Java', 'OOP', 'Game Development'],
      github: '#',
      demo: '#',
    },
    {
      title: 'SSC Calendar Management System',
      description: 'A CLI/desktop management tool built in C programming that allows the Supreme Student Council to schedule, manage, and track campus events efficiently.',
      tags: ['C Language', 'Data Structures', 'CLI / Event Management'],
      github: '#',
      demo: '#',
    },
  ];

  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const { scrollLeft, clientWidth } = scrollContainerRef.current;
      const scrollAmount = clientWidth;
      scrollContainerRef.current.scrollTo({
        left: direction === 'left' ? scrollLeft - scrollAmount : scrollLeft + scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section id="projects" className="min-h-screen flex flex-col justify-center max-w-5xl mx-auto px-6 py-12">
      {/* Header */}
      <div className="flex flex-col items-center text-center mb-10">
        <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-100">
          Featured Projects
        </h2>
        <p className="text-slate-600 dark:text-slate-400 text-sm mt-1 max-w-lg">
          Slide through to explore my academic, organizational, and capstone systems.
        </p>
      </div>

      {/* Relative Wrapper for Floating Side Buttons */}
      <div className="relative group">
        {/* Left Floating Button */}
        <button
          onClick={() => scroll('left')}
          className="absolute -left-4 sm:-left-6 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-200 hover:bg-white dark:hover:bg-slate-900 hover:scale-110 transition-all duration-200 shadow-lg cursor-pointer"
          aria-label="Previous Projects"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        {/* Right Floating Button */}
        <button
          onClick={() => scroll('right')}
          className="absolute -right-4 sm:-right-6 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-200 hover:bg-white dark:hover:bg-slate-900 hover:scale-110 transition-all duration-200 shadow-lg cursor-pointer"
          aria-label="Next Projects"
        >
          <ChevronRight className="w-5 h-5" />
        </button>

        {/* Horizontal Scroll Container */}
        <div
          ref={scrollContainerRef}
          className="flex gap-6 overflow-x-auto scrollbar-none scroll-smooth py-2 px-1 snap-x snap-mandatory"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {projects.map((project, index) => (
            <div
              key={index}
              className="w-full md:w-[calc(50%-0.75rem)] flex-shrink-0 snap-start p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col justify-between hover:border-blue-500/50 transition-all duration-300"
            >
              <div>
                <span className="text-xs font-semibold text-blue-600 dark:text-blue-400 mb-2 block">
                  0{index + 1} / 0{projects.length}
                </span>
                <h3 className="text-xl font-bold mb-2 text-slate-900 dark:text-slate-100 line-clamp-1">
                  {project.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 mb-4 text-sm leading-relaxed line-clamp-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, tIndex) => (
                    <span
                      key={tIndex}
                      className="text-xs px-2.5 py-1 rounded-md bg-blue-50 dark:bg-blue-950/50 text-blue-700 dark:text-blue-300 font-medium border border-blue-200/50 dark:border-blue-800/50"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-4 text-sm font-medium pt-3 border-t border-slate-100 dark:border-slate-800/60">
                <a
                  href={project.github}
                  className="flex items-center gap-1.5 text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                  </svg>
                  Repository
                </a>
                <a
                  href={project.demo}
                  className="flex items-center gap-1.5 text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  <ExternalLink className="w-4 h-4" /> Demo
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}   