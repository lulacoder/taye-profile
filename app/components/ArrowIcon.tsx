export default function ArrowIcon({ up = false }: { up?: boolean }) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d={up ? "M12 20V4M5 11l7-7 7 7" : "M3 12h17M13 5l7 7-7 7"}
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
