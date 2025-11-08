# Deployment Guide for The Harvard Advocate

This guide covers deploying the Harvard Advocate website to Vercel with Next.js and Sanity CMS.

## Overview

The site has been migrated from Create React App to Next.js with:
- **Static Site Generation (SSG)** for fast page loads and excellent SEO
- **Incremental Static Regeneration (ISR)** to automatically update content
- **Sanity CMS** for content management
- **Vercel** for hosting

## Prerequisites

- Vercel account (free tier works)
- Access to Sanity project (ID: sierqf4e)
- GitHub repository access

## Environment Variables

Create these environment variables in Vercel:

```
NEXT_PUBLIC_SANITY_PROJECT_ID=sierqf4e
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_VERSION=2023-08-24
REVALIDATE_SECRET=[generate random string]
```

Generate `REVALIDATE_SECRET` using:
- https://generate-secret.vercel.app/32
- OR: `openssl rand -base64 32`

## Deployment Steps

### 1. Deploy to Vercel

1. Go to https://vercel.com
2. Click "Add New... → Project"
3. Import your GitHub repository
4. Vercel will auto-detect Next.js
5. Verify build settings:
   - **Framework Preset:** Next.js
   - **Root Directory:** `web`
   - **Build Command:** `npm run build`
   - **Output Directory:** `.next`
6. Add environment variables (see above)
7. Deploy!

### 2. Set Up Sanity Webhook

Once deployed, configure automatic content updates:

1. Go to https://www.sanity.io/manage
2. Select your project
3. Go to **API → Webhooks**
4. Click **"Create webhook"**
5. Configure:
   - **Name:** Vercel Revalidation
   - **URL:** `https://your-site.vercel.app/api/revalidate?secret=YOUR_SECRET`
   - **Dataset:** production
   - **Trigger on:** ✅ Create, ✅ Update, ✅ Delete
   - **HTTP method:** POST
   - **Include drafts:** ❌ Unchecked
6. Click **Save**
7. Test the webhook

### 3. Test the Deployment

1. Visit your Vercel URL
2. Check that pages load correctly
3. Test navigation
4. Publish content in Sanity
5. Wait 5-10 seconds
6. Refresh site to see updates

## Custom Domain (Optional)

### Add Domain to Vercel

1. In Vercel → Project → **Settings → Domains**
2. Add your domain: `theharvardadvocate.com`
3. Also add: `www.theharvardadvocate.com`

### Update DNS Records

In your domain registrar (e.g., GoDaddy, Namecheap):

**For apex domain:**
- Type: `A`
- Name: `@`
- Value: `76.76.21.21`

**For www subdomain:**
- Type: `CNAME`
- Name: `www`
- Value: `cname.vercel-dns.com`

DNS propagation takes 5 minutes to 48 hours (usually ~30 minutes).

### Update Webhook

Once domain is working:
1. Edit Sanity webhook
2. Update URL to use your custom domain:
   ```
   https://theharvardadvocate.com/api/revalidate?secret=YOUR_SECRET
   ```

## How It Works

### Static Generation
- Pages are pre-rendered at build time
- Content is fetched from Sanity during build
- Users get instant page loads with full HTML

### Content Updates
1. Editor publishes content in Sanity Studio
2. Sanity sends webhook to Vercel
3. Vercel regenerates affected pages (5-10 seconds)
4. Site automatically updates - no manual deployment needed!

### Revalidation Times
- Homepage: 1 hour (3600 seconds)
- All other pages: 1 hour (3600 seconds)
- On-demand: Via webhook

## Troubleshooting

### Build Fails

**Error: "Cannot fetch from Sanity"**
- Check environment variables are set correctly
- Verify `NEXT_PUBLIC_SANITY_PROJECT_ID` matches Sanity project
- Ensure dataset name is correct

### Webhook Not Working

**401 Unauthorized:**
- Secret in webhook URL doesn't match `REVALIDATE_SECRET`
- Redeploy after adding environment variables

**500 Internal Server Error:**
- Check Vercel logs for specific error
- Verify `/api/revalidate.js` file exists

### Content Not Updating

- Webhook might be working but revalidate failing
- Check which pages are being revalidated in API code
- Try manual revalidation:
  ```bash
  curl https://yoursite.com/api/revalidate?secret=YOUR_SECRET
  ```

## Performance

### Expected Metrics

**Before (Client-Side Rendering):**
- Performance: 40-60
- SEO: 70-80
- Initial Load: 3-5 seconds

**After (Static Generation):**
- Performance: 90-100 ✅
- SEO: 95-100 ✅
- Initial Load: <1 second ✅

### Monitoring

- Check Vercel Analytics for performance metrics
- Monitor Core Web Vitals (LCP, FID, CLS)
- Review error logs in Vercel dashboard

## Additional Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Vercel Deployment Docs](https://vercel.com/docs)
- [Sanity + Next.js Guide](https://www.sanity.io/guides/sanity-nextjs-guide)

## Support

For issues:
1. Check Vercel logs for errors
2. Verify environment variables
3. Test webhook in Sanity dashboard
4. Check this deployment guide

---

**Migration complete!** Your site is now statically generated, SEO-optimized, and automatically updates when you publish content. 🎉
