"use client";

import Link from "next/link";
import DiamondNav from "./DiamondNav";

export default function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero-image" />
      <div className="hero-wash" />

      {/* Hero Copy (Left side) */}
      <div className="hero-copy">
        <div className="eyebrow">
          <span>ARYAN PATEL</span>
          <span className="eyebrow-line" aria-hidden="true" />
        </div>

        <h1>
          BUILDING
          <br />
          INTELLIGENCE.
          <br />
          <span className="italic gold">CAPTURING</span>
          <br />
          <span className="italic gold">PERSPECTIVES.</span>
        </h1>

        <p className="intro">
          BTech AI Student
          <span>·</span>
          Creative Developer
          <span>·</span>
          Photographer
          <span>·</span>
          Gamer
        </p>

        <Link href="/about" className="scroll-link">
          <span className="scroll-circle">→</span>
          <span>EXPLORE ABOUT ME</span>
          <span className="scroll-line" aria-hidden="true" />
        </Link>
      </div>

      {/* Right Side Vertical Diamond Navigation Indicator */}
      <DiamondNav />

      {/* Hero Footer Tag (Bottom Right) */}
      <div className="hero-footer">
        <span aria-hidden="true" />
        <span>IDEAS / CODE / CAPTURE</span>
      </div>
    </section>
  );
}
