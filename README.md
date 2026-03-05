# Chart-Sensei 📊

AI-powered trading education platform. Learn to read charts like a pro trader.

**Live:** [chart-sensei.com](https://chart-sensei.com)

## Features

- **AI Chart Analysis** — Upload any chart, get instant pattern detection, entry/exit points, and explanations
- **19 Trading Strategies** — From Support & Resistance to Smart Money Concepts
- **Quiz Mode** — 10 questions testing your chart reading skills
- **Trading Journal** — Log trades, track win rate, review performance
- **Live Charts** — TradingView integration
- **Pro Plan ($19/mo)** — Unlimited analyses, all strategies, quiz, journal

## Tech Stack

- **Next.js 14** (App Router, TypeScript)
- **Tailwind CSS** (Emerald dark theme)
- **Supabase** (Auth, PostgreSQL, RLS)
- **Stripe** (Subscriptions)
- **Claude Vision API** (Chart analysis)
- **TradingView** (Live charts widget)
- **Vercel** (Hosting)

## Setup

1. Clone the repo
2. Copy `.env.example` to `.env.local` and fill in values
3. Create a Supabase project and run `supabase/schema.sql`
4. Set up Stripe product with $19/mo price
5. `npm install && npm run dev`

## Environment Variables

See `.env.example` for all required variables.
