import Link from "next/link";

export default function NotFound() {
  return (
    <div className="relative w-full h-screen min-h-[640px] overflow-hidden bg-[#0e0c0a] text-[#f5ede0] flex flex-col justify-between selection:bg-[#9a7d5c]/30 selection:text-white">
      {/* ================= HIGH-RESOLUTION ARCHITECTURAL BACKGROUND ================= */}
      {/* Desktop / Landscape Layout */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-no-repeat hidden md:block pointer-events-none"
        style={{
          backgroundImage: "url('/not-found-bg-wide.jpg')",
          backgroundPosition: "center right",
        }}
      />
      {/* Mobile / Portrait Layout */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-no-repeat md:hidden pointer-events-none"
        style={{
          backgroundImage: "url('/not-found-bg.jpg')",
          backgroundPosition: "center center",
        }}
      />

      {/* Atmospheric directional shadow & depth overlays for optimal text legibility */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(to right, rgba(14, 12, 10, 0.9) 0%, rgba(14, 12, 10, 0.65) 36%, rgba(14, 12, 10, 0.18) 64%, transparent 86%)",
        }}
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(to top, rgba(14, 12, 10, 0.45) 0%, transparent 22%, transparent 78%, rgba(14, 12, 10, 0.5) 100%)",
        }}
      />

      {/* Elegant Architectural Inner Framing Border matching mockups */}
      <div className="pointer-events-none absolute inset-2 sm:inset-3 md:inset-4 border border-[#3e3428]/35 rounded-[3px] z-20" />

      {/* ================= 1. TOP NAVIGATION BAR ================= */}
      <header className="relative z-30 w-full flex items-center justify-between px-6 sm:px-10 lg:px-14 pt-6 sm:pt-8 pb-4">
        {/* Top Left: Concentric Diamond Monogram Logo + ARYAN PATEL */}
        <Link href="/" className="flex items-center gap-2.5 sm:gap-3 group cursor-pointer">
          <div className="relative w-4 h-4 sm:w-4.5 sm:h-4.5 flex items-center justify-center">
            <svg
              viewBox="0 0 24 24"
              className="w-4 h-4 text-[#e5dcd1] fill-none stroke-current transition-transform duration-500 group-hover:rotate-45"
              strokeWidth="1.5"
            >
              <path d="M12 2.5L21.5 12L12 21.5L2.5 12Z" strokeWidth="1.5" />
              <path d="M12 7.5L16.5 12L12 16.5L7.5 12Z" strokeWidth="1.2" opacity="0.65" />
            </svg>
          </div>
          <span className="font-['Cinzel','Playfair_Display',serif] text-[11px] sm:text-[12px] font-medium tracking-[0.26em] text-[#e8ded2] uppercase transition-colors group-hover:text-white">
            Aryan Patel
          </span>
        </Link>

        {/* Top Center: Navigation Links */}
        <nav className="hidden md:flex items-center gap-3 lg:gap-4 text-[9.5px] lg:text-[10px] font-medium tracking-[0.24em] text-[#8e8476] uppercase">
          <Link href="/work" className="hover:text-[#f5ede0] transition-colors duration-200">
            Work
          </Link>
          <span className="text-[#5a4f43] select-none text-[8px]">-</span>
          <Link href="/about" className="hover:text-[#f5ede0] transition-colors duration-200">
            About
          </Link>
          <span className="text-[#5a4f43] select-none text-[8px]">-</span>
          <Link href="/photography" className="hover:text-[#f5ede0] transition-colors duration-200">
            Photography
          </Link>
          <span className="text-[#5a4f43] select-none text-[8px]">-</span>
          <Link href="/#contact" className="hover:text-[#f5ede0] transition-colors duration-200">
            Contact
          </Link>
        </nav>

        {/* Top Right: Status */}
        <div className="text-[8.5px] sm:text-[9.5px] tracking-[0.24em] text-[#83786a] uppercase font-medium">
          Exploring What&apos;s Possible / 2026
        </div>
      </header>

      {/* ================= 2. 404 HERO CONTENT ================= */}
      <main className="relative z-30 w-full max-w-3xl px-6 sm:px-10 lg:px-16 my-auto py-8 sm:py-12">
        {/* Huge 404 Serif */}
        <div className="font-['Cormorant_Garamond',Georgia,serif] text-[115px] sm:text-[145px] md:text-[165px] lg:text-[185px] leading-[0.85] text-[#f7f2ea] font-light tracking-tight select-none">
          404
        </div>

        {/* Title: Page Not Found */}
        <h1 className="font-['Cormorant_Garamond','Playfair_Display',Georgia,serif] text-3xl sm:text-4xl md:text-[44px] lg:text-[48px] font-normal text-[#f7f2ea] tracking-[-0.01em] mt-3 sm:mt-4 mb-3 sm:mb-4">
          Page Not Found
        </h1>

        {/* Subtitle on two lines */}
        <p className="text-[13px] sm:text-[14px] md:text-[14.5px] text-[#9a8f82] font-normal leading-[1.65] max-w-sm mb-7 sm:mb-8 font-sans">
          The page you&apos;re looking for doesn&apos;t exist
          <br />
          or has been moved.
        </p>

        {/* Pill Button: BACK TO HOME (→) */}
        <div>
          <Link
            href="/"
            className="inline-flex items-center gap-3.5 pl-5 sm:pl-6 pr-2 sm:pr-2.5 py-2 sm:py-2.5 rounded-full border border-[#716353]/90 hover:border-[#f7f2ea] bg-[#120f0c]/60 hover:bg-[#1a1612]/80 backdrop-blur-sm transition-all duration-300 group shadow-lg shadow-black/40"
          >
            <span className="text-[9.5px] sm:text-[10px] font-semibold tracking-[0.22em] uppercase text-[#cfc4b6] group-hover:text-white transition-colors">
              Back to Home
            </span>
            <span className="w-5 h-5 sm:w-6 sm:h-6 rounded-full border border-[#716353]/90 group-hover:border-white flex items-center justify-center text-[#cfc4b6] group-hover:text-white transition-all transform group-hover:translate-x-0.5">
              <svg
                className="w-2.5 h-2.5 sm:w-3 sm:h-3"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14" />
                <path d="M12 5l7 7-7 7" />
              </svg>
            </span>
          </Link>
        </div>
      </main>

      {/* ================= 3. BOTTOM SPACING / PADDING ================= */}
      <div className="relative z-30 w-full px-6 sm:px-10 lg:px-14 pb-4 sm:pb-6" />
    </div>
  );
}
