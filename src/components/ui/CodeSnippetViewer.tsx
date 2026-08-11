import React, { useState } from 'react';
import { Code2, Copy, Check } from 'lucide-react';
import type { CodeSnippet } from '../../data/portfolioData';

interface CodeSnippetViewerProps {
  snippets: CodeSnippet[];
}

export const CodeSnippetViewer: React.FC<CodeSnippetViewerProps> = ({ snippets }) => {
  const [activeIdx, setActiveIdx] = useState(0);
  const [copied, setCopied] = useState(false);

  if (!snippets || snippets.length === 0) return null;

  const currentSnippet = snippets[activeIdx];

  const handleCopy = () => {
    navigator.clipboard.writeText(currentSnippet.code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-3 p-5 rounded-2xl bg-[#090909] border border-white/10">
      <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-white/10">
        <div className="flex items-center gap-2 font-mono text-xs text-[#D4AF37] font-semibold">
          <Code2 className="w-4 h-4" /> PRODUCTION CODE ARCHITECTURE SNIPPETS
        </div>

        {/* Snippet Tabs */}
        <div className="flex gap-1 bg-[#111111] p-1 rounded-lg border border-white/10">
          {snippets.map((snip, idx) => (
            <button
              key={idx}
              onClick={() => setActiveIdx(idx)}
              className={`px-3 py-1 rounded-md text-[11px] font-mono transition-colors ${
                activeIdx === idx
                  ? 'bg-[#D4AF37] text-[#090909] font-bold'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              {snip.filename}
            </button>
          ))}
        </div>
      </div>

      {/* Snippet Explanation */}
      <p className="text-xs text-gray-400 font-mono">
        // {currentSnippet.description}
      </p>

      {/* Code Box */}
      <div className="relative rounded-xl bg-[#111111] border border-white/10 p-4 font-mono text-xs text-gray-200 overflow-x-auto">
        <button
          onClick={handleCopy}
          className="absolute top-3 right-3 p-1.5 rounded-md bg-white/10 hover:bg-white/20 text-gray-300 transition-colors"
          title="Copy snippet"
        >
          {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
        </button>
        <pre className="leading-relaxed">
          <code>{currentSnippet.code}</code>
        </pre>
      </div>
    </div>
  );
};
