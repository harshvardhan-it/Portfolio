import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, ArrowRight, ChevronRight } from 'lucide-react';
import { PERSONAL_INFO, PROJECTS, type Project } from '../../data/portfolioData';
import { ProjectModal } from './ProjectModal';
import { GithubIcon } from '../ui/Icons';

export const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <section id="projects" className="py-24 relative bg-[#090909]">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/8 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16"
        >
          <div className="space-y-4 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-[#D4AF37]">
              02 / FEATURED CASE STUDIES
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              Work selected for{' '}
              <span className="text-gold-gradient">technical depth, not decoration</span>.
            </h2>
          </div>
          <p className="text-sm text-gray-400 font-mono max-w-xs leading-relaxed">
            Each case study shows the tradeoff, the implementation, and the measurable outcome.
          </p>
        </motion.div>

        {/* Projects List */}
        <div className="space-y-6">
          {PROJECTS.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              onHoverStart={() => setHoveredId(project.id)}
              onHoverEnd={() => setHoveredId(null)}
            >
              <div
                className={`group relative rounded-2xl border transition-all duration-500 overflow-hidden cursor-pointer ${
                  hoveredId === project.id
                    ? 'border-[#D4AF37]/35 bg-[#131313]'
                    : 'border-white/8 bg-[#111111]'
                }`}
                onClick={() => setSelectedProject(project)}
              >
                {/* Top gold bar on hover */}
                <div className={`absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-[#D4AF37]/0 via-[#D4AF37]/60 to-[#D4AF37]/0 transition-opacity duration-500 ${hoveredId === project.id ? 'opacity-100' : 'opacity-0'}`} />

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
                  {/* Project image / mockup */}
                  <div className="lg:col-span-6 relative bg-[#0d0d0d] overflow-hidden min-h-[240px] lg:min-h-[320px] border-b lg:border-b-0 lg:border-r border-white/8 flex items-center justify-center p-6">
                    <img
                      src={project.image}
                      alt={project.title}
                      className={`w-full h-full object-cover object-top rounded-xl border border-white/8 shadow-2xl transition-all duration-700 ${hoveredId === project.id ? 'scale-[1.04]' : 'scale-100'}`}
                      onError={(e) => {
                        const el = e.target as HTMLImageElement;
                        el.style.display = 'none';
                      }}
                    />
                    {/* Gradient fade */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d0d]/60 via-transparent to-transparent pointer-events-none" />

                    {/* Category badge overlay */}
                    <div className="absolute top-4 left-4">
                      <span className="px-2.5 py-1 rounded-full bg-[#090909]/80 backdrop-blur border border-[#D4AF37]/30 text-[10px] font-mono text-[#D4AF37]">
                        {project.category}
                      </span>
                    </div>

                    {/* Case study number */}
                    <div className="absolute bottom-4 right-4">
                      <span className="text-xs font-mono text-gray-600">
                        CASE {String(idx + 1).padStart(2, '0')}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="lg:col-span-6 p-7 flex flex-col justify-between gap-6">
                    <div className="space-y-3">
                      <h3 className="text-xl font-bold text-white leading-snug group-hover:text-[#E2C266] transition-colors duration-300" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                        {project.title}
                      </h3>
                      <p className="text-sm text-gray-400 leading-relaxed">
                        {project.tagline}
                      </p>

                      {/* Impact metrics highlight */}
                      <div className="p-3 rounded-xl bg-[#D4AF37]/5 border border-[#D4AF37]/15">
                        <div className="text-[10px] font-mono text-[#D4AF37] font-semibold uppercase tracking-wider mb-1">
                          Key Impact
                        </div>
                        <p className="text-xs text-gray-300">
                          {project.impactMetrics[0]}
                        </p>
                      </div>

                      {/* Benchmarks quick view */}
                      {project.benchmarks && project.benchmarks.length > 0 && (
                        <div className="flex gap-3 flex-wrap">
                          {project.benchmarks.slice(0, 2).map((bench, bIdx) => (
                            <div key={bIdx} className="px-3 py-1.5 rounded-lg bg-white/4 border border-white/8 text-center">
                              <div className="text-sm font-bold text-emerald-400 font-mono">{bench.improvement}</div>
                              <div className="text-[9px] font-mono text-gray-500 uppercase">{bench.metric.slice(0, 15)}</div>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>

                    <div className="space-y-4">
                      {/* Tech stack pills */}
                      <div className="flex flex-wrap gap-1.5">
                        {project.techStack.slice(0, 6).map((tech, tIdx) => (
                          <span key={tIdx} className="px-2.5 py-1 rounded-md bg-white/5 text-[11px] font-mono text-gray-400 border border-white/8">
                            {tech}
                          </span>
                        ))}
                        {project.techStack.length > 6 && (
                          <span className="px-2 py-1 text-[11px] font-mono text-gray-600">
                            +{project.techStack.length - 6}
                          </span>
                        )}
                      </div>

                      {/* CTA row */}
                      <div className="flex items-center justify-between">
                        <button
                          onClick={(e) => { e.stopPropagation(); setSelectedProject(project); }}
                          className="group/btn inline-flex items-center gap-1.5 text-xs font-semibold text-[#D4AF37] hover:text-[#F3E5AB] transition-colors font-mono"
                        >
                          Deep-Dive Architecture
                          <ChevronRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 transition-transform" />
                        </button>
                        <div className="flex gap-2">
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-colors border border-white/8"
                            title="Source Code"
                          >
                            <GithubIcon className="w-4 h-4" />
                          </a>
                          <a
                            href={project.demoUrl}
                            target="_blank"
                            rel="noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="p-2 rounded-lg bg-[#D4AF37]/10 hover:bg-[#D4AF37]/20 text-[#D4AF37] transition-colors border border-[#D4AF37]/25"
                            title="Live Demo"
                          >
                            <ExternalLink className="w-4 h-4" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Footer CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 text-center"
        >
          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-sm font-mono text-gray-400 hover:text-[#D4AF37] transition-colors group"
          >
            More projects on GitHub
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </div>

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
