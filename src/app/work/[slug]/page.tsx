import Link from "next/link";

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const projectTitle = slug
    ? slug.split("-").map((w) => w.charAt(0).toUpperCase() + w.slice(1)).join(" ")
    : "Latent Surface";

  return (
    <div className="min-h-screen bg-[#111619] text-[#e8eaed]">
      {/* Header */}
      <header className="w-full flex items-center justify-between px-6 sm:px-10 lg:px-14 py-6 sm:py-8 border-b border-[rgba(255,255,255,0.08)]">
        <Link href="/" className="flex items-center gap-3.5">
          <span className="w-5 h-5 flex items-center justify-center border-2 border-[#e8eaed] rotate-45">
            <span className="w-1.5 h-1.5 bg-[#e8eaed] rounded-full" />
          </span>
          <span className="font-['Playfair_Display'] text-sm tracking-[0.24em] font-semibold uppercase text-white">
            Aryan Patel
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-4 text-[10.5px] font-semibold tracking-[0.2em] uppercase text-[#9aa0a6]">
          <Link href="/work" className="text-white">
            Work
          </Link>
          <span className="text-[#5f6368]">—</span>
          <Link href="/about" className="hover:text-white transition-colors">
            About
          </Link>
          <span className="text-[#5f6368]">—</span>
          <Link href="/photography" className="hover:text-white transition-colors">
            Photography
          </Link>
          <span className="text-[#5f6368]">—</span>
          <Link href="/contact" className="hover:text-white transition-colors">
            Contact
          </Link>
        </nav>

        <div className="flex items-center gap-2 text-[9px] tracking-[0.2em] text-[#9aa0a6] uppercase font-medium">
          <span className="w-1.5 h-1.5 rounded-full bg-[#9aa0a6]" />
          <span>Exploring What&apos;s Possible / 2026</span>
        </div>
      </header>

      {/* Main Container */}
      <main className="max-w-6xl mx-auto px-6 sm:px-10 py-10 sm:py-14">
        {/* Back Link */}
        <div className="mb-8">
          <Link
            href="/work"
            className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] text-[#9aa0a6] hover:text-white uppercase transition-colors"
          >
            <span>←</span>
            <span>BACK TO WORK</span>
          </Link>
        </div>

        {/* Hero Visual Banner */}
        <div className="w-full aspect-21/9 rounded-xs overflow-hidden bg-[#1c2226] border border-[rgba(255,255,255,0.1)] mb-10 flex items-center justify-center relative">
          <img
            src="/hero-master-clean.jpg"
            alt={projectTitle}
            className="w-full h-full object-cover opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#111619] via-transparent to-transparent" />
        </div>

        {/* Project Header */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start pb-12 border-b border-[rgba(255,255,255,0.1)]">
          <div className="md:col-span-8">
            <span className="text-[10.5px] font-semibold tracking-[0.24em] text-[#a9d0cb] uppercase block mb-3">
              AI &amp; AGENTS · PROTOTYPE
            </span>
            <h1 className="font-['Playfair_Display'] text-4xl sm:text-5xl md:text-6xl font-normal text-white mb-4">
              {projectTitle}
            </h1>
            <p className="text-[#9aa0a6] text-lg font-light leading-relaxed font-sans max-w-2xl">
              An experimental interface that explores real-time generative workflows using multiple modalities — text,
              image and audio — powered by autonomous agents.
            </p>
          </div>

          {/* Project Metadata Sidebar */}
          <div className="md:col-span-4 p-6 bg-[#182024] border border-[rgba(255,255,255,0.08)] rounded-xs">
            <span className="text-[10px] font-semibold tracking-[0.2em] text-[#a9d0cb] uppercase block mb-4">
              Project Overview
            </span>
            <div className="space-y-3 text-xs">
              <div className="flex justify-between border-b border-[rgba(255,255,255,0.06)] pb-2">
                <span className="text-[#9aa0a6]">Type</span>
                <span className="text-white font-medium">Architectural Prototype</span>
              </div>
              <div className="flex justify-between border-b border-[rgba(255,255,255,0.06)] pb-2">
                <span className="text-[#9aa0a6]">Status</span>
                <span className="text-white font-medium">Active Research</span>
              </div>
              <div className="flex justify-between pt-1">
                <span className="text-[#9aa0a6]">Tech</span>
                <span className="text-white font-medium">Next.js · PyTorch · FastApi</span>
              </div>
            </div>
          </div>
        </div>

        {/* Key Features & Details */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-sm font-semibold tracking-[0.2em] text-[#a9d0cb] uppercase mb-5">
              Key Features
            </h3>
            <ul className="space-y-3 text-sm text-[#9aa0a6] font-sans">
              <li className="flex items-start gap-2.5">
                <span className="text-[#a9d0cb]">✦</span>
                <span>Multimodal inputs (text, image, audio embeddings)</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-[#a9d0cb]">✦</span>
                <span>Real-time generation and latency feedback telemetry</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-[#a9d0cb]">✦</span>
                <span>Agent-based co-creation and auto-prompting</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-[#a9d0cb]">✦</span>
                <span>Interactive visual surface with WebGL acceleration</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold tracking-[0.2em] text-[#a9d0cb] uppercase mb-5">
              Research Objective
            </h3>
            <p className="text-sm text-[#9aa0a6] leading-relaxed font-sans">
              Investigating how human creative intent can be amplified by low-latency model interaction loops,
              treating artificial intelligence as an instrument rather than a batch processing engine.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
