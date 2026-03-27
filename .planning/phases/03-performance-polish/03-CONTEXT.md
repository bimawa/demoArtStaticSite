# Phase 3: Performance & Polish - Context

**Gathered:** 2026-03-27
**Status:** Ready for planning

<domain>
## Phase Boundary

Image optimization and final accessibility verification. This phase ensures the portfolio loads fast and meets all performance requirements.

</domain>

<decisions>
## Implementation Decisions

### Image Optimization
- **Method:** Web tools (TinyPNG/Squoosh) — no installation needed
- **Process:** User will manually compress images using TinyPNG or Squoosh web tools
- **Target:** All 4 artwork images should be optimized

### Image Formats
- **Primary:** WebP format for modern browsers
- **Fallback:** JPEG for older browsers
- **Implementation:** Use <picture> element with WebP source and JPEG fallback

### Performance Testing
- **Method:** Browser DevTools Network tab
- **Targets:**
  - Total page size < 2MB
  - Page load time < 3 seconds on standard connection

### Image Hosting
- **Location:** External URLs (user will provide)
- **Implementation:** Update HTML to use external image URLs with WebP + JPEG fallback

</decisions>

<specifics>
## Specific Ideas

- Use TinyPNG (tinypng.com) or Squoosh (squoosh.app) to compress artwork images
- Create WebP versions + JPEG fallbacks for each artwork
- Use <picture> element in HTML for format switching
- Test with Chrome DevTools: Network tab for size, Lighthouse for load time
- User will provide external image URLs

</specifics>

<deferred>
## Deferred Ideas

- Local image hosting: User prefers external URLs
- CDN: Not needed for just 4 images
- Lightbox: Defer to v2+

</deferred>

---

*Phase: 03-performance-polish*
*Context gathered: 2026-03-27*
