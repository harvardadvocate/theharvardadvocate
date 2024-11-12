export default {
  name: "contentItem",
  title: "Content Item",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: "authors",
      title: "Authors",
      type: "array",
      of: [{ type: "reference", to: { type: "author" } }],
      validation: (Rule) => Rule.required(),
    },
    {
      name: "mainImage",
      title: "Main image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "bannerImage",
      title: "Banner image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "sections",
      title: "Sections",
      type: "array",
      of: [{ type: "reference", to: { type: "section" } }],
      validation: (Rule) => Rule.required(),
    },

    {
      name: "featuredOptions",
      title: "Featured on front page?",
      type: "array",
      of: [{type: 'string'}],
      options: {
        list: [
          {title: 'Featured Top Bar (Features)', value: 'featuresFeaturedTop'},
          {title: 'Featured Top Bar (Poetry)', value: 'poetryFeaturedTop'},
          {title: 'Featured Top Bar (Fiction)', value: 'fictionFeaturedTop'},
          {title: 'Featured Middle Bar (Features)', value: 'featuresFeaturedMiddle'},
          {title: 'Featured Middle Right (Art)', value: 'artFeaturedMiddleRight'},
          {title: 'Featured Bottom Right (Art)', value: 'artFeaturedBottomRight'},
          {title: 'Featured Bottom Row (Poetry)', value: 'poetryFeaturedBottom'},
          {title: 'Featured Bottom Row (Fiction)', value: 'fictionFeaturedBottom'},
          {title: 'Featured Blog', value: 'featuredBlog'},
          {title: 'Featured Issue Highlight', value: 'newIssueFeatured'},

        ]
      }
    },

    {
      name: "publishedAt",
      title: "Published at",
      type: "datetime",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "year",
      title: "Year published",
      type: "string",
    },
    {
      name: "issue",
      title: "Issue",
      type: "reference",
      to: { type: "issue" },
      // validation: (Rule) => Rule.required(),
    },
    {
      name: "body",
      title: "Body",
      type: "blockContent",
    },
    {
      name: "images",
      title: "Images",
      type: "array",
      of: [{ type: "image" }],
    },

    {
      name: "vimeoLink",
      title: "Vimeo ID (if applicable)",
      type: "string",
      // options: {
      //   hotspot: true,
      // },
    },

    // todo: video and audio - files or want integration?
  ],

  preview: {
    select: {
      title: "title",
      author: "authors.0.name",
      media: "mainImage",
    },
    prepare(selection) {
      const { author } = selection;
      return Object.assign({}, selection, {
        subtitle: author && `by ${author}`,
      });
    },
  },
};
