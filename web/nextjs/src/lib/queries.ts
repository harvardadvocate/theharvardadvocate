// Basic queries for testing and initial migration

export const getLatestIssue = `*[_type == "issue"] | order(publishedAt desc)[0] {
  title,
  slug,
  description,
  frontCover{
    asset->{
      _id,
      url
    }
  }
}`

export const getAboutPage = `*[_type == "contentItem" && slug.current == "about"]{
  title,
  body,
  mainImage{
    asset->{
      _id,
      url
    }
  }
}[0]`

export const getIssues = `*[_type == "issue"] | order(publishedAt desc) {
  title,
  slug,
  publishedAt,
  description,
  frontCover{
    asset->{
      _id,
      url
    }
  }
}`

export const getContentItem = `*[slug.current == $slug]{
  title,
  slug,
  mainImage{
    asset->{
      _id,
      url
    }
  },
  body,
  publishedAt,
  issue->{title, slug},
  authors[]->{name, slug},
  sections[]->{title, slug},
  images[]{asset->{_id, url}},
  vimeoLink
}[0]`

export const getAuthor = `*[_type == "author" && slug.current == $authorSlug]{
  _id,
  name,
  slug,
  image,
  bio,
  "itemData": *[_type == "contentItem" && ^._id in authors[]._ref]{
    title, 
    body, 
    slug, 
    authors[]->{name, slug}, 
    issue->{title, slug}, 
    sections[]->{title, slug}, 
    images[]{asset->{_id, url}}, 
    mainImage{asset->{_id,url}}
  }
}[0]` 