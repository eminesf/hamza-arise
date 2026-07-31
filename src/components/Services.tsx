import type { Content } from "../i18n/content";

export function Services({ t }: { t: Content }) {
  return (
    <section id="services" className="section section--cream">
      <div className="services-wrap">
        <div className="services-header">
          <span className="section-tag">{t.services.tag}</span>
          <h2 className="section-title">
            {t.services.title} <em>{t.services.titleEm}</em>
          </h2>
        </div>
        <div className="services-grid">
          {t.services.items.map((item) => (
            <article className="service-card" key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
