/**
 * Schema.org JSON-LD helpers for structured data
 */

export function createArticleSchema({
  title,
  description,
  authors = [],
  publishedDate,
  modifiedDate,
  imageUrl,
  url,
  sections = [],
}) {
  const authorsArray = authors.map(author => ({
    "@type": "Person",
    "name": author.name,
    "url": author.slug ? `https://theharvardadvocate.com/authors/${author.slug.current}` : undefined,
  }));

  return {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": title,
    "description": description,
    "image": imageUrl,
    "datePublished": publishedDate,
    "dateModified": modifiedDate || publishedDate,
    "author": authorsArray.length === 1 ? authorsArray[0] : authorsArray,
    "publisher": {
      "@type": "Organization",
      "name": "The Harvard Advocate",
      "logo": {
        "@type": "ImageObject",
        "url": "https://theharvardadvocate.com/logo.png"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": url
    },
    "articleSection": sections.length > 0 ? sections[0].title : undefined,
  };
}

export function createPersonSchema({
  name,
  description,
  imageUrl,
  url,
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": name,
    "description": description,
    "image": imageUrl,
    "url": url,
    "worksFor": {
      "@type": "Organization",
      "name": "The Harvard Advocate"
    }
  };
}

export function createOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "The Harvard Advocate",
    "url": "https://theharvardadvocate.com",
    "logo": "https://theharvardadvocate.com/logo.png",
    "description": "America's oldest continuously published college literary magazine, founded in 1866",
    "foundingDate": "1866",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "21 South Street",
      "addressLocality": "Cambridge",
      "addressRegion": "MA",
      "postalCode": "02138",
      "addressCountry": "US"
    },
    "sameAs": [
      "https://twitter.com/harvardadvocate",
      "https://www.instagram.com/harvardadvocate/",
      "https://www.facebook.com/harvardadvocate"
    ]
  };
}

export function createBreadcrumbSchema(items) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url
    }))
  };
}

export function createWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "The Harvard Advocate",
    "url": "https://theharvardadvocate.com",
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://theharvardadvocate.com/search?q={search_term_string}"
      },
      "query-input": "required name=search_term_string"
    }
  };
}
