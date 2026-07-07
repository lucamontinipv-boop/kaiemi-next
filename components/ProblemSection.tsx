import Marquee from "./Marquee";
import { problemaItems } from "./data";

export default function ProblemSection() {
  return (
    <section className="problema" id="problema">
      <div className="container">
        <div className="split-head reveal">
          <div className="section-head">
            <span className="eyebrow">Il punto di partenza</span>
            <h2>
              Forse non ti manca il potenziale.<br />Ti manca una <span className="accent">mappa</span>.
            </h2>
            <p>
              Vuoi iniziare a usare Instagram in modo più serio, ma non sai da dove partire. Pubblichi contenuti, guardi altri creator, salvi idee, ma poi ti blocchi perché manca una direzione chiara.
            </p>
          </div>
          <div className="split-img">
            <img src="/images/maze-to-path.webp" alt="Dal labirinto della confusione a un percorso chiaro" loading="lazy" width="500" height="500" />
          </div>
        </div>
      </div>
      <Marquee duration={32}>
        {problemaItems.map((item, index) => (
          <div className="card-problem" key={item}>
            <span className="dot">{(index % 5) + 1}</span>
            <p>{item}</p>
          </div>
        ))}
      </Marquee>
    </section>
  );
}
