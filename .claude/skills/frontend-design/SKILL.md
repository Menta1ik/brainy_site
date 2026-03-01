---
name: frontend-design
description: Premium UI rules for Brainysoft — typography, shadows, colors, animations, depth
---

# Frontend Design Rules

## Before Writing Any Code
1. Check homepage.png in project root — this is the visual reference
2. Check public/ for existing logos and brand images
3. Run: use context7 for tailwindcss
4. If working with Next.js patterns: use context7 for nextjs
5. If working with Sanity: use context7 for sanity

## Output Format
- Next.js .tsx components with TypeScript strict mode
- Tailwind CSS utility classes only — no inline style={{}}
- next/image for ALL images (never img tag)
- next/link for ALL internal links (never a href)
- Mobile-first responsive

## Anti-Generic Guardrails

### Colors
- NEVER use default Tailwind palette (indigo-500, blue-600, slate-500, etc.)
- Extract brand colors from homepage.png or public/
- Define as CSS variables in src/app/globals.css:

  :root {
    --color-primary: #XXXXXX;
    --color-primary-hover: #XXXXXX;
    --color-surface: #XXXXXX;
    --color-surface-elevated: #XXXXXX;
    --color-text: #XXXXXX;
    --color-text-muted: #XXXXXX;
  }

- Use [var(--color-primary)] in Tailwind arbitrary values

### Shadows
- NEVER use flat shadow-sm, shadow-md, shadow-lg
- Always use layered color-tinted shadows via arbitrary values:
  [box-shadow:0_1px_2px_rgba(0,0,0,0.07),0_4px_16px_rgba(0,0,0,0.06),0_12px_40px_rgba(0,0,0,0.04)]
- Cards: add warm brand tint in deepest shadow layer

### Typography
- NEVER use same font for headings and body
- Load via next/font/google — never CDN link tags
- Recommended pairs: Fraunces + Inter / Playfair Display + DM Sans
- Large headings: tracking-tight + font-bold or font-black
- Body text: leading-relaxed + text-base
- Subheadings: tracking-[-0.02em] as arbitrary value

### Animations
- ONLY animate transform and opacity — never transition-all
- Use: transition-transform duration-200 or transition-opacity duration-300
- Spring easing: [transition-timing-function:cubic-bezier(0.34,1.56,0.64,1)]
- Page transitions: duration-400, micro-interactions: duration-150

### Interactive States
- Every button, a, clickable div MUST have:
  - hover: visual color or shadow change
  - focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)] focus-visible:ring-offset-2
  - active:scale-[0.97] active:transition-transform active:duration-100
- No exceptions

### Images
- Wrap in relative container
- Add gradient overlay: after:absolute after:inset-0 after:bg-gradient-to-t after:from-black/60 after:to-transparent
- Color treatment: mix-blend-multiply layer with brand color at low opacity

### Depth System
- Base: default page background, no shadow
- Elevated (cards, panels): bg-white/80 backdrop-blur-sm + layered shadow
- Floating (modals, dropdowns): bg-white + strongest shadow + z-50
- Each level must be visually distinct

### Spacing
- 4px base grid: p-1(4) p-2(8) p-3(12) p-4(16) p-6(24) p-8(32) p-12(48) p-16(64) p-24(96)
- Section vertical padding: minimum py-16, preferred py-24
- Never mix arbitrary px values and Tailwind steps in same component

## Hard Rules
- NO transition-all anywhere
- NO default Tailwind blue/indigo/slate as primary brand color
- NO style={{}} for values available as Tailwind utilities
- NO stopping after one screenshot — minimum 2 comparison rounds
- NO sections or content not present in the reference
- NO improvements to reference — match exactly
