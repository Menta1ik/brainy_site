import { defineType, defineField } from "sanity";

export default defineType({
  name: "industry",
  title: "Industry",
  type: "document",
  fields: [
    defineField({ name: "title", type: "string", title: "Industry Name" }),
    defineField({
      name: "slug",
      type: "slug",
      title: "Slug",
      options: { source: "title" },
    }),
    defineField({ name: "description", type: "text", title: "Description" }),
    defineField({ name: "icon", type: "image", title: "Icon" }),
    defineField({
      name: "iconName",
      type: "string",
      title: "Icon Name (SVG lookup)",
      options: {
        list: [
          { title: "Trending Up", value: "trending-up" },
          { title: "Radio", value: "radio" },
          { title: "Building", value: "building" },
          { title: "Heart", value: "heart" },
          { title: "Shield", value: "shield" },
          { title: "Shopping Cart", value: "shopping-cart" },
        ],
      },
    }),
    defineField({ name: "order", type: "number", title: "Display Order" }),
  ],
});
