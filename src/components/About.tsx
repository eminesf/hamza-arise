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
          <img
            src="/photos/grown_from.webp"
            alt={t.about.title + " " + t.about.titleEm}
            className="about-photo"
            loading="lazy"
          />
          <p className="about-photo-credit">
            {t.about.photoCreditBy}{" "}
            <a
              href="https://unsplash.com/pt-br/@jeffersonsees?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
              target="_blank"
              rel="noopener noreferrer"
            >
              Jefferson Sees
            </a>{" "}
            {t.about.photoCreditOn}{" "}
            <a
              href="https://unsplash.com/pt-br/fotografias/um-homem-em-um-manto-andando-por-um-lance-de-escadas-QGOWg4m3C7o?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
              target="_blank"
              rel="noopener noreferrer"
            >
              Unsplash
            </a>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
