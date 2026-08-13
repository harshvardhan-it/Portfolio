import React from 'react';
import { ArrowLeft, ExternalLink, FileText } from 'lucide-react';
import type { Project } from '../../data/portfolioData';
import { ArchitectureVisualizer } from '../ui/ArchitectureVisualizer';
import { GithubIcon } from '../ui/Icons';

interface CaseStudyPageProps {
  project: Project;
}

export const CaseStudyPage: React.FC<CaseStudyPageProps> = ({ project }) => {
  const demoUrl = project.demoUrl?.trim() ?? '';
  const githubUrl = project.githubUrl?.trim() ?? '';
  const pipeline = project.keyFeatures.slice(0, 3);
  const storySections = [
    { title: 'Overview', body: project.overview },
    { title: 'Problem', body: project.problem },
    { title: 'Solution', body: project.solution },
    { title: 'Tradeoffs', body: project.tradeoffs },
  ];
  return (
    <main className="min-h-screen bg-[#090909] pt-28 pb-20">
      <article className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <a
          href="/#projects"
          className="inline-flex items-center gap-2 text-sm font-mono text-gray-400 hover:text-[#D4AF37] transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to portfolio
        </a>

        <header className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
          <div className="lg:col-span-7 space-y-5">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-[#D4AF37]">
              PRODUCT CASE STUDY / {project.category}
            </div>
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-6xl font-bold text-white leading-tight font-display">
                {project.title}
              </h1>
              <p className="text-xl text-[#E2C266] font-display">{project.tagline}</p>
            </div>
            <p className="text-base sm:text-lg text-gray-300 leading-relaxed max-w-3xl">
              {project.overview}
            </p>
          </div>

          <div className="lg:col-span-5 flex flex-wrap lg:justify-end gap-3">
            {demoUrl && (
              <a
                href={demoUrl}
                target={demoUrl.startsWith('http') ? '_blank' : undefined}
                rel={demoUrl.startsWith('http') ? 'noreferrer' : undefined}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-[#D4AF37] text-[#090909] text-sm font-semibold hover:bg-[#E2C266] transition-colors"
              >
                Live Demo <ExternalLink className="w-4 h-4" />
              </a>
            )}

            {githubUrl && (
              <a
                href={githubUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-white/5 border border-white/15 text-white text-sm font-semibold hover:bg-white/10 transition-colors"
              >
                GitHub <GithubIcon className="w-4 h-4" />
              </a>
            )}
          </div>
        </header>

        <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-[#111111]">
          <img
            src={project.image}
            alt={`${project.title} product screen`}
            className="w-full max-h-[520px] object-cover object-top"
            loading="eager"
          />
        </div>

        <section className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {pipeline.map((step, index) => (
            <div key={step} className="relative rounded-xl border border-white/10 bg-[#111111] p-4">
              <span className="text-[10px] font-mono text-[#D4AF37]">
                {String(index + 1).padStart(2, '0')}
              </span>
              <h2 className="mt-2 text-sm font-semibold text-white font-display">{step}</h2>
              {index < pipeline.length - 1 && (
                <span className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 text-gray-600">
                  -&gt;
                </span>
              )}
            </div>
          ))}
        </section>

        <ArchitectureVisualizer nodes={project.architectureNodes} />

        <section className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          {storySections.map((section) => (
            <div key={section.title} className="rounded-2xl bg-[#111111] border border-white/10 p-6 space-y-3">
              <h2 className="text-sm font-mono text-[#D4AF37] uppercase tracking-wider">
                {section.title}
              </h2>
              <p className="text-sm text-gray-300 leading-relaxed">{section.body}</p>
            </div>
          ))}
        </section>

        <section className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="rounded-2xl bg-[#111111] border border-white/10 p-6 space-y-4">
            <h2 className="text-sm font-mono text-[#D4AF37] uppercase tracking-wider">
              Engineering Challenges
            </h2>
            <div className="space-y-4">
              {project.impactMetrics.map((item, index) => (
                <div key={item} className="space-y-2 border-t border-white/8 pt-4 first:border-t-0 first:pt-0">
                  <span className="text-[10px] font-mono text-[#D4AF37]">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <p className="text-sm text-gray-400 leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl bg-[#111111] border border-white/10 p-6 space-y-4">
            <h2 className="text-sm font-mono text-[#D4AF37] uppercase tracking-wider">
              Technology & Links
            </h2>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <span key={tech} className="px-3 py-1 rounded-md bg-white/5 border border-white/10 text-xs font-mono text-gray-300">
                  {tech}
                </span>
              ))}
            </div>
            <div className="pt-4 border-t border-white/10 flex flex-wrap gap-3">
              {githubUrl && (
                <a
                  href={githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-gray-300 hover:text-[#D4AF37]"
                >
                  <GithubIcon className="w-4 h-4" /> Source code
                </a>
              )}

              {demoUrl && (
                <a
                  href={demoUrl}
                  target={demoUrl.startsWith('http') ? '_blank' : undefined}
                  rel={demoUrl.startsWith('http') ? 'noreferrer' : undefined}
                  className="inline-flex items-center gap-2 text-sm text-gray-300 hover:text-[#D4AF37]"
                >
                  <ExternalLink className="w-4 h-4" /> Live demo
                </a>
              )}

              <a
                href="/Harshvardhan_Resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-sm text-gray-300 hover:text-[#D4AF37]"
              >
                <FileText className="w-4 h-4" /> Resume
              </a>
            </div>
          </div>
        </section>
      </article>
    </main>
  );
};
