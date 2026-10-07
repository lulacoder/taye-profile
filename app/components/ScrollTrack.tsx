"use client";

import { useEffect, useRef, useState } from "react";
import ArrowIcon from "./ArrowIcon";

// Horizontal scroll-snap row with previous and next buttons.
export default function ScrollTrack({ children, label }: { children: React.ReactNode; label: string }) {
  const track = useRef<HTMLUListElement>(null);
  const [edge, setEdge] = useState({ start: true, end: false });

  const measure = () => {
    const el = track.current;
    if (!el) return;
    const start = el.scrollLeft <= 4;
    const end = el.scrollLeft + el.clientWidth >= el.scrollWidth - 4;
    setEdge((prev) => (prev.start === start && prev.end === end ? prev : { start, end }));
  };

  useEffect(() => {
    const el = track.current;
    if (!el) return;
    const observer = new ResizeObserver(measure);
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const move = (direction: 1 | -1) => {
    const el = track.current;
    if (el) el.scrollBy({ left: direction * el.clientWidth * 0.8, behavior: "smooth" });
  };

  return (
    <div className="track-wrap">
      <div className="track-controls">
        <button type="button" className="track-button" onClick={() => move(-1)} disabled={edge.start} aria-label={`Previous ${label}`}>
          <ArrowIcon left />
        </button>
        <button type="button" className="track-button" onClick={() => move(1)} disabled={edge.end} aria-label={`Next ${label}`}>
          <ArrowIcon />
        </button>
      </div>
      <ul className="track" ref={track} onScroll={measure} tabIndex={0} aria-label={label}>
        {children}
      </ul>
    </div>
  );
}
