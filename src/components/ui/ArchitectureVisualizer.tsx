import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Cpu, Server, Database, Zap, Layers, Activity } from 'lucide-react';
import type { ArchitectureNode } from '../../data/portfolioData';

interface ArchitectureVisualizerProps {
  nodes: ArchitectureNode[];
}

export const ArchitectureVisualizer: React.FC<ArchitectureVisualizerProps> = ({ nodes }) => {
  const [selectedNode, setSelectedNode] = useState<ArchitectureNode>(nodes[0] || null);

  const getIcon = (type: ArchitectureNode['type']) => {
    switch (type) {
      case 'client': return <Zap className="w-4 h-4 text-emerald-400" />;
      case 'gateway': return <Layers className="w-4 h-4 text-blue-400" />;
      case 'worker': return <Cpu className="w-4 h-4 text-[#D4AF37]" />;
      case 'cache': return <Activity className="w-4 h-4 text-purple-400" />;
      case 'database': return <Database className="w-4 h-4 text-[#8B1E3F]" />;
      case 'ai': return <Cpu className="w-4 h-4 text-amber-400" />;
      default: return <Server className="w-4 h-4 text-gray-400" />;
    }
  };

  return (
    <div className="space-y-4 p-5 rounded-2xl bg-[#090909] border border-white/10">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 font-mono text-xs text-[#D4AF37] font-semibold">
          <Activity className="w-4 h-4" /> INTERACTIVE SYSTEM PIPELINE ARCHITECTURE
        </div>
        <span className="text-[10px] font-mono text-gray-500">Click nodes to inspect latency & metrics</span>
      </div>

      {/* Nodes Flow Line */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 pt-2">
        {nodes.map((node, idx) => {
          const isSelected = selectedNode?.id === node.id;
          return (
            <motion.button
              key={node.id}
              onClick={() => setSelectedNode(node)}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`p-3 rounded-xl border text-left transition-all relative ${
                isSelected
                  ? 'bg-[#111111] border-[#D4AF37] shadow-[0_0_15px_rgba(212,175,55,0.25)]'
                  : 'bg-white/5 border-white/10 hover:border-white/20'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <div className="p-1.5 rounded-lg bg-black/40 border border-white/10">
                  {getIcon(node.type)}
                </div>
                <span className="font-mono text-[10px] text-gray-400 bg-white/5 px-1.5 py-0.5 rounded">
                  {node.latency}
                </span>
              </div>
              <div className="font-display text-xs font-bold text-white truncate">
                {node.name}
              </div>
              <div className="text-[10px] font-mono text-gray-500 capitalize">
                {node.type} node
              </div>
              {idx < nodes.length - 1 && (
                <span className="hidden lg:block absolute -right-2 top-1/2 -translate-y-1/2 text-gray-600 text-xs z-10">
                  →
                </span>
              )}
            </motion.button>
          );
        })}
      </div>

      {/* Selected Node Details Box */}
      {selectedNode && (
        <motion.div
          key={selectedNode.id}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="p-4 rounded-xl bg-[#111111] border border-white/10 text-xs font-mono space-y-1.5"
        >
          <div className="flex items-center justify-between text-gray-300">
            <span className="text-[#D4AF37] font-semibold">SELECTED NODE: {selectedNode.name}</span>
            <span className="text-emerald-400">P99 LATENCY: {selectedNode.latency}</span>
          </div>
          <p className="text-gray-400 font-sans leading-relaxed">
            {selectedNode.description}
          </p>
        </motion.div>
      )}
    </div>
  );
};
