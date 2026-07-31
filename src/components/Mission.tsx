import type { Content } from "../i18n/content";
import { Reveal } from "./Reveal";

export function Mission({ t }: { t: Content }) {
  return (
    <section id="mission" className="section section--white">
      <Reveal className="narrow-center">
        <span className="section-tag">{t.mission.tag}</span>
        <h2 className="section-title">
          {t.mission.title} <em>{t.mission.titleEm}</em>
        </h2>
        <p className="body-text">{t.mission.text}</p>
        <p className="body-text body-text--last">{t.mission.serveText}</p>
      </Reveal>
    </section>
  );
}
