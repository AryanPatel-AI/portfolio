"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function WorkPage() {
  const [activeFilter, setActiveFilter] = useState("All");

  const projects = [
    {
      id: "tradesphere",
      title: "TradeSphere Terminal",
      category: "FinTech & Systems · Monorepo",
      previewUrl: "tradesphere.terminal",
      image: "/images/projects/project-ml.jpg",
      desc: "Production Indian stock market terminal & derivatives analytics platform with real-time WebSocket tickers, option chains, and paper trading parity with Groww & Zerodha Kite.",
      stack: ["Next.js", "TypeScript", "WebSockets", "Redis"],
      tag: "Software",
      githubUrl: "https://github.com/AryanPatel-AI/TradeSphere",
    },
    {
      id: "ai-event-organiser",
      title: "Full-Stack AI Event Organiser",
      category: "Full-Stack Web · Next.js & Convex",
      previewUrl: "ai-event-organiser.app",
      image: "/images/projects/ai-event-hero.png",
      desc: "Modern event coordination platform built with Next.js, Convex real-time reactive database, Clerk authentication, Shadcn UI, and smart event scheduling.",
      stack: ["Next.js", "Convex", "Clerk Auth", "Tailwind"],
      tag: "Software",
      githubUrl: "https://github.com/AryanPatel-AI/ai-event-organiser",
    },
    {
      id: "vyro",
      title: "VYRO",
      category: "AI & Platform · Full-Stack",
      previewUrl: "vyro.ai/dashboard",
      image: "/images/projects/project-ai.jpg",
      desc: "AI-powered social and brand management ecosystem delivering automated content generation, audience analytics, dynamic scheduling, and brand sponsorships.",
      stack: ["Next.js", "TypeScript", "AI Agents", "PostgreSQL"],
      tag: "AI & ML",
      githubUrl: "https://github.com/AryanPatel-AI/VYRO",
    },
    {
      id: "ai-translator",
      title: "Live AI Translator PWA",
      category: "Speech & NLP · Serverless PWA",
      previewUrl: "live-translator.vercel.app",
      image: "/images/projects/project-gaming.jpg",
      desc: "Continuous Speech-to-Text (STT), high-accuracy neural translation via deep-translator, and real-time Text-to-Speech audio output, packaged as a mobile PWA.",
      stack: ["Python Flask", "Web Speech API", "Vercel PWA"],
      tag: "AI & ML",
      githubUrl: "https://github.com/AryanPatel-AI/aitranslator-webapp",
    },
    {
      id: "speech-to-text-ai",
      title: "Speech-to-Text AI Assistant",
      category: "Deep Learning · Hugging Face",
      previewUrl: "huggingface.co/spaces/speech-ai",
      image: "/images/projects/project-ai.jpg",
      desc: "Dockerized audio intelligence pipeline and conversational assistant deployed on Hugging Face Spaces for real-time speech processing.",
      stack: ["Docker", "Python", "PyTorch", "Hugging Face"],
      tag: "AI & ML",
      githubUrl: "https://github.com/AryanPatel-AI",
    },
    {
      id: "face-recognition",
      title: "Neural Biometric Vision",
      category: "Computer Vision · Python",
      previewUrl: "vision-pipeline.py",
      image: "/images/projects/project-ml.jpg",
      desc: "Real-time facial detection, spatial facial embedding extraction, and multi-identity verification pipeline built with Python and OpenCV.",
      stack: ["Python", "OpenCV", "Deep Learning", "NumPy"],
      tag: "Software",
      githubUrl: "https://github.com/AryanPatel-AI/FaceRecognition",
    },
  ];

  const certificates = [
    {
      title: "Getting Started with Artificial Intelligence",
      issuer: "IBM SkillsBuild (Uploaded on LinkedIn)",
      category: "Artificial Intelligence",
      date: "B.Tech AI Credential",
      skills: ["AI Fundamentals", "Machine Learning", "Neural Networks", "Cognitive Systems"],
      description:
        "Foundational AI certification validating core concepts in artificial intelligence, cognitive architectures, data modeling, and practical machine learning applications.",
      credentialUrl: "https://www.linkedin.com/in/aryan-patel-ai/details/certifications/",
    },
    {
      title: "Intersection of AI and Environmental Sustainability",
      issuer: "IBM SkillsBuild (Uploaded on LinkedIn)",
      category: "Applied AI",
      date: "B.Tech AI Credential",
      skills: ["Green AI", "Sustainability Analytics", "Predictive Systems", "Carbon Optimization"],
      description:
        "Specialized industry certification analyzing how intelligent algorithms and predictive models optimize energy consumption, resource efficiency, and environmental sustainability.",
      credentialUrl: "https://www.linkedin.com/in/aryan-patel-ai/details/certifications/",
    },
    {
      title: "AI Skills Passport",
      issuer: "Global AI Credential (Uploaded on LinkedIn)",
      category: "AI Readiness",
      date: "Industry Verified",
      skills: ["Generative AI", "Ethical AI", "Prompt Engineering", "Data Literacy"],
      description:
        "Comprehensive industry credential verifying practical data literacy, generative artificial intelligence workflows, ethical AI frameworks, and computational reasoning.",
      credentialUrl: "https://www.linkedin.com/in/aryan-patel-ai/details/certifications/",
    },
    {
      title: "Python 101 for Data Science",
      issuer: "Cognitive Class / IBM (Uploaded on LinkedIn)",
      category: "Data Science",
      date: "B.Tech AI Credential",
      skills: ["Python", "Pandas", "NumPy", "Data Preprocessing", "Matplotlib"],
      description:
        "Hands-on scientific computing certification covering Python data structures, automated matrix manipulation with NumPy, dataframe wrangling with Pandas, and data visualization.",
      credentialUrl: "https://www.linkedin.com/in/aryan-patel-ai/details/certifications/",
    },
    {
      title: "LLM For Young Developer",
      issuer: "Large Language Models & GenAI (Uploaded on LinkedIn)",
      category: "Generative AI",
      date: "B.Tech AI Credential",
      skills: ["Large Language Models", "Prompt Chaining", "API Integration", "AI Agents"],
      description:
        "Modern developer credential in architecting applications with Large Language Models (LLMs), prompt engineering, agentic workflows, and neural inference pipelines.",
      credentialUrl: "https://www.linkedin.com/in/aryan-patel-ai/details/certifications/",
    },
    {
      title: "Next Gen Technologies",
      issuer: "Academic & Tech Credential (Uploaded on LinkedIn)",
      category: "Emerging Tech",
      date: "November 2025",
      skills: ["Next-Gen Architectures", "Cloud Computing", "AI Systems", "Modern Web"],
      description:
        "Certificate of completion awarded for mastering emerging technologies, cloud-native deployments, and advanced computational architectures.",
      credentialUrl: "https://www.linkedin.com/in/aryan-patel-ai/details/certifications/",
    },
  ];

  const honorsAndAwards = [
    {
      title: "IBM Z Datathon Finalist",
      issuer: "IBM Enterprise",
      badge: "Competition Finalist",
      desc: "Achieved finalist position in the IBM Z Datathon for high-throughput enterprise data architecture.",
    },
    {
      title: "AI-ML Virtual Internship",
      issuer: "Industry Engineering",
      badge: "Internship",
      desc: "Completed hands-on machine learning pipelines, model training, and dataset preprocessing.",
    },
    {
      title: "Excellence in Academics & University Projects",
      issuer: "Invertis University · B.Tech AI",
      badge: "Academic Honor",
      desc: "Nominated for academic excellence and outstanding contributions to departmental AI projects.",
    },
  ];

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.tag === activeFilter);

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
          <Link href="/work" className="text-[#211e19] font-bold">
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
          <span>BTech AI &amp; Systems / 2026</span>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-6 sm:px-10 py-12 sm:py-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 pb-6 border-b border-[rgba(91,68,43,0.15)]">
          <div>
            <span className="text-[11px] font-semibold tracking-[0.24em] text-[#b49368] uppercase block mb-3">
              BTECH ENGINEERING &amp; AI
            </span>
            <h1 className="font-['Playfair_Display'] text-4xl sm:text-5xl md:text-6xl font-normal leading-tight tracking-tight mb-4 text-[#211e19]">
              Featured Work &amp; Systems
            </h1>
            <p className="text-[#554739] text-base max-w-xl font-sans leading-relaxed">
              Live websites, interactive AI platforms, financial terminals, and verified credentials earned during my B.Tech Artificial Intelligence degree.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2.5">
            <a
              href="https://github.com/AryanPatel-AI"
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1 rounded-full border border-[rgba(91,68,43,0.3)] bg-[#fcf7ee] !text-[#211e19] text-[10px] font-semibold tracking-wider hover:bg-[#211e19] hover:!text-[#f8eddb] hover:border-[#211e19] transition-all duration-200 shadow-2xs inline-flex items-center gap-1.5"
            >
              <span>GitHub: @AryanPatel-AI</span>
              <span>↗</span>
            </a>
            <a
              href="https://www.linkedin.com/in/aryan-patel-ai/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1 rounded-full border border-[rgba(91,68,43,0.3)] bg-[#fcf7ee] !text-[#211e19] text-[10px] font-semibold tracking-wider hover:bg-[#211e19] hover:!text-[#f8eddb] hover:border-[#211e19] transition-all duration-200 shadow-2xs inline-flex items-center gap-1.5"
            >
              <span>LinkedIn Profile</span>
              <span>↗</span>
            </a>
            <a
              href="#certificates"
              className="px-3 py-1 rounded-full border border-[rgba(91,68,43,0.3)] bg-[#fcf7ee] !text-[#211e19] text-[10px] font-semibold tracking-wider hover:bg-[#211e19] hover:!text-[#f8eddb] hover:border-[#211e19] transition-all duration-200 shadow-2xs inline-flex items-center gap-1.5"
            >
              <span>Certificates</span>
              <span>↓</span>
            </a>
          </div>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 mb-10 text-xs font-medium">
          {["All", "AI & ML", "Software"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveFilter(tab)}
              className={`px-3 py-1 rounded-full transition-all duration-200 cursor-pointer text-[10px] font-semibold tracking-wider ${activeFilter === tab
                ? "bg-[#211e19] !text-[#f8eddb] border border-[#211e19] shadow-xs"
                : "border border-[rgba(91,68,43,0.3)] bg-[#fcf7ee] !text-[#211e19] hover:bg-[#211e19] hover:!text-[#f8eddb] hover:border-[#211e19] shadow-2xs"
                }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Projects Grid: Well-Arranged with Main Page Website Images */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((p) => (
            <div
              key={p.id}
              className="bg-[#fcf7ee] border border-[rgba(91,68,43,0.18)] rounded-xl overflow-hidden flex flex-col justify-between shadow-xs hover:shadow-[0_10px_25px_rgba(91,68,43,0.12)] hover:border-[rgba(180,147,104,0.4)] hover:-translate-y-1.5 transition-all duration-300"
            >
              <div>
                {/* Website Browser Header Mockup */}
                <div className="px-4 py-2.5 bg-[#f0e4d2] border-b border-[rgba(91,68,43,0.15)] flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#d68a7a]" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#e8c87e]" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#8fb89c]" />
                  </div>
                  <span className="text-[10px] tracking-wider text-[#77573a] font-mono">
                    {p.previewUrl}
                  </span>
                  <span className="text-[10px] text-[#b49368]">HTTPS</span>
                </div>

                {/* Main Page Website Preview Image */}
                <div className="relative aspect-16/10 w-full overflow-hidden bg-[#e4d5be]">
                  <Image
                    src={p.image}
                    alt={`${p.title} Website Interface Preview`}
                    fill
                    sizes="(max-width: 768px) 100vw, 400px"
                    className="object-cover object-top hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Card Content (Crisp High-Contrast Typography) */}
                <div className="p-6">
                  <span className="text-[10px] tracking-[0.2em] font-semibold text-[#806648] uppercase block mb-2">
                    {p.category}
                  </span>
                  <h3 className="font-['Playfair_Display'] text-2xl font-normal text-[#211e19] mb-3">
                    {p.title}
                  </h3>
                  <p className="text-xs text-[#554739] leading-relaxed font-sans mb-4">
                    {p.desc}
                  </p>

                  {/* Technology Badges */}
                  <div className="flex flex-wrap gap-1.5 mt-2">
                    {p.stack.map((item, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-0.5 rounded text-[10px] font-medium bg-[#f0e4d2] text-[#4a3d31] border border-[rgba(91,68,43,0.12)]"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Action Links */}
              <div className="px-6 py-4 bg-[#f7eedf] border-t border-[rgba(91,68,43,0.15)] flex items-center justify-between gap-3">
                <Link
                  href={`/work/${p.id}`}
                  className="px-3 py-1 rounded-full border border-[rgba(91,68,43,0.3)] bg-[#fcf7ee] !text-[#211e19] text-[10px] font-semibold tracking-wider hover:bg-[#211e19] hover:!text-[#f8eddb] hover:border-[#211e19] transition-all duration-200 shadow-2xs inline-flex items-center gap-1.5"
                >
                  <span>Architecture &amp; Case Study</span>
                  <span>→</span>
                </Link>
                <a
                  href={p.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1 rounded-full border border-[rgba(91,68,43,0.3)] bg-[#fcf7ee] !text-[#211e19] text-[10px] font-semibold tracking-wider hover:bg-[#211e19] hover:!text-[#f8eddb] hover:border-[#211e19] transition-all duration-200 shadow-2xs inline-flex items-center gap-1.5"
                  aria-label={`View ${p.title} on GitHub`}
                >
                  <span>GitHub</span>
                  <span>↗</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* ========================================================================= */}
        {/* BTECH CERTIFICATES & CREDENTIALS SECTION (UPLOADED ON LINKEDIN) */}
        {/* ========================================================================= */}
        <section id="certificates" className="mt-20 pt-12 border-t border-[rgba(91,68,43,0.18)]">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2 h-2 rounded-full bg-[#b49368]" />
                <span className="text-[10.5px] font-semibold tracking-[0.25em] text-[#b49368] uppercase">
                  ACADEMIC &amp; INDUSTRY CREDENTIALS
                </span>
              </div>
              <h2 className="font-['Playfair_Display'] text-3xl sm:text-4xl md:text-5xl font-normal text-[#211e19] mb-3">
                B.Tech AI Certifications &amp; Licenses
              </h2>
              <p className="text-[#554739] text-sm sm:text-base max-w-2xl font-sans leading-relaxed">
                Official certifications and academic achievements uploaded on LinkedIn, demonstrating mastery in neural network architectures, predictive modeling, data pipelines, and full-stack software development.
              </p>
            </div>

            <a
              href="https://www.linkedin.com/in/aryan-patel-ai/details/certifications/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1 rounded-full border border-[rgba(91,68,43,0.3)] bg-[#fcf7ee] !text-[#211e19] text-[10px] font-semibold tracking-wider hover:bg-[#211e19] hover:!text-[#f8eddb] hover:border-[#211e19] transition-all duration-200 shadow-2xs inline-flex items-center gap-1.5 shrink-0"
            >
              <span>Verify on LinkedIn</span>
              <span>↗</span>
            </a>
          </div>

          {/* Certificate Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certificates.map((cert, index) => (
              <div
                key={index}
                className="bg-[#fcf7ee] border border-[rgba(91,68,43,0.18)] rounded-xl p-6 flex flex-col justify-between shadow-xs hover:shadow-[0_10px_25px_rgba(91,68,43,0.12)] hover:border-[rgba(180,147,104,0.4)] hover:-translate-y-1.5 transition-all duration-300"
              >
                <div>
                  {/* Top Credential Tag */}
                  <div className="flex items-center justify-between pb-3 mb-4 border-b border-[rgba(91,68,43,0.12)] text-[10px] font-semibold tracking-wider uppercase">
                    <span className="text-[#806648]">✦ {cert.category}</span>
                    <span className="px-2 py-0.5 rounded bg-[#f0e4d2] text-[#6b553e] font-mono text-[9px] border border-[rgba(91,68,43,0.12)]">
                      {cert.date}
                    </span>
                  </div>

                  <h3 className="font-['Playfair_Display'] text-xl font-normal text-[#211e19] mb-2">
                    {cert.title}
                  </h3>
                  <span className="text-[11px] font-medium text-[#77573a] block mb-3 font-mono">
                    {cert.issuer}
                  </span>

                  <p className="text-xs text-[#554739] leading-relaxed font-sans mb-5">
                    {cert.description}
                  </p>

                  {/* Skills tags */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {cert.skills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="px-2 py-0.5 rounded text-[10px] bg-[#f0e4d2] text-[#4a3d31] border border-[rgba(91,68,43,0.12)] font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-3 border-t border-[rgba(91,68,43,0.12)] flex items-center justify-between">
                  <span className="text-[10px] text-[#806648] font-semibold tracking-wider uppercase">
                    LinkedIn Uploaded
                  </span>
                  <a
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1 rounded-full border border-[rgba(91,68,43,0.3)] bg-[#fcf7ee] !text-[#211e19] text-[10px] font-semibold tracking-wider hover:bg-[#211e19] hover:!text-[#f8eddb] hover:border-[#211e19] transition-all duration-200 shadow-2xs inline-flex items-center gap-1"
                  >
                    <span>View Credential</span>
                    <span>↗</span>
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Honors & Competitions Strip */}
          <div className="mt-12 pt-10 border-t border-[rgba(91,68,43,0.15)]">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-[#b49368]" />
              <span className="text-[10px] font-semibold tracking-[0.25em] text-[#b49368] uppercase">
                HONORS &amp; COMPETITIONS
              </span>
            </div>
            <h3 className="font-['Playfair_Display'] text-2xl sm:text-3xl text-[#211e19] mb-6">
              Leadership &amp; Academic Distinctions
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {honorsAndAwards.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-[#fcf7ee] border border-[rgba(91,68,43,0.18)] rounded-lg p-5 flex flex-col justify-between shadow-xs hover:border-[rgba(180,147,104,0.4)] hover:-translate-y-1 transition-all duration-200"
                >
                  <div>
                    <span className="px-2 py-0.5 rounded bg-[#f0e4d2] text-[#6b553e] font-mono text-[9px] uppercase tracking-wider block w-fit mb-3 border border-[rgba(91,68,43,0.12)]">
                      {item.badge}
                    </span>
                    <h4 className="font-['Playfair_Display'] text-lg text-[#211e19] mb-1 leading-snug">
                      {item.title}
                    </h4>
                    <span className="text-[11px] font-mono text-[#806648] block mb-2">
                      {item.issuer}
                    </span>
                    <p className="text-xs text-[#554739] font-sans leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* LinkedIn Profile Verification Callout */}
          <div className="mt-10 p-6 sm:p-7 rounded-xl bg-[#211e19] !text-[#f8eddb] border border-[rgba(180,147,104,0.35)] shadow-[0_8px_24px_rgba(33,30,25,0.15)] flex flex-col sm:flex-row sm:items-center justify-between gap-5">
            <div className="flex items-start sm:items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-[rgba(180,147,104,0.18)] border border-[rgba(180,147,104,0.35)] flex items-center justify-center shrink-0 !text-[#b49368]">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.45a1.6 1.6 0 1 0 0 3.2 1.6 1.6 0 0 0 0-3.2Z" />
                </svg>
              </div>
              <div>
                <h4 className="font-['Playfair_Display'] text-lg sm:text-xl font-normal !text-[#f8eddb] mb-1">
                  Continuous Learning &amp; Industry Verification
                </h4>
                <p className="text-xs sm:text-[13px] !text-[#d6c4ad] leading-relaxed max-w-xl font-sans">
                  All certificates, licenses, and project milestones are actively maintained and linked to Aryan Patel&apos;s verified LinkedIn profile.
                </p>
              </div>
            </div>
            <a
              href="https://www.linkedin.com/in/aryan-patel-ai/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1 rounded-full border border-[rgba(91,68,43,0.3)] bg-[#fcf7ee] !text-[#211e19] text-[10px] font-semibold tracking-wider hover:bg-[#211e19] hover:!text-[#f8eddb] hover:border-[#211e19] transition-all duration-200 shadow-2xs inline-flex items-center gap-1.5 whitespace-nowrap shrink-0"
            >
              <span>linkedin.com/in/aryan-patel-ai</span>
              <span>↗</span>
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}
