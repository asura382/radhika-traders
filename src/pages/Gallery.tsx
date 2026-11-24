const shots = [
  ['Layered plywood construction', '/images/plywood-boards.webp', 'MATERIAL / 01'],
  ['Walnut entrance door', '/images/walnut-door.webp', 'DOORS / 02'],
  ['Brushed brass lever handle', '/images/brass-handle.webp', 'HARDWARE / 03'],
  ['Mortise lock mechanism', '/images/mortise-lock.webp', 'LOCKS / 04'],
  ['Concealed hinge and door stop', '/images/hinge-stopper.webp', 'FITTINGS / 05'],
  ['Antique brass door accessories', '/images/door-accessories.webp', 'DETAILS / 06'],
];

export default function Gallery() {
  return (
    <>
      <section className="page-banner gallery-banner">
        <span className="eyebrow gold-eyebrow">MATERIALS & HARDWARE REFERENCES</span>
        <h1>Details that<br /><em>make a difference.</em></h1>
        <p>A visual collection of wood materials, door designs and architectural hardware. A starting point for ideas, not a record of Radhika Traders customer projects.</p>
      </section>
      <section className="inspiration-grid section-pad">
        {shots.map(([title, url, label], index) => (
          <figure className={`inspiration-item inspiration-${index + 1}`} key={title}>
            <div className="inspiration-image"><img src={url} alt={title} loading="lazy" /><span>{label}</span></div>
            <figcaption><span>0{index + 1}</span>{title}</figcaption>
          </figure>
        ))}
      </section>
      <section className="gallery-disclaimer">
        <span>VISUAL REFERENCES ONLY</span>
        <p>These photographs and catalogue entries are illustrative inspiration. They are not represented as verified inventory, completed projects, customer installations or brand partnerships belonging to Radhika Traders.</p>
      </section>
    </>
  );
}
