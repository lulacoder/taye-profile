import Image from "next/image";
import ArrowIcon from "./ArrowIcon";

export default function Hero() {
  return (
    <section id="home" className="hero page-shell" aria-labelledby="hero-heading">
      <div className="hero-copy">
        <div className="hero-badges">
          <span className="badge">Former Senior Federal Public Prosecutor</span>
          <span className="tag hero-location">
            <svg width="11" height="14" viewBox="0 0 15 19" fill="currentColor" aria-hidden="true">
              <path d="M7.5 0a7 7 0 0 0-7 7c0 5 7 12 7 12s7-7 7-12a7 7 0 0 0-7-7Zm0 9.5A2.5 2.5 0 1 1 7.5 4a2.5 2.5 0 0 1 0 5.5Z" />
            </svg>
            Addis Ababa, Ethiopia
          </span>
        </div>
        <h1 id="hero-heading" className="hero-name">
          <span className="hero-name-strong">Taye Bezabih Fino</span>
          <span className="hero-name-light">Legal consultant &amp; attorney at law</span>
        </h1>
        <p className="hero-keywords">
          <span>28+ years across</span>
          <span className="rotator" aria-hidden="true">
            <span className="rotator-track">
              <span>public prosecution</span>
              <span>courtroom advocacy</span>
              <span>legal advisory work</span>
              <span>institutional training</span>
              <span>public prosecution</span>
            </span>
          </span>
          <span className="sr-only">public prosecution, courtroom advocacy, legal advisory work, and institutional training</span>
        </p>
        <div className="hero-actions">
          <p className="hero-actions-text">Discuss your legal matter and arrange a consultation.</p>
          <a href="#contact" className="button">Get in touch <ArrowIcon /></a>
          <a href="#background" className="text-link">View background <ArrowIcon /></a>
        </div>
      </div>
      <figure className="hero-art">

        <div className="portrait-frame">
          {/* Temporary concept image. Replace with Taye's approved portrait before launch. */}
          <Image
            src="/images/concept-portrait.png"
            alt="Generated concept portrait of a fictional attorney, to be replaced with Taye's photograph"
            fill
            preload
            sizes="(max-width: 760px) calc(100vw - 32px), (max-width: 1100px) 40vw, 36vw"
          />
        </div>
        <figcaption className="portrait-caption">
          <strong>Taye Bezabih Fino</strong>
          <span>Concept portrait</span>
        </figcaption>
      </figure>
    </section>
  );
}
