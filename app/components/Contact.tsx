import ContactForm from "./ContactForm";
import { contact } from "../contact-config";
import { stagger } from "./stagger";

export default function Contact() {
  return (
    <section id="contact" className="contact-section page-shell" aria-labelledby="contact-heading">
      <div data-reveal>
        <span className="eyebrow">06 / Contact</span>
        <h2 id="contact-heading" className="contact-heading">Let’s talk.</h2>
        <p className="contact-copy">Tell Taye a little about your enquiry.</p>
        <dl className="contact-details">
          <div><dt>Email</dt><dd><a href={`mailto:${contact.email}`}>{contact.email}</a></dd></div>
          <div><dt>Telephone</dt><dd><a href={contact.phoneHref}>{contact.phone}</a></dd></div>
          <div><dt>Based in</dt><dd>{contact.location}</dd></div>
        </dl>
      </div>
      <div data-reveal style={stagger(1, 120)}>
        <ContactForm endpoint={contact.formEndpoint} enabled={contact.formEnabled} email={contact.email} />
      </div>
    </section>
  );
}
