import { stagger } from "./stagger";

const background = [
  {
    number: "01",
    title: "Federal prosecution",
    description: "Served as a Senior Federal Public Prosecutor at the Ethiopian Federal Ministry of Justice, reviewing criminal investigations and representing the government before the Federal High Court and Federal Supreme Court.",
  },
  {
    number: "02",
    title: "Regional justice",
    description: "Worked with the SNNPR Justice Bureau in prosecution, investigation oversight, government representation, NGO regulatory work, and training for police officers, prosecutors, and judges.",
  },
  {
    number: "03",
    title: "Private practice",
    description: "Legal consultant and attorney at law in Addis Ababa since January 2012, following public prosecution and environmental legal consultancy.",
  },
];

export default function ProfessionalBackground() {
  return (
    <section className="background-summary page-shell" aria-labelledby="summary-heading">
      <h2 id="summary-heading" className="summary-heading" data-reveal>Professional<br />background</h2>
      {background.map((item, i) => (
        <div className="summary-item" key={item.number} data-reveal style={stagger(i + 1, 100)}>
          <span className="number">{item.number}</span>
          <div><h3>{item.title}</h3><p>{item.description}</p></div>
        </div>
      ))}
    </section>
  );
}
