import ArrowIcon from "./ArrowIcon";

export default function About() {
  return (
    <section id="profile" className="editorial-section page-shell" aria-labelledby="profile-heading">
      <div>
        <span className="eyebrow">01 / Profile</span>
        <h2 id="profile-heading" className="section-heading">From public service to private practice.</h2>
      </div>
      <div className="profile-copy">
        <p className="lead">Taye Bezabih Fino is an Ethiopian attorney and legal consultant based in Addis Ababa, with more than 28 years of experience in the legal sector.</p>
        <p>His career spans regional and federal public prosecution, courtroom advocacy, legal advisory work, institutional training, environmental and natural-resource legal support, and legal education.</p>
        <p>Before entering private practice, he served as a Regional Public Prosecutor with the SNNPR Justice Bureau and later as a Senior Federal Public Prosecutor at the Ethiopian Federal Ministry of Justice. His work included overseeing criminal investigations, making prosecutorial decisions, representing government, and prosecuting proceedings before the Federal High Court and Federal Supreme Court.</p>
        <p>Since January 2012, he has practiced in Addis Ababa as a legal consultant and attorney at law. His professional training includes international humanitarian law, conflict resolution, anti-corruption and fraud investigation, constitutional law, and judicial capacity building.</p>
        <p>His earlier work in primary education, legal publishing, and community workshops also involved communicating legal and educational material to students, justice professionals, and people from different social backgrounds.</p>
        <a href="#background" className="text-link">Explore his background <ArrowIcon /></a>
      </div>
    </section>
  );
}
