import React from 'react';
import { motion } from 'framer-motion';
import { Quote, ShieldCheck, GitPullRequest, Star } from 'lucide-react';
import { TESTIMONIALS } from '../../data/portfolioData';

export const Testimonials: React.FC = () => {
  if (TESTIMONIALS.length === 0) {
    return null;
  }

  const totalPrsReviewed = TESTIMONIALS.reduce((sum, item) => sum + (item.prsReviewed ?? 0), 0);
  const relationSummary = Array.from(new Set(TESTIMONIALS.map((item) => item.relation))).slice(0, 3).join(' · ');
  const trustStats = [
    { label: 'PRs Reviewed Together', value: totalPrsReviewed > 0 ? `${totalPrsReviewed}` : 'N/A' },
    { label: 'Positive References', value: `${TESTIMONIALS.length}` },
    { label: 'Team Contexts', value: relationSummary || 'N/A' },
  ];

  return (
    <section id="testimonials" className="py-24 relative bg-[#090909]">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/8 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-4 max-w-2xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-[#D4AF37]">
            08 / VERIFIED PEER RECOMMENDATIONS
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            What staff engineers{' '}
            <span className="text-gold-gradient">actually say</span>.
          </h2>
          <p className="text-sm text-gray-400 font-mono">
            Authentic feedback from engineering managers, teammates, and mentors — with quantifiable context.
          </p>
        </motion.div>

        {/* Testimonial cards - masonry feel */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {TESTIMONIALS.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="group relative p-6 rounded-2xl bg-[#111111] border border-white/8 hover:border-white/15 transition-all duration-300 flex flex-col justify-between space-y-5"
            >
              {/* Gold top accent line */}
              <div className="absolute top-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="space-y-4">
                {/* Verification + context */}
                <div className="flex items-center justify-between flex-wrap gap-2">
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#D4AF37]/8 border border-[#D4AF37]/25 text-[10px] font-mono text-[#D4AF37] font-semibold">
                    <ShieldCheck className="w-3 h-3" />
                    {item.verificationBadge}
                  </div>
                  {item.prsReviewed && (
                    <div className="inline-flex items-center gap-1 text-[10px] font-mono text-gray-400">
                      <GitPullRequest className="w-3 h-3 text-emerald-400" />
                      {item.prsReviewed} PRs reviewed together
                    </div>
                  )}
                </div>

                {/* Star rating */}
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-[#D4AF37] text-[#D4AF37]" />
                  ))}
                </div>

                {/* Quote */}
                <Quote className="w-6 h-6 text-[#D4AF37] opacity-40" />
                <blockquote className="text-sm text-gray-300 leading-relaxed">
                  "{item.quote}"
                </blockquote>
              </div>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-white/8">
                {/* Avatar placeholder with initials */}
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#D4AF37]/20 to-[#8B1E3F]/20 border border-white/10 flex items-center justify-center shrink-0">
                  <span className="text-xs font-bold text-[#D4AF37]">
                    {item.author.split(' ').map(n => n[0]).join('').slice(0, 2)}
                  </span>
                </div>
                <div>
                  <div className="text-sm font-semibold text-white" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                    {item.author}
                  </div>
                  <div className="text-[11px] font-mono text-[#D4AF37]">
                    {item.role}
                  </div>
                  <div className="text-[10px] font-mono text-gray-500">
                    {item.organization} · {item.relation}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust signal bar */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 p-4 rounded-2xl bg-[#111111] border border-white/8 flex flex-wrap items-center justify-center gap-8 text-center"
        >
          {trustStats.map((stat, i) => (
            <div key={i} className="space-y-0.5">
              <div className="text-lg font-bold text-[#D4AF37]" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>{stat.value}</div>
              <div className="text-[10px] font-mono text-gray-500 uppercase tracking-wider">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
