# Domain Pitfalls

**Domain:** Artist Portfolio Website
**Researched:** March 2026

## Critical Pitfalls

Mistakes that cause rewrites or major issues.

### Pitfall 1: Unoptimized Images Causing Slow Load Times

**What goes wrong:** Large, uncompressed artwork images cause the site to load slowly, driving away visitors. Research shows 89% of portfolio website issues stem from performance problems.

**Why it happens:** Artists want to showcase high-quality work and upload full-resolution images without compression. GitHub Pages has no server-side optimization.

**Consequences:** High bounce rates, poor mobile experience, negative impression on potential clients/galleries.

**Prevention:** 
- Compress all images before upload using tools like TinyPNG, ImageOptim, or Squoosh
- Use appropriate formats (WebP with JPEG fallbacks)
- Implement lazy loading for below-the-fold images
- Set explicit width/height attributes to prevent layout shifts

**Warning signs:** 
- Total page size exceeds 2MB
- Images load progressively (top to bottom)
- Mobile connection shows slow load times

**Phase:** This should be addressed during implementation (Phase 1-2) through image optimization workflow

### Pitfall 2: Broken or Missing Contact Information

**What goes wrong:** Contact form doesn't work, email is hidden, or contact section is buried at the bottom without clear calls-to-action.

**Why it happens:** Artists fear spam, or contact section is treated as an afterthought rather than a primary conversion point.

**Consequences:** The main purpose of a "визитка" (digital business card) is defeated — potential clients cannot reach the artist.

**Prevention:**
- Use a simple contact form with Formspree or similar static-friendly service
- Display email clearly (consider using JavaScript obfuscation to reduce spam)
- Include social media links if applicable
- Make contact section prominent, not hidden

**Warning signs:**
- Contact section requires scrolling past gallery to find
- No clear "Get in Touch" or similar CTA
- Email is displayed as plain text without obfuscation

**Phase:** Address during initial design and implementation

### Pitfall 3: Non-Responsive Mobile Experience

**What goes wrong:** Portfolio looks good on desktop but breaks on mobile — images overflow, text is too small, navigation is unusable.

**Why it happens:** Testing only on desktop browser, or using fixed widths that don't adapt to viewport.

**Consequences:** 50%+ of visitors access via mobile; broken mobile experience loses half your audience.

**Prevention:**
- Use responsive design with CSS flexbox/grid
- Test on actual mobile devices or browser dev tools
- Implement viewport meta tag
- Ensure touch targets are at least 44px

**Warning signs:**
- Horizontal scrolling on mobile
- Text requires pinch-to-zoom to read
- Gallery images cut off or require horizontal scroll

**Phase:** Address during CSS/responsive implementation phase

## Moderate Pitfalls

### Pitfall 4: Poor Image Presentation

**What goes wrong:** Artwork is displayed with compression artifacts, awkward cropping, inconsistent sizing, or distracting backgrounds/frames.

**Why it happens:** CSS image styling is an afterthought, or artist doesn't understand how browsers render images.

**Consequences:** Artwork doesn't look professional; colors may appear wrong; focus is on presentation, not art.

**Prevention:**
- Use CSS `object-fit: contain` for artwork to show full image without cropping
- Add subtle shadow or border to separate art from background
- Maintain consistent aspect ratios across gallery items
- Test color accuracy on multiple devices

**Warning signs:**
- Artwork appears cropped in gallery view
- Inconsistent image sizes in grid
- Visible compression artifacts on close inspection

**Phase:** Address during gallery implementation

### Pitfall 5: Design Overwhelms Content

**What goes wrong:** Elaborate animations, flashy transitions, dark patterns, or bold backgrounds distract from the artwork itself.

**Why it happens:** Desire to create a "memorable" experience leads to overdesign. For an artist portfolio, the art should be the focus.

**Consequences:** Visitor remembers the website, not the art. The portfolio becomes about the design, not the artist's work.

**Prevention:**
- Keep design minimal — let artwork speak
- Use subtle hover effects only
- Choose neutral background (white or light gray) to not clash with artwork
- Limit to 2-3 colors maximum

**Warning signs:**
- More than 3 fonts used
- Animations that take more than 0.3s
- Background patterns or textures that compete with art

**Phase:** Address during design decisions (early phase)

### Pitfall 6: Navigation Confusion

