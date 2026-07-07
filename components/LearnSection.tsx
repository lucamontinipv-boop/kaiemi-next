import Marquee from "./Marquee";
import { impariItems } from "./data";

export default function LearnSection() {
  return (
    <section className="impari">
      <div className="container">
        <div className="split-head reveal">
          <div className="split-img">
            <img src="/images/profile-optimize.webp" alt="Ottimizzazione del profilo Instagram" loading="lazy" width="500" height="500" />
          </div>
          <div className="section-head">
            <span className="eyebrow">In pratica</span>
            <h2>Cosa impari <span className="accent">concretamente</span></h2>
          </div>
        </div>
      </div>
      <Marquee duration={40}>
        {impariItems.map((item, index) => (
          <div className="card-learn" key={item}>
            <span className="ico">{index + 1}</span>
            <p>{item}</p>
          </div>
        ))}
      </Marquee>
    </section>
  );
}
