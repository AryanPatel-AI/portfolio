import Link from "next/link";

export default function ExperimentsPage() {
  const items = [
    {
      title: "Tactical Reflex Highlights",
      category: "Gaming · Competitive",
      desc: "High-stakes clutch rounds and tactical execution recorded under @_om_x_aryan.",
      linkUrl: "https://www.instagram.com/_om_x_aryan/",
    },
    {
      title: "Interactive 3D Shaders",
      category: "Creative Frontend · Three.js",
      desc: "Procedural geometry experiments and WebGL spatial composition shaders.",
      linkUrl: "/work",
    },
    {
      title: "Speech AI Audio Pipeline",
      category: "Machine Learning · Hugging Face",
      desc: "Dockerized containerized neural speech-to-text inference API.",
      linkUrl: "https://github.com/AryanPatel-AI",
    },
    {
      title: "TradeSphere Derivatives Analytics",
      category: "FinTech & Systems · WebSockets",
      desc: "Indian stock market options chain and real-time paper trading engine.",
      linkUrl: "https://github.com/AryanPatel-AI/TradeSphere",
    },
    {
      title: "Neural Vision Identification",
      category: "Computer Vision · OpenCV",
      desc: "128-dimensional facial embedding vector extraction pipeline in Python.",
      linkUrl: "https://github.com/AryanPatel-AI/FaceRecognition",
    },
  ];

  return (
    <div className="min-h-screen bg-[#f8eddb] text-[#211e19]">
      {/* Header */}
      <header className="w-full flex items-center justify-between px-6 sm:px-10 lg:px-14 py-6 sm:py-8 border-b border-[rgba(91,68,43,0.15)] bg-[#f8eddb]/90 backdrop-blur-xs sticky top-0 z-30">
        <Link href="/" className="flex items-center gap-3.5 group">
          <span className="w-5 h-5 flex items-center justify-center border-2 border-[#211e19] rotate-45 transition-transform duration-300 group-hover:rotate-90">
            <span className="w-1.5 h-1.5 bg-[#211e19] rounded-full" />
          </span>
          <span className="font-['Playfair_Display'] text-sm tracking-[0.24em] font-semibold uppercase text-[#211e19]">
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
          <Link href="/gaming" className="hover:text-[#211e19] transition-colors">
            Gaming
          </Link>
          <span className="text-[#a89580]">—</span>
          <Link href="/contact" className="hover:text-[#211e19] transition-colors">
            Contact
          </Link>
        </nav>

        <div className="flex items-center gap-2 text-[9px] tracking-[0.2em] text-[#77573a] uppercase font-medium">
          <span className="w-1.5 h-1.5 rounded-full bg-[#77573a]" />
          <span>Labs &amp; Experiments / 2026</span>
        </div>
      </header>

      {/* Hero Visual Section */}
      <main className="max-w-6xl mx-auto px-6 sm:px-10 py-12 sm:py-16">
        <span className="text-[10px] font-semibold tracking-[0.25em] text-[#b49368] uppercase block mb-3">
          CREATIVE LABS &amp; EXPERIMENTS
        </span>
        <h1 className="font-['Playfair_Display'] text-4xl sm:text-5xl md:text-6xl font-normal leading-tight text-[#211e19] mb-4">
          Play. Explore.
          <br />
          <span className="italic text-[#b49368]">Create.</span>
        </h1>
        <p className="text-sm sm:text-base text-[#554739] max-w-xl font-light font-sans leading-relaxed mb-10">
          A dedicated sandbox for gaming clips, creative coding, AI prototypes, and experimental architectures developed during my BTech AI journey.
        </p>

        {/* Experiments Grid (High Contrast Warm Cream Aesthetic) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, i) => (
            <div
              key={i}
              className="p-7 bg-[#fcf7ee] border border-[rgba(91,68,43,0.18)] rounded-xl flex flex-col justify-between min-h-[240px] group transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_10px_25px_rgba(91,68,43,0.12)] hover:border-[rgba(180,147,104,0.4)]"
            >
              <div>
                <span className="text-[10px] tracking-[0.2em] font-semibold text-[#806648] uppercase block mb-3">
                  {item.category}
                </span>
                <h3 className="font-['Playfair_Display'] text-2xl font-normal text-[#211e19] mb-2 group-hover:text-[#b49368] transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-[#554739] font-sans leading-relaxed mt-2">
                  {item.desc}
                </p>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-[rgba(91,68,43,0.15)] mt-5">
                <a
                  href={item.linkUrl}
                  target={item.linkUrl.startsWith("http") ? "_blank" : undefined}
                  rel={item.linkUrl.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="px-3 py-1 rounded-full border border-[rgba(91,68,43,0.3)] bg-[#fcf7ee] !text-[#211e19] text-[10px] font-semibold tracking-wider hover:bg-[#211e19] hover:!text-[#f8eddb] hover:border-[#211e19] transition-all duration-200 shadow-2xs inline-flex items-center gap-1.5"
                >
                  Explore →
                </a>
                <span className="text-xs text-[#b49368] font-mono">
                  0{i + 1}
                </span>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
