---
name: nextjs-components
description: Next.js/TypeScript component rules for Brainysoft site
---

# Next.js Component Rules

## Always Do First
Before writing any component:
- use context7 for nextjs
- use context7 for tailwindcss
- For Sanity queries: use context7 for sanity
- For specific API edge cases: mcp__ref__search_documentation query="next/image props"

## File Structure

src/
  app/
    layout.tsx          root layout, fonts loaded here
    page.tsx            homepage, imports sections
    [route]/
      page.tsx
  components/
    ui/                 Button, Card, Badge, Input, Modal
    sections/           Hero, Features, Pricing, Testimonials, CTA
    layout/             Header, Footer, Navigation, MobileMenu
    [Name].tsx          standalone components
  lib/
    utils.ts            cn() and other helpers

## Component Template

import { type FC } from 'react'
import { cn } from '@/lib/utils'

interface ComponentNameProps {
  className?: string
}

const ComponentName: FC<ComponentNameProps> = ({ className }) => {
  return (
    <section className={cn('', className)}>
    </section>
  )
}

export default ComponentName

## TypeScript Rules
- Strict mode — zero any types
- Always define props interface above component
- Use type for unions, interface for component props

## Next.js Rules
- Server Component by default
- Add 'use client' ONLY for: useState, useEffect, onClick, browser APIs
- next/image for ALL images — always specify width and height or fill
- next/link for ALL internal navigation
- Fonts: load in app/layout.tsx via next/font/google, pass as CSS variable

## Tailwind Rules
- Use cn() from @/lib/utils for conditional classes
- Follow design tokens from frontend-design skill
- No arbitrary pixel values when Tailwind step exists

## Sanity Rules
- Use existing query patterns found in src/
- Do NOT create new schemas without explicit instruction
- Always use context7 for sanity when writing GROQ queries
- Use existing PortableText component for rich text

## State Handling
Every component must handle all three states:
- Loading: animate-pulse bg-gray-200 rounded skeleton
- Empty: meaningful message with icon
- Error: red-tinted border + error message + retry option

## Accessibility
- All images: meaningful alt text, never empty unless decorative
- Icon-only buttons: aria-label with descriptive action
- All form inputs: associated label with htmlFor
- Color contrast: minimum 4.5:1 for text, 3:1 for UI elements

## Delivery Format
When creating a new component, always provide:
1. The .tsx file
2. Where it gets imported (page or layout)
3. CSS variables it consumes from globals.css
4. Whether use client was added and why
