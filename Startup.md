# Startup Guide (Node.js + Next.js + pnpm)

Use this guide to run the portfolio locally with pnpm.

## 1) Prerequisites

- Node.js 18+ (Node.js 20 LTS recommended)
- pnpm (recommended package manager for this repo)

If pnpm is not installed yet:

```bash
corepack enable
corepack prepare pnpm@latest --activate
```

## 2) Install dependencies

From the project root:

```bash
cd /workspaces/my-portfolio-menno
pnpm install
```

## 3) Start development server

```bash
pnpm dev
```

The Next.js app runs on:

- http://localhost:3000

## 4) Useful pnpm commands

```bash
pnpm lint
pnpm test
pnpm build
pnpm start
```

## 5) Environment setup

If needed, create your local env file from the template before running dev:

```bash
cp env.example.template .env.local
```
