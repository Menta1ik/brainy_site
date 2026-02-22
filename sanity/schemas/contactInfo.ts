import { defineType, defineField } from "sanity";

export default defineType({
  name: "contactInfo",
  title: "Contact Information",
  type: "document",
  fields: [
    defineField({ name: "email", type: "string", title: "Email" }),
    defineField({ name: "phone", type: "string", title: "Phone" }),
    defineField({ name: "address", type: "text", title: "Address" }),
    defineField({ name: "workingHours", type: "string", title: "Working Hours" }),
    defineField({ name: "mapEmbedUrl", type: "url", title: "Google Maps Embed URL" }),
    defineField({ name: "responseTime", type: "string", title: "Response Time Promise" }),
  ],
});
