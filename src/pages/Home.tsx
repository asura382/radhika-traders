import { ArrowDown, ArrowUpRight, MoveUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import CollectionGrid from '../components/CollectionGrid.tsx';
import ProductCard from '../components/ProductCard.tsx';
import QuoteForm from '../components/QuoteForm.tsx';
import { products } from '../data/products.ts';

export default function Home() {
  const featuredProducts = products.filter((product) =>
    ['handles', 'locks', 'hardware'].includes(product.category),
  );

  return (
    <>
      <section className="hero">
        <img className="hero-image" src="/images/walnut-door.webp" alt="Walnut-toned entrance door in a warm architectural interior" fetchPriority="high" />
        <div className="hero-overlay" />
        <div className="hero-frame" />
        <div className="hero-content">
          <span className="eyebrow gold-eyebrow hero-kicker">MATERIALS THAT SHAPE THE EVERYDAY</span>
          <h1>The foundation<br />of <em>beautiful spaces.</em></h1>
          <p>Discover thoughtfully selected plywood, considered door designs and architectural hardware for the details that make a space yours.</p>
          <div className="hero-actions">
            <a className="button button-gold" href="#collections">Explore collections <ArrowUpRight size={16} /></a>
            <Link className="button button-outline" to="/contact#quote">Request a quote</Link>
          </div>
        </div>
        <div className="hero-bottom">
          <span>RADHIKA TRADERS <i>—</i> PLYWOOD · DOORS · HARDWARE</span>
          <a href="#intro">SCROLL TO EXPLORE <ArrowDown size={13} /></a>
        </div>
        <div className="hero-index">01 <span>/</span> 06</div>
      </section>

      <div className="material-ribbon" aria-label="Product categories">
        <span>PLYWOOD & BOARDS</span><i />
        <span>DOOR DESIGNS</span><i />
        <span>HANDLES & LOCKS</span><i />
        <span>ARCHITECTURAL HARDWARE</span><i />
        <span>THE FINISHING DETAILS</span>
      </div>

      <section className="intro section-pad" id="intro">
        <div className="intro-kicker">
          <span className="eyebrow">A MATERIALS & HARDWARE DESTINATION</span>
          <span className="gold-rule" />
          <span className="intro-index">EST. IN YOUR NEXT PROJECT</span>
        </div>
        <div className="intro-main">
          <div><h2>Where quality<br />meets <em>design.</em></h2></div>
          <div className="intro-text">
            <p>From the foundation of your interiors to the finishing touch on every door, explore materials and hardware that bring ideas together.</p>
            <Link className="text-link" to="/about">Discover Radhika Traders <ArrowUpRight size={15} /></Link>
          </div>
        </div>
        <div className="intro-images">
          <div className="intro-image-large">
            <img src="/images/plywood-boards.webp" alt="Close-up of layered plywood boards showing the timber face and bonded plies" loading="lazy" />
            <span>01 — MATERIAL & TEXTURE</span>
          </div>
          <div className="intro-image-small">
            <img src="/images/brass-handle.webp" alt="Brushed brass door lever on dark timber" loading="lazy" />
            <span>02 — FORM & FUNCTION</span>
          </div>
        </div>
      </section>

      <section className="collections-section section-pad" id="collections">
        <div className="section-heading">
          <div>
            <span className="eyebrow">EXPLORE THE RANGE</span>
            <h2>Considered collections.<br /><em>Distinctive details.</em></h2>
          </div>
          <div className="section-heading-aside">
            <p>Move through materials, door styles and architectural fittings in a curated visual catalogue.</p>
            <span>06 COLLECTIONS <i>·</i> ONE PLACE TO BEGIN</span>
          </div>
        </div>
        <CollectionGrid />
      </section>

      <section className="editorial-split">
        <div className="editorial-image editorial-image-door">
          <img src="/images/walnut-door.webp" alt="Dark walnut entrance door with a long vertical pull handle" loading="lazy" />
          <span>DESIGN STUDY / 01</span>
        </div>
        <div className="editorial-copy">
          <span className="eyebrow gold-eyebrow">DOORS & DESIGN REFERENCES</span>
          <h2>Every entrance<br />sets a <em>tone.</em></h2>
          <p>Explore visual references for contemporary and classic door styles, from quiet minimalism to expressive timber finishes. The images are inspiration references, not confirmed stock or completed installations.</p>
          <Link className="button button-gold" to="/collections/doors">Discover door designs <ArrowUpRight size={16} /></Link>
          <div className="editorial-footnote"><span>01</span><i /> MATERIAL, PROPORTION, PRESENCE</div>
        </div>
      </section>

      <section className="featured-products section-pad">
        <div className="section-heading">
          <div>
            <span className="eyebrow">THE FINISHING DETAILS</span>
            <h2>Hardware with<br /><em>character.</em></h2>
          </div>
          <div className="section-heading-aside">
            <p>Small details can change how a door looks, feels and works. Explore hardware references by type and finish.</p>
            <Link className="text-link" to="/collections/handles">Explore all hardware <ArrowUpRight size={15} /></Link>
          </div>
        </div>
        <div className="product-grid">
          {featuredProducts.slice(0, 3).map((product) => <ProductCard key={product.id} product={product} />)}
        </div>
      </section>

      <section className="material-note">
        <div className="material-note-image"><img src="/images/door-accessories.webp" alt="Antique brass door accessories and fittings" loading="lazy" /></div>
        <div className="material-note-copy">
          <span className="eyebrow gold-eyebrow">THE DETAILS MATTER</span>
          <h2>Designed to be<br /><em>noticed up close.</em></h2>
          <p>From the feel of a handle to the movement of a hinge, explore the fittings that complete a door. Ask the showroom team about available options and compatibility.</p>
          <Link className="text-link" to="/collections/hardware">Explore door hardware <ArrowUpRight size={15} /></Link>
        </div>
      </section>

      <section className="values-section">
        <div className="values-heading">
          <span className="eyebrow gold-eyebrow">THE RADHIKA APPROACH</span>
          <h2>Good spaces begin<br />with <em>good choices.</em></h2>
          <p>A considered place to discover materials, compare design references and discuss what your project needs.</p>
        </div>
        <div className="values-grid">
          {[
            ['01', 'A range of interior materials', 'Explore material options for different spaces and applications.'],
            ['02', 'Door & hardware collections', 'Bring together door designs and the details that complete them.'],
            ['03', 'Assistance in product selection', 'Discuss available options and specifications for your requirements.'],
            ['04', 'Personalised customer support', 'Speak with the showroom team about your project and quantity needs.'],
          ].map(([number, title, copy]) => (
            <div className="value-item" key={number}>
              <span>{number}</span><h3>{title}</h3><p>{copy}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="audience-section section-pad">
        <div>
          <span className="eyebrow">FOR EVERY KIND OF PROJECT</span>
          <h2>Made for the<br /><em>people who build.</em></h2>
          <p className="audience-intro">Whether you're shaping a home or specifying a larger project, start with the materials and details that matter to you.</p>
        </div>
        <div className="audience-list">
          {[
            ['01', 'Homeowners', 'Find materials and details for a space that feels like yours.'],
            ['02', 'Architects & interior designers', 'Explore finish and hardware options for your design intent.'],
            ['03', 'Contractors & builders', 'Enquire about material requirements and project quantities.'],
            ['04', 'Carpenters & furniture professionals', 'Discuss boards, fittings and practical product specifications.'],
          ].map(([number, title, copy]) => (
            <div className="audience-row" key={number}>
              <span>{number}</span><div><h3>{title}</h3><p>{copy}</p></div><MoveUpRight size={19} />
            </div>
          ))}
        </div>
      </section>

      <section className="gallery-strip">
        <div className="gallery-strip-heading">
          <span className="eyebrow gold-eyebrow">A LITTLE INSPIRATION</span>
          <h2>Details worth<br /><em>looking closer.</em></h2>
          <p>Materials, textures and fittings presented as a visual starting point for your next project.</p>
          <Link className="text-link" to="/gallery">View inspiration gallery <ArrowUpRight size={15} /></Link>
        </div>
        <div className="gallery-strip-images">
          <img src="/images/walnut-door.webp" alt="Walnut entrance door inspiration" loading="lazy" />
          <img src="/images/plywood-boards.webp" alt="Layered plywood material reference" loading="lazy" />
          <img src="/images/mortise-lock.webp" alt="Mortise lock and cylinder detail" loading="lazy" />
        </div>
      </section>

      <section className="quote-section section-pad" id="quote">
        <div className="quote-intro">
          <span className="eyebrow gold-eyebrow">LET'S TALK ABOUT YOUR PROJECT</span>
          <h2>Let's find the right<br />material for <em>your project.</em></h2>
          <p>Tell us what you're looking for. The showroom team can help you explore product options and request a quotation.</p>
          <div className="quote-note">A GOOD PROJECT STARTS WITH A CONVERSATION.</div>
        </div>
        <QuoteForm defaultCategory="Other" />
      </section>
    </>
  );
}
