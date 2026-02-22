import { defineType, defineField } from "sanity";

export default defineType({
  name: "teamMember",
  title: "Team Member",
  type: "document",
  fields: [
    defineField({ name: "name", type: "string", title: "Full Name" }),
    defineField({
      name: "slug",
      type: "slug",
      title: "Slug",
      options: { source: "name" },
    }),
    defineField({ name: "role", type: "string", title: "Role / Position" }),
    defineField({
      name: "bio",
      type: "array",
      title: "Biography",
      of: [{ type: "block" }],
    }),
    defineField({ name: "shortBio", type: "text", title: "Short Bio" }),
    defineField({
      name: "photo",
      type: "image",
      title: "Photo",
      options: { hotspot: true },
    }),
    defineField({ name: "email", type: "string", title: "Email" }),
    defineField({
      name: "socialLinks",
      type: "object",
      title: "Social Links",
      fields: [
        defineField({ name: "linkedin", type: "url", title: "LinkedIn" }),
        defineField({ name: "twitter", type: "url", title: "Twitter" }),
        defineField({ name: "github", type: "url", title: "GitHub" }),
      ],
    }),
    defineField({ name: "yearsExperience", type: "number", title: "Years of Experience" }),
    defineField({
      name: "specializations",
      type: "array",
      title: "Specializations",
      of: [{ type: "string" }],
    }),
    defineField({ name: "order", type: "number", title: "Display Order" }),
  ],
});
