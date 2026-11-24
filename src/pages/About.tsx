import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function About() {
  return (
    <>
      <section className="about-hero">
        <img src="/images/walnut-door.webp" alt="Walnut entrance door in a warm architectural interior" />
        <div className="about-hero-copy">
          <span className="eyebrow gold-eyebrow">ABOUT RADHIKA TRADERS</span>
          <h1>Materials, design<br />& <em>the details.</em></h1>
          <p>A place to explore plywood, doors and the hardware that brings every detail together.</p>
        </div>
        <span className="about-hero-index">MATERIALS · DESIGN · DETAILS</span>
      </section>
      <section className="about-story section-pad">
        <div><span className="eyebrow">A PLACE TO EXPLORE</span><h2>Thoughtful choices<br />shape <em>better spaces.</em></h2></div>
        <div>
          <p>Radhika Traders is a local business offering plywood, doors and related hardware such as handles, locks and fittings. This digital showroom brings those product categories together in one considered browsing experience.</p>
          <p>Whether you're planning a home, specifying an interior or working on site, the right product details matter. Explore the visual references, then speak with the showroom team to confirm actual products, specifications and availability.</p>
          <Link className="button button-dark" to="/contact">Talk to the team <ArrowUpRight size={16} /></Link>
        </div>
      </section>
      <section className="about-image-row">
        <div><img src="/images/plywood-boards.webp" alt="Layered plywood boards and wood grain" /><span>01 — MATERIALS</span></div>
        <div><img src="/images/brass-handle.webp" alt="Brushed brass door handle detail" /><span>02 — HARDWARE</span></div>
      </section>
      <section className="about-principles">
        <span className="eyebrow gold-eyebrow">WHAT YOU CAN EXPLORE</span>
        <div><h2>One destination.<br /><em>Many possibilities.</em></h2><p>Browse plywood and boards, door styles, handles, locks, hinges and accessories. Product information and availability are confirmed directly with the showroom.</p></div>
      </section>
    </>
  );
}
