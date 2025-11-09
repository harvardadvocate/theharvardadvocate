# The Harvard Advocate Website

The new website for the Harvard Advocate, built by Andreas Lordos '25. Currently maintained by Conan Lu '26 and the Tech Board.

Live at [https://advo-website-beta.web.app/](https://advo-website-beta.web.app/)

Reach out to `tech@theharvardadvocate.com` with any questions.

## Architecture

This is a monorepo managed with Lerna containing two packages:

- **`web/`** - The Advocate website built with Next.js 14 (Pages Router), using Static Site Generation (SSG) with Incremental Static Regeneration (ISR)
- **`studio/`** - The Sanity Content Studio for managing articles, issues, authors, and sections

The website pulls content from Sanity CMS using GROQ queries and pre-renders all pages at build time for optimal performance and SEO. Pages automatically revalidate every hour and can be instantly updated via webhook when content is published.

## Tech Stack

**Frontend:**
- Next.js 14 (Pages Router with SSG + ISR)
- React 18
- Theme UI for design system
- Emotion for CSS-in-JS
- next-seo for SEO optimization

**Content Management:**
- Sanity CMS (headless CMS)
- Sanity Studio for content editing
- GROQ for data queries
- Portable Text for rich content

**Key Features:**
- Static Site Generation (SSG) - All pages pre-rendered at build time
- Incremental Static Regeneration (ISR) - Pages auto-update every hour
- On-demand revalidation via webhooks
- JSON-LD structured data for SEO
- Auto-generated sitemap with next-sitemap
- Image optimization with Sanity CDN

## Setup

### Prerequisites
- Node.js 22.x
- npm

### Installation

```bash
# Install all dependencies
npm install

# Install Sanity CLI globally (needed for studio)
npm install -g @sanity/cli
```

(if `npm install -g @sanity/cli` doesn't work, try dropping the `-g`)

You might need to run `npm install` within the `web/` and `studio/` directories if Lerna doesn't handle it automatically.

### Environment Variables

Create a `.env.local` file in the `web/` directory:

```bash
NEXT_PUBLIC_SANITY_PROJECT_ID=sierqf4e
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_VERSION=2023-08-24
REVALIDATE_SECRET=your-secret-here
```

## Running Locally

```bash
npm run dev
```

This will start both:
- **Website:** [http://localhost:3000](http://localhost:3000)
- **Sanity Studio:** [http://localhost:3333](http://localhost:3333)

## Building

To build both the website and studio:

```bash
npm run build
```

This runs Lerna to build both packages. The website build generates:
- Pre-rendered HTML for all pages
- Optimized JavaScript bundles
- Sitemap and robots.txt

To run the production build locally:

```bash
cd web
npm run start
```

The production build will be available at [http://localhost:3000](http://localhost:3000).

## Deploying

### Current Deployment (Vercel)

The site is deployed on Vercel with automatic deployments on every push to `main`.

**Deployment workflow:**
1. Push to `main` branch
2. Vercel automatically detects changes
3. Builds the Next.js application
4. Deploys to production
5. Live in ~2-3 minutes

Vercel provides:
- Automatic Next.js optimization
- Seamless ISR support
- Zero-config deployments
- Preview deployments for PRs

See [`web/DEPLOYMENT.md`](web/DEPLOYMENT.md) for detailed instructions on:
- Setting up Vercel deployment
- Configuring environment variables
- Setting up Sanity webhooks for on-demand revalidation
- Performance comparison

## Code Quality

We use:
- **Prettier** - Code formatting
- **ESLint** - Code linting (warnings ignored during builds for now)

## Documentation

- **[web/DEPLOYMENT.md](web/DEPLOYMENT.md)** - Detailed deployment guide for Vercel with webhook setup
- **[web/README.md](web/README.md)** - Next.js architecture and development details
- **[web/SEO_TODO.md](web/SEO_TODO.md)** - SEO implementation tracking
- **[studio/README.md](studio/README.md)** - Sanity Studio documentation
- **[ARCHITECTURE.md](ARCHITECTURE.md)** - Migration story and technical decisions
- **[CONTRIBUTING.md](CONTRIBUTING.md)** - Developer guide for contributing

## Key Packages

- [Next.js](https://nextjs.org/) - React framework with SSG/ISR
- [Theme UI](https://theme-ui.com/) - Design system and theming
- [Sanity](https://www.sanity.io/) - Headless CMS
- [next-seo](https://github.com/garmeeh/next-seo) - SEO optimization
- [Emotion](https://emotion.sh/) - CSS-in-JS

## Project Structure

```
theharvardadvocate/
├── web/                    # Next.js website
│   ├── pages/              # Next.js pages (file-based routing)
│   │   ├── index.js        # Homepage
│   │   ├── about.js        # About page
│   │   ├── content/        # Article pages
│   │   ├── issues/         # Issue pages
│   │   ├── sections/       # Section pages
│   │   ├── authors/        # Author pages
│   │   └── api/            # API routes (revalidation webhook)
│   ├── lib/                # Utilities, queries, config
│   ├── src/                # Components and legacy code
│   └── public/             # Static assets
├── studio/                 # Sanity Studio
│   └── schemas/            # Content schemas
├── lerna.json              # Lerna monorepo config
└── package.json            # Root package file
```

## License

© The Harvard Advocate
