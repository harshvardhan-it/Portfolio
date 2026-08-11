import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import { PERSONAL_INFO } from '../../data/portfolioData';

export const Footer: React.FC = () => {
  const [time, setTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString('en-US', { hour12: false, hour: '2-digit', minute: '2-digit', second: '2-digit' }));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="py-12 bg-[#090909] border-t border-white/10 text-xs font-mono text-gray-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand Signature */}
          <div className="flex items-center gap-3">
            <div className="w-2.5 h-2.5 rounded-full bg-[#D4AF37]" />
            <span className="text-white font-bold font-display text-sm">
              {PERSONAL_INFO.name} <span className="text-[#D4AF37]">// ENGINEERING PORTFOLIO</span>
            </span>
          </div>

          {/* Real-time Clock & System Status */}
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-gray-300">SYSTEMS OPERATIONAL</span>
            </div>
            <div className="text-gray-500">
              SYS_TIME: <span className="text-[#D4AF37]">{time || '--:--:--'} LOCAL</span>
            </div>
          </div>

          {/* Back to Top */}
          <a
            href="#hero"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 hover:bg-white/10 text-gray-300 transition-colors"
          >
            BACK TO TOP <ArrowUp className="w-3.5 h-3.5 text-[#D4AF37]" />
          </a>
        </div>

        {/* Sub-footer copyright */}
        <div className="pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-gray-500 text-[11px]">
          <p>© 2026 {PERSONAL_INFO.name}. Engineered with React, Next-gen Framer Motion & Tailwind CSS.</p>
          <p>Built for hiring conversations across software, backend, AI, and product engineering teams.</p>
        </div>
      </div>
    </footer>
  );
};
