import Marquee from "./Marquee";
import { problemaItems } from "./data";

const problemIcons = ["♙", "◈", "✦", "▣", "⚑"];
const highlightWords = ["cosa comunicare", "direzione chiara", "iniziare", "abbastanza interessante", "partire"];

function highlightText(text: string, phrase: string) {
  const parts = text.split(phrase);
  if (parts.length === 1) return text;

  return (
    <>
      {parts[0]}
      <span>{phrase}</span>
      {parts.slice(1).join(phrase)}
    </>
  );
}

export default function ProblemSection() {
  return (
    <section className="problema problem-map-section" id="problema">
      <div className="map-decoration map-compass" aria-hidden="true">N<br /><span>W&nbsp;&nbsp;&nbsp;E</span><br />S</div>
      <div className="map-decoration map-x" aria-hidden="true">×</div>
      <div className="map-decoration map-pin" aria-hidden="true">⌖</div>

      <div className="container">
        <div className="section-head center reveal problem-map-head">
          <span className="eyebrow">Il punto di partenza</span>
          <h2>
            Forse non ti manca il potenziale.<br />Ti manca una <span className="accent">mappa</span>.
          </h2>
        </div>
      </div>

      <div className="problem-map-marquee">
        <Marquee duration={42}>
          {problemaItems.map((item, index) => (
            <div className={`map-step map-step-${index + 1}`} key={item}>
              <span className="map-step-number">{index + 1}</span>
              <span className="map-step-icon">{problemIcons[index]}</span>
              <p>{highlightText(item, highlightWords[index])}</p>
              <span className="map-step-line" />
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
}
