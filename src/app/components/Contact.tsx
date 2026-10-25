import Link from "next/link";

export default function Contact() {
  return (
    <section id="contact" className="contact-section">
      <span className="section-kicker">INITIATE CONVERSATION</span>
      <h2>
        Let&apos;s build something <span className="italic">extraordinary</span> together.
      </h2>
      <div className="flex flex-wrap items-center gap-4 mt-6">
        <Link href="/contact" className="contact-button">
          <span>CONTACT DETAILS</span>
          <span aria-hidden="true">→</span>
        </Link>
        <a
          href="mailto:aryanpatel66871@gmail.com"
          className="contact-button"
        >
          <span>EMAIL DIRECTLY</span>
          <span aria-hidden="true">↗</span>
        </a>
      </div>
    </section>
  );
}