**What goes wrong:** Single-page site has navigation elements that go nowhere, or anchor links don't work properly with smooth scroll disabled.

**Why it happens:** Copy-pasting template code with multi-page navigation into single-page design.

**Consequences:** Users click expecting page change, nothing happens — creates confusion and frustration.

**Prevention:**
- Since this is a single-page site, use anchor links (e.g., `#gallery`, `#contact`)
- Implement smooth scroll CSS
- If no navigation needed, omit it entirely
- Keep navigation simple: only sections that exist on the page

**Warning signs:**
- Nav items link to non-existent sections
- "Home" link on single-page site
- Broken anchor scroll behavior

**Phase:** Address during structure implementation

### Pitfall 7: Missing Alt Text for Accessibility

**What goes wrong:** Artwork images have no alt text, making the site unusable for screen reader users and hurting SEO.

**Why it happens:** Alt text seen as optional or unnecessary for "visual" content.

**Consequences:** Violates accessibility best practices; artists miss SEO opportunities; exclusion of visitors with visual impairments.

**Prevention:**
- Add descriptive alt text to every artwork image
- Format: "[Artwork Title], [medium], [year]" or similar descriptive format
- Use alt="" for purely decorative elements
- Test with screen reader or accessibility checker

**Warning signs:**
- `<img>` tags without alt attribute
- Generic alt text like "artwork" or "image"
- No accessibility testing performed

**Phase:** Address during HTML implementation

## Minor Pitfalls

### Pitfall 8: Inconsistent Visual Hierarchy

**What goes wrong:** Section headings use different sizes, spacing is inconsistent, or font choices clash.

**Why it happens:** No design system or style guide, building incrementally without consistency checks.

**Consequences:** Site looks unprofessional and unpolished; reduces perceived quality of artwork.

**Prevention:**
- Define heading sizes (h1 > h2 > h3) and stick to them
- Use consistent spacing (margins/padding in multiples of 8px or similar)
- Limit font families to 2 maximum
- Apply consistent colors for similar elements

**Warning signs:**
- Section headings appear at different sizes unexpectedly
- Inconsistent button styles
- Random spacing between elements

**Phase:** Address during CSS implementation

### Pitfall 9: No Loading State for Images

**What goes wrong:** Page loads, then images "pop" in one by one, causing layout shifts and jarring experience.

**Why it happens:** No placeholder strategy, images load asynchronously without visual feedback.

**Consequences:** Poor user experience, layout shifts that push content around, unprofessional feel.

**Prevention:**
- Use CSS background color on image containers while loading
- Add subtle fade-in animation once image loads
- Preload critical above-the-fold images
- Use loading="lazy" for below-fold images

**Warning signs:**
- Images appear to "pop" in after page loads
- Content jumps as images load
- No placeholder visible before image loads

**Phase:** Address during implementation

## Phase-Specific Warnings

| Phase Topic | Likely Pitfall | Mitigation |
|-------------|---------------|------------|
| Image optimization | Unoptimized images causing slow load | Pre-optimize all images before implementation; set size budgets |
| Contact section design | Broken contact method | Test contact form submission early; don't defer to end |
| Responsive design | Mobile issues | Test on mobile devices throughout, not just at end |
| Gallery implementation | Poor image presentation | Use object-fit CSS; test on multiple viewports |
| Final review | Design overwhelms content | Conduct "artwork visibility" test — can you spot the art immediately? |

## Sources

- [Vsble: Top Portfolio Website Mistakes Creatives Must Avoid in 2025](https://www.getvsble.com/blog/portfolio-website-mistakes-creatives-2025-en) — Published July 2025
- [Muzli: Portfolio Mistakes Designers Still Make in 2026](https://muz.li/blog/portfolio-mistakes-designers-still-make-in-2026/) — Published January 2026
- [ArtBlast: 10 Portfolio Mistakes That Kill Your Applications in 2026](https://artblast.co/portfolio-mistakes/) — Published February 2026
- [Translate.Photo: Balancing Image Quality and Load Speed for Portfolio Links](https://www.translate.photo/image-optimization/balancing-image-quality-load-speed) — Published March 2026
- [OneWebCare: Image-Heavy Event Portfolio Speed Tips 2026](https://onewebcare.com/blog/event-portfolio-website-speed/) — Published January 2026
