import type { Content } from "../i18n/content";

export function About({ t }: { t: Content }) {
  return (
    <section id="about" className="section section--cream">
      <div className="about-grid">
        <div>
          <span className="section-tag">{t.about.tag}</span>
          <h2 className="section-title">
            {t.about.title} <em>{t.about.titleEm}</em>
          </h2>
          <div className="gold-rule" aria-hidden="true" />
          <p>{t.about.p1}</p>
          <p>{t.about.p2}</p>
          <blockquote className="about-quote">
            <p>{t.about.quote}</p>
            <cite>{t.about.quoteCite}</cite>
          </blockquote>
        </div>
        <div>
          {/* Photo slot intentionally empty — final photo to be chosen later */}
          <div className="about-photo about-photo--placeholder" role="presentation">
            <span>{t.about.photoPlaceholder}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
