# Architecture Documentation

This document describes the technical architecture of The Harvard Advocate website, the migration from Create React App to Next.js, and the rationale behind key technical decisions.

## Table of Contents

- [Overview](#overview)
- [Migration History](#migration-history)
- [Current Architecture](#current-architecture)
- [Static Site Generation (SSG)](#static-site-generation-ssg)
- [Incremental Static Regeneration (ISR)](#incremental-static-regeneration-isr)
- [Monorepo Structure](#monorepo-structure)
- [Legacy Code](#legacy-code)
- [Technical Decisions](#technical-decisions)
- [Performance Metrics](#performance-metrics)

## Overview

The Harvard Advocate website is a statically-generated website built with Next.js 14 (Pages Router) that pulls content from Sanity CMS. The architecture prioritizes:

1. **Performance** - Pre-rendered pages for instant loading
2. **SEO** - Full HTML content for search engines
3. **Developer Experience** - Clear patterns and organized code
4. **Content Management** - Easy-to-use CMS for editors
5. **Cost Efficiency** - Reduced API calls to Sanity

## Migration History

### Phase 1: Create React App (Original Architecture)

**Timeline:** Initial development - Late 2023
**Built by:** Andreas Lordos '25

**Stack:**
- React 17
- React Router v6
- Create React App
- Sanity CMS
- Theme UI + Emotion
- Firebase Hosting

**Architecture Pattern:** Client-Side Rendering (CSR)

**How it worked:**
1. User visits website
2. Server sends minimal HTML with loading spinner
3. Browser downloads full React bundle (~2-3MB)
4. JavaScript executes and renders UI
5. App fetches data from Sanity using GROQ queries
6. Content appears after 3-5 seconds

**Routing:**
- `BrowserRouter` in `src/App.js`
- `<Routes>` with `<Route>` components
- Page components in `src/pages/`

**Problems:**
1. **Poor SEO** - Search engines saw loading spinner, not content
2. **Slow Performance** - 3-5 second load time, poor Lighthouse scores (40-60)
3. **High Sanity Costs** - Every visitor = new API call
4. **Poor UX** - Users saw blank page while loading
5. **No SSR** - Content not available for social media previews

### Phase 2: Next.js Migration (Current Architecture)

**Timeline:** Late 2023 - Early 2024
**Migration Lead:** Andreas Lordos '25
**Current Maintainer:** Conan Lu '26 + Tech Board

**Stack:**
- Next.js 14 (Pages Router)
- React 18
- Sanity CMS
- Theme UI + Emotion
- next-seo
- next-sitemap
- Vercel

**Architecture Pattern:** Static Site Generation (SSG) + Incremental Static Regeneration (ISR)

**How it works:**
1. At build time, all pages pre-rendered to HTML
2. User visits website
3. Server sends full HTML immediately
4. Content visible in <1 second
5. React hydrates for interactivity
6. Pages revalidate every hour + on-demand via webhook

**Routing:**
- File-based routing in `pages/` directory
- Dynamic routes with `[slug].js` pattern
- `getStaticPaths` + `getStaticProps` for SSG

**Improvements:**
1. **Excellent SEO** - Full HTML content for search engines
2. **Fast Performance** - <1 second load time, Lighthouse scores 90-100
3. **Reduced Costs** - API calls only at build time + revalidation
4. **Great UX** - Instant content visibility
5. **Full SSR** - Perfect for social media sharing

## Current Architecture

### Technology Stack

**Framework:**
- Next.js 14.2.0 (Pages Router)
- React 18.2.0
- Node.js 22.x

**Content Management:**
- Sanity CMS v6
- @sanity/client 6.27.2
- @sanity/image-url 1.0.2
- @portabletext/react 3.0.7

**Styling:**
- Theme UI 0.16.2 - Design system
- Emotion 11.8.x - CSS-in-JS
- Global styles + component-scoped styles

**SEO & Performance:**
- next-seo 6.8.0 - Meta tags and OpenGraph
- next-sitemap 4.2.3 - Sitemap generation
- JSON-LD structured data

**Deployment:**
- Vercel (current)
- Automatic deployments on push to main
- Preview deployments for pull requests

### Directory Structure

```
theharvardadvocate/
├── web/                          # Next.js website
│   ├── pages/                    # Next.js pages (NEW - file-based routing)
│   │   ├── _app.js               # App wrapper with Theme UI provider
│   │   ├── _document.js          # Custom HTML document
│   │   ├── index.js              # Homepage (/)
│   │   ├── about.js              # About page (/about)
│   │   ├── content/[slug].js     # Article pages (/content/:slug)
│   │   ├── issues/
│   │   │   ├── index.js          # Issues list
│   │   │   └── [issueSlug].js    # Issue detail
│   │   ├── sections/
│   │   │   ├── index.js          # Sections overview
│   │   │   └── [sectionSlug].js  # Section pages
│   │   ├── authors/[authorSlug].js  # Author pages
│   │   └── api/revalidate.js     # Webhook endpoint
│   ├── lib/                      # NEW - Utilities and config
│   │   ├── sanity.js             # Sanity client
│   │   ├── queries/              # GROQ queries
│   │   ├── seo/                  # SEO utilities
│   │   ├── theme/                # Theme UI config
│   │   └── utils/                # Helper functions
│   ├── src/                      # LEGACY - Old CRA structure
│   │   ├── components/           # STILL USED - React components
│   │   ├── pages/                # NOT USED - Old page components
│   │   ├── App.js                # NOT USED - Old router
│   │   ├── index.js              # NOT USED - Old entry point
│   │   └── assets/               # STILL USED - Fonts, images
│   ├── public/                   # Static files
│   ├── next.config.js            # Next.js configuration
│   ├── next-sitemap.config.js    # Sitemap config
│   └── package.json
├── studio/                       # Sanity Studio
│   ├── schemas/                  # Content schemas
│   │   ├── documents/            # Document types
│   │   │   ├── contentItem.js    # Article schema
│   │   │   ├── issue.js          # Issue schema
│   │   │   ├── section.js        # Section schema
│   │   │   └── author.js         # Author schema
│   │   └── objects/
│   │       └── blockContent.js   # Rich text config
│   └── package.json
├── lerna.json                    # Monorepo config
└── package.json                  # Root package
```

## Static Site Generation (SSG)

### How SSG Works

1. **Build Time (npm run build):**
   ```
   Next.js runs getStaticPaths() for each dynamic route
   → Fetches all slugs from Sanity
   → Generates a list of all possible paths

   For each path, Next.js runs getStaticProps()
   → Fetches data for that specific page from Sanity
   → Pre-renders the page to HTML
   → Stores HTML in .next/ directory
   ```

2. **Request Time:**
   ```
   User requests /content/some-article
   → Server returns pre-rendered HTML immediately
   → Browser displays content instantly
   → React hydrates for interactivity
   ```

### Example Implementation

```javascript
// pages/content/[slug].js

export async function getStaticPaths() {
  // Fetch all article slugs at build time
  const slugs = await sanityClient.fetch(
    `*[_type == "contentItem"].slug.current`
  );

  return {
    paths: slugs.map(slug => ({ params: { slug } })),
    fallback: 'blocking', // Generate new pages on-demand
  };
}

export async function getStaticProps({ params }) {
  // Fetch article data at build time
  const article = await sanityClient.fetch(query, { slug: params.slug });

  return {
    props: { article },
    revalidate: 3600, // ISR: revalidate every hour
  };
}

export default function ArticlePage({ article }) {
  return <Article data={article} />;
}
```

### Benefits

1. **Performance** - No server processing at request time
2. **Scalability** - Can handle unlimited traffic
3. **Reliability** - Works even if Sanity is down
4. **Cost** - No database queries per request
5. **SEO** - Full HTML for search engines

## Incremental Static Regeneration (ISR)

ISR allows static pages to update without rebuilding the entire site.

### Two Revalidation Strategies

#### 1. Time-Based Revalidation

Every page has `revalidate: 3600` (1 hour).

**How it works:**
```
Page generated at 2:00 PM
User visits at 2:30 PM → Served cached version (fresh)
User visits at 3:30 PM → Served cached version (stale)
                       → Triggers background regeneration
Next user at 3:31 PM → Served fresh version
```

**Configuration:**
```javascript
export async function getStaticProps() {
  return {
    props: { data },
    revalidate: 3600, // 1 hour
  };
}
```

#### 2. On-Demand Revalidation (Webhooks)

Editor publishes content in Sanity → Webhook triggers instant revalidation.

**How it works:**
```
1. Editor clicks "Publish" in Sanity Studio
2. Sanity sends webhook POST to /api/revalidate?secret=XXX
3. API validates secret
4. API calls res.revalidate('/content/article-slug')
5. Next.js regenerates that specific page
6. Updated page live within 5-10 seconds
```

**Implementation:**
```javascript
// pages/api/revalidate.js

export default async function handler(req, res) {
  // Validate secret
  if (req.query.secret !== process.env.REVALIDATE_SECRET) {
    return res.status(401).json({ message: 'Invalid token' });
  }

  try {
    // Revalidate specific paths
    await res.revalidate('/');
    await res.revalidate('/content/' + req.body.slug);

    return res.json({ revalidated: true });
  } catch (err) {
    return res.status(500).send('Error revalidating');
  }
}
```

### Fallback Strategy

All dynamic routes use `fallback: 'blocking'`:

```javascript
export async function getStaticPaths() {
  return {
    paths: [/* pre-rendered paths */],
    fallback: 'blocking', // Generate new pages on-demand
  };
}
```

**What this means:**
- Pre-render popular pages at build time (faster)
- New/unpopular pages generated on first request (slower first visit, cached after)
- No 404 errors for new content
- Balances build time with flexibility

## Monorepo Structure

The repository is a Lerna monorepo with two packages:

### Package: web (Next.js Website)

**Location:** `/web`
**Purpose:** Public-facing website
**Scripts:**
- `dev` - Start development server
- `build` - Build for production
- `start` - Run production build
- `postbuild` - Generate sitemap

### Package: studio (Sanity Studio)

**Location:** `/studio`
**Purpose:** Content management system
**Scripts:**
- `start` - Run studio locally
- `build` - Build studio for deployment

### Root Scripts

```json
{
  "dev": "lerna run dev --parallel",
  "build": "lerna run build --stream"
}
```

Running `npm run dev` from root starts both web and studio simultaneously.

## Legacy Code

### Why src/ Directory Still Exists

The `src/` directory contains code from the Create React App architecture. During migration:

**What was migrated:**
- ✅ Routing → Moved to `pages/` directory
- ✅ Data fetching → Moved to `getStaticProps`
- ✅ App structure → Moved to `_app.js`

**What was kept:**
- ✅ Components in `src/components/` - Still actively used
- ✅ Assets in `src/assets/` - Fonts and images
- ✅ Theme config - Still used with Theme UI

**What's deprecated (but not deleted):**
- ❌ `src/App.js` - Router logic (replaced by `pages/`)
- ❌ `src/index.js` - Entry point (replaced by Next.js)
- ❌ `src/pages/` - Page components (replaced by `pages/`)

### Rationale for Keeping Legacy Code

1. **Components are reusable** - No need to rewrite working components
2. **Theme UI unchanged** - Design system stayed the same
3. **Gradual migration** - Easier to maintain during transition
4. **Reference** - Useful to see old implementation

### Future Cleanup

Consider eventually:
- Moving `src/components/` to `components/` at root
- Deleting `src/pages/`, `src/App.js`, `src/index.js`
- Moving `src/assets/` to `public/` or `assets/`

## Technical Decisions

### Why Next.js Pages Router (not App Router)?

**Decision:** Use Pages Router instead of the newer App Router

**Rationale:**
1. **Stability** - Pages Router is mature and well-documented
2. **Migration Path** - Easier migration from React Router
3. **ISR Support** - Better ISR support at time of migration
4. **Learning Curve** - Tech board familiar with Pages Router pattern

**Trade-offs:**
- App Router has better streaming and layouts
- But Pages Router is simpler and more straightforward

### Why SSG + ISR (not SSR)?

**Decision:** Use Static Site Generation with ISR instead of Server-Side Rendering

**Rationale:**
1. **Performance** - Pre-rendered pages faster than SSR
2. **Cost** - No server needed (can use CDN)
3. **Scalability** - Static files handle unlimited traffic
4. **Content Update Frequency** - Articles don't change often
5. **Sanity Costs** - Reduced API calls

**Trade-offs:**
- Build time increases with more pages
- Can't show real-time data (but we don't need it)

### Why Theme UI + Emotion (not Tailwind)?

**Decision:** Keep Theme UI + Emotion from original architecture

**Rationale:**
1. **Already implemented** - Don't fix what isn't broken
2. **Design system** - Theme UI provides theming out of the box
3. **Consistency** - Maintains visual consistency with original design
4. **Migration effort** - Would require rewriting all styles

**Trade-offs:**
- Tailwind might be faster for new developers
- But migration cost outweighs benefits

### Why Lerna Monorepo?

**Decision:** Use Lerna to manage web + studio packages

**Rationale:**
1. **Shared dependencies** - Both use React, Sanity client
2. **Unified development** - One `npm run dev` command
3. **Atomic deployments** - Deploy both together
4. **Code sharing** - Can share types, utilities

**Trade-offs:**
- Slightly more complex setup
- But better than two separate repos

### Why Vercel for Deployment?

**Decision:** Use Vercel as the deployment platform

**Rationale:**
1. **Next.js Optimization** - Built by the creators of Next.js, optimized for the framework
2. **Zero Configuration** - Automatic detection and configuration of Next.js projects
3. **ISR Support** - Seamless Incremental Static Regeneration out of the box
4. **Preview Deployments** - Automatic preview URLs for every pull request
5. **Edge Network** - Global CDN for fast content delivery
6. **Automatic CI/CD** - No need for GitHub Actions or manual deployment setup

**Trade-offs:**
- None significant - Vercel is the ideal platform for Next.js applications

## Performance Metrics

### Before Migration (Create React App)

**Lighthouse Scores:**
- Performance: 40-60
- SEO: 70-80
- Accessibility: 80-90
- Best Practices: 70-80

**Load Times:**
- First Contentful Paint: 3-5s
- Time to Interactive: 5-7s
- Total Bundle Size: ~2-3 MB

**User Experience:**
- Blank page for 3-5 seconds
- Loading spinner visible
- Content pops in suddenly

**SEO:**
- Search engines saw loading spinner
- Poor social media previews
- No structured data

### After Migration (Next.js SSG)

**Lighthouse Scores:**
- Performance: 90-100
- SEO: 95-100
- Accessibility: 80-90
- Best Practices: 90-100

**Load Times:**
- First Contentful Paint: 0.5-1s
- Time to Interactive: 1-2s
- Initial HTML: ~50-100 KB

**User Experience:**
- Content visible immediately
- Smooth hydration
- Feels instant

**SEO:**
- Full HTML content for search engines
- Perfect social media previews
- Rich structured data (Article, Person, Organization schemas)
- Auto-generated sitemap

### Cost Comparison

**Sanity API Calls:**

Before (CSR):
- Every page view = 1-5 API calls
- 1000 daily visitors × 5 pages = 5000 calls/day
- 150,000 calls/month

After (SSG + ISR):
- Build time: ~100-200 calls
- Revalidation: ~50 calls/hour × 24 = 1200 calls/day
- 36,000 calls/month + builds

**Savings:** ~75% reduction in API calls

## Conclusion

The migration from Create React App to Next.js SSG + ISR has been highly successful:

✅ **10x Performance Improvement** - Load times dropped from 5s to <1s
✅ **SEO Optimization** - Full HTML content for search engines
✅ **Cost Reduction** - 75% fewer Sanity API calls
✅ **Better UX** - Instant content visibility
✅ **Maintainability** - Clear patterns and organized code

The architecture prioritizes performance and SEO while maintaining developer experience and content management flexibility. The hybrid approach of keeping some legacy code allowed for a smooth migration without rewriting everything from scratch.

---

**Document Maintained By:** Tech Board
**Last Updated:** 2025
**Contact:** tech@theharvardadvocate.com
