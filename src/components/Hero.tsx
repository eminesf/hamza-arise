import type { Content } from "../i18n/content";
import { FORM_URL } from "../constants";
import { Logo } from "./Logo";

export function Hero({ t }: { t: Content }) {
	return (
		<section id="hero" className="hero" aria-label="ARISE Initiative">
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
				<a href={FORM_URL} target="_blank" rel="noopener noreferrer" className="btn-gold">
					{t.hero.cta3}
				</a>
				<a href="#mission" className="btn-outline">
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
