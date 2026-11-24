import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import type { Product } from '../data/products.ts';

export default function ProductCard({ product }: { product: Product }) {
  return (
    <article className="product-card">
      <Link to={`/product/${product.id}`} className="product-image" aria-label={`View ${product.name}`}>
        <img src={product.image} alt={`${product.name} illustrative product reference`} loading="lazy" />
        <span className="product-image-tag">DEMO REFERENCE</span>
        <span className="image-arrow"><ArrowUpRight size={17} /></span>
      </Link>
      <div className="product-meta">
        <span>{product.type}</span>
        <span>{product.finish}</span>
      </div>
      <h3><Link to={`/product/${product.id}`}>{product.name}</Link></h3>
      <p>{product.description}</p>
      <Link className="text-link" to={`/product/${product.id}`}>
        View reference <ArrowUpRight size={14} />
      </Link>
    </article>
  );
}
