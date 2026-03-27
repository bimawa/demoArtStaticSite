# Phase 2: CSS Styling & Responsive Design - Research

**Researched:** 2026-03-27
**Status:** Complete

---

## 1. CSS Architecture Approach

### Single File vs. Organized Structure

For a **simple static HTML site** like this artist portfolio, a **single CSS file** is the recommended approach:

**Why Single File:**
- **Minimal overhead**: No need for build tools, preprocessors, or complex tooling
- **Performance**: One HTTP request instead of multiple files
- **Simplicity**: Easy to maintain and debug for small projects
- **No framework bloat**: Avoid CSS frameworks (Bootstrap, Tailwind) that add unnecessary code
- **Lightweight**: Keep total CSS under 50KB (uncompressed) for fast loading

**Structure within single file:**
```
1. CSS Reset / Normalize
2. Root variables (colors, spacing, fonts)
3. Typography styles
4. Layout components (container, grid, sections)
5. Component styles (gallery, buttons, cards)
6. Responsive breakpoints (mobile-first)
7. Utility classes (if needed)
```

**When to consider multiple files:**
- If CSS exceeds 100KB
- If you have multiple pages with different styles
- If you need to load CSS conditionally

**Recommendation for this project:** Single `styles.css` file, well-organized with comments.

---

## 2. Responsive Design Patterns for Gallery

### Mobile-First Approach (Required)

Start with mobile styles, then enhance for larger screens:

```css
/* Mobile first (default) */
.gallery {
  display: grid;
  grid-template-columns: 1fr;  /* 1 column on mobile */
  gap: 16px;
  padding: 24px;
}

/* Tablet: 768px and up */
@media (min-width: 768px) {
  .gallery {
    grid-template-columns: repeat(2, 1fr);  /* 2 columns */
  }
}

/* Desktop: 1024px and up */
@media (min-width: 1024px) {
  .gallery {
    grid-template-columns: repeat(3, 1fr);  /* 3 columns */
  }
}
```

### CSS Grid vs. Flexbox

**For gallery layout: Use CSS Grid**
- More intuitive for 2D layouts
- Better for responsive column changes
- Cleaner code for gallery items
- Native support for `auto-fit` and `minmax()`

**Alternative with auto-fit (advanced):**
```css
.gallery {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 16px;
}
```
This automatically adjusts columns based on available space (less control but very flexible).

**For this project:** Use explicit breakpoints (more predictable, easier to control).

### Gallery Item Sizing

**Best practice for artwork:**
```css
.gallery-item {
  width: 100%;
  aspect-ratio: 1 / 1;  /* Square images */
  object-fit: cover;    /* Maintain aspect ratio */
  display: block;
}
```

**Why `aspect-ratio`:**
- Prevents layout shift while images load
- Maintains consistent proportions
- Better than padding-bottom hack
- Modern browser support (all modern browsers)

### Responsive Spacing

Use the 8px base unit consistently:
```css
/* Mobile spacing */
.gallery {
  gap: 16px;      /* 2 × 8px */
  padding: 24px;  /* 3 × 8px */
}

/* Tablet spacing */
@media (min-width: 768px) {
  .gallery {
    gap: 24px;      /* 3 × 8px */
    padding: 32px;  /* 4 × 8px */
  }
}

/* Desktop spacing */
@media (min-width: 1024px) {
  .gallery {
    gap: 32px;      /* 4 × 8px */
    padding: 48px;  /* 6 × 8px */
  }
}
```

---

## 3. Hover Effect Implementation Best Practices

### Performant Hover Effects

**Recommended approach (transform + box-shadow):**
```css
.gallery-item {
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.gallery-item:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
}
```

**Why this works:**
- `transform` is GPU-accelerated (no layout recalculation)
- `box-shadow` is also GPU-friendly
- 0.2s duration is fast enough to feel responsive
- `ease` timing function is natural and smooth

### GPU Acceleration with `will-change`

**Use sparingly:**
```css
.gallery-item {
  will-change: transform;  /* Hint to browser */
}

.gallery-item:hover {
  transform: translateY(-4px);
}
```

**Important:** Only use `will-change` on elements that will actually animate. Remove it after animation completes if using JavaScript.

### Properties to Avoid

**DON'T animate these (causes layout recalculation):**
- `width`, `height`, `padding`, `margin`
- `top`, `left`, `right`, `bottom` (use `transform` instead)
- `background-color` (use `opacity` with pseudo-elements instead)

**DON'T use:**
- `box-shadow` with large blur radius (expensive)
- Multiple shadows
- `filter` property (very expensive)

### Mobile Hover Considerations

**Problem:** Hover doesn't work on touch devices (no "hover" state).

