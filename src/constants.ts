import { Service, Testimonial, ProcessStep } from './types';

// ==========================================
// CENTRAL BUSINESS CONFIGURATION (PLACEHOLDERS)
// ==========================================
export const CUSTOMER_COUNT = "4,500+";

export const PRICING_CONFIG = {
  // Services detailed start prices
  PAINTING_PRICE: "Rates on Request",
  WATERPROOFING_PRICE: "Free Cost Estimate",
  PEST_CONTROL_PRICE: "Contact for Rates",
  DECORATION_PRICE: "Quote on Request",

  // Instant Price Estimator Tiers (Synced Source)
  ESTIMATOR: {
    ECONOMY: "9", // Synced with primary starting painting price
    PREMIUM: "16",
    LUXURY: "28"
  }
};

export const SERVICES: Service[] = [
  {
    id: '1',
    title: 'Home Painting',
    slug: 'home-painting',
    shortDescription: 'Transform your Agra home with premium interior and exterior painting services.',
    description: 'Our professional painting services are designed to give your Agra home a fresh, vibrant, and stunning look. We use high-quality, eco-friendly paints and expert dust-free techniques to ensure a flawless finish that lasts for years.',
    icon: 'PaintBucket',
    benefits: [
      'Premium quality paints (Asian Paints, Berger, etc.)',
      'Expert color planning and consulting',
      'Dust-free execution with advanced tools',
      'On-time completion guaranteed',
      'Up to 5 years warranty on workmanship'
    ],
    process: [
      'Surface Preparation & Crack Filling',
      'Primer Coating Application',
      'Wall Putty & Precision Smoothing',
      'Double Coat Premium Emulsion Paint',
      'Final Joint Inspection & Cleanup'
    ],
    image: '/images/home_painting_india_1782118577625.jpg',
    startingPrice: PRICING_CONFIG.PAINTING_PRICE
  },
  {
    id: '2',
    title: 'Waterproofing',
    slug: 'waterproofing',
    shortDescription: 'Protect your ceilings, walls, and roofs from dampness and leakage in Agra.',
    description: 'Don\'t let severe water leakage ruin your valuable property. Our advanced chemical waterproofing treatments provide a robust 7-layer shield against Agra moisture, preventing cracks, mold, dampness, and structural decay inside your rooms, terraces, and external walls.',
    icon: 'Droplets',
    benefits: [
      '7-Layer advanced chemical protection',
      'Trained Dr. Fixit certified applicators',
      'Stops dampness & structural damp lines',
      'Odorless & environment safe',
      'Longest warranty up to 10 years'
    ],
    process: [
      'Source Spotting & Leak Identification',
      'Surface Cleaning & Crack Sealing',
      'Base Waterproof Seal Coating',
      'Dr. Fixit Fiber Mesh Reinforcement',
      'Water Ponding Integrity Test'
    ],
    image: '/images/indian_waterproofing_expert_1782125292107.jpg',
    startingPrice: PRICING_CONFIG.WATERPROOFING_PRICE
  },
  {
    id: '3',
    title: 'Pest Control',
    slug: 'pest-control',
    shortDescription: 'Safe, odorless, and highly effective pest control for Agra homes and workspaces.',
    description: 'Banish termites, bedbugs, cockroaches, and rodents safely. We use licensed, organic/herbal, and government-approved odorless chemicals to keep your Agra home or commercial space safe for children, pets, and senior citizens.',
    icon: 'Bug',
    benefits: [
      'Certified and well-trained technicians',
      'Kids, elderly, and pet-friendly solutions',
      '100% odorless & hassle-free treatment',
      'Termite drill-fill-seal protection',
      'Free check-up after 15 days'
    ],
    process: [
      'Intensified Area Pest Infestation Audit',
      'Targeted Herbal Injection / Spray Spraying',
      'Strategic Gel Baiting in Kitchen & Pantries',
      'Sealing of Pest Access & Entry Points',
      'Periodic Monitoring and Follow-Up Sheet'
    ],
    image: '/images/indian_pest_expert_1782125215240.jpg',
    startingPrice: PRICING_CONFIG.PEST_CONTROL_PRICE
  },
  {
    id: '4',
    title: 'Home Decoration',
    slug: 'home-decoration',
    shortDescription: 'Elevate your home aesthetics with premium wallpaper, textures, and paneling.',
    description: 'Your home deserves a personalized touch. Our home decoration experts specialize in premium wallpaper installation, customized texture painting, design wall panels, and interior styling services to create the perfect dream ambiance in Agra.',
    icon: 'Sparkles',
    benefits: [
      'Stunning designer wallpaper collections',
      'Unique customized textured feature walls',
      'Expert interior styling consultation',
      'Flawless bubble-free wallpaper installation',
      '100% clean, dust-free & fast service execution'
    ],
    process: [
      'Design Consultation & Sample Choosing',
      'Surface Flaw Correction & Smoothing',
      'Precise Wall Measurement & Adhesive Prep',
      'Flawless Fitting and Alignment Check',
      'Final Decorative Styling and Handover'
    ],
    image: '/images/home_decoration_expert_1782125118424.jpg',
    startingPrice: PRICING_CONFIG.DECORATION_PRICE
  }
];

