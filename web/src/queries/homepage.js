const getItemData = `*[_type == "issue"] | order(publishedAt desc)[0] {
        title,
        slug,
        description,
        frontCover{
          asset->{
            _id,
            url
          }
        }
      }`;

// const getFeaturedItems = `*[_type == "contentItem" && "newIssueFeatured" in featuredOptions]  | order(publishedAt desc) {
//               title,
//               authors[]->{name, slug},
//               issue->{title, slug},
//               slug,
//               mainImage{
//                 asset->{
//                 _id,
//                 url
//               }
//             }
//           }[0...4]`;

const getFeaturedArticle1 = `*[_type == "contentItem" && "featuresFeaturedTop" in featuredOptions] | order(publishedAt desc)[0] {
              title,
              authors[]->{name, slug},
              issue->{title, slug},
              slug,
              body,
              sections[]->{title, slug},
              mainImage{
                asset->{
                _id,
                url
              }
            }
          }`;

const getFeaturedArticle2 = `*[_type == "contentItem" && "poetryFeaturedTop" in featuredOptions] | order(publishedAt desc)[0] {
                title,
                authors[]->{name, slug},
                issue->{title, slug},
                slug,
                body,
                sections[]->{title, slug},
                mainImage{
                  asset->{
                  _id,
                  url
                }
              }
            }`;

const getFeaturedArticle3 = `*[_type == "contentItem" && "fictionFeaturedTop" in featuredOptions] | order(publishedAt desc)[0] {
                title,
                authors[]->{name, slug},
                issue->{title, slug},
                slug,
                body,
                sections[]->{title, slug},
                mainImage{
                  asset->{
                  _id,
                  url
                }
              }
            }`;

const getFeaturedArticle4 = `*[_type == "contentItem" && "featuresFeaturedMiddle" in featuredOptions] | order(publishedAt desc)[0] {
                  title,
                  authors[]->{name, slug},
                  issue->{title, slug},
                  slug,
                  body,
                  sections[]->{title, slug},
                  mainImage{
                    asset->{
                    _id,
                    url
                  }
                }
              }`;

const getFeaturedArticle5 = `*[_type == "contentItem" && "poetryFeaturedBottom" in featuredOptions] | order(publishedAt desc)[0] {
                    title,
                    authors[]->{name, slug},
                    issue->{title, slug},
                    slug,
                    body,
                    sections[]->{title, slug},
                    mainImage{
                      asset->{
                      _id,
                      url
                    }
                  }
                }`;

const getFeaturedArticle6 = `*[_type == "contentItem" && "fictionFeaturedBottom" in featuredOptions] | order(publishedAt desc)[0] {
                      title,
                      authors[]->{name, slug},
                      issue->{title, slug},
                      slug,
                      body,
                      sections[]->{title, slug},
                      mainImage{
                        asset->{
                        _id,
                        url
                      }
                    }
                  }`;

const getFeaturedArt1 = `*[_type == "contentItem" && "artFeaturedMiddleRight" in featuredOptions] | order(publishedAt desc)[0] {
                      title,
                      authors[]->{name, slug},
                      issue->{title, slug},
                      slug,
                      body,
                      sections[]->{title, slug},
                      mainImage{
                        asset->{
                        _id,
                        url
                      }
                    }
                  }`;

const getFeaturedArt2 = `*[_type == "contentItem" && "artFeaturedBottomRight" in featuredOptions] | order(publishedAt desc)[0] {
                      title,
                      authors[]->{name, slug},
                      issue->{title, slug},
                      slug,
                      body,
                      sections[]->{title, slug},
                      mainImage{
                        asset->{
                        _id,
                        url
                      }
                    }
                  }`;
                  
// here i'm querying for BlogArticles

const getBlogArticle1 = `*[_type == 'contentItem' && _id == '39909580-a8e9-4328-9772-da2e42576b82'] | order(publishedAt desc)[0] {
                      title,
                      authors[]->{name, slug},
                      issue->{title, slug},
                      slug,
                      body,
                      sections[]->{title, slug},
                      mainImage{
                        asset->{
                        _id,
                        url
                      }
                    }
                  }`;

const getBlogArticle2 = `*[_type == 'contentItem' && _id == 'fbb35fe7-7705-4369-b6a0-75b17d9da175' ] | order(publishedAt desc)[0]{
                      title,
                      authors[]->{name, slug},
                      issue->{title, slug},
                      slug,
                      body,
                      sections[]->{title, slug},
                      mainImage{
                        asset->{
                        _id,
                        url
                      }
                    }
                  }`;

                  // end of emma edits


const getInstagram = `*[_type == "imageAsset" && picsFrom21SouthStreet == true]  | order(publishedAt desc) {
                      title,
                      slug,
                      image{
                        asset->{
                        _id,
                        url
                      }
                    }
                  }[0...3]`;

const getArchivedContent = `*[_type == "contentItem" && issue->title == "Winter 2009" && ("Fiction" in sections[]->title || "Poetry" in sections[]->title || "Features" in sections[]->title)]  | order(publishedAt desc) {
                      title,
                      authors[]->{name, slug},
                      issue->{title, slug},
                      slug,
                      body,
                      sections[]->{title, slug},
                  }`;

const getResources = `
{
  "itemData": ${getItemData},
  "featuredItems": ${getFeaturedItems},
  "featuredArticle1": ${getFeaturedArticle1},
  "featuredArticle2": ${getFeaturedArticle2},
  "featuredArticle3": ${getFeaturedArticle3},
  "featuredArticle4": ${getFeaturedArticle4},
  "featuredArticle5": ${getFeaturedArticle5},
  "featuredArticle6": ${getFeaturedArticle6},
  "BlogArticle1": ${getBlogArticle1},
  "BlogArticle2": ${getBlogArticle2},
  "featuredArt1": ${getFeaturedArt1},
  "featuredArt2": ${getFeaturedArt2},
  "instagram": ${getInstagram},
  "archivedContent": ${getArchivedContent}
}`;

export { getResources };
