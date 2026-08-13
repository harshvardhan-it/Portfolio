import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface MagneticButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  variant?: 'gold' | 'outline' | 'dark' | 'wine';
  href?: string;
  icon?: React.ReactNode;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}

export const MagneticButton: React.FC<MagneticButtonProps> = ({
  children,
  onClick,
  className = '',
  variant = 'gold',
  href,
  icon,
  type = 'button',
  disabled = false,
}) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - (left + width / 2)) * 0.25;
    const y = (e.clientY - (top + height / 2)) * 0.25;
    setPosition({ x, y });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  let baseStyle = 'relative inline-flex items-center justify-center font-medium text-sm px-6 py-3 rounded-full transition-all duration-200 cursor-pointer overflow-hidden group select-none ';

  if (variant === 'gold') {
    baseStyle += 'bg-[#D4AF37] text-[#090909] font-semibold hover:bg-[#E2C266] shadow-[0_0_20px_rgba(212,175,55,0.3)] hover:shadow-[0_0_30px_rgba(212,175,55,0.5)]';
  } else if (variant === 'outline') {
    baseStyle += 'bg-transparent text-[#F5F5F5] border border-white/20 hover:border-[#D4AF37]/60 hover:bg-white/5';
  } else if (variant === 'dark') {
    baseStyle += 'bg-[#161616] text-[#F5F5F5] border border-white/10 hover:border-white/30 hover:bg-[#1E1E1E]';
  } else if (variant === 'wine') {
    baseStyle += 'bg-[#8B1E3F] text-white hover:bg-[#9E254A] shadow-[0_0_20px_rgba(139,30,63,0.3)]';
  }

  const sharedProps = {
    onMouseMove: handleMouseMove,
    onMouseLeave: handleMouseLeave,
    animate: { x: position.x, y: position.y },
    transition: { type: 'spring' as const, stiffness: 350, damping: 20 },
    className: `${baseStyle} ${className} disabled:cursor-not-allowed disabled:opacity-70`,
    onClick,
  };

  const buttonContent = (
    <motion.button
      type={type}
      disabled={disabled}
      {...sharedProps}
    >
      <span className="relative z-10 flex items-center gap-2">
        {children}
        {icon && <span className="transition-transform group-hover:translate-x-1">{icon}</span>}
      </span>
      {/* Dynamic light streak */}
      <span className="absolute inset-0 bg-gold-shimmer opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
    </motion.button>
  );

  if (href) {
    return (
      <a href={href} className="inline-block" onClick={onClick}>
        <motion.div
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          animate={{ x: position.x, y: position.y }}
          transition={{ type: 'spring', stiffness: 350, damping: 20 }}
          className={`${baseStyle} ${className}`}
        >
          <span className="relative z-10 flex items-center gap-2">
            {children}
            {icon && <span className="transition-transform group-hover:translate-x-1">{icon}</span>}
          </span>
          <span className="absolute inset-0 bg-gold-shimmer opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
        </motion.div>
      </a>
    );
  }

  return buttonContent;
};
