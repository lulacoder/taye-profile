"use client";

import { useState, type FormEvent } from "react";
import ArrowIcon from "./ArrowIcon";

type SubmissionState =
  | { kind: "idle" }
  | { kind: "sending" }
  | { kind: "success" }
  | { kind: "error" };

export default function ContactForm({ endpoint, enabled, email }: { endpoint: string; enabled: boolean; email: string }) {
  const [state, setState] = useState<SubmissionState>({ kind: "idle" });
  const sending = state.kind === "sending";

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!enabled || sending) return;

    const form = event.currentTarget;
    const data = new FormData(form);
    setState({ kind: "sending" });

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (!response.ok) {
        setState({ kind: "error" });
        return;
      }
      form.reset();
      setState({ kind: "success" });
    } catch {
      setState({ kind: "error" });
    }
  }

  return (
    <form className="contact-form" action={endpoint} method="POST" onSubmit={handleSubmit} aria-label="Send Taye a message" aria-busy={sending}>
      <input type="hidden" name="subject" value="New enquiry from Taye's website" />
      <div hidden aria-hidden="true">
        <label>Leave this blank<input name="_gotcha" autoComplete="off" /></label>
      </div>
      <div className="contact-form-row">
        <label htmlFor="contact-name">Your name<input id="contact-name" name="name" autoComplete="name" placeholder="Full name" maxLength={100} required /></label>
        <label htmlFor="contact-company">Company <span className="contact-optional">optional</span><input id="contact-company" name="company" autoComplete="organization" placeholder="Company or organisation" maxLength={160} /></label>
      </div>
      <label htmlFor="contact-email">Email address<input id="contact-email" name="email" type="email" autoComplete="email" placeholder="you@example.com" maxLength={254} required /></label>
      <label htmlFor="contact-message">Your message<textarea id="contact-message" name="message" rows={5} placeholder="How can Taye help?" maxLength={5000} required /></label>
      <div className="contact-form-actions">
        <button className="button" type="submit" disabled={sending || !enabled}>{sending ? "Sending…" : "Send message"} <ArrowIcon /></button>
        <span>To Taye Bezabih Fino</span>
      </div>
      <div className="contact-form-status" role="status" aria-live="polite">
        {state.kind === "success" && <p>Thank you. Your message has been submitted to Taye.</p>}
      </div>
      {state.kind === "error" && <p className="contact-form-error" role="alert">Your message could not be sent. Please try again or <a href={`mailto:${email}`}>email Taye directly</a>.</p>}
      {!enabled && <p className="contact-form-note">Please <a href={`mailto:${email}`}>email Taye directly</a> while this form is unavailable.</p>}
    </form>
  );
}
