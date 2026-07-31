import type { CSSProperties, ElementType } from "react";

export type LogoSize = "xs" | "sm" | "md" | "lg";

interface LogoProps {
	/** Wordmark size. */
	size?: LogoSize;
	/** Color of the "AR" / "SE" letters (and the subword text). */
	primary?: string;
	/** Color of the "I" accent letter (and the rules and tagline). */
	secondary?: string;
	/** Render the "Initiative" subword and tagline alongside the wordmark. */
	showLockup?: boolean;
	/** "Initiative"-style subword, shown between two rules when showLockup is true. */
	subword?: string;
	/** Italic tagline shown below the subword when showLockup is true. */
	tagline?: string;
	/** Element to render the wordmark as. Use "h1" for the page's main heading. */
	as?: ElementType;
	className?: string;
}

export function Logo({
	size = "md",
	primary = "var(--navy)",
	secondary = "var(--gold)",
	showLockup = false,
	subword,
	tagline,
	as: Wordmark = "span",
	className,
}: LogoProps) {
	const style = {
		"--logo-primary": primary,
		"--logo-secondary": secondary,
	} as CSSProperties;

	const classes = ["logo", `logo--${size}`, showLockup && "logo--lockup", className]
		.filter(Boolean)
		.join(" ");

	return (
		<div className={classes} style={style}>
			<Wordmark className="logo-wordmark">
				AR<span className="logo-wordmark-i">I</span>SE
			</Wordmark>
			{showLockup && subword && (
				<div className="logo-subword-wrap">
					<div className="logo-rule" aria-hidden="true" />
					<p className="logo-subword">{subword}</p>
					<div className="logo-rule" aria-hidden="true" />
				</div>
			)}
			{showLockup && tagline && <p className="logo-tagline">{tagline}</p>}
		</div>
	);
}
