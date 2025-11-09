import { sanityClient } from '../../lib/sanity.js';

export default async function handler(req, res) {
  // Check for secret to confirm this is a valid request
  if (req.query.secret !== process.env.REVALIDATE_SECRET) {
    return res.status(401).json({ message: 'Invalid token' });
  }

  try {
    // Log the incoming webhook data for debugging
    console.log('Webhook received:', JSON.stringify(req.body, null, 2));

    const slug = req.body?.slug?.current;
    const type = req.body?._type;
    const documentId = req.body?._id;

    const revalidatedPaths = [];

    // Always revalidate main pages - this ensures content updates appear
    await res.revalidate('/');
    revalidatedPaths.push('/');

    await res.revalidate('/issues');
    revalidatedPaths.push('/issues');

    await res.revalidate('/sections');
    revalidatedPaths.push('/sections');

    // Revalidate all major section pages since content can appear in multiple places
    const sectionPages = ['/sections/art', '/sections/fiction', '/sections/features', '/sections/poetry', '/sections/notes'];
    for (const path of sectionPages) {
      try {
        await res.revalidate(path);
        revalidatedPaths.push(path);
      } catch (err) {
        // Page might not exist yet, continue
        console.log(`Could not revalidate ${path}:`, err.message);
      }
    }

    // If a specific content item is being updated, revalidate related pages
    if (documentId && type === 'contentItem') {
      try {
        // Query Sanity to get the issue and author slugs for this content item
        const relatedData = await sanityClient.fetch(
          `*[_id == $id][0]{
            "issueSlug": issue->slug.current,
            "authorSlugs": authors[]->slug.current
          }`,
          { id: documentId }
        );

        // Revalidate the specific content page
        if (slug) {
          try {
            const path = `/content/${slug}`;
            await res.revalidate(path);
            revalidatedPaths.push(path);
          } catch (err) {
            console.log(`Could not revalidate /content/${slug}:`, err.message);
          }
        }

        // Revalidate the issue page this content belongs to
        if (relatedData?.issueSlug) {
          try {
            const path = `/issues/${relatedData.issueSlug}`;
            await res.revalidate(path);
            revalidatedPaths.push(path);
          } catch (err) {
            console.log(`Could not revalidate ${path}:`, err.message);
          }
        }

        // Revalidate all author pages for this content
        if (relatedData?.authorSlugs && Array.isArray(relatedData.authorSlugs)) {
          for (const authorSlug of relatedData.authorSlugs) {
            if (authorSlug) {
              try {
                const path = `/authors/${authorSlug}`;
                await res.revalidate(path);
                revalidatedPaths.push(path);
              } catch (err) {
                console.log(`Could not revalidate ${path}:`, err.message);
              }
            }
          }
        }
      } catch (err) {
        console.log('Error fetching related data from Sanity:', err.message);
      }
    }

    console.log('Successfully revalidated paths:', revalidatedPaths);

    return res.json({
      revalidated: true,
      paths: revalidatedPaths,
      time: new Date().toISOString()
    });
  } catch (err) {
    console.error('Revalidation error:', err);
    return res.status(500).send('Error revalidating');
  }
}
