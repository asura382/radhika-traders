import { useMemo, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import {
  ArrowUpRight,
  ChevronDown,
  Menu,
  Search,
  X,
} from 'lucide-react';
import Brand from './Brand.tsx';
import { categories, products } from '../data/products.ts';

export default function Header() {
  const [shopOpen, setShopOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileShopOpen, setMobileShopOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState('');

  const searchResults = useMemo(() => {
    const value = query.trim().toLowerCase();
    if (!value) return [];
    return products
      .filter((product) =>
        [product.name, product.type, product.finish, product.description, ...product.tags]
          .join(' ')
          .toLowerCase()
          .includes(value),
      )
      .slice(0, 5);
  }, [query]);

  const closePanels = () => {
    setShopOpen(false);
    setSearchOpen(false);
    setMobileOpen(false);
    setMobileShopOpen(false);
  };

  return (
    <header className="site-header">
      <div className="header-topline">
        <span>AN ENDURING APPROACH TO MATERIALS & DETAILS</span>
        <span>PLYWOOD <i>·</i> DOORS <i>·</i> ARCHITECTURAL HARDWARE</span>
      </div>
      <div className="header-inner">
        <Brand />

        <nav className="desktop-nav" aria-label="Main navigation">
          <button
            className={`nav-shop-trigger ${shopOpen ? 'active' : ''}`}
            type="button"
            aria-expanded={shopOpen}
            aria-controls="shop-mega-menu"
            onClick={() => {
              setShopOpen((open) => !open);
              setSearchOpen(false);
            }}
          >
            Collections <ChevronDown size={14} className={shopOpen ? 'rotate' : ''} />
          </button>
          <NavLink to="/gallery" onClick={closePanels}>Inspiration</NavLink>
          <NavLink to="/about" onClick={closePanels}>Our story</NavLink>
          <NavLink to="/contact" onClick={closePanels}>Contact</NavLink>
        </nav>

        <div className="header-actions">
          <button
            className="header-search-button"
            type="button"
            aria-label={searchOpen ? 'Close product search' : 'Search products'}
            aria-expanded={searchOpen}
            onClick={() => {
              setSearchOpen((open) => !open);
              setShopOpen(false);
            }}
          >
            {searchOpen ? <X size={18} /> : <Search size={18} />}
          </button>
          <Link className="button button-gold header-cta" to="/contact#quote" onClick={closePanels}>
            Request a quote <ArrowUpRight size={15} />
          </Link>
          <button
            className="menu-toggle"
            type="button"
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((open) => !open)}
          >
            {mobileOpen ? <X size={21} /> : <Menu size={21} />}
          </button>
        </div>
      </div>

      {shopOpen && (
        <div className="mega-menu" id="shop-mega-menu">
          <div className="mega-menu-intro">
            <span className="eyebrow gold-eyebrow">THE COLLECTIONS</span>
            <h2>Explore by<br /><em>material & detail.</em></h2>
            <p>A considered starting point for every part of your project.</p>
            <Link to="/contact#quote" className="text-link" onClick={closePanels}>
              Need help choosing? <ArrowUpRight size={15} />
            </Link>
          </div>
          <div className="mega-menu-grid">
            {categories.map((category, index) => (
              <Link
                className="mega-menu-item"
                key={category.id}
                to={`/collections/${category.id}`}
                onClick={closePanels}
              >
                <span className="mega-menu-image">
                  <img src={category.image} alt="" />
                  <span>0{index + 1}</span>
                </span>
                <span className="mega-menu-label">
                  <strong>{category.title}</strong>
                  <ArrowUpRight size={15} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      )}

      {searchOpen && (
        <div className="header-search-panel">
          <label className="header-search-field">
            <Search size={18} />
            <input
              autoFocus
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search plywood, doors, handles, locks..."
              aria-label="Search demo product references"
            />
            {query && <button type="button" onClick={() => setQuery('')}>Clear</button>}
          </label>
          <div className="header-search-results">
            {!query.trim() ? (
              <p className="search-hint">Try “walnut”, “brass”, “plywood” or “hinge”.</p>
            ) : searchResults.length ? (
              searchResults.map((product) => (
                <Link key={product.id} to={`/product/${product.id}`} onClick={closePanels}>
                  <img src={product.image} alt="" />
                  <span><strong>{product.name}</strong><small>{product.type} · Illustrative reference</small></span>
                  <ArrowUpRight size={16} />
                </Link>
              ))
            ) : (
              <p className="search-hint">No demo references found. Try another term or browse the collections.</p>
            )}
          </div>
        </div>
      )}

      {mobileOpen && (
        <nav className="mobile-nav" aria-label="Mobile navigation">
          <button
            type="button"
            className="mobile-shop-toggle"
            aria-expanded={mobileShopOpen}
            onClick={() => setMobileShopOpen((open) => !open)}
          >
            Browse collections <ChevronDown size={16} className={mobileShopOpen ? 'rotate' : ''} />
          </button>
          {mobileShopOpen && (
            <div className="mobile-category-list">
              {categories.map((category) => (
                <Link key={category.id} to={`/collections/${category.id}`} onClick={closePanels}>
                  {category.title} <ArrowUpRight size={14} />
                </Link>
              ))}
            </div>
          )}
          <Link to="/gallery" onClick={closePanels}>Inspiration gallery</Link>
          <Link to="/about" onClick={closePanels}>Our story</Link>
          <Link to="/contact" onClick={closePanels}>Contact</Link>
          <Link className="mobile-quote" to="/contact#quote" onClick={closePanels}>
            Request a quote <ArrowUpRight size={15} />
          </Link>
        </nav>
      )}
    </header>
  );
}
