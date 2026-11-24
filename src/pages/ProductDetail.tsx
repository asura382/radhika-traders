import { ArrowLeft, ArrowUpRight, Check, MessageCircle } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';
import ProductCard from '../components/ProductCard.tsx';
import { categories, products } from '../data/products.ts';

export default function ProductDetail() {
  const { productId } = useParams();
  const product = products.find((item) => item.id === productId);

  if (!product) {
    return (
      <section className="not-found section-pad">
        <h1>Product reference not found.</h1>
        <Link to="/" className="text-link">Return home <ArrowUpRight size={15} /></Link>
      </section>
    );
  }

  const category = categories.find((item) => item.id === product.category);
  const related = products.filter((item) => item.category === product.category && item.id !== product.id);
  const enquiryUrl = `/contact?product=${encodeURIComponent(product.name)}&category=${encodeURIComponent(category?.title ?? 'Other')}#quote`;

  return (
    <section className="product-detail section-pad">
      <Link className="back-link" to={`/collections/${product.category}`}><ArrowLeft size={15} /> Back to {category?.title ?? 'collection'}</Link>
      <div className="detail-layout">
        <div className="detail-image">
          <img src={product.image} alt={`${product.name} illustrative product reference`} />
          <span>ILLUSTRATIVE DEMO REFERENCE</span>
        </div>
        <div className="detail-copy">
          <span className="eyebrow">{category?.title.toUpperCase()} / {product.type.toUpperCase()}</span>
          <h1>{product.name}</h1>
          <p className="detail-description">{product.description}</p>
          <div className="detail-finish"><span>VISUAL FINISH</span><strong>{product.finish}</strong></div>
          <div className="detail-specs">
            <span className="eyebrow">REFERENCE DETAILS</span>
            {product.specs.map((specification) => (
              <div key={specification}><Check size={15} />{specification}</div>
            ))}
          </div>
          <p className="detail-disclaimer">This is illustrative catalogue content. Confirm the actual product, brand, finish, dimensions, specifications and availability with Radhika Traders.</p>
          <div className="detail-actions">
            <Link className="button button-gold" to={enquiryUrl}>Enquire about this product <ArrowUpRight size={16} /></Link>
            <Link className="detail-text-action" to="/contact#quote"><MessageCircle size={15} /> Request a quotation</Link>
          </div>
          <p className="detail-price">PRICE ON REQUEST <span>·</span> AVAILABILITY TO BE CONFIRMED</p>
        </div>
      </div>
      {related.length > 0 && (
        <div className="related">
          <div className="related-heading"><span className="eyebrow">EXPLORE MORE</span><h2>More from <em>{category?.title ?? 'this collection'}.</em></h2></div>
          <div className="product-grid related-grid">
            {related.map((item) => <ProductCard key={item.id} product={item} />)}
          </div>
        </div>
      )}
    </section>
  );
}
