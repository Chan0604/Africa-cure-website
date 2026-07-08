"use client";

import { motion } from "framer-motion";
import type { ComponentType, SVGProps } from "react";

interface FloatingGlassCardProps {
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  title: string;
  description: string;
  delay?: number;
  className?: string;
}

export default function FloatingGlassCard({
  icon: Icon,
  title,
  description,
  delay = 0,
  className,
}: FloatingGlassCardProps) {
  return (
    <motion.div
      className={`glass-card-premium shine-effect glow-border group relative rounded-2xl p-7 ${className ?? ""}`}
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay }}
      whileHover={{ y: -6, scale: 1.01 }}
    >
      {/* Corner accent */}
      <div className="absolute top-0 right-0 h-16 w-16 overflow-hidden rounded-tr-2xl">
        <div className="absolute -top-8 -right-8 h-16 w-16 rounded-full bg-ac-cyan/10 blur-xl" />
      </div>

      {/* Icon */}
      <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-ac-cyan/20 to-ac-teal/30 ring-1 ring-ac-cyan/30 transition-all duration-300 group-hover:ring-ac-cyan/50 group-hover:shadow-[0_0_20px_rgba(77,184,184,0.2)]">
        <Icon className="h-6 w-6 text-ac-cyan-light" />
      </div>

      {/* Content */}
      <h3 className="mb-3 text-lg font-bold text-white/90 transition-colors duration-300 group-hover:text-white">
        {title}
      </h3>
      <p className="text-sm leading-relaxed text-white/45 transition-colors duration-300 group-hover:text-white/60">
        {description}
      </p>

      {/* Bottom neon line */}
      <div className="absolute bottom-0 left-1/2 h-0.5 w-0 -translate-x-1/2 rounded-full bg-gradient-to-r from-ac-cyan/0 via-ac-cyan/60 to-ac-cyan/0 transition-all duration-500 group-hover:w-3/4" />
    </motion.div>
  );
}

