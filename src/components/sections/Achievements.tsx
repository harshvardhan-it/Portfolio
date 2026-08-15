import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Award, Briefcase, Layers } from 'lucide-react';
import { EXPERIENCE, PROJECTS } from '../../data/portfolioData';

const internship = EXPERIENCE.find((item) => item.type === 'Internship');
const selectedProjects = PROJECTS.filter((project) =>
  ['neurosync', 'pahchanai', 'calderys-data-analytics-dashboard'].includes(project.id),
);

const projectDescriptions: Record<string, string> = {
  neurosync: 'Executive Decision Intelligence Platform',
  pahchanai: 'AI-powered facial recognition & identity system',
  'calderys-data-analytics-dashboard': 'Power BI-based operational intelligence',
};

const credentials = [
  {
    year: '2026',
    label: 'GATE',
    status: 'QUALIFIED',
    title: 'CS & IT',
    description: 'Qualified in GATE 2026 for Computer Science & Information Technology.',
    evidence: {
      href: '/gate-2026-scorecard.pdf',
      label: 'View Scorecard',
      ariaLabel: 'View GATE 2026 scorecard',
    },
    featured: true,
  },
  {
    year: '2026',
    label: 'NPTEL',
    status: 'CERTIFIED',
    title: 'Data Analytics with Python',
    evidence: {
      href: '/nptel-data-analytics-python.pdf',
      label: 'View Certificate',
      ariaLabel: 'View NPTEL Data Analytics with Python certificate',
    },
  },
  {
    year: '2026',
    label: 'NPTEL',
    status: 'CERTIFIED',
    title: 'Business Intelligence & Analytics',
    evidence: {
      href: '/nptel-business-intelligence-analytics.pdf',
      label: 'View Certificate',
      ariaLabel: 'View NPTEL Business Intelligence and Analytics certificate',
    },
  },
  {
    year: '2026',
    label: 'HACKOVERFLOW 4.0',
    status: 'HACKATHON · PARTICIPANT',
    title: 'HackOverFlow',
  },
];

