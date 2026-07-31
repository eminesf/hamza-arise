import type { Content } from "../i18n/content";

export function QuoteBanner({ t }: { t: Content }) {
  return (
    <aside className="quote-banner">
      <blockquote>
        {t.quoteBanner.text}
        <cite>{t.quoteBanner.cite}</cite>
      </blockquote>
    </aside>
  );
}
