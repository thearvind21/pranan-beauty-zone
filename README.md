# MAISON BELLE — Women's Beauty & Wellness Studio

A demonstration website built for a premium beauty parlour exclusively serving women. Designed with an **Elevated Quiet Luxury** aesthetic, combining editorial typography, refined warm neutral palettes, an interactive appointment booking flow, and responsive craft.

---

## ✦ Design System & Visual Direction

- **Brand Name**: MAISON BELLE *(Configurable in `src/data/salonData.ts`)*
- **Descriptor**: Women's Beauty & Wellness Studio
- **Tagline**: *Beauty, thoughtfully tailored to you.*
- **Aesthetic**: Elevated Quiet Luxury, editorial split-screen hero, generous whitespace, understated champagne-gold accents.

### Color Tokens

| Token | Hex | Usage |
| :--- | :--- | :--- |
| **Warm Ivory** | `#FAF7F3` | Primary page background |
| **Cream** | `#F2EBE5` | Section distinction, cards, subtle container panels |
| **Soft Blush** | `#E8C9C4` | Subtle highlights, text selection |
| **Dusty Rose** | `#C99B95` | Buttons, selected booking dates/slots, announcement bar |
| **Champagne Gold** | `#B49A70` | Hairline borders, small icons, refined luxury accents |
| **Warm Charcoal** | `#342C29` | Editorial headlines, primary body typography |
| **Muted Taupe** | `#82756F` | Supporting descriptions, metadata, hours |
| **Soft Border** | `#E6DCD5` | Fine separator borders and delicate cards |

### Typography

- **Headings**: `Cormorant Garamond` (Google Fonts editorial serif)
- **Body & Controls**: `DM Sans` (Google Fonts clean, legible geometric sans-serif)

---

## ✦ Key Sections & Features

1. **Slim Dusty-Rose Announcement Bar**: Compact top bar with greeting and direct appointment booking trigger.
2. **Refined Typographic Navigation**: Sticky header with scroll state transitions, desktop menu, mobile drawer, and "Book Appointment" CTA.
3. **Split-Screen Hero**:
   - Left: Serif headline *"Quiet luxury for every kind of beauty."*, eyebrow, supporting text, dual CTAs, and brand pillars.
   - Right: Editorial portrait with warm natural lighting, soft neutral background, priority image preloading, and fine champagne framing.
4. **Interactive Appointment Booking Interface**:
   - Positioned directly beneath hero.
   - Step 1: Select ritual (Hair Styling, Skincare, Makeup, Manicure, Grooming, Bridal).
   - Step 2: Date selection (horizontal row across next 14 days with closed-day awareness).
   - Step 3: Compact time slot grid (morning, afternoon, evening).
   - Step 4: Contact details with real-time validation.
   - Step 5: Instant booking request confirmation summary with generated reference code and direct WhatsApp link.
5. **Signature Beauty Services**: Filterable ritual cards with high-definition photography, ritual highlights, duration, and one-click "Reserve This Ritual" preselection.
6. **Meet Our Specialists**: Circular portraits with champagne rings, specialisations, bios, Instagram links, and direct visit request.
7. **About the Sanctuary**: 2-column editorial feature highlighting the women-only sanctuary philosophy, clean formulations, and attentive consultations.
8. **Salon Gallery with Lightbox**: Curated category filter (Interiors, Hair, Skin, Makeup, Bridal) and full-screen lightbox modal with keyboard navigation (Esc, Arrow keys).
9. **Kind Words (Testimonials)**: Minimalist editorial quote cards with champagne star ratings.
10. **Final Appointment CTA**: Gradient conversion section with WhatsApp direct chat integration.
11. **Contact & Location Desk**: Studio details, opening hours table, guest amenities card, and interactive inquiry form.
12. **Footer**: Typographic wordmark, brand statement, links, hours, social links, back-to-top button.
13. **Floating Studio Concierge**: Expandable floating WhatsApp button.

---

## ✦ Getting Started

### Development
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build
```bash
npm run build
npm run start
```

---

## ✦ Customizing Brand for Client Presentations

All business details, brand copy, specialist profiles, contact details, and services are centralized in:
```
src/data/salonData.ts
```
To rebrand for a prospective client, simply update the `BRAND` object values.
