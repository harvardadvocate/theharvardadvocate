export default {
  name: "imageAsset",
  title: "Image Asset",
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
      name: "picsFrom21SouthStreet",
      title: "Feature on Pics From 21 South St.? (front page)",
      type: "boolean",
      initialValue: false,
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      validation: (Rule) => Rule.required(),
    },
  ],
};
