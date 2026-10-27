"use client";

import { useState } from "react";
import Link from "next/link";

export default function GamingPage() {
  const [activeTab, setActiveTab] = useState("All");

  const highlights = [
    {
      title: "Clutch Rounds & Competitive Highlights",
      category: "TACTICAL SHOOTER · VALORANT / CS2",
      desc: "High-stakes clutch moments, crosshair placement discipline, and site retakes captured in 144Hz high refresh.",
      tag: "Competitive",
      linkText: "Watch Clip on @_om_x_aryan",
    },
    {
      title: "Esports Tournaments & Scrims",
      category: "ESPORTS · TEAM PLAY",
      desc: "Strategic utility usage, mid-round calling, and coordinated site executions with college esports squads.",
      tag: "Competitive",
      linkText: "View Highlights",
    },
    {
      title: "Story-Driven Cinematic Journeys",
      category: "IMMERSIVE · AAA TITLES",
      desc: "Exploring worldbuilding, atmosphere, and visual narrative masterpieces like Elden Ring, Cyberpunk 2077, and God of War.",
      tag: "Immersive",
      linkText: "View Screenshots",
    },
    {
      title: "Battle Station & Audio Gear",
      category: "HARDWARE · SETUP",
      desc: "Ultra-low latency mechanical switches, precision optical sensors, custom curved display, and tuned audio monitors.",
      tag: "Setup",
      linkText: "Inspect Rig",
    },
    {
      title: "Gaming Creator Reels & Clips",
      category: "CONTENT · SOCIAL SHORTS",
      desc: "Fast-paced editing, sync with upbeat audio, and gaming humor posted regularly on Instagram @_om_x_aryan.",
      tag: "Content",
      linkText: "Open Reels ↗",
    },
  ];

  const filteredHighlights =
    activeTab === "All"
      ? highlights
      : highlights.filter((h) => h.tag === activeTab);

  return (
    <div className="min-h-screen bg-[#f8eddb] text-[#211e19]">
      {/* Header */}
      <header className="w-full flex items-center justify-between px-6 sm:px-10 lg:px-14 py-6 sm:py-8 border-b border-[rgba(91,68,43,0.15)]">
        <Link href="/" className="flex items-center gap-3.5">
          <span className="w-5 h-5 flex items-center justify-center border-2 border-[#211e19] rotate-45">
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
          <Link href="/gaming" className="text-[#211e19] font-bold">
            Gaming
          </Link>
          <span className="text-[#a89580]">—</span>
          <Link href="/contact" className="hover:text-[#211e19] transition-colors">
            Contact
          </Link>
        </nav>

        <div className="flex items-center gap-2 text-[9px] tracking-[0.2em] text-[#77573a] uppercase font-medium">
          <span className="w-1.5 h-1.5 rounded-full bg-[#77573a]" />
          <span>Esports &amp; Gaming Persona / 2026</span>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-6 sm:px-10 py-12 sm:py-16">
        {/* Hero Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 pb-8 border-b border-[rgba(91,68,43,0.15)]">
          <div>
            <span className="text-[10px] font-semibold tracking-[0.25em] text-[#b49368] uppercase block mb-3">
              GAMING &amp; ESPORTS
            </span>
            <h1 className="font-['Playfair_Display'] text-4xl sm:text-5xl md:text-6xl font-normal leading-tight text-[#211e19] mb-4">
              Precision. Reflexes.
              <br />
              <span className="italic text-[#b49368]">Competitive Flow.</span>
            </h1>
            <p className="text-sm sm:text-base text-[#5e5246] max-w-xl font-light font-sans leading-relaxed">
              When not training neural networks or capturing heritage landscapes, I dive into high-tier tactical shooters, competitive scrims, and gaming content creation under <strong className="text-[#211e19]">@_om_x_aryan</strong>.
            </p>
          </div>

          {/* Social Badge */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
            <a
              href="https://www.instagram.com/_om_x_aryan/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1 rounded-full border border-[rgba(91,68,43,0.3)] bg-[#fcf7ee] !text-[#211e19] text-[10px] font-semibold tracking-wider hover:bg-[#211e19] hover:!text-[#f8eddb] hover:border-[#211e19] transition-all duration-200 shadow-2xs inline-flex items-center gap-1.5"
            >
              <span>Follow Gaming: @_om_x_aryan</span>
              <span>↗</span>
            </a>
          </div>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 mb-10 text-xs font-medium">
          {["All", "Competitive", "Immersive", "Setup", "Content"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-3 py-1 rounded-full transition-all duration-200 cursor-pointer text-[10px] font-semibold tracking-wider ${
                activeTab === tab
                  ? "bg-[#211e19] !text-[#f8eddb] border border-[#211e19] shadow-xs"
                  : "border border-[rgba(91,68,43,0.3)] bg-[#fcf7ee] !text-[#211e19] hover:bg-[#211e19] hover:!text-[#f8eddb] hover:border-[#211e19] shadow-2xs"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Highlights Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredHighlights.map((item, i) => (
            <div
              key={i}
              className="p-7 bg-[#fcf7ee] border border-[rgba(91,68,43,0.18)] rounded-xl flex flex-col justify-between min-h-[250px] group transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_10px_25px_rgba(91,68,43,0.12)] hover:border-[rgba(180,147,104,0.4)]"
            >
              <div>
                <span className="text-[10px] tracking-[0.2em] font-semibold text-[#806648] uppercase block mb-3">
                  {item.category}
                </span>
                <h3 className="font-['Playfair_Display'] text-2xl font-normal text-[#211e19] mb-2 group-hover:text-[#b49368] transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-[#5e5246] leading-relaxed font-sans mt-2">
                  {item.desc}
                </p>
              </div>

              <div className="flex items-center justify-between pt-5 border-t border-[rgba(91,68,43,0.15)] mt-6">
                <a
                  href="https://www.instagram.com/_om_x_aryan/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1 rounded-full border border-[rgba(91,68,43,0.3)] bg-[#fcf7ee] !text-[#211e19] text-[10px] font-semibold tracking-wider hover:bg-[#211e19] hover:!text-[#f8eddb] hover:border-[#211e19] transition-all duration-200 shadow-2xs inline-flex items-center gap-1.5"
                >
                  <span>{item.linkText}</span>
                  <span>→</span>
                </a>
                <span className="text-sm text-[#b49368] transform group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform duration-200">
                  →
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Back and Profile Summary Footer */}
        <div className="mt-16 p-6 sm:p-7 rounded-xl bg-[#211e19] !text-[#f8eddb] border border-[rgba(180,147,104,0.35)] shadow-[0_8px_24px_rgba(33,30,25,0.15)] flex flex-col sm:flex-row sm:items-center justify-between gap-5">
          <div>
            <h3 className="font-['Playfair_Display'] text-lg sm:text-xl font-normal !text-[#f8eddb] mb-1">
              Connect on the Battlefield
            </h3>
            <p className="text-xs sm:text-[13px] !text-[#d6c4ad] leading-relaxed max-w-xl font-sans">
              Catch live highlight reels, setup updates, and tournament montages at <strong className="!text-[#f8eddb]">@_om_x_aryan</strong> on Instagram.
            </p>
          </div>

          <div className="flex items-center gap-2.5 shrink-0">
            <a
              href="https://www.instagram.com/_om_x_aryan/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1 rounded-full border border-[rgba(91,68,43,0.3)] bg-[#fcf7ee] !text-[#211e19] text-[10px] font-semibold tracking-wider hover:bg-[#211e19] hover:!text-[#f8eddb] hover:border-[#211e19] transition-all duration-200 shadow-2xs inline-flex items-center gap-1.5 whitespace-nowrap shrink-0"
            >
              <span>Open Instagram</span>
              <span aria-hidden="true">↗</span>
            </a>
            <Link
              href="/"
              className="px-3 py-1 rounded-full border border-[rgba(91,68,43,0.3)] bg-[#fcf7ee] !text-[#211e19] text-[10px] font-semibold tracking-wider hover:bg-[#211e19] hover:!text-[#f8eddb] hover:border-[#211e19] transition-all duration-200 shadow-2xs inline-flex items-center gap-1.5"
            >
              Overview ←
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
