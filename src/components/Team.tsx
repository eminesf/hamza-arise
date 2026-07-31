import type { Content } from "../i18n/content";

export function Team({ t }: { t: Content }) {
  return (
    <section id="team" className="section section--cream">
      <div className="team-wrap">
        <div className="team-header">
          <span className="section-tag">{t.team.tag}</span>
          <h2 className="section-title">
            {t.team.title} <em>{t.team.titleEm}</em>
          </h2>
        </div>

        <article className="founder-card">
          <img
            src="/assets/hamza-founder.png"
            alt={t.team.founderPhotoAlt}
            className="founder-photo"
            width={220}
            height={220}
            loading="lazy"
            decoding="async"
          />
          <div>
            <span className="founder-label">{t.team.founderLabel}</span>
            <h3 className="founder-name">{t.team.founderName}</h3>
            <p className="founder-role">{t.team.founderRole}</p>
            <p className="founder-bio">{t.team.founderBio}</p>
            <a
              href="https://www.hamzawedam.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="founder-link"
            >
              {t.team.founderCta} &rarr;
            </a>
          </div>
        </article>

        <p className="team-subtag">{t.team.supportTag}</p>
        <div className="members-grid members-grid--last">
          {t.team.members.map((m) => (
            <article className="member-card" key={m.id}>
              <img
                src={m.src}
                alt={m.name}
                className="member-photo"
                width={120}
                height={120}
                loading="lazy"
                decoding="async"
              />
              <div>
                <h3>{m.name}</h3>
                <p className="member-role">{m.role}</p>
                <p className="member-bio">{m.bio}</p>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}
