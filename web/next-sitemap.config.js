/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://theharvardadvocate.com',
  generateRobotsTxt: true,
  generateIndexSitemap: true,
  sitemapSize: 7000,
  changefreq: 'weekly',
  priority: 0.7,
  exclude: ['/api/*', '/_next/*', '/404', '/500'],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/_next/', '/admin'],
      },
    ],
    additionalSitemaps: [
      'https://theharvardadvocate.com/sitemap.xml',
      'https://theharvardadvocate.com/server-sitemap.xml',
    ],
  },
  transform: async (config, path) => {
    // Custom priority for different page types
    let priority = 0.7;
    let changefreq = 'weekly';

    if (path === '/') {
      priority = 1.0;
      changefreq = 'daily';
    } else if (path.startsWith('/content/')) {
      priority = 0.9; // Articles are high priority
      changefreq = 'monthly';
    } else if (path.startsWith('/issues/') && path !== '/issues') {
      priority = 0.8;
      changefreq = 'monthly';
    } else if (path.startsWith('/sections/') && path !== '/sections') {
      priority = 0.7;
      changefreq = 'weekly';
    } else if (path.startsWith('/authors/')) {
      priority = 0.6;
      changefreq = 'monthly';
    }

    return {
      loc: path,
      changefreq,
      priority,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
    };
  },
};
