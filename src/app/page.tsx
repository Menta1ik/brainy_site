import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { ServicesCards } from "@/components/sections/ServicesCards";
import { ProjectsGallery } from "@/components/sections/ProjectsGallery";
import { IndustriesSection } from "@/components/sections/IndustriesSection";
import { CTASection } from "@/components/sections/CTASection";
import {
  getHeroSection,
  getAboutSection,
  getServices,
  getFeaturedProjects,
  getIndustries,
} from "@/lib/sanity/fetchers";

export default async function HomePage() {
  const [heroData, aboutData, services, projects, industries] =
    await Promise.all([
      getHeroSection("home"),
      getAboutSection(),
      getServices(),
      getFeaturedProjects(),
      getIndustries(),
    ]);

  return (
    <>
      <HeroSection data={heroData} />
      <AboutSection data={aboutData} />
      <ServicesCards services={services} />
      <ProjectsGallery projects={projects} />
      <IndustriesSection industries={industries} />
      <CTASection />
    </>
  );
}
