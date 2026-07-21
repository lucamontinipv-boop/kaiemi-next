import type { Metadata, Viewport } from "next";
import Script from "next/script";
import CookieConsent from "./CookieConsent";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://kaiemi.it"),

  title: "Kaiemi Coaching — Costruisci il tuo personal brand",
  description:
    "Percorso 1:1 per imparare a usare Instagram con strategia, creare una community reale e costruire le basi per monetizzare online.",

  applicationName: "Kaiemi Coaching",

  alternates: {
    canonical: "/",
  },

  icons: {
    icon: [
      {
        url: "/favicon-32x32.png?v=2",
        sizes: "32x32",
        type: "image/png",
      },
      {
        url: "/favicon-16x16.png?v=2",
        sizes: "16x16",
        type: "image/png",
      },
    ],
    apple: [
      {
        url: "/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  },

  manifest: "/site.webmanifest",

  openGraph: {
    type: "website",
    locale: "it_IT",
    url: "https://kaiemi.it",
    siteName: "Kaiemi Coaching",
    title: "Kaiemi Coaching — Costruisci il tuo personal brand",
    description:
      "Un percorso 1:1 per creare una strategia, una community reale e un personal brand sostenibile su Instagram.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Kaiemi Coaching — Costruisci il tuo personal brand",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Kaiemi Coaching — Costruisci il tuo personal brand",
    description:
      "Un percorso 1:1 per creare una strategia, una community reale e un personal brand sostenibile su Instagram.",
    images: ["/og-image.png"],
  },

  other: {
    "trustpilot-one-time-domain-verification-id":
      "524a42d0-9273-44fc-a25f-459e890a4786",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#222222",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="it">
      <body>{children}</body>

      {/* Imposta il consenso negato prima del caricamento dei tag. */}
      <Script id="google-consent-default" strategy="beforeInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('consent', 'default', {
            ad_storage: 'denied',
            ad_user_data: 'denied',
            ad_personalization: 'denied',
            analytics_storage: 'denied',
            wait_for_update: 500
          });
        `}
      </Script>

      <CookieConsent />
    </html>
  );
}
