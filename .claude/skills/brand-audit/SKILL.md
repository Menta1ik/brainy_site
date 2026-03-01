---
name: brand-audit
description: Verify Brainysoft output matches brand before commit or deploy
---

# Brand Audit Rules

## Run Before Every Commit or Deploy

## Step 1 — Load Brand Reference
1. Open homepage.png — extract all colors, fonts, spacing patterns
2. Check public/ — catalog all logos, icons, images
3. Note exact hex values for: primary, secondary, background, text, borders

## Step 2 — Color Audit
Check every color in the output against brand reference.
Report format:

AUDIT: Colors
PASS   Primary CTA button: #1D3557 — matches reference
PASS   Background: #F8F9FA — matches reference
FAIL   Link hover color: #3B82F6 — NOT in brand palette, replace with #1D3557
WARN   Card border: rgba(0,0,0,0.3) — too heavy, brand uses rgba(0,0,0,0.08)

## Step 3 — Typography Audit
Report format:

AUDIT: Typography
PASS   Heading font: Fraunces — matches reference
FAIL   Body font: Roboto — should be Inter per reference
PASS   H1 tracking: -0.03em — correct
FAIL   Body line-height: 1.5 — should be 1.7

## Step 4 — Logo and Assets Audit
Report format:

AUDIT: Assets
PASS   Logo: using /public/logo.svg — correct
PASS   Logo placement: top-left in header — matches reference
FAIL   Favicon: missing, add to /public/favicon.ico

## Step 5 — Interactive States Audit
Test every clickable element via Playwright MCP:

mcp__playwright__hover selector="button"
mcp__playwright__hover selector="a"
mcp__playwright__hover selector="[role='button']"

Report format:

AUDIT: Interactive States
PASS   Primary button hover: darkens correctly
FAIL   Nav links: no hover state visible
PASS   Focus ring: visible on Tab navigation
FAIL   CTA active state: no scale-[0.97] applied

## Step 6 — Final Sign-off
Only mark ready when all audits show PASS:

BRAND AUDIT COMPLETE
Colors:              PASS
Typography:          PASS
Assets:              PASS
Interactive States:  PASS
→ Ready for commit and deploy
