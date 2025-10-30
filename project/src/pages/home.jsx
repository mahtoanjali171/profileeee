import Navbar from "../components/navbar";
import Hero from "../components/hero";
import Projects from "../components/projects";
import Contact from "../components/contact";

export default function Home() {
  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <Navbar />
      <Hero />
      <Projects />
      <Contact />
    </div>
  );
}
