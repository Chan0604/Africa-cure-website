"use client";

import { motion } from "framer-motion";
import { useInView, useCountUp } from "@/hooks/useInView";
import type { LandingPageData } from "@/lib/types/landing";

type StatsSectionProps = LandingPageData["stats"];

function StatItem({
  value,
  suffix,
  label,
  index,
}: {
  value: number;
  suffix: string;
  label: string;
  index: number;
}) {
  const { ref, isInView } = useInView(0.4);
  const count = useCountUp(value, isInView, 2200);

  return (
    <motion.div
      ref={ref}
      className="glass-card shine-effect group relative rounded-2xl p-8 text-center"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay: index * 0.12 }}
      whileHover={{ y: -4, boxShadow: "0 20px 60px rgba(0,0,0,0.4), 0 0 40px rgba(77,184,184,0.1)" }}
    >
      <div className="absolute -top-px left-1/2 h-px w-16 -translate-x-1/2 bg-gradient-to-r from-transparent via-ac-cyan/50 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      <div className="mb-2 flex items-baseline justify-center gap-1">
        <span
          className="text-5xl font-bold tabular-nums"
          style={{
            background: "linear-gradient(135deg, #a8f0f0 0%, #7de0e0 40%, #4db8b8 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          {count}
        </span>
        <span className="text-2xl font-bold text-ac-cyan-light">{suffix}</span>
      </div>
      <p className="text-sm tracking-wide text-white/50">{label}</p>

      {/* Bottom accent */}
      <div className="absolute bottom-0 left-1/2 h-0.5 w-0 -translate-x-1/2 rounded-full bg-gradient-to-r from-ac-cyan/0 via-ac-cyan/60 to-ac-cyan/0 transition-all duration-500 group-hover:w-3/4" />
    </motion.div>
  );
}

export default function StatsSection({ eyebrow, title, titleHighlight, items }: StatsSectionProps) {
  return (
    <section id="about" className="relative py-24 sm:py-32">
      {/* Section separator */}
      <div className="neon-line mx-auto mb-20 w-full max-w-xs opacity-40" />

      <div className="container-ac">
        {/* Header */}
        <div className="mb-16 text-center">
          <motion.p
            className="eyebrow mb-4"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {eyebrow}
          </motion.p>

          <motion.h2
            className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <span className="text-white">{title} </span>
            <span className="text-gradient">{titleHighlight}</span>
          </motion.h2>
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
          {items.map((stat, index) => (
            <StatItem
              key={`${stat.label}-${index}`}
              value={stat.value}
              suffix={stat.suffix}
              label={stat.label}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
