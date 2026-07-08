/**
 * Landing page query for WPGraphQL + WPGraphQL for ACF.
 *
 * Expected WordPress setup:
 * - Page slug: "accueil" (or change the URI below)
 * - ACF Field Group "Landing Page" → GraphQL Field Name: `landingPage`
 * - CPT "service" → GraphQL plural: `services`, Field Group GraphQL name: `serviceDetails`
 *
 * ACF fields (Page → landingPage):
 *   heroBadge, heroTitleGradient, heroTitleMain, heroDescription,
 *   heroPrimaryCta, heroSecondaryCta,
 *   floatingCards (Repeater: icon, title, description),
 *   statsEyebrow, statsTitle, keyStats (Repeater: value, suffix, label),
 *   servicesEyebrow, servicesTitle, servicesDescription,
 *   footerCtaTitle, footerCtaDescription, footerCtaButton
 *
 * ACF fields (Service CPT → serviceDetails):
 *   description, icon (select: Compass | FileText | HeartPulse | Stethoscope)
 */
export const GET_LANDING_PAGE_QUERY = `
  query GetLandingPage {
    page(id: "accueil", idType: URI) {
      title
      landingPage {
        heroBadge
        heroTitleGradient
        heroTitleMain
        heroDescription
        heroPrimaryCta
        heroSecondaryCta
        floatingCards {
          icon
          title
          description
        }
        statsEyebrow
        statsTitle
        statsTitleHighlight
        keyStats {
          value
          suffix
          label
        }
        servicesEyebrow
        servicesTitle
        servicesTitleHighlight
        servicesDescription
        footerCtaTitle
        footerCtaTitleHighlight
        footerCtaDescription
        footerCtaButton
      }
    }
    services(first: 10, where: { orderby: { field: MENU_ORDER, order: ASC } }) {
      nodes {
        title
        serviceDetails {
          description
          icon
        }
      }
    }
  }
`;
