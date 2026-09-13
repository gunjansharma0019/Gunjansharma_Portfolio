import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { Experience } from "@/components/Experience";
import { Education } from "@/components/Education";
import { Certifications } from "@/components/Certifications";
import { Services } from "@/components/Services";
import { Resume } from "@/components/Resume";
import { GithubSection } from "@/components/GithubSection";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { BackToTop } from "@/components/ui/BackToTop";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Services />
        <Experience />
        <Education />
        <Certifications />
        <Resume />
        <GithubSection />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
