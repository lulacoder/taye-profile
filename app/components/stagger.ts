import type { CSSProperties } from "react";

// Delay for a scroll-reveal item, read by `.js [data-reveal].is-visible` in globals.css.
export const stagger = (index: number, step = 80): CSSProperties => ({ "--d": `${index * step}ms` }) as CSSProperties;
