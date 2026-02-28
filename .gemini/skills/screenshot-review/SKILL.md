---
name: screenshot-review
description: Visual QA via Playwright MCP — compare output vs reference
---

# Screenshot Review Protocol

## Prerequisites
- Dev server running: npm run dev → http://localhost:3000
- Reference image: homepage.png in project root
- Use Playwright MCP only — never file:/// URLs

## Playwright MCP Commands

Basic screenshot:
mcp__playwright__screenshot url="http://localhost:3000"

With label:
mcp__playwright__screenshot url="http://localhost:3000" name="round-1"

Sub-pages:
mcp__playwright__screenshot url="http://localhost:3000/about"

Responsive testing:
mcp__playwright__screenshot url="http://localhost:3000" width=375 height=812
mcp__playwright__screenshot url="http://localhost:3000" width=768 height=1024
mcp__playwright__screenshot url="http://localhost:3000" width=1440 height=900

Testing interactive states:
mcp__playwright__navigate url="http://localhost:3000"
mcp__playwright__hover selector=".your-button-selector"
mcp__playwright__click selector="[data-action='open-menu']"

## Review Checklist
After EVERY screenshot, check each item against homepage.png:

Layout & Structure
- Section order matches reference top-to-bottom
- Grid columns and gaps correct
- Max-width and horizontal centering correct
- No unexpected overflow, clipping, or scrollbar

Typography
- Heading font is different from body font
- Font sizes match reference (give exact px values)
- Font weight matches (400/500/600/700/800)
- tracking-tight on large headings
- leading-relaxed on body text

Colors & Visual
- Brand primary color matches exactly (give hex values)
- Background gradients match reference
- Text and muted text colors correct
- No default Tailwind blue or indigo visible

Components
- Border-radius consistent and matches reference
- Shadows are layered and tinted (not flat grey)
- Image overlays and aspect ratios correct
- Button and link styles match

Interactive States
- Hover state visible on all buttons and links
- Focus ring visible on keyboard navigation
- Active press scale applied
- No transition-all in computed styles

Responsive — test all 3 breakpoints
- Mobile 375px: single column, no overflow
- Tablet 768px: layout adjusts correctly
- Desktop 1440px: max-width centered, no stretching

## Iteration Rules
- List EVERY difference with exact values after each screenshot
  Good: "H1 font-size: 40px in output, ~32px in reference"
  Bad: "font looks a bit large"
- Fix ALL listed diffs before next screenshot
- Minimum 2 full rounds before declaring done
- Stop only when: zero visible differences OR user says approved
