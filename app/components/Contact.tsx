import ArrowIcon from "./ArrowIcon";
import { contact } from "../contact-config";
import { stagger } from "./stagger";

export default function Contact() {
  return (
    <section id="contact" className="contact-section page-shell" aria-labelledby="contact-heading">
      <div data-reveal>
        <span className="eyebrow">07 / Contact</span>
        <h2 id="contact-heading" className="contact-heading">Get in touch.</h2>
        <p className="contact-copy">Contact Taye to discuss your legal matter and arrange a consultation.</p>
        <a href={contact.phoneHref} className="button">Call Taye <ArrowIcon /></a>
      </div>
      <dl className="contact-details">
        <div data-reveal style={stagger(1, 120)}><dt>Telephone</dt><dd><a className="phone-link" href={contact.phoneHref}>{contact.phone} <ArrowIcon /></a></dd></div>
        <div data-reveal style={stagger(2, 120)}><dt>Based in</dt><dd>{contact.location}</dd></div>
      </dl>
    </section>
  );
}
