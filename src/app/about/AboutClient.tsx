"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function AboutPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#f7ebd8] text-[#211e19] selection:bg-[#b49368] selection:text-white relative">
      {/* Subtle vintage parchment tone glow */}
      <div
        className="pointer-events-none fixed inset-0 opacity-40 mix-blend-multiply"
        style={{
          background:
            "radial-gradient(circle at 50% 15%, rgba(255,255,255,0.8) 0%, rgba(247,235,216,0.3) 50%, rgba(218,197,167,0.4) 100%)",
        }}
        aria-hidden="true"
      />

      {/* Header */}
      <header className="relative z-20 w-full max-w-6xl mx-auto px-6 sm:px-10 lg:px-12 py-7 sm:py-9 flex items-center justify-between">
        {/* Brand */}
        <Link href="/" className="flex items-center gap-3.5 group">
          <span className="w-5 h-5 flex items-center justify-center border-[1.5px] border-[#211e19] rotate-45 transition-transform duration-300 group-hover:rotate-90">
            <span className="w-1.5 h-1.5 bg-[#211e19]" />
          </span>
          <span className="font-['Playfair_Display'] text-[13px] sm:text-[14px] tracking-[0.24em] font-semibold uppercase text-[#211e19]">
            ARYAN PATEL
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8 text-[11px] font-semibold tracking-[0.2em] uppercase text-[#77573a]">
          <Link href="/" className="hover:text-[#211e19] transition-colors">
            HOME
          </Link>
          <Link href="/about" className="text-[#211e19] font-bold relative pb-1">
            ABOUT
            <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#5c8b93] rounded-full" />
          </Link>
          <Link href="/work" className="hover:text-[#211e19] transition-colors">
            WORK
          </Link>
          <Link href="/photography" className="hover:text-[#211e19] transition-colors">
            PHOTOGRAPHY
          </Link>
          <Link href="/gaming" className="hover:text-[#211e19] transition-colors">
            GAMING
          </Link>
          <Link href="/contact" className="hover:text-[#211e19] transition-colors">
            CONTACT
          </Link>
        </nav>

        {/* Right side status & mobile toggle */}
        <div className="flex items-center gap-3">
          <div className="hidden sm:flex items-center gap-2 text-[10px] tracking-[0.2em] text-[#77573a] uppercase font-medium">
            <span className="w-1.5 h-1.5 rounded-full bg-[#5c8b93]" />
            <span>AI & Visuals / 2026</span>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className="md:hidden p-1.5 text-[#211e19] text-xs font-semibold tracking-widest uppercase cursor-pointer"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? "CLOSE" : "MENU"}
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden px-6 py-4 bg-[#f1e3ce] border-b border-[rgba(91,68,43,0.15)] flex flex-col gap-3 text-xs font-semibold tracking-[0.2em] uppercase text-[#77573a]">
          <Link href="/" onClick={() => setMobileMenuOpen(false)}>
            HOME
          </Link>
          <Link href="/about" className="text-[#211e19] font-bold" onClick={() => setMobileMenuOpen(false)}>
            ABOUT
          </Link>
          <Link href="/work" onClick={() => setMobileMenuOpen(false)}>
            WORK
          </Link>
          <Link href="/photography" onClick={() => setMobileMenuOpen(false)}>
            PHOTOGRAPHY
          </Link>
          <Link href="/gaming" onClick={() => setMobileMenuOpen(false)}>
            GAMING
          </Link>
          <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>
            CONTACT
          </Link>
        </div>
      )}

      {/* Main Content Container */}
      <main className="relative z-10 max-w-5xl mx-auto px-6 sm:px-10 lg:px-12 pt-4 sm:pt-8 pb-20">
        {/* Top Hero / Intro Section */}
        <section className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 items-center mb-16 sm:mb-20">
          {/* Left Column: Bio & Text */}
          <div className="md:col-span-7 flex flex-col items-start">
            <span className="text-[11px] font-semibold tracking-[0.24em] text-[#8c704f] uppercase mb-3">
              ABOUT ME
            </span>

            <h1 className="font-['Playfair_Display'] text-3xl sm:text-4xl lg:text-[45px] font-normal leading-[1.12] tracking-tight text-[#211e19] mb-6">
              BTech AI Student
              <br />
              Creative Developer
              <br />
              Photographer · Gamer
            </h1>

            <p className="text-[#554739] text-[14px] sm:text-[14.5px] leading-[1.75] font-sans max-w-lg mb-7">
              I&apos;m Aryan Patel, a BTech Artificial Intelligence student, creative developer, and photographer.
              I work at the convergence of machine learning architectures, high-performance financial systems (like TradeSphere Terminal),
              and visual storytelling across Rajasthan, Kashmir, and Indian heritage landscapes.
            </p>

            <div className="flex flex-wrap items-center gap-2.5 mb-7">
              <a
                href="https://github.com/AryanPatel-AI"
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1 rounded-full border border-[rgba(91,68,43,0.3)] bg-[#fcf7ee] !text-[#211e19] text-[10px] font-semibold tracking-wider hover:bg-[#211e19] hover:!text-[#f8eddb] hover:border-[#211e19] transition-all duration-200 shadow-2xs"
              >
                GitHub ↗
              </a>
              <a
                href="https://www.linkedin.com/in/aryan-patel-ai/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1 rounded-full border border-[rgba(91,68,43,0.3)] bg-[#fcf7ee] !text-[#211e19] text-[10px] font-semibold tracking-wider hover:bg-[#211e19] hover:!text-[#f8eddb] hover:border-[#211e19] transition-all duration-200 shadow-2xs"
              >
                LinkedIn ↗
              </a>
              <a
                href="https://www.instagram.com/click_by_aryan/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1 rounded-full border border-[rgba(91,68,43,0.3)] bg-[#fcf7ee] !text-[#211e19] text-[10px] font-semibold tracking-wider hover:bg-[#211e19] hover:!text-[#f8eddb] hover:border-[#211e19] transition-all duration-200 shadow-2xs"
              >
                Photo: @click_by_aryan ↗
              </a>
              <a
                href="https://www.instagram.com/___aryan___patel/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1 rounded-full border border-[rgba(91,68,43,0.3)] bg-[#fcf7ee] !text-[#211e19] text-[10px] font-semibold tracking-wider hover:bg-[#211e19] hover:!text-[#f8eddb] hover:border-[#211e19] transition-all duration-200 shadow-2xs"
              >
                Personal: @___aryan___patel ↗
              </a>
              <a
                href="https://www.instagram.com/_om_x_aryan/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1 rounded-full border border-[rgba(91,68,43,0.3)] bg-[#fcf7ee] !text-[#211e19] text-[10px] font-semibold tracking-wider hover:bg-[#211e19] hover:!text-[#f8eddb] hover:border-[#211e19] transition-all duration-200 shadow-2xs"
              >
                Gaming: @_om_x_aryan ↗
              </a>
            </div>

            <Link
              href="#journey"
              className="px-3 py-1 rounded-full border border-[rgba(91,68,43,0.3)] bg-[#fcf7ee] !text-[#211e19] text-[10px] font-semibold tracking-wider hover:bg-[#211e19] hover:!text-[#f8eddb] hover:border-[#211e19] transition-all duration-200 shadow-2xs inline-flex items-center gap-1.5 group"
            >
              <span className="text-inherit">GET TO KNOW ME</span>
              <span className="text-inherit transition-transform duration-300 group-hover:translate-x-1">→</span>
            </Link>
          </div>

          {/* Right Column: Portrait Photo */}
          <div className="md:col-span-5 flex justify-center md:justify-end">
            <div className="relative w-full max-w-[290px] sm:max-w-[320px] aspect-[3/4] rounded-xl overflow-hidden border border-[rgba(91,68,43,0.22)] shadow-[0_8px_24px_rgba(91,68,43,0.08)] bg-[#f3e5d0]">
              <Image
                src="/images/portrait/IMG_0579.jpg"
                alt="Aryan Patel"
                fill
                sizes="(max-width: 768px) 100vw, 320px"
                className="object-cover object-[center_20%]"
                priority
              />
            </div>
          </div>
        </section>

        {/* Skills & Interests Section */}
        <section id="skills" className="mb-16 sm:mb-20">
          <div className="flex items-center gap-4 mb-6 sm:mb-8">
            <span className="text-[10.5px] sm:text-[11px] font-semibold tracking-[0.22em] text-[#8c704f] uppercase whitespace-nowrap">
              SKILLS & INTERESTS
            </span>
            <div className="h-px bg-[rgba(91,68,43,0.22)] flex-1" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            {/* Card 1: AI & ML */}
            <div className="bg-[#fcf7ee]/85 rounded-xl border border-[rgba(91,68,43,0.16)] p-6 sm:p-7 flex flex-col items-center text-center shadow-xs hover:shadow-[0_10px_25px_rgba(91,68,43,0.12)] hover:border-[rgba(180,147,104,0.4)] hover:-translate-y-1.5 transition-all duration-300">
              <div className="w-10 h-10 flex items-center justify-center mb-3 text-[#211e19]">
                <svg
                  viewBox="0 0 24 24"
                  className="w-8 h-8"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M9.5 2A4.5 4.5 0 0 0 5 6.5C5 7.4 5.3 8.2 5.7 9A5 5 0 0 0 4 13a4.9 4.9 0 0 0 2.5 4.3A4.5 4.5 0 0 0 11 22" />
                  <path d="M14.5 2A4.5 4.5 0 0 1 19 6.5c0 .9-.3 1.7-.7 2.5A5 5 0 0 1 20 13a4.9 4.9 0 0 1-2.5 4.3A4.5 4.5 0 0 1 13 22" />
                  <path d="M12 2v20" />
                  <path d="M5 13a4 4 0 0 1 4-4" />
                  <path d="M19 13a4 4 0 0 0-4-4" />
                  <path d="M6.5 17.5a4 4 0 0 0 4-1.5" />
                  <path d="M17.5 17.5a4 4 0 0 1-4-1.5" />
                </svg>
              </div>
              <h3 className="font-semibold text-[13.5px] sm:text-[14px] text-[#211e19] mb-1.5">
                AI & Machine Learning
              </h3>
              <p className="text-[11.5px] sm:text-[12px] leading-relaxed text-[#685746]">
                Building intelligent systems and agents.
              </p>
            </div>

            {/* Card 2: Web Development */}
            <div className="bg-[#fcf7ee]/85 rounded-xl border border-[rgba(91,68,43,0.16)] p-6 sm:p-7 flex flex-col items-center text-center shadow-xs hover:shadow-[0_10px_25px_rgba(91,68,43,0.12)] hover:border-[rgba(180,147,104,0.4)] hover:-translate-y-1.5 transition-all duration-300">
              <div className="w-10 h-10 flex items-center justify-center mb-3 text-[#211e19]">
                <svg
                  viewBox="0 0 24 24"
                  className="w-8 h-8"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="16 18 22 12 16 6" />
                  <polyline points="8 6 2 12 8 18" />
                  <line x1="14" y1="4" x2="10" y2="20" />
                </svg>
              </div>
              <h3 className="font-semibold text-[13.5px] sm:text-[14px] text-[#211e19] mb-1.5">
                Web Development
              </h3>
              <p className="text-[11.5px] sm:text-[12px] leading-relaxed text-[#685746]">
                Modern web apps and frameworks.
              </p>
            </div>

            {/* Card 3: Creative Frontend & 3D */}
            <div className="bg-[#fcf7ee]/85 rounded-xl border border-[rgba(91,68,43,0.16)] p-6 sm:p-7 flex flex-col items-center text-center shadow-xs hover:shadow-[0_10px_25px_rgba(91,68,43,0.12)] hover:border-[rgba(180,147,104,0.4)] hover:-translate-y-1.5 transition-all duration-300">
              <div className="w-10 h-10 flex items-center justify-center mb-3 text-[#211e19]">
                <svg
                  viewBox="0 0 24 24"
                  className="w-8 h-8"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                  <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
                  <line x1="12" y1="22.08" x2="12" y2="12" />
                </svg>
              </div>
              <h3 className="font-semibold text-[13.5px] sm:text-[14px] text-[#211e19] mb-1.5">
                Creative Frontend & 3D
              </h3>
              <p className="text-[11.5px] sm:text-[12px] leading-relaxed text-[#685746]">
                Interactive experiences and visual storytelling.
              </p>
            </div>

            {/* Card 4: Photography */}
            <div className="bg-[#fcf7ee]/85 rounded-xl border border-[rgba(91,68,43,0.16)] p-6 sm:p-7 flex flex-col items-center text-center shadow-xs hover:shadow-[0_10px_25px_rgba(91,68,43,0.12)] hover:border-[rgba(180,147,104,0.4)] hover:-translate-y-1.5 transition-all duration-300">
              <div className="w-10 h-10 flex items-center justify-center mb-3 text-[#211e19]">
                <svg
                  viewBox="0 0 24 24"
                  className="w-8 h-8"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="7" r="4" />
                  <path d="M5.5 21a6.5 6.5 0 0 1 13 0" />
                </svg>
              </div>
              <h3 className="font-semibold text-[13.5px] sm:text-[14px] text-[#211e19] mb-1.5">
                Photography
              </h3>
              <p className="text-[11.5px] sm:text-[12px] leading-relaxed text-[#685746]">
                Capturing moments, people and places.
              </p>
            </div>
          </div>
        </section>

        {/* My Journey & Future Goals */}
        <section id="journey" className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: My Journey */}
          <div className="md:col-span-7">
            <div className="flex items-center gap-4 mb-5">
              <span className="text-[10.5px] sm:text-[11px] font-semibold tracking-[0.22em] text-[#8c704f] uppercase whitespace-nowrap">
                MY JOURNEY
              </span>
              <div className="h-px bg-[rgba(91,68,43,0.22)] flex-1" />
            </div>

            <div className="relative aspect-[16/10] sm:aspect-video rounded-xl overflow-hidden border border-[rgba(91,68,43,0.2)] shadow-sm bg-[#e9d6bf]">
              <Image
                src="/images/portrait/aryan-pillared-court.jpg"
                alt="Aryan Patel Photography & Heritage Colonnade Journey"
                fill
                sizes="(max-width: 768px) 100vw, 550px"
                className="object-cover object-[center_35%]"
              />
            </div>
          </div>

          {/* Right Column: Future Goals */}
          <div className="md:col-span-5 md:border-l md:border-[rgba(91,68,43,0.2)] md:pl-8 lg:pl-10 pt-2 sm:pt-4">
            <h2 className="font-['Playfair_Display'] text-2xl sm:text-3xl text-[#211e19] font-normal mb-5">
              Future Goals
            </h2>

            <ul className="space-y-4 text-[#3d3228] text-[13.5px] sm:text-[14px] mb-8">
              <li className="flex items-start gap-3">
                <span className="text-[#8c704f] text-sm mt-0.5 leading-none">•</span>
                <span>Build impactful AI products &amp; agentic architectures</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#8c704f] text-sm mt-0.5 leading-none">•</span>
                <span>Create immersive, high-performance web experiences</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#8c704f] text-sm mt-0.5 leading-none">•</span>
                <span>Expand my photography journey across India</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#8c704f] text-sm mt-0.5 leading-none">•</span>
                <span>Work on exciting gaming &amp; esports projects</span>
              </li>
            </ul>

            {/* B.Tech & LinkedIn Credentials Card */}
            <div className="p-5 bg-[#fcf7ee] border border-[rgba(91,68,43,0.18)] rounded-lg shadow-xs">
              <div className="flex items-center justify-between text-[10px] font-semibold tracking-wider text-[#806648] uppercase mb-2">
                <span>B.Tech AI Credentials</span>
                <span>Verified</span>
              </div>
              <h3 className="font-['Playfair_Display'] text-base text-[#211e19] mb-1">
                Certifications on LinkedIn
              </h3>
              <p className="text-xs text-[#554739] leading-relaxed mb-3">
                Verified in Deep Learning, Machine Learning, Scientific Python, and Full-Stack Engineering.
              </p>
              <div className="flex flex-wrap items-center gap-3">
                <Link
                  href="/work#certificates"
                  className="px-3 py-1 rounded-full border border-[rgba(91,68,43,0.3)] bg-[#fcf7ee] !text-[#211e19] text-[10px] font-semibold tracking-wider hover:bg-[#211e19] hover:!text-[#f8eddb] hover:border-[#211e19] transition-all duration-200 shadow-2xs inline-flex items-center gap-1.5"
                >
                  <span>View Certificates</span>
                  <span>→</span>
                </Link>
                <a
                  href="https://www.linkedin.com/in/aryan-patel-ai/details/certifications/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1 rounded-full border border-[rgba(91,68,43,0.3)] bg-[#fcf7ee] !text-[#211e19] text-[10px] font-semibold tracking-wider hover:bg-[#211e19] hover:!text-[#f8eddb] hover:border-[#211e19] transition-all duration-200 shadow-2xs inline-flex items-center gap-1.5"
                >
                  <span>LinkedIn</span>
                  <span>↗</span>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
