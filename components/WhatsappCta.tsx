"use client";

import { useMemo, useState } from "react";

const WHATSAPP_NUMBER = "393664677155";
const BASE_MESSAGE = "Ciao Noemi, ho visto Kaiemi Coaching e vorrei capire se il percorso può aiutarmi a costruire il mio personal brand su Instagram.";

export default function WhatsappCta() {
  const [referralCode, setReferralCode] = useState("");

  const whatsappLink = useMemo(() => {
    let message = BASE_MESSAGE;
    const code = referralCode.trim();
    if (code.length > 0) {
      message += ` Codice referral: ${code}`;
    }
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  }, [referralCode]);

  return (
    <section className="finale" id="finale">
      <div className="container finale-wrap">
        <div className="finale-img reveal">
          <img src="/images/community-people.webp" alt="Community Kaiemi Coaching" loading="lazy" width="120" height="120" />
        </div>
        <div className="section-head center reveal">
          <span className="eyebrow">Ultimo passo</span>
          <h2>Iniziamo a costruire<br />il tuo <span className="accent">personal brand</span>.</h2>
          <p>Scrivimi su WhatsApp: parliamo del tuo profilo e capiamo insieme se il percorso è giusto per te.</p>
        </div>

        <div className="referral-box reveal">
          <div className="r-title">🎁 HAI UN CODICE REFERRAL?</div>
          <input
            type="text"
            className="referral-input"
            placeholder="Es. LUCA2026 (opzionale)"
            autoComplete="off"
            value={referralCode}
            onChange={(event) => setReferralCode(event.target.value)}
          />
          <p className="referral-note">Se qualcuno ti ha consigliato Kaiemi, inserisci qui il suo codice — verrà incluso automaticamente nel messaggio.</p>
        </div>

        <a href={whatsappLink} className="btn btn-whatsapp final-cta-btn reveal" target="_blank" rel="noopener noreferrer">
          💬 Scrivimi su WhatsApp
        </a>
        <p className="final-sub reveal">Rispondo personalmente · Nessun impegno</p>
      </div>
    </section>
  );
}
