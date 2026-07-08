import { autoritaItems } from "./data";

export default function AuthoritySection() {
  return (
    <section id="autorita" className="autorita">
      <div className="container">
        <div className="section-head center reveal">
          <span className="eyebrow">Perché fidarsi</span>
          <h2>
            Un percorso privato,<br />costruito <span className="accent">su di te</span>.
          </h2>
          <p>
            Non sei dentro una classe generica. Il lavoro è 1:1: sarete solo io e te, con spazio per analizzare il tuo profilo, la tua storia e il modo migliore per trasformarli in un progetto reale.
          </p>
        </div>

        <div className="auth-grid reveal">
          {autoritaItems.map((item) => (
            <div className="card-auth" key={item.label}>
              <div className="num">{item.num}</div>
              <div className="label">{item.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
