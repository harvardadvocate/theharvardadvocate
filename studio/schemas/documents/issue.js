export default {
  name: "issue",
  title: "Issue",
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
      name: "publishedAt",
      title: "Published at",
      type: "datetime",
    },
    {
      name: "description",
      title: "Description",
      type: "text",
    },
    {
      name: "frontCover",
      title: "Front Cover",
      type: "image",
    },
    {
      name: "backCover",
      title: "Back Cover",
      type: "image",
    },
    {
      name: "toc",
      title: "Table of Contents",
      type: "image",
    },
  ],
};
