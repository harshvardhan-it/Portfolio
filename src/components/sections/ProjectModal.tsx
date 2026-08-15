import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, CheckCircle2, Cpu, AlertTriangle, BarChart2 } from 'lucide-react';
import type { Project } from '../../data/portfolioData';
import { GithubIcon } from '../ui/Icons';
import { ArchitectureVisualizer } from '../ui/ArchitectureVisualizer';
import { CodeSnippetViewer } from '../ui/CodeSnippetViewer';
import { AIBenchmarkVisualizer } from '../ui/AIBenchmarkVisualizer';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-5xl max-h-[92vh] overflow-y-auto luxury-card rounded-3xl bg-[#090909] border border-[#D4AF37]/40 shadow-2xl p-6 sm:p-8 space-y-8"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 p-2 rounded-full bg-white/10 text-gray-300 hover:text-white hover:bg-white/20 transition-colors z-20"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Header */}
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-[#D4AF37]">
              PRODUCT CASE STUDY // {project.category}
            </div>
            <h2 className="text-2xl sm:text-4xl font-bold font-display text-white">
              {project.title}
            </h2>
            <p className="text-base text-gray-400 font-normal">
              {project.tagline}
            </p>
          </div>

          {/* Hero Mockup Image */}
          <div className="relative rounded-2xl overflow-hidden border border-white/15 bg-[#111111] max-h-96">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover object-top"
            />
          </div>

          {/* Business Problem & Architectural Solution Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-5 rounded-2xl bg-[#111111] border border-white/10 space-y-3">
              <div className="flex items-center gap-2 text-red-400 font-mono text-xs font-semibold">
                <AlertTriangle className="w-4 h-4" /> THE BUSINESS PROBLEM
              </div>
              <p className="text-sm text-gray-300 leading-relaxed">
                {project.problem}
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#111111] border border-[#D4AF37]/30 space-y-3">
              <div className="flex items-center gap-2 text-[#D4AF37] font-mono text-xs font-semibold">
                <Cpu className="w-4 h-4" /> ARCHITECTURAL SOLUTION
              </div>
              <p className="text-sm text-gray-300 leading-relaxed">
                {project.solution}
              </p>
            </div>
          </div>

          {/* System Pipeline Architecture Visualizer */}
          {project.architectureNodes && (
            <ArchitectureVisualizer nodes={project.architectureNodes} />
          )}

          {/* Live Code Snippets Inspector */}
          {project.codeSnippets && (
            <CodeSnippetViewer snippets={project.codeSnippets} />
          )}

          {/* AI Benchmarks Visualizer if AI project */}
          {project.category === 'AI Engineering' && project.benchmarks && (
            <AIBenchmarkVisualizer project={project} />
          )}

          {/* Benchmarks Table */}
          {project.benchmarks && (
            <div className="p-6 rounded-2xl bg-[#111111] border border-white/10 space-y-4">
              <h4 className="text-sm font-mono font-semibold text-white tracking-wider flex items-center gap-2">
                <BarChart2 className="w-4 h-4 text-[#D4AF37]" /> VERIFIED SYSTEM BENCHMARKS:
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {project.benchmarks.map((b, idx) => (
                  <div key={idx} className="p-3.5 rounded-xl bg-white/5 border border-white/10 space-y-1">
                    <span className="text-[11px] font-mono text-gray-400 block">{b.metric}</span>
                    <div className="flex items-baseline justify-between">
                      <span className="text-sm line-through text-gray-500 font-mono">{b.before}</span>
                      <span className="text-base font-bold font-mono text-[#D4AF37]">{b.after}</span>
                    </div>
                    <span className="text-[10px] font-mono text-emerald-400 block font-semibold">
                      Improvement: {b.improvement}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Impact Metrics */}
          <div className="p-6 rounded-2xl bg-[#111111] border border-white/10 space-y-4">
            <h4 className="text-sm font-mono font-semibold text-white tracking-wider">
              QUANTIFIABLE BUSINESS IMPACT:
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {project.impactMetrics.map((metric, idx) => (
                <div key={idx} className="flex items-start gap-2 text-xs text-gray-300">
                  <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                  <span>{metric}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Tradeoffs */}
          <div className="p-4 rounded-xl bg-[#8B1E3F]/10 border border-[#8B1E3F]/30 text-xs text-gray-300 space-y-1">
            <span className="font-mono text-[#F3E5AB] font-semibold">SYSTEM TRADEOFF ANALYSIS:</span>
            <p>{project.tradeoffs}</p>
          </div>

          {/* Tech Stack Tags */}
          <div className="space-y-2">
            <h4 className="text-xs font-mono text-gray-400">TECHNOLOGY STACK:</h4>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech, idx) => (
                <span key={idx} className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-xs font-mono text-gray-300">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Action Links */}
          <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-white/10">
            <div className="flex gap-4">
              {project.demoUrl?.trim() && (
  <a
    href={project.demoUrl}
    target="_blank"
    rel="noreferrer"
    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#D4AF37] text-[#090909] text-xs font-semibold hover:bg-[#E2C266] transition-colors"
  >
    Launch Product Demo <ExternalLink className="w-3.5 h-3.5" />
  </a>
)}

{project.githubUrl?.trim() && (
  <a
    href={project.githubUrl}
    target="_blank"
    rel="noreferrer"
    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/5 border border-white/20 text-white text-xs font-semibold hover:bg-white/10 transition-colors"
  >
    Source Repository <GithubIcon className="w-3.5 h-3.5" />
  </a>
)}
            </div>
            <button
              onClick={onClose}
              className="text-xs font-mono text-gray-400 hover:text-white"
            >
              Close Inspector [Esc]
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
