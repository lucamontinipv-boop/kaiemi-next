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

        <div className="offer-card offer-card-center reveal">
          <div className="offer-top-single">
            <span className="offer-slots">Massimo 5 persone al mese</span>
          </div>
          <div className="offer-details">
            <div className="offer-item"><span className="check">✓</span> 4 sessioni individuali</div>
            <div className="offer-item"><span className="check">✓</span> 1 sessione follow-up</div>
            <div className="offer-item"><span className="check">✓</span> Analisi profilo</div>
            <div className="offer-item"><span className="check">✓</span> Strategia personal brand</div>
            <div className="offer-item"><span className="check">✓</span> Metodo contenuti: hook, struttura, editing</div>
            <div className="offer-item"><span className="check">✓</span> Community, fiducia e prime monetizzazioni</div>
          </div>
          <p className="offer-note">Il percorso ha un investimento di 350€. Scrivimi su WhatsApp per verificare la disponibilità del mese (solo 5 posti) e prenotare la tua call informativa.</p>
          <a href="#finale" className="btn btn-primary btn-block">Scrivimi su WhatsApp per maggiori info</a>
        </div>
      </div>
    </section>
  );
}
