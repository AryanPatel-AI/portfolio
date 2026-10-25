import Link from "next/link";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#f8eddb] text-[#211e19]">
      {/* Header */}
      <header className="w-full flex items-center justify-between px-6 sm:px-10 lg:px-14 py-6 sm:py-8 border-b border-[rgba(91,68,43,0.15)]">
        <Link href="/" className="flex items-center gap-3.5">
          <span className="w-5 h-5 flex items-center justify-center border-2 border-[#211e19] rotate-45">
            <span className="w-1.5 h-1.5 bg-[#211e19] rounded-full" />
          </span>
          <span className="font-['Playfair_Display'] text-sm tracking-[0.24em] font-semibold uppercase">
            Aryan Patel
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-4 text-[10.5px] font-semibold tracking-[0.2em] uppercase text-[#77573a]">
          <Link href="/work" className="hover:text-[#211e19] transition-colors">
            Work
          </Link>
          <span className="text-[#a89580]">—</span>
          <Link href="/about" className="hover:text-[#211e19] transition-colors">
            About
          </Link>
          <span className="text-[#a89580]">—</span>
          <Link href="/photography" className="hover:text-[#211e19] transition-colors">
            Photography
          </Link>
          <span className="text-[#a89580]">—</span>
          <Link href="/contact" className="text-[#211e19] font-bold">
            Contact
          </Link>
        </nav>

        <div className="flex items-center gap-2 text-[9px] tracking-[0.2em] text-[#77573a] uppercase font-medium">
          <span className="w-1.5 h-1.5 rounded-full bg-[#77573a]" />
          <span>Exploring What&apos;s Possible / 2026</span>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-6 sm:px-10 py-16 sm:py-24">
        <div className="max-w-2xl">
          <span className="text-[11px] font-semibold tracking-[0.24em] text-[#b49368] uppercase mb-3 block">
            INITIATE CONVERSATION
          </span>
          <h1 className="font-['Playfair_Display'] text-4xl sm:text-5xl md:text-6xl font-normal leading-tight tracking-tight mb-6">
            Let&apos;s build something <span className="italic text-[#a68a64]">extraordinary</span> together.
          </h1>
          <p className="text-base sm:text-lg text-[#6d6559] leading-relaxed mb-10">
            Whether you have a machine learning challenge, a creative web development project, an editorial photography inquiry, or just want to discuss ideas, feel free to reach out.
          </p>
        </div>

        {/* Contact Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          {/* Direct Email Card */}
          <div className="border border-[rgba(91,68,43,0.2)] bg-[#eee0cb] p-8 sm:p-10 flex flex-col justify-between min-h-[220px]">
            <div>
              <span className="text-[10px] tracking-[0.2em] uppercase font-semibold text-[#806648] block mb-2">
                DIRECT INQUIRY
              </span>
              <h2 className="font-['Playfair_Display'] text-2xl font-normal mb-3">Email</h2>
              <p className="text-sm text-[#665747] leading-relaxed">
                Response within 24–48 hours for collaborative projects and client commissions.
              </p>
            </div>
            <a
              href="mailto:aryanpatel66871@gmail.com"
              className="mt-6 inline-flex items-center gap-3 text-xs font-semibold tracking-[0.18em] uppercase text-[#211e19] hover:text-[#b49368] transition-colors"
            >
              <span>aryanpatel66871@gmail.com</span>
              <span>→</span>
            </a>
          </div>

          {/* Social / Profiles Card */}
          <div className="border border-[rgba(91,68,43,0.2)] bg-[#dfc7a6] p-8 sm:p-10 flex flex-col justify-between min-h-[220px]">
            <div>
              <span className="text-[10px] tracking-[0.2em] uppercase font-semibold text-[#806648] block mb-2">
                NETWORKS & SOCIALS
              </span>
              <h2 className="font-['Playfair_Display'] text-2xl font-normal mb-3">Connect Online</h2>
              <p className="text-sm text-[#665747] leading-relaxed">
                Follow recent code experiments, open-source work, and photography archives.
              </p>
            </div>
            <div className="mt-6 flex flex-wrap gap-4 text-xs font-semibold tracking-[0.16em] uppercase text-[#211e19]">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#77573a] transition-colors"
              >
                GitHub ↗
              </a>
              <span className="text-[#806648]">·</span>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#77573a] transition-colors"
              >
                LinkedIn ↗
              </a>
              <span className="text-[#806648]">·</span>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#77573a] transition-colors"
              >
                Instagram ↗
              </a>
            </div>
          </div>
        </div>

        {/* Back Link */}
        <div className="mt-14">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] uppercase text-[#77573a] hover:text-[#211e19] transition-colors"
          >
            <span>←</span>
            <span>Return to Overview</span>
          </Link>
        </div>
      </main>
    </div>
  );
}
