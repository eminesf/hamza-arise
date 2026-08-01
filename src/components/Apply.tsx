import type { Content } from "../i18n/content";
import { FORM_URL } from "../constants";
import { Reveal } from "./Reveal";

export function Apply({ t }: { t: Content }) {
  return (
    <section id="apply" className="section section--white">
      <div className="apply-wrap">
        <Reveal className="apply-copy">
          <span className="section-tag">{t.apply.tag}</span>
          <h2 className="section-title">
            {t.apply.title} <em>{t.apply.titleEm}</em>
          </h2>
          <p className="apply-desc">{t.apply.desc}</p>
          <a
            href={FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold apply-cta"
          >
            {t.apply.cta}
          </a>
        </Reveal>
        <Reveal delay={150} className="apply-qr">
          <a href={FORM_URL} target="_blank" rel="noopener noreferrer" aria-label={t.apply.cta}>
            <img
              src="/assets/qr-code.png"
              alt={t.apply.qrAlt}
              width={220}
              height={220}
              loading="lazy"
              decoding="async"
            />
          </a>
          <p className="apply-qr-hint">{t.apply.qrHint}</p>
        </Reveal>
      </div>
    </section>
  );
}
