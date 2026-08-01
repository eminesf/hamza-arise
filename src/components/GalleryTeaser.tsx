import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import type { Content } from "../i18n/content";
import { GALLERY_PHOTO_COUNT, galleryPhotoSrc } from "../gallery-photos";
import { Reveal } from "./Reveal";

const CAROUSEL_COUNT = 12;
const CAROUSEL_INDICES = Array.from({ length: CAROUSEL_COUNT }, (_, i) =>
	Math.floor((i * GALLERY_PHOTO_COUNT) / CAROUSEL_COUNT),
);
const LOOP_PHOTOS = [...CAROUSEL_INDICES, ...CAROUSEL_INDICES];
const STEP_MS = 3000;
const SLIDE_MS = 1000;

interface Props {
	t: Content;
}

export function GalleryTeaser({ t }: Props) {
	const g = t.gallery;
	const trackRef = useRef<HTMLDivElement>(null);
	const [step, setStep] = useState(0);
	const [animate, setAnimate] = useState(true);

	useEffect(() => {
		if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
		const id = setInterval(() => setStep((s) => s + 1), STEP_MS);
		return () => clearInterval(id);
	}, []);

	useEffect(() => {
		if (step !== CAROUSEL_COUNT) return;
		const track = trackRef.current;
		if (!track) return;
		const onEnd = () => {
			setAnimate(false);
			setStep(0);
		};
		track.addEventListener("transitionend", onEnd, { once: true });
		return () => track.removeEventListener("transitionend", onEnd);
	}, [step]);

	useEffect(() => {
		if (animate) return;
		const raf = requestAnimationFrame(() => setAnimate(true));
		return () => cancelAnimationFrame(raf);
	}, [animate]);

	return (
		<section id="gallery" className="section section--white gallery-teaser">
			<Reveal as="div" className="gallery-teaser__header">
				<span className="section-tag">{g.tag}</span>
				<h2 className="section-title">
					{g.title} <em>{g.titleEm}</em>
				</h2>
				<p className="gallery-teaser__desc">{g.desc}</p>
			</Reveal>

			<div className="gallery-carousel">
				<div
					ref={trackRef}
					className="gallery-carousel__track"
					style={{
						transform: `translateX(calc(${-step} * (var(--carousel-item) + var(--carousel-gap))))`,
						transition: animate ? `transform ${SLIDE_MS}ms ease` : "none",
					}}
				>
					{LOOP_PHOTOS.map((photoIndex, i) => (
						<div className="gallery-carousel__item" key={i}>
							<img src={galleryPhotoSrc(photoIndex)} alt={`${g.photoLabel} ${photoIndex + 1}`} loading="lazy" />
						</div>
					))}
				</div>
			</div>

			<Reveal as="div" className="gallery-teaser__cta-wrap">
				<Link to="/galeria" className="btn-gold">
					{g.cta}
				</Link>
			</Reveal>
		</section>
	);
}