export const Achievements: React.FC = () => {
  const internshipTitle = internship?.role ?? 'Data Analyst Intern';
  const internshipOrganization = internship?.company ?? 'Calderys India Refractories Ltd.';

  return (
    <section id="achievements" className="py-24 relative bg-[#090909]" style={{ scrollMarginTop: '80px' }}>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/8 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14"
        >
          <div className="space-y-5 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-[#D4AF37]">
              05 / EXPERIENCE &amp; PROOF
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              Where learning became <span className="text-gold-gradient">real engineering.</span>
            </h2>
          </div>
          <p className="text-sm text-gray-400 font-mono max-w-xs leading-relaxed">
            A record of the work, experience, and milestones that shaped how I approach software, data, and AI.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="group relative rounded-2xl border border-[#D4AF37]/40 bg-[#111111] transition-all duration-300 hover:-translate-y-1 hover:border-[#D4AF37]/65 overflow-hidden"
          >
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/50 to-transparent" />
            <div className="p-6 space-y-5">
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center border bg-[#D4AF37]/10 border-[#D4AF37]/30 group-hover:bg-[#D4AF37]/15 transition-colors">
                    <Briefcase className="w-5 h-5 text-[#D4AF37]" aria-hidden="true" />
                  </div>
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono border bg-[#D4AF37]/10 border-[#D4AF37]/30 text-[#F3E5AB]">
                    EXPERIENCE
                  </span>
                </div>
                <span className="text-xs font-mono text-gray-500">2025</span>
              </div>

              <div className="space-y-1.5">
                <h3 className="text-xl font-bold leading-snug text-white" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                  {internshipTitle}
                </h3>
                <p className="text-xs font-mono text-[#D4AF37]">{internshipOrganization}</p>
              </div>

              <p className="text-sm text-gray-400 leading-relaxed">
                Built and supported Power BI and Excel reporting workflows for operational asset and inventory data, improving tracking efficiency and reducing data inconsistencies.
              </p>

              <p className="text-[11px] font-mono text-gray-400 border-t border-white/8 pt-4">
                Power BI <span aria-hidden="true">·</span> Excel <span aria-hidden="true">·</span> Data Analytics
              </p>

              <div className="grid grid-cols-2 gap-3 pt-1">
                <div className="rounded-xl border border-[#D4AF37]/20 bg-[#D4AF37]/5 p-3">
                  <div className="text-xl font-bold font-mono text-[#F3E5AB]">+25%</div>
                  <div className="mt-1 text-[10px] font-mono text-gray-400">tracking efficiency</div>
                </div>
                <div className="rounded-xl border border-white/8 bg-white/[0.02] p-3">
                  <div className="text-xl font-bold font-mono text-white">−20%</div>
                  <div className="mt-1 text-[10px] font-mono text-gray-400">data inconsistencies</div>
                </div>
              </div>
            </div>
          </motion.article>

          <motion.article
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="group relative rounded-2xl border border-white/8 bg-[#111111] transition-all duration-300 hover:-translate-y-1 hover:border-[#D4AF37]/45 overflow-hidden"
          >
            <div className="p-6 space-y-5">
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center border bg-white/5 border-white/10 group-hover:bg-[#D4AF37]/10 group-hover:border-[#D4AF37]/30 transition-colors">
                    <Layers className="w-5 h-5 text-[#D4AF37]" aria-hidden="true" />
                  </div>
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono border bg-white/5 border-white/10 text-gray-300">
                    SELECTED PROJECTS
                  </span>
                </div>
                <span className="text-xs font-mono text-gray-500">2026</span>
              </div>

              <div className="space-y-3">
                <h3 className="text-xl font-bold leading-snug text-white" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                  Systems built across AI, analytics, and full-stack engineering
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                  Designed and developed practical systems spanning executive AI, computer vision, data analytics, and modern full-stack engineering.
                </p>
              </div>

              <ul className="border-y border-white/8 divide-y divide-white/8" aria-label="Selected projects">
                {selectedProjects.map((project) => (
                  <li key={project.id} className="py-3 first:pt-3 last:pb-3">
                    <div className="text-[11px] font-mono font-semibold text-[#F3E5AB] uppercase tracking-wide">{project.title}</div>
                    <div className="mt-0.5 text-xs text-gray-400">{projectDescriptions[project.id] ?? project.tagline}</div>
                  </li>
                ))}
              </ul>

              <div className="flex items-center justify-between gap-3">
                <p className="text-[11px] font-mono text-gray-400">React <span aria-hidden="true">·</span> FastAPI <span aria-hidden="true">·</span> AI <span aria-hidden="true">·</span> Power BI</p>
                <a href="#projects" className="shrink-0 inline-flex items-center gap-1 text-xs font-mono text-[#D4AF37] hover:text-[#F3E5AB] transition-colors" aria-label="Explore selected projects">
                  Explore projects <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
                </a>
              </div>
            </div>
          </motion.article>
        </div>

        <motion.article
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="group relative mt-4 rounded-2xl border border-white/8 bg-[#111111] transition-all duration-300 hover:-translate-y-1 hover:border-[#D4AF37]/45 overflow-hidden"
        >
          <div className="p-6 sm:p-7">
            <div className="flex items-center gap-3 mb-7">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center border bg-white/5 border-white/10 group-hover:bg-[#D4AF37]/10 group-hover:border-[#D4AF37]/30 transition-colors">
                <Award className="w-5 h-5 text-[#D4AF37]" aria-hidden="true" />
              </div>
              <h3 className="text-sm font-mono font-semibold tracking-[0.12em] text-[#F3E5AB]">CREDENTIALS &amp; ACHIEVEMENTS</h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {credentials.slice(0, 3).map((credential) => (
                <article
                  key={credential.title}
                  className={`flex min-h-56 flex-col rounded-xl border p-5 transition-colors ${credential.featured
                    ? 'border-[#D4AF37]/30 bg-[#D4AF37]/5'
                    : 'border-white/8 bg-white/[0.02]'
                    }`}
                >
                  <div className="flex items-start justify-between gap-3">
                    <span className="text-[11px] font-mono font-semibold tracking-wide text-[#F3E5AB]">{credential.label}</span>
                    <span className="text-xs font-mono text-gray-500">{credential.year}</span>
                  </div>
                  <div className={`mt-5 text-xs font-mono font-semibold ${credential.featured ? 'text-[#F3E5AB]' : 'text-[#D4AF37]'}`}>{credential.status}</div>
                  <h4 className="mt-2 text-base font-bold leading-snug text-white" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>{credential.title}</h4>
                  {credential.description && <p className="mt-3 text-sm leading-relaxed text-gray-400">{credential.description}</p>}
                  {credential.evidence && (
                    <a
                      href={credential.evidence.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={credential.evidence.ariaLabel}
                      className="mt-auto pt-5 inline-flex w-fit items-center gap-1 text-xs font-mono text-[#D4AF37] transition-colors hover:text-[#F3E5AB] group/link"
                    >
                      {credential.evidence.label}
                      <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5" aria-hidden="true" />
                    </a>
                  )}
                </article>
              ))}

              <article className="rounded-xl border border-white/8 bg-white/[0.02] p-5 sm:col-span-2 lg:col-span-3 transition-colors group-hover:border-[#D4AF37]/25">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                  <div>
                    <div className="text-[11px] font-mono font-semibold tracking-wide text-[#F3E5AB]">{credentials[3].label}</div>
                    <h4 className="mt-2 text-base font-bold text-white" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>{credentials[3].title}</h4>
                  </div>
                  <div className="sm:text-right">
                    <div className="text-xs font-mono text-gray-500">{credentials[3].year}</div>
                    <div className="mt-1 text-xs font-mono font-semibold text-[#D4AF37]">{credentials[3].status}</div>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </motion.article>
      </div>
    </section>
  );
};
