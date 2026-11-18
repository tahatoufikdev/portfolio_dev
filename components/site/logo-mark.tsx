// Symbole du logo : l'étoile marocaine à 8 branches (khatam) avec le symbole du code </>.
// Mêmes tracés que public/brand/tahadev-symbole.svg.
export default function LogoMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" aria-hidden="true" className={className}>
      <path
        fill="#0e5c3e"
        d="M50 6.16 L62.84 19 L81 19 L81 37.16 L93.84 50 L81 62.84 L81 81 L62.84 81 L50 93.84 L37.16 81 L19 81 L19 62.84 L6.16 50 L19 37.16 L19 19 L37.16 19 Z"
      />
      <path
        fill="none"
        stroke="#d4af37"
        strokeWidth="2"
        strokeLinejoin="round"
        d="M50 13.17 L60.79 23.96 L76.04 23.96 L76.04 39.21 L86.83 50 L76.04 60.79 L76.04 76.04 L60.79 76.04 L50 86.83 L39.21 76.04 L23.96 76.04 L23.96 60.79 L13.17 50 L23.96 39.21 L23.96 23.96 L39.21 23.96 Z"
      />
      <path
        fill="none"
        stroke="#d4af37"
        strokeWidth="6"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M39 38 L29 50 L39 62 M61 38 L71 50 L61 62"
      />
      <path fill="none" stroke="#ffffff" strokeWidth="5" strokeLinecap="round" d="M54 35 L46 65" />
    </svg>
  );
}
