# RelocIQ — Live Smarter. Move Anywhere.

Global relocation intelligence tool combining visa eligibility checking with cost of living comparison. Built with Next.js 14, TypeScript, Tailwind CSS, shadcn/ui, Framer Motion, Prisma + SQLite, and the Anthropic Claude API.

## Quick Start

### 1. Install dependencies
```bash
npm install
```

### 2. Configure environment variables
Edit `.env.local` and add your keys:
```
ANTHROPIC_API_KEY=your_actual_anthropic_api_key
DATABASE_URL="file:./dev.db"
ADMIN_PASSWORD=your_secure_password
```

### 3. Run database migrations
```bash
npx prisma migrate dev --name init
```

### 4. Start the development server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

---

## Features

- **Visa Intelligence** — Real-time visa requirements via Claude AI for any passport/destination combo
- **Cost of Living** — Side-by-side cost breakdown with lifestyle score relative to income
- **Multi-destination** — Compare up to 3 destinations simultaneously
- **Shareable reports** — URL encodes all inputs for bookmarkable, shareable reports
- **SEO Guide Pages** — Static pages for 20 popular destinations with JSON-LD schema
- **Lead capture** — Email capture with SQLite storage via Prisma
- **Admin dashboard** — Password-protected leads table at `/admin/leads`
- **Dark mode** — Full dark mode support via Tailwind

## Routes

| Route | Description |
|-------|-------------|
| `/` | Main relocation report tool |
| `/guides/[country]` | SEO guide pages (20 countries) |
| `/admin/leads?password=xxx` | View collected email leads |
| `/api/visa` | POST — visa intelligence via Claude |
| `/api/compare` | POST — cost of living via Claude |
| `/api/leads` | POST — save lead to SQLite |
| `/sitemap.xml` | Auto-generated sitemap |
| `/robots.txt` | SEO robots configuration |

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS + shadcn/ui
- **Animations**: Framer Motion
- **Database**: Prisma + SQLite
- **AI**: Anthropic Claude API (`claude-sonnet-4-20250514`)
- **Icons**: Lucide React

## Getting an Anthropic API Key

1. Visit [console.anthropic.com](https://console.anthropic.com)
2. Create an account and generate an API key
3. Add it to `.env.local` as `ANTHROPIC_API_KEY`
