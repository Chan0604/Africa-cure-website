"use client";

import type { LandingPageData } from "@/lib/types/landing";
import ColdFireBackground from "./ColdFireBackground";
import HeroSection from "./HeroSection";
import StatsSection from "./StatsSection";
import ServicesSection from "./ServicesSection";
import FooterCtaSection from "./FooterCtaSection";

interface LandingPageProps {
  data: LandingPageData;
}

export default function LandingPage({ data }: LandingPageProps) {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      {/* Animated background — always behind everything */}
      <ColdFireBackground />

      {/* Page content */}
      <div className="relative z-10">
        <HeroSection {...data.hero} />
        <StatsSection {...data.stats} />
        <ServicesSection {...data.services} />
        <FooterCtaSection {...data.footerCta} />
      </div>
    </main>
  );
}
