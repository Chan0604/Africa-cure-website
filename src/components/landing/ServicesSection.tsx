"use client";

import { motion } from "framer-motion";
import { HeartPulse, Code2 } from "lucide-react";
import type { LandingPageData } from "@/lib/types/landing";
import ServiceCard from "./ServiceCard";

type ServicesSectionProps = LandingPageData["services"];

export default function ServicesSection({
  eyebrow,
  title,
  titleHighlight,
  description,
  items,
}: ServicesSectionProps) {
  // Split services into two poles
  const medicalServices = items.slice(0, Math.ceil(items.length / 2));
  const techServices = items.slice(Math.ceil(items.length / 2));

  return (
    <section id="services" className="relative py-24 sm:py-32">
      <div className="container-ac">
        {/* Section header */}
        <div className="mb-20 text-center">
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
            className="mx-auto max-w-xl text-sm leading-relaxed text-white/45 sm:text-base"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            {description}
          </motion.p>
        </div>

        {/* ── Pôle 1 : Conciergerie Médicale & Logistique ── */}
        <div id="medical" className="mb-20">
          <motion.div
            className="mb-10 flex items-center gap-4"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-ac-cyan/20 to-ac-teal/30 ring-1 ring-ac-cyan/30">
              <HeartPulse className="h-6 w-6 text-ac-cyan-light" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white">Conciergerie Médicale & Logistique</h3>
              <p className="text-xs tracking-wider text-ac-cyan/60 uppercase">
                Hébergement · Accompagnement clinique · Ennasr
              </p>
            </div>
            <div className="ml-auto hidden h-px flex-1 bg-gradient-to-r from-ac-cyan/20 to-transparent sm:block" />
          </motion.div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {medicalServices.map((service: any, index: number) => (
              <ServiceCard
                key={`medical-${index}`}
                icon={service.icon}
                title={service.title}
                description={service.description}
                index={index}
              />
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="neon-line mb-20 opacity-30" />

        {/* ── Pôle 2 : Consulting Technologique & Digital ── */}
        <div id="tech">
          <motion.div
            className="mb-10 flex items-center gap-4"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-ac-cyan/20 to-ac-teal/30 ring-1 ring-ac-cyan/30">
              <Code2 className="h-6 w-6 text-ac-cyan-light" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white">Consulting Technologique & Digital</h3>
              <p className="text-xs tracking-wider text-ac-cyan/60 uppercase">
                Web · App · Contrats B2B Freelance
              </p>
            </div>
            <div className="ml-auto hidden h-px flex-1 bg-gradient-to-r from-ac-cyan/20 to-transparent sm:block" />
          </motion.div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {techServices.map((service: any, index: number) => (
              <ServiceCard
                key={`tech-${index}`}
                icon={service.icon}
                title={service.title}
                description={service.description}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}