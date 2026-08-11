import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Download, FileText, Printer } from 'lucide-react';
import confetti from 'canvas-confetti';
import { PERSONAL_INFO, EXPERIENCE, PROJECTS, EDUCATION_TIMELINE, RECRUITER_FAST_PASS } from '../../data/portfolioData';
import { SpotlightCard } from '../ui/SpotlightCard';
import { MagneticButton } from '../ui/MagneticButton';

export const ResumePreview: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'summary' | 'experience' | 'projects' | 'education'>('summary');
  const targetRoleLabel = RECRUITER_FAST_PASS.roles.slice(0, 2).join(' / ') || PERSONAL_INFO.title;

  const handleDownload = () => {
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#D4AF37', '#F3E5AB', '#8B1E3F', '#FFFFFF']
    });
    window.open(PERSONAL_INFO.resumeUrl, '_blank');
  };

  return (
    <section id="resume" className="py-28 relative bg-[#090909]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-4 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-[#D4AF37]">
              07 // INTERACTIVE RESUME HUB
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold font-display text-white tracking-tight">
              A concise professional record, built for <span className="text-gold-gradient">serious hiring conversations</span>.
            </h2>
          </div>

          <div className="flex items-center gap-3">
            <MagneticButton onClick={handleDownload} variant="gold" icon={<Download className="w-4 h-4" />}>
              Download Resume PDF
            </MagneticButton>
          </div>
        </div>

        {/* Interactive Resume Card Container */}
        <SpotlightCard className="p-0 overflow-hidden border border-[#D4AF37]/30">
          {/* Resume Navigation Header */}
          <div className="flex flex-wrap items-center justify-between gap-4 p-4 sm:p-6 bg-[#111111] border-b border-white/10">
            <div className="flex items-center gap-3">
              <FileText className="w-5 h-5 text-[#D4AF37]" />
              <div>
                <h3 className="text-base font-bold text-white font-display">{PERSONAL_INFO.name} — Resume</h3>
                <span className="text-xs font-mono text-gray-400">Target Role: {targetRoleLabel}</span>
              </div>
            </div>

            {/* View Tabs */}
            <div className="flex flex-wrap gap-1 p-1 rounded-full bg-black/40 border border-white/10">
              {(['summary', 'experience', 'projects', 'education'] as const).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-mono capitalize transition-all ${
                    activeTab === tab
                      ? 'bg-[#D4AF37] text-[#090909] font-bold'
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          {/* Resume Document Content Box */}
          <div className="p-6 sm:p-10 font-sans space-y-8 bg-[#090909]">
            {activeTab === 'summary' && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
                <div className="space-y-2">
                  <h4 className="text-sm font-mono text-[#D4AF37] uppercase tracking-wider font-semibold">
                    EXECUTIVE SUMMARY
                  </h4>
                  <p className="text-base text-gray-200 leading-relaxed font-normal">
                    {PERSONAL_INFO.shortBio} I tend to work at the intersection of product experience, runtime performance, and long-term maintainability, with a strong bias toward systems that stay useful after the first launch.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-white/10">
                  <div className="space-y-2">
                    <h5 className="text-xs font-mono text-gray-400">CORE COMPETENCIES</h5>
                    <ul className="space-y-1 text-xs text-gray-300 font-mono">
                      <li>• Distributed Microservices & Event Streaming</li>
                      <li>• Applied LLM RAG & Vector Indexing</li>
                      <li>• Full-Stack React / Next.js / TypeScript</li>
                      <li>• High-Concurrency Node.js & Database Tuning</li>
                    </ul>
                  </div>

                  <div className="space-y-2">
                    <h5 className="text-xs font-mono text-gray-400">TARGET RECRUITER VERIFICATION</h5>
                    <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-xs text-gray-300 font-mono space-y-1">
                      <span className="text-[#D4AF37]">STATUS:</span> Available for Full-Time & Internship Roles.
                      <br />
                      <span className="text-[#D4AF37]">LOCATION:</span> Flexible / Remote / Open to relocation.
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === 'experience' && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
                <h4 className="text-sm font-mono text-[#D4AF37] uppercase tracking-wider font-semibold">
                  PROFESSIONAL ENGINEERING EXPERIENCE
                </h4>
                {EXPERIENCE.map((exp, idx) => (
                  <div key={idx} className="p-4 rounded-xl bg-[#111111] border border-white/10 space-y-2">
                    <div className="flex justify-between text-sm font-bold text-white">
                      <span>{exp.role} — <span className="text-[#D4AF37]">{exp.company}</span></span>
                      <span className="font-mono text-xs text-gray-400">{exp.period}</span>
                    </div>
                    <ul className="space-y-1 text-xs text-gray-300">
                      {exp.impactHighlights.map((h, hIdx) => (
                        <li key={hIdx}>• {h}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </motion.div>
            )}

            {activeTab === 'projects' && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
                <h4 className="text-sm font-mono text-[#D4AF37] uppercase tracking-wider font-semibold">
                  KEY PRODUCT CASE STUDIES
                </h4>
                {PROJECTS.map((proj, idx) => (
                  <div key={idx} className="p-4 rounded-xl bg-[#111111] border border-white/10 space-y-2">
                    <div className="flex justify-between text-sm font-bold text-white">
                      <span>{proj.title}</span>
                      <span className="font-mono text-xs text-[#D4AF37]">{proj.category}</span>
                    </div>
                    <p className="text-xs text-gray-300">{proj.solution}</p>
                  </div>
                ))}
              </motion.div>
            )}

            {activeTab === 'education' && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-4">
                <h4 className="text-sm font-mono text-[#D4AF37] uppercase tracking-wider font-semibold">
                  EDUCATION & ACADEMIC CREDENTIALS
                </h4>
                <div className="p-4 rounded-xl bg-[#111111] border border-white/10 space-y-2">
                  <div className="text-base font-bold text-white">{EDUCATION_TIMELINE.degree}</div>
                  <div className="text-xs font-mono text-gray-400">{EDUCATION_TIMELINE.institution} | {EDUCATION_TIMELINE.period}</div>
                  <div className="text-xs text-[#D4AF37] font-semibold">{EDUCATION_TIMELINE.grade}</div>
                </div>
              </motion.div>
            )}
          </div>

          {/* Footer Bar */}
          <div className="flex items-center justify-between p-4 bg-[#111111] border-t border-white/10 text-xs font-mono text-gray-400">
            <span>Candidate Record</span>
            <button onClick={handleDownload} className="text-[#D4AF37] hover:underline flex items-center gap-1">
              Print / Save PDF <Printer className="w-3.5 h-3.5" />
            </button>
          </div>
        </SpotlightCard>
      </div>
    </section>
  );
};
