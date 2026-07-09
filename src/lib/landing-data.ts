import { FALLBACK_LANDING_DATA } from "@/lib/fallback-data";

/**
 * Fonction pour récupérer les données de la page d'accueil.
 * Retourne les données statiques locales (ex-WordPress).
 */
export async function getLandingPageData() {
  return FALLBACK_LANDING_DATA;
}