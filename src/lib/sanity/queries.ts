export const SITE_SETTINGS_QUERY = `*[_type == "siteSettings"][0] { logo }`;

export const SERVICES_QUERY = `*[_type == "service"] | order(order asc) {
  _id, title, slug, shortDescription, icon, iconName, image, order, features
}`;

export const FEATURED_PROJECTS_QUERY = `*[_type == "project" && featured == true] | order(order asc) {
  _id, title, slug, description, image,
  industry->{ title },
  technologies
}`;

export const ALL_PROJECTS_QUERY = `*[_type == "project"] | order(order asc) {
  _id, title, slug, description, image,
  industry->{ title },
  technologies
}`;

export const PROJECT_BY_SLUG_QUERY = `*[_type == "project" && slug.current == $slug][0] {
  _id, title, slug, description, image,
  industry->{ title },
  technologies, challenge, solution, results
}`;

export const INDUSTRIES_QUERY = `*[_type == "industry"] | order(order asc) {
  _id, title, slug, description, icon, iconName
}`;

export const ABOUT_SECTION_QUERY = `*[_type == "aboutSection"][0] {
  title, subtitle, paragraphs, stats
}`;

export const TEAM_MEMBERS_QUERY = `*[_type == "teamMember"] | order(order asc) {
  _id, name, slug, role, shortBio, photo, email,
  socialLinks, yearsExperience, specializations
}`;

export const TEAM_MEMBER_QUERY = `*[_type == "teamMember" && slug.current == $slug][0] {
  _id, name, role, bio, shortBio, photo, email,
  socialLinks, yearsExperience, specializations
}`;

export const HERO_QUERY = `*[_type == "heroSection" && page == $page][0] {
  tagline, heading, subheading, backgroundImage, ctaButtons
}`;

export const CONTACT_INFO_QUERY = `*[_type == "contactInfo"][0]`;

export const SERVICE_BY_SLUG_QUERY = `*[_type == "service" && slug.current == $slug][0] {
  _id, title, slug, shortDescription, iconName, image, order, features
}`;
