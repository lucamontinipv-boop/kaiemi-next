export default function BeforeAfterSection() {
  return (
    <section id="prima-dopo">
      <div className="container">
        <div className="section-head center reveal">
          <span className="eyebrow">La trasformazione</span>
          <h2>Da profilo confuso a <span className="accent">progetto con direzione</span>.</h2>
        </div>

        <div className="pd-banner reveal">
          <img src="/images/post-to-people.webp" alt="Da un contenuto pubblicato a caso a una community che ti segue" loading="lazy" width="420" height="262" />
        </div>

        <div className="pd-grid reveal">
          <div className="pd-card prima">
            <h3>Prima</h3>
            <ul className="pd-list">
              <li><span className="pd-mark">–</span> Pubblicavi quando capitava</li>
              <li><span className="pd-mark">–</span> Non sapevi cosa dire</li>
              <li><span className="pd-mark">–</span> Guardavi gli altri senza iniziare</li>
              <li><span className="pd-mark">–</span> Pensavi solo ai follower</li>
              <li><span className="pd-mark">–</span> Non sapevi come monetizzare</li>
            </ul>
          </div>
          <div className="pd-card dopo">
            <h3>Dopo</h3>
            <ul className="pd-list">
              <li><span className="pd-mark">✓</span> Hai una direzione chiara</li>
              <li><span className="pd-mark">✓</span> Hai messaggio, nicchia e pilastri</li>
              <li><span className="pd-mark">✓</span> Sai creare contenuti con metodo</li>
              <li><span className="pd-mark">✓</span> Capisci community e fiducia</li>
              <li><span className="pd-mark">✓</span> Conosci le prime strade per monetizzare</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
