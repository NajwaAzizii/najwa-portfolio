import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Projects from "@/components/sections/Projects";
import Skills from "@/components/sections/Skills";
import Experience from "@/components/sections/Experience";
import Achievements from "@/components/sections/Achievements";
import Certifications from "@/components/sections/Certifications";
import GitHub from "@/components/sections/GitHub";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";
import Navbar from "@/components/layout/Navbar";

export default function Home() {
  return (
    <>
    <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Experience />
        <Achievements />
        <Certifications />
        <GitHub />
        <Contact />
      </main>

      <Footer />
    </>
  );
}