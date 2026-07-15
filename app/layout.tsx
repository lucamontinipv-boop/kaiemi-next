import type { Metadata, Viewport } from "next";
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
    </html>
  );
}