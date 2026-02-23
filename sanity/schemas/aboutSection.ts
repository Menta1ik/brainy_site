import { defineType, defineField } from "sanity";

export default defineType({
  name: "aboutSection",
  title: "About Section",
  type: "document",
  fields: [
    defineField({ name: "title", type: "string", title: "Title" }),
    defineField({ name: "subtitle", type: "string", title: "Subtitle" }),
    defineField({
      name: "paragraphs",
      type: "array",
      title: "Body Paragraphs",
      of: [{ type: "text" }],
    }),
    defineField({
      name: "stats",
      type: "array",
      title: "Statistics",
      of: [
        {
          type: "object",
          fields: [
            defineField({ name: "value", type: "string", title: "Value (e.g. 15+)" }),
            defineField({ name: "label", type: "string", title: "Label (e.g. Years in Business)" }),
          ],
        },
      ],
    }),
  ],
});
