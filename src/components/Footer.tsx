import { Wordmark } from "./Navbar";
import { navItems } from "../data/nav";

export function Footer() {
  return (
    <footer className="footer">
      <div className="shell">
        <div className="footer__top">
          <div>
            <Wordmark light />
            <p>
              Some moments deserve<br />
              a second pour.
            </p>
          </div>
          <div className="footer__links">
            <div>
              <span>EXPLORE</span>
              {navItems.map(([label, id]) => (
                <a key={id} href={`#${id}`}>
                  {label}
                </a>
              ))}
            </div>
            <div>
              <span>CONNECT</span>
              <span className="footer__placeholder">
                Instagram · Placeholder
              </span>
              <a href="mailto:hello@example.com">
                Email · Placeholder
              </a>
              <a href="#visit">Location</a>
            </div>
          </div>
        </div>
        <div className="footer__bottom">
          <span>
            © {new Date().getFullYear()} DEJA BREW — FICTIONAL CONCEPT
          </span>
          <span>DB / 001</span>
          <a href="#top">BACK TO TOP ↑</a>
        </div>
      </div>
    </footer>
  );
}
