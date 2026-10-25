import Link from "next/link";

export default function Footer() {
  return (
    <footer className="site-footer">
      <Link href="/" className="brand footer-brand">
        <span className="brand-mark">
          <svg
            viewBox="0 0 24 24"
            width="14"
            height="14"
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

      <span>© {new Date().getFullYear()} ARYAN PATEL. ALL RIGHTS RESERVED.</span>

      <Link href="/about">ABOUT ARYAN →</Link>
    </footer>
  );
}
