import { useEffect, useState } from "react";

/**
 * Tracks which of the given section ids is currently under the fixed nav bar
 * while scrolling. Returns null when none of them are (e.g. back up in the hero).
 */
export function useActiveSection(ids: string[]): string | null {
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    if (elements.length === 0) return;

    // Track intersection state cumulatively: a callback batch only reports the
    // elements whose state just changed, not every observed element.
    const intersecting = new Map<string, DOMRectReadOnly>();

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            intersecting.set(entry.target.id, entry.boundingClientRect);
          } else {
            intersecting.delete(entry.target.id);
          }
        }

        if (intersecting.size === 0) {
          setActive(null);
          return;
        }

        const [topMostId] = [...intersecting.entries()].reduce((a, b) =>
          a[1].top <= b[1].top ? a : b,
        );
        setActive(topMostId);
      },
      { rootMargin: "-100px 0px -70% 0px", threshold: 0 },
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [ids]);

  return active;
}
