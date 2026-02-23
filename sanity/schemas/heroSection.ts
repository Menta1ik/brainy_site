import { defineType, defineField } from "sanity";

export default defineType({
  name: "heroSection",
  title: "Hero Section",
  type: "document",
  fields: [
    defineField({
      name: "page",
      type: "string",
      title: "Page",
      options: {
        list: [
          { title: "Home", value: "home" },
          { title: "Why Choose Us", value: "why-choose-us" },
          { title: "Services", value: "services" },
          { title: "Contacts", value: "contacts" },
          { title: "Team", value: "team" },
        ],
      },
    }),
    defineField({ name: "tagline", type: "string", title: "Tagline (small text above heading)" }),
    defineField({ name: "heading", type: "string", title: "Heading" }),
    defineField({ name: "subheading", type: "text", title: "Subheading" }),
    defineField({ name: "backgroundImage", type: "image", title: "Background Image" }),
    defineField({
      name: "ctaButtons",
      type: "array",
      title: "CTA Buttons",
      of: [
        {
          type: "object",
          fields: [
            defineField({ name: "label", type: "string", title: "Label" }),
            defineField({ name: "href", type: "string", title: "Link" }),
            defineField({
              name: "variant",
              type: "string",
              title: "Variant",
              options: {
                list: [
                  { title: "Primary", value: "primary" },
                  { title: "Secondary", value: "secondary" },
                  { title: "Outline", value: "outline" },
                ],
              },
            }),
          ],
        },
      ],
    }),
  ],
});
