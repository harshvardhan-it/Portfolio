import { useState, useEffect } from 'react';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { CommandPalette } from './components/layout/CommandPalette';
import { TerminalWidget } from './components/ui/TerminalWidget';
import { Hero } from './components/sections/Hero';
import { SignalStack } from './components/sections/SignalStack';
import { Philosophy } from './components/sections/Philosophy';
import { Projects } from './components/sections/Projects';
import { TechMatrix } from './components/sections/TechMatrix';
import { Experience } from './components/sections/Experience';
import { Achievements } from './components/sections/Achievements';
import { Education } from './components/sections/Education';
import { ResumePreview } from './components/sections/ResumePreview';
import { Testimonials } from './components/sections/Testimonials';
import { Contact } from './components/sections/Contact';

export function App() {
  const [isCommandPaletteOpen, setIsCommandPaletteOpen] = useState(false);
  const [isTerminalOpen, setIsTerminalOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const target = e.target as HTMLElement;
      const isInputFocused = target instanceof HTMLInputElement || target instanceof HTMLTextAreaElement || target.isContentEditable;

      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k' && !isInputFocused) {
        e.preventDefault();
        e.stopPropagation();
        setIsCommandPaletteOpen(prev => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="min-h-screen bg-[#090909] text-[#F5F5F5] font-sans antialiased selection:bg-[#D4AF37]/30 selection:text-white">
      {/* Floating Navigation */}
      <Navbar
        onOpenCommandPalette={() => setIsCommandPaletteOpen(true)}
        onToggleTerminal={() => setIsTerminalOpen(!isTerminalOpen)}
      />

      {/* Main Content Sections */}
      <main>
        <Hero onOpenTerminal={() => setIsTerminalOpen(true)} />
        <SignalStack />
        <Philosophy />
        <Projects />
        <TechMatrix />
        <Experience />
        <Achievements />
        <Education />
        <ResumePreview />
        <Testimonials />
        <Contact />
      </main>

      {/* Minimal Footer */}
      <Footer />

      {/* Recruiter CLI Terminal Drawer */}
      <TerminalWidget
        isOpen={isTerminalOpen}
        onClose={() => setIsTerminalOpen(false)}
      />

      {/* Cmd + K Command Palette Modal */}
      <CommandPalette
        isOpen={isCommandPaletteOpen}
        onClose={() => setIsCommandPaletteOpen(false)}
        onOpenTerminal={() => setIsTerminalOpen(true)}
      />
    </div>
  );
}

export default App;
