import { faqItems } from "./data";

export default function FaqSection() {
  return (
    <section id="faq">
      <div className="container">
        <div className="section-head reveal">
          <span className="eyebrow">Domande frequenti</span>
          <h2>Le cose che ti stai chiedendo</h2>
        </div>

        <div className="faq-list reveal">
          {faqItems.map((item) => (
            <details className="faq-item" key={item.question}>
              <summary>{item.question} <span className="plus">+</span></summary>
              <div className="faq-body">{item.answer}</div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
