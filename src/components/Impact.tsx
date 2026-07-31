import type { Content } from "../i18n/content";

export function Impact({ t }: { t: Content }) {
  return (
    <section id="impact" className="section section--white">
      <div className="impact-wrap">
        <span className="section-tag">{t.impact.tag}</span>
        <h2 className="section-title">
          {t.impact.title} <em>{t.impact.titleEm}</em>
        </h2>
        <p className="impact-text">{t.impact.text}</p>
        <dl className="stats-grid">
          {t.impact.stats.map((stat) => (
            <div className="stat" key={stat.label}>
              <dd className="stat-value">{stat.value}</dd>
              <dt className="stat-label">{stat.label}</dt>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
