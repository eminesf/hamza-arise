import { useEffect, useState } from "react";
import { CONTENT, type Content, type Lang } from "../i18n/content";

const LANGS: Lang[] = ["en", "pt-br", "es"];

function initialLang(): Lang {
  const param = new URLSearchParams(window.location.search).get("lang");
  return LANGS.includes(param as Lang) ? (param as Lang) : "en";
}

const HTML_LANG: Record<Lang, string> = {
  en: "en",
  "pt-br": "pt-BR",
  es: "es",
};

/**
 * Holds the active language and keeps SEO-relevant document state in sync:
 * <html lang>, <title>, meta description, canonical URL, and the ?lang= param
 * (matching the hreflang alternates declared in index.html).
 */
export function useLanguage(): {
  lang: Lang;
  t: Content;
  setLang: (lang: Lang) => void;
} {
  const [lang, setLang] = useState<Lang>(initialLang);

  useEffect(() => {
    const t = CONTENT[lang];
    document.documentElement.lang = HTML_LANG[lang];
    document.title = t.seo.title;

    document
      .querySelector<HTMLMetaElement>('meta[name="description"]')
      ?.setAttribute("content", t.seo.description);

    const canonicalHref =
      lang === "en"
        ? "https://www.ariseorangenj.org/"
        : `https://www.ariseorangenj.org/?lang=${lang}`;
    document
      .querySelector<HTMLLinkElement>('link[rel="canonical"]')
      ?.setAttribute("href", canonicalHref);

    const url = new URL(window.location.href);
    if (lang === "en") {
      url.searchParams.delete("lang");
    } else {
      url.searchParams.set("lang", lang);
    }
    window.history.replaceState(null, "", url);
  }, [lang]);

  return { lang, t: CONTENT[lang], setLang };
}
