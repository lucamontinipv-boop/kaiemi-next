import { impariItems } from "./data";

export default function LearnSection() {
  return (
    <section className="impari" id="cosa-impari">
      <div className="container">
        <div className="section-head center reveal">
          <span className="eyebrow">In pratica</span>
          <h2>Cosa impari <span className="accent">concretamente</span></h2>
          <p>
            Un percorso completo per passare dalla confusione alla direzione: personal brand, contenuti, community e prime possibilità di monetizzazione.
          </p>
        </div>

        <div className="learn-panel reveal">
          {impariItems.map((item) => (
            <div className="learn-row" key={item}>
              <span className="learn-check">✓</span>
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
