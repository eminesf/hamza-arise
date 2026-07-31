import { createElement, type CSSProperties, type ReactNode } from "react";
import { useReveal } from "../hooks/useReveal";

interface RevealProps {
  /** Tag to render. Keep it matched to the semantic element being wrapped (e.g. "article" for a card). */
  as?: keyof JSX.IntrinsicElements;
  /** Stagger delay in ms, for animating a list of items one after another. */
  delay?: number;
  className?: string;
  children: ReactNode;
}

export function Reveal({ as = "div", delay = 0, className, children }: RevealProps) {
  const { ref, visible } = useReveal<HTMLElement>();
  const style = delay ? ({ transitionDelay: `${delay}ms` } as CSSProperties) : undefined;

  return createElement(
    as,
    {
      ref,
      className: ["reveal", visible && "is-visible", className].filter(Boolean).join(" "),
      style,
    },
    children,
  );
}
