export const GALLERY_PHOTO_COUNT = 44;

export const galleryPhotoSrc = (i: number) =>
	`/photos/photo-${String(i + 1).padStart(2, "0")}.webp`;
