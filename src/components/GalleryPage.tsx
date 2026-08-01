import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import type { Content } from "../i18n/content";
import { GALLERY_PHOTO_COUNT, galleryPhotoSrc } from "../gallery-photos";
import { Reveal } from "./Reveal";

const SWIPE_THRESHOLD = 60;

interface Props {
	t: Content;
}

export function GalleryPage({ t }: Props) {
	const [activeIndex, setActiveIndex] = useState<number | null>(null);
	const g = t.gallery;

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const openAt = (i: number) => setActiveIndex(i);
	const close = () => setActiveIndex(null);
	const prev = () =>
		setActiveIndex((i) => (i === null ? null : (i - 1 + GALLERY_PHOTO_COUNT) % GALLERY_PHOTO_COUNT));
	const next = () =>
		setActiveIndex((i) => (i === null ? null : (i + 1) % GALLERY_PHOTO_COUNT));

	return (
		<main>
			<section className="section section--white gallery-page">
				<div className="gallery-page__header">
					<Link to="/" className="gallery-page__back">
						&#8592; {g.backLink}
					</Link>
					<span className="section-tag">{g.tag}</span>
					<h1 className="section-title">
						{g.title} <em>{g.titleEm}</em>
					</h1>
					<p className="gallery-page__desc">{g.pageDesc}</p>
				</div>

				<div className="gallery-masonry">
					{Array.from({ length: GALLERY_PHOTO_COUNT }, (_, i) => (
						<Reveal as="div" key={i} delay={(i % 8) * 40} className="gallery-masonry__item">
							<button
								type="button"
								className="gallery-masonry__btn"
								onClick={() => openAt(i)}
								aria-label={`${g.photoLabel} ${i + 1}`}
							>
								<img src={galleryPhotoSrc(i)} alt={`${g.photoLabel} ${i + 1}`} loading="lazy" />
							</button>
						</Reveal>
					))}
				</div>
			</section>

			{activeIndex !== null && (
				<GalleryLightbox
					g={g}
					activeIndex={activeIndex}
					onPrev={prev}
					onNext={next}
					onClose={close}
				/>
			)}
		</main>
	);
}

interface LightboxProps {
	g: Content["gallery"];
	activeIndex: number;
	onPrev: () => void;
	onNext: () => void;
	onClose: () => void;
}

function GalleryLightbox({ g, activeIndex, onPrev, onNext, onClose }: LightboxProps) {
	const touchStartX = useRef<number | null>(null);
	const [dragX, setDragX] = useState(0);

	useEffect(() => {
		const prevOverflow = document.body.style.overflow;
		document.body.style.overflow = "hidden";
		return () => {
			document.body.style.overflow = prevOverflow;
		};
	}, []);

	useEffect(() => {
		const onKey = (e: KeyboardEvent) => {
			if (e.key === "Escape") onClose();
			if (e.key === "ArrowLeft") onPrev();
			if (e.key === "ArrowRight") onNext();
		};
		window.addEventListener("keydown", onKey);
		return () => window.removeEventListener("keydown", onKey);
	}, [onClose, onPrev, onNext]);

	const onTouchStart = (e: React.TouchEvent) => {
		touchStartX.current = e.touches[0].clientX;
	};

	const onTouchMove = (e: React.TouchEvent) => {
		if (touchStartX.current === null) return;
		setDragX(e.touches[0].clientX - touchStartX.current);
	};

	const onTouchEnd = () => {
		if (touchStartX.current === null) return;
		if (dragX > SWIPE_THRESHOLD) onPrev();
		else if (dragX < -SWIPE_THRESHOLD) onNext();
		touchStartX.current = null;
		setDragX(0);
	};

	const closeOnBackdrop = (e: React.MouseEvent) => {
		if (e.target === e.currentTarget) onClose();
	};

	return (
		<div className="lightbox" role="dialog" aria-modal="true" aria-label={g.tag}>
			<button type="button" className="lightbox__close" onClick={onClose} aria-label="Close">
				&#10005;
			</button>
			<div
				className="lightbox__stage"
				onClick={closeOnBackdrop}
				onTouchStart={onTouchStart}
				onTouchMove={onTouchMove}
				onTouchEnd={onTouchEnd}
			>
				<img
					src={galleryPhotoSrc(activeIndex)}
					alt={`${g.photoLabel} ${activeIndex + 1}`}
					draggable={false}
					style={{
						transform: `translateX(${dragX}px)`,
						transition: dragX === 0 ? "transform 0.25s ease" : "none",
					}}
				/>
				<button type="button" className="lightbox__arrow lightbox__arrow--prev" onClick={onPrev} aria-label="Previous">
					&#8592;
				</button>
				<button type="button" className="lightbox__arrow lightbox__arrow--next" onClick={onNext} aria-label="Next">
					&#8594;
				</button>
				<div className="lightbox__counter">
					{activeIndex + 1} / {GALLERY_PHOTO_COUNT}
				</div>
			</div>
		</div>
	);
}
