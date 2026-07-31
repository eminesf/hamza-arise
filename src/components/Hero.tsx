import type { Content } from "../i18n/content";
import { Logo } from "./Logo";

export function Hero({ t }: { t: Content }) {
	return (
		<section id="hero" className="hero" aria-label="ARISE Initiative">
			<p className="hero-eyebrow">{t.hero.eyebrow}</p>
			<Logo
				as="h1"
				size="lg"
				showLockup
				subword={t.hero.subword}
				tagline={t.hero.tagline}
			/>
			<p className="hero-acronym">{t.hero.acronym}</p>
			<p className="hero-desc">{t.hero.desc}</p>
			<div className="hero-ctas">
				<a href="#services" className="btn-gold">
					{t.hero.cta1}
				</a>
				<a
					href="https://www.hamzawedam.com/"
					target="_blank"
					rel="noopener noreferrer"
					className="btn-outline"
				>
					{t.hero.cta2}
				</a>
			</div>
		</section>
	);
}
