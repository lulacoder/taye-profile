"use client";

import { useEffect, useRef } from "react";

const numeric = /^(\D*)(\d+)(\D*)$/;

// Server HTML contains the final value. On the client the number counts up
// once when it scrolls into view. Values without a number render as-is.
export default function CountUp({ value, duration = 1400, delay = 150 }: { value: string; duration?: number; delay?: number }) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    const match = numeric.exec(value);
    if (!el || !match || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const [, prefix, digits, suffix] = match;
    const target = Number(digits);
    let frame = 0;
    let timer = 0;

    el.textContent = `${prefix}0${suffix}`;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();
        timer = window.setTimeout(() => {
          const start = performance.now();
          const tick = (now: number) => {
            const t = Math.min(1, (now - start) / duration);
            el.textContent = `${prefix}${Math.round(target * (1 - Math.pow(1 - t, 3)))}${suffix}`;
            if (t < 1) frame = requestAnimationFrame(tick);
          };
          frame = requestAnimationFrame(tick);
        }, delay);
      },
      { threshold: 0.6 },
    );
    observer.observe(el);

    return () => {
      observer.disconnect();
      window.clearTimeout(timer);
      cancelAnimationFrame(frame);
      el.textContent = value;
    };
  }, [value, duration, delay]);

  return <span ref={ref}>{value}</span>;
}
