import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import CareerMetrics from "./components/CareerMetrics";
import ProfessionalBackground from "./components/ProfessionalBackground";
import About from "./components/About";
import CareerTimeline from "./components/CareerTimeline";
import Credentials from "./components/Credentials";
import Education from "./components/Education";
import Approach from "./components/Approach";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollEffects from "./components/ScrollEffects";

// TODO: Add verified current practice areas after confirming them with Taye.
export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main-content">Skip to content</a>
      <ScrollEffects />
      <Navbar />
      <main id="main-content">
        <Hero />
        <CareerMetrics />
        <ProfessionalBackground />
        <About />
        <CareerTimeline />
        <Credentials />
        <Education />
        <Approach />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
