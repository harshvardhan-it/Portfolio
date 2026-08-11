import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, MapPin, Calendar } from 'lucide-react';
import { EXPERIENCE } from '../../data/portfolioData';

const typeBadge: Record<string, string> = {
  Internship: 'bg-[#D4AF37]/10 text-[#F3E5AB] border-[#D4AF37]/30',
  'Open Source': 'bg-emerald-500/10 text-emerald-300 border-emerald-500/30',
  Leadership: 'bg-blue-500/10 text-blue-300 border-blue-500/30',
  Teaching: 'bg-purple-500/10 text-purple-300 border-purple-500/30',
};

const typeLabel: Record<string, string> = {
  Internship: 'INTERNSHIP',
  'Open Source': 'OPEN SOURCE',
  Leadership: 'LEADERSHIP',
  Teaching: 'MENTORSHIP',
};

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 relative bg-[#090909]">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/8 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-4 max-w-2xl mb-14"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-[#D4AF37]">
            04 / CAREER & IMPACT TIMELINE
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            Where code met{' '}
            <span className="text-gold-gradient">real-world stakes</span>.
          </h2>
          <p className="text-base text-gray-400 leading-relaxed">
            Production codebases, open-source communities, and teams that demanded measurable results.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-5 sm:left-7 top-0 bottom-0 w-px bg-gradient-to-b from-[#D4AF37]/40 via-[#D4AF37]/15 to-transparent" />

          <div className="space-y-8">
            {EXPERIENCE.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: idx * 0.12 }}
                className="relative pl-14 sm:pl-20 group"
              >
                {/* Timeline dot */}
                <div className="absolute left-3 sm:left-5 top-6 w-4 h-4 rounded-full bg-[#090909] border-2 border-[#D4AF37] group-hover:scale-125 group-hover:border-[#F3E5AB] transition-all duration-300" />

                {/* Card */}
                <div className="rounded-2xl bg-[#111111] border border-white/8 hover:border-white/15 transition-all duration-300 overflow-hidden group-hover:bg-[#131313]">
                  {/* Card header */}
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 p-6 pb-4 border-b border-white/6">
                    <div className="space-y-1.5">
                      <div className="flex flex-wrap items-center gap-2">
                        <h3 className="text-lg font-bold text-white" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                          {item.role}
                        </h3>
                        <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-mono border ${typeBadge[item.type] ?? 'bg-white/5 text-gray-300 border-white/10'}`}>
                          {typeLabel[item.type] ?? item.type}
                        </span>
                      </div>
                      <div className="flex flex-wrap items-center gap-3 text-xs font-mono">
                        <span className="text-[#D4AF37] font-semibold">{item.company}</span>
                        <span className="flex items-center gap-1 text-gray-500">
                          <MapPin className="w-3 h-3" />
                          {item.location}
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 border border-white/8 text-xs font-mono text-gray-400 shrink-0 self-start">
                      <Calendar className="w-3 h-3" />
                      {item.period}
                    </div>
                  </div>

                  {/* Card body */}
                  <div className="p-6 space-y-5">
                    <p className="text-sm text-gray-400 leading-relaxed">
                      {item.description}
                    </p>

                    {/* Impact bullets */}
                    <div className="space-y-2">
                      <div className="text-[10px] font-mono text-[#D4AF37] uppercase tracking-widest font-semibold">
                        Key Impact & Deliverables
                      </div>
                      <div className="space-y-2">
                        {item.impactHighlights.map((bullet, bIdx) => (
                          <div key={bIdx} className="flex items-start gap-2.5 text-sm text-gray-300">
                            <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                            <span>{bullet}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Tech pills */}
                    <div className="flex flex-wrap gap-1.5 pt-2 border-t border-white/6">
                      {item.technologies.map((tech, tIdx) => (
                        <span key={tIdx} className="px-2.5 py-1 rounded-md bg-white/5 text-[11px] font-mono text-gray-400 border border-white/6 hover:border-[#D4AF37]/20 hover:text-gray-200 transition-colors">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
