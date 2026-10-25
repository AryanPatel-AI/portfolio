"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";

export interface PhotoItem {
  id: string;
  title: string;
  caption?: string;
  src: string;
  alt: string;
  aspect: string;
  isHero?: boolean;
}

const ALL_PHOTOS: PhotoItem[] = [
  {
    id: "mountain-fort-ridge",
    title: "Mountain Fort Ridge",
    caption: "Dramatic hilltop fortress ramparts along a mountain ridge under atmospheric skies.",
    src: "/images/photography/landscapes/mountain-fort-ridge.jpg",
    alt: "Mountain fort with ramparts perched high atop a rugged mountain ridge under dramatic gray skies",
    aspect: "aspect-[16/10]",
    isHero: true,
  },
  {
    id: "kashmir-lake-houseboats",
    title: "Dal Lake Shikaras & Reflections",
    caption: "Traditional wooden houseboats and shikaras floating peacefully over reflective mountain waters.",
    src: "/images/photography/landscapes/kashmir-lake-houseboats.jpg",
    alt: "Traditional wooden houseboats and shikaras on serene lake waters with misty mountains in the background",
    aspect: "aspect-[16/10]",
  },
  {
    id: "mountain-valley-vista",
    title: "High Mountain Valley Vista",
    caption: "Sweeping high-altitude mountain panorama with misty blue ranges and pine canopy.",
    src: "/images/photography/landscapes/mountain-valley-vista.jpg",
    alt: "High-altitude mountain overlook across pine trees, hillside cottages, and distant misty mountain ranges",
    aspect: "aspect-[16/10]",
  },
  {
    id: "palace-sandstone-domes",
    title: "Heritage Sandstone Domes",
    caption: "Intricately carved sandstone domes of a historic palace against a vivid cyan-teal sky.",
    src: "/images/photography/landscapes/palace-sandstone-domes.jpg",
    alt: "Golden carved sandstone palace domes against open cyan-teal sky",
    aspect: "aspect-[16/10]",
  },
  {
    id: "vintage-chandelier-lights",
    title: "Ornate Vintage Chandelier",
    caption: "Architectural interior study of vintage filigree lamps in high-contrast monochrome.",
    src: "/images/photography/landscapes/vintage-chandelier-lights.jpg",
    alt: "Vintage chandelier with illuminated ornate glass lamps and filigree metal lace in black and white",
    aspect: "aspect-[2/3]",
  },
  {
    id: "sunset-skyline-tower",
    title: "Amber Dusk Horizon",
    caption: "Urban skyline silhouette with communications tower and brilliant orange setting sun.",
    src: "/images/photography/landscapes/sunset-skyline-tower.jpg",
    alt: "Silhouette of transmission tower and rooftop against deep orange sunset sky with sun on horizon",
    aspect: "aspect-[16/10]",
  },
  {
    id: "sunset-rooftop-dusk",
    title: "Golden Hour Silhouette",
    caption: "Hazy dusk light glowing behind rooftop silhouettes and tree branches.",
    src: "/images/photography/landscapes/sunset-rooftop-dusk.jpg",
    alt: "Warm golden sunlight filtering behind rooftop structures and foliage at dusk",
    aspect: "aspect-[16/10]",
  },
];

