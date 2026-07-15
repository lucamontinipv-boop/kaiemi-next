"use client";

import { useEffect, useState } from "react";
import { GoogleAnalytics } from "@next/third-parties/google";
import Script from "next/script";
import styles from "./CookieConsent.module.css";

type ConsentChoice = "accepted" | "rejected" | null;

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag?: (...args: unknown[]) => void;
    clarity?: (...args: unknown[]) => void;
  }
}

const STORAGE_KEY = "kaiemi_cookie_consent";
const GA_ID = "G-Y9XVME9PRS";
const CLARITY_ID = "xmpprlihxo";

function updateGoogleConsent(value: "granted" | "denied") {
  window.dataLayer = window.dataLayer || [];
  window.gtag =
    window.gtag ||
    function gtag(...args: unknown[]) {
      window.dataLayer.push(args);
    };

  window.gtag("consent", "update", {
    ad_storage: value,
    ad_user_data: value,
    ad_personalization: value,
    analytics_storage: value,
  });
}

function clearAnalyticsCookies() {
  const cookieNames = document.cookie
    .split(";")
    .map((cookie) => cookie.trim().split("=")[0])
    .filter((name) => name === "_ga" || name.startsWith("_ga_") || name.startsWith("_cl"));

  for (const name of cookieNames) {
    document.cookie = `${name}=; Max-Age=0; path=/; SameSite=Lax`;
    document.cookie = `${name}=; Max-Age=0; path=/; domain=.kaiemi.it; SameSite=Lax`;
  }
}

export default function CookieConsent() {
  const [choice, setChoice] = useState<ConsentChoice>(null);
  const [showPanel, setShowPanel] = useState(false);

  useEffect(() => {
    const savedChoice = window.localStorage.getItem(STORAGE_KEY);

    if (savedChoice === "accepted") {
      updateGoogleConsent("granted");
      setChoice("accepted");
      return;
    }

    if (savedChoice === "rejected") {
      updateGoogleConsent("denied");
      setChoice("rejected");
      return;
    }

    setShowPanel(true);
  }, []);

  function acceptCookies() {
    window.localStorage.setItem(STORAGE_KEY, "accepted");
    updateGoogleConsent("granted");
    setChoice("accepted");
    setShowPanel(false);
  }

  function rejectCookies() {
    window.localStorage.setItem(STORAGE_KEY, "rejected");
    updateGoogleConsent("denied");

    if (typeof window.clarity === "function") {
      window.clarity("consentv2", {
        ad_Storage: "denied",
        analytics_Storage: "denied",
      });
      window.clarity("consent", false);
    }

    clearAnalyticsCookies();
    setChoice("rejected");
    setShowPanel(false);
  }

  function reopenPreferences() {
    setShowPanel(true);
  }

  return (
    <>
      {choice === "accepted" && (
        <>
          <GoogleAnalytics gaId={GA_ID} />

          <Script id="microsoft-clarity" strategy="afterInteractive">
            {`
              (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              })(window, document, "clarity", "script", "${CLARITY_ID}");

              window.clarity("consentv2", {
                ad_Storage: "granted",
                analytics_Storage: "granted"
              });
            `}
          </Script>
        </>
      )}

      {showPanel && (
        <div className={styles.backdrop} role="presentation">
          <section
            className={styles.banner}
            role="dialog"
            aria-modal="true"
            aria-labelledby="cookie-title"
            aria-describedby="cookie-description"
          >
            <div className={styles.copy}>
              <p className={styles.eyebrow}>Preferenze privacy</p>
              <h2 id="cookie-title">Cookie e strumenti di analisi</h2>
              <p id="cookie-description">
                Usiamo Google Analytics e Microsoft Clarity per capire come viene utilizzato
                il sito e migliorare l’esperienza. Questi strumenti vengono attivati solo
                dopo il tuo consenso. Puoi rifiutare senza limitazioni nell’uso del sito.
              </p>

              <details className={styles.details}>
                <summary>Mostra i dettagli</summary>
                <p>
                  <strong>Cookie necessari:</strong> servono al funzionamento del sito e
                  alla memorizzazione della tua scelta.
                </p>
                <p>
                  <strong>Analytics:</strong> Google Analytics misura visite e interazioni.
                  Microsoft Clarity produce heatmap e registrazioni delle sessioni.
                </p>
              </details>
            </div>

            <div className={styles.actions}>
              <button className={styles.secondaryButton} type="button" onClick={rejectCookies}>
                Rifiuta
              </button>
              <button className={styles.primaryButton} type="button" onClick={acceptCookies}>
                Accetta
              </button>
            </div>
          </section>
        </div>
      )}

      {!showPanel && choice !== null && (
        <button
          className={styles.preferencesButton}
          type="button"
          onClick={reopenPreferences}
          aria-label="Modifica le preferenze cookie"
        >
          Preferenze cookie
        </button>
      )}
    </>
  );
}
