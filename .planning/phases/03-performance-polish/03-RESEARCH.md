# Phase 3: Performance & Polish - Research

**Researched:** 2026-03-27
**Status:** Complete

## Domain Overview

Image optimization and performance finalization for a static artist portfolio website. The goal is fast load times and good user experience while showcasing artwork.

## Validation Architecture

**How to verify each requirement:**

| Requirement | Verification Method |
|-------------|---------------------|
| PER-01 (WebP + JPEG) | Check HTML uses `<picture>` element with source types |
| PER-02 (< 2MB) | Chrome DevTools Network tab: "Disable cache" + reload, check total transfer size |
| PER-03 (< 3s load) | Chrome DevTools Network tab: throttling to "Fast 3G", measure onload |
| PER-04 (width/height) | Inspect HTML: all `<img>` have explicit width/height attributes |

**Test Environment:**
- Browser: Chrome (latest) with DevTools
- Network: Disable cache, reload to measure
- Throttling: "Fast 3G" for realistic mobile performance

## Technical Approach

### Image Optimization Strategy

1. **User provides image URLs** - External hosting (per CONTEXT.md decisions)
2. **WebP primary + JPEG fallback** - Use `<picture>` element
3. **Compression via web tools** - TinyPNG or Squoosh (no CLI needed)
4. **Lazy loading** - Already present in HTML (`loading="lazy"`)

### HTML Structure for Picture Element

```html
<picture>
  <source srcset="image.webp" type="image/webp">
  <source srcset="image.jpg" type="image/jpeg">
  <img src="image.jpg" alt="..." width="800" height="600">
</picture>
```

Benefits:
- Browser selects best format it supports
- Falls back gracefully
- Width/height on `<img>` prevents layout shifts

### Performance Measurement

**Chrome DevTools workflow:**
1. Open DevTools → Network tab
2. Check "Disable cache"
3. Reload page (Ctrl+Shift+R)
4. Check "Size" column for total
5. Check "Waterfall" for load time
6. For mobile test: Network tab → dropdown → "Fast 3G"

### Current State Analysis

- **HTML**: Already has width/height on all images ✓
- **Lazy loading**: Already present ✓
- **Placeholder images**: SVG data URIs (very small, don't affect size)
- **External images**: Not yet implemented - need HTML updates

### Known Constraints

- Static hosting (GitHub Pages) - no server-side optimization
- User provides image URLs - need placeholder setup in HTML
- No build tools - keep it simple

## Common Pitfalls

1. **Forgetting fallback** - Always include JPEG source for older browsers
2. **Missing width/height** - Causes layout shift (CLS), must include on `<img>`
3. **Not testing on slow connection** - "Fast 3G" reveals real performance
4. **Oversized images** - Even with WebP, huge images hurt; compression essential
5. **Blocking render** - Keep CSS in head, JS at end of body (already done)

## Implementation Plan

### Tasks for Planning

1. **Image preparation instructions for user**
   - User compresses images using TinyPNG/Squoosh
   - Creates WebP + JPEG versions

2. **HTML update for responsive images**
   - Add `<picture>` elements to gallery
   - Keep width/height attributes
   - Add proper alt text

3. **Performance verification**
   - Measure total page size
   - Measure load time
   - Verify no layout shifts

---

*Research complete for Phase 3*
*Key insight: HTML already has good foundation (width/height, lazy loading). Main work is adding `<picture>` elements for format switching.*
