import { Link } from 'react-router-dom';

type BrandProps = { light?: boolean; compact?: boolean };

export default function Brand({ light = false, compact = false }: BrandProps) {
  return (
    <Link
      to="/"
      className={`brand ${light ? 'brand-light' : ''} ${compact ? 'brand-compact' : ''}`}
      aria-label="Radhika Traders home"
    >
      <img
        className="brand-mark-image"
        src="/brand-reference/radhika-mark-gold.png"
        alt=""
        aria-hidden="true"
      />
      <span className="brand-copy">
        <strong>RADHIKA TRADERS</strong>
        <small>PLYWOOD · DOORS · HARDWARE</small>
      </span>
    </Link>
  );
}
