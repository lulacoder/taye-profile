// Confirm Taye's preferred spellings and service-level fluency before launch.
const languages = ["English", "Amharic", "Wolayta", "Gofa", "Basketo"];

export default function Languages() {
  return (
    <section id="languages" className="editorial-section page-shell" aria-labelledby="languages-heading">
      <div>
        <span className="eyebrow">05 / Languages</span>
        <h2 id="languages-heading" className="section-heading">Languages.</h2>
      </div>
      <div>
        <p className="section-introduction">Languages listed in Taye&apos;s professional CV include:</p>
        <ul className="language-list">
          {languages.map((language) => <li key={language}>{language}</li>)}
        </ul>
      </div>
    </section>
  );
}
