import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle2, Download, Mail, ShieldCheck } from 'lucide-react';
import { RECRUITER_FAST_PASS } from '../../data/portfolioData';
import { MagneticButton } from './MagneticButton';

interface RecruiterFastPassProps {
  isOpen: boolean;
  onClose: () => void;
}

export const RecruiterFastPass: React.FC<RecruiterFastPassProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-3xl luxury-card rounded-3xl bg-[#090909] border border-[#D4AF37]/50 shadow-2xl p-6 sm:p-8 space-y-6"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 p-2 rounded-full bg-white/10 text-gray-300 hover:text-white hover:bg-white/20 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Header Badge */}
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/40 text-xs font-mono text-[#F3E5AB]">
              <ShieldCheck className="w-4 h-4 text-[#D4AF37]" />
              6-SECOND RECRUITER EXECUTIVE FAST-PASS
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold font-display text-white">
              {RECRUITER_FAST_PASS.headline}
            </h2>
          </div>

          {/* Target Spec Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-5 rounded-2xl bg-[#111111] border border-white/10 text-xs font-mono">
            <div>
              <span className="text-gray-500 block mb-1">TARGET ROLES:</span>
              <div className="flex flex-wrap gap-1.5">
                {RECRUITER_FAST_PASS.roles.map((r, i) => (
                  <span key={i} className="px-2 py-1 rounded bg-white/5 border border-white/10 text-gray-200">
                    {r}
                  </span>
                ))}
              </div>
            </div>

            <div className="space-y-2">
              <div>
                <span className="text-gray-500 block mb-1">LOCATION & RELOCATION:</span>
                <span className="text-white font-semibold">{RECRUITER_FAST_PASS.locationFlexibility}</span>
              </div>
              <div>
                <span className="text-gray-500 block mb-1">WORK AUTHORIZATION:</span>
                <span className="text-emerald-400 font-semibold">{RECRUITER_FAST_PASS.workAuthorization}</span>
              </div>
            </div>
          </div>

          {/* Top 4 Reasons to Interview */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono text-[#D4AF37] uppercase tracking-wider font-semibold">
              TOP 4 REASONS THIS CANDIDATE STANDS OUT:
            </h4>
            <div className="space-y-2">
              {RECRUITER_FAST_PASS.topCapabilities.map((cap, idx) => (
                <div key={idx} className="flex items-start gap-2.5 p-3 rounded-xl bg-white/5 border border-white/10 text-xs text-gray-200">
                  <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                  <span>{cap}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Fast Actions */}
          <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-white/10">
            <div className="flex flex-wrap gap-3">
              <MagneticButton href="#contact" variant="gold" onClick={onClose} icon={<Mail className="w-4 h-4" />}>
                Direct Recruiter Contact
              </MagneticButton>
              <MagneticButton href="#resume" variant="outline" onClick={onClose} icon={<Download className="w-4 h-4 text-[#D4AF37]" />}>
                ATS Resume View
              </MagneticButton>
            </div>
            <button
              onClick={onClose}
              className="text-xs font-mono text-gray-500 hover:text-white"
            >
              Close Fast-Pass [Esc]
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
