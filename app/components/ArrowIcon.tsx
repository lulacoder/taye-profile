export default function ArrowIcon({ up = false, left = false }: { up?: boolean; left?: boolean }) {
  const path = up ? "M12 20V4M5 11l7-7 7 7" : left ? "M21 12H4M11 5l-7 7 7 7" : "M3 12h17M13 5l7 7-7 7";
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d={path} stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
