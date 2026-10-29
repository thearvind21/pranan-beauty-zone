export interface ServiceItem {
  id: string;
  name: string;
  category:
    | "Facials"
    | "Eyebrows and Face Grooming"
    | "Hand and Leg Waxing"
    | "Manicure and Pedicure"
    | "Hair Care"
    | "Mehendi";
  price: string;
  numericPrice: number | null;
  description: string;
  isSignature?: boolean;
  image?: string;
  clarificationNote?: string;
}

export interface Specialist {
  id: string;
  name: string;
  role: string;
  specialty: string;
  bio: string;
  image: string;
  instagram: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Interiors' | 'Hair Care' | 'Facials' | 'Manicure & Pedicure' | 'Mehendi';
  image: string;
  aspectRatio: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  service: string;
  tag: string;
}

export const BRAND = {
  name: "Pranan Beauty Zone",
  descriptor: "Women's Beauty Parlour",
  tagline: "Your Beauty, Your Moment.",
  announcement: "Welcome to Pranan Beauty Zone. A beautiful experience awaits.",
  heroEyebrow: "PRANAN BEAUTY ZONE",
  heroHeadline: "Your Beauty, Your Moment.",
  heroSupporting:
    "Discover a welcoming beauty experience designed around your personal style, self-care, and confidence.",
  heroPillars: "Personalised Care · Beauty Services · A Moment for You",
  bookingEyebrow: "APPOINTMENT BOOKING",
  bookingHeading: "Plan Your Beauty Appointment",
  bookingSupporting:
    "Choose your preferred service and let us know when you would like to visit.",
  servicesEyebrow: "OUR BEAUTY SERVICES",
  servicesHeading: "Our Beauty Services",
  servicesSupporting:
    "Explore our beauty, skincare, grooming, and haircare services, thoughtfully presented to help you find the right treatment for your needs.",
  specialistsEyebrow: "EXPERT HANDS & CARE",
  specialistsHeading: "Skilled care, personal attention.",
  specialistsSupporting:
    "Our experienced beauty practitioners are dedicated to making every visit comfortable, hygienic, and tailored to you.",
  aboutEyebrow: "ABOUT PRANAN BEAUTY ZONE",
  aboutHeadline: "Care that feels as good as it looks.",
  aboutParagraph1:
    "At Pranan Beauty Zone, we believe a beauty appointment should be more than a routine service. It is a moment to pause, feel pampered, and enjoy personalized care crafted exclusively for women.",
  aboutParagraph2:
    "From rejuvenating facials and precise eyebrow grooming to restorative hair spas and festive mehendi, we combine skilled techniques with attentive hospitality in a clean, relaxing parlour environment.",
  ctaHeadline: "Make a little time for yourself.",
  ctaSupporting:
    "Your next beauty moment begins with a simple conversation. Get in touch to discuss your preferences and request an appointment.",
  testimonialsEyebrow: "KIND WORDS",
  testimonialsHeading: "Experiences worth sharing.",
  contact: {
    name: "Pranan Beauty Zone",
    category: "Women's Beauty Parlour",
    address: "Pranan Beauty Zone (Demonstration Location · Client address to be updated)",
    cityState: "Exclusively for Women",
    phone: "+91 98765 43210",
    phoneDisplay: "+91 98765 43210 (Demonstration)",
    whatsapp: "+919876543210",
    email: "appointments@prananbeautyzone.com",
    instagram: "@prananbeautyzone",
    hours: [
      { days: "Monday – Saturday", time: "10:00 AM – 8:00 PM" },
      { days: "Sunday", time: "10:00 AM – 7:00 PM" },
    ],
  },
};

export const SERVICE_CATEGORIES = [
  "All",
  "Facials",
  "Eyebrows and Face Grooming",
  "Hand and Leg Waxing",
  "Manicure and Pedicure",
  "Hair Care",
  "Mehendi",
] as const;

