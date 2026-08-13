import React from 'react';
import { ArrowLeft, Search } from 'lucide-react';

export const NotFoundPage: React.FC = () => {
  return (
    <main className="min-h-[70vh] pt-32 pb-20 bg-[#090909]">
      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        <div className="mx-auto w-14 h-14 rounded-2xl bg-[#D4AF37]/10 border border-[#D4AF37]/25 flex items-center justify-center">
          <Search className="w-6 h-6 text-[#D4AF37]" />
        </div>
        <div className="space-y-3">
          <p className="text-xs font-mono text-[#D4AF37] uppercase tracking-widest">404 / Route not found</p>
          <h1 className="text-4xl sm:text-5xl font-bold text-white font-display">
            This page is not part of the portfolio.
          </h1>
          <p className="text-gray-400 leading-relaxed">
            The core recruiter paths are still available: selected work, experience, resume, and contact.
          </p>
        </div>
        <a
          href="/"
          className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-[#D4AF37] text-[#090909] text-sm font-semibold hover:bg-[#E2C266] transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Return home
        </a>
      </section>
    </main>
  );
};
