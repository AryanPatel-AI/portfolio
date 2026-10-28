"use client";

import { useState } from "react";
import Link from "next/link";

interface SocialProfile {
  name: string;
  handle: string;
  url: string;
  description: string;
  category: string;
  icon: (className?: string) => React.ReactNode;
}

export default function ContactPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    website: "",
  });
  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [formFeedback, setFormFeedback] = useState("");

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus("submitting");
    setFormFeedback("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        setFormStatus("error");
        setFormFeedback(
          data.errors?.join(" ") ||
          data.error ||
          "Failed to dispatch message. Please try again or use direct email."
        );
      } else {
        setFormStatus("success");
        setFormFeedback(data.message || "Thank you! Your message has been received.");
        setFormData({ name: "", email: "", subject: "", message: "", website: "" });
      }
    } catch {
      setFormStatus("error");
      setFormFeedback("Network connection error. Please verify your connection or email directly.");
    }
  };

  const socialProfiles: SocialProfile[] = [
    {
      name: "GitHub",
      handle: "@AryanPatel-AI",
      url: "https://github.com/AryanPatel-AI",
      description:
        "Open-source repositories, machine learning models, and full-stack software codebases.",
      category: "CODE & AI",
      icon: (className = "w-5 h-5") => (
        <svg
          viewBox="0 0 24 24"
          className={className}
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
          />
        </svg>
      ),
    },
    {
      name: "LinkedIn",
      handle: "aryan-patel-ai",
      url: "https://www.linkedin.com/in/aryan-patel-ai/",
      description:
        "Professional network, machine learning milestones, engineering articles, and career updates.",
      category: "CAREER & NETWORK",
      icon: (className = "w-5 h-5") => (
        <svg
          viewBox="0 0 24 24"
          className={className}
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.65 1.65 0 1 0 0-3.3 1.65 1.65 0 0 0 0 3.3m1.39 9.74v-8.37H5.07v8.37h2.78z" />
        </svg>
      ),
    },
    {
      name: "Photography Instagram",
      handle: "@click_by_aryan",
      url: "https://www.instagram.com/click_by_aryan/",
      description:
        "Visual exhibits, architectural framing, mountain landscapes, and cultural captures.",
      category: "VISUAL ARTS",
      icon: (className = "w-5 h-5") => (
        <svg
          viewBox="0 0 24 24"
          className={className}
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
          <circle cx="12" cy="13" r="4" />
        </svg>
      ),
    },
    {
      name: "Personal Instagram",
      handle: "@___aryan___patel",
      url: "https://www.instagram.com/___aryan___patel/",
      description:
        "Daily life journal, behind-the-scenes moments, travels, and personal reflections.",
      category: "LIFE & JOURNAL",
      icon: (className = "w-5 h-5") => (
        <svg
          viewBox="0 0 24 24"
          className={className}
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" strokeWidth="2.5" />
        </svg>
      ),
    },
    {
      name: "Gaming Instagram",
      handle: "@_om_x_aryan",
      url: "https://www.instagram.com/_om_x_aryan/",
      description:
        "Competitive gameplay, esports highlights, stream clips, and gaming community.",
      category: "ESPORTS & CLIPS",
      icon: (className = "w-5 h-5") => (
        <svg
          viewBox="0 0 24 24"
          className={className}
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <rect x="2" y="6" width="20" height="12" rx="6" />
          <line x1="6" y1="12" x2="10" y2="12" />
          <line x1="8" y1="10" x2="8" y2="14" />
          <line x1="15" y1="13" x2="15.01" y2="13" strokeWidth="2.5" />
          <line x1="18" y1="11" x2="18.01" y2="11" strokeWidth="2.5" />
        </svg>
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-[#f8eddb] text-[#211e19] selection:bg-[#b49368] selection:text-white flex flex-col justify-between overflow-x-hidden w-full">
      {/* Header */}
      <header className="w-full border-b border-[rgba(91,68,43,0.15)] bg-[#f8eddb]/90 backdrop-blur-sm sticky top-0 z-30">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-5 sm:px-8 lg:px-12 xl:px-14 py-4 sm:py-5">
          <Link href="/" className="flex items-center gap-3 group">
            <span className="w-5 h-5 flex items-center justify-center border-2 border-[#211e19] rotate-45 transition-transform duration-300 group-hover:rotate-90">
              <span className="w-1.5 h-1.5 bg-[#211e19] rounded-full" />
            </span>
            <span className="font-['Playfair_Display'] text-[13px] sm:text-sm tracking-[0.24em] font-semibold uppercase">
              Aryan Patel
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-4 lg:gap-5 text-[10.5px] font-semibold tracking-[0.2em] uppercase text-[#77573a]">
            <Link href="/work" className="hover:text-[#211e19] transition-colors">
              Work
            </Link>
            <span className="text-[#a89580]" aria-hidden="true">—</span>
            <Link href="/about" className="hover:text-[#211e19] transition-colors">
              About
            </Link>
            <span className="text-[#a89580]" aria-hidden="true">—</span>
            <Link href="/photography" className="hover:text-[#211e19] transition-colors">
              Photography
            </Link>
            <span className="text-[#a89580]" aria-hidden="true">—</span>
            <Link href="/gaming" className="hover:text-[#211e19] transition-colors">
              Gaming
            </Link>
            <span className="text-[#a89580]" aria-hidden="true">—</span>
            <Link
              href="/contact"
              className="text-[#211e19] font-bold border-b border-[#211e19] pb-0.5"
            >
              Contact
            </Link>
          </nav>

          <div className="flex items-center gap-3">
            <div className="hidden lg:flex items-center gap-2 text-[9px] tracking-[0.2em] text-[#77573a] uppercase font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-[#77573a]" />
              <span>Exploring What&apos;s Possible / 2026</span>
            </div>

            {/* Mobile menu button */}
            <button
              type="button"
              className="md:hidden p-2 text-xs font-semibold tracking-widest uppercase text-[#211e19] cursor-pointer"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? "CLOSE" : "MENU"}
            </button>
          </div>
        </div>

        {/* Mobile Nav Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-[rgba(91,68,43,0.15)] bg-[#f5ebd9] px-6 py-4 flex flex-col gap-3 text-xs font-semibold tracking-[0.18em] uppercase text-[#77573a]">
            <Link
              href="/work"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-[#211e19] py-1.5 transition-colors border-b border-[rgba(91,68,43,0.1)]"
            >
              Work
            </Link>
            <Link
              href="/about"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-[#211e19] py-1.5 transition-colors border-b border-[rgba(91,68,43,0.1)]"
            >
              About
            </Link>
            <Link
              href="/photography"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-[#211e19] py-1.5 transition-colors border-b border-[rgba(91,68,43,0.1)]"
            >
              Photography
            </Link>
            <Link
              href="/gaming"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-[#211e19] py-1.5 transition-colors border-b border-[rgba(91,68,43,0.1)]"
            >
              Gaming
            </Link>
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="text-[#211e19] font-bold py-1.5"
            >
              Contact
            </Link>
          </div>
        )}
      </header>

      {/* Main Content Area */}
      <main className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 xl:px-14 py-12 sm:py-16 lg:py-20 w-full flex-1">
        {/* 1. Contact Introduction, Direct Dispatch Form & Email Card */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 xl:gap-14 items-start pb-14 sm:pb-18 border-b border-[rgba(91,68,43,0.18)]">
          {/* Left: Contact Text & Direct Email Card */}
          <div className="lg:col-span-6 xl:col-span-5 flex flex-col gap-6">
            <div>
              <span className="text-[10.5px] sm:text-[11px] font-semibold tracking-[0.26em] text-[#b49368] uppercase mb-3.5 block flex items-center gap-2.5">
                <span className="w-4 h-px bg-[#b49368]" aria-hidden="true" />
                LET’S CONNECT
              </span>
              <h1 className="font-['Playfair_Display'] text-3xl sm:text-5xl lg:text-5xl xl:text-6xl font-normal leading-[1.08] tracking-tight text-[#211e19] mb-4 sm:mb-6">
                Get In Touch
              </h1>
              <p className="text-sm sm:text-base text-[#6d6559] leading-relaxed font-sans font-light max-w-xl">
                Feel free to reach out for collaborations, projects, photography commissions,
                gaming or just to say hello! Use the interactive dispatch form or send a direct email.
              </p>
            </div>

            {/* Email Contact Card */}
            <a
              href="mailto:aryan.btai2023019@invertisuniversity.ac.in"
              className="group relative block w-full p-5 sm:p-6 bg-[#fcf7ee] border border-[rgba(91,68,43,0.18)] rounded-xl shadow-xs hover:-translate-y-1 hover:shadow-[0_10px_25px_rgba(91,68,43,0.12)] hover:border-[rgba(180,147,104,0.4)] transition-all duration-300"
            >
              <div className="flex items-start justify-between gap-3 mb-3">
                <span className="text-[9.5px] tracking-[0.22em] uppercase font-semibold text-[#806648] flex items-center gap-1.5">
                  <span className="text-[#b49368]">◆</span> DIRECT INBOX
                </span>
                <span className="w-8 h-8 rounded-full border border-[rgba(91,68,43,0.22)] bg-[#f0e4d2] flex items-center justify-center text-[#77573a] group-hover:text-[#211e19] group-hover:border-[#b49368] transition-colors shrink-0">
                  <svg
                    viewBox="0 0 24 24"
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <rect x="2" y="4" width="20" height="16" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                </span>
              </div>

              <div className="mb-3">
                <span className="text-[10px] text-[#77573a] font-medium uppercase tracking-wider block mb-0.5">
                  University &amp; Professional Dispatch
                </span>
                <div className="font-['Playfair_Display'] text-[15px] sm:text-[17px] font-medium text-[#211e19] group-hover:text-[#b49368] transition-colors break-all tracking-tight">
                  aryan.btai2023019@invertisuniversity.ac.in
                </div>
              </div>

              <div className="pt-3 border-t border-[rgba(91,68,43,0.15)] flex items-center justify-between text-xs">
                <span className="px-3 py-1 rounded-full border border-[rgba(91,68,43,0.3)] bg-[#fcf7ee] !text-[#211e19] text-[10px] font-semibold tracking-wider hover:bg-[#211e19] hover:!text-[#f8eddb] hover:border-[#211e19] transition-all duration-200 shadow-2xs inline-flex items-center gap-1.5">
                  <span>Send Direct Email</span>
                  <span className="group-hover:translate-x-1 transition-transform duration-200">
                    →
                  </span>
                </span>
                <span className="text-[9.5px] tracking-wider uppercase text-[#8c704f] font-mono">
                  mailto:
                </span>
              </div>
            </a>
          </div>

          {/* Right: Interactive Message Dispatch Form */}
          <div className="lg:col-span-6 xl:col-span-7 w-full">
            <div className="p-6 sm:p-8 bg-[#fcf7ee] border border-[rgba(91,68,43,0.18)] rounded-xl shadow-xs">
              <div className="flex items-center justify-between gap-3 mb-5 pb-4 border-b border-[rgba(91,68,43,0.12)]">
                <div>
                  <span className="text-[9.5px] tracking-[0.22em] uppercase font-semibold text-[#806648] flex items-center gap-1.5 mb-1">
                    <span className="w-2 h-2 rounded-full bg-[#b49368]" />
                    INTERACTIVE DISPATCH
                  </span>
                  <h2 className="font-['Playfair_Display'] text-xl sm:text-2xl text-[#211e19]">
                    Send a Message
                  </h2>
                </div>
                <span className="px-2.5 py-1 rounded-full text-[9px] font-mono uppercase tracking-wider bg-[#f0e4d2] text-[#6b553e] border border-[rgba(91,68,43,0.15)]">
                  Rate-Protected
                </span>
              </div>

              {formFeedback && (
                <div
                  className={`mb-5 p-4 rounded-lg text-xs leading-relaxed border ${
                    formStatus === "success"
                      ? "bg-[#e8f3e8] text-[#1e4620] border-[#9ec89e]"
                      : "bg-[#fbeaea] text-[#6e1e1e] border-[#e8a5a5]"
                  }`}
                  role="alert"
                >
                  <p className="font-semibold mb-0.5">
                    {formStatus === "success" ? "Message Dispatched" : "Notice"}
                  </p>
                  <p>{formFeedback}</p>
                </div>
              )}

              <form onSubmit={handleFormSubmit} className="space-y-4">
                {/* Anti-spam honeypot (invisible to humans, traps automated scrapers) */}
                <div className="hidden" aria-hidden="true" style={{ display: "none" }}>
                  <label htmlFor="contact-website">Website</label>
                  <input
                    id="contact-website"
                    type="text"
                    name="website"
                    tabIndex={-1}
                    autoComplete="off"
                    value={formData.website}
                    onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="block text-[11px] font-medium uppercase tracking-wider text-[#634e38] mb-1.5"
                    >
                      Your Name *
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      placeholder="e.g. Maya Sharma"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      disabled={formStatus === "submitting"}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-[#f8eddb] border border-[rgba(91,68,43,0.2)] text-xs text-[#211e19] placeholder-[#9f8973] focus:outline-none focus:border-[#b49368] transition-colors"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="contact-email"
                      className="block text-[11px] font-medium uppercase tracking-wider text-[#634e38] mb-1.5"
                    >
                      Your Email *
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      required
                      placeholder="e.g. maya@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      disabled={formStatus === "submitting"}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-[#f8eddb] border border-[rgba(91,68,43,0.2)] text-xs text-[#211e19] placeholder-[#9f8973] focus:outline-none focus:border-[#b49368] transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="contact-subject"
                    className="block text-[11px] font-medium uppercase tracking-wider text-[#634e38] mb-1.5"
                  >
                    Subject
                  </label>
                  <input
                    id="contact-subject"
                    type="text"
                    placeholder="e.g. AI Collaboration / Photography Commission"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    disabled={formStatus === "submitting"}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-[#f8eddb] border border-[rgba(91,68,43,0.2)] text-xs text-[#211e19] placeholder-[#9f8973] focus:outline-none focus:border-[#b49368] transition-colors"
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-message"
                    className="block text-[11px] font-medium uppercase tracking-wider text-[#634e38] mb-1.5"
                  >
                    Message *
                  </label>
                  <textarea
                    id="contact-message"
                    required
                    rows={4}
                    placeholder="Tell me about your idea, project, or inquiry..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    disabled={formStatus === "submitting"}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-[#f8eddb] border border-[rgba(91,68,43,0.2)] text-xs text-[#211e19] placeholder-[#9f8973] focus:outline-none focus:border-[#b49368] transition-colors resize-y"
                  />
                </div>

                <div className="flex items-center justify-between pt-2">
                  <span className="text-[10px] text-[#806648] font-mono">
                    Protected by sliding-window rate limiting
                  </span>

                  <button
                    type="submit"
                    disabled={formStatus === "submitting"}
                    className="px-5 py-2.5 rounded-full bg-[#211e19] text-[#f8eddb] text-[11px] font-semibold tracking-wider hover:bg-[#3d3227] disabled:opacity-50 transition-all duration-200 inline-flex items-center gap-2 cursor-pointer shadow-xs"
                  >
                    {formStatus === "submitting" ? (
                      <>
                        <span className="w-3 h-3 rounded-full border-2 border-[#f8eddb] border-t-transparent animate-spin" />
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <span>→</span>
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>

        {/* 2. My Social Profiles */}
        <section className="pt-14 sm:pt-18">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 mb-8 sm:mb-10">
            <div>
              <span className="text-[10px] font-semibold tracking-[0.24em] text-[#b49368] uppercase block mb-1.5 sm:mb-2 flex items-center gap-2">
                <span className="w-3 h-px bg-[#b49368]" aria-hidden="true" />
                NETWORKS &amp; PRESENCE
              </span>
              <h2 className="font-['Playfair_Display'] text-2xl sm:text-3xl lg:text-4xl font-normal text-[#211e19]">
                My Social Profiles
              </h2>
            </div>
            <p className="text-xs text-[#77573a] tracking-wider uppercase font-medium">
              Five Curated Hubs
            </p>
          </div>

          {/* Responsive 5-card Grid - Auto-Adjusts on Mobile, Tablet & Desktop */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3.5 sm:gap-4 xl:gap-5">
            {socialProfiles.map((profile, idx) => (
              <a
                key={profile.name}
                href={profile.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex flex-col justify-between p-5 sm:p-6 lg:p-4 xl:p-6 bg-[#fcf7ee] border border-[rgba(91,68,43,0.18)] rounded-xl shadow-xs hover:-translate-y-1.5 hover:shadow-[0_10px_25px_rgba(91,68,43,0.12)] hover:border-[rgba(180,147,104,0.4)] transition-all duration-300 min-h-[270px] sm:min-h-[290px] xl:min-h-[310px]"
              >
                <div>
                  {/* Top Bar inside Card */}
                  <div className="flex items-center justify-between mb-4 sm:mb-5">
                    <span className="text-[9px] font-mono tracking-widest text-[#8c704f] font-semibold">
                      0{idx + 1}
                    </span>
                    <span className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#f0e4d2] border border-[rgba(91,68,43,0.18)] flex items-center justify-center text-[#77573a] group-hover:text-[#211e19] group-hover:border-[#b49368] transition-colors">
                      {profile.icon("w-3.5 h-3.5 sm:w-4 sm:h-4")}
                    </span>
                  </div>

                  <span className="text-[9px] sm:text-[9.5px] tracking-[0.2em] font-semibold text-[#8c704f] uppercase block mb-1">
                    {profile.category}
                  </span>

                  <h3 className="font-['Playfair_Display'] text-lg xl:text-xl font-normal text-[#211e19] mb-1 group-hover:text-[#b49368] transition-colors">
                    {profile.name}
                  </h3>

                  <div className="text-[11px] xl:text-xs font-mono font-medium text-[#77573a] mb-3 break-all">
                    {profile.handle}
                  </div>

                  <p className="text-[11.5px] sm:text-xs text-[#665747] leading-relaxed font-sans font-light">
                    {profile.description}
                  </p>
                </div>

                {/* Bottom Link Action */}
                <div className="mt-5 pt-3.5 border-t border-[rgba(91,68,43,0.15)] flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full border border-[rgba(91,68,43,0.3)] bg-[#fcf7ee] !text-[#211e19] text-[10px] font-semibold tracking-wider hover:bg-[#211e19] hover:!text-[#f8eddb] hover:border-[#211e19] transition-all duration-200 shadow-2xs inline-flex items-center gap-1.5">
                    <span>View Profile</span>
                    <span className="group-hover:translate-x-1 transition-transform duration-200">
                      →
                    </span>
                  </span>
                  <span className="text-[9.5px] font-mono text-[#8c704f]">
                    0{idx + 1}
                  </span>
                </div>
              </a>
            ))}
          </div>
        </section>
      </main>

      {/* 3. Footer */}
      <footer className="relative overflow-hidden border-t border-[rgba(91,68,43,0.25)] bg-[#1e1b16] text-[#f8eddb] py-12 sm:py-16 px-5 sm:px-10">
        {/* Subtle Mountain Landscape Background */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-18 pointer-events-none filter contrast-125"
          style={{
            backgroundImage:
              "url('/images/photography/landscapes/mountain-valley-vista.jpg')",
          }}
          aria-hidden="true"
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-[#1e1b16] via-[#1e1b16]/80 to-[#1e1b16]/90 pointer-events-none"
          aria-hidden="true"
        />

        {/* Compact Centered Footer Structure */}
        <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center text-center">
          {/* Centered Diamond Brand Mark */}
          <div className="w-7 h-7 sm:w-8 sm:h-8 mb-4 sm:mb-5 flex items-center justify-center border-2 border-[#b49368] rotate-45 transition-transform duration-500 hover:rotate-90">
            <span className="w-1.5 h-1.5 bg-[#b49368] rounded-full" />
          </div>

          {/* Footer Text */}
          <h2 className="font-['Playfair_Display'] text-xl sm:text-2xl md:text-3xl font-normal text-[#f8eddb] tracking-tight mb-6 sm:mb-7 max-w-lg px-2">
            Let&apos;s build something amazing together.
          </h2>

          {/* Row of Gold Social Icons linking to the 5 profiles */}
          <div className="flex flex-wrap items-center justify-center gap-3.5 sm:gap-5 lg:gap-6 text-[#b49368] mb-8 sm:mb-10">
            {socialProfiles.map((p) => (
              <a
                key={p.name}
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-[rgba(180,147,104,0.4)] bg-[#211e19]/70 flex items-center justify-center !text-[#b49368] hover:!text-[#f8eddb] hover:border-[#b49368] hover:bg-[#b49368]/20 hover:scale-110 transition-all duration-200"
                aria-label={`Visit Aryan on ${p.name}`}
              >
                {p.icon("w-3.5 h-3.5 sm:w-4 sm:h-4 text-inherit")}
              </a>
            ))}
          </div>

          {/* Compact Copyright & Navigation */}
          <div className="w-full pt-5 sm:pt-6 border-t border-[rgba(180,147,104,0.18)] flex flex-col sm:flex-row items-center justify-between text-[10px] tracking-[0.2em] uppercase text-[#a89580] gap-3 text-center sm:text-left">
            <span>© {new Date().getFullYear()} ARYAN PATEL. ALL RIGHTS RESERVED.</span>
            <Link
              href="/"
              className="hover:text-[#f8eddb] transition-colors flex items-center gap-2 justify-center"
            >
              <span>RETURN TO OVERVIEW</span>
              <span>→</span>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
