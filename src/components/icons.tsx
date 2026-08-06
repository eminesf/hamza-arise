export function InstagramIcon({ color }: { color: string }) {
  return (
    <svg width={20} height={20} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x={2} y={2} width={20} height={20} rx={5} stroke={color} strokeWidth={1.8} />
      <circle cx={12} cy={12} r={4.2} stroke={color} strokeWidth={1.8} />
      <circle cx={17.2} cy={6.8} r={1.1} fill={color} />
    </svg>
  );
}

export function UsFlag() {
  return (
    <svg width={20} height={14} viewBox="0 0 20 14" style={{ borderRadius: 2, flexShrink: 0 }} aria-hidden="true">
      <rect width={20} height={14} fill="#B22234" />
      {[1, 3, 5, 7, 9, 11, 13].map((y) => (
        <rect key={y} y={y} width={20} height={1.08} fill="#fff" />
      ))}
      <rect width={8} height={7.5} fill="#3C3B6E" />
    </svg>
  );
}

export function BrFlag() {
  return (
    <svg width={20} height={14} viewBox="0 0 20 14" style={{ borderRadius: 2, flexShrink: 0 }} aria-hidden="true">
      <rect width={20} height={14} fill="#009739" />
      <polygon points="10,2 18,7 10,12 2,7" fill="#FEDD00" />
      <circle cx={10} cy={7} r={3} fill="#012169" />
    </svg>
  );
}

export function EsFlag() {
  return (
    <svg width={20} height={14} viewBox="0 0 20 14" style={{ borderRadius: 2, flexShrink: 0 }} aria-hidden="true">
      <rect width={20} height={14} fill="#AA151B" />
      <rect y={3.5} width={20} height={7} fill="#F1BF00" />
    </svg>
  );
}
