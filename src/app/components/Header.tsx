"use client";

import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <header className="header">
      <Link href="/" className="brand">
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
      </Link>

      <button
        className="menu-toggle"
        onClick={() => setNavOpen(!navOpen)}
        aria-label="Toggle navigation"
      >
        {navOpen ? "CLOSE" : "MENU"}
      </button>

      <nav className={`nav ${navOpen ? "nav-open" : ""}`}>
        <Link href="/work" onClick={() => setNavOpen(false)}>
          Work
        </Link>
        <span className="nav-line" aria-hidden="true" />
        <Link href="/about" onClick={() => setNavOpen(false)}>
          About
        </Link>
        <span className="nav-line" aria-hidden="true" />
        <Link href="/photography" onClick={() => setNavOpen(false)}>
          Photography
        </Link>
        <span className="nav-line" aria-hidden="true" />
        <Link href="/gaming" onClick={() => setNavOpen(false)}>
          Gaming
        </Link>
        <span className="nav-line" aria-hidden="true" />
        <Link href="/contact" onClick={() => setNavOpen(false)}>
          Contact
        </Link>
      </nav>

      <div className="header-note">
        <span className="tiny-diamond">◆</span>
        <span>EXPLORING WHAT&apos;S POSSIBLE / 2026</span>
        <span className="note-line" aria-hidden="true" />
      </div>
    </header>
  );
}
