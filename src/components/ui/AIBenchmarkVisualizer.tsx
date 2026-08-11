import React from 'react';
import { motion } from 'framer-motion';
import { BarChart3 } from 'lucide-react';
import type { Project } from '../../data/portfolioData';

interface AIBenchmarkVisualizerProps {
  project: Project;
}

const extractNumber = (value: string) => {
  const match = value.replace(/,/g, '').match(/-?\d+(\.\d+)?/);
  return match ? Number(match[0]) : null;
};

const clampWidth = (value: number) => Math.max(8, Math.min(100, value));

const getWidths = (before: string, after: string, improvement: string) => {
  const beforeNumber = extractNumber(before);
  const afterNumber = extractNumber(after);

  if (!beforeNumber || !afterNumber) {
    return { beforeWidth: 100, afterWidth: 70 };
  }

  const lowerIsBetter = improvement.trim().startsWith('-');

  if (lowerIsBetter) {
    return {
      beforeWidth: 100,
      afterWidth: clampWidth((afterNumber / beforeNumber) * 100),
    };
  }

  return {
    beforeWidth: clampWidth((beforeNumber / afterNumber) * 100),
    afterWidth: 100,
  };
};

export const AIBenchmarkVisualizer: React.FC<AIBenchmarkVisualizerProps> = ({ project }) => {
  const benchmarks = project.benchmarks ?? [];

  if (benchmarks.length === 0) {
    return null;
  }

  return (
    <div className="space-y-4 p-5 rounded-2xl bg-[#090909] border border-white/10">
      <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-white/10">
        <div className="flex items-center gap-2 font-mono text-xs text-[#D4AF37] font-semibold">
          <BarChart3 className="w-4 h-4" /> AI SYSTEMS EVALUATION // {project.title}
        </div>
      </div>

      <div className="space-y-4 pt-2">
        {benchmarks.map((item, idx) => {
          const { beforeWidth, afterWidth } = getWidths(item.before, item.after, item.improvement);

          return (
            <div key={idx} className="space-y-1.5">
              <div className="flex flex-wrap justify-between gap-2 text-xs font-mono">
                <span className="text-gray-300">{item.metric}</span>
                <span className="text-[#D4AF37] font-semibold">{item.improvement}</span>
              </div>
              <div className="space-y-1.5">
                <div className="grid grid-cols-[4rem_1fr_5rem] items-center gap-2 text-[10px] font-mono text-gray-500">
                  <span>Before</span>
                  <div className="h-2.5 rounded-full bg-white/5 border border-white/10 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${beforeWidth}%` }}
                      transition={{ duration: 0.8, delay: idx * 0.1 }}
                      className="h-full rounded-full bg-red-500/30 border border-red-500/40"
                    />
                  </div>
                  <span className="text-right">{item.before}</span>
                </div>
                <div className="grid grid-cols-[4rem_1fr_5rem] items-center gap-2 text-[10px] font-mono text-gray-500">
                  <span>After</span>
                  <div className="h-2.5 rounded-full bg-white/5 border border-white/10 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${afterWidth}%` }}
                      transition={{ duration: 0.8, delay: idx * 0.1 + 0.1 }}
                      className="h-full rounded-full bg-[#D4AF37] border border-[#D4AF37]"
                    />
                  </div>
                  <span className="text-right text-gray-300">{item.after}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
