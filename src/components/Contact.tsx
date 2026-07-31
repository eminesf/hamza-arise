import type { Content } from "../i18n/content";

export function Contact({ t }: { t: Content }) {
  return (
    <section id="contact" className="section section--white">
      <div className="contact-wrap">
        <span className="section-tag">{t.contact.tag}</span>
        <h2 className="section-title">
          {t.contact.title} <em>{t.contact.titleEm}</em>
        </h2>
        <div className="gold-rule gold-rule--center" aria-hidden="true" />
        <p className="contact-desc">{t.contact.desc}</p>
        <address className="contact-items" style={{ fontStyle: "normal" }}>
          <div className="contact-item">
            <strong>{t.contact.locationLabel}</strong>
            <span>{t.contact.location}</span>
          </div>
          <div className="contact-item">
            <strong>{t.contact.emailLabel}</strong>
            <a href="mailto:hwedam@ariseorangenj.org">hwedam@ariseorangenj.org</a>
          </div>
          <div className="contact-item">
            <strong>{t.contact.instagramLabel}</strong>
            <a
              href="https://instagram.com/arise_orangenj"
              target="_blank"
              rel="noopener noreferrer"
            >
              @arise_orangenj
            </a>
          </div>
        </address>
      </div>
    </section>
  );
}
