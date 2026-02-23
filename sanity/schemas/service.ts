import { defineType, defineField } from "sanity";

export default defineType({
  name: "service",
  title: "Service",
  type: "document",
  fields: [
    defineField({ name: "title", type: "string", title: "Service Title" }),
    defineField({
      name: "slug",
      type: "slug",
      title: "Slug",
      options: { source: "title" },
    }),
    defineField({ name: "shortDescription", type: "text", title: "Short Description" }),
    defineField({
      name: "fullDescription",
      type: "array",
      title: "Full Description",
      of: [{ type: "block" }],
    }),
    defineField({ name: "icon", type: "image", title: "Icon" }),
    defineField({
      name: "iconName",
      type: "string",
      title: "Icon Name (SVG lookup)",
      options: {
        list: [
          { title: "Globe", value: "globe" },
          { title: "Smartphone", value: "smartphone" },
          { title: "Check Circle", value: "check-circle" },
          { title: "Lightbulb", value: "lightbulb" },
          { title: "Palette", value: "palette" },
          { title: "Users", value: "users" },
        ],
      },
    }),
    defineField({ name: "image", type: "image", title: "Feature Image" }),
    defineField({ name: "order", type: "number", title: "Display Order" }),
    defineField({
      name: "features",
      type: "array",
      title: "Key Features",
      of: [{ type: "string" }],
    }),
  ],
  orderings: [
    {
      title: "Display Order",
      name: "order",
      by: [{ field: "order", direction: "asc" }],
    },
  ],
});
