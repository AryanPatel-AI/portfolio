"use client";

import { useState } from "react";

export default function Header() {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <header className="header">
      <a href="#" className="brand">
        <span className="brand-mark">
          <svg
            viewBox="0 0 24 24"
            width="18"
            height="18"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect x="5" y="5" width="14" height="14" strokeWidth="2.5" />
            <circle cx="12" cy="12" r="2" fill="currentColor" />
          </svg>
        </span>
        <span>ARYAN PATEL</span>
      </a>

      <button
        className="menu-toggle"
        onClick={() => setNavOpen(!navOpen)}
        aria-label="Toggle navigation"
      >
        {navOpen ? "CLOSE" : "MENU"}
      </button>

      <nav className={`nav ${navOpen ? "nav-open" : ""}`}>
        <a href="#work" onClick={() => setNavOpen(false)}>
          Work
        </a>
        <span className="nav-line" aria-hidden="true" />
        <a href="#about" onClick={() => setNavOpen(false)}>
          About
        </a>
        <span className="nav-line" aria-hidden="true" />
        <a href="#work" onClick={() => setNavOpen(false)}>
          Photography
        </a>
        <span className="nav-line" aria-hidden="true" />
        <a href="#contact" onClick={() => setNavOpen(false)}>
          Contact
        </a>
      </nav>

      <div className="header-note">
        <span className="tiny-diamond">◆</span>
        <span>EXPLORING WHAT&apos;S POSSIBLE / 2026</span>
        <span className="note-line" aria-hidden="true" />
      </div>
    </header>
  );
}
