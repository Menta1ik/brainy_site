# CLAUDE.md — Brainysoft Site

## Stack
- Next.js 14+ App Router, TypeScript strict, Tailwind CSS
- Sanity CMS for content
- Vercel deployment

## MCP Tools
| MCP        | When to use                                          |
|------------|------------------------------------------------------|
| Playwright | Screenshots, browser interaction, testing states     |
| Context7   | Add "use context7 for nextjs/tailwindcss/sanity"     |
| Ref        | mcp__ref__search_documentation for specific API docs |

## Workflow — follow this order, never skip steps

Step 1 — Explore
- Read brief and reference image
- Check public/ and homepage.png for visual reference
- mcp__playwright__navigate url="http://localhost:3000" to see current state
- Ask ONE clarifying question if needed, then wait for answer

Step 2 — Plan
- Write: section list, component names, color tokens, font pair
- Use context7 for nextjs to check current App Router patterns
- Wait for explicit approval before writing any code

Step 3 — Code
- Invoke /frontend-design before any UI work
- Invoke /nextjs-components before creating components
- Add "use context7 for tailwindcss" in every prompt with Tailwind
- Add "use context7 for sanity" when writing GROQ queries
- Use mcp__ref__search_documentation for edge cases

Step 4 — Verify
- Run npm run dev if server not running
- Invoke /screenshot-review
- mcp__playwright__screenshot url="http://localhost:3000"
- Use visual-reviewer agent to compare against homepage.png
- Minimum 2 full rounds — fix all diffs between rounds

Step 5 — Audit
- Invoke /brand-audit before any commit
- Test all interactive states via Playwright hover and click

## Skills
| Command               | When                            |
|-----------------------|---------------------------------|
| /frontend-design      | Before ANY UI code              |
| /screenshot-review    | After every visual change       |
| /brand-audit          | Before commit or deploy         |
| /nextjs-components    | When building new components    |

## Agents
- visual-reviewer: pixel-diff comparison between screenshot and homepage.png
  Invoke: "Use the visual-reviewer agent to compare the screenshot against homepage.png"

## Context Management
- Run /clear between unrelated tasks
- Run /compact Focus on visual diffs only before screenshot rounds
- Never carry context from one page to another

## Hard Rules
- No transition-all
- No default Tailwind blue or indigo as primary color
- No modifying sanity/ schemas without explicit instruction
- No any TypeScript types
- No file:/// screenshots — always localhost
- No adding content not in the reference
- Minimum 2 screenshot rounds before declaring done
