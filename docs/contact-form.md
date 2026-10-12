# Contact form

The contact section sends submissions directly to Formspree. It works independently of the website's hosting provider.

## Configuration

1. The form is `Taye profile enquiries`, with endpoint `https://formspree.io/f/myekjpjy`.
2. `tayebfino@me.com` is verified and selected as the form's notification recipient. The email action is enabled.
3. `formEnabled` is `true` in `app/contact-config.ts`. Set it to `false` if submissions need to be paused on the website.
4. The public endpoint is also stored in `app/contact-config.ts`. No hosting environment variables are needed. Rebuild and deploy source changes as usual.

The endpoint is public. No Formspree account API key or mailbox password belongs in the app.

## Behaviour

- Name, email and message are required. Company is optional.
- The `email` field is the visitor's reply-to address.
- `_gotcha` is Formspree's hidden spam-trap field.
- The send button is disabled during submission.
- Successful submission resets the form. A failure preserves the message and offers a direct email link.
- While the form is disabled, a direct email link remains available.

Do not send a test message to the recipient until the site owner authorizes it. A successful response means Formspree accepted the submission; inbox delivery still needs confirmation by the recipient.
