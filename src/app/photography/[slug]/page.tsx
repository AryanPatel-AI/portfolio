import Link from "next/link";

export default async function PhotographyCollectionPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const title = slug
    ? slug.charAt(0).toUpperCase() + slug.slice(1)
    : "Landscapes";

  const photos = [
    { title: "Mughal Sanctuary", src: "/hero-bg.jpg", span: "col-span-2 aspect-16/9" },
    { title: "Sunlit Perspective", src: "/aryan-portrait.jpg", span: "col-span-1 aspect-4/5" },
    { title: "Stone Colonnade", src: "/not-found-bg.jpg", span: "col-span-1 aspect-square" },
    { title: "Heritage Portal", src: "/hero-master-clean.jpg", span: "col-span-2 aspect-16/9" },
  ];

  return (
    <div className="min-h-screen bg-[#1c2226] text-[#e8eaed]">
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
          <Link href="/work" className="hover:text-white transition-colors">
            Work
          </Link>
          <span className="text-[#5f6368]">—</span>
          <Link href="/about" className="hover:text-white transition-colors">
            About
          </Link>
          <span className="text-[#5f6368]">—</span>
          <Link href="/photography" className="text-white">
            Photography
          </Link>
          <span className="text-[#5f6368]">—</span>
          <Link href="/#contact" className="hover:text-white transition-colors">
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
            href="/photography"
            className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] text-[#9aa0a6] hover:text-white uppercase transition-colors"
          >
            <span>←</span>
            <span>BACK TO PHOTOGRAPHY</span>
          </Link>
        </div>

        {/* Collection Header */}
        <div className="mb-12">
          <span className="text-[10px] font-semibold tracking-[0.25em] text-[#a9d0cb] uppercase block mb-3">
            COLLECTION
          </span>
          <h1 className="font-['Playfair_Display'] text-4xl sm:text-5xl md:text-6xl font-normal text-white mb-3">
            {title}
          </h1>
          <p className="text-sm sm:text-base text-[#9aa0a6] max-w-xl font-light font-sans leading-relaxed">
            Nature, light and endless horizons. A collection of visual perspectives from travels and everyday explorations.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {photos.map((photo, i) => (
            <div
              key={i}
              className={`${photo.span} relative overflow-hidden rounded-xs border border-[rgba(255,255,255,0.08)] bg-[#242c30] group`}
            >
              <img
                src={photo.src}
                alt={photo.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-5">
                <span className="text-xs font-medium tracking-[0.18em] uppercase text-white font-sans">
                  {photo.title}
                </span>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