export const SERVICES: ServiceItem[] = [
  // ==========================================
  // CATEGORY A: FACIALS (13 Services)
  // ==========================================
  {
    id: "3d-facial",
    name: "3D Facial",
    category: "Facials",
    price: "₹1,500",
    numericPrice: 1500,
    description: "Multi-dimensional deep cleansing, skin rejuvenation, and firming treatment for lasting radiance.",
    isSignature: true,
    image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "bridal-facial",
    name: "Bridal Facial",
    category: "Facials",
    price: "₹2,000",
    numericPrice: 2000,
    description: "An intensive luxury glow facial formulated to prep brides and special occasions with luminous, camera-ready skin.",
    isSignature: true,
    image: "https://images.unsplash.com/photo-1512290900672-1f486d3d685d?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "skin-brightening-facial",
    name: "Skin-Brightening Facial",
    category: "Facials",
    price: "₹1,500",
    numericPrice: 1500,
    description: "Specialized formulation targeting dullness, uneven complexion, and pigmentation for fresh skin vitality.",
  },
  {
    id: "hydra-facial",
    name: "Hydra Facial",
    category: "Facials",
    price: "₹2,000",
    numericPrice: 2000,
    description: "Advanced deep-pore hydration therapy that gently extracts impurities while replenishing essential moisture.",
    isSignature: true,
    image: "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "vitamin-c-facial",
    name: "Vitamin C Facial",
    category: "Facials",
    price: "₹1,000",
    numericPrice: 1000,
    description: "Antioxidant-rich facial that defends against environmental stress and promotes an energetic, healthy glow.",
  },
  {
    id: "vlcc-diamond-facial",
    name: "VLCC Diamond Facial",
    category: "Facials",
    price: "₹1,000",
    numericPrice: 1000,
    description: "Enriched with diamond ash and natural actives for gentle skin polishing, enhanced firmness, and clarity.",
  },
  {
    id: "vlcc-gold-facial",
    name: "VLCC Gold Facial",
    category: "Facials",
    price: "₹1,000",
    numericPrice: 1000,
    description: "Traditional gold leaf and botanical infusion designed to improve blood circulation and restore youthful luster.",
  },
  {
    id: "lotus-facial",
    name: "Lotus Facial",
    category: "Facials",
    price: "₹1,000",
    numericPrice: 1000,
    description: "Gentle natural herb extracts that soothe sensitive skin, rebalance oil levels, and enhance moisture.",
  },
  {
    id: "richfeel-facial",
    name: "Richfeel Facial",
    category: "Facials",
    price: "₹800",
    numericPrice: 800,
    description: "Dermatologically inspired facial therapy focusing on skin clarification, gentle peeling, and calm hydration.",
  },
  {
    id: "natures-facial",
    name: "Nature's Facial",
    category: "Facials",
    price: "₹800",
    numericPrice: 800,
    description: "Fruit and organic botanical extracts that nourish skin texture and provide a gentle, refreshing clean.",
  },
  {
    id: "regular-facial",
    name: "Regular Facial",
    category: "Facials",
    price: "₹600",
    numericPrice: 600,
    description: "Essential monthly maintenance facial including cleansing, gentle scrub, steam, and relaxing massage.",
  },
  {
    id: "d-tan-treatment",
    name: "D-Tan Treatment",
    category: "Facials",
    price: "₹250",
    numericPrice: 250,
    description: "Targeted facial de-tanning pack designed to lighten sun discoloration and restore natural skin brightness.",
  },
  {
    id: "face-bleaching",
    name: "Face Bleaching",
    category: "Facials",
    price: "₹300",
    numericPrice: 300,
    description: "Even-tone bleaching application that gently lightens facial hair to seamlessly blend with your complexion.",
  },

  // ==========================================
  // CATEGORY B: EYEBROWS AND FACE GROOMING (5 Services)
  // ==========================================
  {
    id: "eyebrow-shaping",
    name: "Eyebrow Shaping",
    category: "Eyebrows and Face Grooming",
    price: "₹40",
    numericPrice: 40,
    description: "Precision thread shaping tailored to enhance your natural facial symmetry and eye contours.",
  },
  {
    id: "eyebrow-and-forehead",
    name: "Eyebrow and Forehead",
    category: "Eyebrows and Face Grooming",
    price: "₹50",
    numericPrice: 50,
    description: "Eyebrow threading complemented with smooth forehead threading for a clean, framed finish.",
  },
  {
    id: "eyebrow-forehead-and-upper-lip",
    name: "Eyebrow, Forehead and Upper Lip",
    category: "Eyebrows and Face Grooming",
    price: "₹80",
    numericPrice: 80,
    description: "Comprehensive face grooming combo covering eyebrow shaping, forehead, and upper lip threading.",
  },
  {
    id: "upper-lip-and-chin-waxing",
    name: "Upper Lip and Chin Waxing",
    category: "Eyebrows and Face Grooming",
    price: "₹100",
    numericPrice: 100,
    description: "Gentle facial wax removal for upper lip and chin with skin-soothing post-wax lotion.",
  },
  {
    id: "full-face-waxing",
    name: "Full Face Waxing",
    category: "Eyebrows and Face Grooming",
    price: "₹300",
    numericPrice: 300,
    description: "Thorough facial hair removal using sensitive-skin wax formula for velvety smooth, refined skin.",
    isSignature: true,
    image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80",
  },

  // ==========================================
  // CATEGORY C: HAND AND LEG WAXING (8 Services)
  // ==========================================
  {
    id: "full-hand-waxing-with-underarms-regular-wax",
    name: "Full Hand Waxing with Underarms (Regular Wax)",
    category: "Hand and Leg Waxing",
    price: "₹300",
    numericPrice: 300,
    description: "Complete arm waxing from shoulder to fingertips combined with underarm hair removal using regular warm wax.",
  },
  {
    id: "full-hand-d-tan-waxing",
    name: "Full Hand D-Tan Waxing",
    category: "Hand and Leg Waxing",
    price: "₹700",
    numericPrice: 700,
    description: "Specialized D-Tan wax formula that removes arm hair while actively clearing sun tan and brightening skin tone.",
  },
  {
    id: "half-leg-waxing-regular-wax",
    name: "Half Leg Waxing (Regular Wax)",
    category: "Hand and Leg Waxing",
    price: "₹350",
    numericPrice: 350,
    description: "Knee-down leg hair removal using smooth regular wax for effortless everyday comfort.",
  },
  {
    id: "half-leg-d-tan-waxing",
    name: "Half Leg D-Tan Waxing",
    category: "Hand and Leg Waxing",
    price: "₹700",
    numericPrice: 700,
    description: "Lower leg waxing with tan-removal wax formulation for silky soft, tone-corrected legs.",
  },
  {
    id: "full-leg-waxing-regular-wax",
    name: "Full Leg Waxing (Regular Wax)",
    category: "Hand and Leg Waxing",
    price: "₹700",
    numericPrice: 700,
    description: "Full-length leg waxing using skin-friendly wax, followed by a cooling calming gel.",
  },
  {
    id: "full-leg-d-tan-waxing",
    name: "Full Leg D-Tan Waxing",
    category: "Hand and Leg Waxing",
    price: "₹1,400",
    numericPrice: 1400,
    description: "Complete full-leg waxing with premium D-Tan wax designed to remove stubborn tan and reveal even radiance.",
    isSignature: true,
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "hand-d-tan-treatment",
    name: "Hand D-Tan Treatment",
    category: "Hand and Leg Waxing",
    price: "₹350",
    numericPrice: 350,
    description: "Dedicated clarifying de-tan application for hands and arms without waxing to remove pigmentation and sun dullness.",
    clarificationNote: "Preserved as separate D-Tan treatment entry as provided in client service list.",
  },
  {
    id: "half-leg-d-tan-treatment",
    name: "Half Leg D-Tan Treatment",
    category: "Hand and Leg Waxing",
    price: "₹350",
    numericPrice: 350,
    description: "Focused de-tanning pack application for lower legs without waxing to restore even skin brightness.",
    clarificationNote: "Preserved as separate D-Tan treatment entry as provided in client service list.",
  },

  // ==========================================
  // CATEGORY D: MANICURE AND PEDICURE (3 Services)
  // ==========================================
  {
    id: "pedicure",
    name: "Pedicure",
    category: "Manicure and Pedicure",
    price: "₹1,000",
    numericPrice: 1000,
    description: "Aromatic foot soak, heel buffing, nail shaping, cuticle refinement, and a soothing lower-leg massage.",
  },
  {
    id: "manicure",
    name: "Manicure",
    category: "Manicure and Pedicure",
    price: "₹800",
    numericPrice: 800,
    description: "Gentle warm hand soak, nail shaping, cuticle care, hand scrub, and nourishing cream massage.",
  },
  {
    id: "manicure-and-pedicure-combo",
    name: "Manicure and Pedicure Combo",
    category: "Manicure and Pedicure",
    price: "₹1,500",
    numericPrice: 1500,
    description: "Complete hand and foot wellness package providing comprehensive nail grooming, exfoliation, and relaxing massage.",
    isSignature: true,
    image: "https://images.unsplash.com/photo-1632345031435-8727f6897d53?auto=format&fit=crop&w=800&q=80",
  },

  // ==========================================
  // CATEGORY E: HAIR CARE AND TREATMENTS (7 Services)
  // ==========================================
  {
    id: "regular-hair-spa",
    name: "Regular Hair Spa",
    category: "Hair Care",
    price: "₹700",
    numericPrice: 700,
    description: "Hydrating deep-conditioning cream bath, steam infusion, and relaxing scalp massage for soft, manageable hair.",
  },
  {
    id: "loreal-hair-spa",
    name: "L'Oréal Hair Spa",
    category: "Hair Care",
    price: "₹1,500",
    numericPrice: 1500,
    description: "Professional L'Oréal salon cream bath tailored with concentrate boosters to nourish hair fibers and restore shine.",
    isSignature: true,
    image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "hair-spa-for-damaged-hair",
    name: "Hair Spa for Damaged Hair",
    category: "Hair Care",
    price: "₹1,500",
    numericPrice: 1500,
    description: "Intensive repair therapy formulated to replenish moisture, reinforce brittle strands, and smooth split ends.",
  },
  {
    id: "hair-treatments",
    name: "Hair Treatments",
    category: "Hair Care",
    price: "Price on Enquiry",
    numericPrice: null,
    description: "Customized hair and scalp therapies recommended after consultation based on your hair texture and condition.",
  },
  {
    id: "haircutting",
    name: "Haircutting",
    category: "Hair Care",
    price: "Price on Enquiry",
    numericPrice: null,
    description: "Personalized hair styling, layer cuts, trimming, and finishing tailored to your face shape and preferences.",
  },
  {
    id: "hair-colouring",
    name: "Hair Colouring",
    category: "Hair Care",
    price: "Price on Enquiry",
    numericPrice: null,
    description: "Global color, root touch-ups, highlights, and grey coverage using quality salon hair formulations.",
  },
  {
    id: "hair-oil-massage",
    name: "Hair Oil Massage",
    category: "Hair Care",
    price: "₹200",
    numericPrice: 200,
    description: "Warm traditional herbal oil application and therapeutic head massage to stimulate roots and relieve tension.",
  },

  // ==========================================
  // CATEGORY F: MEHENDI (1 Service)
  // ==========================================
  {
    id: "mehendi-application",
    name: "Mehendi Application",
    category: "Mehendi",
    price: "Price on Enquiry",
    numericPrice: null,
    description: "Artistic henna application for bridal, festive, and special occasions featuring intricate traditional and contemporary motifs.",
    isSignature: true,
    image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=800&q=80",
  },
];

