---
phase: 01
slug: html-structure-content
status: draft
nyquist_compliant: true
wave_0_complete: false
created: 2026-03-27
---

# Phase 01 — Validation Strategy

> Per-phase validation contract for feedback sampling during execution.

---

## Test Infrastructure

| Property | Value |
|----------|-------|
| **Framework** | None — Static HTML/CSS project |
| **Config file** | N/A |
| **Quick run command** | `ls -la index.html` (file exists check) |
| **Full suite command** | Manual browser verification |
| **Estimated runtime** | N/A |

---

## Sampling Rate

- **After every task commit:** Verify file exists and structure check
- **After every plan wave:** Manual browser preview verification
- **Before `/gsd-verify-work`:** Manual accessibility check
- **Max feedback latency:** Immediate (file checks are instant)

---

## Per-task Verification Map

| Task ID | Plan | Wave | Requirement | Test Type | Automated Command | File Exists | Status |
|---------|------|------|-------------|-----------|-------------------|-------------|--------|
| 01-01-01 | 01 | 1 | LAY-01, LAY-05 | file-exists | `ls index.html` | ✅ | ⬜ pending |
| 01-02-01 | 02 | 1 | LAY-02 | html-check | `grep -c "<section id=\"hero\">" index.html` | ✅ | ⬜ pending |
| 01-02-02 | 02 | 1 | LAY-03 | html-check | `grep -c '<figure' index.html` | ✅ | ⬜ pending |
| 01-02-03 | 02 | 1 | LAY-04 | html-check | `grep -c '<form' index.html` | ✅ | ⬜ pending |

*Status: ⬜ pending · ✅ green · ❌ red · ⚠️ flaky*

---

## Wave 0 Requirements

- [ ] Create project directory structure (if needed)
- [ ] Create placeholder images directory

*Wave 0 is minimal for static HTML project - no test framework needed.*

---

## Manual-Only Verifications

| Behavior | Requirement | Why Manual | Test Instructions |
|----------|-------------|------------|-------------------|
| Semantic HTML renders correctly | LAY-01 | Browser rendering verification | Open index.html in browser |
| Hero section displays | LAY-02 | Visual verification | Check hero section renders |
| Gallery shows 4 artworks | LAY-03 | Visual verification | Verify 4 figure elements |
| Contact form renders | LAY-04 | Visual verification | Check form fields exist |
| Smooth scroll navigation | FUN-01 | Interactive test | Click nav links |
| Alt text on images | ACC-01 | Accessibility check | Verify alt attributes present |
| Heading hierarchy | ACC-02 | HTML structure check | Verify h1 > h2 > h3 pattern |
| Works in modern browsers | FUN-03 | Cross-browser test | Test in Chrome/Firefox/Safari/Edge |

---

## Validation Sign-Off

- [ ] HTML files exist with valid structure
- [ ] Semantic sections present (header, nav, main, section, footer)
- [ ] All required requirements mapped to tasks
- [ ] Manual verification steps documented
- [ ] `nyquist_compliant: true` set in frontmatter

**Approval:** pending

---

*For this static HTML/CSS project, validation is primarily manual browser-based verification. Automated checks focus on file existence and basic HTML structure.*