**Solution:** Use `:active` or `:focus` for touch feedback:
```css
.gallery-item:hover,
.gallery-item:active,
.gallery-item:focus {
  transform: translateY(-4px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
}
```

Or use media query to disable hover on touch:
```css
@media (hover: hover) {
  .gallery-item:hover {
    transform: translateY(-4px);
  }
}
```

---

## 4. Performance Considerations for CSS

### File Size Optimization

**Target:** Keep CSS under 50KB (uncompressed)

**Strategies:**
1. **No CSS framework** - Write custom CSS instead of Bootstrap/Tailwind
2. **No unused styles** - Only write CSS you actually use
3. **Minimal resets** - Use modern CSS reset (not full normalize.css)
4. **CSS variables** - Use for colors/spacing to reduce repetition

**Example CSS reset (minimal):**
```css
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  font-family: 'Nunito', sans-serif;
  color: #1A1A1A;
  background-color: #FDFBF7;
  line-height: 1.6;
}

img {
  max-width: 100%;
  height: auto;
  display: block;
}
```

### CSS Variables for Maintainability

```css
:root {
  /* Colors */
  --color-bg: #FDFBF7;
  --color-text: #1A1A1A;
  
  /* Spacing (8px base unit) */
  --space-xs: 8px;
  --space-sm: 16px;
  --space-md: 24px;
  --space-lg: 32px;
  --space-xl: 48px;
  --space-2xl: 64px;
  
  /* Typography */
  --font-serif: 'Lora', serif;
  --font-sans: 'Nunito', sans-serif;
  
  /* Transitions */
  --transition-fast: 0.2s ease;
}
```

**Benefits:**
- Single source of truth for design tokens
- Easy to update colors/spacing globally
- Reduces file size vs. hardcoded values
- Enables future dark mode support

### Critical Rendering Path

**Optimize loading:**
1. **Inline critical CSS** - Put above-the-fold styles in `<style>` tag
2. **Defer non-critical CSS** - Load secondary styles asynchronously
3. **Minimize CSS** - Remove whitespace in production
4. **Avoid @import** - Use `<link>` tags instead (parallel loading)

**For this project:**
```html
<head>
  <style>
    /* Critical styles: typography, layout, hero section */
  </style>
  <link rel="stylesheet" href="styles.css">
</head>
```

### Font Loading Performance

**Use Google Fonts with `display=swap`:**
```html
<link href="https://fonts.googleapis.com/css2?family=Lora:wght@400;600&family=Nunito:wght@400;600&display=swap" rel="stylesheet">
```

**Why `display=swap`:**
- Shows fallback font immediately
- Swaps to custom font when loaded
- Prevents "flash of invisible text" (FOIT)
- Better perceived performance

---

## 5. Common Pitfalls to Avoid

### 1. Not Using Mobile-First Approach

**Wrong:**
```css
/* Desktop first */
.gallery {
  grid-template-columns: repeat(3, 1fr);
}

@media (max-width: 1024px) {
  .gallery {
    grid-template-columns: repeat(2, 1fr);
  }
}
```

**Right:**
```css
/* Mobile first */
.gallery {
  grid-template-columns: 1fr;
}

@media (min-width: 768px) {
  .gallery {
    grid-template-columns: repeat(2, 1fr);
  }
}
```

**Why:** Mobile-first is easier to maintain and performs better on mobile devices.

### 2. Forgetting Touch Target Sizes

**Requirement:** Minimum 44×44px for touch targets (WCAG 2.5.5)

**Wrong:**
```css
.button {
  padding: 4px 8px;  /* Too small */
}
```

**Right:**
```css
.button {
  padding: 12px 16px;  /* At least 44px height */
  min-height: 44px;
  min-width: 44px;
}
```

### 3. Animating Non-GPU Properties

**Wrong:**
```css
.item:hover {
  width: 110%;  /* Causes layout recalculation */
  left: -5%;
}
```

**Right:**
```css
.item:hover {
  transform: scale(1.1);  /* GPU-accelerated */
}
```

### 4. Overusing `will-change`

**Wrong:**
```css
* {
  will-change: all;  /* Massive performance hit */
}
```

**Right:**
```css
.gallery-item {
  will-change: transform;  /* Only on elements that animate */
}
```

### 5. Not Setting Image Dimensions

**Wrong:**
```html
<img src="artwork.jpg" alt="Artwork">
```

**Right:**
```html
<img src="artwork.jpg" alt="Artwork" width="400" height="400">
```

**Why:** Prevents layout shift (CLS - Cumulative Layout Shift) while images load.

### 6. Using Fixed Widths Instead of Responsive

**Wrong:**
```css
.container {
  width: 960px;  /* Breaks on mobile */
}
```

