import ScrollTrack from "./ScrollTrack";

// Course titles, issuers, and dates are CV-listed training records, not employment or membership.
const training = [
  { title: "International humanitarian law & the law of armed conflict", issuer: "UNITAR correspondence programme in peacekeeping operations", date: "14 May 2007", dateTime: "2007-05-14" },
  { title: "Peacekeeping & international conflict resolution", issuer: "UNITAR correspondence programme in peacekeeping operations", date: "10 May 2007", dateTime: "2007-05-10" },
  { title: "Global terrorism", issuer: "UNITAR correspondence programme in peacekeeping operations", date: "21 May 2007", dateTime: "2007-05-21" },
  { title: "Judiciary capacity building against terrorism", issuer: "IGAD Capacity Building Program Against Terrorism", date: "15 May 2007", dateTime: "2007-05-15" },
  { title: "Anti-corruption & fraud investigation and prosecution", issuer: "Civil Service Reform Program", date: "18 August 2000", dateTime: "2000-08-18" },
  { title: "Drug abuse & illicit trafficking", issuer: "Drug Administration & Control Authority of Ethiopia", date: "4 July 2003", dateTime: "2003-07-04" },
  { title: "Introduction to the UN system", issuer: "Peace Operations Training Institute", date: "29 June 2009", dateTime: "2009-06-29" },
  { title: "Training for trainers: police, prosecutors & judges", issuer: "Liverpool John Moores University", date: "18 August 2000", dateTime: "2000-08-18" },
];

export default function Credentials() {
  return (
    <section id="training" className="editorial-section editorial-section--wide page-shell" aria-labelledby="training-heading">
      <div className="section-head" data-reveal>
        <div>
          <span className="eyebrow">03 / Training</span>
          <h2 id="training-heading" className="section-heading">Selected professional training.</h2>
        </div>
        <p className="section-caption">Courses and certificates listed in Taye&apos;s professional CV.</p>
      </div>
      <ScrollTrack label="training courses">
        {training.map((item) => (
          <li className="training-item" key={item.title} data-reveal>
            <h3>{item.title}</h3>
            <div className="training-meta">
              <p>{item.issuer}</p>
              <time dateTime={item.dateTime}>{item.date}</time>
            </div>
          </li>
        ))}
        <li className="training-item" data-reveal>
          <h3>Certificate for teaching constitutional law</h3>
          <div className="training-meta"><p>Sidama Zone Justice Department, SNNPR</p></div>
        </li>
      </ScrollTrack>
    </section>
  );
}
