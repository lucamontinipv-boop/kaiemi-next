import Marquee from "./Marquee";
import { problemaItems } from "./data";

export default function ProblemSection() {
  return (
    <section className="problema" id="problema">
      <div className="section-wide-image problem-map-wide reveal">
        <img src="/images/foto-2.jpg" alt="Mappa e direzione per costruire il proprio progetto" loading="lazy" />
      </div>

      <div className="container">
        <div className="section-head center reveal">
          <span className="eyebrow">Il punto di partenza</span>
          <h2>
            Forse non ti manca il potenziale.<br />Ti manca una <span className="accent">mappa</span>.
          </h2>
          <p>
            Vuoi iniziare a usare Instagram in modo più serio, ma non sai da dove partire. Pubblichi contenuti, guardi altri creator, salvi idee, ma poi ti blocchi perché manca una direzione chiara.
          </p>
        </div>
      </div>
      <Marquee duration={32}>
        {problemaItems.map((item, index) => (
          <div className="card-problem" key={item}>
            <span className="dot">{index + 1}</span>
            <p>{item}</p>
          </div>
        ))}
      </Marquee>
    </section>
  );
}
