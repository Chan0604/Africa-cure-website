import type { LandingPageData } from "@/lib/types/landing";

export const FALLBACK_LANDING_DATA: LandingPageData = {
  source: "fallback",
  hero: {
    badge: "Plateforme Médicale & Technologique Premium",
    titleGradient: "Santé & Innovation",
    titleMain: "au Service de l'Afrique",
    description:
      "AfricaCure réunit deux pôles d'excellence : une conciergerie médicale haut de gamme à Ennasr et un cabinet de consulting technologique & digital pour les entreprises africaines et internationales.",
    primaryCta: "Prendre rendez-vous",
    secondaryCta: "Découvrir nos services",
    floatingCards: [
      {
        icon: "HeartPulse",
        title: "Conciergerie Médicale",
        description:
          "Hébergement courte durée, accompagnement clinique et coordination médicale à Ennasr, Tunis.",
      },
      {
        icon: "Compass",
        title: "Consulting Tech & Digital",
        description:
          "Création web & app, contrats freelance B2B et transformation digitale pour les entreprises africaines.",
      },
    ],
  },
  stats: {
    eyebrow: "Nos chiffres clés",
    title: "Une présence",
    titleHighlight: "continentale",
    items: [
      { value: 5000, suffix: "+", label: "Patients accompagnés" },
      { value: 12, suffix: "", label: "Pays couverts" },
      { value: 98, suffix: "%", label: "Taux de satisfaction" },
      { value: 150, suffix: "+", label: "Projets tech livrés" },
    ],
  },
  services: {
    eyebrow: "Nos expertises",
    title: "Deux pôles,",
    titleHighlight: "une vision",
    description:
      "De la prise en charge médicale complète à la transformation digitale de votre entreprise, AfricaCure vous accompagne à chaque étape.",
    items: [
      {
        icon: "HeartPulse",
        title: "Hébergement Médical",
        description:
          "Appartements et suites médicalisées à Ennasr pour patients en déplacement thérapeutique. Confort 5 étoiles, proximité clinique.",
      },
      {
        icon: "Stethoscope",
        title: "Accompagnement Clinique",
        description:
          "Coordination avec les meilleurs spécialistes tunisiens. Prise de rendez-vous, traduction médicale et suivi post-opératoire.",
      },
      {
        icon: "Compass",
        title: "Logistique & Conciergerie",
        description:
          "Transferts aéroport, assistance administrative, interprétariat et services personnalisés pour une expérience sans stress.",
      },
      {
        icon: "FileText",
        title: "Création Web & App",
        description:
          "Sites Next.js ultra-performants, applications mobiles React Native et solutions SaaS sur mesure pour les entreprises africaines.",
      },
      {
        icon: "Compass",
        title: "Consulting B2B",
        description:
          "Contrats freelance et missions de conseil en transformation digitale, architecture cloud et stratégie technologique.",
      },
      {
        icon: "FileText",
        title: "Intégration WordPress Headless",
        description:
          "Backends WordPress avec WPGraphQL, ACF et Cloudflare pour des performances extrêmes et une gestion de contenu intuitive.",
      },
    ],
  },
  footerCta: {
    title: "Prêt à commencer",
    titleHighlight: "votre parcours ?",
    description:
      "Que vous ayez besoin d'un accompagnement médical ou d'une solution technologique, notre équipe est disponible 24h/7j pour vous répondre.",
    buttonLabel: "Nous contacter",
  },
};
