import { defineType, defineField } from "sanity";

export default defineType({
  name: "project",
  title: "Project",
  type: "document",
  fields: [
    defineField({ name: "title", type: "string", title: "Project Title" }),
    defineField({
      name: "slug",
      type: "slug",
      title: "Slug",
      options: { source: "title" },
    }),
    defineField({ name: "description", type: "text", title: "Short Description" }),
    defineField({
      name: "image",
      type: "image",
      title: "Project Image",
      options: { hotspot: true },
    }),
    defineField({
      name: "industry",
      type: "reference",
      title: "Industry",
      to: [{ type: "industry" }],
    }),
    defineField({
      name: "technologies",
      type: "array",
      title: "Technologies Used",
      of: [{ type: "string" }],
    }),
    defineField({ name: "order", type: "number", title: "Display Order" }),
    defineField({ name: "featured", type: "boolean", title: "Featured on Homepage" }),
  ],
});