export const SPECIALISTS: Specialist[] = [
  {
    id: "senior-aesthetician",
    name: "Aarti Sharma",
    role: "Senior Facial & Skin Specialist",
    specialty: "Hydra & Brightening Facials",
    bio: "Passionate about gentle skin wellness, personalized facial therapy, and radiant skin care for women.",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80",
    instagram: "https://instagram.com",
  },
  {
    id: "hair-therapist",
    name: "Pooja Patel",
    role: "Hair Spa & Care Specialist",
    specialty: "L'Oréal Hair Spa & Scalp Therapy",
    bio: "Dedicated to restorative hair spa treatments, relaxing scalp massages, and healthy hair maintenance.",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=600&q=80",
    instagram: "https://instagram.com",
  },
  {
    id: "mehendi-artisan",
    name: "Sunita Verma",
    role: "Mehendi & Bridal Artisan",
    specialty: "Traditional & Contemporary Henna",
    bio: "Renowned for delicate bridal mehendi, festive designs, and celebratory occasion styling.",
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80",
    instagram: "https://instagram.com",
  },
  {
    id: "grooming-specialist",
    name: "Neha Joshi",
    role: "Grooming & Waxing Specialist",
    specialty: "Precision Threading & Gentle D-Tan Waxing",
    bio: "Specializing in comfortable, hygienic face grooming and relaxing manicure-pedicure rituals.",
    image:
      "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?auto=format&fit=crop&w=600&q=80",
    instagram: "https://instagram.com",
  },
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "g1",
    title: "Welcoming Parlour Suite",
    category: "Interiors",
    image:
      "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=1000&q=80",
    aspectRatio: "aspect-[4/3]",
  },
  {
    id: "g2",
    title: "Rejuvenating Facial Treatment",
    category: "Facials",
    image:
      "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1000&q=80",
    aspectRatio: "aspect-[3/4]",
  },
  {
    id: "g3",
    title: "L'Oréal Restorative Hair Spa",
    category: "Hair Care",
    image:
      "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1000&q=80",
    aspectRatio: "aspect-[4/3]",
  },
  {
    id: "g4",
    title: "Artistic Festive Mehendi",
    category: "Mehendi",
    image:
      "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1000&q=80",
    aspectRatio: "aspect-[3/4]",
  },
  {
    id: "g5",
    title: "Relaxing Pedicure & Manicure Care",
    category: "Manicure & Pedicure",
    image:
      "https://images.unsplash.com/photo-1632345031435-8727f6897d53?auto=format&fit=crop&w=1000&q=80",
    aspectRatio: "aspect-[4/3]",
  },
  {
    id: "g6",
    title: "Gentle Facial Grooming",
    category: "Facials",
    image:
      "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1000&q=80",
    aspectRatio: "aspect-[3/4]",
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "t1",
    quote:
      "I had the Hydra Facial and D-Tan waxing at Pranan Beauty Zone. The staff was gentle, polite, and the cleanliness gave me complete peace of mind.",
    author: "Ritu M.",
    service: "Hydra Facial & D-Tan Waxing",
    tag: "Demonstration Review",
  },
  {
    id: "t2",
    quote:
      "The L'Oréal Hair Spa was wonderfully relaxing. The head massage relieved all my fatigue, and my hair felt soft and healthy for days.",
    author: "Snehal K.",
    service: "L'Oréal Hair Spa",
    tag: "Demonstration Review",
  },
  {
    id: "t3",
    quote:
      "Having a parlour exclusively for women with skilled threading and reasonable rates is wonderful. The manicure and pedicure combo is my monthly treat.",
    author: "Deepika S.",
    service: "Eyebrows & Manicure Combo",
    tag: "Demonstration Review",
  },
];

export const TIME_SLOTS = [
  "10:15 AM",
  "11:30 AM",
  "12:45 PM",
  "02:00 PM",
  "03:30 PM",
  "04:45 PM",
  "06:00 PM",
  "07:15 PM",
];
