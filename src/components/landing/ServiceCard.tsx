"use client";

import { motion } from "framer-motion";
import { getServiceIcon } from "@/lib/icons";

export interface ServiceCardProps {
  icon: string;
  title: string;
  description: string;
  index: number;
}

export default function ServiceCard({ icon, title, description, index }: ServiceCardProps) {
  const IconComponent = getServiceIcon(icon);

  return (
    <motion.div
      className="glass-card shine-effect glow-border group relative rounded-2xl p-7"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -4 }}
    >
      {/* Top accent line */}
      <div className="absolute -top-px left-6 right-6 h-px bg-gradient-to-r from-transparent via-ac-cyan/40 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      {/* Icon */}
      <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-ac-cyan/15 to-ac-teal/20 ring-1 ring-ac-cyan/20 transition-all duration-300 group-hover:ring-ac-cyan/40">
        <IconComponent className="h-5 w-5 text-ac-cyan-light" />
      </div>

      {/* Content */}
      <h4 className="mb-3 text-base font-semibold text-white/90 transition-colors duration-300 group-hover:text-white">
        {title}
      </h4>
      <p className="text-sm leading-relaxed text-white/45 transition-colors duration-300 group-hover:text-white/60">
        {description}
      </p>

      {/* Bottom accent */}
      <div className="absolute bottom-0 left-1/2 h-0.5 w-0 -translate-x-1/2 rounded-full bg-gradient-to-r from-ac-cyan/0 via-ac-cyan/50 to-ac-cyan/0 transition-all duration-500 group-hover:w-2/3" />
    </motion.div>
  );
}
