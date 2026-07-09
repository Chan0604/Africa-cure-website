import { FALLBACK_LANDING_DATA } from "@/lib/fallback-data";

export async function getLandingPageData() {
  // On retourne directement les données locales, plus besoin de WordPress
  return FALLBACK_LANDING_DATA;
}
import {
  FALLBACK_LANDING_DATA,
  parseServiceIcon,
} from "@/lib/fallback-data";
import { GET_LANDING_PAGE_QUERY } from "@/lib/queries/landing";
import type {
  LandingPageData,
  WPLandingPageResponse,
} from "@/lib/types/landing";

function mapWordPressToLandingData(
  wp: WPLandingPageResponse,
): LandingPageData | null {
  const acf = wp.page?.landingPage;
  if (!acf) return null;

  const wpServices =
    wp.services?.nodes
      ?.filter((node) => node.title)
      .map((node) => ({
        icon: parseServiceIcon(node.serviceDetails?.icon),
        title: node.title!,
        description: node.serviceDetails?.description ?? "",
      })) ?? [];

  const floatingCards =
    acf.floatingCards
      ?.filter((card) => card.title)
      .map((card) => ({
        icon: parseServiceIcon(card.icon),
        title: card.title!,
        description: card.description ?? "",
      })) ?? [];

  const keyStats =
    acf.keyStats
      ?.filter((stat) => stat.label && stat.value != null)
      .map((stat) => ({
        value: stat.value!,
        suffix: stat.suffix ?? "",
        label: stat.label!,
      })) ?? [];

  const fallback = FALLBACK_LANDING_DATA;

  return {
    source: "wordpress",
    hero: {
      badge: acf.heroBadge ?? fallback.hero.badge,
      titleGradient: acf.heroTitleGradient ?? fallback.hero.titleGradient,
      titleMain: acf.heroTitleMain ?? fallback.hero.titleMain,
      description: acf.heroDescription ?? fallback.hero.description,
      primaryCta: acf.heroPrimaryCta ?? fallback.hero.primaryCta,
      secondaryCta: acf.heroSecondaryCta ?? fallback.hero.secondaryCta,
      floatingCards:
        floatingCards.length > 0 ? floatingCards : fallback.hero.floatingCards,
    },
    stats: {
      eyebrow: acf.statsEyebrow ?? fallback.stats.eyebrow,
      title: acf.statsTitle ?? fallback.stats.title,
      titleHighlight:
        acf.statsTitleHighlight ?? fallback.stats.titleHighlight,
      items: keyStats.length > 0 ? keyStats : fallback.stats.items,
    },
    services: {
      eyebrow: acf.servicesEyebrow ?? fallback.services.eyebrow,
      title: acf.servicesTitle ?? fallback.services.title,
      titleHighlight:
        acf.servicesTitleHighlight ?? fallback.services.titleHighlight,
      description:
        acf.servicesDescription ?? fallback.services.description,
      items:
        wpServices.length > 0 ? wpServices : fallback.services.items,
    },
    footerCta: {
      title: acf.footerCtaTitle ?? fallback.footerCta.title,
      titleHighlight:
        acf.footerCtaTitleHighlight ?? fallback.footerCta.titleHighlight,
      description:
        acf.footerCtaDescription ?? fallback.footerCta.description,
      buttonLabel: acf.footerCtaButton ?? fallback.footerCta.buttonLabel,
    },
  };
}

/**
 * Fetches landing page content from WordPress via WPGraphQL.
 * Falls back gracefully to static mock data if the API is unavailable.
 */
export async function getLandingPageData(): Promise<LandingPageData> {
  if (!isGraphQLConfigured()) {
    if (process.env.NODE_ENV === "development") {
      console.warn(
        "[Africa Cure] NEXT_PUBLIC_WORDPRESS_GRAPHQL_URL not set — using fallback data.",
      );
    }
    return FALLBACK_LANDING_DATA;
  }

  try {
    const data = await fetchGraphQL<WPLandingPageResponse>(
      GET_LANDING_PAGE_QUERY,
      undefined,
      { revalidate: 60, tags: ["landing-page", "services"] },
    );

    const mapped = mapWordPressToLandingData(data);
    if (!mapped) {
      console.warn(
        "[Africa Cure] WordPress page or ACF fields not found — using fallback data.",
      );
      return FALLBACK_LANDING_DATA;
    }

    return mapped;
  } catch (error) {
    const message =
      error instanceof GraphQLClientError
        ? error.message
        : "Unknown GraphQL error";

    console.error(`[Africa Cure] GraphQL fetch failed: ${message}`);
    return FALLBACK_LANDING_DATA;
  }
}
