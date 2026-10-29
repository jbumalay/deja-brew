import { useEffect, useState } from "react";
import { navItems } from "../data/nav";

export function Wordmark({ light = false }: { light?: boolean }) {
  return (
    <a
      className={`wordmark ${light ? "wordmark--light" : ""}`}
      href="#top"
      aria-label="Deja Brew, back to top"
    >
      deja brew<span>.</span>
    </a>
  );
}

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    const onKey = (event: KeyboardEvent) =>
      event.key === "Escape" && setOpen(false);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("keydown", onKey);
    };
  }, []);

  useEffect(() => {
    document.body.classList.toggle("menu-open", open);
    return () => document.body.classList.remove("menu-open");
  }, [open]);

  return (
    <header className={`site-header ${scrolled ? "site-header--scrolled" : ""}`}>
      <nav className="nav shell" aria-label="Main navigation">
        <Wordmark />
        <div className="nav__links">
          {navItems.map(([label, id]) => (
            <a key={id} href={`#${id}`}>
              {label}
            </a>
          ))}
        </div>
        <a className="button button--small nav__cta" href="#visit">
          Find Us <span aria-hidden="true">→</span>
        </a>
        <button
          className="menu-toggle"
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen(!open)}
        >
          <span />
          <span />
        </button>
      </nav>
      <div
        className={`mobile-menu ${open ? "mobile-menu--open" : ""}`}
        id="mobile-menu"
      >
        <div className="mobile-menu__inner">
          <p className="eyebrow">Choose your moment</p>
          {navItems.map(([label, id], index) => (
            <a key={id} href={`#${id}`} onClick={() => setOpen(false)}>
              <span>0{index + 1}</span>
              {label}
            </a>
          ))}
          <a className="button" href="#visit" onClick={() => setOpen(false)}>
            Find Us <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </header>
  );
}
