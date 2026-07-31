import type { Content } from "../i18n/content";
import { Reveal } from "./Reveal";

export function QuoteBanner({ t }: { t: Content }) {
  return (
    <aside className="quote-banner">
      <Reveal as="blockquote">
        {t.quoteBanner.text}
        <cite>{t.quoteBanner.cite}</cite>
      </Reveal>
    </aside>
  );
}
