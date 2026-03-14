import About from "@/components/about";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import Projects from "@/components/projects";
import Services from "@/components/services";
import StatsStrip from "@/components/stats-strip";

export default function Home() {
  return (
    <div className="font-sans dark:bg-black">
      <Hero />
      <StatsStrip />
      <About />
      <Services />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}
