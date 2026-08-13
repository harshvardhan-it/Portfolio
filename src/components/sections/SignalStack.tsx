import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Gauge, Layers3, ShieldCheck } from 'lucide-react';

const points = [
  {
    title: 'AI-first thinking',
    copy: 'I focus on where intelligence actually adds value — from prediction and automation to decision support — rather than adding AI simply because the stack can support it.',
    icon: <Cpu className="w-5 h-5 text-[#D4AF37]" />,
  },
  {
    title: 'Data-driven decisions',
    copy: 'I turn raw data into metrics, insights, and actionable signals — connecting analytics with the product decisions they are meant to improve.',
    icon: <Gauge className="w-5 h-5 text-[#D4AF37]" />,
  },
  {
    title: 'Full-stack ownership',
    copy: 'I’m comfortable moving across the product lifecycle — from interfaces and APIs to databases, authentication, integrations, and deployment.',
    icon: <Layers3 className="w-5 h-5 text-[#D4AF37]" />,
  },
  {
    title: 'Engineering discipline',
    copy: 'I care about clean boundaries, maintainable code, reliable integrations, and deployment practices that make products easier to evolve.',
    icon: <ShieldCheck className="w-5 h-5 text-[#D4AF37]" />,
  },
];

export const SignalStack: React.FC = () => {
  return (
    <section id="signal" className="py-24 relative bg-[#090909]">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/8 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-[#D4AF37]">
            01.5 / HOW I THINK ABOUT BUILDING
          </div>
          <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-white tracking-tight" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            The stack gets attention. The <span className="text-gold-gradient">thinking</span> earns trust.
          </h2>
          <p className="mt-4 text-base text-gray-400 leading-relaxed">
            I build at the intersection of AI, data, and full-stack engineering — turning technical capabilities into products that are useful, measurable, and built to last.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {points.map((point, index) => (
            <motion.div
              key={point.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="rounded-2xl border border-white/8 bg-[#111111] p-6"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#D4AF37]/10 border border-[#D4AF37]/20 flex items-center justify-center">
                  {point.icon}
                </div>
                <h3 className="text-lg font-semibold text-white" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                  {point.title}
                </h3>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-gray-400">{point.copy}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
