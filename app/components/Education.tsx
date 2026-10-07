const education = [
  { qualification: "Bachelor of Law", detail: "LL.B.", institution: "Ethiopian Civil Service College", location: "Addis Ababa, Ethiopia" },
  { qualification: "Certificate in primary teaching", detail: "Teaching qualification", institution: "Arba Minch Teachers Training Institute", location: "Arba Minch, Ethiopia" },
  { qualification: "Certificate in teaching students with visual impairment", detail: "Teaching qualification", institution: "Arba Minch Teachers Training Institute", location: "Arba Minch, Ethiopia" },
];

export default function Education() {
  return (
    <section id="education" className="editorial-section page-shell" aria-labelledby="education-heading">
      <div>
        <span className="eyebrow">04 / Education</span>
        <h2 id="education-heading" className="section-heading">Law &amp; education.</h2>
      </div>
      <dl className="education-list">
        {education.map((item) => (
          <div key={item.qualification}>
            <dt>{item.qualification}</dt>
            <dd>
              <span className="qualification-detail">{item.detail}</span>
              <span className="education-institution">{item.institution}</span>
              <span>{item.location}</span>
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
