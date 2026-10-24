import Link from "next/link";

export default function ExperimentsPage() {
  const items = [
    { title: "Game Moments", category: "Gaming · Completed", color: "bg-[#2d221c]" },
    { title: "3D Playground", category: "Interactive · In-Progress", color: "bg-[#18232c]" },
    { title: "Pixel Art", category: "Experiments · Concept", color: "bg-[#251f28]" },
    { title: "Web Toy", category: "Creative · Concept", color: "bg-[#1f2622]" },
    { title: "AI Arc", category: "Experiment · Concept", color: "bg-[#28241f]" },
  ];

  return (
    <div className="min-h-screen bg-[#171412] text-[#f8eddb]">
      {/* Header */}
      <header className="w-full flex items-center justify-between px-6 sm:px-10 lg:px-14 py-6 sm:py-8 border-b border-[rgba(255,255,255,0.08)]">
        <Link href="/" className="flex items-center gap-3.5">
          <span className="w-5 h-5 flex items-center justify-center border-2 border-[#f8eddb] rotate-45">
            <span className="w-1.5 h-1.5 bg-[#f8eddb] rounded-full" />
          </span>
          <span className="font-['Playfair_Display'] text-sm tracking-[0.24em] font-semibold uppercase text-white">
            Aryan Patel
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-4 text-[10.5px] font-semibold tracking-[0.2em] uppercase text-[#a89580]">
          <Link href="/work" className="hover:text-white transition-colors">
            Work
          </Link>
          <span className="text-[#5e4f42]">—</span>
          <Link href="/about" className="hover:text-white transition-colors">
            About
          </Link>
          <span className="text-[#5e4f42]">—</span>
          <Link href="/photography" className="hover:text-white transition-colors">
            Photography
          </Link>
          <span className="text-[#5e4f42]">—</span>
          <Link href="/#contact" className="hover:text-white transition-colors">
            Contact
          </Link>
        </nav>

        <div className="flex items-center gap-2 text-[9px] tracking-[0.2em] text-[#a89580] uppercase font-medium">
          <span className="w-1.5 h-1.5 rounded-full bg-[#a89580]" />
          <span>Exploring What&apos;s Possible / 2026</span>
        </div>
      </header>

      {/* Hero Visual Section */}
      <main className="max-w-6xl mx-auto px-6 sm:px-10 py-12 sm:py-16">
        <span className="text-[10px] font-semibold tracking-[0.25em] text-[#b49368] uppercase block mb-3">
          GAMING &amp; EXPERIMENTS
        </span>
        <h1 className="font-['Playfair_Display'] text-4xl sm:text-5xl md:text-6xl font-normal leading-tight text-white mb-4">
          Play. Explore.
          <br />
          <span className="italic text-[#b49368]">Create.</span>
        </h1>
        <p className="text-sm sm:text-base text-[#a89580] max-w-xl font-light font-sans leading-relaxed mb-10">
          A space for gaming, small experiments, and creative coding outside the main track.
        </p>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 mb-10 text-xs font-medium">
          <span className="px-4 py-1.5 bg-[#f8eddb] text-[#171412] rounded-full">All</span>
          <span className="px-4 py-1.5 bg-[#25201c] text-[#a89580] rounded-full hover:bg-[#f8eddb] hover:text-[#171412] transition-colors cursor-pointer">
            Gaming
          </span>
          <span className="px-4 py-1.5 bg-[#25201c] text-[#a89580] rounded-full hover:bg-[#f8eddb] hover:text-[#171412] transition-colors cursor-pointer">
            Experiments
          </span>
          <span className="px-4 py-1.5 bg-[#25201c] text-[#a89580] rounded-full hover:bg-[#f8eddb] hover:text-[#171412] transition-colors cursor-pointer">
            Interactive
          </span>
          <span className="px-4 py-1.5 bg-[#25201c] text-[#a89580] rounded-full hover:bg-[#f8eddb] hover:text-[#171412] transition-colors cursor-pointer">
            Concepts
          </span>
        </div>

        {/* Experiments Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, i) => (
            <div
              key={i}
              className={`p-7 ${item.color} border border-[rgba(255,255,255,0.08)] rounded-xs flex flex-col justify-between min-h-[240px] group transition-all duration-300 hover:-translate-y-1`}
            >
              <div>
                <span className="text-[10px] tracking-[0.2em] font-semibold text-[#b49368] uppercase block mb-3">
                  {item.category}
                </span>
                <h3 className="font-['Playfair_Display'] text-2xl font-normal text-white mb-2">
                  {item.title}
                </h3>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-[rgba(255,255,255,0.08)]">
                <span className="text-[10px] tracking-[0.18em] font-semibold text-[#a89580] uppercase">
                  Explore
                </span>
                <span className="text-sm text-[#b49368] transform group-hover:translate-x-1 transition-transform">
                  →
                </span>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
