import { useState } from "react";
import type { Content, Lang } from "../i18n/content";
import { BrFlag, InstagramIcon, UsFlag } from "./icons";

interface Props {
  t: Content;
  lang: Lang;
  onToggleLang: () => void;
}

export function Navbar({ t, lang, onToggleLang }: Props) {
  const isPt = lang === "pt-br";
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { href: "#about", label: t.nav.about },
    { href: "#mission", label: t.nav.mission },
    { href: "#services", label: t.nav.services },
    { href: "#team", label: t.nav.team },
    { href: "#contact", label: t.nav.contact },
  ];

  return (
    <header>
      <nav className="nav" aria-label="Main navigation">
        <a href="#hero" className="nav-logo" aria-label="ARISE Initiative home">
          <span className="wordmark">
            AR<span className="wordmark-i">I</span>SE
          </span>
        </a>
        <ul className="nav-links">
          {links.map((link) => (
            <li key={link.href}>
              <a href={link.href}>{link.label}</a>
            </li>
          ))}
        </ul>
        <div className="nav-actions">
          <a
            href="https://instagram.com/arise_orangenj"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="ARISE Initiative on Instagram"
            className="icon-link"
          >
            <InstagramIcon color="#0B1D3A" />
          </a>
          <button
            type="button"
            className="lang-toggle"
            onClick={onToggleLang}
            aria-label={isPt ? "Switch to English" : "Mudar para Português"}
          >
            {isPt ? <UsFlag /> : <BrFlag />}
            {isPt ? "EN" : "PT-BR"}
          </button>
          <button
            type="button"
            className="nav-burger"
            onClick={() => setMenuOpen((open) => !open)}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            <span className={menuOpen ? "burger-bar burger-bar--top-open" : "burger-bar"} />
            <span className={menuOpen ? "burger-bar burger-bar--mid-open" : "burger-bar"} />
            <span className={menuOpen ? "burger-bar burger-bar--bot-open" : "burger-bar"} />
          </button>
        </div>
      </nav>
      <div id="mobile-menu" className={menuOpen ? "mobile-menu mobile-menu--open" : "mobile-menu"}>
        <ul>
          {links.map((link) => (
            <li key={link.href}>
              <a href={link.href} onClick={() => setMenuOpen(false)}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
