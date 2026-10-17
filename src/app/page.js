import About from "@/components/About";
import ScrollToTop from "@/components/common/ScrollToTop";
import Contact from "@/components/Contact";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";

export default function Home() {

  return (
    <>
    <Hero></Hero>
    <About></About>
    <Education></Education>
    <Experience></Experience>
    <Skills></Skills>
    <Projects></Projects>
    <Contact></Contact>
    <ScrollToTop></ScrollToTop>
    </>
  );
}
