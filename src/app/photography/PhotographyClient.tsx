"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";

interface GalleryPhoto {
  id: string;
  title: string;
  category: "Portraits" | "Landscapes" | "Heritage";
  caption: string;
  src: string;
  aspect: "portrait" | "landscape";
  aspectRatio?: string;
  objectFit?: "cover" | "contain";
  camera: string;
  credit: string;
  instagramUrl: string;
}

export default function PhotographyPage() {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const collections = [
    {
      title: "Portraits & Human Nuance",
      slug: "portraits",
      count: "7 Curated Works",
      cover: "/images/portrait/kashmir-mountain-escape.jpg",
      desc: "Environmental portraiture observing expression, natural shadows, and character across heritage corridors.",
      handle: "@___aryan___patel",
    },
    {
      title: "Mountain Ridges & Dal Lake",
      slug: "landscapes",
      count: "9 Curated Works",
      cover: "/images/photography/Dal_Lake.jpeg",
      desc: "High-altitude Himalayan mountain vistas, Dal Lake shikaras, and mist-laden pine valleys.",
      handle: "@click_by_aryan",
    },
    {
      title: "Sandstone Domes & Sacred Heritage",
      slug: "heritage",
      count: "3 Curated Works",
      cover: "/images/photography/my-temple.jpg",
      desc: "Ancient sandstone bastions, sacred temple sanctums, and timeless architectural geometry across India.",
      handle: "@click_by_aryan",
    },
  ];

  const photos: GalleryPhoto[] = [
    // --- PORTRAITS ---
    {
      id: "kashmir-mountain-escape",
      title: "Where Mountains Call — Kashmir Valley",
      category: "Portraits",
      caption:
        "Travel. Breathe. Escape. Where the mountains call and the soul finds peace — Environmental portrait framed by sweeping Himalayan ridges and serene Kashmir vistas.",
      src: "/images/portrait/kashmir-mountain-escape-original.jpg",
      aspect: "portrait",
      aspectRatio: "3 / 4",
      objectFit: "contain",
      camera: "Mountain Expedition · Kashmir Series",
      credit: "@___aryan___patel",
      instagramUrl: "https://www.instagram.com/p/DZXLiVIjNKg/",
    },
    {
      id: "chittorgarh-heritage-portrait",
      title: "Loyalty & Heritage — Chittorgarh",
      category: "Portraits",
      caption:
        "A Good Blood Will Never Cheat, A Bad Blood Will Never Be Loyal — Capturing timeless poise, historic fort stone, and regal ambiance at Chittorgarh, Rajasthan.",
      src: "/images/portrait/chittorgarh-heritage-portrait-original.jpg",
      aspect: "portrait",
      aspectRatio: "3 / 4",
      objectFit: "contain",
      camera: "Field Capture · Rajasthan Heritage",
      credit: "@___aryan___patel",
      instagramUrl: "https://www.instagram.com/p/Decf_W-zsGN/",
    },
    {
      id: "sonmarg-mountain-portrait",
      title: "Mountain Story — Sonmarg Portrait",
      category: "Portraits",
      caption:
        "Letting the mountains rewrite my story — Natural light portrait captured with Canon optics amidst the high-altitude tranquility of Sonmarg, Kashmir.",
      src: "/images/portrait/sonmarg-mountain-portrait-original.jpg",
      aspect: "portrait",
      aspectRatio: "3 / 4",
      objectFit: "contain",
      camera: "Canon EOS · Sonmarg High Altitude",
      credit: "@___aryan___patel",
      instagramUrl: "https://www.instagram.com/p/DN8HhbGj6f9/",
    },
    {
      id: "aryan-pillared-court",
      title: "Pillared Heritage Corridor",
      category: "Portraits",
      caption:
        "Aryan Patel framed within the rhythmic stone pillars and soft ambient shadows of a Rajasthan heritage colonnade.",
      src: "/images/portrait/aryan-pillared-court.jpg",
      aspect: "portrait",
      camera: "Canon EOS 200D II · Adobe Lightroom",
      credit: "@___aryan___patel",
      instagramUrl: "https://www.instagram.com/___aryan___patel/",
    },
    {
      id: "aryan-final-portrait",
      title: "Editorial Studio Profile",
      category: "Portraits",
      caption:
        "Aryan Patel portrait study with warm directional key lighting highlighting composure and expression.",
      src: "/images/portrait/aryan-final.jpg",
      aspect: "portrait",
      camera: "Canon EOS 200D II · 50mm Prime · RAW",
      credit: "@___aryan___patel",
      instagramUrl: "https://www.instagram.com/___aryan___patel/",
    },
    {
      id: "my-garden-portrait",
      title: "Sunlit Foliage & Character",
      category: "Portraits",
      caption:
        "Natural ambient daylight portrait captured amidst lush botanical foliage and soft natural bokeh.",
      src: "/images/portrait/my-garden-portrait.JPG",
      aspect: "landscape",
      aspectRatio: "2170 / 1448",
      camera: "Natural Light · Field Capture",
      credit: "@___aryan___patel",
      instagramUrl: "https://www.instagram.com/___aryan___patel/",
    },
    {
      id: "my-road-portrait",
      title: "Cinematic Open Road",
      category: "Portraits",
      caption:
        "Open-air travel perspective along the highway capturing movement, freedom, and distant horizon lines.",
      src: "/images/portrait/my-road-portrait.jpg",
      aspect: "portrait",
      camera: "Ambient Daylight · Travel Series",
      credit: "@___aryan___patel",
      instagramUrl: "https://www.instagram.com/___aryan___patel/",
    },

    // --- LANDSCAPES ---
    {
      id: "dal-lake-shikaras",
      title: "Dal Lake Shikaras & Reflections",
      category: "Landscapes",
      caption:
        "Traditional wooden shikaras and houseboats resting peacefully on the glassy reflective surface of Dal Lake, Srinagar.",
      src: "/images/photography/Dal_Lake.jpeg",
      aspect: "landscape",
      aspectRatio: "1086 / 724",
      camera: "Canon EOS 200D II · Adobe Lightroom",
      credit: "@click_by_aryan",
      instagramUrl: "https://www.instagram.com/click_by_aryan/",
    },
    {
      id: "mountain-valley-vista",
      title: "High Mountain Valley Vista",
      category: "Landscapes",
      caption:
        "Sweeping high-altitude mountain panorama with misty blue ranges and pine canopy in Kashmir Valley.",
      src: "/images/photography/landscapes/mountain-valley-vista.jpg",
      aspect: "landscape",
      aspectRatio: "1024 / 768",
      camera: "Mountain Vista Panoramic",
      credit: "@click_by_aryan",
      instagramUrl: "https://www.instagram.com/click_by_aryan/",
    },
    {
      id: "mountain-fort-ridge",
      title: "High Fort Bastion Ramparts",
      category: "Landscapes",
      caption:
        "Dramatic stone fortress walls winding along rugged mountain crests under overcast atmospheric skies.",
      src: "/images/photography/landscapes/mountain-fort-ridge.jpg",
      aspect: "landscape",
      aspectRatio: "1024 / 682",
      camera: "Landscape Aperture · High Altitude",
      credit: "@click_by_aryan",
      instagramUrl: "https://www.instagram.com/click_by_aryan/",
    },
    {
      id: "kashmir-lake-houseboats",
      title: "Morning Mists over Lake",
      category: "Landscapes",
      caption:
        "Early dawn reflections and tranquil waters surrounding historic wooden houseboats in Kashmir valley.",
      src: "/images/photography/landscapes/kashmir-lake-houseboats.jpg",
      aspect: "landscape",
      aspectRatio: "1024 / 682",
      camera: "Low-Light Morning · Reflections",
      credit: "@click_by_aryan",
      instagramUrl: "https://www.instagram.com/click_by_aryan/",
    },
    {
      id: "sunset-rooftop-dusk",
      title: "Amber Dusk Horizon",
      category: "Landscapes",
      caption:
        "Warm golden hour rays illuminating rooftop silhouettes and tree canopies during sunset.",
      src: "/images/photography/landscapes/sunset-rooftop-dusk.jpg",
      aspect: "landscape",
      aspectRatio: "1024 / 682",
      camera: "Golden Hour · Silhouette Exposure",
      credit: "@click_by_aryan",
      instagramUrl: "https://www.instagram.com/click_by_aryan/",
    },
    {
      id: "chasing-lights-ferris-wheel",
      title: "Chasing Lights — Ferris Wheel at Dusk",
      category: "Landscapes",
      caption:
        "Chasing lights and childhood dreams 🎡✨ — High-exposure evening capture of a glowing carnival ferris wheel illuminating dusk skies in Bareilly.",
      src: "/images/photography/landscapes/chasing-lights-ferris-wheel.jpg",
      aspect: "portrait",
      aspectRatio: "1080 / 1350",
      camera: "OnePlus · Night Street Optics",
      credit: "@click_by_aryan",
      instagramUrl: "https://www.instagram.com/p/DKbKCfJzfAx/",
    },
    {
      id: "chittorgarh-sunset-ruins",
      title: "Centuries in Quiet — Chittorgarh Fort Sunset",
      category: "Landscapes",
      caption:
        "Sitting in the quiet presence of centuries gone by.. 🍂 — Golden hour sun rays descending over the timeless stone battlements and historic ramparts of Chittorgarh Fort.",
      src: "/images/photography/landscapes/chittorgarh-sunset-ruins.jpg",
      aspect: "portrait",
      aspectRatio: "1080 / 1440",
      camera: "Canon EOS · Chittorgarh Sunset",
      credit: "@click_by_aryan",
      instagramUrl: "https://www.instagram.com/p/DeguOu4TFFN/",
    },
    {
      id: "amber-fort-frames-of-history",
      title: "Frames of History — Amber Fort",
      category: "Landscapes",
      caption:
        "Frames of history — Historic arched stone windows framing scenic vistas across Amber Fort's rugged mountain battlements and royal Rajasthan terrain.",
      src: "/images/photography/landscapes/amber-fort-frames-of-history.jpg",
      aspect: "landscape",
      aspectRatio: "1080 / 720",
      camera: "Canon EOS · Amber Fort Panoramas",
      credit: "@click_by_aryan",
      instagramUrl: "https://www.instagram.com/p/DeZHehET-Pg/",
    },
    {
      id: "jaigarh-fort-aravallis",
      title: "Above the Aravallis — Jaigarh Fort",
      category: "Landscapes",
      caption:
        "Where history rises above the Aravallis ✨🏰 — Grand defensive fort ramparts and watchtowers standing proudly along the rugged Aravalli mountain crests.",
      src: "/images/photography/landscapes/jaigarh-fort-aravallis.jpg",
      aspect: "landscape",
      aspectRatio: "1080 / 720",
      camera: "Canon EOS · Jaigarh Ridge Aperture",
      credit: "@click_by_aryan",
      instagramUrl: "https://www.instagram.com/p/DetJNgmzmRn/",
    },

    // --- HERITAGE & ARCHITECTURE ---
    {
      id: "sacred-temple-sanctum",
      title: "Sacred Temple Sanctum & Carvings",
      category: "Heritage",
      caption:
        "Ancient carved sandstone pillars and sacred inner sanctum captured with deep tonal fidelity and natural illumination.",
      src: "/images/photography/my-temple.jpg",
      aspect: "portrait",
      aspectRatio: "4000 / 6000",
      camera: "Canon EOS 200D II · 50mm Lens · RAW",
      credit: "@click_by_aryan",
      instagramUrl: "https://www.instagram.com/click_by_aryan/",
    },
    {
      id: "sandstone-domes",
      title: "Royal Sandstone Palace Domes",
      category: "Heritage",
      caption:
        "Intricately carved sandstone cupolas of historic Rajasthan palace architecture set against a crisp cyan-teal sky.",
      src: "/images/photography/landscapes/palace-sandstone-domes.jpg",
      aspect: "landscape",
      aspectRatio: "1024 / 682",
      camera: "Architectural Symmetry · Sandstone",
      credit: "@click_by_aryan",
      instagramUrl: "https://www.instagram.com/click_by_aryan/",
    },
    {
      id: "vintage-chandelier",
      title: "Monochrome Chandelier Study",
      category: "Heritage",
      caption:
        "High-contrast black-and-white architectural interior study of filigree brass lamps and vintage ambient illumination.",
      src: "/images/photography/landscapes/vintage-chandelier-lights.jpg",
      aspect: "portrait",
      aspectRatio: "682 / 1024",
      camera: "Monochrome Tonal Grading",
      credit: "@click_by_aryan",
      instagramUrl: "https://www.instagram.com/click_by_aryan/",
    },
  ];

  const filteredPhotos =
    activeCategory === "All"
      ? photos
      : photos.filter((p) => p.category === activeCategory);

  // Keyboard navigation for lightbox
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === "Escape") {
        setLightboxIndex(null);
      } else if (e.key === "ArrowLeft") {
        setLightboxIndex((prev) =>
          prev === null ? null : (prev - 1 + filteredPhotos.length) % filteredPhotos.length
        );
      } else if (e.key === "ArrowRight") {
        setLightboxIndex((prev) =>
          prev === null ? null : (prev + 1) % filteredPhotos.length
        );
      }
    },
    [lightboxIndex, filteredPhotos.length]
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

  const activePhoto =
    lightboxIndex !== null && filteredPhotos[lightboxIndex]
      ? filteredPhotos[lightboxIndex]
      : null;

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
          <Link href="/photography" className="text-[#211e19] font-bold">
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
          <span>Visual Arts &amp; Archives / 2026</span>
        </div>
      </header>

      {/* Hero Header Section */}
      <section className="relative w-full max-w-6xl mx-auto px-6 sm:px-10 pt-10 sm:pt-14 pb-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-[rgba(91,68,43,0.18)]">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="text-[10.5px] font-semibold tracking-[0.25em] text-[#b49368] uppercase">
                PHOTOGRAPHY &amp; VISUAL ARTS
              </span>
              <span className="text-[#a89580]">•</span>
              <span className="text-[10px] font-medium tracking-[0.15em] text-[#77573a] uppercase">
                Canon EOS 200D II
              </span>
            </div>
            <h1 className="font-['Playfair_Display'] text-4xl sm:text-5xl md:text-6xl font-normal leading-tight text-[#211e19] mb-3">
              Moments, Framed in Time
            </h1>
            <p className="text-[#554739] text-base max-w-xl font-sans leading-relaxed">
              Curated environmental portraiture, Himalayan vistas across Dal Lake, and sacred Indian heritage architecture captured with deliberate composition and natural light.
            </p>
          </div>

          {/* Camera Workflow Badge */}
          <div className="p-4 bg-[#f0e4d2] border border-[rgba(91,68,43,0.18)] rounded-xl text-xs max-w-xs shadow-2xs">
            <span className="text-[9.5px] tracking-[0.2em] font-semibold text-[#806648] uppercase block mb-1">
              OPTICS &amp; WORKFLOW
            </span>
            <p className="text-[#44382c] text-[11px] leading-relaxed">
              Shot on Canon EOS 200D II with prime and zoom lenses, developed in Adobe Lightroom for organic tonal depth and rich shadows.
            </p>
          </div>
        </div>

        {/* Live Instagram Archives Banner */}
        <div className="mt-8 p-6 bg-[#fcf7ee] border border-[rgba(91,68,43,0.18)] rounded-xl flex flex-col md:flex-row md:items-center justify-between gap-6 shadow-xs">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <span className="w-2 h-2 rounded-full bg-[#b49368] animate-pulse" />
              <span className="text-[10px] tracking-[0.22em] font-semibold text-[#806648] uppercase">
                AUTHENTIC SOCIAL ARCHIVES
              </span>
            </div>
            <p className="text-xs sm:text-sm text-[#3e342a] max-w-2xl leading-relaxed">
              Explore live travel expeditions, high-altitude field stories, and RAW camera captures on Instagram{" "}
              <strong className="text-[#211e19]">@click_by_aryan</strong>, and personal portrait milestones on{" "}
              <strong className="text-[#211e19]">@___aryan___patel</strong>.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2.5 shrink-0">
            <a
              href="https://www.instagram.com/click_by_aryan/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1 rounded-full border border-[rgba(91,68,43,0.3)] bg-[#fcf7ee] !text-[#211e19] text-[10px] font-semibold tracking-wider hover:bg-[#211e19] hover:!text-[#f8eddb] hover:border-[#211e19] transition-all duration-200 shadow-2xs inline-flex items-center gap-1.5"
            >
              <span>Photo: @click_by_aryan</span>
              <span>↗</span>
            </a>
            <a
              href="https://www.instagram.com/___aryan___patel/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1 rounded-full border border-[rgba(91,68,43,0.3)] bg-[#fcf7ee] !text-[#211e19] text-[10px] font-semibold tracking-wider hover:bg-[#211e19] hover:!text-[#f8eddb] hover:border-[#211e19] transition-all duration-200 shadow-2xs inline-flex items-center gap-1.5"
            >
              <span>Personal: @___aryan___patel</span>
              <span>↗</span>
            </a>
          </div>
        </div>

        {/* Curated Collection Highlight Cards */}
        <div className="mt-10 mb-6">
          <div className="flex items-center justify-between mb-4">
            <span className="text-[10.5px] tracking-[0.2em] font-semibold text-[#806648] uppercase">
              Curated Collections
            </span>
            <span className="text-xs text-[#77573a]">
              Click any collection to deep dive
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {collections.map((c) => (
              <Link
                key={c.slug}
                href={`/photography/${c.slug}`}
                className="group block bg-[#fcf7ee] border border-[rgba(91,68,43,0.18)] rounded-xl overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_10px_25px_rgba(91,68,43,0.12)] hover:border-[rgba(180,147,104,0.4)]"
              >
                <div className="relative aspect-4/3 overflow-hidden bg-[#e6d8c3]">
                  <Image
                    src={c.cover}
                    alt={c.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 380px"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4 text-white">
                    <span className="text-[10px] tracking-widest uppercase font-semibold">
                      Open Collection →
                    </span>
                  </div>
                </div>
                <div className="p-5">
                  <div className="flex justify-between items-center text-[10px] tracking-[0.18em] font-semibold text-[#806648] uppercase mb-1.5">
                    <span>{c.handle}</span>
                    <span>{c.count}</span>
                  </div>
                  <h3 className="font-['Playfair_Display'] text-xl font-normal text-[#211e19] mb-1.5 group-hover:text-[#b49368] transition-colors">
                    {c.title}
                  </h3>
                  <p className="text-xs text-[#665747] font-sans leading-relaxed">
                    {c.desc}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Main Photographic Works Gallery */}
      <main className="max-w-6xl mx-auto px-6 sm:px-10 pb-20">
        {/* Category Filter Tabs */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 pt-6 border-t border-[rgba(91,68,43,0.15)]">
          <div className="flex flex-wrap items-center gap-2 text-xs font-medium">
            {["All", "Portraits", "Landscapes", "Heritage"].map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3 py-1 rounded-full transition-all duration-200 cursor-pointer text-[10px] font-semibold tracking-wider ${activeCategory === cat
                    ? "bg-[#211e19] !text-[#f8eddb] border border-[#211e19] shadow-xs"
                    : "border border-[rgba(91,68,43,0.3)] bg-[#fcf7ee] !text-[#211e19] hover:bg-[#211e19] hover:!text-[#f8eddb] hover:border-[#211e19] shadow-2xs"
                  }`}
              >
                {cat === "All"
                  ? "All Frames"
                  : cat === "Portraits"
                    ? "Portraits (@___aryan___patel)"
                    : cat === "Landscapes"
                      ? "Landscapes & Dal Lake"
                      : "Sacred & Heritage"}
              </button>
            ))}
          </div>

          <span className="text-xs text-[#77573a]">
            Showing {filteredPhotos.length} photograph{filteredPhotos.length !== 1 ? "s" : ""}
          </span>
        </div>

        {/* Gallery Grid (All Portraits in uniform 3:4 aspect ratio, Landscapes in wide frames) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7 items-start">
          {filteredPhotos.map((photo, index) => {
            const isPortraitCategory = photo.category === "Portraits";
            const isPortraitAspect = photo.aspect === "portrait";

            return (
              <div
                key={photo.id}
                onClick={() => setLightboxIndex(index)}
                className="group bg-[#fcf7ee] border border-[rgba(91,68,43,0.18)] rounded-xl overflow-hidden flex flex-col justify-between shadow-[0_2px_10px_rgba(91,68,43,0.05)] hover:shadow-[0_10px_25px_rgba(91,68,43,0.12)] hover:-translate-y-1.5 hover:border-[rgba(180,147,104,0.4)] transition-all duration-300 cursor-pointer"
                role="button"
                tabIndex={0}
                aria-label={`View photo: ${photo.title}`}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    setLightboxIndex(index);
                  }
                }}
              >
                {/* Photo Header Pill */}
                <div className="px-4 py-2.5 bg-[#f0e4d2] border-b border-[rgba(91,68,43,0.15)] flex items-center justify-between text-[10px] tracking-wider text-[#77573a]">
                  <span className="font-semibold text-[#806648] uppercase">
                    {photo.category}
                  </span>
                  <span className="font-mono text-[#44382c]">
                    {photo.credit}
                  </span>
                </div>

                {/* Photo Image Frame: Exact 3:4 aspect ratio for portraits, respects original ratio when specified (e.g. Sunlit Foliage) */}
                <div
                  className={`relative w-full overflow-hidden bg-[#211e19]/5 flex items-center justify-center ${
                    photo.aspectRatio
                      ? ""
                      : isPortraitCategory || isPortraitAspect
                      ? "aspect-[3/4]"
                      : "aspect-[16/10]"
                  }`}
                  style={
                    photo.aspectRatio
                      ? { aspectRatio: photo.aspectRatio }
                      : isPortraitCategory || isPortraitAspect
                      ? { aspectRatio: "3 / 4" }
                      : undefined
                  }
                >
                  <Image
                    src={photo.src}
                    alt={photo.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className={
                      photo.objectFit === "contain"
                        ? "object-contain"
                        : "object-cover object-center"
                    }
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-between p-4 text-white pointer-events-none">
                    <span className="text-[10px] tracking-widest uppercase font-medium">
                      Expand Full View ⤢
                    </span>
                    <span className="text-[10px] font-mono opacity-80">
                      {photo.camera}
                    </span>
                  </div>
                </div>

                {/* Photo Description Body (High Contrast Cream & Ink) */}
                <div className="p-5 flex flex-col justify-between flex-1">
                  <div>
                    <h3 className="font-['Playfair_Display'] text-xl font-normal text-[#211e19] mb-2 group-hover:text-[#b49368] transition-colors">
                      {photo.title}
                    </h3>
                    <p className="text-xs text-[#554739] leading-relaxed font-sans mb-3">
                      {photo.caption}
                    </p>
                  </div>

                  {/* Metadata & Direct Links */}
                  <div className="pt-3 border-t border-[rgba(91,68,43,0.12)] flex items-center justify-between gap-2">
                    <span className="text-[10px] text-[#806648] font-mono truncate max-w-[120px]">
                      {photo.camera}
                    </span>
                    <div className="flex items-center gap-1.5 shrink-0">
                      {photo.credit.includes("@___aryan___patel") ? (
                        <a
                          href="https://www.instagram.com/___aryan___patel/"
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="px-2.5 py-1 rounded-full border border-[rgba(91,68,43,0.3)] bg-[#fcf7ee] !text-[#211e19] text-[10px] font-semibold tracking-wider hover:bg-[#211e19] hover:!text-[#f8eddb] hover:border-[#211e19] transition-all duration-200 shadow-2xs inline-flex items-center gap-1"
                          aria-label="View @___aryan___patel profile on Instagram"
                        >
                          <span>@___aryan___patel</span>
                          <span>↗</span>
                        </a>
                      ) : (
                        <a
                          href="https://www.instagram.com/click_by_aryan/"
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="px-2.5 py-1 rounded-full border border-[rgba(91,68,43,0.3)] bg-[#fcf7ee] !text-[#211e19] text-[10px] font-semibold tracking-wider hover:bg-[#211e19] hover:!text-[#f8eddb] hover:border-[#211e19] transition-all duration-200 shadow-2xs inline-flex items-center gap-1"
                          aria-label="View @click_by_aryan profile on Instagram"
                        >
                          <span>@click_by_aryan</span>
                          <span>↗</span>
                        </a>
                      )}
                      {photo.instagramUrl.includes("/p/") && (
                        <a
                          href={photo.instagramUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="px-2.5 py-1 rounded-full border border-[rgba(180,147,104,0.4)] bg-[#f0e4d2] !text-[#211e19] text-[10px] font-semibold tracking-wider hover:bg-[#211e19] hover:!text-[#f8eddb] hover:border-[#211e19] transition-all duration-200 shadow-2xs inline-flex items-center gap-1"
                          aria-label={`View ${photo.title} post on Instagram`}
                        >
                          <span>Post</span>
                          <span>↗</span>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </main>

      {/* Interactive Lightbox Modal */}
      {lightboxIndex !== null && activePhoto && (
        <div
          className="fixed inset-0 z-50 bg-[#120f0c]/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8"
          onClick={() => setLightboxIndex(null)}
          role="dialog"
          aria-modal="true"
        >
          {/* Modal Content Container */}
          <div
            className="relative max-w-5xl w-full max-h-[90vh] bg-[#f8eddb] border border-[rgba(91,68,43,0.3)] rounded-lg overflow-hidden flex flex-col md:flex-row shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setLightboxIndex(null)}
              className="absolute top-3 right-3 z-20 w-8 h-8 rounded-full bg-[#211e19] !text-[#f8eddb] flex items-center justify-center hover:bg-[#3d3228] transition-colors cursor-pointer text-sm font-bold"
              aria-label="Close modal"
            >
              <span className="text-[#f8eddb]">✕</span>
            </button>

            {/* Left: Full Photo View */}
            <div className="relative md:w-3/5 bg-[#171411] flex items-center justify-center min-h-[360px] md:min-h-[560px]">
              <Image
                src={activePhoto.src}
                alt={activePhoto.title}
                fill
                sizes="(max-width: 768px) 100vw, 800px"
                className="object-contain"
                priority
              />

              {/* Prev / Next controls over photo */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setLightboxIndex(
                    (lightboxIndex - 1 + filteredPhotos.length) % filteredPhotos.length
                  );
                }}
                className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-black/90 transition-colors"
                aria-label="Previous photo"
              >
                ‹
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setLightboxIndex((lightboxIndex + 1) % filteredPhotos.length);
                }}
                className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-black/90 transition-colors"
                aria-label="Next photo"
              >
                ›
              </button>
            </div>

            {/* Right: Curated Photo Details Panel */}
            <div className="md:w-2/5 p-6 sm:p-8 flex flex-col justify-between bg-[#fcf7ee]">
              <div>
                <div className="flex items-center justify-between text-[10px] tracking-[0.2em] font-semibold text-[#806648] uppercase mb-2">
                  <span>{activePhoto.category} ARCHIVE</span>
                  <span>
                    {lightboxIndex + 1} / {filteredPhotos.length}
                  </span>
                </div>

                <h2 className="font-['Playfair_Display'] text-2xl sm:text-3xl text-[#211e19] font-normal mb-3">
                  {activePhoto.title}
                </h2>

                <p className="text-xs sm:text-sm text-[#44382c] leading-relaxed font-sans mb-6">
                  {activePhoto.caption}
                </p>

                {/* Camera Technical Notes */}
                <div className="space-y-2.5 p-4 bg-[#f0e4d2] rounded border border-[rgba(91,68,43,0.18)] text-xs">
                  <div className="flex justify-between">
                    <span className="text-[#77573a]">Optics</span>
                    <span className="text-[#211e19] font-medium">{activePhoto.camera}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-[#77573a]">Attribution</span>
                    <div className="flex items-center gap-2">
                      {activePhoto.credit.includes("@___aryan___patel") && (
                        <a
                          href="https://www.instagram.com/___aryan___patel/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[#211e19] font-medium underline underline-offset-2 hover:text-[#b49368] transition-colors"
                        >
                          @___aryan___patel ↗
                        </a>
                      )}
                      {activePhoto.credit.includes("@click_by_aryan") && (
                        <a
                          href="https://www.instagram.com/click_by_aryan/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[#211e19] font-medium underline underline-offset-2 hover:text-[#b49368] transition-colors"
                        >
                          @click_by_aryan ↗
                        </a>
                      )}
                    </div>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#77573a]">Orientation</span>
                    <span className="text-[#211e19] font-medium uppercase text-[10px]">
                      {activePhoto.aspect}
                    </span>
                  </div>
                </div>
              </div>

              {/* Bottom Actions */}
              <div className="pt-6 border-t border-[rgba(91,68,43,0.15)] flex items-center justify-between gap-3">
                <div className="flex items-center gap-2">
                  {activePhoto.instagramUrl.includes("/p/") ? (
                    <a
                      href={activePhoto.instagramUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1.5 rounded-full border border-[rgba(91,68,43,0.3)] bg-[#fcf7ee] !text-[#211e19] text-[11px] font-semibold tracking-wider hover:bg-[#211e19] hover:!text-[#f8eddb] hover:border-[#211e19] transition-all duration-200 shadow-2xs inline-flex items-center gap-1.5"
                    >
                      <span>Open Instagram Post</span>
                      <span>↗</span>
                    </a>
                  ) : activePhoto.credit.includes("@___aryan___patel") ? (
                    <a
                      href="https://www.instagram.com/___aryan___patel/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1.5 rounded-full border border-[rgba(91,68,43,0.3)] bg-[#fcf7ee] !text-[#211e19] text-[11px] font-semibold tracking-wider hover:bg-[#211e19] hover:!text-[#f8eddb] hover:border-[#211e19] transition-all duration-200 shadow-2xs inline-flex items-center gap-1.5"
                    >
                      <span>Open @___aryan___patel</span>
                      <span>↗</span>
                    </a>
                  ) : (
                    <a
                      href="https://www.instagram.com/click_by_aryan/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1.5 rounded-full border border-[rgba(91,68,43,0.3)] bg-[#fcf7ee] !text-[#211e19] text-[11px] font-semibold tracking-wider hover:bg-[#211e19] hover:!text-[#f8eddb] hover:border-[#211e19] transition-all duration-200 shadow-2xs inline-flex items-center gap-1.5"
                    >
                      <span>Open @click_by_aryan</span>
                      <span>↗</span>
                    </a>
                  )}
                </div>

                <button
                  onClick={() => setLightboxIndex(null)}
                  className="text-xs text-[#77573a] hover:text-[#211e19] uppercase tracking-wider font-semibold"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
