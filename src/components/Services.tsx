import type { Content } from "../i18n/content";
import { Reveal } from "./Reveal";

export function Services({ t }: { t: Content }) {
  return (
    <section id="services" className="section section--cream">
      <div className="services-wrap">
        <Reveal className="services-header">
          <span className="section-tag">{t.services.tag}</span>
          <h2 className="section-title">
            {t.services.title} <em>{t.services.titleEm}</em>
          </h2>
        </Reveal>
        <div className="services-grid">
          {t.services.items.map((item, i) => (
            <Reveal as="article" className="service-card" delay={i * 60} key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
