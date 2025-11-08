# Heist-Themed Museum Catalog Design Guidelines

## Design Approach
**Reference-Based: E-commerce meets Espionage Aesthetic**

Drawing inspiration from:
- **Etsy/Shopify**: Clean catalog grids, effective filtering
- **Secret agent/spy media**: Dossier files, classified documents, mission briefings aesthetic
- **Museum collections**: Sophisticated artifact presentation

**Color Note**: User specified beige and light blue theme - this will be applied in implementation phase.

## Typography System

**Primary Font**: Playfair Display or Crimson Pro (serif) - for heist/classified document feel
- Artifact names: text-2xl to text-3xl, font-semibold
- Section headers: text-4xl to text-5xl, font-bold, uppercase tracking for "CLASSIFIED" feel

**Secondary Font**: Inter or Work Sans (sans-serif) - for clean readability
- Body text, descriptions: text-base to text-lg
- Risk percentages, stats: text-sm, font-mono for technical/data feel
- Filter labels, UI elements: text-sm to text-base

## Layout System

**Spacing Primitives**: Use Tailwind units of 4, 6, 8, 12, 16
- Card padding: p-6
- Section gaps: gap-8 or gap-12
- Page margins: px-4 md:px-8 lg:px-16
- Vertical sections: py-12 md:py-16

**Container Strategy**:
- Max-width: max-w-7xl for main content
- Centered: mx-auto for consistent alignment

## Component Library

### Hero Section
**"Mission Briefing" Header**
- Full-width banner with subtle texture/pattern overlay
- Large heading: "CLASSIFIED: OPERATION ARTIFACT ACQUISITION"
- Subheading explaining the heist premise
- Quick stats bar: Total artifacts, Success rate, Active heists
- No large hero image - focus on typography and mission briefing aesthetic

### Filter System (Sidebar or Top Bar)
**"Mission Parameters"**
- Radio buttons or tabs for exhibit selection: ALL / EGYPT / FRANCE / ITALY
- Each filter displays small flag icon or exhibit symbol
- Active filter highlighted with border treatment
- Quick count badges showing artifact numbers per exhibit
- Clear all filters option
- Sticky positioning on desktop (sidebar) or fixed top on mobile

### Catalog Grid
**"Target Artifacts"**
- 3-column grid on desktop (grid-cols-1 md:grid-cols-2 lg:grid-cols-3)
- Consistent gap-8 between cards
- Masonry option if artifacts have varied image ratios

### Artifact Cards
**"Dossier Cards"**
Each card includes:
- Artifact image with subtle border/frame treatment
- Exhibit badge (small flag or colored tag): "EGYPT" / "FRANCE" / "ITALY"
- Artifact name: bold, serif typography
- Brief description snippet (2-3 lines, truncated)
- **Risk Meter**: Horizontal bar or circular gauge
  - Percentage displayed prominently (e.g., "73% RISK")
  - Visual indicator color-coded (implementation will handle)
  - Label: "Visitor Engagement Risk"
- Visitor engagement stats: Small icons with numbers (views, time spent)
- "ADD TO HEIST PLAN" button - full-width at card bottom
- Hover state: Slight elevation with shadow

### Detailed Artifact View (Modal or Page)
**"Complete Dossier"**
- Large artifact image gallery (if multiple angles available)
- Full artifact details in two-column layout:
  - Left: Image(s) and visual details
  - Right: Specifications, origin story, dimensions
- **Risk Analysis Panel**: 
  - Large risk percentage display
  - Breakdown chart of engagement metrics (bar chart or radar)
  - Historical engagement trends
  - "Difficulty Assessment" text
- Exhibit context section
- "ADD TO HEIST PLAN" prominent CTA
- Related artifacts carousel at bottom

### Shopping Cart / Heist Plan
**"Operation Plan"**
- Slide-out panel or dedicated page
- List view of selected artifacts with small thumbnails
- Individual risk percentages
- **Total Risk Calculation**: Combined engagement risk displayed prominently
- Mini artifact cards in list with remove option
- "EXECUTE HEIST" CTA (checkout/complete action)
- Empty state: "No artifacts selected. Begin your heist plan."

### Navigation
**Top Bar "Command Center"**
- Site logo/title: "ARTIFACT HEIST CO." or similar
- Main nav: Browse Catalog / About the Mission / Heist Plan (cart)
- Cart icon with badge showing artifact count
- Subtle border-bottom separator

## Images

### Artifact Images
- High-quality museum artifact photography
- Consistent aspect ratio across catalog (4:3 or 1:1)
- Professional product photography style
- White or neutral backgrounds for consistency
- Multiple angles for detailed view

### Exhibit Context Images
- Small banner images or icons representing each exhibit
- Egypt: Pyramids, hieroglyphics, golden artifacts
- France: Louvre, classical art, ornate frames
- Italy: Roman architecture, Renaissance art

### Background Elements
- Subtle paper texture or blueprint pattern overlays
- Spy-themed iconography: fingerprints, stamps, dossier corners
- No large hero image - keep focus on catalog

## Interaction Patterns

**Risk Percentage Animation**:
- Counting animation when artifact loads (0% → final percentage)
- Smooth transition, 1-1.5 second duration

**Filter Transitions**:
- Fade out/in catalog grid when switching exhibits
- 200-300ms transition timing

**Cart Updates**:
- Brief success indicator when artifact added
- Cart badge number increment animation

**Card Interactions**:
- Subtle scale on hover (scale-105)
- Shadow elevation increase
- Smooth transitions (transition-all duration-200)

## Accessibility
- High contrast between text and backgrounds
- Keyboard navigation for filters and catalog
- ARIA labels for risk meters and interactive elements
- Focus indicators on all interactive elements
- Alt text for all artifact images

## Responsive Behavior

**Desktop (lg)**: 3-column grid, sidebar filters, spacious layout
**Tablet (md)**: 2-column grid, top filter bar, reduced spacing
**Mobile (base)**: 1-column stack, sticky filter dropdown, compact cards

This design creates an immersive heist experience while maintaining e-commerce functionality and clear information hierarchy.