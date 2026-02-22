import { defineType, defineField } from "sanity";

export default defineType({
  name: "siteSettings",
  title: "Site Settings",
  type: "document",
  fields: [
    defineField({ name: "title", type: "string", title: "Site Title" }),
    defineField({ name: "description", type: "text", title: "Site Description" }),
    defineField({ name: "logo", type: "image", title: "Logo" }),
    defineField({ name: "logoWhite", type: "image", title: "Logo (White)" }),
    defineField({ name: "ogImage", type: "image", title: "Default OG Image" }),
    defineField({ name: "email", type: "string", title: "Contact Email" }),
    defineField({ name: "phone", type: "string", title: "Phone Number" }),
    defineField({
      name: "address",
      type: "object",
      title: "Address",
      fields: [
        defineField({ name: "street", type: "string", title: "Street" }),
        defineField({ name: "city", type: "string", title: "City" }),
        defineField({ name: "postalCode", type: "string", title: "Postal Code" }),
        defineField({ name: "country", type: "string", title: "Country" }),
      ],
    }),
    defineField({ name: "workingHours", type: "string", title: "Working Hours" }),
    defineField({
      name: "socialLinks",
      type: "object",
      title: "Social Links",
      fields: [
        defineField({ name: "twitter", type: "url", title: "Twitter" }),
        defineField({ name: "facebook", type: "url", title: "Facebook" }),
        defineField({ name: "linkedin", type: "url", title: "LinkedIn" }),
        defineField({ name: "instagram", type: "url", title: "Instagram" }),
      ],
    }),
  ],
});
