import About from "@/components/about";
import Contact from "@/components/contact";
import Experience from "@/components/experience";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import Projects from "@/components/projects";
import Skills from "@/components/skills";

function Divider() {
  return <div className="section-divider" />;
}

export default function Home() {
  return (
    <div>
      <Hero />
      <Experience />
      <Divider />
      <Projects />
      <Divider />
      <Skills />
      <Divider />
      <About />
      <Divider />
      <Contact />
      <Footer />
    </div>
  );
}
