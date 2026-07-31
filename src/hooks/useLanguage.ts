import { useCallback, useEffect, useState } from "react";
import { CONTENT, type Content, type Lang } from "../i18n/content";

function initialLang(): Lang {
  const param = new URLSearchParams(window.location.search).get("lang");
  return param === "pt-br" ? "pt-br" : "en";
}

/**
 * Holds the active language and keeps SEO-relevant document state in sync:
 * <html lang>, <title>, meta description, canonical URL, and the ?lang= param
 * (matching the hreflang alternates declared in index.html).
 */
export function useLanguage(): { lang: Lang; t: Content; toggleLang: () => void } {
  const [lang, setLang] = useState<Lang>(initialLang);

  useEffect(() => {
    const t = CONTENT[lang];
    document.documentElement.lang = lang === "pt-br" ? "pt-BR" : "en";
    document.title = t.seo.title;

    document
      .querySelector<HTMLMetaElement>('meta[name="description"]')
      ?.setAttribute("content", t.seo.description);

    const canonicalHref =
      lang === "pt-br"
        ? "https://www.ariseorangenj.org/?lang=pt-br"
        : "https://www.ariseorangenj.org/";
    document
      .querySelector<HTMLLinkElement>('link[rel="canonical"]')
      ?.setAttribute("href", canonicalHref);

    const url = new URL(window.location.href);
    if (lang === "pt-br") {
      url.searchParams.set("lang", "pt-br");
    } else {
      url.searchParams.delete("lang");
    }
    window.history.replaceState(null, "", url);
  }, [lang]);

  const toggleLang = useCallback(() => {
    setLang((current) => (current === "en" ? "pt-br" : "en"));
  }, []);

  return { lang, t: CONTENT[lang], toggleLang };
}
