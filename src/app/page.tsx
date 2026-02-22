import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { ServicesCards } from "@/components/sections/ServicesCards";
import { ProjectsGallery } from "@/components/sections/ProjectsGallery";
import { IndustriesSection } from "@/components/sections/IndustriesSection";
import { CTASection } from "@/components/sections/CTASection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ServicesCards />
      <ProjectsGallery />
      <IndustriesSection />
      <CTASection />
    </>
  );
}
