# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a **Next.js 15** landing page for Streamfizz, a French video streaming platform. It uses the App Router with TypeScript, Tailwind CSS, and Strapi CMS for content management.

## Common Commands

### Development
```bash
npm run dev          # Start development server with Turbopack
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm run typecheck    # Run TypeScript compiler check
```

### Content Management
- Blog content is managed through Strapi CMS
- Content updates trigger revalidation via `/api/revalidate` webhook
- Images are proxied through `/cms-images/*` rewrites in Next.js config

## Architecture

### Technology Stack
- **Next.js 15.2.4** with App Router and React 19
- **TypeScript** throughout with strict mode
- **Tailwind CSS** with custom design system
- **shadcn/ui** component library (40+ Radix UI components)
- **Zustand** for state management
- **Strapi** headless CMS integration
- **SendGrid** for email functionality
- **Framer Motion** for animations

### Key Directory Structure
```
app/                    # Next.js App Router pages
├── api/               # API routes (contact, revalidate)
├── blog/              # Dynamic blog with [slug] routing
├── cas-usages/        # Use case pages
├── legal/             # Legal pages
└── prix/              # Pricing page

components/            # Reusable UI components
├── Blog/             # Blog-specific components
├── ui/               # shadcn/ui components
└── [various components]

sections/             # Page sections and layouts
lib/                  # Utility functions and configurations
store/               # Zustand state management
schemas/             # Zod validation schemas
hooks/               # Custom React hooks
```

### Configuration Files
- **next.config.mjs**: Rewrites for Strapi images, redirects for SEO
- **tailwind.config.ts**: Custom colors with CSS variables, dark mode support
- **components.json**: shadcn/ui configuration with Lucide icons
- **tsconfig.json**: Path aliases (`@/*` → `./`)

## Key Features

### Content Management
- Blog articles fetched from Strapi CMS
- Dynamic routing with `/blog/[slug]`
- Category-based filtering
- Real-time revalidation on content updates

### Forms & Communication
- Contact forms with React Hook Form + Zod validation
- SendGrid integration for email notifications
- Multiple contact types (contact, demo, try)
- Crisp chat integration with fallback modal

### SEO & Performance
- Dynamic sitemap generation (`/sitemap.xml`)
- OpenGraph and JSON-LD structured data
- Image optimization with Next.js Image
- Code splitting with dynamic imports

## Development Patterns

### Component Architecture
- Atomic design with ui components, sections, and pages
- Dynamic imports for performance optimization
- TypeScript interfaces for all props and data structures

### State Management
- Zustand for contact modal state
- React Context for theme management
- Local state with React hooks for component-specific logic

### API Integration
- Strapi CMS for blog content with TypeScript interfaces
- SendGrid for email functionality
- Revalidation webhook for content updates

## Environment Variables Required
```env
STRAPI_API_URL=http://localhost:1337
NEXT_PUBLIC_STRAPI_UPLOADS_URL=http://localhost:1337
REVALIDATION_TOKEN=F6I0eng4DyXIHK8Wg5HEzpikvpfIbvtV
STRAPI_API_TOKEN=[your-strapi-token]
NEXT_PUBLIC_URL=http://localhost:3000
```

## Important Notes

- All content is in French - maintain language consistency
- Use shadcn/ui components for new UI elements
- Forms must use React Hook Form + Zod validation pattern
- Images should be optimized with Next.js Image component
- SEO metadata is managed per-page with Next.js metadata API
- Blog content comes from Strapi - never hardcode blog data