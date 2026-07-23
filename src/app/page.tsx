import Header from "@/components/sections/Header";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Certifications from "@/components/sections/Certifications";
import WorkExperience from "@/components/sections/WorkExperience";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";
import ProjectsGrid from "@/components/sections/ProjectsGrid"
import ClientProjects from "@/components/sections/ClientProjects";
import Campusinvolvement from "@/components/sections/CampusInvolvement";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-background selection:bg-[#f97316]/30 selection:text-slate-900 dark:selection:text-white overflow-hidden">
      
      {/* Top Header with Dark Mode Toggle */}
      <Header />
      
      <Hero />
      
      <main className="relative z-10 flex flex-col gap-12 md:gap-32">
        <About />
        <Certifications />
        <ProjectsGrid />
        <ClientProjects />
        <WorkExperience />
        <Campusinvolvement />
        <Contact />
      </main>
      
      <Footer />
    </div>
  );
}