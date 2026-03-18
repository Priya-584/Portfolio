import { Hero } from "@/components/sections/Hero";
import { SocialMedia } from "@/components/sections/SocialMedia";
import { About } from "@/components/sections/About";
import { CaseStudies } from "@/components/sections/CaseStudies";
import { LogoPortfolio } from "@/components/sections/LogoPortfolio";
import { Process } from "@/components/sections/Process";
import { Skills } from "@/components/sections/Skills";
import { Experience } from "@/components/sections/Experience";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <main className="bg-background min-h-screen text-foreground">
      <Hero />
      <About />
      <CaseStudies />
      <LogoPortfolio />
      <SocialMedia />
      <Process />
      <Skills />
      <Experience />
      <Contact />
    </main>
  );
}
