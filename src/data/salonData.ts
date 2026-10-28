export interface ServiceItem {
  id: string;
  name: string;
  category: string;
  duration: string;
  priceNote: string;
  description: string;
  image: string;
  highlights: string[];
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
  category: 'Interiors' | 'Hair Styling' | 'Skincare' | 'Makeup' | 'Bridal';
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
  name: "MAISON BELLE",
  descriptor: "Women's Beauty & Wellness Studio",
  tagline: "Beauty, thoughtfully tailored to you.",
  announcement: "A little time for yourself. A beautiful experience awaits.",
  heroEyebrow: "YOUR BEAUTY, YOUR MOMENT",
  heroHeadline: "Quiet luxury for every kind of beauty.",
  heroSupporting:
    "Discover a more personal approach to beauty, where thoughtful care, expert attention, and a welcoming atmosphere come together to help you feel your very best.",
  heroPillars: "Personalised Care · Thoughtful Rituals · A Space Just for Women",
  bookingEyebrow: "YOUR NEXT VISIT",
  bookingHeading: "When would you like to visit?",
  bookingSupporting:
    "Choose a preferred date and time to begin planning your appointment.",
  servicesEyebrow: "THE ART OF PERSONAL CARE",
  servicesHeading: "Beauty rituals, chosen for you.",
  servicesSupporting:
    "Explore thoughtful beauty services designed around your preferences, style, and self-care routine.",
  specialistsEyebrow: "THE PEOPLE BEHIND THE EXPERIENCE",
  specialistsHeading: "Expert hands. Personal attention.",
  specialistsSupporting:
    "Meet the professionals dedicated to making every visit feel considered, comfortable, and personal.",
  aboutEyebrow: "BEYOND BEAUTY",
  aboutHeadline: "Care that feels as good as it looks.",
  aboutParagraph1:
    "We believe a beauty appointment should be more than a service. It should be a moment to pause, feel cared for, and enjoy an experience shaped around your individual preferences.",
  aboutParagraph2:
    "Every appointment is intentionally paced. From bespoke organic consultations to tranquil private booths, we have created a discreet oasis exclusively for women who appreciate unhurried craftsmanship and calm refinement.",
  ctaHeadline: "Make a little room for yourself.",
  ctaSupporting:
    "Your next beauty moment begins with a simple conversation. Get in touch to discuss your preferences and request an appointment.",
  testimonialsEyebrow: "KIND WORDS",
  testimonialsHeading: "Experiences worth sharing.",
  contact: {
    address: "14 Rue de Belle-Chasse, Suite 4B (Demonstration Suite)",
    cityState: "Mayfair District, London / Paris Inspired",
    phone: "+1 (555) 234-8890",
    whatsapp: "+1 (555) 234-8890",
    email: "concierge@maisonbelle-studio.com",
    instagram: "@maisonbelle.studio",
    hours: [
      { days: "Tuesday – Friday", time: "9:00 AM – 7:30 PM" },
      { days: "Saturday", time: "9:00 AM – 6:00 PM" },
      { days: "Sunday", time: "10:00 AM – 4:00 PM" },
      { days: "Monday", time: "Private Consultations / Rest Day" },
    ],
  },
};

export const SERVICES: ServiceItem[] = [
  {
    id: "hair-styling",
    name: "Hair Styling & Care",
    category: "Haircare",
    duration: "60 - 90 mins",
    priceNote: "Consultation-tailored",
    description:
      "Precision cuts, bespoke balayage, dimensional glossing, and restorative botanical scalp treatments designed to enhance your hair's natural texture.",
    image:
      "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1000&q=80",
    highlights: ["Custom Texture Analysis", "Organic Botanical Wash", "Warm Scalp Massage"],
  },
  {
    id: "skincare-facials",
    name: "Skincare & Facials",
    category: "Skin Wellness",
    duration: "75 mins",
    priceNote: "Skin-type specific",
    description:
      "Deeply hydrating botanical facials, gentle lymphatic drainage, and barrier-restoring rituals designed to leave your complexion luminous and calm.",
    image:
      "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1000&q=80",
    highlights: ["Custom Mask Infusion", "Gua Sha Facial Sculpting", "Cellular Hydration"],
  },
  {
    id: "professional-makeup",
    name: "Professional Makeup",
    category: "Artistry",
    duration: "60 mins",
    priceNote: "Occasion & editorial",
    description:
      "Editorial, evening, and daytime makeup artistry focused on skin-first radiance, flattering soft-focus eyes, and timeless elegance.",
    image:
      "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=1000&q=80",
    highlights: ["Individual Lash Application", "Skin Prep Ritual", "Touch-Up Kit Provided"],
  },
  {
    id: "manicure-pedicure",
    name: "Manicure & Pedicure",
    category: "Nail Care",
    duration: "60 - 80 mins",
    priceNote: "Non-toxic formulations",
    description:
      "Gentle European cuticle care, nourishing shea butter massage, shape refinement, and clean, long-wearing neutral lacquer coats.",
    image:
      "https://images.unsplash.com/photo-1632345031435-8727f6897d53?auto=format&fit=crop&w=1000&q=80",
    highlights: ["Aromatherapeutic Soak", "Exfoliating Sea Salt Scrub", "Breathable Nude Tones"],
  },
  {
    id: "waxing-grooming",
    name: "Waxing & Brow Sculpting",
    category: "Grooming",
    duration: "30 - 45 mins",
    priceNote: "Comfort-focused",
    description:
      "Gentle chamomile hot-wax hair removal, precision brow micro-shaping, and keratin lash lifts crafted to frame your eyes with effortless harmony.",
    image:
      "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1000&q=80",
    highlights: ["Soothing Azulene Balm", "Golden Ratio Brow Mapping", "Sensitive Skin Safe"],
  },
  {
    id: "bridal-beauty",
    name: "Bridal Beauty Suite",
    category: "Bridal",
    duration: "Half-day suite",
    priceNote: "Bespoke package",
    description:
      "An unhurried pre-wedding journey including in-depth trials, bridal veil placement, luminous skin preparation, and peaceful day-of coordination.",
    image:
      "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1000&q=80",
    highlights: ["Comprehensive Trial Session", "Private Bridal Lounge", "Champagne & Herbal Tea"],
  },
];

