# Next.js Migration for The Harvard Advocate

This directory contains the Next.js version of The Harvard Advocate website, which is being developed alongside the existing React app for a gradual migration.

## Structure

```
web/
├── src/                    # Existing React app (Create React App)
├── nextjs/                 # New Next.js app
│   ├── src/
│   │   ├── app/           # Next.js App Router pages
│   │   ├── lib/           # Utilities, Sanity client
│   │   └── components/    # Shared components (coming soon)
│   ├── public/            # Static assets
│   └── package.json       # Next.js dependencies
└── package.json           # Root package.json with shared scripts
```

## Development

### Running Both Apps Simultaneously

```bash
# From the web directory
npm run dev:both
```

This will start:
- React app on http://localhost:3000
- Next.js app on http://localhost:3001

### Running Individual Apps

```bash
# React app only
npm run dev:react

# Next.js app only  
npm run dev:next
```

## Migration Progress

### ✅ Completed
- [x] Next.js app setup with TypeScript
- [x] Sanity client configuration
- [x] Basic routing structure
- [x] TypeScript types for Sanity data
- [x] Development environment setup

### 🔄 In Progress
- [ ] Component migration from React app
- [ ] Styling system migration (Theme UI → Tailwind)
- [ ] Page-by-page migration
- [ ] Sanity data fetching implementation

### 📋 Next Steps
1. Migrate simple static pages (About, Contact, Masthead)
2. Set up shared component library
3. Implement Sanity queries for dynamic content
4. Migrate complex pages (ContentItem, Issue, IssuesList)
5. Optimize for performance and SEO

## Key Differences from React App

### Routing
- **React**: Client-side routing with React Router
- **Next.js**: File-based routing with App Router

### Data Fetching
- **React**: Client-side fetching with useEffect
- **Next.js**: Server-side fetching with async components

### Styling
- **React**: Theme UI + Emotion
- **Next.js**: Tailwind CSS (for now, can migrate Theme UI later)

### Build System
- **React**: Create React App
- **Next.js**: Next.js build system with optimizations

## Environment Variables

Create a `.env.local` file in the `nextjs` directory:

```env
NEXT_PUBLIC_SANITY_PROJECT_ID=sierqf4e
NEXT_PUBLIC_SANITY_DATASET=production
```

## Deployment

The Next.js app is configured for Vercel deployment. Once migration is complete, it can be deployed independently or alongside the React app.

## Notes

- Both apps can run simultaneously during migration
- Shared dependencies are managed at the root level
- Sanity client is configured identically to the React app
- TypeScript types match the existing Sanity schema
