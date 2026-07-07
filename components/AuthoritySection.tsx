import Marquee from "./Marquee";
import { autoritaItems } from "./data";

export default function AuthoritySection() {
  return (
    <section id="autorita">
      <div className="container">
        <div className="split-head reveal">
          <div className="section-head">
            <span className="eyebrow">Perché fidarsi</span>
            <h2>
              Strategie nate dall&apos;esperienza,<br />non dalla <span className="accent">teoria</span>.
            </h2>
          </div>
          <div className="split-img">
            <img src="/images/growth-results.webp" alt="Risultati e crescita nel tempo" loading="lazy" width="500" height="500" />
          </div>
        </div>
      </div>
      <Marquee duration={26}>
        {autoritaItems.map((item) => (
          <div className="card-auth" key={item.label}>
            <div className="num">{item.num}</div>
            <div className="label">{item.label}</div>
          </div>
        ))}
      </Marquee>
    </section>
  );
}