// --- TESTIMONIALS SECTION ---
// You can edit, add, or remove items here. Each item will automatically render on the page.
export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Rahul Sharma',
    role: 'Homeowner, Dayalbagh, Agra',
    content: 'Grah Solutions did an outstanding job painting our house on a tight deadline. No mess left behind, highly professional team!',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=150&h=150',
    projectImage: 'https://images.unsplash.com/photo-1562663474-6cbb3fee4c77?auto=format&fit=crop&q=80&w=650',
    projectImages: [
      'https://images.unsplash.com/photo-1562663474-6cbb3fee4c77?auto=format&fit=crop&q=80&w=600',
      'https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?auto=format&fit=crop&q=80&w=600',
      'https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&q=80&w=600'
    ]
  },
  {
    id: '2',
    name: 'Mrs. Neha Gupta',
    role: 'Villa Owner, Kamla Nagar, Agra',
    content: 'Their waterproofing team completely resolved our persistent basement leakage within 4 days. Absolutely worth the price!',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=150&h=150',
    projectImage: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&q=80&w=650',
    projectImages: [
      'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&q=80&w=600',
      'https://images.unsplash.com/photo-1590069261209-f8e9b8642343?auto=format&fit=crop&q=80&w=600',
      'https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&q=80&w=600'
    ]
  },
  {
    id: '3',
    name: 'Mr. Amit Verma',
    role: 'Apartment Owner, Sikandra, Agra',
    content: 'Odorless and children-friendly pest treatment. Zero cockroaches seen in the kitchen since they visited. Extremely happy!',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?auto=format&fit=crop&q=80&w=150&h=150',
    projectImage: 'https://images.unsplash.com/photo-1556912173-3bb406ef7e77?auto=format&fit=crop&q=80&w=650',
    projectImages: [
      'https://images.unsplash.com/photo-1556912173-3bb406ef7e77?auto=format&fit=crop&q=80&w=600',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=600',
      'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&q=80&w=600'
    ]
  },
  {
    id: '4',
    name: 'Sanjay Dixit',
    role: 'Bungalow Owner, Sadar, Agra',
    content: 'Excellent wallpaper and texture finishes. The accent wall in our master bedroom looks absolutely majestic!',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150&h=150',
    projectImage: 'https://images.unsplash.com/photo-1618221381711-42ca8ab6e908?auto=format&fit=crop&q=80&w=650',
    projectImages: [
      'https://images.unsplash.com/photo-1618221381711-42ca8ab6e908?auto=format&fit=crop&q=80&w=600',
      'https://images.unsplash.com/photo-1615529182906-13450b3c457a?auto=format&fit=crop&q=80&w=600',
      'https://images.unsplash.com/photo-1616486038857-89e851a6e0c4?auto=format&fit=crop&q=80&w=600'
    ]
  }
];

// --- BEFORE / AFTER WORK GALLERY ---
// REPLACE WITH REAL CUSTOMER PHOTOS
// You can edit these image paths and descriptions to match your real transformations easily.
export interface GalleryItem {
  id: string;
  category: 'painting' | 'waterproofing' | 'decoration';
  title: string;
  location: string;
  serviceUsed: string;
  beforeImg: string;
  afterImg: string;
  badgeText: string;
  altText: string;
}

export const WORK_GALLERY: GalleryItem[] = [
  {
    id: 'g1',
    category: 'painting',
    title: 'Luxury Living Room Painting',
    location: 'Kamla Nagar, Agra',
    serviceUsed: 'Royal Emulsion / Texture Accent Wall',
    beforeImg: '/images/indian_house_living_before_1782126338272.jpg',
    afterImg: '/images/indian_house_living_after_1782126358132.jpg',
    badgeText: 'Premium Finish',
    altText: 'Interior painting service before and after transformation in Agra home'
  },
  {
    id: 'g2',
    category: 'waterproofing',
    title: 'Terrace Waterproofing Treatment',
    location: 'Sikandra, Agra',
    serviceUsed: '7-Layer Protection + Dr. Fixit Certified',
    beforeImg: '/images/indian_terrace_water_before_1782126464758.jpg',
    afterImg: '/images/indian_terrace_water_after_1782126481368.jpg',
    badgeText: '100% Leak Proof',
    altText: 'Professional roof waterproofing before and after in Agra property'
  },
  {
    id: 'g3',
    category: 'decoration',
    title: 'Scenic Wallpaper Installation',
    location: 'Dayalbagh, Agra',
    serviceUsed: 'Elegant Floral Textured Wallpaper',
    beforeImg: '/images/indian_wallpaper_before_1782126603627.jpg',
    afterImg: '/images/indian_wallpaper_after_1782126624082.jpg',
    badgeText: 'Flawless Styling',
    altText: 'Premium custom wallpaper work before and after in Agra residence'
  }
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: 1,
    title: 'Free Inspection',
    description: 'Book a free site visit. Our experts will reach your home within 24 hours.'
  },
  {
    number: 2,
    title: 'Expert Quote',
    description: 'Get a detailed, transparent quote with no hidden charges or surprises.'
  },
  {
    number: 3,
    title: 'Professional Work',
    description: 'Our background-verified experts execute the work with premium materials.'
  },
  {
    number: 4,
    title: 'Warranty & Support',
    description: 'Enjoy peace of mind with up to 5 years warranty and dedicated support.'
  }
];
