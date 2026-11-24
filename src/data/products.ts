export type CategoryId = 'plywood' | 'doors' | 'handles' | 'locks' | 'hardware' | 'accessories';

export type Product = {
  id: string;
  name: string;
  category: CategoryId;
  type: string;
  finish: string;
  description: string;
  image: string;
  tags: string[];
  specs: string[];
};

const image = (name: string) => `/images/${name}.webp`;

export const categories: {
  id: CategoryId;
  title: string;
  eyebrow: string;
  description: string;
  image: string;
  intro: string;
}[] = [
  {
    id: 'plywood',
    title: 'Plywood & Boards',
    eyebrow: 'THE FOUNDATION',
    description: 'Layered plywood panels and wood-based board materials.',
    image: image('plywood-boards'),
    intro: 'Explore wood-based panels and board materials. Confirm grades, brands, thicknesses and sheet sizes with the showroom.',
  },
  {
    id: 'doors',
    title: 'Doors & Designs',
    eyebrow: 'A FIRST IMPRESSION',
    description: 'Walnut-toned entrance doors and considered timber finishes.',
    image: image('walnut-door'),
    intro: 'Discover visual references for contemporary and classic door styles. The designs shown are illustrative references, not confirmed stock.',
  },
  {
    id: 'handles',
    title: 'Door Handles',
    eyebrow: 'THE FINISHING TOUCH',
    description: 'Brushed brass lever hardware with a clean architectural profile.',
    image: image('brass-handle'),
    intro: 'Explore handle shapes and finishes through a visual reference. Ask the team to confirm available models, finishes and compatibility.',
  },
  {
    id: 'locks',
    title: 'Locks & Security',
    eyebrow: 'CONFIDENCE IN EVERY DETAIL',
    description: 'Mortise lock bodies and cylinder hardware for door applications.',
    image: image('mortise-lock'),
    intro: 'Browse common lock formats and locking hardware. Suitability, security specifications and compatibility should be confirmed for each product.',
  },
  {
    id: 'hardware',
    title: 'Hinges & Fittings',
    eyebrow: 'PRECISION IN MOTION',
    description: 'Concealed hinges and door stops for considered installations.',
    image: image('concealed-hinge-detail'),
    intro: 'Explore hinges and functional fittings for different installation needs. Product dimensions, load ratings and suitability are not assumed.',
  },
  {
    id: 'accessories',
    title: 'Door Accessories',
    eyebrow: 'THE SMALL DETAILS',
    description: 'Bolts, stops and complementary finishing fittings.',
    image: image('tower-bolt-detail'),
    intro: 'Discover complementary door accessories and finishing details. This demo collection can be tailored to the actual inventory.',
  },
];