**Right:**
```css
.container {
  width: 100%;
  max-width: 1200px;
  padding: 0 16px;
  margin: 0 auto;
}
```

### 7. Forgetting Fallback Fonts

**Wrong:**
```css
body {
  font-family: 'Lora', 'Nunito';  /* No fallback */
}
```

**Right:**
```css
body {
  font-family: 'Nunito', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
}

h1, h2, h3 {
  font-family: 'Lora', Georgia, serif;
}
```

### 8. Not Testing on Real Devices

**Pitfall:** Assuming desktop testing is enough.

**Solution:**
- Test on actual mobile devices (not just browser DevTools)
- Test on slow 3G connection
- Test on older devices
- Test on different browsers (Chrome, Firefox, Safari, Edge)

### 9. Excessive Specificity

**Wrong:**
```css
body > main > section > .gallery > .gallery-item {
  /* Too specific, hard to override */
}
```

**Right:**
```css
.gallery-item {
  /* Simple, reusable */
}
```

### 10. Not Using CSS Reset

**Pitfall:** Different browsers have different default styles.

**Solution:** Use a minimal CSS reset at the top of your stylesheet.

---

## 6. Accessibility Considerations

### Color Contrast

**Requirement:** WCAG AA minimum 4.5:1 contrast ratio for text

**Your palette:**
- Background: #FDFBF7 (warm cream)
- Text: #1A1A1A (soft black)
- Contrast ratio: ~18:1 ✓ (exceeds requirement)

### Readable Font Sizes

**Minimum:** 16px for body text on mobile

```css
body {
  font-size: 16px;  /* Mobile */
}

@media (min-width: 768px) {
  body {
    font-size: 18px;  /* Tablet and up */
  }
}
```

### Focus States

**Don't remove focus outlines:**
```css
/* Good */
a:focus {
  outline: 2px solid #1A1A1A;
  outline-offset: 2px;
}

/* Bad */
a:focus {
  outline: none;  /* Breaks keyboard navigation */
}
```

### Semantic HTML + CSS

Use semantic HTML (`<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`) and let CSS enhance it.

---

## 7. Testing Strategy

### Breakpoint Testing

Test at these widths:
- **Mobile:** 375px (iPhone SE), 414px (iPhone 12)
- **Tablet:** 768px (iPad), 1024px (iPad Pro)
- **Desktop:** 1280px, 1920px

### Performance Testing

Use Chrome DevTools:
1. **Lighthouse** - Overall performance score
2. **Performance tab** - Record and analyze rendering
3. **Coverage tab** - Find unused CSS
4. **Network tab** - Check CSS file size and load time

### Browser Testing

Minimum support:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

---

## 8. Implementation Checklist

- [ ] Single CSS file created (`styles.css`)
- [ ] CSS variables defined for colors, spacing, fonts
- [ ] Mobile-first responsive design implemented
- [ ] Gallery uses CSS Grid with proper breakpoints
- [ ] Hover effects use `transform` (GPU-accelerated)
- [ ] Touch targets are minimum 44×44px
- [ ] All images have width/height attributes
- [ ] Font fallbacks specified
- [ ] CSS reset/normalize included
- [ ] No unused CSS
- [ ] File size under 50KB
- [ ] Tested on mobile, tablet, desktop
- [ ] Tested on multiple browsers
- [ ] Accessibility checked (contrast, focus states)
- [ ] Performance tested with Lighthouse

---

## 9. Key Decisions for Phase 2

1. **Architecture:** Single `styles.css` file (no framework)
2. **Layout:** CSS Grid for gallery, Flexbox for components
3. **Approach:** Mobile-first with `min-width` media queries
4. **Spacing:** 8px base unit with CSS variables
5. **Hover:** `transform: translateY(-4px)` + `box-shadow`
6. **Performance:** Keep CSS under 50KB, no animations on non-GPU properties
7. **Accessibility:** 44×44px touch targets, proper contrast, focus states
8. **Fonts:** Google Fonts with `display=swap`, system fallbacks

---

## 10. Resources & References

### CSS Grid & Flexbox
- MDN: CSS Grid Layout
- CSS-Tricks: A Complete Guide to Grid
- CSS-Tricks: A Complete Guide to Flexbox

### Responsive Design
- Mobile-First Responsive Design with CSS Grid and Flexbox
- Build a Responsive Image Gallery Using Flexbox and Grid

### Performance
- CSS Animation Performance: Best Practices (2026)
- Boost CSS Performance with `will-change` and `transform: translate3d`
- Critical Rendering Path (Google Developers)

### Accessibility
- WCAG 2.1 Guidelines
- Target Size (44×44px) - WCAG 2.5.5
- WebAIM: Contrast Checker

---

**Research Complete:** 2026-03-27
**Ready for:** Phase 2 Planning

