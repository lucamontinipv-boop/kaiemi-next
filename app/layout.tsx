import type { Metadata } from "next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kaiemi Coaching — Costruisci il tuo personal brand",
  description:
    "Percorso 1:1 per imparare a usare Instagram con strategia, creare una community reale e costruire le basi per monetizzare online.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="it">
      <body>
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}
