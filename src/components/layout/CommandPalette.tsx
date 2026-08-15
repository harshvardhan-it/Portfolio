import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, FolderGit2, Terminal, FileText, Mail, ArrowRight, X } from 'lucide-react';
import { PERSONAL_INFO, PROJECTS } from '../../data/portfolioData';
import { GithubIcon, LinkedinIcon } from '../ui/Icons';

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenTerminal: () => void;
}

export const CommandPalette: React.FC<CommandPaletteProps> = ({ isOpen, onClose, onOpenTerminal }) => {
  const [query, setQuery] = useState('');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const actions = [
    {
      id: 'sec-projects',
      title: 'Jump to Featured Product Case Studies',
      category: 'Navigation',
      icon: <FolderGit2 className="w-4 h-4 text-[#D4AF37]" />,
      action: () => {
        window.location.hash = 'projects';
        onClose();
      }
    },
    {
      id: 'sec-tech',
      title: 'View Full Technical Stack Architecture',
      category: 'Navigation',
      icon: <Terminal className="w-4 h-4 text-[#D4AF37]" />,
      action: () => {
        window.location.hash = 'tech';
        onClose();
      }
    },
    {
      id: 'sec-resume',
      title: 'Open Interactive Resume Viewer',
      category: 'Navigation',
      icon: <FileText className="w-4 h-4 text-[#D4AF37]" />,
      action: () => {
        window.location.hash = 'resume';
        onClose();
      }
    },
    {
      id: 'cli',
      title: 'Launch Interactive Recruiter CLI Terminal',
      category: 'Tools',
      icon: <Terminal className="w-4 h-4 text-[#8B1E3F]" />,
      action: () => {
        onClose();
        onOpenTerminal();
      }
    },
    {
      id: 'email',
      title: `Copy Candidate Email (${PERSONAL_INFO.email})`,
      category: 'Contact',
      icon: <Mail className="w-4 h-4 text-emerald-400" />,
      action: () => {
        navigator.clipboard.writeText(PERSONAL_INFO.email);
        alert('Candidate email copied to clipboard!');
        onClose();
      }
    },
    {
      id: 'github',
      title: 'Open Candidate GitHub Profile',
      category: 'Social',
      icon: <GithubIcon className="w-4 h-4 text-white" />,
      action: () => {
        window.open(PERSONAL_INFO.github, '_blank');
        onClose();
      }
    },
    {
      id: 'linkedin',
      title: 'Open Candidate LinkedIn Profile',
      category: 'Social',
      icon: <LinkedinIcon className="w-4 h-4 text-blue-400" />,
      action: () => {
        window.open(PERSONAL_INFO.linkedin, '_blank');
        onClose();
      }
    }
  ];

  const projectItems = PROJECTS.map(p => ({
    id: `project-${p.id}`,
    title: `Case Study: ${p.title}`,
    category: 'Case Study',
    icon: <FolderGit2 className="w-4 h-4 text-[#D4AF37]" />,
    action: () => {
      window.location.hash = 'projects';
      onClose();
    }
  }));

  const allItems = [...actions, ...projectItems];
  const filtered = allItems.filter(item =>
    item.title.toLowerCase().includes(query.toLowerCase()) ||
    item.category.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-black/80 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          className="w-full max-w-2xl luxury-card rounded-2xl bg-[#090909] border border-white/20 shadow-2xl overflow-hidden"
        >
          {/* Search Header */}
          <div className="flex items-center px-4 py-3.5 border-b border-white/10">
            <Search className="w-5 h-5 text-[#D4AF37] mr-3" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Type a command, search project, or jump to section..."
              className="flex-1 bg-transparent text-sm text-white placeholder-gray-500 focus:outline-none font-sans"
              autoFocus
            />
            <button onClick={onClose} className="p-1 text-gray-400 hover:text-white rounded">
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Results List */}
          <div className="max-h-96 overflow-y-auto p-2 space-y-1">
            {filtered.length === 0 ? (
              <div className="py-8 text-center text-xs text-gray-500 font-mono">
                No matching results found for "{query}".
              </div>
            ) : (
              filtered.map((item) => (
                <button
                  key={item.id}
                  onClick={item.action}
                  className="w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-left hover:bg-white/10 transition-colors group"
                >
                  <div className="flex items-center gap-3">
                    {item.icon}
                    <span className="text-sm font-medium text-gray-200 group-hover:text-white">
                      {item.title}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 text-gray-400">
                      {item.category}
                    </span>
                    <ArrowRight className="w-3.5 h-3.5 text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </button>
              ))
            )}
          </div>

          {/* Footer Shortcuts */}
          <div className="flex items-center justify-between px-4 py-2.5 bg-[#111111] border-t border-white/10 text-[11px] text-gray-500 font-mono">
            <span>Navigation: <kbd className="px-1.5 py-0.5 rounded bg-white/10 text-gray-300">↑↓</kbd> to select</span>
            <span>Esc to close</span>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
