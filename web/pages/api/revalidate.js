export default async function handler(req, res) {
  // Check for secret to confirm this is a valid request
  if (req.query.secret !== process.env.REVALIDATE_SECRET) {
    return res.status(401).json({ message: 'Invalid token' });
  }

  try {
    const slug = req.body?.slug;
    const type = req.body?._type;

    // Revalidate homepage
    await res.revalidate('/');

    // Revalidate main pages that use getStaticProps
    await res.revalidate('/issues');
    await res.revalidate('/sections');

    // If a specific slug is provided, revalidate that page based on type
    if (slug) {
      if (type === 'contentItem') {
        await res.revalidate(`/content/${slug}`);
      } else if (type === 'issue') {
        await res.revalidate(`/issues/${slug}`);
      } else if (type === 'section') {
        await res.revalidate(`/sections/${slug}`);
      } else if (type === 'author') {
        await res.revalidate(`/authors/${slug}`);
      }
    }

    return res.json({
      revalidated: true,
      time: new Date().toISOString()
    });
  } catch (err) {
    console.error('Revalidation error:', err);
    return res.status(500).send('Error revalidating');
  }
}
