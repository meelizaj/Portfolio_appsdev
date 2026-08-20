import HeroSection from "@/components/features/home/hero/hero-section";
import AboutSection from "@/components/features/home/about/about-section";
import SkillsSection from "@/components/features/home/skills/skills-section";
import ProcessSection from "@/components/features/home/process/process-section";
import ProjectsSection from "@/components/features/home/projects/projects-card-section";
import ContactSection from "@/components/features/home/contact/contact-section";

export default function HomePage() {
  return (
    <main className="bg-[#f3eee7] text-[#3e3f35]">
      <HeroSection/>
      <AboutSection/>
      <SkillsSection/>
      <ProcessSection/>
      <ProjectsSection/>
      <ContactSection/>
    </main>
  );
}
