import React, { useState, useRef, useEffect } from 'react';
import { Terminal as TerminalIcon, X, Minimize2, Maximize2, CornerDownLeft } from 'lucide-react';
import { executeTerminalCommand, type CommandResponse } from '../../data/terminalCommands';

interface TerminalWidgetProps {
  isOpen: boolean;
  onClose: () => void;
}

interface LogEntry {
  command: string;
  response: CommandResponse;
}

export const TerminalWidget: React.FC<TerminalWidgetProps> = ({ isOpen, onClose }) => {
  const [input, setInput] = useState('');
  const [logs, setLogs] = useState<LogEntry[]>([
    {
      command: 'init',
      response: {
        type: 'text',
        content: 'Candidate Interactive Terminal v2.4 initialized. Type "help" for commands or "sudo hire" for fast-track recruitment.'
      }
    }
  ]);
  const [isExpanded, setIsExpanded] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [logs]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    if (input.trim().toLowerCase() === 'clear') {
      setLogs([]);
      setInput('');
      return;
    }

    const response = executeTerminalCommand(input);
    setLogs((prev) => [...prev, { command: input, response }]);
    setInput('');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 w-full max-w-xl shadow-2xl px-4 sm:px-0">
      <div className={`luxury-card rounded-xl border border-[#D4AF37]/30 bg-[#090909]/95 text-white overflow-hidden backdrop-blur-xl transition-all duration-300 ${isExpanded ? 'h-[520px]' : 'h-[360px]'}`}>
        {/* Terminal Titlebar */}
        <div className="flex items-center justify-between px-4 py-3 bg-[#111111] border-b border-white/10 select-none">
          <div className="flex items-center gap-2">
            <TerminalIcon className="w-4 h-4 text-[#D4AF37]" />
            <span className="font-mono text-xs font-semibold tracking-wider text-gray-300">
              PORTFOLIO_CLI // HARSHVARDHAN_DUBEY
            </span>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="text-gray-400 hover:text-white p-1 rounded hover:bg-white/5 transition-colors"
              title={isExpanded ? 'Collapse' : 'Expand'}
            >
              {isExpanded ? <Minimize2 className="w-3.5 h-3.5" /> : <Maximize2 className="w-3.5 h-3.5" />}
            </button>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-white p-1 rounded hover:bg-white/5 transition-colors"
              title="Close Terminal"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Terminal Body Output */}
        <div className="p-4 font-mono text-xs overflow-y-auto h-[calc(100%-90px)] space-y-3 scrollbar-thin">
          {logs.map((log, idx) => (
            <div key={idx} className="space-y-1.5">
              {log.command !== 'init' && (
                <div className="flex items-center gap-2 text-gray-400">
                  <span className="text-[#D4AF37]">$</span>
                  <span className="text-gray-200 font-semibold">{log.command}</span>
                </div>
              )}
              {log.response.type === 'text' && (
                <p className="text-gray-300 leading-relaxed whitespace-pre-line">{log.response.content}</p>
              )}
              {log.response.type === 'list' && Array.isArray(log.response.content) && (
                <div className="space-y-1 pl-2 border-l border-white/10 text-gray-300">
                  {log.response.content.map((line, lIdx) => (
                    <div key={lIdx} className="leading-relaxed">{line}</div>
                  ))}
                </div>
              )}
              {log.response.type === 'success' && (
                <div className="p-2 rounded bg-[#D4AF37]/10 border border-[#D4AF37]/30 text-[#F3E5AB]">
                  {log.response.content}
                </div>
              )}
              {log.response.type === 'error' && (
                <div className="text-red-400 font-medium">{log.response.content}</div>
              )}
            </div>
          ))}
          <div ref={bottomRef} />
        </div>

        {/* Command Input Bar */}
        <form onSubmit={handleSubmit} className="flex items-center px-4 py-2 bg-[#111111] border-t border-white/10">
          <span className="text-[#D4AF37] font-mono text-xs mr-2">$</span>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type 'help', 'skills', 'projects' or 'sudo hire'..."
            className="flex-1 bg-transparent text-xs font-mono text-white placeholder-gray-500 focus:outline-none"
          />
          <button type="submit" className="text-gray-400 hover:text-[#D4AF37] p-1">
            <CornerDownLeft className="w-3.5 h-3.5" />
          </button>
        </form>
      </div>
    </div>
  );
};
