import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AfricaCure — Conciergerie Médicale & Consulting Tech",
  description:
    "AfricaCure : conciergerie médicale haut de gamme à Ennasr (Tunis) et consulting technologique & digital pour les entreprises africaines. Hébergement médical, accompagnement clinique, création web & app.",
  keywords: [
    "conciergerie médicale Tunisie",
    "tourisme médical Tunis",
    "hébergement médical Ennasr",
    "consulting technologique Afrique",
    "création site web Tunisie",
    "AfricaCure",
  ],
  authors: [{ name: "AfricaCure" }],
  creator: "AfricaCure",
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://africacure.com",
    siteName: "AfricaCure",
    title: "AfricaCure — Conciergerie Médicale & Consulting Tech",
    description:
      "Conciergerie médicale haut de gamme à Ennasr et consulting technologique pour les entreprises africaines.",
  },
  twitter: {
    card: "summary_large_image",
    title: "AfricaCure — Conciergerie Médicale & Consulting Tech",
    description:
      "Conciergerie médicale haut de gamme à Ennasr et consulting technologique pour les entreprises africaines.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport: Viewport = {
  themeColor: "#0a1f22",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body className="bg-ac-deep-dark text-white antialiased">{children}</body>
    </html>
  );
}
