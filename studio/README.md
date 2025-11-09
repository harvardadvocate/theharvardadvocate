# The Harvard Advocate - Sanity Studio

The content management system for The Harvard Advocate, built with Sanity Studio. This is where editors create and manage articles, issues, authors, and sections that appear on the website.

## Overview

Sanity Studio is a headless CMS that provides a real-time content editing interface. Content created here is stored in Sanity's cloud and fetched by the Next.js website using GROQ queries.

**Sanity Project Configuration:**
- Project ID: `sierqf4e`
- Dataset: `production`
- API Version: `2023-08-24`

## Getting Started

### Prerequisites
- Node.js 22.x
- Sanity CLI (`npm install -g @sanity/cli`)

### Running the Studio

From the root directory:
```bash
npm run dev
```

Or from this directory:
```bash
sanity start
```

The studio will be available at [http://localhost:3333](http://localhost:3333).

### Deploying the Studio

To deploy the studio to Sanity's hosting:
```bash
sanity deploy
```

This makes the studio accessible at `https://your-project.sanity.studio`.

## Content Schema

The Harvard Advocate uses five main document types:

### 1. Content Item (Articles)

The primary content type for articles, poetry, fiction, art, and features.

**Key Fields:**
- `title` (required) - Article title
- `slug` (required) - URL-friendly identifier (auto-generated from title)
- `authors` (required) - Array of author references
- `sections` (required) - Array of section references (Features, Poetry, Fiction, Art, etc.)
- `publishedAt` (required) - Publication date and time
- `issue` - Reference to the issue this appears in
- `mainImage` - Featured image for cards and previews
- `bannerImage` - Large header image for article page
- `body` - Rich text content (Portable Text)
- `images` - Additional images for galleries
- `vimeoLink` - Vimeo video ID for embedded videos
- `featuredOptions` - Controls where article appears on homepage

**Featured Options:**
Articles can be featured in multiple locations on the homepage:
- Featured Top Bar (Features/Poetry/Fiction)
- Featured Middle Bar (Features)
- Featured Middle Right (Art)
- Featured Bottom Right (Art)
- Featured Bottom Row (Poetry/Fiction)
- Featured Note
- Featured Issue Highlight

### 2. Issue

Represents a printed issue of The Harvard Advocate.

**Key Fields:**
- `title` (required) - Issue name (e.g., "Fall 2024")
- `slug` (required) - URL identifier
- `publishedAt` (required) - Publication date
- `description` - Issue description
- `frontCover` (required) - Front cover image
- `backCover` - Back cover image
- `toc` - Table of contents image

Issues are referenced by content items and displayed on the `/issues` page.

### 3. Section

Content categories like Features, Poetry, Fiction, Art.

**Key Fields:**
- `name` (required) - Section name
- `slug` (required) - URL identifier
- `color` - Brand color for the section (used for styling)
- `description` - Section description

Sections are referenced by content items and displayed on the `/sections` page.

### 4. Author

Writers, poets, artists, and contributors.

**Key Fields:**
- `name` (required) - Full name
- `slug` (required) - URL identifier
- `bio` - Biography (Portable Text)
- `image` - Headshot
- `graduationYear` - Harvard class year (e.g., "2025")
- `email` - Contact email
- `website` - Personal website
- `twitter` - Twitter handle

Authors are referenced by content items and have dedicated pages at `/authors/:slug`.

### 5. Image Asset

Standalone images for galleries and the homepage.

**Key Fields:**
- `title` - Image title
- `image` - The image file
- `caption` - Image caption
- `artist` - Reference to author (artist)

### 6. Block Content (Object Type)

Rich text editor configuration for article bodies and bios. Supports:
- Headings (H1-H6)
- Paragraphs
- Lists (ordered/unordered)
- Block quotes
- Images
- Links
- Bold, italic, underline, code

## Content Workflow

### Creating a New Article

1. Click "Content Item" in the studio
2. Click "Create new Content Item"
3. Fill in required fields:
   - Title
   - Generate slug (click "Generate" button)
   - Select author(s)
   - Select section(s)
   - Set publication date
4. Add optional fields:
   - Main image
   - Banner image
   - Issue reference
   - Body text
   - Additional images
5. Set featured options if article should appear on homepage
6. Click "Publish" (not just "Save draft"!)

**Important:** Only **published** content appears on the website. Drafts are not visible.

### Publishing an Issue

1. Click "Issue" in the studio
2. Create a new issue with title, slug, date
3. Upload front cover (required)
4. Upload back cover and table of contents (optional)
5. Publish the issue
6. Edit articles and reference this issue in the "Issue" field

### Creating Authors and Sections

Authors and sections should be created **before** content items that reference them.

**To add a new section:**
1. Create the section in the studio
2. Optionally add it to the sections page on the website

**To add a new author:**
1. Create the author in the studio
2. They'll automatically get an author page at `/authors/:slug`

## Integration with Next.js Website

### How Content Syncs

When you publish content in Sanity Studio:

1. **Immediately:** Content is saved to Sanity's cloud database
2. **Within 5-10 seconds:** Webhook triggers Next.js revalidation
3. **Result:** Website pages regenerate with new content

### Webhook Configuration

For instant updates, configure a webhook in Sanity:

**Webhook URL:**
```
https://your-site.vercel.app/api/revalidate?secret=YOUR_SECRET
```

**Triggers:**
- Create
- Update
- Delete

**Dataset:** production

See [`../web/DEPLOYMENT.md`](../web/DEPLOYMENT.md) for detailed webhook setup instructions.

### Manual Revalidation

If webhooks aren't configured, pages update automatically after 1 hour (ISR revalidation period).

## GROQ Queries

The website fetches content using GROQ (Graph-Relational Object Queries). All queries are defined in `../web/lib/queries/`.

**Example query for fetching an article:**
```groq
*[_type == "contentItem" && slug.current == $slug][0]{
  _id,
  title,
  slug,
  publishedAt,
  authors[]->{name, slug, image},
  sections[]->{name, slug, color},
  body,
  mainImage,
  bannerImage,
  images,
  vimeoLink,
  issue->{title, slug}
}
```

The `->` operator follows references to fetch related data (authors, sections, issue).

## Content Best Practices

### SEO Optimization

**Article Titles:**
- Keep under 60 characters for optimal SEO
- Use descriptive, specific titles
- Avoid clickbait

**Main Images:**
- Required for social sharing (OpenGraph)
- Recommended size: 1200x630px or larger
- Use high-quality images

**Publication Dates:**
- Set accurate dates for content chronology
- Dates affect sitemap priority

### Featured Content

The homepage has limited featured slots. Be selective:
- Feature high-quality, representative content
- Update featured content regularly
- Don't over-feature (homepage looks cluttered)

### Slugs

- Auto-generated from title by default
- Keep slugs short, descriptive, URL-friendly
- Don't change slugs after publishing (breaks links)

### Images

- Upload high-resolution images
- Use hotspot feature to crop appropriately
- Add alt text for accessibility (via caption field)

## Schema Development

Schema files are located in `schemas/`:

```
schemas/
├── schema.js              # Main schema configuration
├── documents/             # Document types
│   ├── contentItem.js     # Article schema
│   ├── issue.js           # Issue schema
│   ├── section.js         # Section schema
│   ├── author.js          # Author schema
│   └── imageAsset.js      # Image asset schema
└── objects/               # Reusable object types
    └── blockContent.js    # Rich text configuration
```

### Modifying Schemas

1. Edit schema files in `schemas/documents/` or `schemas/objects/`
2. Restart the studio (`sanity start`)
3. Changes appear immediately in the studio UI

**Important:** Schema changes don't affect existing content unless you run a migration.

### Adding a New Field

Example: Adding a "subtitle" field to Content Item:

```javascript
// schemas/documents/contentItem.js
{
  name: "subtitle",
  title: "Subtitle",
  type: "string",
}
```

Then update the GROQ queries in `../web/lib/queries/` to fetch the new field.

## Useful Sanity CLI Commands

```bash
# Start the studio locally
sanity start

# Deploy the studio
sanity deploy

# List all documents
sanity documents list

# Export dataset
sanity dataset export production backup.tar.gz

# Import dataset
sanity dataset import backup.tar.gz production

# Manage API tokens
sanity manage
```

## Troubleshooting

### Content Not Appearing on Website

1. **Check if published:** Drafts don't appear on the website, only published content
2. **Check webhook:** Verify webhook is configured and working
3. **Wait for ISR:** Without webhooks, wait up to 1 hour for automatic revalidation
4. **Manual revalidation:** Trigger webhook manually or redeploy website

### Studio Not Loading

1. **Check credentials:** Ensure `.env` has correct project ID
2. **Clear cache:** Delete `.sanity` folder and restart
3. **Check CLI version:** Run `sanity upgrade` to update

### Images Not Showing

1. **Check upload:** Ensure image uploaded successfully
2. **Check CDN:** Images served from `cdn.sanity.io`, verify it's accessible
3. **Check CORS:** Ensure website domain is allowed in Sanity settings

## Learn More

- [Sanity Documentation](https://www.sanity.io/docs)
- [GROQ Query Language](https://www.sanity.io/docs/groq)
- [Content Modeling](https://www.sanity.io/docs/content-modelling)
- [Schema Types](https://www.sanity.io/docs/schema-types)
- [Portable Text](https://www.sanity.io/docs/presenting-block-text)

## Support

For questions about the Advocate's Sanity setup, contact the Tech Board at `tech@theharvardadvocate.com`.
