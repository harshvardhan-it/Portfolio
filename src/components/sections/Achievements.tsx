import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Award, Code2, Star, ExternalLink } from 'lucide-react';
import { ACHIEVEMENTS } from '../../data/portfolioData';

const typeIcon: Record<string, React.ReactNode> = {
  Hackathon: <Trophy className="w-5 h-5 text-[#D4AF37]" />,
  Award: <Award className="w-5 h-5 text-[#D4AF37]" />,
  Certification: <Star className="w-5 h-5 text-[#D4AF37]" />,
  Competition: <Code2 className="w-5 h-5 text-[#8B1E3F]" />,
};

const typeBg: Record<string, string> = {
  Hackathon: 'bg-[#D4AF37]/10 border-[#D4AF37]/30 text-[#F3E5AB]',
  Award: 'bg-[#D4AF37]/10 border-[#D4AF37]/30 text-[#F3E5AB]',
  Certification: 'bg-blue-500/10 border-blue-500/30 text-blue-300',
  Competition: 'bg-[#8B1E3F]/15 border-[#8B1E3F]/40 text-red-200',
};

export const Achievements: React.FC = () => {
  return (
    <section id="achievements" className="py-24 relative bg-[#090909]">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/8 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14"
        >
          <div className="space-y-4 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-[#D4AF37]">
              05 / RECOGNITION & CREDENTIALS
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              Evidence of{' '}
              <span className="text-gold-gradient">practical growth</span>.
            </h2>
          </div>
          <p className="text-sm text-gray-400 font-mono max-w-xs leading-relaxed">
            Verified work, internships, and completed projects that reflect how I build and learn.
          </p>
        </motion.div>

        {/* Bento-style layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {ACHIEVEMENTS.map((item, idx) => {
            const isFeatured = idx === 0;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={`group relative rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isFeatured
                    ? 'border-[#D4AF37]/40 bg-gradient-to-br from-[#161616] to-[#111111] hover:border-[#D4AF37]/60'
                    : 'border-white/8 bg-[#111111] hover:border-white/15 hover:bg-[#131313]'
                }`}
              >
                {isFeatured && (
                  <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/50 to-transparent" />
                )}

                <div className="p-6 space-y-4">
                  {/* Header row */}
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center border ${
                        isFeatured ? 'bg-[#D4AF37]/10 border-[#D4AF37]/30' : 'bg-white/5 border-white/10'
                      }`}>
                        {typeIcon[item.type] ?? <Trophy className="w-5 h-5 text-[#D4AF37]" />}
                      </div>
                      <div>
                        <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-mono border ${typeBg[item.type] ?? 'bg-white/5 border-white/10 text-gray-300'}`}>
                          {item.badgeText}
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 shrink-0">
                      <span className="text-xs font-mono text-gray-500">{item.year}</span>
                      {item.proofLink && (
                        <a
                          href={item.proofLink}
                          target="_blank"
                          rel="noreferrer"
                          className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-colors"
                          title="View Proof"
                        >
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Title & org */}
                  <div className="space-y-1">
                    <h3 className={`text-lg font-bold leading-snug ${isFeatured ? 'text-white' : 'text-white'}`} style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                      {item.title}
                    </h3>
                    <div className="text-xs font-mono text-[#D4AF37]">{item.organization}</div>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-gray-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
