"use client";

export default function Hero() {
  return (
    <section className="hero">
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

        <a href="#about" className="scroll-link">
          <span className="scroll-circle">↓</span>
          <span>SCROLL TO EXPLORE</span>
          <span className="scroll-line" aria-hidden="true" />
        </a>
      </div>

      {/* Right Side Vertical Indicator */}
      <div className="side-indicator" aria-hidden="true">
        <span className="side-diamond active">◆</span>
        <span className="side-diamond">◇</span>
        <span className="side-diamond">◆</span>
        <span className="side-diamond">●</span>
        <span className="side-track" />
      </div>

      {/* Hero Footer Tag (Bottom Right) */}
      <div className="hero-footer">
        <span aria-hidden="true" />
        <span>IDEAS / CODE / CAPTURE</span>
      </div>
    </section>
  );
}
