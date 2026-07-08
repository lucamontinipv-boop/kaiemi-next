import { impariGroups } from "./data";

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

        <div className="learn-phases-grid reveal">
          {impariGroups.map((group) => (
            <article className="learn-phase-card" key={group.title}>
              <h3>{group.title}</h3>
              <ul>
                {group.items.map((item) => (
                  <li key={item}>
                    <span className="learn-check">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
