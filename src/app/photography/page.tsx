import Link from "next/link";

export default function PhotographyPage() {
  const galleries = [
    {
      title: "Landscapes",
      slug: "landscapes",
      count: "24 Photos",
      cover: "/aryan-portrait.jpg",
      desc: "Nature, light and endless horizons across India.",
    },
    {
      title: "Architecture & Heritage",
      slug: "architecture",
      count: "18 Photos",
      cover: "/hero-bg.jpg",
      desc: "Monuments, Mughal stone arches, and intricate carvings.",
    },
    {
      title: "Portraits",
      slug: "portraits",
      count: "15 Photos",
      cover: "/aryan-portrait.jpg",
      desc: "Environmental and natural light human portraits.",
    },
  ];

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
          <Link href="/photography" className="text-[#211e19] font-bold">
            Photography
          </Link>
          <span className="text-[#a89580]">—</span>
          <Link href="/#contact" className="hover:text-[#211e19] transition-colors">
            Contact
          </Link>
        </nav>

        <div className="flex items-center gap-2 text-[9px] tracking-[0.2em] text-[#77573a] uppercase font-medium">
          <span className="w-1.5 h-1.5 rounded-full bg-[#77573a]" />
          <span>Exploring What&apos;s Possible / 2026</span>
        </div>
      </header>

      {/* Hero Visual Section */}
      <section className="relative w-full h-[45vh] min-h-[340px] bg-[#211e19] text-[#f8eddb] flex items-end p-8 sm:p-14 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-45"
          style={{ backgroundImage: "url('/hero-bg.jpg')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#211e19] via-[#211e19]/60 to-transparent" />

        <div className="relative z-10 max-w-2xl">
          <span className="text-[10px] font-semibold tracking-[0.25em] text-[#b49368] uppercase block mb-3">
            PHOTOGRAPHY
          </span>
          <h1 className="font-['Playfair_Display'] text-4xl sm:text-5xl md:text-6xl font-normal leading-tight mb-3">
            Moments, Framed in Time
          </h1>
          <p className="text-sm sm:text-base text-[#d6c4a8] font-light max-w-lg font-sans">
            A collection of places, people and perspectives captured through my lens.
          </p>
        </div>
      </section>

      {/* Galleries Grid */}
      <main className="max-w-6xl mx-auto px-6 sm:px-10 py-14">
        {/* Category Pills */}
        <div className="flex flex-wrap items-center gap-2 mb-10 text-xs font-medium">
          <span className="px-4 py-1.5 bg-[#211e19] text-[#f8eddb] rounded-full">All</span>
          <span className="px-4 py-1.5 bg-[#ede0cb] text-[#77573a] rounded-full hover:bg-[#211e19] hover:text-[#f8eddb] transition-colors cursor-pointer">
            Portraits
          </span>
          <span className="px-4 py-1.5 bg-[#ede0cb] text-[#77573a] rounded-full hover:bg-[#211e19] hover:text-[#f8eddb] transition-colors cursor-pointer">
            Landscapes
          </span>
          <span className="px-4 py-1.5 bg-[#ede0cb] text-[#77573a] rounded-full hover:bg-[#211e19] hover:text-[#f8eddb] transition-colors cursor-pointer">
            Architecture
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {galleries.map((g) => (
            <Link
              key={g.slug}
              href={`/photography/${g.slug}`}
              className="group block overflow-hidden border border-[rgba(91,68,43,0.18)] bg-[#f1e4d0] transition-transform duration-300 hover:-translate-y-1.5"
            >
              <div className="aspect-4/3 overflow-hidden relative">
                <img
                  src={g.cover}
                  alt={g.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center text-[10px] tracking-[0.2em] font-semibold text-[#806648] uppercase mb-2">
                  <span>Collection</span>
                  <span>{g.count}</span>
                </div>
                <h3 className="font-['Playfair_Display'] text-2xl font-normal text-[#211e19] mb-2 group-hover:text-[#b49368] transition-colors">
                  {g.title}
                </h3>
                <p className="text-xs text-[#665747] font-sans leading-relaxed">{g.desc}</p>
              </div>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}
