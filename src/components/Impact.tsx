import type { Content } from "../i18n/content";
import { Reveal } from "./Reveal";
import { StatValue } from "./StatValue";

export function Impact({ t }: { t: Content }) {
  return (
    <section id="impact" className="section section--white">
      <div className="impact-wrap">
        <Reveal>
          <span className="section-tag">{t.impact.tag}</span>
          <h2 className="section-title">
            {t.impact.title} <em>{t.impact.titleEm}</em>
          </h2>
          <p className="impact-text">{t.impact.text}</p>
        </Reveal>
        <dl className="stats-grid">
          {t.impact.stats.map((stat, i) => (
            <Reveal as="div" className="stat" delay={i * 80} key={stat.label}>
              <StatValue value={stat.value} />
              <dt className="stat-label">{stat.label}</dt>
            </Reveal>
          ))}
        </dl>
      </div>
    </section>
  );
}
