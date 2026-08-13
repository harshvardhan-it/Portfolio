import React, { useState } from 'react';
import { Copy, Check, Send } from 'lucide-react';
import { PERSONAL_INFO } from '../../data/portfolioData';
import { SpotlightCard } from '../ui/SpotlightCard';
import { MagneticButton } from '../ui/MagneticButton';
import { GithubIcon, LinkedinIcon } from '../ui/Icons';

const formatExternalLabel = (url: string) =>
  url.replace(/^https?:\/\/(www\.)?/i, '').replace(/\/$/, '') || 'Profile link';

export const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [formStatus, setFormStatus] = useState<'idle' | 'opening' | 'opened' | 'error'>('idle');
  const [errors, setErrors] = useState<Record<string, string>>({});
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

  const updateField = (field: keyof typeof formData, value: string) => {
    setFormData((current) => ({ ...current, [field]: value }));
    setErrors((current) => {
      const { [field]: _, ...remaining } = current;
      return remaining;
    });
    setFormStatus('idle');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const nextErrors: Record<string, string> = {};
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formData.name.trim()) nextErrors.name = 'Enter your name or recruiter name.';
    if (!formData.company.trim()) nextErrors.company = 'Enter your company or organization.';
    if (!emailPattern.test(formData.email.trim())) nextErrors.email = 'Enter a valid email address.';
    if (!formData.roleType) nextErrors.roleType = 'Select a target role type.';
    if (!formData.message.trim()) nextErrors.message = 'Enter opportunity details.';

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      setFormStatus('idle');
      return;
    }

    const subject = `Portfolio Inquiry — ${formData.roleType}`;
    const body = [
      `Name / Recruiter: ${formData.name.trim()}`,
      `Company / Organization: ${formData.company.trim()}`,
      `Email: ${formData.email.trim()}`,
      `Target Role: ${formData.roleType}`,
      '',
      'Message:',
      formData.message.trim(),
    ].join('\n');

    try {
      setFormStatus('opening');
      window.location.href = `mailto:${PERSONAL_INFO.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      setFormStatus('opened');
    } catch {
      setFormStatus('error');
    }
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
              <form onSubmit={handleSubmit} noValidate className="space-y-5">
                  <h3 className="text-xl font-bold font-display text-white mb-2">
                    Send Direct Inquiries
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label htmlFor="contact-name" className="text-xs font-mono text-gray-400">YOUR NAME / RECRUITER</label>
                      <input
                        id="contact-name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => updateField('name', e.target.value)}
                        aria-invalid={Boolean(errors.name)}
                        aria-describedby={errors.name ? 'contact-name-error' : undefined}
                        placeholder="e.g. Hiring team / Engineering recruiter"
                        className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#D4AF37]"
                      />
                      {errors.name && <p id="contact-name-error" className="text-xs font-mono text-[#F3E5AB]">{errors.name}</p>}
                    </div>

                    <div className="space-y-1.5">
                      <label htmlFor="contact-company" className="text-xs font-mono text-gray-400">COMPANY / ORGANIZATION</label>
                      <input
                        id="contact-company"
                        type="text"
                        required
                        value={formData.company}
                        onChange={(e) => updateField('company', e.target.value)}
                        aria-invalid={Boolean(errors.company)}
                        aria-describedby={errors.company ? 'contact-company-error' : undefined}
                        placeholder="e.g. Product engineering org"
                        className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#D4AF37]"
                      />
                      {errors.company && <p id="contact-company-error" className="text-xs font-mono text-[#F3E5AB]">{errors.company}</p>}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label htmlFor="contact-email" className="text-xs font-mono text-gray-400">EMAIL ADDRESS</label>
                      <input
                        id="contact-email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => updateField('email', e.target.value)}
                        aria-invalid={Boolean(errors.email)}
                        aria-describedby={errors.email ? 'contact-email-error' : undefined}
                        placeholder="name@company.com"
                        className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#D4AF37]"
                      />
                      {errors.email && <p id="contact-email-error" className="text-xs font-mono text-[#F3E5AB]">{errors.email}</p>}
                    </div>

                    <div className="space-y-1.5">
                      <label htmlFor="contact-role-type" className="text-xs font-mono text-gray-400">TARGET ROLE TYPE</label>
                      <select
                        id="contact-role-type"
                        value={formData.roleType}
                        onChange={(e) => updateField('roleType', e.target.value)}
                        aria-invalid={Boolean(errors.roleType)}
                        aria-describedby={errors.roleType ? 'contact-role-type-error' : undefined}
                        className="w-full px-4 py-2.5 rounded-xl bg-[#111111] border border-white/10 text-sm text-white focus:outline-none focus:border-[#D4AF37]"
                      >
                        <option value="Full-Time Software Engineer">Full-Time Software Engineer</option>
                        <option value="AI / LLM Engineer">AI / LLM Engineer</option>
                        <option value="Backend Developer">Backend Developer</option>
                        <option value="Software Engineering Intern">Software Engineering Intern</option>
                      </select>
                      {errors.roleType && <p id="contact-role-type-error" className="text-xs font-mono text-[#F3E5AB]">{errors.roleType}</p>}
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="contact-message" className="text-xs font-mono text-gray-400">MESSAGE / OPPORTUNITY DETAILS</label>
                    <textarea
                      id="contact-message"
                      rows={4}
                      required
                      value={formData.message}
                      onChange={(e) => updateField('message', e.target.value)}
                      aria-invalid={Boolean(errors.message)}
                      aria-describedby={errors.message ? 'contact-message-error' : undefined}
                      placeholder="Share details about the role, tech stack, and interview process..."
                      className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#D4AF37]"
                    />
                    {errors.message && <p id="contact-message-error" className="text-xs font-mono text-[#F3E5AB]">{errors.message}</p>}
                  </div>

                  <MagneticButton type="submit" disabled={formStatus === 'opening'} variant="gold" className="w-full" icon={<Send className="w-4 h-4" />}>
                    {formStatus === 'opening' ? 'Opening Email Client...' : 'Transmit Direct Message'}
                  </MagneticButton>
                  <p aria-live="polite" className={`text-xs font-mono ${formStatus === 'error' ? 'text-[#F3E5AB]' : 'text-gray-400'}`}>
                    {formStatus === 'opening' && 'Email client opened with your inquiry.'}
                    {formStatus === 'opened' && 'Email client opened with your inquiry.'}
                    {formStatus === 'error' && 'Unable to open your email client. Please use the direct email address instead.'}
                  </p>
                </form>
            </SpotlightCard>
          </div>
        </div>
      </div>
    </section>
  );
};