export default function LandscapeCollectionClient() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Close lightbox on Escape, navigate with ArrowLeft/ArrowRight
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === "Escape") {
        setLightboxIndex(null);
      } else if (e.key === "ArrowLeft") {
        setLightboxIndex((prev) =>
          prev === null ? null : (prev - 1 + ALL_PHOTOS.length) % ALL_PHOTOS.length
        );
      } else if (e.key === "ArrowRight") {
        setLightboxIndex((prev) =>
          prev === null ? null : (prev + 1) % ALL_PHOTOS.length
        );
      }
    },
    [lightboxIndex]
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

  const openLightboxByPhotoId = (id: string) => {
    const idx = ALL_PHOTOS.findIndex((p) => p.id === id);
    if (idx !== -1) setLightboxIndex(idx);
  };

  const activePhoto = lightboxIndex !== null ? ALL_PHOTOS[lightboxIndex] : null;

  return (
    <div className="min-h-screen bg-[#ede4d4] text-[#1c1a16] selection:bg-[#211e19] selection:text-[#f7f2ea]">
      {/* ==================== HERO SECTION (~44% VIEWPORT HEIGHT) ==================== */}
      <section className="relative w-full h-[50vh] min-h-[420px] max-h-[580px] bg-[#14181a] overflow-hidden select-none">
        {/* Hero Background Image */}
        <div className="absolute inset-0">
          <Image
            src={ALL_PHOTOS[0].src}
            alt={ALL_PHOTOS[0].alt}
            fill
            priority
            sizes="100vw"
            className="object-cover object-[center_38%]"
          />
        </div>

        {/* Dual Directional Scrim for High Contrast & Text Readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/65 via-black/25 to-black/75 pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(0,0,0,0.55),_transparent_70%)] pointer-events-none" />

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
            <span className="font-['Cinzel',serif] text-xs sm:text-[13px] tracking-[0.24em] font-semibold uppercase text-[#f7f2ea]">
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
              href="/contact"
              className="hover:text-white transition-colors duration-200 focus:outline-none focus:text-white"
            >
              CONTACT
            </Link>
          </nav>

          {/* Desktop Status / Tag */}
          <div className="hidden sm:flex items-center gap-2 text-[9px] tracking-[0.24em] text-[#c7baa8] uppercase font-light">
            <span className="w-1 h-1 rounded-full bg-[#c7baa8]" />
            <span>EXPLORING WHAT&apos;S POSSIBLE / 2026</span>
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
              <span>BACK TO PHOTOGRAPHY</span>
            </Link>
          </div>

          {/* Lower-Left Title & Metadata Block */}
          <div className="max-w-2xl">
            <span className="text-[9.5px] sm:text-[10.5px] font-semibold tracking-[0.28em] text-[#d6c7b2] uppercase block mb-2">
              COLLECTION
            </span>

            <h1 className="font-['Cormorant_Garamond',Georgia,serif] text-5xl sm:text-6xl md:text-7xl lg:text-[76px] font-light text-[#f7f2ea] tracking-tight leading-[0.95] mb-3">
              Landscapes
            </h1>

            <p className="text-xs sm:text-[13.5px] text-[#e8ded1] font-light leading-relaxed max-w-xl">
              Nature, light and endless horizons. A collection of landscapes from
              my travels and everyday explorations.
            </p>

            {/* Quick Hero Fullscreen Action Button */}
            <button
              onClick={() => setLightboxIndex(0)}
              className="mt-4 inline-flex items-center gap-2 text-[9px] tracking-[0.22em] uppercase font-medium text-[#c7baa8] hover:text-white transition-colors focus:outline-none"
              aria-label="View hero photograph in full resolution"
            >
              <svg
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" />
              </svg>
              <span>VIEW HERO COVER IN FULLSCREEN</span>
            </button>
          </div>
        </div>
      </section>

      {/* ==================== GALLERY MOSAIC SECTION ==================== */}
      <main className="w-full bg-[#ede4d4] py-4 sm:py-6 md:py-8 px-3 sm:px-6 md:px-10 lg:px-14">
        <div className="max-w-7xl mx-auto">
          {/* Subtle Outer Frame / Editorial Border matching reference */}
          <div className="bg-[#f2ebd9] border border-[#ded3be] p-2 sm:p-3 md:p-3.5 shadow-sm">
            <div className="flex flex-col gap-2 sm:gap-2.5 md:gap-3">
              {/* --- ROW 1: TWO WIDE LANDSCAPES (LEFT SLIGHTLY WIDER ~56% vs ~44%) --- */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-2 sm:gap-2.5 md:gap-3">
                {/* Photo 1: Kashmir Dal Lake Houseboats (col-span-12 md:col-span-7) */}
                <div
                  onClick={() => openLightboxByPhotoId("kashmir-lake-houseboats")}
                  className="col-span-12 md:col-span-7 relative group cursor-pointer overflow-hidden bg-[#1c1a16] border border-[#d8cbb5]"
                  tabIndex={0}
                  role="button"
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      openLightboxByPhotoId("kashmir-lake-houseboats");
                    }
                  }}
                  aria-label="View Dal Lake Shikaras & Reflections"
                >
                  <div className="relative w-full aspect-[16/10]">
                    <Image
                      src="/images/photography/landscapes/kashmir-lake-houseboats.jpg"
                      alt="Traditional wooden houseboats and shikaras on serene lake waters with misty mountains in the background"
                      fill
                      sizes="(max-width: 768px) 100vw, 58vw"
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-between p-4 sm:p-5 text-white">
                      <span className="text-[10px] sm:text-[11px] font-medium tracking-[0.2em] uppercase font-sans">
                        Dal Lake Shikaras & Reflections
                      </span>
                      <span className="text-[9px] tracking-[0.2em] text-[#d6c7b2] uppercase">
                        VIEW ↗
                      </span>
                    </div>
                  </div>
                </div>

                {/* Photo 2: High Mountain Valley Vista (col-span-12 md:col-span-5) */}
                <div
                  onClick={() => openLightboxByPhotoId("mountain-valley-vista")}
                  className="col-span-12 md:col-span-5 relative group cursor-pointer overflow-hidden bg-[#1c1a16] border border-[#d8cbb5]"
                  tabIndex={0}
                  role="button"
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      openLightboxByPhotoId("mountain-valley-vista");
                    }
                  }}
                  aria-label="View High Mountain Valley Vista"
                >
                  <div className="relative w-full aspect-[16/10]">
                    <Image
                      src="/images/photography/landscapes/mountain-valley-vista.jpg"
                      alt="High-altitude mountain overlook across pine trees, hillside cottages, and distant misty mountain ranges"
                      fill
                      sizes="(max-width: 768px) 100vw, 42vw"
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-between p-4 sm:p-5 text-white">
                      <span className="text-[10px] sm:text-[11px] font-medium tracking-[0.2em] uppercase font-sans">
                        High Mountain Valley Vista
                      </span>
                      <span className="text-[9px] tracking-[0.2em] text-[#d6c7b2] uppercase">
                        VIEW ↗
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* --- LOWER SECTION: 3 DISTINCT VERTICAL COLUMNS MATCHING THE REFERENCE --- */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-2 sm:gap-2.5 md:gap-3 items-stretch">
                {/* COLUMN 1: LEFT (~28% / md:col-span-4) — 2 VERTICALLY STACKED PHOTOS */}
                <div className="col-span-12 md:col-span-4 flex flex-col gap-2 sm:gap-2.5 md:gap-3">
                  {/* Photo 3: Palace Sandstone Domes */}
                  <div
                    onClick={() => openLightboxByPhotoId("palace-sandstone-domes")}
                    className="relative group cursor-pointer overflow-hidden bg-[#1c1a16] border border-[#d8cbb5]"
                    tabIndex={0}
                    role="button"
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        openLightboxByPhotoId("palace-sandstone-domes");
                      }
                    }}
                    aria-label="View Heritage Sandstone Domes"
                  >
                    <div className="relative w-full aspect-[16/10]">
                      <Image
                        src="/images/photography/landscapes/palace-sandstone-domes.jpg"
                        alt="Golden carved sandstone palace domes against open cyan-teal sky"
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-between p-3.5 sm:p-4 text-white">
                        <span className="text-[10px] font-medium tracking-[0.18em] uppercase font-sans">
                          Heritage Sandstone Domes
                        </span>
                        <span className="text-[9px] tracking-[0.2em] text-[#d6c7b2] uppercase">
                          VIEW ↗
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Photo 4: Mountain Fort Ridge */}
                  <div
                    onClick={() => openLightboxByPhotoId("mountain-fort-ridge")}
                    className="relative group cursor-pointer overflow-hidden bg-[#1c1a16] border border-[#d8cbb5]"
                    tabIndex={0}
                    role="button"
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        openLightboxByPhotoId("mountain-fort-ridge");
                      }
                    }}
                    aria-label="View Mountain Fort Ridge"
                  >
                    <div className="relative w-full aspect-[16/10]">
                      <Image
                        src="/images/photography/landscapes/mountain-fort-ridge.jpg"
                        alt="Mountain fort with ramparts perched high atop a rugged mountain ridge under dramatic gray skies"
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-between p-3.5 sm:p-4 text-white">
                        <span className="text-[10px] font-medium tracking-[0.18em] uppercase font-sans">
                          Mountain Fort Ridge
                        </span>
                        <span className="text-[9px] tracking-[0.2em] text-[#d6c7b2] uppercase">
                          VIEW ↗
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* COLUMN 2: CENTER (~28% / md:col-span-3) — 1 TALL VERTICAL ARCHITECTURAL STUDY */}
                <div className="col-span-12 md:col-span-3 flex flex-col">
                  <div
                    onClick={() => openLightboxByPhotoId("vintage-chandelier-lights")}
                    className="relative flex-1 group cursor-pointer overflow-hidden bg-[#1c1a16] border border-[#d8cbb5] min-h-[340px] md:min-h-0"
                    tabIndex={0}
                    role="button"
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        openLightboxByPhotoId("vintage-chandelier-lights");
                      }
                    }}
                    aria-label="View Ornate Vintage Chandelier"
                  >
                    <div className="relative w-full h-full min-h-[340px] md:min-h-0 aspect-[3/4] md:aspect-auto">
                      <Image
                        src="/images/photography/landscapes/vintage-chandelier-lights.jpg"
                        alt="Vintage chandelier with illuminated ornate glass lamps and filigree metal lace in black and white"
                        fill
                        sizes="(max-width: 768px) 100vw, 25vw"
                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-between p-3.5 sm:p-4 text-white">
                        <span className="text-[10px] font-medium tracking-[0.18em] uppercase font-sans">
                          Ornate Chandelier
                        </span>
                        <span className="text-[9px] tracking-[0.2em] text-[#d6c7b2] uppercase">
                          VIEW ↗
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* COLUMN 3: RIGHT (~44% / md:col-span-5) — 2 VERTICALLY STACKED SUNSET PERSPECTIVES */}
                <div className="col-span-12 md:col-span-5 flex flex-col gap-2 sm:gap-2.5 md:gap-3">
                  {/* Photo 6: Sunset Skyline Tower */}
                  <div
                    onClick={() => openLightboxByPhotoId("sunset-skyline-tower")}
                    className="relative group cursor-pointer overflow-hidden bg-[#1c1a16] border border-[#d8cbb5]"
                    tabIndex={0}
                    role="button"
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        openLightboxByPhotoId("sunset-skyline-tower");
                      }
                    }}
                    aria-label="View Amber Dusk Horizon"
                  >
                    <div className="relative w-full aspect-[16/10]">
                      <Image
                        src="/images/photography/landscapes/sunset-skyline-tower.jpg"
                        alt="Silhouette of transmission tower and rooftop against deep orange sunset sky with sun on horizon"
                        fill
                        sizes="(max-width: 768px) 100vw, 42vw"
                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-between p-3.5 sm:p-4 text-white">
                        <span className="text-[10px] font-medium tracking-[0.18em] uppercase font-sans">
                          Amber Dusk Horizon
                        </span>
                        <span className="text-[9px] tracking-[0.2em] text-[#d6c7b2] uppercase">
                          VIEW ↗
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Photo 7: Sunset Rooftop Dusk */}
                  <div
                    onClick={() => openLightboxByPhotoId("sunset-rooftop-dusk")}
                    className="relative group cursor-pointer overflow-hidden bg-[#1c1a16] border border-[#d8cbb5]"
                    tabIndex={0}
                    role="button"
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        openLightboxByPhotoId("sunset-rooftop-dusk");
                      }
                    }}
                    aria-label="View Golden Hour Silhouette"
                  >
                    <div className="relative w-full aspect-[16/10]">
                      <Image
                        src="/images/photography/landscapes/sunset-rooftop-dusk.jpg"
                        alt="Warm golden sunlight filtering behind rooftop structures and foliage at dusk"
                        fill
                        sizes="(max-width: 768px) 100vw, 42vw"
                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-between p-3.5 sm:p-4 text-white">
                        <span className="text-[10px] font-medium tracking-[0.18em] uppercase font-sans">
                          Golden Hour Silhouette
                        </span>
                        <span className="text-[9px] tracking-[0.2em] text-[#d6c7b2] uppercase">
                          VIEW ↗
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* ==================== MINIMAL EDITORIAL FOOTER ==================== */}
      <footer className="w-full bg-[#ede4d4] border-t border-[#ded3be] px-6 sm:px-10 lg:px-14 py-8 text-[#7d6f5d]">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-[9.5px] tracking-[0.22em] uppercase font-medium">
          <div className="flex items-center gap-3">
            <Link href="/" className="hover:text-[#1c1a16] transition-colors">
              ARYAN PATEL
            </Link>
            <span>/</span>
            <span>LANDSCAPE PHOTOGRAPHY COLLECTION</span>
          </div>

          <div className="flex items-center gap-6">
            <Link
              href="/photography"
              className="hover:text-[#1c1a16] transition-colors"
            >
              ALL COLLECTIONS
            </Link>
            <Link
              href="/contact"
              className="hover:text-[#1c1a16] transition-colors"
            >
              INQUIRE PRINTS
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
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex flex-col justify-between p-4 sm:p-8 animate-in fade-in duration-200"
        >
          {/* Top Lightbox Bar */}
          <div className="w-full flex items-center justify-between text-[#c7baa8] text-xs font-mono tracking-widest pb-3 border-b border-white/10">
            <div className="flex items-center gap-3">
              <span className="text-white font-sans text-sm tracking-[0.2em] uppercase">
                {activePhoto.title}
              </span>
              <span className="text-white/40">|</span>
              <span className="text-[11px]">
                {String(lightboxIndex + 1).padStart(2, "0")} /{" "}
                {String(ALL_PHOTOS.length).padStart(2, "0")}
              </span>
            </div>

            {/* Close Button */}
            <button
              onClick={() => setLightboxIndex(null)}
              className="flex items-center gap-2 px-3 py-1.5 rounded-xs border border-white/20 text-[#f5ede0] hover:bg-white/10 hover:text-white transition-colors focus:outline-none focus:ring-1 focus:ring-white/50 cursor-pointer"
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
          <div className="relative flex-1 flex items-center justify-center my-3 sm:my-6 overflow-hidden">
            {/* Previous Button */}
            <button
              onClick={() =>
                setLightboxIndex(
                  (prev) =>
                    prev !== null
                      ? (prev - 1 + ALL_PHOTOS.length) % ALL_PHOTOS.length
                      : null
                )
              }
              className="absolute left-2 sm:left-4 z-10 w-11 h-11 rounded-full bg-black/50 border border-white/20 hover:bg-white/20 text-white flex items-center justify-center transition-colors focus:outline-none focus:ring-1 focus:ring-white/50 cursor-pointer"
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
                    prev !== null ? (prev + 1) % ALL_PHOTOS.length : null
                )
              }
              className="absolute right-2 sm:right-4 z-10 w-11 h-11 rounded-full bg-black/50 border border-white/20 hover:bg-white/20 text-white flex items-center justify-center transition-colors focus:outline-none focus:ring-1 focus:ring-white/50 cursor-pointer"
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
          <div className="w-full flex flex-col sm:flex-row items-center justify-between text-[#a89d8f] text-[11px] pt-3 border-t border-white/10 gap-2">
            <p className="font-light tracking-wide max-w-xl text-center sm:text-left">
              {activePhoto.caption}
            </p>
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
