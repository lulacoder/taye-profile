// Dates and responsibilities follow the supplied CV, as approved in the implementation brief.
const career = [
  {
    period: "From January 2012",
    role: "Attorney & legal consultant",
    organization: "Private practice, Addis Ababa",
    paragraphs: [
      "Legal consultancy and private legal practice in Addis Ababa. According to his professional CV, Taye is an advocate before all Federal Courts.",
    ],
  },
  {
    period: "2009 to 2012",
    role: "Environmental legal consultant",
    organization: "Community Based Cultural and Natural Resource Development Association, Gamo Gofa / Zala",
    paragraphs: [
      "Provided legal support for environmental and natural-resource projects. Helped assess, implement, and evaluate projects in line with federal and regional environmental laws and policies.",
      "Organized community workshops on environmental legal issues and the lawful use of natural resources, including forest conservation and the preservation of indigenous tree and crop species.",
    ],
  },
  {
    period: "May 2002 to 2009",
    role: "Senior Federal Public Prosecutor",
    organization: "Ethiopian Federal Ministry of Justice, Addis Ababa",
    paragraphs: [
      "Reviewed criminal investigations, issued directions to police, decided whether to institute proceedings, and represented the federal government before the Federal High Court and Federal Supreme Court.",
      "His professional CV records prosecutorial decision-making in relation to more than 10,000 police-investigated criminal cases during his federal service.",
    ],
  },
  {
    period: "March 1998 to May 2002",
    role: "Regional public prosecutor",
    organization: "SNNPR Justice Bureau, Hawassa",
    paragraphs: [
      "Oversaw criminal investigations, gave instructions to police, made prosecutorial decisions, and prosecuted instituted proceedings before the regional Supreme Court on behalf of the regional government.",
      "His work also included NGO registration, evaluation, and supervision. He contributed to training police officers, prosecutors, and judges in general law, human rights, investigation techniques, constitutional law, and anti-corruption.",
    ],
  },
  {
    period: "January to March 1998",
    role: "Law-journal editor",
    organization: "SNNPR Regional State Supreme Court, Hawassa",
    paragraphs: [
      "Prepared and edited finalized Supreme Court decisions for publication in a law journal as legal teaching and reference material.",
    ],
  },
  {
    period: "1991 to 1994",
    role: "Teacher",
    organization: "Ethiopian Ministry of Education, Arba Minch",
    paragraphs: [
      "Taught at primary-school level, including students with visual impairment, before pursuing legal education and entering the justice system.",
    ],
  },
];

export default function CareerTimeline() {
  return (
    <section id="background" className="editorial-section page-shell" aria-labelledby="background-heading">
      <div data-reveal>
        <span className="eyebrow">02 / Background</span>
        <h2 id="background-heading" className="section-heading">A professional journey.</h2>
      </div>
      <ol className="timeline">
        {career.map((item) => (
          <li className="timeline-item" key={item.role} data-reveal>
            <span className="timeline-date">{item.period}</span>
            <div>
              <h3>{item.role}</h3>
              <p className="timeline-organization">{item.organization}</p>
              {item.paragraphs.map((paragraph) => (
                <p className="timeline-description" key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
