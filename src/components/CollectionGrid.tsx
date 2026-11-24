import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { categories } from '../data/products.ts';

export default function CollectionGrid() {
  return (
    <div className="collection-grid">
      {categories.map((category, index) => (
        <Link
          className={`collection-card collection-${index + 1}`}
          to={`/collections/${category.id}`}
          key={category.id}
        >
          <img src={category.image} alt={`${category.title} illustrative reference`} loading="lazy" />
          <span className="collection-shade" />
          <span className="collection-number">0{index + 1} <i>/</i> COLLECTION</span>
          <span className="collection-copy">
            <small>{category.eyebrow}</small>
            <strong>{category.title}</strong>
            <span>{category.description}</span>
            <b>Explore collection <ArrowUpRight size={15} /></b>
          </span>
        </Link>
      ))}
    </div>
  );
}
