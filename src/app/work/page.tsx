import Link from "next/link";

export default function WorkPage() {
  const projects = [
    {
      id: "latent-surface",
      title: "Latent Surface",
      category: "AI & Agents · Prototype",
      desc: "Real-time multimodal generative interface powered by AI agents.",
      color: "bg-[#e1d2ba]",
      tag: "AI & Agents",
    },
    {
      id: "prism-core",
      title: "Prism Core",
      category: "Creative Development · Prototype",
      desc: "Shader-driven interactive graphic simulation engine for the modern web.",
      color: "bg-[#c9b397]",
      tag: "Creative Development",
    },
    {
      id: "nexus-protocol",
      title: "Nexus Protocol",
      category: "Software · Prototype",
      desc: "Distributed intelligence nodes with high-throughput streaming.",
      color: "bg-[#dfc7a6]",
      tag: "Software",
    },
    {
      id: "visual-playground",
      title: "Visual Playground",
      category: "3D · Concept",
      desc: "Spatial design and experimental Three.js procedural compositions.",
      color: "bg-[#d6c4a8]",
      tag: "3D",
    },
    {
      id: "game-lab",
      title: "Game Lab",
      category: "Gaming · Concept",
      desc: "Experimental game mechanics, physics modeling, and worldbuilding.",
      color: "bg-[#c4b197]",
      tag: "Gaming",
    },
    {
      id: "photo-journal",
      title: "Photo Journal",
      category: "Photography · Concept",
      desc: "High-resolution curated visual captures of architectural heritage.",
      color: "bg-[#d9c8af]",
      tag: "Photography",
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
          <Link href="/work" className="text-[#211e19] font-bold">
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
          <Link href="/#contact" className="hover:text-[#211e19] transition-colors">
            Contact
          </Link>
        </nav>

        <div className="flex items-center gap-2 text-[9px] tracking-[0.2em] text-[#77573a] uppercase font-medium">
          <span className="w-1.5 h-1.5 rounded-full bg-[#77573a]" />
          <span>Exploring What&apos;s Possible / 2026</span>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-6 sm:px-10 py-12 sm:py-16">
        <span className="text-[11px] font-semibold tracking-[0.24em] text-[#b49368] uppercase block mb-3">
          MY WORK
        </span>
        <h1 className="font-['Playfair_Display'] text-4xl sm:text-5xl md:text-6xl font-normal leading-tight tracking-tight mb-4">
          Projects &amp; Experiments
        </h1>
        <p className="text-[#5e5246] text-base max-w-xl mb-10 font-sans">
          A collection of ideas, prototypes and projects across AI, web, 3D and creative technology.
        </p>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 mb-10 text-xs font-medium">
          <span className="px-4 py-1.5 bg-[#211e19] text-[#f8eddb] rounded-full">All</span>
          <span className="px-4 py-1.5 bg-[#ede0cb] text-[#77573a] rounded-full hover:bg-[#211e19] hover:text-[#f8eddb] transition-colors cursor-pointer">
            AI &amp; Agents
          </span>
          <span className="px-4 py-1.5 bg-[#ede0cb] text-[#77573a] rounded-full hover:bg-[#211e19] hover:text-[#f8eddb] transition-colors cursor-pointer">
            Creative Development
          </span>
          <span className="px-4 py-1.5 bg-[#ede0cb] text-[#77573a] rounded-full hover:bg-[#211e19] hover:text-[#f8eddb] transition-colors cursor-pointer">
            Software
          </span>
          <span className="px-4 py-1.5 bg-[#ede0cb] text-[#77573a] rounded-full hover:bg-[#211e19] hover:text-[#f8eddb] transition-colors cursor-pointer">
            3D
          </span>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <Link
              key={p.id}
              href={`/work/${p.id}`}
              className={`p-7 ${p.color} border border-[rgba(94,72,46,0.2)] flex flex-col justify-between min-h-[280px] group transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lg`}
            >
              <div>
                <span className="text-[10px] tracking-[0.2em] font-semibold text-[#806648] uppercase block mb-3">
                  {p.category}
                </span>
                <h3 className="font-['Playfair_Display'] text-2xl font-normal text-[#211e19] mb-2 group-hover:text-[#806648] transition-colors">
                  {p.title}
                </h3>
                <p className="text-xs text-[#665747] leading-relaxed font-sans">{p.desc}</p>
              </div>

              <div className="flex items-center justify-between pt-6 border-t border-[rgba(94,72,46,0.15)] mt-6">
                <span className="text-[10px] tracking-[0.18em] font-semibold text-[#806648] uppercase">
                  View Project
                </span>
                <span className="text-sm transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">
                  ↗
                </span>
              </div>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}
