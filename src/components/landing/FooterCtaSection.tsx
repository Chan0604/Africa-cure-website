"use client";

import { motion } from "framer-motion";
import { ArrowRight, Mail, Phone, MapPin, HeartPulse } from "lucide-react";
import type { LandingPageData } from "@/lib/types/landing";

type FooterCtaSectionProps = LandingPageData["footerCta"];

export default function FooterCtaSection({
  title,
  titleHighlight,
  description,
  buttonLabel,
}: FooterCtaSectionProps) {
  return (
    <>
      {/* ── CTA Section ── */}
      <section id="contact" className="relative py-24 sm:py-32">
        <div className="container-ac">
          <motion.div
            className="glass-card-premium relative overflow-hidden rounded-3xl p-10 text-center sm:p-16"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* Background glow */}
            <div
              className="absolute inset-0 opacity-30"
              style={{
                background:
                  "radial-gradient(ellipse 80% 60% at 50% 100%, rgba(77, 184, 184, 0.25) 0%, transparent 60%)",
              }}
            />

            {/* Top neon line */}
            <div className="neon-line absolute top-0 left-0 right-0" />

            {/* Content */}
            <div className="relative z-10">
              <motion.div
                className="mb-6 inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold tracking-[0.2em] uppercase"
                style={{
                  background: "rgba(77, 184, 184, 0.1)",
                  border: "1px solid rgba(77, 184, 184, 0.25)",
                  color: "#7de0e0",
                }}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <span className="h-1.5 w-1.5 rounded-full bg-ac-cyan-light" />
                Disponible 24h/7j
              </motion.div>

              <motion.h2
                className="mb-6 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.1 }}
              >
                <span className="text-white">{title} </span>
                <span className="text-gradient">{titleHighlight}</span>
              </motion.h2>

              <motion.p
                className="mx-auto mb-10 max-w-lg text-sm leading-relaxed text-white/50 sm:text-base"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.2 }}
              >
                {description}
              </motion.p>

              <motion.div
                className="flex flex-col items-center justify-center gap-4 sm:flex-row"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.3 }}
              >
                <motion.a
                  href="mailto:contact@africacure.com"
                  className="group flex items-center gap-2.5 rounded-full px-8 py-4 text-sm font-bold text-ac-deep-dark"
                  style={{
                    background: "linear-gradient(135deg, #4db8b8 0%, #7de0e0 50%, #4db8b8 100%)",
                    backgroundSize: "200% auto",
                    boxShadow: "0 6px 30px rgba(77, 184, 184, 0.4)",
                  }}
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 10px 50px rgba(77, 184, 184, 0.6)",
                  }}
                  whileTap={{ scale: 0.97 }}
                >
                  {buttonLabel}
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5" />
                </motion.a>

                <motion.a
                  href="tel:+21600000000"
                  className="glass-card flex items-center gap-2 rounded-full px-8 py-4 text-sm font-medium text-white/70 transition-colors hover:text-white"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <Phone className="h-4 w-4 text-ac-cyan/70" />
                  Appel direct
                </motion.a>
              </motion.div>

              {/* Contact info */}
              <motion.div
                className="mt-10 flex flex-wrap items-center justify-center gap-6 text-xs text-white/35"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                <span className="flex items-center gap-1.5">
                  <Mail className="h-3.5 w-3.5 text-ac-cyan/50" />
                  contact@africacure.com
                </span>
                <span className="flex items-center gap-1.5">
                  <MapPin className="h-3.5 w-3.5 text-ac-cyan/50" />
                  Ennasr, Tunis — Tunisie
                </span>
                <span className="flex items-center gap-1.5">
                  <Phone className="h-3.5 w-3.5 text-ac-cyan/50" />
                  +216 XX XXX XXX
                </span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="relative border-t border-ac-cyan/10 py-12">
        <div className="container-ac">
          <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-ac-cyan/20 to-ac-teal/30 ring-1 ring-ac-cyan/25">
                <HeartPulse className="h-4 w-4 text-ac-cyan-light" />
              </div>
              <span className="text-sm font-bold text-white/80">
                Africa<span className="text-ac-cyan-light">Cure</span>
              </span>
            </div>

            {/* Links */}
            <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-white/35">
              {["Mentions légales", "Politique de confidentialité", "CGU", "Sitemap"].map((link) => (
                <a
                  key={link}
                  href="#"
                  className="transition-colors hover:text-ac-cyan-light"
                >
                  {link}
                </a>
              ))}
            </div>

            {/* Copyright */}
            <p className="text-xs text-white/25">
              © {new Date().getFullYear()} AfricaCure. Tous droits réservés.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