export const products: Product[] = [
  {
    id: 'ply-01',
    name: 'Layered Plywood Panel',
    category: 'plywood',
    type: 'Plywood panel',
    finish: 'Natural wood face',
    description: 'A visual reference showing a natural wood face and multiple bonded layers along the panel edge.',
    image: image('plywood-boards'),
    tags: ['panel', 'layers', 'board', 'wood'],
    specs: ['Grade: confirm with showroom', 'Thickness: enquire', 'Sheet size: enquire'],
  },
  {
    id: 'ply-02',
    name: 'Natural Wood-Face Board',
    category: 'plywood',
    type: 'Board material',
    finish: 'Natural grain reference',
    description: 'A closer material study of the wood-face surface and layered board construction.',
    image: image('plywood-face-detail'),
    tags: ['wood face', 'grain', 'interior', 'board'],
    specs: ['Exact board type: enquire', 'Surface: illustrative reference', 'Brand: to be confirmed'],
  },
  {
    id: 'ply-03',
    name: 'Layered Edge Profile',
    category: 'plywood',
    type: 'Plywood detail',
    finish: 'Exposed ply edge',
    description: 'A close-up reference of the alternating wood layers visible along a plywood panel edge.',
    image: image('plywood-edge-detail'),
    tags: ['edge', 'layers', 'plywood', 'construction'],
    specs: ['Core construction: confirm', 'Thickness: enquire', 'Application: discuss with showroom'],
  },
  {
    id: 'door-01',
    name: 'Walnut Entrance Reference',
    category: 'doors',
    type: 'Contemporary entrance',
    finish: 'Dark walnut reference',
    description: 'A clean-lined timber-look entrance door presented in a warm, softly lit interior.',
    image: image('walnut-door'),
    tags: ['modern', 'walnut', 'entrance', 'timber'],
    specs: ['Material: illustrative', 'Finish: walnut look', 'Dimensions: enquire'],
  },
  {
    id: 'door-02',
    name: 'Panelled Walnut Detail',
    category: 'doors',
    type: 'Panelled style',
    finish: 'Dark timber reference',
    description: 'A closer study of the horizontal panel lines and timber grain in a contemporary door design.',
    image: image('walnut-panel-detail'),
    tags: ['panel', 'walnut', 'minimal', 'timber'],
    specs: ['Construction: illustrative', 'Finish: sample reference', 'Dimensions: enquire'],
  },
  {
    id: 'hand-01',
    name: 'Brushed Brass Lever',
    category: 'handles',
    type: 'Lever handle',
    finish: 'Brushed brass reference',
    description: 'A straight-form brushed brass lever mounted on a dark timber door, shown as a finish and form reference.',
    image: image('brass-handle'),
    tags: ['lever', 'brass', 'handle', 'gold'],
    specs: ['Finish: illustrative', 'Material: enquire', 'Size and fixing: enquire'],
  },
  {
    id: 'lock-01',
    name: 'Mortise Lock Body & Cylinder',
    category: 'locks',
    type: 'Mortise lock',
    finish: 'Brass and satin metal reference',
    description: 'A mortise lock body and cylinder shown as a hardware reference. Confirm configuration and compatibility before selection.',
    image: image('mortise-lock'),
    tags: ['mortise', 'cylinder', 'lock', 'security'],
    specs: ['Configuration: enquire', 'Finish: illustrative', 'Door compatibility: confirm'],
  },
  {
    id: 'hw-01',
    name: 'Concealed Hinge',
    category: 'hardware',
    type: 'Concealed hinge',
    finish: 'Satin metal reference',
    description: 'A concealed hinge assembly shown open to reveal its pivoting mechanism and compact form.',
    image: image('concealed-hinge-detail'),
    tags: ['hinge', 'concealed', 'satin', 'fitting'],
    specs: ['Opening angle: enquire', 'Load rating: enquire', 'Dimensions: enquire'],
  },
  {
    id: 'hw-02',
    name: 'Floor-Mounted Door Stopper',
    category: 'hardware',
    type: 'Door stopper',
    finish: 'Brushed brass reference',
    description: 'A compact floor-mounted stopper shown as an example of a functional finishing fitting.',
    image: image('door-stopper-detail'),
    tags: ['stopper', 'brass', 'floor', 'fitting'],
    specs: ['Mounting: enquire', 'Finish: illustrative', 'Material: enquire'],
  },
  {
    id: 'acc-01',
    name: 'Antique Brass Tower Bolt',
    category: 'accessories',
    type: 'Door bolt',
    finish: 'Antique brass reference',
    description: 'A surface-mounted brass tower bolt shown as a decorative and functional door accessory reference.',
    image: image('tower-bolt-detail'),
    tags: ['bolt', 'brass', 'tower bolt', 'accessory'],
    specs: ['Length: enquire', 'Finish: illustrative', 'Material: enquire'],
  },
  {
    id: 'acc-02',
    name: 'Decorative Brass Wall Hook',
    category: 'accessories',
    type: 'Wall hook',
    finish: 'Antique brass reference',
    description: 'A decorative double hook shown as a complementary hardware detail for interior spaces.',
    image: image('brass-hook-detail'),
    tags: ['hook', 'brass', 'decorative', 'accessory'],
    specs: ['Mounting: enquire', 'Finish: illustrative', 'Dimensions: enquire'],
  },
];
