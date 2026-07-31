import type { Content } from "../i18n/content";
import { Reveal } from "./Reveal";

export function About({ t }: { t: Content }) {
  return (
    <section id="about" className="section section--cream">
      <div className="about-grid">
        <Reveal>
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
        </Reveal>
        <Reveal delay={150}>
          {/* Photo slot intentionally empty — final photo to be chosen later */}
          <div className="about-photo about-photo--placeholder" role="presentation">
            <span>{t.about.photoPlaceholder}</span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
