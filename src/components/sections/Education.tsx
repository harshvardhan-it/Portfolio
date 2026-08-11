import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Users, CheckCircle2, GraduationCap } from 'lucide-react';
import { EDUCATION_TIMELINE } from '../../data/portfolioData';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-24 relative bg-[#090909]">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/8 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-4 max-w-2xl mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-[#D4AF37]">
            06 / ACADEMIC FOUNDATION
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            Built on rigorous{' '}
            <span className="text-gold-gradient">computer science</span>.
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="relative rounded-2xl bg-[#111111] border border-white/8 overflow-hidden"
        >
          {/* Gold top accent */}
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/40 to-transparent" />

          <div className="p-8 space-y-8">
            {/* Degree header */}
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 pb-6 border-b border-white/8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#D4AF37]/10 border border-[#D4AF37]/25 flex items-center justify-center shrink-0">
                  <GraduationCap className="w-6 h-6 text-[#D4AF37]" />
                </div>
                <div className="space-y-1">
                  <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/25 text-[11px] font-mono text-[#D4AF37] font-semibold">
                    {EDUCATION_TIMELINE.grade}
                  </div>
                  <h3 className="text-xl font-bold text-white" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                    {EDUCATION_TIMELINE.degree}
                  </h3>
                  <p className="text-sm font-mono text-gray-400">
                    {EDUCATION_TIMELINE.institution}
                  </p>
                </div>
              </div>
              <span className="text-xs font-mono px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-gray-400 self-start whitespace-nowrap">
                {EDUCATION_TIMELINE.period}
              </span>
            </div>

            {/* Coursework + Leadership */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-[11px] font-mono text-gray-500 uppercase tracking-widest font-semibold">
                  <BookOpen className="w-3.5 h-3.5 text-[#D4AF37]" />
                  Core CS Coursework
                </div>
                <div className="flex flex-wrap gap-2">
                  {EDUCATION_TIMELINE.relevantCoursework.map((course, idx) => (
                    <span key={idx} className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/8 text-xs text-gray-300 font-mono hover:border-[#D4AF37]/25 hover:text-gray-100 transition-colors">
                      {course}
                    </span>
                  ))}
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-2 text-[11px] font-mono text-gray-500 uppercase tracking-widest font-semibold">
                  <Users className="w-3.5 h-3.5 text-[#D4AF37]" />
                  Leadership & Community
                </div>
                <div className="space-y-2.5">
                  {EDUCATION_TIMELINE.leadership.map((lead, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-sm text-gray-300">
                      <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                      <span>{lead}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
