import Link from "next/link";

export default function NotFound() {
  return (
    <main className="not-found">
      {/* Background Architectural Layer */}
      <div className="not-found__bg" aria-hidden="true" />
      <div className="not-found__overlay" aria-hidden="true" />

      {/* Top Meta Bar */}
      <div className="not-found__meta">
        <span>AP — ARYAN PATEL</span>
        <span>ERROR / 404</span>
      </div>

      {/* Center Hero Content */}
      <section className="not-found__content">
        <p className="not-found__eyebrow">
          LOST IN THE SYSTEM
        </p>

        <h1>
          4<span>0</span>4
        </h1>

        <h2>THIS SPACE DOESN&apos;T EXIST.</h2>

        <p className="not-found__description">
          The page you are looking for may have moved,
          disappeared, or never existed in this dimension.
        </p>

        <Link href="/" className="not-found__button">
          <span>RETURN TO HOME</span>
          <span aria-hidden="true">↗</span>
        </Link>
      </section>

      {/* Bottom Footer */}
      <footer className="not-found__footer">
        <span>EXPLORING WHAT&apos;S POSSIBLE / 2026</span>
        <span>END OF TRANSMISSION</span>
      </footer>

      <style>{`
        .not-found {
          position: relative;
          isolation: isolate;
          display: flex;
          min-height: 100svh;
          flex-direction: column;
          justify-content: space-between;
          overflow: hidden;
          padding: clamp(24px, 4vw, 56px);
          background-color: #0e0c0a;
          color: #f5ede0;
          font-family: 'DM Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        }

        .not-found__bg {
          position: absolute;
          inset: 0;
          z-index: -2;
          background-image: url('/not-found-bg-wide.jpg');
          background-size: cover;
          background-position: center right;
          background-repeat: no-repeat;
        }

        .not-found__overlay {
          position: absolute;
          inset: 0;
          z-index: -1;
          pointer-events-none;
          background:
            linear-gradient(
              to right,
              rgba(14, 12, 10, 0.92) 0%,
              rgba(14, 12, 10, 0.72) 38%,
              rgba(14, 12, 10, 0.25) 68%,
              transparent 90%
            ),
            linear-gradient(
              to top,
              rgba(14, 12, 10, 0.5) 0%,
              transparent 25%,
              transparent 75%,
              rgba(14, 12, 10, 0.55) 100%
            );
        }

        .not-found__meta,
        .not-found__footer {
          z-index: 2;
          display: flex;
          justify-content: space-between;
          gap: 16px;
          font-size: 10px;
          letter-spacing: 0.22em;
          color: #a89f92;
          text-transform: uppercase;
        }

        .not-found__content {
          z-index: 2;
          width: min(100%, 720px);
          margin-block: 60px;
        }

        .not-found__eyebrow {
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.26em;
          color: #c4a984;
          text-transform: uppercase;
        }

        .not-found h1 {
          margin: 12px 0 16px;
          font-family: 'Cormorant Garamond', 'Playfair Display', Georgia, serif;
          font-size: clamp(100px, 20vw, 220px);
          font-weight: 300;
          line-height: 0.85;
          letter-spacing: -0.04em;
          color: #f7f2ea;
          user-select: none;
        }

        .not-found h1 span {
          color: #d4b28a;
          font-weight: 300;
        }

        .not-found h2 {
          max-width: 580px;
          font-size: clamp(22px, 3.5vw, 42px);
          font-weight: 600;
          letter-spacing: -0.02em;
          line-height: 1.12;
          color: #f7f2ea;
        }

        .not-found__description {
          max-width: 440px;
          margin-top: 20px;
          color: #b5aba0;
          font-size: 14.5px;
          line-height: 1.75;
          font-weight: 400;
        }

        .not-found__button {
          display: inline-flex;
          align-items: center;
          gap: 28px;
          margin-top: 32px;
          padding: 14px 26px;
          border: 1px solid rgba(212, 178, 138, 0.5);
          border-radius: 9999px;
          background: rgba(18, 15, 12, 0.65);
          backdrop-filter: blur(10px);
          color: #f5ede0;
          font-size: 10.5px;
          font-weight: 600;
          letter-spacing: 0.22em;
          text-decoration: none;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.4);
          transition:
            background 250ms ease,
            border-color 250ms ease,
            color 250ms ease,
            transform 250ms ease;
        }

        .not-found__button:hover {
          background: rgba(255, 255, 255, 0.15);
          border-color: #f7f2ea;
          color: #ffffff;
          transform: translateY(-2px);
        }

        .not-found__button:focus-visible {
          outline: 2px solid #d4b28a;
          outline-offset: 4px;
        }

        @media (max-width: 600px) {
          .not-found__bg {
            background-image: url('/not-found-bg.jpg');
            background-position: center 30%;
          }

          .not-found__content {
            margin-block: 40px;
          }

          .not-found__meta,
          .not-found__footer {
            font-size: 8.5px;
            letter-spacing: 0.16em;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .not-found__button {
            transition: none;
          }
        }
      `}</style>
    </main>
  );
}
