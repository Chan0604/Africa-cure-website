import LandingPage from "@/components/landing/LandingPage";
import { FALLBACK_LANDING_DATA } from "@/lib/fallback/landingData";
import type { LandingPageData } from "@/lib/types/landing";

async function getLandingData(): Promise<LandingPageData> {
  const wpUrl = process.env.NEXT_PUBLIC_WORDPRESS_GRAPHQL_URL;

  // Si l'URL de l'environnement n'est pas définie, on utilise le fallback de secours
  if (!wpUrl) {
    return FALLBACK_LANDING_DATA;
  }

  try {
    const res = await fetch(wpUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        query: `
          query GetLandingPage {
            page(id: "home", idType: URI) {
              title
              acfLanding {
                heroBadge
                heroTitleGradient
                heroTitleMain
                heroDescription
                heroPrimaryCta
                heroSecondaryCta
              }
            }
          }
        `,
      }),
      next: { revalidate: 60 }, // Revalidation du cache toutes les 60 secondes
    });

    if (!res.ok) throw new Error(`WP GraphQL error: ${res.status}`);

    const json = await res.json();
    if (json.errors || !json.data?.page) throw new Error("No data from WP");

    const wpPage = json.data.page;
    const acf = wpPage.acfLanding;

    // MEILLEURE PRATIQUE : On fusionne intelligemment les données de WordPress avec ta structure globale
    return {
      ...FALLBACK_LANDING_DATA,
      hero: {
        ...FALLBACK_LANDING_DATA.hero,
        badge: acf?.heroBadge || FALLBACK_LANDING_DATA.hero?.badge,
        titleMain: acf?.heroTitleMain || FALLBACK_LANDING_DATA.hero?.titleMain,
        titleGradient: acf?.heroTitleGradient || FALLBACK_LANDING_DATA.hero?.titleGradient,
        description: acf?.heroDescription || FALLBACK_LANDING_DATA.hero?.description,
      }
    };

  } catch (error) {
    // En cas de problème réseau ou de serveur, l'application ne plante pas et utilise le fallback
    console.warn("WP Fetch failed, using fallback data:", error);
    return FALLBACK_LANDING_DATA;
  }
}

export default async function HomePage() {
  const data = await getLandingData();
  return <LandingPage data={data} />;
}