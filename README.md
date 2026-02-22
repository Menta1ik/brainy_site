# BrainySoftware — Corporate Website

Corporate website for [BrainySoftware](https://brainysoft.biz), a custom software development company based in Tallinn, Estonia (est. 2009).

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 16 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS 4 |
| CMS | Sanity v5 (headless) |
| Email | Resend |
| Validation | Zod |
| Font | JetBrains Mono |

## Project Structure

```
src/
├── app/
│   ├── api/contact/       # Contact form endpoint
│   ├── company/
│   │   ├── team/          # Team page
│   │   └── why-choose-us/ # Why Choose Us page
│   ├── contacts/          # Contact page
│   ├── services/          # Services page
│   ├── studio/            # Embedded Sanity Studio
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   ├── sitemap.ts         # Dynamic sitemap
│   └── robots.ts          # Robots.txt
├── components/
│   ├── layout/            # Header, Footer, MobileMenu
│   ├── sections/          # Page sections (Hero, About, CTA, etc.)
│   ├── seo/               # JSON-LD component
│   └── ui/                # Button, Card, Input, Container, etc.
├── lib/
│   ├── sanity/            # Sanity client, queries, types, image helper
│   ├── constants.ts       # Site config, nav items, services, industries
│   ├── schemas.ts         # Zod validation schemas
│   └── utils.ts           # cn() utility
└── types/                 # Shared TypeScript types

sanity/
├── schemas/               # Sanity document schemas
├── sanity.config.ts       # Studio config
└── sanity.cli.ts          # CLI config

public/
└── llms.txt               # AI crawler info file
```

## Getting Started

### Prerequisites

- Node.js 20+
- Sanity account with project ID

### Environment Variables

Create `.env.local`:

```env
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_TOKEN=your_token
RESEND_API_KEY=your_resend_key
CONTACT_EMAIL=your@email.com
```

### Install & Run

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Sanity Studio

Embedded at `/studio` or run standalone:

```bash
cd /path/to/sanity-project
npx sanity dev
```

## SEO & AI Optimization

- JSON-LD structured data (Organization, LocalBusiness, Service, Person)
- Dynamic sitemap and robots.txt
- Open Graph and meta tags via Next.js Metadata API
- `llms.txt` for AI crawlers
- Semantic HTML throughout

## Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start dev server |
| `npm run build` | Production build |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |

## License

Private. All rights reserved.
