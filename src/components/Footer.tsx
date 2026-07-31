import type { Content } from "../i18n/content";
import { InstagramIcon } from "./icons";
import { Logo } from "./Logo";

export function Footer({ t }: { t: Content }) {
	return (
		<footer className="footer">
			<Logo
				size="md"
				subword={t.hero.subword}
				tagline={t.hero.tagline}
				primary="#fff"
				secondary="var(--gold-light)"
			/>
			<p className="footer-tagline">{t.footer.tagline}</p>
			<div className="footer-social">
				<a
					href="https://instagram.com/arise_orangenj"
					target="_blank"
					rel="noopener noreferrer"
					aria-label="ARISE Initiative on Instagram"
					className="icon-link"
				>
					<InstagramIcon color="#E8C766" />
				</a>
			</div>
			<p className="footer-founder">
				<a
					href="https://www.hamzawedam.com/"
					target="_blank"
					rel="noopener noreferrer"
				>
					{t.footer.founderLink}
				</a>
			</p>
			<p className="footer-copy">{t.footer.copyright}</p>
			<p className="footer-credit">
				Developed by{" "}
				<a
					href="https://www.linkedin.com/in/emilianodasilveira/?locale=en-US"
					target="_blank"
					rel="noopener noreferrer"
				>
					Emiliano da Silveira
				</a>
			</p>
		</footer>
	);
}
