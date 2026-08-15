import React, { useEffect, useState, useRef } from 'react';
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from 'framer-motion';
import {
  ArrowDown,
  Mail,
  FileText,
  Terminal,
  ShieldCheck,
  Zap,
  ArrowRight,
} from 'lucide-react';
import { PERSONAL_INFO } from '../../data/portfolioData';
import { MagneticButton } from '../ui/MagneticButton';
import { GithubIcon, LinkedinIcon } from '../ui/Icons';
import { RecruiterFastPass } from '../ui/RecruiterFastPass';

const ROTATING_HEADLINES = [
  'FULL-STACK ENGINEER',
  'AI ENGINEER',
  'DATA ANALYST',
  'FULL-STACK DEVELOPER',
];

interface HeroProps {
  onOpenTerminal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenTerminal }) => {
  const [fastPassOpen, setFastPassOpen] = useState(false);

  // Typewriter state
  const [headlineIndex, setHeadlineIndex] = useState(0);
  const [displayedHeadline, setDisplayedHeadline] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);

  /* ============================================================
     MOUSE / BACKGROUND MOTION
     ============================================================ */

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, {
    stiffness: 60,
    damping: 30,
  });

  const springY = useSpring(mouseY, {
    stiffness: 60,
    damping: 30,
  });

  const glowX = useTransform(
    springX,
    [-500, 500],
    ['40%', '60%']
  );

  const glowY = useTransform(
    springY,
    [-300, 300],
    ['35%', '65%']
  );

  /*
   * Reactive background gradient.
   *
   * Do NOT use glowX.get() / glowY.get() inside a normal
   * template string because that only reads a snapshot.
   */
  const glowBackground = useTransform(
    [glowX, glowY],
    ([x, y]) =>
      `radial-gradient(
        600px circle at ${x} ${y},
        rgba(212,175,55,0.06),
        transparent 70%
      )`
  );

  const firstName =
    PERSONAL_INFO.name.split(' ')[0] || PERSONAL_INFO.name;

  const initials =
    PERSONAL_INFO.name
      .split(' ')
      .map((part) => part[0])
      .join('')
      .slice(0, 2)
      .toUpperCase() || 'ME';

  const [imageError, setImageError] = useState(false);

  /* ============================================================
     MOUSE MOVE
     ============================================================ */

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = containerRef.current?.getBoundingClientRect();

    if (!rect) return;

    mouseX.set(
      e.clientX - rect.left - rect.width / 2
    );

    mouseY.set(
      e.clientY - rect.top - rect.height / 2
    );
  };

  /* ============================================================
     TYPEWRITER HEADLINE ENGINE
     ============================================================ */

  useEffect(() => {
    const currentHeadline = ROTATING_HEADLINES[headlineIndex];

    let timeout: number;

    /* ----------------------------------------------------------
       1. TYPE CHARACTER BY CHARACTER
       ---------------------------------------------------------- */

    if (
      !isDeleting &&
      displayedHeadline.length < currentHeadline.length
    ) {
      timeout = window.setTimeout(() => {
        setDisplayedHeadline(
          currentHeadline.slice(
            0,
            displayedHeadline.length + 1
          )
        );
      }, 75);
    }

    /* ----------------------------------------------------------
       2. PAUSE AFTER FINISHING THE WORD
       ---------------------------------------------------------- */

    else if (
      !isDeleting &&
      displayedHeadline.length === currentHeadline.length
    ) {
      timeout = window.setTimeout(() => {
        setIsDeleting(true);
      }, 1800);
    }

    /* ----------------------------------------------------------
       3. DELETE CHARACTER BY CHARACTER
       ---------------------------------------------------------- */

    else if (
      isDeleting &&
      displayedHeadline.length > 0
    ) {
      timeout = window.setTimeout(() => {
        setDisplayedHeadline(
          currentHeadline.slice(
            0,
            displayedHeadline.length - 1
          )
        );
      }, 45);
    }

    /* ----------------------------------------------------------
       4. MOVE TO NEXT HEADLINE
       ---------------------------------------------------------- */

    else if (
      isDeleting &&
      displayedHeadline.length === 0
    ) {
      setIsDeleting(false);

      setHeadlineIndex(
        (previousIndex) =>
          (previousIndex + 1) %
          ROTATING_HEADLINES.length
      );
    }

    return () => {
      if (timeout) {
        window.clearTimeout(timeout);
      }
    };
  }, [
    displayedHeadline,
    headlineIndex,
    isDeleting,
  ]);

  return (
    <section
      id="hero"
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-grid-pattern"
      style={{ background: '#090909' }}
    >

      {/* ========================================================
          MOUSE-REACTIVE RADIAL GLOW
          ======================================================== */}

      <motion.div
        className="pointer-events-none absolute inset-0 opacity-60"
        style={{
          background: glowBackground,
        }}
      />

      {/* ========================================================
          STATIC BACKGROUND ORBS
          ======================================================== */}

      <div className="pointer-events-none absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-[#D4AF37]/6 rounded-full blur-[120px]" />

      <div className="pointer-events-none absolute bottom-1/4 right-1/5 w-[350px] h-[350px] bg-[#8B1E3F]/8 rounded-full blur-[100px]" />

      {/* ========================================================
          GRID OVERLAY
          ======================================================== */}

      <div className="pointer-events-none absolute inset-0 bg-grid-pattern opacity-100" />

      {/* ========================================================
          MAIN HERO CONTAINER
          ======================================================== */}

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-28 pb-16">

        {/* ======================================================
            TOP STATUS + FAST PASS
            ====================================================== */}

        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap items-center gap-3 mb-12"
        >

          {/* Availability */}

          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#111]/80 backdrop-blur border border-white/10 text-xs font-mono text-gray-300">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
            </span>

            {PERSONAL_INFO.status}
          </div>

          {/* Recruiter Fast Pass */}

          <button
            onClick={() => setFastPassOpen(true)}
            className="group inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/40 text-xs font-mono text-[#F3E5AB] hover:bg-[#D4AF37]/20 transition-all duration-200 hover:border-[#D4AF37]/70 hover:shadow-[0_0_20px_rgba(212,175,55,0.2)]"
          >
            <ShieldCheck className="w-3.5 h-3.5 text-[#D4AF37]" />

            ⚡ 6-SECOND RECRUITER FAST-PASS

            <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
          </button>
        </motion.div>

        {/* ======================================================
            TWO-COLUMN HERO
            ====================================================== */}

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

          {/* ====================================================
              LEFT COLUMN
              ==================================================== */}

          <div className="lg:col-span-7 space-y-8">

            {/* ==================================================
                NAME IDENTIFIER
                ================================================== */}

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                delay: 0.1,
                duration: 0.6,
              }}
              className="font-mono text-xs text-gray-500 flex items-center gap-2"
            >
              <span className="w-6 h-px bg-gray-600" />

              {PERSONAL_INFO.name} / AI + DATA + FULL-STACK
            </motion.div>

            {/* ==================================================
                MAIN HEADLINE
                ================================================== */}

            <motion.div
              initial={{
                opacity: 0,
                y: 24,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.75,
                delay: 0.15,
              }}
            >
              <h1
                className="text-4xl sm:text-6xl lg:text-[68px] font-bold tracking-[-0.03em] leading-[0.98] text-white"
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                }}
              >

                {/* =================================================
                    STATIC PRIMARY POSITIONING
                    ================================================= */}

                <span className="block text-gold-gradient">
                  AI + DATA +
                </span>

                {/* =================================================
                    TYPEWRITER ROLE

                    Example:

                    AI + DATA +
                    FULL-STACK ENGINEER|

                    then:

                    AI + DATA +
                    AI ENGINEER|

                    then:

                    AI + DATA +
                    DATA ANALYST|
                    ================================================= */}

                <span className="block mt-1 min-h-[1.08em] overflow-visible whitespace-nowrap">

                  <span className="inline-block">

                    {displayedHeadline}

                    {/* Blinking cursor */}

                    <span
                      className="inline-block ml-1 text-[#D4AF37] animate-blink"
                      aria-hidden="true"
                    >
                      |
                    </span>

                  </span>

                </span>

                {/* =================================================
                    SUPPORTING HERO STATEMENT
                    ================================================= */}

                <span className="block text-gray-400 text-2xl sm:text-3xl lg:text-4xl mt-2 font-medium">
                  Building intelligent, data-driven applications.
                </span>

              </h1>
            </motion.div>

            {/* ==================================================
                SUBHEADLINE
                ================================================== */}

            <motion.p
              initial={{
                opacity: 0,
                y: 16,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.7,
                delay: 0.25,
              }}
              className="text-base sm:text-lg text-gray-400 max-w-xl leading-relaxed"
            >
              I combine AI, analytics, and modern full-stack engineering
              to turn technical systems into useful products — from
              executive decision intelligence to computer vision
              workflows.
            </motion.p>

            {/* ==================================================
                CTA BUTTONS
                ================================================== */}

            <motion.div
              initial={{
                opacity: 0,
                y: 16,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.7,
                delay: 0.35,
              }}
              className="flex flex-wrap items-center gap-3 pt-2"
            >

              <MagneticButton
                href="#projects"
                variant="gold"
              >
                View Projects
              </MagneticButton>

              <MagneticButton
                href="#resume"
                variant="outline"
                icon={
                  <FileText className="w-4 h-4" />
                }
              >
                View Resume
              </MagneticButton>

              <button
                onClick={onOpenTerminal}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-[#111111] text-gray-300 border border-white/8 hover:border-[#D4AF37]/40 hover:text-white transition-all duration-200 font-mono text-xs group"
              >
                <Terminal className="w-4 h-4 text-[#8B1E3F] group-hover:rotate-6 transition-transform" />

                Recruiter CLI
              </button>

            </motion.div>

            {/* ==================================================
                SOCIAL + CONNECT
                ================================================== */}

            <motion.div
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              transition={{
                duration: 0.7,
                delay: 0.45,
              }}
              className="flex items-center gap-5 pt-4 text-gray-500 text-xs font-mono border-t border-white/8"
            >

              <span className="text-gray-600 uppercase tracking-wider">
                Connect
              </span>

              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 hover:text-[#D4AF37] transition-colors duration-200"
              >
                <GithubIcon className="w-4 h-4" />
                GitHub
              </a>

              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 hover:text-[#D4AF37] transition-colors duration-200"
              >
                <LinkedinIcon className="w-4 h-4" />
                LinkedIn
              </a>

              <a
                href={`https://mail.google.com/mail/?view=cm&fs=1&to=${PERSONAL_INFO.email}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-[#D4AF37] transition-colors duration-200"
              >
                <Mail className="w-4 h-4" />
                Email
              </a>

            </motion.div>
          </div>

          {/* ====================================================
              RIGHT COLUMN — PORTRAIT + METRICS
              ==================================================== */}

          <div className="lg:col-span-5 space-y-4">

            {/* ==================================================
                PORTRAIT CARD
                ================================================== */}

            <motion.div
              initial={{
                opacity: 0,
                scale: 0.97,
                y: 20,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                y: 0,
              }}
              transition={{
                duration: 0.9,
                delay: 0.2,
              }}
              className="relative"
            >

              {/* Ambient glow */}

              <div className="absolute -inset-4 bg-gradient-to-br from-[#D4AF37]/15 via-transparent to-[#8B1E3F]/10 rounded-3xl blur-2xl" />

              <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-[#111111]">

                {/* Browser chrome */}

                <div className="flex items-center gap-1.5 px-4 py-3 bg-[#161616] border-b border-white/8">

                  <span className="w-3 h-3 rounded-full bg-red-500/70" />
                  <span className="w-3 h-3 rounded-full bg-yellow-500/70" />
                  <span className="w-3 h-3 rounded-full bg-emerald-500/70" />

                  <span className="ml-3 flex-1 h-5 rounded bg-[#090909] flex items-center px-3">

                    <span className="text-[10px] font-mono text-gray-500">
                      {firstName.toLowerCase()}.dev — {PERSONAL_INFO.title}
                    </span>

                  </span>
                </div>

                {/* ==================================================
                    PORTRAIT IMAGE
                    ================================================== */}

                <div className="relative h-72 sm:h-80 overflow-hidden bg-[#0d0d0d] group">

                  {!imageError && (
                    <>
                      {/* Grayscale base */}
                      <img
                        src="/assets/portrait.png"
                        alt={PERSONAL_INFO.name}
                        className="
                          absolute
                          inset-0
                          w-full
                          h-full
                          object-contain
                          object-center
                          grayscale
                          contrast-110
                        "
                        onError={() => {
                          setImageError(true);
                        }}
                      />

                      {/* Color overlay */}
                      <img
                        src="/assets/portrait.png"
                        alt=""
                        aria-hidden="true"
                        className="
                          absolute
                          inset-0
                          w-full
                          h-full
                          object-contain
                          object-center
                          opacity-0
                          group-hover:opacity-100
                          transition-opacity
                          duration-1000
                          ease-in-out
                        "
                        onError={() => {
                          setImageError(true);
                        }}
                      />
                    </>
                  )}

                  {/* =================================================
                      FALLBACK
                      ================================================= */}

                  {imageError && (
                    <div className="w-full h-full items-center justify-center flex">

                      <div className="text-center space-y-3">

                        <div className="w-20 h-20 mx-auto rounded-full bg-[#D4AF37]/20 border border-[#D4AF37]/30 flex items-center justify-center text-3xl font-bold text-[#D4AF37]">
                          {initials}
                        </div>

                        <div className="text-sm text-gray-400 font-mono">
                          {PERSONAL_INFO.name}
                        </div>

                      </div>

                    </div>
                  )}

                  {/* =================================================
                      BOTTOM PORTRAIT BADGE
                      ================================================= */}

                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-[#090909] to-transparent">

                    <div className="flex items-center justify-between">

                      <div>

                        <div className="text-sm font-semibold text-white">
                          {PERSONAL_INFO.name}
                        </div>

                        <div className="text-xs text-gray-400 font-mono">
                          {PERSONAL_INFO.title}
                        </div>

                      </div>

                      <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/30">

                        <Zap className="w-3 h-3 text-emerald-400" />

                        <span className="text-[10px] font-mono text-emerald-400">
                          Available
                        </span>

                      </div>

                    </div>

                  </div>

                </div>
              </div>
            </motion.div>

            {/* ==================================================
                METRICS
                ================================================== */}

            <motion.div
              initial={{
                opacity: 0,
                y: 16,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.7,
                delay: 0.4,
              }}
              className="grid grid-cols-2 gap-3"
            >

              {PERSONAL_INFO.metrics.map(
                (metric, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-[#111111] border border-white/8 hover:border-[#D4AF37]/25 transition-colors duration-300 group"
                  >

                    <div
                      className="text-xl sm:text-2xl font-bold text-[#D4AF37] font-mono"
                      style={{
                        fontFamily:
                          "'Space Grotesk', sans-serif",
                      }}
                    >
                      {metric.value}
                    </div>

                    <div className="text-[10px] font-mono text-gray-500 uppercase tracking-wider mt-1 leading-tight">
                      {metric.label}
                    </div>

                  </div>
                )
              )}

            </motion.div>
          </div>
        </div>

        {/* ========================================================
            SCROLL INDICATOR
            ======================================================== */}

        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            delay: 1,
            duration: 0.8,
          }}
          className="mt-16 flex items-center gap-3 text-gray-600"
        >

          <a
            href="#about"
            className="inline-flex items-center gap-2 text-[11px] font-mono uppercase tracking-widest hover:text-gray-400 transition-colors"
          >
            Scroll to explore

            <ArrowDown className="w-3.5 h-3.5 animate-bounce text-[#D4AF37]" />
          </a>

        </motion.div>
      </div>

      {/* ==========================================================
          RECRUITER FAST-PASS DRAWER MODAL
          ========================================================== */}

      <RecruiterFastPass
        isOpen={fastPassOpen}
        onClose={() => setFastPassOpen(false)}
      />

    </section>
  );
};