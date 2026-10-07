import Image from "next/image";
import ArrowIcon from "./ArrowIcon";

export default function Hero() {
  return (
    <section id="home" className="hero page-shell" aria-labelledby="hero-heading">
      <div>
        <h1 id="hero-heading" className="hero-name">
          <span>Taye</span><span>Bezabih</span><span>Fino</span>
        </h1>
        <p className="hero-role">Legal consultant &amp; attorney at law</p>
        <p className="hero-context">Former Senior Federal Public Prosecutor<span>28+ years in the legal sector</span></p>
        <p className="hero-location">
          <svg width="15" height="19" viewBox="0 0 15 19" fill="currentColor" aria-hidden="true">
            <path d="M7.5 0a7 7 0 0 0-7 7c0 5 7 12 7 12s7-7 7-12a7 7 0 0 0-7-7Zm0 9.5A2.5 2.5 0 1 1 7.5 4a2.5 2.5 0 0 1 0 5.5Z" />
          </svg>
          Addis Ababa, Ethiopia
        </p>
        <div className="hero-actions">
          <a href="#contact" className="button">Get in touch <ArrowIcon /></a>
          <a href="#background" className="text-link">View background <ArrowIcon /></a>
        </div>
      </div>
      <figure>
        <div className="portrait-frame">
          {/* Temporary concept image. Replace with Taye's approved portrait before launch. */}
          <Image
            src="/images/concept-portrait.png"
            alt="Generated concept portrait of a fictional attorney, to be replaced with Taye's photograph"
            fill
            preload
            sizes="(max-width: 760px) calc(100vw - 40px), (max-width: 1100px) 46vw, 44vw"
          />
        </div>
        <figcaption className="portrait-caption">Concept portrait</figcaption>
      </figure>
    </section>
  );
}
