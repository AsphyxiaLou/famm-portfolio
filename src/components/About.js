'use client';

import { useState } from 'react';
import { Award, X, ExternalLink, ShieldCheck } from 'lucide-react';

export default function About() {
  const [isOpen, setIsOpen] = useState(false);

  // Your 5 actual certificates linked to the public folder
  const certificates = [
    {
      title: 'CCNA 1: Introduction to Networks',
      description: 'Certificate of Completion for CCNA 1 Course',
      issuer: 'Cisco Networking Academy',
      image: '/CCNA1.png',
    },
    {
      title: 'CCNA 2: Switching, Routing, and Wireless Essentials',
      description: 'Certificate of Completion for CCNA 2 Course',
      issuer: 'Cisco Networking Academy',
      image: '/CCNA2.png',
    },
    {
      title: 'Wadhwani Pitching Event Recognition',
      description: 'Certificate of Recognition in Start-up Pitching Event',
      issuer: 'Wadhwani Foundation',
      image: '/wadwhani.jpg',
    },
    {
      title: 'Most Marketable Start-up Award',
      description: 'Certificate awarded for being the Most Marketable Start-up',
      issuer: 'Start-up Event Committee',
      image: '/Most Marketable.jpg',
    },
    {
      title: 'AI Literacy & Responsible Use',
      description: 'Certificate of Completion for AI Literacy and Responsible Use',
      issuer: 'Educational Course / Organization',
      image: '/AI Literacy.png',
    },
  ];

  return (
    <section id="about" className="min-h-screen flex flex-col justify-center max-w-5xl mx-auto px-6 py-12">
      {/* Centered Header */}
      <div className="flex flex-col items-center text-center mb-6">
        <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-100">
          About Me
        </h2>
        <p className="text-slate-600 dark:text-slate-400 text-sm mt-1">
          A quick look into my background and passion for development.
        </p>
      </div>

      {/* Main Content Box */}
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-8 shadow-sm max-w-3xl mx-auto text-center space-y-6">
        <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-lg">
          "I am an Information Technology student specializing in Mobile Application Development and UI/UX design. I focus on building practical, visually appealing, and user-centric applications that solve real-world problems. With hands-on experience across mobile, web, and cloud-based systems, I am eager to contribute my skills to an OJT position in software or UI/UX development."
        </p>

        {/* Clickable Title Badge */}
        <div className="pt-2 flex justify-center">
          <button
            onClick={() => setIsOpen(true)}
            className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-blue-50 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-800 text-blue-700 dark:text-blue-300 font-semibold text-sm hover:bg-blue-100 dark:hover:bg-blue-900/80 hover:scale-105 transition-all shadow-sm cursor-pointer"
          >
            <Award className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            <span>Certificates and Recognition</span>
            <span className="text-xs bg-blue-200 dark:bg-blue-800 px-2.5 py-0.5 rounded-full text-blue-800 dark:text-blue-200 font-bold">
              5 Certificates
            </span>
          </button>
        </div>
      </div>

      {/* Certificate Modal / Popup */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm transition-opacity">
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl max-w-xl w-full p-6 shadow-2xl relative text-left">
            
            {/* Modal Header */}
            <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-4 mb-4">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100">
                  Certificates & Credentials
                </h3>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Certificates List */}
            <div className="space-y-3 max-h-[60vh] overflow-y-auto pr-1">
              {certificates.map((cert, index) => (
                <div
                  key={index}
                  className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/80 dark:border-slate-700/60 flex items-center justify-between gap-4 hover:border-blue-500/50 transition-all"
                >
                  <div>
                    <h4 className="font-semibold text-slate-900 dark:text-slate-100 text-sm">
                      {cert.title}
                    </h4>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                      {cert.description} • <span className="font-medium text-slate-600 dark:text-slate-300">{cert.issuer}</span>
                    </p>
                  </div>
                  <a
                    href={cert.image}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-lg bg-blue-100 dark:bg-blue-900/60 text-blue-700 dark:text-blue-300 hover:bg-blue-200 dark:hover:bg-blue-800 transition-colors flex-shrink-0"
                  >
                    View <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              ))}
            </div>

            {/* Modal Footer */}
            <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800 flex justify-end">
              <button
                onClick={() => setIsOpen(false)}
                className="px-4 py-2 rounded-xl bg-slate-200 dark:bg-slate-800 text-slate-800 dark:text-slate-200 text-sm font-medium hover:opacity-80 transition-opacity cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}