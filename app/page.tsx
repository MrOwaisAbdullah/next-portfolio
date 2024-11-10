import About from "@/components/About";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <>
    <Hero />
    <About />
    <div className="mt-20 text-center">
    <h3 className="text-base text-accent font-medium sm:text-lg">See My Previous Work</h3>
    <h2 className="text-5xl text-text font-semibold sm:text-6xl">Projects</h2>
    </div>
    <Projects />
    <Skills />
    <Contact />
    </>
  );
}
