# Contributing Guide

Thank you for contributing to The Harvard Advocate website! This guide will help you get set up and understand our development workflow.

## Table of Contents

- [Getting Started](#getting-started)
- [Development Workflow](#development-workflow)
- [Project Structure](#project-structure)
- [Common Tasks](#common-tasks)
- [Code Style](#code-style)
- [Testing](#testing)
- [Deployment](#deployment)
- [Troubleshooting](#troubleshooting)

## Getting Started

### Prerequisites

- **Node.js 22.x** - Required for both web and studio
- **npm** - Package manager
- **Sanity CLI** - For content management
- **Git** - Version control

### Initial Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-org/theharvardadvocate.git
   cd theharvardadvocate
   ```

2. **Install dependencies:**
   ```bash
   npm install
   npm install -g @sanity/cli
   ```

3. **Set up environment variables:**

   Create `web/.env.local`:
   ```bash
   NEXT_PUBLIC_SANITY_PROJECT_ID=sierqf4e
   NEXT_PUBLIC_SANITY_DATASET=production
   SANITY_API_VERSION=2023-08-24
   REVALIDATE_SECRET=your-secret-here
   ```

4. **Start development servers:**
   ```bash
   npm run dev
   ```

   This starts:
   - Website at [http://localhost:3000](http://localhost:3000)
   - Sanity Studio at [http://localhost:3333](http://localhost:3333)

### Verify Setup

Visit the local website and studio to ensure everything works. You should see:
- ✅ Website loads with content from Sanity
- ✅ Studio loads and shows content types
- ✅ No console errors

## Development Workflow

### Branching Strategy

We follow a simple Git workflow:

```
main (production)
  └── feature/your-feature-name
  └── fix/bug-description
  └── docs/documentation-update
```

**Branch naming conventions:**
- `feature/` - New features
- `fix/` - Bug fixes
- `docs/` - Documentation updates
- `refactor/` - Code refactoring
- `style/` - Styling changes

### Creating a New Branch

```bash
# Create and switch to a new branch
git checkout -b feature/add-dark-mode

# Make your changes...

# Stage and commit
git add .
git commit -m "Add dark mode toggle to header"

# Push to remote
git push origin feature/add-dark-mode
```

### Commit Message Guidelines

Write clear, descriptive commit messages:

**Good:**
```
Add dark mode toggle to header
Fix image loading error on article pages
Update README with Next.js migration details
```

**Bad:**
```
Update
Fix bug
Changes
```

**Format:**
- Start with a verb (Add, Fix, Update, Remove, Refactor)
- Be specific about what changed
- Keep under 72 characters

### Pull Request Process

1. **Create a pull request** on GitHub
2. **Write a clear description** of your changes
3. **Request review** from Tech Board members
4. **Address feedback** if any
5. **Merge** when approved

**PR Description Template:**
```markdown
## Summary
Brief description of changes

## Changes Made
- Added dark mode toggle component
- Updated theme configuration
- Added CSS for dark mode styles

## Testing
- [ ] Tested on Chrome
- [ ] Tested on Safari
- [ ] Tested on mobile
- [ ] No console errors

## Screenshots
(if applicable)
```

## Project Structure

### Monorepo Layout

```
theharvardadvocate/
├── web/                 # Next.js website
├── studio/              # Sanity Studio
├── lerna.json           # Monorepo config
└── package.json         # Root dependencies
```

### Web Application Structure

```
web/
├── pages/               # Next.js pages (routing)
│   ├── _app.js          # App wrapper
│   ├── _document.js     # HTML document
│   ├── index.js         # Homepage
│   ├── about.js         # Static pages
│   ├── content/         # Dynamic article pages
│   ├── issues/          # Issue pages
│   ├── sections/        # Section pages
│   ├── authors/         # Author pages
│   └── api/             # API routes
├── lib/                 # Utilities and config
│   ├── sanity.js        # Sanity client
│   ├── queries/         # GROQ queries
│   ├── seo/             # SEO utilities
│   ├── theme/           # Theme UI config
│   └── utils/           # Helper functions
├── src/                 # Legacy components (still used)
│   ├── components/      # React components
│   └── assets/          # Fonts, images
└── public/              # Static files
```

### Key Files

- `pages/_app.js` - App-wide configuration, Theme UI provider
- `pages/_document.js` - HTML structure, fonts, meta tags
- `lib/sanity.js` - Sanity client configuration
- `lib/theme/theme.js` - Theme UI design system
- `next.config.js` - Next.js configuration
- `next-sitemap.config.js` - Sitemap generation config

## Common Tasks

### Adding a New Static Page

1. **Create page file:**
   ```bash
   touch web/pages/contact.js
   ```

2. **Write the page component:**
   ```javascript
   /** @jsxImportSource theme-ui */
   import { NextSeo } from 'next-seo';

   export default function ContactPage() {
     return (
       <>
         <NextSeo
           title="Contact Us - The Harvard Advocate"
           description="Get in touch with The Harvard Advocate"
         />
         <div sx={{ p: 4 }}>
           <h1>Contact Us</h1>
           {/* Your content */}
         </div>
       </>
     );
   }
   ```

3. **Access at** `/contact`

### Adding a New Dynamic Page

1. **Create dynamic route file:**
   ```bash
   mkdir web/pages/events
   touch web/pages/events/[slug].js
   ```

2. **Implement the page:**
   ```javascript
   import { sanityClient } from '../../lib/sanity';
   import { getEventBySlug, getAllEventSlugs } from '../../lib/queries/eventQueries';

   export async function getStaticPaths() {
     const slugs = await sanityClient.fetch(getAllEventSlugs);

     return {
       paths: slugs.map(slug => ({ params: { slug } })),
       fallback: 'blocking',
     };
   }

   export async function getStaticProps({ params }) {
     const event = await sanityClient.fetch(getEventBySlug, {
       slug: params.slug
     });

     return {
       props: { event },
       revalidate: 3600, // 1 hour
     };
   }

   export default function EventPage({ event }) {
     return <div>{/* Render event */}</div>;
   }
   ```

3. **Create GROQ queries:**
   ```javascript
   // lib/queries/eventQueries.js
   export const getAllEventSlugs = `*[_type == "event"].slug.current`;

   export const getEventBySlug = `*[_type == "event" && slug.current == $slug][0]{
     _id,
     title,
     slug,
     date,
     description
   }`;
   ```

### Adding a New Component

1. **Create component file:**
   ```bash
   touch web/src/components/EventCard.js
   ```

2. **Write the component:**
   ```javascript
   /** @jsxImportSource theme-ui */

   export default function EventCard({ event }) {
     return (
       <div sx={{
         border: '1px solid',
         borderColor: 'border',
         borderRadius: 4,
         p: 3,
       }}>
         <h3>{event.title}</h3>
         <p>{event.description}</p>
       </div>
     );
   }
   ```

3. **Import and use:**
   ```javascript
   import EventCard from '../src/components/EventCard';

   <EventCard event={eventData} />
   ```

### Adding a New Sanity Schema

1. **Create schema file:**
   ```bash
   touch studio/schemas/documents/event.js
   ```

2. **Define the schema:**
   ```javascript
   export default {
     name: 'event',
     title: 'Event',
     type: 'document',
     fields: [
       {
         name: 'title',
         title: 'Title',
         type: 'string',
         validation: Rule => Rule.required(),
       },
       {
         name: 'slug',
         title: 'Slug',
         type: 'slug',
         options: { source: 'title' },
         validation: Rule => Rule.required(),
       },
       {
         name: 'date',
         title: 'Date',
         type: 'datetime',
       },
       {
         name: 'description',
         title: 'Description',
         type: 'text',
       },
     ],
   };
   ```

3. **Register in main schema:**
   ```javascript
   // studio/schemas/schema.js
   import event from './documents/event';

   export default createSchema({
     name: 'default',
     types: schemaTypes.concat([
       // ... existing types
       event,
     ]),
   });
   ```

4. **Restart studio** - Changes appear immediately

### Updating Styles

#### Theme-Level Changes

Edit `web/lib/theme/theme.js`:

```javascript
export const theme = {
  colors: {
    primary: '#C90016',    // Advocate red
    background: '#FFFFFF',
    text: '#000000',
  },
  fonts: {
    body: 'Crimson Text, serif',
    heading: 'Libre Franklin, sans-serif',
  },
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64],
  space: [0, 4, 8, 16, 32, 64, 128, 256],
};
```

#### Component-Level Changes

Use the `sx` prop:

```javascript
/** @jsxImportSource theme-ui */

<div sx={{
  color: 'primary',        // From theme.colors.primary
  fontSize: 3,             // From theme.fontSizes[3] = 20px
  p: 4,                    // Padding: theme.space[4] = 32px
  bg: 'background',        // Background color
  fontFamily: 'heading',   // From theme.fonts.heading
}}>
  Content
</div>
```

### Working with Sanity Content

#### Fetching Data in Development

Data is fetched from Sanity on every page refresh in development:

```javascript
export async function getStaticProps() {
  const data = await sanityClient.fetch(query);
  // This runs on every refresh in dev mode
  return { props: { data } };
}
```

#### Testing Content Changes

1. Open Sanity Studio at [http://localhost:3333](http://localhost:3333)
2. Make changes to content
3. Click "Publish" (not just "Save draft")
4. Refresh website to see changes

#### Querying with GROQ

Learn GROQ basics:

```groq
// Get all articles
*[_type == "contentItem"]

// Get articles with author names
*[_type == "contentItem"]{
  title,
  "authorName": author->name
}

// Filter and sort
*[_type == "contentItem" && publishedAt < now()]
| order(publishedAt desc)
[0...10]

// Join with references
*[_type == "contentItem"]{
  title,
  author->{name, bio},
  section->{name, color}
}
```

Test queries in Sanity Studio's Vision tool (Tools → Vision).

## Code Style

### General Principles

- **Consistency** - Follow existing patterns
- **Clarity** - Write self-documenting code
- **Simplicity** - Avoid over-engineering
- **Comments** - Explain "why", not "what"

### Code Formatting

We use Prettier and ESLint:

```bash
# Format code
npx prettier --write "web/**/*.{js,jsx,json,css}"

# Check linting (warnings only, doesn't fail build)
cd web && npm run lint
```

### Component Structure

Follow this pattern:

```javascript
/** @jsxImportSource theme-ui */
import { NextSeo } from 'next-seo';
import ComponentA from './ComponentA';
import { utilFunction } from '../lib/utils';

/**
 * ComponentName - Brief description
 *
 * @param {Object} props - Component props
 * @param {string} props.title - The title to display
 * @param {Array} props.items - Array of items
 */
export default function ComponentName({ title, items }) {
  // State and hooks at top
  const [active, setActive] = useState(false);

  // Helper functions
  const handleClick = () => {
    setActive(!active);
  };

  // Early returns for edge cases
  if (!items || items.length === 0) {
    return <div>No items</div>;
  }

  // Main render
  return (
    <div sx={{ p: 4 }}>
      <h1>{title}</h1>
      {items.map(item => (
        <ComponentA key={item.id} data={item} />
      ))}
    </div>
  );
}
```

### Naming Conventions

- **Components:** PascalCase (`ArticleCard`, `SectionHeader`)
- **Files:** Match component name (`ArticleCard.js`)
- **Variables:** camelCase (`authorName`, `isLoading`)
- **Constants:** UPPER_SNAKE_CASE (`API_VERSION`, `MAX_ITEMS`)
- **CSS/sx props:** camelCase (`fontSize`, `backgroundColor`)

### Theme UI Best Practices

```javascript
// ✅ Good - Use theme values
<div sx={{
  color: 'primary',
  fontSize: 3,
  p: 4,
}}>

// ❌ Bad - Hard-coded values
<div sx={{
  color: '#C90016',
  fontSize: '20px',
  padding: '32px',
}}>
```

## Testing

### Manual Testing Checklist

Before submitting a PR:

- [ ] Test on Chrome
- [ ] Test on Safari
- [ ] Test on mobile (responsive design)
- [ ] Test on Firefox (optional)
- [ ] Check console for errors
- [ ] Test with slow network (throttle in DevTools)
- [ ] Verify images load correctly
- [ ] Check accessibility (keyboard navigation, alt text)

### Build Testing

Test the production build locally:

```bash
cd web
npm run build
npm run start
```

Visit [http://localhost:3000](http://localhost:3000) and verify:
- All pages load correctly
- Styles are applied
- Images load from Sanity CDN
- No JavaScript errors

### Lighthouse Testing

Check performance and SEO:

1. Open Chrome DevTools
2. Go to Lighthouse tab
3. Generate report for:
   - Performance (target: 90+)
   - SEO (target: 95+)
   - Accessibility (target: 85+)
   - Best Practices (target: 90+)

## Deployment

### Automatic Deployment (Vercel)

The site is deployed on Vercel with automatic deployments:

**Production Deployment:**
1. Code merged to `main` branch
2. Vercel automatically detects the push
3. Builds the Next.js application
4. Deploys to production
5. Live in ~2-3 minutes

**Preview Deployment:**
1. Create a pull request
2. Vercel automatically creates a preview deployment
3. Preview URL available in PR comments
4. Test changes before merging to main

### Manual Deployment

If needed, you can trigger a manual deployment:

```bash
# Install Vercel CLI (if not already installed)
npm install -g vercel

# Deploy to production
vercel --prod

# Deploy preview
vercel
```

### Detailed Setup

See [`web/DEPLOYMENT.md`](web/DEPLOYMENT.md) for:
- Initial Vercel setup instructions
- Environment variable configuration
- Sanity webhook configuration for on-demand revalidation
- Custom domain setup

## Troubleshooting

### Common Issues

#### "Module not found" Error

```bash
# Clear and reinstall dependencies
rm -rf node_modules
rm -rf web/node_modules
rm -rf studio/node_modules
npm install
```

#### Build Fails with Sanity Error

Check environment variables:
```bash
# web/.env.local should have:
NEXT_PUBLIC_SANITY_PROJECT_ID=sierqf4e
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_VERSION=2023-08-24
```

#### Styles Not Applying

Ensure `/** @jsxImportSource theme-ui */` is at the top of the file:

```javascript
/** @jsxImportSource theme-ui */

export default function Component() {
  return <div sx={{ color: 'primary' }}>Text</div>;
}
```

#### Content Not Showing

1. **Check if published** - Only published content appears (not drafts)
2. **Wait for ISR** - Up to 1 hour for automatic revalidation
3. **Trigger webhook** - Or manually trigger revalidation
4. **Check query** - Verify GROQ query returns data (use Vision tool)

#### Port Already in Use

```bash
# Kill process on port 3000
lsof -ti:3000 | xargs kill -9

# Or use different port
PORT=3001 npm run dev
```

### Getting Help

If you're stuck:

1. **Check documentation** - README, ARCHITECTURE.md, web/README.md
2. **Search issues** - Look for similar problems on GitHub
3. **Ask Tech Board** - Email tech@theharvardadvocate.com
4. **Slack channel** - (if applicable)

## Resources

### Documentation

- [Next.js Documentation](https://nextjs.org/docs)
- [Sanity Documentation](https://www.sanity.io/docs)
- [Theme UI Documentation](https://theme-ui.com/)
- [GROQ Cheat Sheet](https://www.sanity.io/docs/query-cheat-sheet)

### Project Documentation

- [README.md](README.md) - Project overview
- [web/README.md](web/README.md) - Web application details
- [web/DEPLOYMENT.md](web/DEPLOYMENT.md) - Deployment guide
- [ARCHITECTURE.md](ARCHITECTURE.md) - Architecture and migration story
- [studio/README.md](studio/README.md) - Sanity Studio guide

## Contact

- **Tech Board:** tech@theharvardadvocate.com
- **Current Maintainer:** Conan Lu '26
- **Original Developer:** Andreas Lordos '25

---

Thank you for contributing to The Harvard Advocate! Your work helps preserve and showcase Harvard's oldest literary magazine.