export const SPECIALISTS: Specialist[] = [
  {
    id: "elena-vance",
    name: "Elena Vance",
    role: "Master Stylist & Colorist",
    specialty: "Editorial Silhouettes & Balayage",
    bio: "Over a decade of crafting tailored cuts and soft, natural dimensional color for women who value low-maintenance sophistication.",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80",
    instagram: "https://instagram.com",
  },
  {
    id: "camille-laurent",
    name: "Dr. Camille Laurent",
    role: "Lead Aesthetician & Skin Therapist",
    specialty: "Holistic Barrier Health & Gua Sha",
    bio: "Dedicated to restorative skincare that honors your natural moisture barrier and rejuvenates skin tone with gentle botanical therapies.",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=600&q=80",
    instagram: "https://instagram.com",
  },
  {
    id: "sophie-chen",
    name: "Sophie Chen",
    role: "Creative Director of Makeup",
    specialty: "Skin-First Editorial & Bridal Radiance",
    bio: "Known for featherlight complexion work, refined natural brow shaping, and creating looks that feel authentically you.",
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80",
    instagram: "https://instagram.com",
  },
  {
    id: "amara-brooks",
    name: "Amara Brooks",
    role: "Senior Nail Artisan",
    specialty: "European Manicures & Nail Health",
    bio: "Specializing in gentle, waterless cuticle detailing and healthy, minimalist nail aesthetic treatments using non-toxic formulas.",
    image:
      "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?auto=format&fit=crop&w=600&q=80",
    instagram: "https://instagram.com",
  },
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "g1",
    title: "Tranquil Reception Lounge",
    category: "Interiors",
    image:
      "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=1000&q=80",
    aspectRatio: "aspect-[4/3]",
  },
  {
    id: "g2",
    title: "Dimensional Caramel Balayage",
    category: "Hair Styling",
    image:
      "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1000&q=80",
    aspectRatio: "aspect-[3/4]",
  },
  {
    id: "g3",
    title: "Botanical Facial Therapy",
    category: "Skincare",
    image:
      "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1000&q=80",
    aspectRatio: "aspect-[4/3]",
  },
  {
    id: "g4",
    title: "Soft Glamour Day-Look",
    category: "Makeup",
    image:
      "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=1000&q=80",
    aspectRatio: "aspect-[3/4]",
  },
  {
    id: "g5",
    title: "Quiet Consultation Sanctuary",
    category: "Interiors",
    image:
      "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1000&q=80",
    aspectRatio: "aspect-[4/3]",
  },
  {
    id: "g6",
    title: "Ethereal Bridal Veil & Hair Preparation",
    category: "Bridal",
    image:
      "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1000&q=80",
    aspectRatio: "aspect-[3/4]",
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "t1",
    quote:
      "From the warm welcome to the unhurried consultation, Maison Belle feels like a private sanctuary. My hair has never felt healthier or caught the light with such natural grace.",
    author: "Vivienne L.",
    service: "Hair Styling & Treatment",
    tag: "Demonstration Client",
  },
  {
    id: "t2",
    quote:
      "The facial treatment was sublime. Calming music, organic botanical scents, and genuine care from Camille. You truly leave the noise of the city behind the door.",
    author: "Dr. Ananya R.",
    service: "Botanical Skin Ritual",
    tag: "Demonstration Client",
  },
  {
    id: "t3",
    quote:
      "Finding a salon dedicated purely to women where craftsmanship and quiet serenity meet was a revelation. It has become my indispensable monthly ritual of self-care.",
    author: "Charlotte M.",
    service: "Bridal Consultation & Artistry",
    tag: "Demonstration Client",
  },
];

export const TIME_SLOTS = [
  "09:30 AM",
  "10:45 AM",
  "12:00 PM",
  "01:30 PM",
  "03:00 PM",
  "04:15 PM",
  "05:30 PM",
  "06:45 PM",
];
