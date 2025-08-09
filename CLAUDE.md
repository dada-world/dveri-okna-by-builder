# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.
## Essential Development Commands

### Development Server
```bash
npm run dev     # Start development server (Next.js)
npm run build   # Build for production
npm run start   # Start production server
npm run lint    # Run ESLint linting
```

### Key Environment Configuration
- **Development**: Use `.env.local` with `NEXT_PUBLIC_FORM_ENDPOINT=/api/contact`
- **Production**: Uses `NEXT_PUBLIC_FORM_ENDPOINT="https://submit-form.com/esY14v503"`
## Architecture Overview

### Next.js App Router Structure
This is a **Next.js 14 project** with App Router, migrated from a React + Vite application:

- **`app/`** - Next.js App Router pages and layouts
  - `page.tsx` - Home page routing to `pages/Index.tsx`
  - `layout.tsx` - Root layout with SEO metadata and providers
  - `calculator/page.tsx` - Calculator page
  - `portfolio/` - Portfolio sections with sub-pages
  - `api/contact/route.ts` - Form submission API endpoint

### Component Architecture
- **`components/`** - All React components (business logic)
- **`components/ui/`** - shadcn/ui design system components
- **`pages/`** - Legacy page components (still used by App Router)
- **`lib/`** - Utility functions (`seo.ts`, `utils.ts`)
- **`hooks/`** - Custom React hooks

### Styling & UI Framework
- **Tailwind CSS** with custom brand colors (`tailwind.config.ts`)
- **shadcn/ui** components for consistent design system
- **Custom animations** defined in Tailwind config
- **Dark mode support** via `next-themes`

## Form Handling System

### Critical Form Configuration
The project has a **dual-endpoint form system** with fallback mechanism:

1. **Primary**: Local API endpoint (`/api/contact`) for development
2. **Fallback**: Direct submission to `submit-form.com` for production

**Key Implementation Details:**
- Form endpoint controlled by `NEXT_PUBLIC_FORM_ENDPOINT` environment variable
- API route handles CORS, 302 redirects correctly
- Two main forms: `ContactForm.tsx` and `WindowConfigurationForm.tsx`
- Both forms include comprehensive logging and error handling

## SEO Implementation

### Comprehensive SEO Setup
- **Structured data** (Schema.org) for LocalBusiness, Services, FAQ
- **Meta tags** optimized for local search (Лельчицы, Гомельская область)
- **Dynamic sitemap** (`app/sitemap.ts`) and robots.txt (`app/robots.ts`)
- **Open Graph** and Twitter Card meta tags
- **Multi-language support** (Russian primary)

### SEO Files Location
- `lib/seo.ts` - All SEO metadata and structured data generation
- Meta tags integrated in `app/layout.tsx` and individual page files

## Static Export Configuration

### Deployment Setup
- **Static export enabled** (`next.config.js` with `output: 'export'`)
- **GitHub Pages compatible** with `trailingSlash: true`
- **Image optimization disabled** for static hosting compatibility
- **ESLint ignored during builds** (legacy configuration)

## Development Workflow

### Local Development
1. Install dependencies: `npm install`
2. Create `.env.local` with form endpoint
3. Run development server: `npm run dev`
4. Forms will use local API endpoint with fallback

### Production Build
1. Run `npm run build` - creates static export in `dist/` folder
2. Forms automatically use external submit-form.com endpoint
3. All assets optimized for static deployment

## Important Business Context

This is a **Belarusian windows and doors company** website:
- **Location**: Лельчицы, Гомельская область  
- **Services**: PVC windows, doors, installation, calculator
- **Target market**: Local Belarusian customers
- **Language**: Russian (primary), with some Belarusian content

### Key Features
- **Window calculator** with pricing estimation
- **Portfolio galleries** for windows and doors
- **Contact forms** with technical specifications
- **SEO optimized** for local search queries
- **Mobile responsive** design

## Package Manager
Uses **Yarn 1.22.22** as specified in `packageManager` field of package.json.

## TypeScript Configuration
- **Strict mode enabled** with comprehensive type checking
- **Path aliases**: `@/*` points to root directory
- **Next.js TypeScript plugin** integrated