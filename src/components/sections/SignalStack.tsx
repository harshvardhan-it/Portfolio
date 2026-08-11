import React from 'react';
import { motion } from 'framer-motion';
import { Gauge, Layers3, ShieldCheck, Rocket } from 'lucide-react';

const points = [
  {
    title: 'Systems judgment',
    copy: 'I optimize for failure modes, observability, and maintainability before I optimize for novelty. Good systems are boring in the right places.',
    icon: <Gauge className="w-5 h-5 text-[#D4AF37]" />,
  },
  {
    title: 'Product instincts',
    copy: 'The best architecture is the one that helps a product feel fast, trustworthy, and inexpensive to operate at scale.',
    icon: <Rocket className="w-5 h-5 text-[#D4AF37]" />,
  },
  {
    title: 'Execution discipline',
    copy: 'I ship with clear contracts, testable boundaries, and deployment habits that make teams safer—not slower.',
    icon: <ShieldCheck className="w-5 h-5 text-[#D4AF37]" />,
  },
  {
    title: 'Cross-stack fluency',
    copy: 'I’m comfortable moving from UI behavior to API contracts to runtime performance without losing the thread of the product.',
    icon: <Layers3 className="w-5 h-5 text-[#D4AF37]" />,
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
            01.5 / WHAT STRONG TEAMS LOOK FOR
          </div>
          <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-white tracking-tight" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            The signal is not the stack. It is the <span className="text-gold-gradient">judgment</span> behind it.
          </h2>
          <p className="mt-4 text-base text-gray-400 leading-relaxed">
            A senior engineer is judged less by what they can demo and more by how they make tradeoffs under pressure. This is the lens I use.
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
