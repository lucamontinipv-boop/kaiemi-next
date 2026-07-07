export default function OfferSection() {
  return (
    <section className="offerta" id="offerta">
      <div className="container">
        <div className="section-head center reveal">
          <span className="eyebrow">L&apos;offerta</span>
          <h2>Come funziona il <span className="accent">percorso</span></h2>
          <p>
            Kaiemi Coaching è un percorso 1:1 pensato per chi vuole costruire un progetto online partendo da Instagram, ma ha bisogno di una guida chiara, pratica e personalizzata.
          </p>
        </div>

        <div className="offerta-grid reveal">
          <div className="split-img">
            <img src="/images/content-planning.webp" alt="Pianificazione dei contenuti e della strategia" loading="lazy" width="500" height="500" />
          </div>

          <div className="offer-card">
            <div className="offer-top-single">
              <span className="offer-slots">Massimo 5 persone al mese</span>
            </div>
            <div className="offer-details">
              <div className="offer-item"><span className="check">✓</span> 4 sessioni individuali</div>
              <div className="offer-item"><span className="check">✓</span> 1 sessione follow-up</div>
              <div className="offer-item"><span className="check">✓</span> Analisi profilo</div>
              <div className="offer-item"><span className="check">✓</span> Strategia personal brand</div>
              <div className="offer-item"><span className="check">✓</span> Metodo contenuti</div>
              <div className="offer-item"><span className="check">✓</span> Community e monetizzazione</div>
            </div>
            <p className="offer-note">Per il prezzo e la disponibilità del percorso, scrivimi direttamente su WhatsApp: ti rispondo io personalmente.</p>
            <a href="#finale" className="btn btn-primary btn-block">Scrivimi su WhatsApp per maggiori info</a>
          </div>
        </div>
      </div>
    </section>
  );
}
