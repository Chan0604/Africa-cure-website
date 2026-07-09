import type { LandingPageData } from "@/lib/types/landing";

export const FALLBACK_LANDING_DATA: LandingPageData = {
  source: "fallback",
  hero: {
    badge: "Conciergerie médicale premium",
    titleGradient: "Votre santé,",
    titleMain: "notre priorité",
    description:
      "Africa Cure vous accompagne avec excellence dans votre parcours de soins en Tunisie et en Afrique — coordination médicale, ingénierie de santé et conciergerie sur mesure.",
    primaryCta: "Commencer votre parcours",
    secondaryCta: "Découvrir nos services",
    floatingCards: [
      {
        icon: "Stethoscope",
        title: "Coordination Médicale",
        description:
          "Accès privilégié aux meilleurs praticiens et cliniques partenaires, avec un suivi personnalisé à chaque étape.",
      },
      {
        icon: "HeartPulse",
        title: "Accompagnement Premium",
        description:
          "Un concierge dédié gère l'intégralité de votre parcours — de l'arrivée au suivi post-opératoire.",
      },
    ],
  },
  stats: {
    eyebrow: "Excellence reconnue",
    title: "Des chiffres qui",
    titleHighlight: "parlent d'eux-mêmes",
    items: [
      { value: 150, suffix: "+", label: "Partenaires médicaux" },
      { value: 98, suffix: "%", label: "Satisfaction client" },
      { value: 12, suffix: "", label: "Pays couverts" },
      { value: 5000, suffix: "+", label: "Patients accompagnés" },
    ],
  },
  services: {
    eyebrow: "Services premium",
    title: "Un accompagnement",
    titleHighlight: "sur mesure",
    description:
      "De l'orientation médicale au suivi post-opératoire, chaque service est conçu pour votre confort et votre sérénité.",
    items: [
      {
        icon: "Compass",
        title: "Orientation Médicale",
        description:
          "Mise en relation avec les meilleurs spécialistes et établissements de santé en Tunisie et en Afrique.",
      },
      {
        icon: "FileText",
        title: "Gestion Administrative",
        description:
          "Prise en charge complète des démarches : visas, assurances, traductions et coordination logistique.",
      },
      {
        icon: "HeartPulse",
        title: "Suivi Personnalisé",
        description:
          "Accompagnement continu avant, pendant et après votre parcours de soins avec un concierge dédié.",
      },
    ],
  },
  footerCta: {
    title: "Prêt à commencer votre",
    titleHighlight: "parcours de soins",
    description:
      "Contactez notre équipe de conciergerie médicale pour une consultation personnalisée, sans engagement.",
    buttonLabel: "Prendre contact",
  },
};

const VALID_ICONS: string[] = [
  "Compass",
  "FileText",
  "HeartPulse",
  "Stethoscope",
];

export function parseServiceIcon(value: string | null | undefined): string {
  if (value && VALID_ICONS.includes(value)) {
    return value;
  }
  return "Compass";
}