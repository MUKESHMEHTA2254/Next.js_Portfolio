import AboutSection from "@/components/AboutSection";
import EmailSection from "@/components/EmailSection";
import ExperienceSection from "@/components/ExperienceSection";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import ProjectsSection from "@/components/ProjectsSection";
import SkillsSection from "@/components/SkillsSection";
import SystemDesignSection from "@/components/SystemDesignSection";


export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-slate-950">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-10rem] top-24 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="absolute right-[-12rem] top-[28rem] h-96 w-96 rounded-full bg-violet-500/10 blur-3xl" />
        <div className="absolute bottom-16 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-blue-500/10 blur-3xl" />
      </div>
      <Navbar />
      <div className="site-width relative flex flex-col gap-8 px-4 pb-12 pt-28 sm:px-5 lg:px-6">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <SystemDesignSection />
        <ExperienceSection />
        <ProjectsSection />
        <EmailSection />
      </div>
      <Footer />
    </main>
  );
}
