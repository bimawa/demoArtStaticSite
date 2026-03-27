# Phase 2: CSS Styling & Responsive Design - Executor Guide

**Quick Reference for Implementing Phase 2**

---

## What You're Building

Transform the HTML skeleton into a polished, mobile-responsive portfolio with:
- Warm cream background (#FDFBF7) + soft black text (#1A1A1A)
- Lora serif headings + Nunito sans-serif body
- 1-column mobile, 2-column tablet, 3-column desktop gallery
- Subtle hover effects (lift + shadow)
- 44px minimum touch targets
- Consistent 8px-based spacing

---

## Execution Order

### Wave 1 (Can run in parallel)
1. **Plan 01** — CSS Foundation & Design Tokens (45 min)
2. **Plan 02** — Typography & Component Styling (55 min)

### Wave 2 (After Wave 1 completes)
3. **Plan 03** — Responsive Design & Breakpoints (50 min)

**Total Time:** ~150 minutes (2.5 hours)

---

## Key Files

- **css/styles.css** — The only file you'll modify
- **index.html** — Already correct, no changes needed
- **.planning/phases/02-css-styling-responsive-design/02-01-PLAN.md** — Plan 1 tasks
- **.planning/phases/02-css-styling-responsive-design/02-02-PLAN.md** — Plan 2 tasks
- **.planning/phases/02-css-styling-responsive-design/02-03-PLAN.md** — Plan 3 tasks

---

## Critical Values (Copy-Paste Ready)

### Colors
```css
--color-bg: #FDFBF7;        /* Warm cream background */
--color-text: #1A1A1A;      /* Soft black text */
--color-border: #E8E6E1;    /* Light border */
```

### Spacing (8px base unit)
```css
--space-xs: 8px;
--space-sm: 16px;
--space-md: 24px;
--space-lg: 32px;
--space-xl: 48px;
--space-2xl: 64px;
```

### Typography
```css
--font-serif: 'Lora', Georgia, serif;
--font-sans: 'Nunito', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
--transition-fast: 0.2s ease;
```

### Google Fonts Import
```css
@import url('https://fonts.googleapis.com/css2?family=Lora:wght@400;600&family=Nunito:wght@400;600;700&display=swap');
```

### Hover Effect
```css
.artwork:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 16px rgba(26, 26, 26, 0.12);
}
```

### Responsive Breakpoints
```css
/* Mobile: default styles (< 768px) */
/* Tablet: @media (min-width: 768px) */
/* Desktop: @media (min-width: 1024px) */
```

---

## Success Checklist

### Plan 01 Complete?
- [ ] `:root` block with CSS variables at top of file
- [ ] All colors use variables (no hardcoded #hex values)
- [ ] All spacing uses variables (no hardcoded px values)
- [ ] Google Fonts import at top of file
- [ ] Headings use Lora serif font
- [ ] Body uses Nunito sans-serif font
- [ ] Background is warm cream (#FDFBF7)
- [ ] Text is soft black (#1A1A1A)

### Plan 02 Complete?
- [ ] h1 is prominent (clamp(2.5rem, 4vw, 3.5rem))
- [ ] h2 is secondary (clamp(1.75rem, 2.5vw, 2.25rem))
- [ ] h3 is artwork titles (1.125rem)
- [ ] Body text is 16px (readable without zoom)
- [ ] Gallery items have no white background
- [ ] Gallery items have no border
- [ ] Featured image is 3:2 aspect ratio
- [ ] Regular gallery items are 1:1 aspect ratio
- [ ] Hover effect lifts items (-4px translateY)
- [ ] Hover effect adds soft shadow

### Plan 03 Complete?
- [ ] Gallery is 1 column on mobile
- [ ] Gallery is 2 columns on tablet (768px+)
- [ ] Gallery is 3 columns on desktop (1024px+)
- [ ] Featured image spans 2 rows on desktop
- [ ] All text readable without pinch-to-zoom
- [ ] All buttons/inputs are 44px minimum height
- [ ] Navigation links have adequate touch targets
- [ ] Spacing scales across breakpoints
- [ ] No layout breaks between breakpoints

---

## Testing Checklist

### Visual Testing
- [ ] Page looks clean and minimal
- [ ] Artwork is the focal point (no distracting borders)
- [ ] Colors are warm cream + soft black (no grays)
- [ ] Headings are serif, body is sans-serif
- [ ] Spacing is consistent and balanced

### Responsive Testing
- [ ] Mobile (375px): 1 column gallery, readable text
- [ ] Tablet (768px): 2 column gallery, medium spacing
- [ ] Desktop (1280px): 3 column gallery, generous spacing
- [ ] No horizontal scrolling at any size
- [ ] No text requires pinch-to-zoom

### Interaction Testing
- [ ] Hover on gallery items (desktop): lifts with shadow
- [ ] Tap gallery items (mobile): active state shows
- [ ] Click buttons: 44px minimum, easy to tap
- [ ] Click form inputs: 44px minimum, easy to interact
- [ ] Click navigation links: adequate spacing, no overlap

### Browser Testing
- [ ] Chrome (latest)
- [ ] Firefox (latest)
- [ ] Safari (latest)
- [ ] Edge (latest)

### Performance Testing
- [ ] CSS file size < 50KB
- [ ] No unused CSS
- [ ] Lighthouse CSS performance score > 90
- [ ] Fonts load with display=swap (no FOIT)

---

## Common Pitfalls to Avoid

1. **Don't use max-width media queries** — Use min-width for mobile-first
2. **Don't hardcode colors** — Use CSS variables
3. **Don't hardcode spacing** — Use CSS variables
4. **Don't animate non-GPU properties** — Only transform and box-shadow
5. **Don't remove focus outlines** — Keep them for accessibility
6. **Don't use white backgrounds on gallery items** — Keep them transparent
7. **Don't use 4:3 aspect ratio for gallery** — Use 1:1 for regular, 3:2 for featured
8. **Don't forget touch targets** — All interactive elements must be 44px minimum

---

## Quick Debugging

**Gallery not responsive?**
- Check media queries use `min-width` (not `max-width`)
- Verify breakpoints are 768px and 1024px
- Check grid-template-columns values

**Text too small on mobile?**
- Verify body font-size is 1rem (16px)
- Check clamp() values for headings
- Test on actual mobile device (not just DevTools)

**Hover effect not working?**
- Check transition property is set
- Verify transform: translateY(-4px) is in :hover
- Check box-shadow is present
- Test on desktop (hover doesn't work on mobile)

**Colors look wrong?**
- Verify background is #FDFBF7 (warm cream)
- Verify text is #1A1A1A (soft black)
- Check no hardcoded colors remain
- Clear browser cache

**Fonts not loading?**
- Check Google Fonts import is at top of file
- Verify display=swap is in URL
- Check Network tab in DevTools for googleapis.com
- Verify fallback fonts are specified

---

## When You're Done

1. Run all 3 plans to completion
2. Verify all success criteria are met
3. Test on mobile, tablet, and desktop
4. Test on multiple browsers
5. Run Lighthouse audit
6. Commit changes to git
7. Proceed to Phase 3 (Performance & Polish)

---

**Ready to execute? Start with Plan 01!**

