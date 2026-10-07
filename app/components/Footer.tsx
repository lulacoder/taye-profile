import ArrowIcon from "./ArrowIcon";

export default function Footer() {
  return (
    <footer className="site-footer page-shell">
      <p>© {new Date().getFullYear()} Taye Bezabih Fino. All rights reserved.</p>
      <a href="#home">Back to top <ArrowIcon up /></a>
    </footer>
  );
}
