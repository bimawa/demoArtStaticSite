# Feature Landscape

**Domain:** Artist Portfolio Website
**Researched:** March 27, 2026

## Executive Summary

Artist portfolio websites in 2026 must balance visual impact with technical performance. The core principle: **images are currency**, but they must load fast (under 2-3 seconds) and display flawlessly on mobile (73% of visitors). Research across industry sources confirms seven essential features that separate portfolios that book clients from those that just look pretty.

For this project (single-page static HTML on GitHub Pages), the focus is on table stakes: clean gallery display, mobile responsiveness, and clear contact path. Advanced features like analytics, video, and multilingual support are deferrable.

## Table Stakes

Features users expect. Missing = product feels incomplete or unprofessional.

| Feature | Why Expected | Complexity | Notes |
|---------|--------------|------------|-------|
| **Image gallery** | Core purpose — visitors come to see work | Low | Display 4 artworks as specified in PROJECT.md |
| **Mobile-responsive design** | 73% of visitors on mobile devices | Medium | Must work flawlessly on phones |
| **Fast load speed** | Images over 2-3 seconds lose 40% of visitors | Medium | Compress images, use modern formats |
| **Clean minimal design** | Focus on artwork, not distractions | Low | White space, no clutter |
| **Contact information** | Call-to-action — how to hire/connect | Low | Clear email or contact section |
| **Browser compatibility** | Works in Chrome, Firefox, Safari, Edge | Low | Standard HTML/CSS |
| **Hero/about section** | Context — who is the artist | Low | Brief intro as "digital business card" |

## Differentiators

Features that set product apart. Not expected, but valued.

| Feature | Value Proposition | Complexity | Notes |
|---------|-------------------|------------|-------|
| **Image lightbox/modal** | Full-screen viewing of artwork | Low-Medium | Click to expand, see details |
| **Hover effects on images** | Subtle interactivity, professional feel | Low | Scale, shadow on hover |
| **Personal story section** | Builds trust, human connection | Low | "About" section with artist background |
| **Organized categories** | Guides client journey through work | Low | Not needed for 4 artworks only |
| **Social media links** | Additional contact paths | Low | Icons to Instagram, etc. |
| **Testimonials** | Social proof, credibility | Low | Optional for new artist |
| **Smooth scroll navigation** | Elegant UX within single page | Low | Anchor links between sections |

## Anti-Features

Features to explicitly NOT build.

| Anti-Feature | Why Avoid | What to Do Instead |
|--------------|-----------|-------------------|
| **CMS/Admin panel** | GitHub Pages static requirement, project scope | Manual HTML updates |
| **Multiple pages** | Project constraint: single-page design | One-page scroll layout |
| **E-commerce** | PROJECT.md explicitly out of scope | Portfolio focus only |
| **Heavy animations** | Performance risk, distorts from artwork | Subtle CSS transitions only |
| **Stock imagery** | Undermines authenticity | Use actual artwork only |
| **Complex forms** | Overkill for "визитка" | Simple email link |
| **Blog/content section** | Not required for minimal portfolio | Keep focused |

## Feature Dependencies

```
Hero/About Section → Gallery → Contact Section
       ↓              ↓              ↓
   (intro)      (view work)    (action)

Responsive Design ← Every Section (foundation)
Fast Loading ← Image Optimization (prerequisite)
```

## MVP Recommendation

Prioritize:
1. **Image gallery** — Core of portfolio, display 4 artworks cleanly
2. **Mobile-responsive** — Essential for 73% mobile visitors
3. **Contact section** — Clear path to connect
4. **Hero/about** — Brief intro as "digital business card"
5. **Fast loading** — Optimize images, minimal JS

Defer: Lightbox (could add if time permits), testimonials (not needed for new artist), social links (nice-to-have)

## Sources

- Outli.ne: "The Artist Portfolio Builder Guide: 7 Must-Have Features That Actually Matter in 2025" (January 2026)
- VisitFolio: "10 Features Every Modern Portfolio Website Must Have in 2025" (September 2025)
- Hostinger: "19 Best Art Portfolio Website Examples for 2026" (March 2026)
- Colorlib: "20 Best Art Portfolio Websites (Examples) 2026" (March 2026)