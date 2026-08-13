import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, Cpu, Sparkles, ArrowRight, ShieldCheck, RefreshCw } from 'lucide-react';
import { EXPERIENCE, PHILOSOPHY_PILLARS, PROJECTS } from '../../data/portfolioData';

const iconMap: Record<string, React.ReactNode> = {
  Terminal: <Terminal className="w-5 h-5 text-[#D4AF37]" />,
  Cpu: <Cpu className="w-5 h-5 text-[#D4AF37]" />,
  ShieldCheck: <ShieldCheck className="w-5 h-5 text-[#D4AF37]" />,
  RefreshCw: <RefreshCw className="w-5 h-5 text-[#D4AF37]" />,
  Sparkles: <Sparkles className="w-5 h-5 text-[#D4AF37]" />,
};

export const Philosophy: React.FC = () => {
  const featuredProjectCount = PROJECTS.filter((project) => project.featured).length;
  const internshipCount = EXPERIENCE.filter((item) => item.type === 'Internship').length;
  const stats = [
    { label: 'B.Tech • Information Technology', value: '2023–27' },
    { label: 'Industry Internship', value: String(internshipCount) },
    { label: 'Featured Projects', value: String(featuredProjectCount) },
    { label: 'Primary Focus', value: 'AI + Full-Stack' },
  ];
  return (
    <section id="about" className="py-24 relative bg-[#090909]">
      {/* Subtle section separator */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/8 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">

          {/* Left: Header + big statement */}
          <div className="lg:col-span-5 space-y-8 lg:sticky lg:top-28">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-[#D4AF37]">
                01 / ENGINEERING PHILOSOPHY
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-[1.1]" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                I don't just build features. I build{' '}
                <span className="text-gold-gradient">systems that can evolve.</span>
              </h2>

              <p className="text-base text-gray-400 leading-relaxed">
                I care about understanding the problem before choosing the technology. Whether I'm building an AI system, a full-stack application, or a data workflow, I focus on clear architecture, useful intelligence, reliable execution, and continuous iteration.
              </p>

              <div className="flex items-center gap-2 text-xs font-mono text-gray-500 group">
                <a href="#projects" className="flex items-center gap-2 hover:text-[#D4AF37] transition-colors">
                  See how this thinking shows up in my projects
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </motion.div>

            {/* Quick stats bar */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="grid grid-cols-2 gap-3"
            >
              {stats.map((stat) => (
                <div key={stat.label} className="p-3 rounded-xl bg-[#111111] border border-white/8">
                  <div className="text-lg font-bold text-white break-words" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>{stat.value}</div>
                  <div className="text-[10px] font-mono text-gray-500 uppercase tracking-wider">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right: Philosophy pillars as a flowing list */}
          <div className="lg:col-span-7 space-y-4">
            {PHILOSOPHY_PILLARS.map((pillar, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group relative p-6 rounded-2xl bg-[#111111] border border-white/8 hover:border-[#D4AF37]/30 transition-all duration-300 hover:bg-[#131313]"
              >
                {/* Hover gradient */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" style={{ background: 'radial-gradient(400px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(212,175,55,0.04), transparent 80%)' }} />

                <div className="flex items-start gap-4 relative">
                  <div className="shrink-0 w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-[#D4AF37]/30 transition-colors">
                    {iconMap[pillar.icon] ?? <Sparkles className="w-5 h-5 text-[#D4AF37]" />}
                  </div>
                  <div className="space-y-2 flex-1">
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-mono text-gray-600 uppercase tracking-widest">
                        {String(idx + 1).padStart(2, '0')}
                      </span>
                      <h3 className="text-base font-semibold text-white group-hover:text-[#D4AF37] transition-colors duration-300" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                        {pillar.title}
                      </h3>
                    </div>
                    <p className="text-sm text-gray-400 leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Differentiator quote */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-6 p-6 rounded-2xl border border-[#D4AF37]/20 bg-[#D4AF37]/3"
            >
              <div className="text-3xl text-[#D4AF37] font-serif leading-none mb-4 opacity-50">"</div>
              <p className="text-sm text-gray-200 leading-relaxed italic">
                I don't want to just make things work. I want to understand why they work, where they break, and how to make the next version better.
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {['Clean Architecture', 'Useful AI', 'Reliable Systems', 'Continuous Iteration'].map((tag) => (
                  <span key={tag} className="px-2.5 py-1 rounded-md bg-[#D4AF37]/8 border border-[#D4AF37]/20 text-[11px] font-mono text-[#D4AF37]">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
