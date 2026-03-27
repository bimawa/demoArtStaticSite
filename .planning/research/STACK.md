# Technology Stack

**Project:** Artist Portfolio Website
**Researched:** 2026-03-27

## Recommended Stack

### Core Technologies

| Technology | Version | Purpose | Why |
|------------|---------|---------|-----|
| HTML5 | Latest | Structure | Semantic, accessible, no build required for GitHub Pages |
| CSS3 | Latest | Styling | Modern CSS (Grid, Flexbox, Custom Properties) eliminates need for frameworks |
| Vanilla JavaScript | ES6+ | Interactivity | Lightbox for artwork detail view, minimal dependencies |

### No Framework Required

For a 4-artwork portfolio, frameworks add unnecessary complexity:

- **No React/Vue/Svelte** — Overkill for static single page
- **No Tailwind/Bootstrap** — CSS Grid/Flexbox handles responsive natively
- **No build tools (Vite, Webpack)** — Not needed for static HTML deployment

### File Structure

```
/
├── index.html        # Single page with all sections
├── css/
│   └── styles.css    # All styles
├── js/
│   └── main.js       # Optional interactivity
└── images/           # Artwork images (4 files)
```

## Alternatives Considered

| Category | Recommended | Alternative | Why Not |
|----------|-------------|-------------|---------|
| Styling | Pure CSS3 | Tailwind CSS | Adds build step, overkill for 4-artwork portfolio |
| Styling | Pure CSS3 | Bootstrap | Heavy (100KB+), generic look, conflicts with custom design |
| Interactivity | Vanilla JS | jQuery | Outdated, no modern features needed |
| Build | None | Vite/Parcel | Unnecessary complexity, GitHub Pages serves static files directly |
| Hosting | GitHub Pages | Netlify/Vercel | GitHub Pages already fits requirements |

## Installation

No installation required. This is a pure static site:

1. Create HTML, CSS, JS files
2. Add 4 artwork images to `/images/`
3. Push to GitHub repository
6. Enable GitHub Pages in repository settings

## Design Approach

### CSS Architecture

- **CSS Custom Properties** (`--variable`) for theming and maintainability
- **CSS Grid** for gallery layout (responsive, no media query hell)
- **Flexbox** for component alignment
- **Mobile-first** responsive breakpoints

### No JavaScript Fallback

Site works without JavaScript:
- Gallery displays as static grid
- Navigation scrolls to sections via anchor links
- Contact section remains fully functional

## Sources

- [FreeFrontend - Pure CSS Gallery Examples](https://freefrontend.com/css-gallery/)
- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [Modern Portfolio HTML/CSS Templates](https://github.com/topics/portfolio-website-html-css)