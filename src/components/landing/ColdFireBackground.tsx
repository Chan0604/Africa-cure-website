"use client";

import { motion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";

interface Particle {
  id: number;
  x: number;
  size: number;
  duration: number;
  delay: number;
  opacity: number;
  drift: number;
}

function generateParticles(count: number): Particle[] {
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    x: (i % 10) * 10 + (i % 3) * 1.5,
    size: 1.2 + (i % 5) * 0.4,
    duration: 8 + (i % 7) * 1.2,
    delay: (i % 8) * 0.6,
    opacity: 0.15 + (i % 6) * 0.05,
    drift: ((i % 11) - 5) * 8,
  }));
}

export default function ColdFireBackground() {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    setParticles(generateParticles(50));
  }, []);

  const halos = useMemo(
    () => [
      { top: "8%",  left: "12%", size: 500, color: "rgba(77, 184, 184, 0.12)" },
      { top: "55%", left: "72%", size: 420, color: "rgba(125, 224, 224, 0.09)" },
      { top: "25%", left: "48%", size: 600, color: "rgba(26, 92, 92, 0.35)" },
      { top: "78%", left: "18%", size: 350, color: "rgba(77, 184, 184, 0.07)" },
      { top: "40%", left: "85%", size: 280, color: "rgba(168, 240, 240, 0.06)" },
    ],
    [],
  );

  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden">
      {/* Deep base gradient — AfricaCure dark teal */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse 90% 70% at 50% 110%, rgba(77, 184, 184, 0.20) 0%, transparent 55%),
            radial-gradient(ellipse 60% 50% at 15% 85%, rgba(125, 224, 224, 0.10) 0%, transparent 50%),
            radial-gradient(ellipse 55% 55% at 85% 15%, rgba(26, 92, 92, 0.45) 0%, transparent 60%),
            radial-gradient(ellipse 40% 40% at 50% 50%, rgba(10, 31, 34, 0.8) 0%, transparent 100%),
            linear-gradient(180deg, #0a1f22 0%, #122e31 35%, #194346 65%, #0a1f22 100%)
          `,
        }}
      />

      {/* Tech grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(77, 184, 184, 0.6) 1px, transparent 1px),
            linear-gradient(90deg, rgba(77, 184, 184, 0.6) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Diagonal accent lines */}
      <div
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `
            repeating-linear-gradient(
              45deg,
              rgba(77, 184, 184, 0.8) 0px,
              rgba(77, 184, 184, 0.8) 1px,
              transparent 1px,
              transparent 80px
            )
          `,
        }}
      />

      {/* Primary animated orb — top left */}
      <motion.div
        className="absolute -top-1/4 left-1/4 rounded-full opacity-25 blur-[130px]"
        style={{
          width: 700,
          height: 700,
          background: "radial-gradient(circle, #4db8b8 0%, #1a5c5c 50%, transparent 70%)",
        }}
        animate={{
          x: [0, 70, -40, 0],
          y: [0, -50, 25, 0],
          scale: [1, 1.12, 0.93, 1],
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Secondary orb — bottom right */}
      <motion.div
        className="absolute -bottom-1/4 right-1/4 rounded-full opacity-20 blur-[110px]"
        style={{
          width: 600,
          height: 600,
          background: "radial-gradient(circle, #7de0e0 0%, #4db8b8 40%, transparent 70%)",
        }}
        animate={{
          x: [0, -60, 45, 0],
          y: [0, 35, -25, 0],
          scale: [1, 0.88, 1.18, 1],
        }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Center pulse orb */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full opacity-15 blur-[90px]"
        style={{
          width: 500,
          height: 500,
          background: "radial-gradient(circle, #194346 0%, #4db8b8 45%, transparent 70%)",
        }}
        animate={{
          scale: [1, 1.25, 1],
          opacity: [0.12, 0.22, 0.12],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Top right accent */}
      <motion.div
        className="absolute -top-20 right-0 rounded-full opacity-15 blur-[100px]"
        style={{
          width: 400,
          height: 400,
          background: "radial-gradient(circle, #a8f0f0 0%, transparent 70%)",
        }}
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.1, 0.18, 0.1],
        }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Static halos */}
      {halos.map((halo, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full blur-[70px]"
          style={{
            top: halo.top,
            left: halo.left,
            width: halo.size,
            height: halo.size,
            background: `radial-gradient(circle, ${halo.color} 0%, transparent 70%)`,
          }}
          animate={{
            opacity: [0.5, 0.85, 0.5],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 6 + i * 1.2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.7,
          }}
        />
      ))}

      {/* Rising ember particles */}
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute bottom-0 rounded-full"
          style={{
            left: `${p.x}%`,
            width: p.size,
            height: p.size,
            background: `radial-gradient(circle, rgba(125, 224, 224, ${p.opacity}) 0%, rgba(77, 184, 184, 0) 70%)`,
            boxShadow: `0 0 ${p.size * 4}px rgba(125, 224, 224, ${p.opacity * 0.4})`,
          }}
          animate={{
            y: [0, -1000],
            x: [0, p.drift],
            opacity: [0, p.opacity, p.opacity * 0.6, 0],
            scale: [0.4, 1, 0.2],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
            ease: "easeOut",
          }}
        />
      ))}

      {/* Bottom glow */}
      <div
        className="absolute bottom-0 left-0 right-0 h-64"
        style={{
          background:
            "linear-gradient(to top, rgba(77, 184, 184, 0.14) 0%, rgba(125, 224, 224, 0.06) 40%, transparent 100%)",
        }}
      />

      {/* Scan line */}
      <div className="scan-line" />

      {/* Vignette */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 100% 100% at 50% 50%, transparent 40%, rgba(10, 31, 34, 0.6) 100%)",
        }}
      />
    </div>
  );
}
