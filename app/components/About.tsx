import ArrowIcon from "./ArrowIcon";

// Dates follow the supplied CV. Confirm the chronology with Taye before launch.
const career = [
  { period: "From 2012", role: "Attorney & legal consultant", organization: "Private practice, Addis Ababa", description: "Legal consultancy and advocacy before federal courts." },
  { period: "2009 to 2012", role: "Environmental legal consultant", organization: "Community Based Cultural and Natural Resource Development Association", description: "Advised on environmental project compliance and organized community workshops on environmental law and natural-resource use." },
  { period: "2002 to 2009", role: "Senior federal public prosecutor", organization: "Ethiopian Federal Ministry of Justice", description: "Reviewed criminal investigations, directed police investigations, and represented the government in federal court proceedings." },
  { period: "1998 to 2002", role: "Regional public prosecutor", organization: "SNNPR Justice Bureau, Hawassa", description: "Served as a public prosecutor within the regional justice system." },
  { period: "Early 1998", role: "Law-journal editor", organization: "SNNPR Regional State Supreme Court", description: "Prepared final Supreme Court decisions for publication as legal teaching and reference material." },
  { period: "1991 to 1994", role: "Teacher", organization: "Ethiopian Ministry of Education, Arba Minch", description: "Taught primary-school students, including students with visual impairments, before pursuing a career in law." },
];

export default function About() {
  return (
    <>
      <section id="profile" className="editorial-section page-shell" aria-labelledby="profile-heading">
        <div>
          <span className="eyebrow">01 / Profile</span>
          <h2 id="profile-heading" className="section-heading">From public service to private practice.</h2>
        </div>
        <div className="profile-copy">
          <p className="lead">Taye Bezabih Fino is an Ethiopian attorney and legal consultant based in Addis Ababa.</p>
          <p>His professional background includes service as a senior federal public prosecutor at the Ministry of Justice and as a regional public prosecutor at the SNNPR Justice Bureau.</p>
          <p>Before entering private practice, he also worked in legal publishing, legal training, and environmental NGO consultancy. His career began in education, teaching primary-school students in Arba Minch.</p>
          <a href="#background" className="text-link">Explore his background <ArrowIcon /></a>
        </div>
      </section>
      <section id="background" className="editorial-section page-shell" aria-labelledby="background-heading">
        <div>
          <span className="eyebrow">02 / Background</span>
          <h2 id="background-heading" className="section-heading">A professional journey.</h2>
        </div>
        <ol className="timeline">
          {career.map((item) => (
            <li className="timeline-item" key={item.role}>
              <span className="timeline-date">{item.period}</span>
              <div>
                <h3>{item.role}</h3>
                <p className="timeline-organization">{item.organization}</p>
                <p className="timeline-description">{item.description}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>
      <section className="editorial-section page-shell" aria-labelledby="education-heading">
        <div>
          <span className="eyebrow">03 / Education</span>
          <h2 id="education-heading" className="section-heading">Education &amp; training.</h2>
        </div>
        <dl className="education-list">
          <div><dt>Bachelor of Law</dt><dd>Ethiopian Civil Service College, Addis Ababa.</dd></div>
          <div><dt>Professional training</dt><dd>Criminal investigation, corruption and fraud, constitutional law, international humanitarian law, conflict resolution, and environmental legal education.</dd></div>
          <div><dt>A foundation in teaching</dt><dd>Qualifications in primary teaching and teaching students with visual impairments.</dd></div>
        </dl>
      </section>
    </>
  );
}
