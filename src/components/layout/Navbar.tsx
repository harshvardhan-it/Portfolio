import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Command, Terminal, Menu, X, ArrowUpRight } from 'lucide-react';
import { PERSONAL_INFO } from '../../data/portfolioData';

interface NavbarProps {
  onOpenCommandPalette: () => void;
  onToggleTerminal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenCommandPalette, onToggleTerminal }) => {
  const [activeSection, setActiveSection] = useState('hero');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const firstName = PERSONAL_INFO.name.split(' ')[0] || PERSONAL_INFO.name;

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'projects', 'tech', 'experience', 'achievements', 'resume', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Philosophy', href: '#about', id: 'about' },
    { label: 'Case Studies', href: '#projects', id: 'projects' },
    { label: 'Architecture & Tech', href: '#tech', id: 'tech' },
    { label: 'Experience', href: '#experience', id: 'experience' },
    { label: 'Achievements', href: '#achievements', id: 'achievements' },
    { label: 'Resume', href: '#resume', id: 'resume' },
    { label: 'Contact', href: '#contact', id: 'contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-40 px-4 sm:px-8 py-4 transition-all duration-300 pointer-events-none">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Brand Logo Pill */}
        <a
          href="#hero"
          className="pointer-events-auto flex items-center gap-3 px-4 py-2 rounded-full bg-[#111111]/80 backdrop-blur-xl border border-white/10 hover:border-[#D4AF37]/40 transition-all duration-300 group"
        >
          <div className="w-2.5 h-2.5 rounded-full bg-[#D4AF37] group-hover:scale-125 transition-transform" />
          <span className="font-display font-semibold text-sm tracking-wide text-white">
            {firstName}<span className="text-[#D4AF37]">.dev</span>
          </span>
          <span className="hidden sm:inline-block px-2 py-0.5 text-[10px] font-mono rounded bg-white/10 text-gray-300">
            MERN & AI
          </span>
        </a>

        {/* Desktop Nav Links Pill */}
        <nav className="pointer-events-auto hidden md:flex items-center gap-1 px-3 py-1.5 rounded-full bg-[#111111]/80 backdrop-blur-xl border border-white/10">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={item.href}
                className={`relative px-3.5 py-1.5 text-xs font-medium rounded-full transition-colors ${
                  isActive ? 'text-white' : 'text-gray-400 hover:text-gray-200'
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="activePill"
                    className="absolute inset-0 rounded-full bg-white/10 border border-[#D4AF37]/40"
                    transition={{ type: 'spring', duration: 0.5 }}
                  />
                )}
                <span className="relative z-10">{item.label}</span>
              </a>
            );
          })}
        </nav>

        {/* Action Buttons */}
        <div className="pointer-events-auto flex items-center gap-2">
          {/* Cmd + K Button */}
          <button
            onClick={onOpenCommandPalette}
            className="hidden sm:flex items-center gap-2 px-3 py-2 rounded-full bg-[#111111]/80 backdrop-blur-xl border border-white/10 hover:border-white/20 text-xs text-gray-300 transition-colors"
            title="Open Command Palette"
          >
            <Command className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span className="font-mono text-[11px] text-gray-400">Cmd K</span>
          </button>

          {/* Terminal Toggle */}
          <button
            onClick={onToggleTerminal}
            className="flex items-center gap-1.5 px-3 py-2 rounded-full bg-[#111111]/80 backdrop-blur-xl border border-white/10 hover:border-[#D4AF37]/40 text-xs text-gray-300 transition-all group"
            title="Toggle Recruiter CLI"
          >
            <Terminal className="w-3.5 h-3.5 text-[#D4AF37] group-hover:rotate-12 transition-transform" />
            <span className="hidden lg:inline font-mono text-xs">CLI</span>
          </button>

          {/* Contact Direct */}
          <a
            href="#contact"
            className="hidden xl:flex items-center gap-1 px-4 py-2 rounded-full bg-[#D4AF37] text-[#090909] text-xs font-semibold hover:bg-[#E2C266] transition-colors"
          >
            Hire Candidate
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-full bg-[#111111]/90 border border-white/10 text-white"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="pointer-events-auto md:hidden mt-3 p-4 rounded-2xl bg-[#090909]/95 backdrop-blur-2xl border border-white/10 space-y-2 shadow-2xl"
          >
            {navItems.map((item) => (
              <a
                key={item.id}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-4 py-2.5 rounded-xl text-sm font-medium text-gray-300 hover:text-white hover:bg-white/5 transition-colors"
              >
                {item.label}
              </a>
            ))}
            <div className="pt-2 border-t border-white/10 flex gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenCommandPalette();
                }}
                className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl bg-white/5 border border-white/10 text-xs text-gray-300"
              >
                <Command className="w-3.5 h-3.5 text-[#D4AF37]" />
                Command Palette
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
