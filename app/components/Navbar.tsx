import ArrowIcon from "./ArrowIcon";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  return (
    <div className="site-header-wrap">
      <header className="site-header page-shell">
        <a className="wordmark" href="#home">
          <span className="wordmark-mark" aria-hidden="true">T</span>
          Taye Bezabih Fino
        </a>
        <nav className="site-nav" aria-label="Main navigation">
          <a href="#profile">Profile</a>
          <a href="#background">Background</a>
          <a href="#contact">Contact</a>
        </nav>
        <div className="header-actions">
          <ThemeToggle />
          <a className="button button-sm" href="#contact">Get in touch <ArrowIcon /></a>
        </div>
      </header>
    </div>
  );
}
