import ArrowIcon from "./ArrowIcon";

export default function Contact() {
  return (
    <section id="contact" className="contact-section page-shell" aria-labelledby="contact-heading">
      <div>
        <span className="eyebrow">04 / Contact</span>
        <h2 id="contact-heading" className="contact-heading">Get in touch.</h2>
        <p className="contact-copy">Contact Taye to discuss your legal matter and arrange a consultation.</p>
        <a href="tel:+251911605546" className="button">Call Taye <ArrowIcon /></a>
      </div>
      <dl className="contact-details">
        <div><dt>Telephone</dt><dd><a className="phone-link" href="tel:+251911605546">+251 911 605 546 <ArrowIcon /></a></dd></div>
        <div><dt>Based in</dt><dd>Addis Ababa, Ethiopia</dd></div>
      </dl>
    </section>
  );
}
