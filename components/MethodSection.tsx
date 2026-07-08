import Marquee from "./Marquee";
import { metodoItems } from "./data";

export default function MethodSection() {
  return (
    <section id="metodo">
      <div className="container">
        <div className="section-head center reveal">
          <span className="eyebrow">Il metodo</span>
          <h2>Il percorso segue <span className="accent">3 fasi</span> semplici.</h2>
        </div>
      </div>
      <Marquee duration={38}>
        {metodoItems.map((item) => (
          <div className="card-phase" key={item.title}>
            <img className="phase-img" src={item.img} alt={item.title} loading="lazy" width="420" height="315" />
            <div className="phase-content">
              <span className="phase-tag">{item.tag}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          </div>
        ))}
      </Marquee>
    </section>
  );
}
