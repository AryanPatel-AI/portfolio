import Link from "next/link";
import Image from "next/image";

export default function AboutPage() {
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
          <Link href="/about" className="text-[#211e19] font-bold">
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
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start">
          {/* Portrait Photo */}
          <div className="md:col-span-5 relative aspect-4/5 rounded-xs overflow-hidden border border-[rgba(91,68,43,0.2)] shadow-sm">
            <img
              src="/aryan-portrait.jpg"
              alt="Aryan Patel"
              className="w-full h-full object-cover object-center"
            />
          </div>

          {/* Bio text */}
          <div className="md:col-span-7 flex flex-col justify-center">
            <span className="text-[11px] font-semibold tracking-[0.24em] text-[#b49368] uppercase mb-3">
              ABOUT ME
            </span>
            <h1 className="font-['Playfair_Display'] text-3xl sm:text-4xl md:text-5xl font-normal leading-tight tracking-tight mb-5">
              BTech AI Student
              <br />
              Creative Developer
              <br />
              <span className="italic text-[#b49368]">Photographer · Gamer</span>
            </h1>

            <p className="text-[#5e5246] text-base leading-relaxed mb-6 font-sans">
              I&apos;m Aryan Patel, a BTech AI student with a deep curiosity for technology, creativity,
              and the world around me. I explore the intersection of artificial intelligence, web
              development, photography, and gaming — turning ideas into meaningful experiences.
            </p>

            <div>
              <Link
                href="/work"
                className="inline-flex items-center gap-2.5 text-xs font-semibold tracking-[0.2em] text-[#77573a] hover:text-[#211e19] uppercase border-b border-[#b49368] pb-1 transition-colors"
              >
                <span>MY JOURNEY</span>
                <span>→</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Skills & Future Goals Placeholder */}
        <section className="mt-20 pt-12 border-t border-[rgba(91,68,43,0.15)]">
          <span className="text-[10px] font-semibold tracking-[0.24em] text-[#b49368] uppercase block mb-8">
            SKILLS & INTERESTS
          </span>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 bg-[#f1e4d0] border border-[rgba(91,68,43,0.18)]">
              <span className="text-2xl text-[#b49368] block mb-3">✦</span>
              <h3 className="font-['Playfair_Display'] text-lg font-semibold mb-2">AI & Machine Learning</h3>
              <p className="text-xs text-[#5e5246] leading-relaxed">
                Exploring intelligent systems, generative architectures, and autonomous agents.
              </p>
            </div>

            <div className="p-6 bg-[#f1e4d0] border border-[rgba(91,68,43,0.18)]">
              <span className="text-2xl text-[#b49368] block mb-3">&lt;/&gt;</span>
              <h3 className="font-['Playfair_Display'] text-lg font-semibold mb-2">Web Development</h3>
              <p className="text-xs text-[#5e5246] leading-relaxed">
                Building modern, interactive fullstack web apps with Next.js and TypeScript.
              </p>
            </div>

            <div className="p-6 bg-[#f1e4d0] border border-[rgba(91,68,43,0.18)]">
              <span className="text-2xl text-[#b49368] block mb-3">◈</span>
              <h3 className="font-['Playfair_Display'] text-lg font-semibold mb-2">Creative Frontend & 3D</h3>
              <p className="text-xs text-[#5e5246] leading-relaxed">
                Interactive web experiences and visual storytelling.
              </p>
            </div>

            <div className="p-6 bg-[#f1e4d0] border border-[rgba(91,68,43,0.18)]">
              <span className="text-2xl text-[#b49368] block mb-3">◎</span>
              <h3 className="font-['Playfair_Display'] text-lg font-semibold mb-2">Photography</h3>
              <p className="text-xs text-[#5e5246] leading-relaxed">
                Capturing moments, spatial perspectives, and historic architecture.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
