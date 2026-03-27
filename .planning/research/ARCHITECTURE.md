# Architecture Patterns

**Project:** Artist Portfolio Website
**Researched:** March 27, 2026
**Mode:** Project Research — Architecture

## Recommended Architecture

For a simple static portfolio website deployed on GitHub Pages, the architecture follows a straightforward single-page structure with semantic HTML sections. The site functions as a digital business card with minimal interactivity requirements.

```
root/
├── index.html          # Main entry point
├── css/
│   └── styles.css     # All styling
├── js/
│   └── main.js        # Optional interactions
├── images/
│   ├── artwork-1.jpg  # Portfolio images
│   ├── artwork-2.jpg
│   ├── artwork-3.jpg
│   └── artwork-4.jpg
└── assets/
    └── favicon.ico    # Site icon
```

## Component Boundaries

| Component | Responsibility | Communicates With |
|-----------|---------------|-------------------|
| **Header/Nav** | Site branding, navigation links | Hero section, Gallery section |
| **Hero/About** | Artist introduction, bio | Header (scroll targets), Gallery |
| **Gallery** | Display 4 artworks with descriptions | Hero section, Lightbox modal |
| **Contact** | Contact information, social links | Footer |
| **Footer** | Copyright, quick links | Contact section |

### Component Interaction Diagram

```
[Header]
    │
    ├──► [Hero/About Section] ◄─── Scroll navigation
    │
    ├──► [Gallery Section] ◄───── Image click → Lightbox modal
    │
    ├──► [Contact Section] ◄───── Form/social links
    │
    └──► [Footer]
```

## Data Flow

For a static portfolio website, data flow is minimal and unidirectional:

1. **Page Load**: Browser requests `index.html` → Server returns HTML + linked CSS/JS
2. **Navigation**: User clicks nav link → Smooth scroll to target section
3. **Gallery Interaction**: User clicks artwork → Lightbox modal displays full image
4. **Contact**: User clicks email/social link → Opens default mail client or new tab

```
User Request
    │
    ▼
┌─────────────────┐
│   index.html    │ ◄─── HTML structure (semantic sections)
└────────┬────────┘
         │
    ┌────┴────┬──────────┐
    ▼         ▼          ▼
┌────────┐ ┌──────┐ ┌─────────┐
│ styles │ │ main │ │ images/ │
│  .css  │ │ .js  │ │   *.jpg │
└────────┘ └──────┘ └─────────┘
```

### Static Data Sources

- **Artist Info**: Hardcoded in `index.html` Hero section
- **Artwork Data**: Hardcoded in Gallery section with `alt` attributes for accessibility
- **Contact Info**: Hardcoded in Contact section
- **No Database**: All content is static

## Build Order and Dependencies

### Phase 1: HTML Structure (Foundation)

Create the semantic HTML skeleton first. This establishes the document outline without any styling or interactivity.

```
index.html skeleton:
├── <!DOCTYPE html>
├── <html lang="en">
├── <head>...</head>
└── <body>
    ├── <header>...</header>
    ├── <main>
    │   ├── <section id="hero">...</section>
    │   ├── <section id="gallery">...</section>
    │   └── <section id="contact">...</section>
    └── <footer>...</footer>
```

**Dependencies:** None — this is the foundation

**Key decisions:**
- Use semantic HTML5 elements (`<header>`, `<main>`, `<section>`, `<footer>`)
- Add `id` attributes for scroll navigation targets
- Include proper `lang` attribute and meta tags for accessibility

### Phase 2: CSS Styling (Visual Layer)

Add styling to transform the semantic structure into a polished visual presentation.

```
styles.css:
├── Reset/normalize
├── Typography (fonts, sizes, line heights)
├── Layout (flexbox/grid for gallery)
├── Components (header, gallery grid, contact)
├── Responsive (media queries)
└── Animations (subtle hover effects)
```

**Dependencies:** HTML structure must be complete

**Key decisions:**
- Use CSS custom properties for theme consistency
- Implement mobile-first responsive design
- Use CSS Grid for gallery layout (responsive columns)
- Keep animations subtle (fade-ins, hover transitions)

### Phase 3: JavaScript (Interactivity Layer)

Add optional interactive features for enhanced user experience.

```
main.js (optional):
├── Smooth scroll navigation
├── Gallery lightbox modal
└── Mobile menu toggle (if needed)
```

**Dependencies:** HTML and CSS must be complete

**Key decisions:**
- Keep JavaScript minimal — progressive enhancement
- Lightbox for artwork zoom is the main interactive feature
- No frameworks — vanilla JavaScript only

### Phase 4: Assets and Optimization

Add and optimize images and other static assets.

```
Final steps:
├── Compress all artwork images (WebP with JPEG fallback)
├── Add favicon
└── Validate all external resources
```

**Dependencies:** All code complete

## Scalability Considerations

| Concern | Current Approach | Future Scaling |
|---------|------------------|----------------|
| **Content Growth** | Hardcoded in HTML | For 20+ artworks, consider JSON data file |
| **Image Management** | Manual placement in `images/` | For many images, use image sprites or CDN |
| **Styling Complexity** | Single `styles.css` | Split into multiple CSS files if needed |
| **Browser Support** | Modern browsers only | Add fallbacks for older browsers |

For this project (4 artworks, single page), the current simple structure is appropriate. Scaling beyond 10-15 artworks would warrant a data-driven approach using JSON and JavaScript rendering.

## Key Architectural Decisions

1. **Single HTML File**: All content in one `index.html` for simplicity and GitHub Pages compatibility. No build process required.

2. **Separated CSS/JS**: Styles in `styles.css`, interactions in `main.js` — maintains separation of concerns despite no build step.

3. **Semantic Sections**: Each major area (hero, gallery, contact) is a `<section>` with clear `id` for navigation.

4. **Image Strategy**: Direct `<img>` tags in gallery — no lazy loading complexity needed for 4 images.

5. **No Frameworks**: Pure HTML/CSS/JS aligns with GitHub Pages static requirement and keeps the project lightweight.

## Sources

- MDN Web Docs — "Dealing with files" (February 2026)
- WebPortfolios.dev — "How to Structure a Web Developer Portfolio" (February 2025)
- Rahul Yadav — "Folder Structure for Static Websites" (August 2025)
- PracticalSeries — "Website folder structure"