import ArrowIcon from "./ArrowIcon";

export default function Footer() {
  return (
    <footer className="site-footer page-shell">
      <p>© {new Date().getFullYear()} Taye Bezabih Fino. All rights reserved.</p>
      <div className="footer-links">
        <a
          className="footer-social"
          href="https://www.facebook.com/share/19FEau54Su/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Taye on Facebook, opens in a new tab"
          title="Facebook"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047v-2.66c0-3.025 1.792-4.697 4.533-4.697 1.312 0 2.686.236 2.686.236v2.971h-1.513c-1.49 0-1.956.931-1.956 1.887v2.263h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073Z" />
          </svg>
        </a>
        <a
          className="footer-social"
          href="https://www.linkedin.com/in/taye-bezabih-fino-596a6770/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Taye on LinkedIn, opens in a new tab"
          title="LinkedIn"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.049c.476-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286ZM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124ZM7.119 20.452H3.555V9h3.564v11.452ZM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003Z" />
          </svg>
        </a>
        <a href="#home">Back to top <ArrowIcon up /></a>
      </div>
    </footer>
  );
}
