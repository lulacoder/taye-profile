import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import ProfessionalBackground from "./components/ProfessionalBackground";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main-content">Skip to content</a>
      <Navbar />
      <main id="main-content">
        <Hero />
        <ProfessionalBackground />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
