import { useMemo, useState } from 'react';
import { ArrowUpRight, Search, SlidersHorizontal, X } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';
import { categories, products, type CategoryId } from '../data/products.ts';
import ProductCard from '../components/ProductCard.tsx';

export default function Collection() {
  const { categoryId } = useParams();
  const category = categories.find((item) => item.id === categoryId);
  const [query, setQuery] = useState('');
  const [type, setType] = useState('All');
  const [finish, setFinish] = useState('All');
  const [sort, setSort] = useState('featured');

  const categoryProducts = products.filter((product) => product.category === categoryId);
  const types = Array.from(new Set(categoryProducts.map((product) => product.type)));
  const finishes = Array.from(new Set(categoryProducts.map((product) => product.finish)));

  const items = useMemo(() => {
    let list = products.filter((product) => product.category === categoryId);
    const searchValue = query.trim().toLowerCase();

    if (searchValue) {
      list = list.filter((product) =>
        [product.name, product.description, product.type, product.finish, ...product.tags]
          .join(' ')
          .toLowerCase()
          .includes(searchValue),
      );
    }
    if (type !== 'All') list = list.filter((product) => product.type === type);
    if (finish !== 'All') list = list.filter((product) => product.finish === finish);
    if (sort === 'az') list = [...list].sort((a, b) => a.name.localeCompare(b.name));
    if (sort === 'za') list = [...list].sort((a, b) => b.name.localeCompare(a.name));

    return list;
  }, [categoryId, query, type, finish, sort]);

  const clearFilters = () => {
    setQuery('');
    setType('All');
    setFinish('All');
    setSort('featured');
  };

  if (!category) {
    return (
      <section className="not-found section-pad">
        <h1>Collection not found.</h1>
        <Link className="text-link" to="/">Return home <ArrowUpRight size={15} /></Link>
      </section>
    );
  }

  const activeFilters = Boolean(query || type !== 'All' || finish !== 'All');

  return (
    <>
      <section className="collection-hero">
        <img src={category.image} alt={`${category.title} illustrative collection reference`} />
        <div className="collection-hero-shade" />
        <div className="collection-hero-copy">
          <span className="eyebrow gold-eyebrow">{category.eyebrow} / COLLECTION</span>
          <h1>{category.title.split(' & ')[0]}{category.title.includes(' & ') && <><br /><em>& {category.title.split(' & ')[1]}</em></>}</h1>
          <p>{category.intro}</p>
          <Link className="collection-hero-cta" to="/contact#quote">Ask about this collection <ArrowUpRight size={15} /></Link>
        </div>
        <span className="collection-hero-index">RADHIKA TRADERS — COLLECTIONS</span>
      </section>

      <section className="catalogue section-pad">
        <div className="catalogue-top">
          <div>
            <span className="eyebrow">THE COLLECTION / 0{categories.findIndex((item) => item.id === category.id) + 1}</span>
            <h2>Explore the <em>range.</em></h2>
          </div>
          <p>Browse illustrative demo references. Product names, images and specifications are examples, not confirmation of current shop stock.</p>
        </div>

        <div className="catalogue-tools">
          <label className="search-box">
            <Search size={17} />
            <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder={`Search ${category.title.toLowerCase()}...`} />
          </label>
          <label className="filter-select">
            <SlidersHorizontal size={16} />
            <select value={type} onChange={(event) => setType(event.target.value)} aria-label="Filter by product type">
              <option value="All">All types</option>
              {types.map((value) => <option key={value}>{value}</option>)}
            </select>
          </label>
          {finishes.length > 1 && (
            <label className="filter-select">
              <select value={finish} onChange={(event) => setFinish(event.target.value)} aria-label="Filter by finish">
                <option value="All">All finishes</option>
                {finishes.map((value) => <option key={value}>{value}</option>)}
              </select>
            </label>
          )}
          <label className="sort-select">
            <span>SORT</span>
            <select value={sort} onChange={(event) => setSort(event.target.value)} aria-label="Sort products">
              <option value="featured">Featured</option>
              <option value="az">Name: A–Z</option>
              <option value="za">Name: Z–A</option>
            </select>
          </label>
        </div>

        <div className="catalogue-result-row">
          <span>SHOWING <strong>{items.length}</strong> DEMO {items.length === 1 ? 'REFERENCE' : 'REFERENCES'}</span>
          {activeFilters && <button type="button" onClick={clearFilters}>Clear filters <X size={13} /></button>}
        </div>

        {items.length ? (
          <div className="product-grid catalogue-product-grid">
            {items.map((product) => <ProductCard key={product.id} product={product} />)}
          </div>
        ) : (
          <div className="empty-state">
            <span className="eyebrow">NO MATCHES FOUND</span>
            <h3>Nothing in this selection.</h3>
            <p>Try a different search or clear the filters to see all illustrative references in this collection.</p>
            <button className="button button-dark" type="button" onClick={clearFilters}>Clear filters</button>
          </div>
        )}

        <div className="catalogue-next">
          <span>Looking for a specific product or quantity?</span>
          <Link className="text-link" to={`/contact?category=${encodeURIComponent(category.title)}#quote`}>Ask the showroom team <ArrowUpRight size={15} /></Link>
        </div>
        <div className="other-collections">
          <span className="eyebrow">CONTINUE EXPLORING</span>
          <div>
            {categories.filter((item) => item.id !== categoryId as CategoryId).map((item) => (
              <Link to={`/collections/${item.id}`} key={item.id}>{item.title}<ArrowUpRight size={14} /></Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
