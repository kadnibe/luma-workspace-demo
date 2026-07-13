# Luma

A responsive product website built with Next.js. It includes a modern marketing landing page, working local login and registration flows, a protected dashboard, and sign out.

## Tech stack

- Next.js 16 with the App Router
- React 19
- TypeScript
- Tailwind CSS 4
- Lucide icons
- pnpm

## Pages

- `/` — landing page
- `/login` — login form
- `/register` — registration form
- `/dashboard` — responsive application dashboard with sample data

## Getting started

### Prerequisites

- Node.js 20.9 or newer
- pnpm 10 or newer

### Install and run

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Quality checks

```bash
pnpm lint
pnpm typecheck
pnpm build
```

To run the optimized production build locally:

```bash
pnpm start
```

## Project structure

```text
src/
├── app/
│   ├── (auth)/
│   │   ├── login/
│   │   └── register/
│   ├── dashboard/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
└── components/
    ├── auth-shell.tsx
    ├── footer.tsx
    ├── header.tsx
    └── logo.tsx
```

## Authentication note

The demo authentication stores account data only in the current browser. Passwords are hashed before local storage, the dashboard checks for an active local session, and sign out clears that session. Before deployment with real users, connect a server-side database and authentication provider, add server-side authorization, and replace the dashboard’s sample data with user-scoped data.
