export const DEFAULT_SEO = {
  titleTemplate: '%s | The Harvard Advocate',
  defaultTitle: 'The Harvard Advocate',
  description: "America's oldest continuously published college literary magazine, founded in 1866. Publishing poetry, fiction, art, and features by Harvard students and established writers.",
  canonical: 'https://theharvardadvocate.com',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://theharvardadvocate.com',
    site_name: 'The Harvard Advocate',
    images: [
      {
        url: 'https://theharvardadvocate.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'The Harvard Advocate',
      },
    ],
  },
  twitter: {
    handle: '@harvardadvocate',
    site: '@harvardadvocate',
    cardType: 'summary_large_image',
  },
  additionalMetaTags: [
    {
      name: 'viewport',
      content: 'width=device-width, initial-scale=1',
    },
    {
      name: 'keywords',
      content: 'Harvard, literary magazine, poetry, fiction, art, student writing, literature',
    },
    {
      name: 'author',
      content: 'The Harvard Advocate',
    },
  ],
  additionalLinkTags: [
    {
      rel: 'icon',
      href: '/favicon.ico',
    },
    {
      rel: 'apple-touch-icon',
      href: '/apple-touch-icon.png',
      sizes: '180x180',
    },
  ],
};
