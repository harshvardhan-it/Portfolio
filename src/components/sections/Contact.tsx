import React, { useState } from 'react';
import { Copy, Check, Sparkles, Send } from 'lucide-react';
import confetti from 'canvas-confetti';
import { PERSONAL_INFO } from '../../data/portfolioData';
import { SpotlightCard } from '../ui/SpotlightCard';
import { MagneticButton } from '../ui/MagneticButton';
import { GithubIcon, LinkedinIcon } from '../ui/Icons';

const formatExternalLabel = (url: string) =>
  url.replace(/^https?:\/\/(www\.)?/i, '').replace(/\/$/, '') || 'Profile link';

export const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const githubLabel = formatExternalLabel(PERSONAL_INFO.github);
  const linkedinLabel = formatExternalLabel(PERSONAL_INFO.linkedin);
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    roleType: 'Full-Time Software Engineer',
    message: ''
  });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#D4AF37', '#F3E5AB', '#8B1E3F']
    });
  };

  return (
    <section id="contact" className="py-28 relative bg-[#090909]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="space-y-4 max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-[#D4AF37]">
            09 // INITIATE RECRUITMENT & COLLABORATION
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold font-display text-white tracking-tight">
            If the role needs <span className="text-gold-gradient">real product judgment</span>, I’m interested.
          </h2>
          <p className="text-base text-gray-400 font-normal">
            I’m open to full-time and high-impact engineering roles where technical depth, product sense, and execution discipline matter.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Contact Info Panel */}
          <div className="lg:col-span-5 space-y-8">
            <SpotlightCard className="space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-mono text-gray-400 uppercase">DIRECT EMAIL CONTACT</span>
                <div className="flex items-center justify-between p-3.5 rounded-xl bg-white/5 border border-white/10">
                  <span className="font-mono text-sm font-semibold text-white select-all">
                    {PERSONAL_INFO.email}
                  </span>
                  <button
                    onClick={handleCopyEmail}
                    className="p-2 rounded-lg bg-white/10 hover:bg-[#D4AF37] hover:text-[#090909] text-gray-300 transition-colors"
                    title="Copy Email"
                  >
                    {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>
                {copied && (
                  <span className="text-xs font-mono text-emerald-400 block">
                    ✓ Email address copied to clipboard!
                  </span>
                )}
              </div>

              <div className="space-y-3 pt-4 border-t border-white/10">
                <span className="text-xs font-mono text-gray-400 uppercase">LOCATION & TIMEZONE</span>
                <p className="text-sm text-gray-200">
                  {PERSONAL_INFO.location} — Open to Remote & Relocation.
                </p>
              </div>

              <div className="space-y-3 pt-4 border-t border-white/10">
                <span className="text-xs font-mono text-gray-400 uppercase">SOCIAL & REPOSITORIES</span>
                <div className="flex flex-col gap-2">
                  <a
                    href={PERSONAL_INFO.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-between p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-mono text-gray-300 hover:text-white transition-colors"
                  >
                    <span className="flex items-center gap-2">
                      <GithubIcon className="w-4 h-4 text-white" /> {githubLabel}
                    </span>
                    <span>→</span>
                  </a>
                  <a
                    href={PERSONAL_INFO.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-between p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-mono text-gray-300 hover:text-white transition-colors"
                  >
                    <span className="flex items-center gap-2">
                      <LinkedinIcon className="w-4 h-4 text-blue-400" /> {linkedinLabel}
                    </span>
                    <span>→</span>
                  </a>
                </div>
              </div>
            </SpotlightCard>
          </div>

          {/* Right Interactive Form */}
          <div className="lg:col-span-7">
            <SpotlightCard className="p-8 space-y-6">
              {submitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-16 h-16 mx-auto rounded-full bg-[#D4AF37]/20 border border-[#D4AF37] flex items-center justify-center text-[#D4AF37]">
                    <Sparkles className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold font-display text-white">Message Transmitted!</h3>
                  <p className="text-sm text-gray-300 max-w-md mx-auto">
                    Thank you for reaching out. I usually review recruiter messages within 2-4 hours.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-xs font-mono text-[#D4AF37] hover:underline"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <h3 className="text-xl font-bold font-display text-white mb-2">
                    Send Direct Inquiries
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-mono text-gray-400">YOUR NAME / RECRUITER</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Hiring team / Engineering recruiter"
                        className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#D4AF37]"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-mono text-gray-400">COMPANY / ORGANIZATION</label>
                      <input
                        type="text"
                        required
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="e.g. Product engineering org"
                        className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#D4AF37]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-mono text-gray-400">EMAIL ADDRESS</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="name@company.com"
                        className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#D4AF37]"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-mono text-gray-400">TARGET ROLE TYPE</label>
                      <select
                        value={formData.roleType}
                        onChange={(e) => setFormData({ ...formData, roleType: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl bg-[#111111] border border-white/10 text-sm text-white focus:outline-none focus:border-[#D4AF37]"
                      >
                        <option value="Full-Time Software Engineer">Full-Time Software Engineer</option>
                        <option value="AI / LLM Engineer">AI / LLM Engineer</option>
                        <option value="Backend Developer">Backend Developer</option>
                        <option value="Software Engineering Intern">Software Engineering Intern</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-gray-400">MESSAGE / OPPORTUNITY DETAILS</label>
                    <textarea
                      rows={4}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Share details about the role, tech stack, and interview process..."
                      className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#D4AF37]"
                    />
                  </div>

                  <MagneticButton variant="gold" className="w-full" icon={<Send className="w-4 h-4" />}>
                    Transmit Direct Message
                  </MagneticButton>
                </form>
              )}
            </SpotlightCard>
          </div>
        </div>
      </div>
    </section>
  );
};
