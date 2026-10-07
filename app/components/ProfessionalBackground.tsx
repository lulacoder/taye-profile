const background = [
  { number: "01", title: "Federal prosecution", description: "Public service within Ethiopia's federal justice system." },
  { number: "02", title: "Legal consultancy", description: "Experience in environmental law and community legal education." },
  { number: "03", title: "Private practice", description: "Legal consultation and court representation in Addis Ababa." },
];

export default function ProfessionalBackground() {
  return (
    <section className="background-summary page-shell" aria-labelledby="summary-heading">
      <h2 id="summary-heading" className="summary-heading">Professional<br />background</h2>
      {background.map((item) => (
        <div className="summary-item" key={item.number}>
          <span className="number">{item.number}</span>
          <div><h3>{item.title}</h3><p>{item.description}</p></div>
        </div>
      ))}
    </section>
  );
}
