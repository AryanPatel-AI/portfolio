"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";

export interface PhotoItem {
  id: string;
  title: string;
  caption: string;
  src: string;
  alt: string;
  aspect: string;
  isHero?: boolean;
  credit?: string;
  camera?: string;
  instagramUrl?: string;
}

interface CollectionMeta {
  title: string;
  subtitle: string;
  heroSrc: string;
  heroAlt: string;
  handle: string;
  photos: PhotoItem[];
}

const COLLECTIONS: Record<string, CollectionMeta> = {
  portraits: {
    title: "Portraits & Human Nuance",
    subtitle:
      "Environmental and studio portraiture observing expression, natural shadows, and character across heritage corridors and studio environments.",
    heroSrc: "/images/portrait/aryan-pillared-court.jpg",
    heroAlt: "Aryan Patel standing in a heritage pillared corridor",
    handle: "@click_by_aryan & @___aryan___patel",
    photos: [
      {
        id: "aryan-pillared-court",
        title: "Pillared Heritage Corridor",
        caption:
          "Aryan Patel framed within the rhythmic stone pillars and soft ambient shadows of a Rajasthan heritage colonnade.",
        src: "/images/portrait/aryan-pillared-court.jpg",
        alt: "Aryan Patel in heritage pillared court",
        aspect: "aspect-[2/3]",
        isHero: true,
        credit: "@click_by_aryan & @___aryan___patel",
        camera: "Canon EOS 200D II · Adobe Lightroom",
        instagramUrl: "https://www.instagram.com/click_by_aryan/",
      },
      {
        id: "aryan-final-portrait",
        title: "Editorial Studio Profile",
        caption:
          "Aryan Patel portrait study with warm directional key lighting highlighting composure and expression.",
        src: "/images/portrait/aryan-final.jpg",
        alt: "Aryan Patel studio portrait with warm lighting",
        aspect: "aspect-[2/3]",
        credit: "@___aryan___patel",
        camera: "Canon EOS 200D II · 50mm Prime · RAW",
        instagramUrl: "https://www.instagram.com/___aryan___patel/",
      },
      {
        id: "my-garden-portrait",
        title: "Sunlit Foliage & Character",
        caption:
          "Natural ambient daylight portrait captured amidst lush botanical foliage and soft natural bokeh.",
        src: "/images/portrait/my-garden-portrait.jpg",
        alt: "Portrait with sunlit greenery and natural background",
        aspect: "aspect-[3/4]",
        credit: "@click_by_aryan",
        camera: "Natural Ambient Light · Field Capture",
        instagramUrl: "https://www.instagram.com/click_by_aryan/",
      },
      {
        id: "my-road-portrait",
        title: "Cinematic Open Road",
        caption:
          "Open-air travel perspective along the highway capturing movement, freedom, and distant horizon lines.",
        src: "/images/portrait/my-road-portrait.jpg",
        alt: "Portrait on an open highway road under soft daylight",
        aspect: "aspect-[2/3]",
        credit: "@click_by_aryan",
        camera: "Ambient Daylight · Travel Series",
        instagramUrl: "https://www.instagram.com/click_by_aryan/",
      },
    ],
  },
  heritage: {
    title: "Sandstone Domes & Sacred Heritage",
    subtitle:
      "Ancient sandstone bastions, sacred temple sanctums, and timeless architectural geometry across India.",
    heroSrc: "/images/photography/my-temple.jpg",
    heroAlt: "Ancient sacred temple sanctum and carved pillars",
    handle: "@click_by_aryan",
    photos: [
      {
        id: "sacred-temple-sanctum",
        title: "Sacred Temple Sanctum & Carvings",
        caption:
          "Intricately carved sandstone pillars and sacred inner sanctum captured with deep tonal fidelity and natural illumination.",
        src: "/images/photography/my-temple.jpg",
        alt: "Carved sandstone temple pillars and sacred sanctum",
        aspect: "aspect-[2/3]",
        isHero: true,
        credit: "@click_by_aryan",
        camera: "Canon EOS 200D II · 50mm · RAW",
        instagramUrl: "https://www.instagram.com/click_by_aryan/",
      },
      {
        id: "palace-sandstone-domes",
        title: "Royal Sandstone Palace Domes",
        caption:
          "Intricately carved sandstone cupolas of historic Rajasthan palace architecture set against a crisp cyan-teal sky.",
        src: "/images/photography/landscapes/palace-sandstone-domes.jpg",
        alt: "Golden carved sandstone palace domes against open cyan-teal sky",
        aspect: "aspect-[16/10]",
        credit: "@click_by_aryan",
        camera: "Sandstone Geometry · Architectural Heritage",
        instagramUrl: "https://www.instagram.com/click_by_aryan/",
      },
      {
        id: "vintage-chandelier",
        title: "Monochrome Chandelier Study",
        caption:
          "High-contrast black-and-white architectural interior study of filigree brass lamps and vintage ambient illumination.",
        src: "/images/photography/landscapes/vintage-chandelier-lights.jpg",
        alt: "Vintage chandelier with illuminated ornate glass lamps",
        aspect: "aspect-[2/3]",
        credit: "@click_by_aryan",
        camera: "Monochrome Tonal Grading",
        instagramUrl: "https://www.instagram.com/click_by_aryan/",
      },
      {
        id: "mountain-fort-ridge",
        title: "High Fort Bastion Ramparts",
        caption:
          "Dramatic stone fortress walls winding along rugged mountain crests under overcast atmospheric skies.",
        src: "/images/photography/landscapes/mountain-fort-ridge.jpg",
        alt: "Mountain fort with ramparts perched high atop a rugged mountain ridge",
        aspect: "aspect-[16/10]",
        credit: "@click_by_aryan",
        camera: "High Altitude Bastion View",
        instagramUrl: "https://www.instagram.com/click_by_aryan/",
      },
    ],
  },
  landscapes: {
    title: "Mountain Ridges & Dal Lake",
    subtitle:
      "Nature, light and endless horizons. High-altitude mountain vistas, Dal Lake shikaras, and mist-laden pine valleys.",
    heroSrc: "/images/photography/Dal_Lake.jpeg",
    heroAlt: "Dal Lake traditional wooden shikaras floating peacefully",
    handle: "@click_by_aryan",
    photos: [
      {
        id: "dal-lake-shikaras",
        title: "Dal Lake Shikaras & Reflections",
        caption:
          "Traditional wooden shikaras and houseboats resting peacefully on the glassy reflective surface of Dal Lake, Srinagar.",
        src: "/images/photography/Dal_Lake.jpeg",
        alt: "Traditional wooden shikaras on calm lake waters with misty mountains in background",
        aspect: "aspect-[16/10]",
        isHero: true,
        credit: "@click_by_aryan",
        camera: "Canon EOS 200D II · Adobe Lightroom",
        instagramUrl: "https://www.instagram.com/click_by_aryan/",
      },
      {
        id: "kashmir-pines-ridge",
        title: "Himalayan Ridge & Pine Canopies",
        caption:
          "Sweeping high-altitude mountain panorama with misty blue ridges and dense evergreen pine forests in Kashmir.",
        src: "/images/photography/my-kashmir.jpg",
        alt: "High-altitude mountain overlook across pine trees and misty mountain ranges",
        aspect: "aspect-[9/16]",
        credit: "@click_by_aryan",
        camera: "Canon EOS 200D II · Pine Valley Ridge",
        instagramUrl: "https://www.instagram.com/click_by_aryan/",
      },
      {
        id: "mountain-fort-ridge",
        title: "High Fort Bastion Ramparts",
        caption:
          "Dramatic stone fortress walls winding along rugged mountain crests under overcast atmospheric skies.",
        src: "/images/photography/landscapes/mountain-fort-ridge.jpg",
        alt: "Mountain fort with ramparts perched high atop a rugged mountain ridge under dramatic gray skies",
        aspect: "aspect-[16/10]",
        credit: "@click_by_aryan",
        camera: "Landscape Aperture · High Altitude",
        instagramUrl: "https://www.instagram.com/click_by_aryan/",
      },
      {
        id: "kashmir-lake-houseboats",
        title: "Morning Mists over Lake",
        caption:
          "Early dawn reflections and tranquil waters surrounding historic wooden houseboats in Kashmir valley.",
        src: "/images/photography/landscapes/kashmir-lake-houseboats.jpg",
        alt: "Traditional wooden houseboats and shikaras on serene lake waters",
        aspect: "aspect-[16/10]",
        credit: "@click_by_aryan",
        camera: "Low-Light Morning · Reflections",
        instagramUrl: "https://www.instagram.com/click_by_aryan/",
      },
      {
        id: "mountain-valley-vista",
        title: "High Mountain Valley Vista",
        caption:
          "Sweeping high-altitude mountain panorama with misty blue ranges and pine canopy.",
        src: "/images/photography/landscapes/mountain-valley-vista.jpg",
        alt: "High-altitude mountain overlook across pine trees and distant misty mountain ranges",
        aspect: "aspect-[16/10]",
        credit: "@click_by_aryan",
        camera: "Mountain Vista Panoramic",
        instagramUrl: "https://www.instagram.com/click_by_aryan/",
      },
      {
        id: "sunset-rooftop-dusk",
        title: "Amber Dusk Horizon",
        caption:
          "Warm golden hour rays illuminating rooftop silhouettes and tree canopies during sunset.",
        src: "/images/photography/landscapes/sunset-rooftop-dusk.jpg",
        alt: "Silhouette of rooftop against deep orange sunset sky with sun on horizon",
        aspect: "aspect-[16/10]",
        credit: "@click_by_aryan",
        camera: "Golden Hour · Silhouette Exposure",
        instagramUrl: "https://www.instagram.com/click_by_aryan/",
      },
    ],
  },
};

