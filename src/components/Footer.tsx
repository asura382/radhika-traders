import { ArrowUpRight, MapPin, Phone, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import Brand from './Brand.tsx';
import { categories } from '../data/products.ts';
import { business, isPhoneConfigured } from '../config/business.ts';

function InstagramMark({ size = 15 }: { size?: number }) {
  return (
    <svg
      aria-hidden="true"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.9" fill="currentColor" stroke="none" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-topline">
        <span>GOOD SPACES BEGIN WITH GOOD CHOICES.</span>
        <span>RADHIKA TRADERS <i>·</i> PLYWOOD · DOORS · HARDWARE</span>
      </div>
      <div className="footer-main">
        <div className="footer-brand">
          <Brand light />
          <p>Materials for considered spaces. Explore plywood, door designs and the finishing details that bring them together.</p>
          <Link className="text-link" to="/contact#quote">Start an enquiry <ArrowUpRight size={15} /></Link>
        </div>
        <div className="footer-column">
          <span className="footer-label">EXPLORE COLLECTIONS</span>
          {categories.map((category) => (
            <Link key={category.id} to={`/collections/${category.id}`}>{category.title}</Link>
          ))}
        </div>
        <div className="footer-column">
          <span className="footer-label">THE SHOWROOM</span>
          <Link to="/about">Our story</Link>
          <Link to="/gallery">Inspiration gallery</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/contact#quote">Request a quotation</Link>
        </div>
        <div className="footer-column footer-contact">
          <span className="footer-label">VISIT & CONNECT</span>
          <p><MapPin size={15} />{business.address || 'Showroom address to be confirmed'}</p>
          <p><Phone size={15} />{business.phoneNumber || 'Phone number to be confirmed'}</p>
          <p><Mail size={15} />{business.email || 'Email address to be confirmed'}</p>
          {business.instagram && <a href={business.instagram} target="_blank" rel="noreferrer"><InstagramMark size={15} />Instagram <ArrowUpRight size={13} /></a>}
          {isPhoneConfigured && <a href={`tel:${business.phoneNumber}`}><Phone size={15} />Call the showroom <ArrowUpRight size={13} /></a>}
        </div>
      </div>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} Radhika Traders. All rights reserved.</span>
        <span>Product imagery and catalogue entries are illustrative demo references.</span>
        <Link to="/">Back to top ↑</Link>
      </div>
    </footer>
  );
}
