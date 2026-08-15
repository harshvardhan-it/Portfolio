import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { TECH_CATEGORIES, PROJECTS, type TechCategory } from '../../data/portfolioData';
import { SpotlightCard } from '../ui/SpotlightCard';
import { Layers } from 'lucide-react';

const skillLookup = Object.fromEntries(
  TECH_CATEGORIES.flatMap((category) => category.skills.map((skill) => [skill.id, skill])),
);

const skills = (...ids: string[]) => ids.map((id) => skillLookup[id]).filter(Boolean);

const capabilityCategories: TechCategory[] = [
  {
    title: 'AI / Machine Learning',
    description: 'Building practical AI workflows with computer vision, vector similarity search, and grounded decision support.',
    skills: skills('ai-integration', 'computer-vision', 'faiss', 'prompting', 'llm-ops'),
  },
  {
    title: 'Data & Analytics',
    description: 'Turning operational data into clean reporting, useful analysis, and decision-ready signals.',
    skills: skills('python-lang', 'sql', 'datamodels', 'excel', 'powerbi', 'reporting'),
  },
  {
    title: 'Full Stack',
    description: 'Designing product interfaces, APIs, authentication, and data layers as one coherent system.',
    skills: skills('react', 'tailwind', 'typescript', 'fastapi', 'apis', 'auth', 'postgres'),
  },
  {
    title: 'Tools / Infrastructure',
    description: 'Using practical tooling to build, iterate on, and maintain software products clearly.',
    skills: skills('git', 'vscode'),
  },
];

export const TechMatrix: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [selectedSkillId, setSelectedSkillId] = useState<string | null>(null);

  const selectedSkill = capabilityCategories.flatMap(c => c.skills).find(s => s.id === selectedSkillId);
  const relatedProjects = selectedSkill ? PROJECTS.filter(p => selectedSkill.usedInProjectIds.includes(p.id)) : [];
  const summaryItems = capabilityCategories.map((category) => ({
    label: category.title,
    value: category.skills.slice(0, 2).map((skill) => skill.name).join(' / '),
  }));

  return (
    <section id="tech" className="py-28 relative bg-[#090909]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="space-y-4 max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-[#D4AF37]">
            03 // TECHNICAL EXPERTISE ARCHITECTURE
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold font-display text-white tracking-tight">
            AI, data, and full-stack <span className="text-gold-gradient">capability map</span>.
          </h2>
          <p className="text-base text-gray-400 font-normal">
            Skills are grouped around the work they enable. Select one to see where it connects to a real project.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap gap-2 mb-10 pb-4 border-b border-white/10">
          {capabilityCategories.map((cat, idx) => (
            <button
              key={idx}
              onClick={() => {
                setActiveTab(idx);
                setSelectedSkillId(null);
              }}
              className={`px-5 py-2.5 rounded-full text-xs font-mono font-medium transition-all ${
                activeTab === idx
                  ? 'bg-[#D4AF37] text-[#090909] font-semibold shadow-[0_0_20px_rgba(212,175,55,0.3)]'
                  : 'bg-[#111111] text-gray-400 hover:text-white border border-white/10'
              }`}
            >
              {cat.title}
            </button>
          ))}
        </div>

        {/* Active Category Display */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="space-y-6"
        >
          <div className="p-4 rounded-xl bg-[#111111] border border-white/10 flex items-center justify-between">
            <p className="text-sm text-gray-300 font-mono">
              {capabilityCategories[activeTab].description}
            </p>
            <span className="text-xs font-mono text-[#D4AF37]">
              {capabilityCategories[activeTab].skills.length} core capabilities
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {capabilityCategories[activeTab].skills.map((skill) => {
              const isSelected = selectedSkillId === skill.id;
              return (
                <SpotlightCard
                  key={skill.id}
                  onClick={() => setSelectedSkillId(isSelected ? null : skill.id)}
                  className={`space-y-4 transition-all ${
                    isSelected ? 'border-[#D4AF37] shadow-[0_0_20px_rgba(212,175,55,0.2)]' : ''
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <h4 className="text-lg font-bold font-display text-white">
                      {skill.name}
                    </h4>
                    <span className={`px-2.5 py-0.5 rounded-full text-[11px] font-mono border ${
                      skill.level === 'Expert'
                        ? 'bg-[#D4AF37]/10 text-[#F3E5AB] border-[#D4AF37]/40'
                        : skill.level === 'Advanced'
                        ? 'bg-[#8B1E3F]/20 text-red-200 border-[#8B1E3F]/50'
                        : 'bg-white/5 text-gray-300 border-white/10'
                    }`}>
                      {skill.level}
                    </span>
                  </div>

                  <div className="text-xs font-mono text-gray-400">
                    Experience Depth: <span className="text-gray-200">{skill.experience}</span>
                  </div>

                  {skill.highlight && (
                    <div className="p-3 rounded-lg bg-white/5 border border-white/10 text-xs text-gray-300 space-y-1">
                      <span className="text-[10px] font-mono text-[#D4AF37] block font-semibold">PRODUCTION HIGHLIGHT:</span>
                      <p>{skill.highlight}</p>
                    </div>
                  )}

                  <div className="text-[11px] font-mono text-gray-500 flex items-center justify-between pt-2 border-t border-white/10">
                    <span>Used in {skill.usedInProjectIds.length} system(s)</span>
                    <span className="text-[#D4AF37] group-hover:translate-x-1 transition-transform">
                      {isSelected ? 'Selected ✓' : 'Inspect Usage →'}
                    </span>
                  </div>
                </SpotlightCard>
              );
            })}
          </div>
        </motion.div>

        {/* Selected Skill Project Cross-Connection Inspector */}
        {selectedSkill && relatedProjects.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-8 p-6 rounded-2xl bg-[#111111] border border-[#D4AF37]/40 space-y-4"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 font-mono text-xs text-[#D4AF37] font-semibold">
                <Layers className="w-4 h-4" /> PRODUCTION PROJECT INTEGRATIONS FOR "{selectedSkill.name.toUpperCase()}"
              </div>
              <button
                onClick={() => setSelectedSkillId(null)}
                className="text-xs font-mono text-gray-500 hover:text-white"
              >
                Clear Selection ✕
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {relatedProjects.map((p) => (
                <a
                  key={p.id}
                  href="#projects"
                  className="p-4 rounded-xl bg-[#090909] border border-white/10 hover:border-[#D4AF37]/50 space-y-2 transition-colors block group"
                >
                  <div className="text-xs font-mono text-[#D4AF37]">{p.category}</div>
                  <div className="text-sm font-bold text-white group-hover:text-[#D4AF37] transition-colors">{p.title}</div>
                  <p className="text-xs text-gray-400 line-clamp-2">{p.overview}</p>
                </a>
              ))}
            </div>
          </motion.div>
        )}

        {/* Global Summary Architecture Footer */}
        <div className="mt-16 p-6 rounded-2xl bg-[#111111] border border-white/10 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {summaryItems.map((item, idx) => (
            <div key={item.label}>
              <div className="text-xs font-mono text-gray-500 uppercase">{item.label}</div>
              <div className={`text-base font-bold font-display mt-1 ${idx % 2 === 0 ? 'text-white' : 'text-[#D4AF37]'}`}>
                {item.value}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
