# DPG Legal Defense Dashboard

Legal defense dashboard for the DPG Kazakhstan mining tax dispute case.

## Case Overview

**Claim:** Kazakhstan State Revenue Department claims DPG owes ~$265,000 (129,829,500 KZT) in Corporate Income Tax based on 67 BTC allegedly received as mining revenue.

**Defense:** DPG was an infrastructure provider controlled by Enegix, never received or controlled any BTC. The tax declaration was made by Enegix's director without Hearst's authorization.

## Features

- **Dashboard**: Overview with KPIs, key evidence, and critical timeline
- **Evidence Repository**: All proof items with search, filtering, and categorization
- **Timeline**: Chronological view of all case events
- **Actors**: Interactive directory of all parties involved
- **Defense Strategy**: Legal arguments with supporting evidence
- **Documents**: File repository with categorization

## Tech Stack

- Next.js 15 (App Router)
- TypeScript
- Tailwind CSS
- shadcn/ui components
- Lucide Icons

## Getting Started

```bash
cd defense-dashboard
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
src/
├── app/
│   ├── page.tsx           # Dashboard
│   ├── evidence/          # Evidence page
│   ├── timeline/          # Timeline page
│   ├── actors/            # Actors page
│   ├── defense/           # Defense strategy
│   └── documents/         # Documents page
├── components/
│   ├── sidebar.tsx        # Navigation sidebar
│   └── ui/                # shadcn components
└── lib/
    ├── data.ts            # Case data (evidence, actors, timeline)
    ├── types.ts           # TypeScript types
    └── utils.ts           # Utilities
```