export default function LandscapeCollectionClient({
  slug = "landscapes",
}: {
  slug?: string;
}) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const collection = COLLECTIONS[slug] || COLLECTIONS.landscapes;
  const photos = collection.photos;

  // Close lightbox on Escape, navigate with ArrowLeft/ArrowRight
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === "Escape") {
        setLightboxIndex(null);
      } else if (e.key === "ArrowLeft") {
        setLightboxIndex((prev) =>
          prev === null ? null : (prev - 1 + photos.length) % photos.length
        );
      } else if (e.key === "ArrowRight") {
        setLightboxIndex((prev) =>
          prev === null ? null : (prev + 1) % photos.length
        );
      }
    },
    [lightboxIndex, photos.length]
  );

  useEffect(() => {
    if (lightboxIndex !== null) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [lightboxIndex, handleKeyDown]);

  const activePhoto = lightboxIndex !== null ? photos[lightboxIndex] : null;

  return (
    <div className="min-h-screen bg-[#ede4d4] text-[#1c1a16] selection:bg-[#211e19] selection:text-[#f7f2ea]">
      {/* ==================== HERO SECTION (~45% VIEWPORT HEIGHT) ==================== */}
      <section className="relative w-full h-[50vh] min-h-[420px] max-h-[580px] bg-[#14181a] overflow-hidden select-none">
        {/* Hero Background Image */}
        <div className="absolute inset-0">
          <Image
            src={collection.heroSrc}
            alt={collection.heroAlt}
            fill
            priority
            sizes="100vw"
            className="object-cover object-[center_38%]"
          />
        </div>

        {/* Dual Directional Scrim for High Contrast & Text Readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/35 to-black/80 pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(0,0,0,0.6),_transparent_70%)] pointer-events-none" />

        {/* Header Bar */}
        <header className="relative z-30 w-full flex items-center justify-between px-6 sm:px-10 lg:px-14 py-5 sm:py-6 text-[#f5ede0]">
          {/* Brand Mark & Name */}
          <Link
            href="/"
            className="flex items-center gap-3 group focus:outline-none focus:ring-1 focus:ring-white/40"
          >
            <span className="w-4 h-4 flex items-center justify-center border border-[#f5ede0]/80 rotate-45 transition-transform duration-300 group-hover:rotate-90">
              <span className="w-1.5 h-1.5 bg-[#f5ede0] rounded-full" />
            </span>
            <span className="font-['Playfair_Display'] text-xs sm:text-[13px] tracking-[0.24em] font-semibold uppercase text-[#f7f2ea]">
              ARYAN PATEL
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-4 text-[10px] font-medium tracking-[0.22em] uppercase text-[#d6c9b8]">
            <Link
              href="/work"
              className="hover:text-white transition-colors duration-200 focus:outline-none focus:text-white"
            >
              WORK
            </Link>
            <span className="text-[#8c7e6c] select-none text-[9px]">—</span>
            <Link
              href="/about"
              className="hover:text-white transition-colors duration-200 focus:outline-none focus:text-white"
            >
              ABOUT
            </Link>
            <span className="text-[#8c7e6c] select-none text-[9px]">—</span>
            <Link
              href="/photography"
              className="text-white font-semibold underline decoration-white/40 underline-offset-4 focus:outline-none"
            >
              PHOTOGRAPHY
            </Link>
            <span className="text-[#8c7e6c] select-none text-[9px]">—</span>
            <Link
              href="/gaming"
              className="hover:text-white transition-colors duration-200 focus:outline-none focus:text-white"
            >
              GAMING
            </Link>
            <span className="text-[#8c7e6c] select-none text-[9px]">—</span>
            <Link
              href="/contact"
              className="hover:text-white transition-colors duration-200 focus:outline-none focus:text-white"
            >
              CONTACT
            </Link>
          </nav>

          {/* Desktop Status / Tag */}
          <div className="hidden sm:flex items-center gap-2 text-[9px] tracking-[0.24em] text-[#c7baa8] uppercase font-light">
            <span className="w-1 h-1 rounded-full bg-[#c7baa8]" />
            <span>Canon EOS 200D II / 2026</span>
          </div>

          {/* Mobile Hamburger Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-[10.5px] tracking-[0.2em] font-semibold text-[#f5ede0] uppercase border border-white/20 px-3 py-1.5 hover:bg-white/10 transition-colors focus:outline-none"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? "CLOSE" : "MENU"}
          </button>
        </header>

        {/* Mobile Navigation Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-[68px] left-0 w-full z-40 bg-[#12100e]/95 backdrop-blur-md border-b border-white/10 px-6 py-6 flex flex-col gap-4 text-[11px] font-semibold tracking-[0.22em] uppercase text-[#d6c9b8]">
            <Link
              href="/work"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-white transition-colors py-1"
            >
              WORK
            </Link>
            <Link
              href="/about"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-white transition-colors py-1"
            >
              ABOUT
            </Link>
            <Link
              href="/photography"
              onClick={() => setMobileMenuOpen(false)}
              className="text-white font-bold py-1"
            >
              PHOTOGRAPHY
            </Link>
            <Link
              href="/gaming"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-white transition-colors py-1"
            >
              GAMING
            </Link>
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-white transition-colors py-1"
            >
              CONTACT
            </Link>
          </div>
        )}

        {/* Hero Body Content Container */}
        <div className="relative z-20 h-[calc(100%-80px)] max-w-7xl mx-auto px-6 sm:px-10 lg:px-14 flex flex-col justify-between pb-7 sm:pb-9">
          {/* Back Navigation Link */}
          <div className="pt-1">
            <Link
              href="/photography"
              className="inline-flex items-center gap-2 text-[10px] sm:text-[10.5px] font-medium tracking-[0.22em] text-[#dfd4c5] hover:text-white uppercase transition-colors group focus:outline-none"
            >
              <span className="transition-transform duration-200 group-hover:-translate-x-1">
                ←
              </span>
              <span>BACK TO PHOTOGRAPHY HUB</span>
            </Link>
          </div>

          {/* Lower-Left Title & Metadata Block */}
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-2">
              <span className="text-[9.5px] sm:text-[10.5px] font-semibold tracking-[0.28em] text-[#d6c7b2] uppercase">
                COLLECTION ARCHIVE
              </span>
              <span className="text-white/40">•</span>
              <span className="text-[9.5px] text-[#f7eedf] tracking-[0.2em] uppercase font-mono">
                {collection.handle}
              </span>
            </div>

            <h1 className="font-['Playfair_Display'] text-4xl sm:text-5xl md:text-6xl lg:text-[68px] font-normal text-[#f7f2ea] tracking-tight leading-[0.98] mb-3">
              {collection.title}
            </h1>

            <p className="text-xs sm:text-[13.5px] text-[#e8ded1] font-light leading-relaxed max-w-xl">
              {collection.subtitle}
            </p>

            {/* Quick Hero Fullscreen Action Button */}
            <button
              onClick={() => setLightboxIndex(0)}
              className="mt-4 inline-flex items-center gap-2 text-[9px] tracking-[0.22em] uppercase font-medium text-[#c7baa8] hover:text-white transition-colors focus:outline-none"
              aria-label="View hero photograph in full resolution"
            >
              <span>VIEW HERO COVER IN FULLSCREEN</span>
              <span>⤢</span>
            </button>
          </div>
        </div>
      </section>

      {/* ==================== GALLERY SECTION ==================== */}
      <main className="w-full bg-[#ede4d4] py-8 sm:py-12 px-4 sm:px-8 md:px-12 lg:px-16">
        <div className="max-w-7xl mx-auto">
          {/* Subtle Outer Frame / Editorial Border */}
          <div className="bg-[#f2ebd9] border border-[#ded3be] p-4 sm:p-6 md:p-8 shadow-sm rounded-xs">
            {/* Quick Instagram attribution pill */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6 pb-4 border-b border-[#dfd2be]">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#806648]" />
                <span className="text-xs text-[#554739] font-mono">
                  All photographs shot by Aryan Patel · Featured on Instagram {collection.handle}
                </span>
              </div>
              <div className="flex items-center gap-3">
                <a
                  href="https://www.instagram.com/click_by_aryan/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-[#211e19] font-semibold hover:text-[#b49368] transition-colors"
                >
                  @click_by_aryan ↗
                </a>
                <span className="text-[#a89580]">•</span>
                <a
                  href="https://www.instagram.com/___aryan___patel/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-[#211e19] font-semibold hover:text-[#b49368] transition-colors"
                >
                  @___aryan___patel ↗
                </a>
              </div>
            </div>

            {/* Photo Cards Grid: Respects portrait and landscape aspect ratios */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 items-start">
              {photos.map((photo, idx) => {
                const isPortrait = photo.aspect.includes("2/3") || photo.aspect.includes("3/4") || photo.aspect.includes("9/16");

                return (
                  <div
                    key={photo.id}
                    onClick={() => setLightboxIndex(idx)}
                    className="group bg-[#fcf7ee] border border-[rgba(91,68,43,0.18)] rounded-xl overflow-hidden flex flex-col justify-between shadow-xs hover:shadow-[0_10px_25px_rgba(91,68,43,0.12)] hover:border-[rgba(180,147,104,0.4)] hover:-translate-y-1.5 transition-all duration-300 cursor-pointer"
                    role="button"
                    tabIndex={0}
                    aria-label={`View ${photo.title}`}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        setLightboxIndex(idx);
                      }
                    }}
                  >
                    {/* Top Bar */}
                    <div className="px-4 py-2 bg-[#f0e4d2] border-b border-[rgba(91,68,43,0.15)] flex items-center justify-between text-[10px] tracking-wider text-[#77573a]">
                      <span className="font-semibold text-[#806648] uppercase">
                        Frame {String(idx + 1).padStart(2, "0")}
                      </span>
                      <span className="font-mono text-[#44382c]">
                        {photo.credit}
                      </span>
                    </div>

                    {/* Image Container with Proper Aspect Ratio */}
                    <div
                      className={`relative w-full overflow-hidden bg-[#e4d5be] ${
                        isPortrait ? "aspect-[3/4]" : "aspect-[16/10]"
                      }`}
                    >
                      <Image
                        src={photo.src}
                        alt={photo.alt}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-between p-4 text-white">
                        <span className="text-[10px] tracking-widest uppercase font-sans">
                          Expand ⤢
                        </span>
                        <span className="text-[10px] font-mono text-[#d6c7b2]">
                          {photo.camera}
                        </span>
                      </div>
                    </div>

                    {/* Content Panel */}
                    <div className="p-5 flex flex-col justify-between flex-1">
                      <div>
                        <h3 className="font-['Playfair_Display'] text-xl font-normal text-[#211e19] mb-1.5 group-hover:text-[#b49368] transition-colors">
                          {photo.title}
                        </h3>
                        <p className="text-xs text-[#554739] leading-relaxed font-sans mb-3">
                          {photo.caption}
                        </p>
                      </div>

                      <div className="pt-3 border-t border-[rgba(91,68,43,0.12)] flex items-center justify-between text-[10px]">
                        <span className="text-[#806648] font-mono">
                          {photo.camera}
                        </span>
                        <span className="px-3 py-1 rounded-full border border-[rgba(91,68,43,0.3)] bg-[#fcf7ee] !text-[#211e19] text-[10px] font-semibold tracking-wider hover:bg-[#211e19] hover:!text-[#f8eddb] hover:border-[#211e19] transition-all duration-200 shadow-2xs inline-flex items-center gap-1">
                          <span>Inspect</span>
                          <span className="group-hover:translate-x-0.5 transition-transform">→</span>
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </main>

      {/* ==================== FOOTER ==================== */}
      <footer className="w-full bg-[#1c1a16] text-[#c7baa8] py-8 px-6 sm:px-10 lg:px-14 border-t border-[#3a3227]">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono tracking-wider">
          <div className="flex items-center gap-3 text-[#e6dbcf]">
            <Link href="/" className="hover:text-white transition-colors">
              ARYAN PATEL
            </Link>
            <span>/</span>
            <span>{collection.title.toUpperCase()}</span>
          </div>

          <div className="flex items-center gap-6">
            <Link
              href="/photography"
              className="hover:text-white transition-colors"
            >
              ALL COLLECTIONS
            </Link>
            <Link
              href="/contact"
              className="hover:text-white transition-colors"
            >
              CONNECT
            </Link>
          </div>
        </div>
      </footer>

      {/* ==================== ACCESSIBLE FULLSCREEN LIGHTBOX ==================== */}
      {activePhoto && lightboxIndex !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`Expanded view of ${activePhoto.title}`}
          className="fixed inset-0 z-50 bg-[#100e0c]/95 backdrop-blur-md flex flex-col justify-between p-4 sm:p-8 animate-in fade-in duration-200"
          onClick={() => setLightboxIndex(null)}
        >
          {/* Top Lightbox Bar */}
          <div
            className="w-full flex items-center justify-between text-[#c7baa8] text-xs font-mono tracking-widest pb-3 border-b border-white/10"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center gap-3">
              <span className="text-white font-sans text-sm tracking-[0.2em] uppercase">
                {activePhoto.title}
              </span>
              <span className="text-white/40">|</span>
              <span className="text-[11px]">
                {String(lightboxIndex + 1).padStart(2, "0")} /{" "}
                {String(photos.length).padStart(2, "0")}
              </span>
            </div>

            {/* Close Button */}
            <button
              onClick={() => setLightboxIndex(null)}
              className="flex items-center gap-2 px-3 py-1.5 rounded border border-white/20 text-[#f5ede0] hover:bg-white/10 hover:text-white transition-colors focus:outline-none focus:ring-1 focus:ring-white/50 cursor-pointer"
              aria-label="Close image viewer"
            >
              <span className="text-[10px] tracking-widest font-sans uppercase">
                ESC
              </span>
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Main Photo Center Container */}
          <div
            className="relative flex-1 flex items-center justify-center my-3 sm:my-6 overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Previous Button */}
            <button
              onClick={() =>
                setLightboxIndex(
                  (prev) =>
                    prev !== null
                      ? (prev - 1 + photos.length) % photos.length
                      : null
                )
              }
              className="absolute left-2 sm:left-4 z-10 w-11 h-11 rounded-full bg-black/60 border border-white/20 hover:bg-white/20 text-white flex items-center justify-center transition-colors focus:outline-none focus:ring-1 focus:ring-white/50 cursor-pointer"
              aria-label="Previous image"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>

            {/* Expanded Image */}
            <div className="relative max-w-[90vw] max-h-[75vh] w-full h-full flex items-center justify-center">
              <Image
                src={activePhoto.src}
                alt={activePhoto.alt}
                fill
                sizes="95vw"
                className="object-contain"
                priority
              />
            </div>

            {/* Next Button */}
            <button
              onClick={() =>
                setLightboxIndex(
                  (prev) =>
                    prev !== null ? (prev + 1) % photos.length : null
                )
              }
              className="absolute right-2 sm:right-4 z-10 w-11 h-11 rounded-full bg-black/60 border border-white/20 hover:bg-white/20 text-white flex items-center justify-center transition-colors focus:outline-none focus:ring-1 focus:ring-white/50 cursor-pointer"
              aria-label="Next image"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>
          </div>

          {/* Bottom Lightbox Caption & Keyboard Helper */}
          <div
            className="w-full flex flex-col sm:flex-row items-center justify-between text-[#d6c9b8] text-[11px] pt-3 border-t border-white/10 gap-2"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="max-w-xl text-center sm:text-left">
              <p className="font-light tracking-wide text-[#f5ede0]">
                {activePhoto.caption}
              </p>
              <p className="text-[10px] font-mono text-[#a89d8f] mt-0.5">
                {activePhoto.camera} · {activePhoto.credit}
              </p>
            </div>
            <div className="flex items-center gap-4 text-[10px] tracking-widest uppercase font-mono text-[#8c8274]">
              <span>[← PREV]</span>
              <span>[NEXT →]</span>
              <span>[ESC CLOSE]</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
