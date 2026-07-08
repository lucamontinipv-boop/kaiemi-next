export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-blob blob-1" />
      <div className="hero-blob blob-2" />

      <div className="hero-top-image reveal">
        <img src="/images/foto-1.jpg" alt="Kaiemi Coaching" />
      </div>

      <div className="container hero-inner">
        <h1 className="reveal">
          Costruisci il tuo personal brand.{" "}
          <span className="line2">Senza pubblicare a caso.</span>
        </h1>

        <p className="sub reveal">
          Un percorso 1:1 per imparare a usare Instagram con strategia, creare
          una community reale e costruire le basi per monetizzare online.
        </p>

        <div className="cta-row reveal">
          <a href="#offerta" className="btn btn-primary">
            Prenota una call informativa
          </a>
          <a href="#metodo" className="btn btn-secondary">
            Scopri il percorso
          </a>
        </div>

        <div className="hero-stats-grid reveal">
          <div className="hero-stat-card">
            <strong>4+1</strong>
            <span>Sessioni live</span>
          </div>

          <div className="hero-stat-card">
            <strong>1:1</strong>
            <span>Percorso individuale</span>
          </div>

          <div className="hero-stat-card">
            <strong>5</strong>
            <span>Posti al mese</span>
          </div>
        </div>
      </div>
    </section>
  );
}
