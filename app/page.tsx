import About from "@/components/about";
import CaseStudies from "@/components/case-studies";
import Contact from "@/components/contact";
import Experience from "@/components/experience";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import Projects from "@/components/projects";
import Skills from "@/components/skills";
import Testimonials from "@/components/testimonials";

function Divider() {
  return <div className="section-divider" />;
}

export default function Home() {
  return (
    <div style={{ overflowX: "hidden", width: "100%" }}>
      <Hero />
      <About />
      <Divider />
      <Projects />
      <Divider />
      <Experience />
      <Divider />
      <CaseStudies />
      <Divider />
      <Skills />
      <Divider />
      <Testimonials />
      <Divider />
      <Contact />
      <Footer />
    </div>
  );
}
