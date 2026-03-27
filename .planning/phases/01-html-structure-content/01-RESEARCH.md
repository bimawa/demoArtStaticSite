# Phase 1: HTML Structure & Content - Research

**Researched:** 2026-03-27
**Phase:** 01-html-structure-content

## Domain Overview

This phase establishes the semantic HTML foundation for an artist portfolio website. Key characteristics:
- Single-page layout with anchor navigation
- Pure HTML/CSS/JS (no frameworks)
- GitHub Pages deployment (static files)
- Accessibility-focused from the start

## Technical Research

### Semantic HTML Best Practices

**Sectioning Elements:**
- `<header>` - Site header with navigation
- `<nav>` - Navigation menu
- `<main>` - Primary content area
- `<section>` - Thematic content groups (hero, gallery, contact)
- `<article>` - Self-contained gallery items
- `<footer>` - Footer with copyright

**Heading Hierarchy:**
- One `<h1>` per page (artist name in hero)
- `<h2>` for section titles
- `<h3>` for subsection titles if needed
- Never skip heading levels

**Gallery Structure:**
- Use `<figure>` for artwork with `<figcaption>`
- `<img>` with descriptive alt text (ACCESSIBILITY requirement)
- `loading="lazy"` for below-fold images

### Form Handling for Static Sites

**Options:**
1. **Formspree** (recommended) - Free tier, no backend needed, email notifications
2. **Netlify Forms** - If hosting on Netlify
3. **Basin** - Similar to Formspree

**Formspree Integration:**
```html
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
```

**Form Fields:**
- Name: `<input type="text" name="name" required>`
- Email: `<input type="email" name="email" required>`
- Message: `<textarea name="message" required>`

### Image Placeholder Strategies

Since user will provide real images later:

1. **Colored div placeholders** - `div` with background color and aspect ratio
2. **SVG placeholders** - Inline SVG with text indicating artwork
3. **Placeholder.com** - External placeholder service (requires internet)
4. **Data URIs** - Embedded minimal placeholders

**Recommended:** Use CSS background-color placeholders with aspect-ratio to maintain layout stability.

### Accessibility (WCAG Basics)

**Required:**
- `lang="en"` on `<html>` element
- Skip to main content link
- Descriptive alt text for all images
- Focus-visible styles for keyboard navigation
- Color contrast ratio 4.5:1 minimum
- Form labels associated with inputs

**Navigation:**
- Semantic `<nav>` with `<ul>` links
- Smooth scroll via CSS `scroll-behavior: smooth`
- Anchor links work without JavaScript

## Validation Architecture

For this simple phase, validation is straightforward:

### HTML Validation
- Use W3C HTML Validator
- Check semantic structure
- Verify heading hierarchy

### Accessibility Check
- Alt text on all images
- Form labels present
- Keyboard navigation functional
- Color contrast sufficient

### Cross-Browser Testing
- Chrome, Firefox, Safari, Edge
- No JavaScript required baseline

## Key Insights for Planning

1. **Keep it simple** - No frameworks means no build step, simpler deployment
2. **Accessibility first** - Build it in from the start (easier than retrofitting)
3. **Placeholders matter** - Use CSS aspect-ratio to prevent layout shifts
4. **Graceful degradation** - Site works without JavaScript
5. **Form is simple** - Formspree handles backend, just need form HTML

## Implementation Approach

Given the requirements, the plan should:
1. Create semantic HTML skeleton with all sections
2. Add hero with artist name, tagline, bio
3. Add gallery with 4 placeholders (1 featured + 3 list)
4. Add contact form (Formspree-ready)
5. Add navigation and footer
6. Ensure accessibility attributes throughout

## Related Requirements

| Requirement | Priority |
|-------------|----------|
| LAY-01 | Single-page semantic HTML |
| LAY-02 | Hero/about section |
| LAY-03 | Gallery with 4 artworks |
| LAY-04 | Contact section |
| LAY-05 | Footer with copyright |
| ACC-01 | Descriptive alt text |
| ACC-02 | Proper heading hierarchy |
| ACC-03 | Semantic HTML |
| ACC-04 | Viewport meta tag |
| FUN-01 | Anchor link navigation |
| FUN-02 | Contact form |
| FUN-03 | Modern browser support |

---

*Research complete: 2026-03-27*
