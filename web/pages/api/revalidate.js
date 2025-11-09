export default async function handler(req, res) {
  // Check for secret to confirm this is a valid request
  if (req.query.secret !== process.env.REVALIDATE_SECRET) {
    return res.status(401).json({ message: 'Invalid token' });
  }

  try {
    // Log the incoming webhook data for debugging
    console.log('Webhook received:', JSON.stringify(req.body, null, 2));

    const revalidatedPaths = [];

    // Always revalidate main pages - this ensures content updates appear
    // even if we can't determine the specific page that changed
    await res.revalidate('/');
    revalidatedPaths.push('/');

    await res.revalidate('/issues');
    revalidatedPaths.push('/issues');

    await res.revalidate('/sections');
    revalidatedPaths.push('/sections');

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
