import { useState, type ReactNode } from "react";
import { Link, useLocation } from "react-router-dom";
import type { Content, Lang } from "../i18n/content";
import { useActiveSection } from "../hooks/useActiveSection";
import { BrFlag, InstagramIcon, UsFlag } from "./icons";

interface Props {
  t: Content;
  lang: Lang;
  onToggleLang: () => void;
}

const SECTION_IDS = ["about", "mission", "services", "team", "apply", "contact", "gallery"];

interface NavLink {
  href: string;
  label: string;
}

export function Navbar({ t, lang, onToggleLang }: Props) {
  const isPt = lang === "pt-br";
  const [menuOpen, setMenuOpen] = useState(false);
  const { pathname } = useLocation();
  const activeId = useActiveSection(SECTION_IDS, pathname);
  const isHome = pathname === "/";

  const links: NavLink[] = [
    { href: "#about", label: t.nav.about },
    { href: "#mission", label: t.nav.mission },
    { href: "#services", label: t.nav.services },
    { href: "#team", label: t.nav.team },
    { href: "#apply", label: t.nav.apply },
    { href: "#contact", label: t.nav.contact },
    { href: "#gallery", label: t.nav.gallery },
  ];

  const renderLink = (link: NavLink, content: ReactNode, onClick?: () => void) => {
    const isActive = link.href.slice(1) === activeId;
    if (isHome) {
      return (
        <a
          href={link.href}
          className={isActive ? "is-active" : undefined}
          aria-current={isActive ? "true" : undefined}
          onClick={onClick}
        >
          {content}
        </a>
      );
    }
    return (
      <Link to={`/${link.href}`} onClick={onClick}>
        {content}
      </Link>
    );
  };

  return (
    <header>
      <nav className="nav" aria-label="Main navigation">
        {isHome ? (
          <a href="#hero" className="nav-logo" aria-label="ARISE Initiative home">
            <span className="wordmark">
              AR<span className="wordmark-i">I</span>SE
            </span>
          </a>
        ) : (
          <Link to="/" className="nav-logo" aria-label="ARISE Initiative home">
            <span className="wordmark">
              AR<span className="wordmark-i">I</span>SE
            </span>
          </Link>
        )}
        <ul className="nav-links">
          {links.map((link) => (
            <li key={link.href}>{renderLink(link, link.label)}</li>
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
              {renderLink(
                link,
                <span className="mobile-menu-label">{link.label}</span>,
                () => setMenuOpen(false),
              )}
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
