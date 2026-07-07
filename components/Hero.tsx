export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-blob blob-1" />
      <div className="hero-blob blob-2" />

      <div className="container hero-inner">
        <h1 className="reveal">
          Costruisci il tuo personal brand. <span className="line2">Senza pubblicare a caso.</span>
        </h1>
        <p className="sub reveal">
          Un percorso 1:1 per imparare a usare Instagram con strategia, creare una community reale e costruire le basi per monetizzare online.
        </p>
        <p className="micro reveal">4 sessioni + 1 follow-up · Percorso individuale · Massimo 5 persone al mese</p>

        <div className="cta-row reveal">
          <a href="#offerta" className="btn btn-primary">Prenota una call informativa</a>
          <a href="#metodo" className="btn btn-secondary">Scopri il percorso</a>
        </div>

      </div>

      <div className="container">
        <div className="hero-visual reveal">
          <div className="hero-img-wrap">
            <img src="/images/foto-1.jpg" alt="Kaiemi Coaching" width="820" height="520" />
            <div className="hero-float-card fc-1">👋 Ciao, sono Noemi</div>
            <div className="hero-float-card fc-2">🎯 Strategia su misura</div>
          </div>
          <div className="hero-stats-bar">
            <div className="hero-stat"><div className="num">4+1</div><div className="label">Sessioni live</div></div>
            <div className="hero-stat"><div className="num">1:1</div><div className="label">Percorso individuale</div></div>
            <div className="hero-stat"><div className="num">5</div><div className="label">Posti al mese</div></div>
          </div>
        </div>
      </div>
    </section>
  );
}
