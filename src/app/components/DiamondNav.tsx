"use client";

import { useEffect, useState, useMemo, useSyncExternalStore } from "react";
import { createPortal } from "react-dom";

const subscribe = () => () => {};

interface SectionItem {
  id: string;
  label: string;
}

const SECTIONS: SectionItem[] = [
  { id: "hero", label: "Overview" },
  { id: "about", label: "About" },
  { id: "work", label: "Selected Works" },
  { id: "contact", label: "Contact" },
];

export default function DiamondNav() {
  const [activeId, setActiveId] = useState<string>("hero");
  const mounted = useSyncExternalStore(
    subscribe,
    () => true,
    () => false
  );

  const activeIndex = useMemo(() => {
    const idx = SECTIONS.findIndex((s) => s.id === activeId);
    return idx >= 0 ? idx : 0;
  }, [activeId]);

  useEffect(() => {
    if (!mounted) return;

    // Detect section based on scroll position & intersection in both directions
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      // Top of page -> Hero
      if (scrollY < 120) {
        setActiveId("hero");
        return;
      }

      // Bottom of page -> Contact
      if (scrollY + windowHeight >= documentHeight - 60) {
        setActiveId("contact");
        return;
      }

      // Focal center detection (45% down viewport)
      const focalPoint = scrollY + windowHeight * 0.45;
      let currentSection = "hero";

      for (const section of SECTIONS) {
        const el = document.getElementById(section.id);
        if (el) {
          const top = el.offsetTop;
          if (focalPoint >= top) {
            currentSection = section.id;
          }
        }
      }

      setActiveId(currentSection);
    };

    // IntersectionObserver for directional entry triggers
    const observerCallback: IntersectionObserverCallback = (entries) => {
      const visibleEntries = entries.filter((e) => e.isIntersecting);
      if (visibleEntries.length > 0) {
        visibleEntries.sort(
          (a, b) => b.intersectionRatio - a.intersectionRatio
        );
        const topVisible = visibleEntries[0];
        if (topVisible && topVisible.target.id) {
          setActiveId(topVisible.target.id);
        }
      }
    };

    const observer = new IntersectionObserver(observerCallback, {
      root: null,
      rootMargin: "-25% 0px -35% 0px",
      threshold: [0.1, 0.3, 0.6],
    });

    SECTIONS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, [mounted]);

  const handleNavClick = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      setActiveId(id);
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  if (!mounted) return null;

  // Item pitch: 32px height button + 14px gap = 46px per step
  const ITEM_PITCH = 46;

  const navContent = (
    <nav
      aria-label="Section navigation"
      className="fixed right-[28px] top-1/2 -translate-y-1/2 z-50 flex flex-col items-center select-none"
      style={{
        position: "fixed",
        right: "28px",
        top: "50%",
        transform: "translateY(-50%)",
      }}
    >
      {/* Subtle translucent glass pillar container */}
      <div className="relative flex flex-col items-center gap-[14px] p-2 py-3 rounded-full bg-white/[0.05] backdrop-blur-md border border-white/20 shadow-[0_4px_24px_rgba(0,0,0,0.25),0_0_12px_rgba(255,255,255,0.06)] transition-all duration-300">
        
        {/* Vertical crystal track line */}
        <div
          className="absolute top-5 bottom-5 w-[1px] bg-gradient-to-b from-white/10 via-white/35 to-white/10 pointer-events-none"
          aria-hidden="true"
        />

        {/* Soft white glow aura smoothly following the active diamond */}
        <div
          className="absolute w-8 h-8 rounded-full pointer-events-none transition-transform duration-500 ease-[cubic-bezier(0.25,1,0.5,1)]"
          style={{
            top: "12px",
            transform: `translateY(${activeIndex * ITEM_PITCH}px)`,
            background:
              "radial-gradient(circle, rgba(255, 255, 255, 0.28) 0%, rgba(255, 255, 255, 0) 70%)",
            filter: "blur(3px)",
          }}
          aria-hidden="true"
        />

        {SECTIONS.map((section, idx) => {
          const isActive = idx === activeIndex;

          return (
            <button
              key={section.id}
              onClick={() => handleNavClick(section.id)}
              aria-label={`Navigate to ${section.label}`}
              aria-current={isActive ? "true" : undefined}
              className="group relative flex items-center justify-center w-8 h-8 rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-white/80 transition-transform duration-300 hover:scale-110"
            >
              {/* Tooltip label appearing to the left on hover */}
              <span
                role="tooltip"
                className="absolute right-10 px-2.5 py-1 text-[10px] font-medium tracking-[0.18em] uppercase text-white bg-black/80 backdrop-blur-md rounded border border-white/20 shadow-xl opacity-0 pointer-events-none transition-all duration-200 group-hover:opacity-100 group-hover:-translate-x-1 whitespace-nowrap"
              >
                {section.label}
              </span>

              {/* Diamond SVG polygon */}
              <svg
                viewBox="0 0 24 24"
                className={`transition-all duration-300 ease-out ${
                  isActive
                    ? "w-[18px] h-[18px] drop-shadow-[0_0_8px_rgba(255,255,255,0.95)] drop-shadow-[0_0_16px_rgba(255,255,255,0.6)] scale-110"
                    : "w-[11px] h-[11px] opacity-40 hover:opacity-90 hover:drop-shadow-[0_0_6px_rgba(255,255,255,0.7)]"
                }`}
                aria-hidden="true"
              >
                <polygon
                  points="12,2 22,12 12,22 2,12"
                  fill={isActive ? "#FFFFFF" : "transparent"}
                  stroke="#FFFFFF"
                  strokeWidth={isActive ? "1" : "1.75"}
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          );
        })}
      </div>
    </nav>
  );

  return createPortal(navContent, document.body);
}
