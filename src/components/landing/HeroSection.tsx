"use client";

import { motion } from "framer-motion";
import { ArrowRight, HeartPulse, Code2, Menu, X } from "lucide-react";
import { useState } from "react";
import type { LandingPageData } from "@/lib/types/landing";
import { getServiceIcon } from "@/lib/icons";
import FloatingGlassCard from "./FloatingGlassCard";

type HeroSectionProps = LandingPageData["hero"];

export default function HeroSection({
  badge,
  titleGradient,
  titleMain,
  description,
  primaryCta,
  secondaryCta,
  floatingCards,
}: HeroSectionProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { label: "Conciergerie", href: "#services" },
    { label: "Consulting Tech", href: "#tech" },
    { label: "À propos", href: "#about" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center px-4 pt-24 pb-16 sm:px-6">
      {/* ── Navigation ── */}
      <motion.nav
        className="fixed top-0 right-0 left-0 z-50"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div
          className="mx-auto flex items-center justify-between px-4 py-4 sm:px-8"
          style={{
            background: "rgba(10, 31, 34, 0.85)",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
            borderBottom: "1px solid rgba(77, 184, 184, 0.1)",
          }}
        >
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-ac-cyan/20 to-ac-teal/30 ring-1 ring-ac-cyan/30">
              <HeartPulse className="h-5 w-5 text-ac-cyan-light" />
              <div className="absolute -top-0.5 -right-0.5 h-2 w-2 rounded-full bg-ac-cyan-light shadow-[0_0_6px_rgba(125,224,224,0.8)]" />
            </div>
            <div>
              <span className="text-sm font-bold tracking-wide text-white">
                Africa<span className="text-ac-cyan-light">Cure</span>
              </span>
              <p className="text-[9px] tracking-[0.25em] text-ac-cyan/60 uppercase">
                Consulting & Services
              </p>
            </div>
          </div>

          {/* Desktop nav links */}
          <div className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm text-white/60 transition-colors duration-200 hover:text-ac-cyan-light"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA + Mobile menu */}
          <div className="flex items-center gap-3">
            <motion.a
              href="#contact"
              className="hidden rounded-full px-5 py-2 text-sm font-semibold text-ac-deep-dark sm:block"
              style={{
                background: "linear-gradient(135deg, #4db8b8, #7de0e0)",
                boxShadow: "0 4px 20px rgba(77, 184, 184, 0.3)",
              }}
              whileHover={{ scale: 1.04, boxShadow: "0 6px 30px rgba(77, 184, 184, 0.5)" }}
              whileTap={{ scale: 0.97 }}
            >
              Espace Patient
            </motion.a>
            <button
              className="flex h-9 w-9 items-center justify-center rounded-lg text-white/70 md:hidden"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="border-t border-ac-cyan/10 px-4 py-4 md:hidden"
            style={{
              background: "rgba(10, 31, 34, 0.97)",
              backdropFilter: "blur(20px)",
            }}
          >
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="block py-3 text-sm text-white/70 hover:text-ac-cyan-light"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="mt-3 block rounded-full py-3 text-center text-sm font-semibold text-ac-deep-dark"
              style={{ background: "linear-gradient(135deg, #4db8b8, #7de0e0)" }}
            >
              Espace Patient
            </a>
          </motion.div>
        )}
      </motion.nav>

      {/* ── Hero Content ── */}
      <div className="relative z-10 mx-auto w-full max-w-5xl text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          className="mb-8 inline-flex items-center gap-2.5 rounded-full px-5 py-2 text-xs font-semibold tracking-[0.25em] uppercase"
          style={{
            background: "rgba(77, 184, 184, 0.08)",
            border: "1px solid rgba(77, 184, 184, 0.25)",
            color: "#7de0e0",
          }}
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-ac-cyan-light opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-ac-cyan-light" />
          </span>
          {badge}
        </motion.div>

        {/* Headline */}
        <motion.h1
          className="mb-6 text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl lg:text-7xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
        >
          <span className="text-gradient">{titleGradient}</span>
          <br />
          <span className="text-white/90">{titleMain}</span>
        </motion.h1>

        {/* Neon divider */}
        <motion.div
          className="neon-line mx-auto mb-8 w-24"
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        />

        {/* Description */}
        <motion.p
          className="mx-auto mb-10 max-w-2xl text-base leading-relaxed text-white/55 sm:text-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35 }}
        >
          {description}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col items-center justify-center gap-4 sm:flex-row"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <motion.a
            href="#contact"
            className="group flex items-center gap-2.5 rounded-full px-8 py-4 text-sm font-bold text-ac-deep-dark shadow-lg"
            style={{
              background: "linear-gradient(135deg, #4db8b8 0%, #7de0e0 50%, #4db8b8 100%)",
              backgroundSize: "200% auto",
              boxShadow: "0 6px 30px rgba(77, 184, 184, 0.35)",
            }}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 10px 50px rgba(77, 184, 184, 0.55)",
            }}
            whileTap={{ scale: 0.97 }}
          >
            {primaryCta}
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5" />
          </motion.a>

          <motion.a
            href="#services"
            className="glass-card flex items-center gap-2 rounded-full px-8 py-4 text-sm font-medium text-white/75 transition-colors hover:text-white"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            {secondaryCta}
          </motion.a>
        </motion.div>

        {/* Trust indicators */}
        <motion.div
          className="mt-10 flex flex-wrap items-center justify-center gap-6 text-xs text-white/35"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          {["ISO 9001 Certifié", "12 Pays couverts", "5 000+ Patients", "98% Satisfaction"].map((item) => (
            <span key={item} className="flex items-center gap-1.5">
              <span className="h-1 w-1 rounded-full bg-ac-cyan/50" />
              {item}
            </span>
          ))}
        </motion.div>
      </div>

      {/* ── Floating Cards ── */}
      <div className="relative z-10 mx-auto mt-16 grid w-full max-w-4xl grid-cols-1 gap-5 sm:grid-cols-2 sm:mt-20">
        {floatingCards.map((card: { title: string; icon: string; description: string }, index: number) => (
          <FloatingGlassCard
            key={`${card.title}-${index}`}
            icon={getServiceIcon(card.icon)}
            title={card.title}
            description={card.description}
            delay={0.9 + index * 0.2}
            className={index === 0 ? "sm:translate-y-5" : undefined}
          />
        ))}
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
      >
        <motion.div
          className="flex h-10 w-6 items-start justify-center rounded-full border border-ac-cyan/25 p-1.5"
          animate={{ y: [0, 4, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="h-2 w-1 rounded-full bg-ac-cyan/60" />
        </motion.div>
      </motion.div>
    </section>
  );
}
