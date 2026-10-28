import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

interface ProjectData {
  title: string;
  category: string;
  type: string;
  status: string;
  tech: string;
  summary: string;
  features: string[];
  objective: string;
  githubUrl: string;
  liveUrl?: string;
  image?: string;
}

const PROJECTS_MAP: Record<string, ProjectData> = {
  tradesphere: {
    title: "TradeSphere Terminal",
    category: "FINTECH & SYSTEMS · PRODUCTION MONOREPO",
    type: "Financial Market Platform",
    status: "Active Production",
    tech: "TypeScript · Next.js · WebSockets · Tailwind CSS",
    summary:
      "A production-grade Indian stock market terminal, derivatives analytics suite, and paper trading ecosystem built to achieve parity with Groww and Zerodha Kite.",
    features: [
      "Live Indian benchmark indices (NIFTY 50, SENSEX, BANK NIFTY, FINNIFTY) with real-time WebSocket ticker",
      "Dynamic session reordering for NSE Equity and MCX Commodity trading hours",
      "Consolidated equity folio with mark-to-market valuations and instant Square-Off workflows",
      "Options chain explorer and derivatives analytics built with low-latency state synchronization",
    ],
    objective:
      "Engineered an institutional-grade trading interface enforcing realistic exchange rules, millisecond-accurate updates, and high-density financial data visualizations.",
    githubUrl: "https://github.com/AryanPatel-AI/TradeSphere",
    image: "/images/projects/project-ml.jpg",
  },
  vyro: {
    title: "VYRO",
    category: "AI & CREATOR ECONOMY · MONOREPO",
    type: "AI Social & Brand Platform",
    status: "Under Active Development",
    tech: "Next.js · TypeScript · AI SDKs · PostgreSQL · Tailwind",
    summary:
      "An end-to-end AI platform empowering digital creators and brands with generative content pipelines, cross-platform audience telemetry, automated scheduling, and sponsorship CRM.",
    features: [
      "Monorepo architecture separating AI generative microservices, database, and client apps",
      "Multi-modal prompt orchestrator for automated captions, scripts, and content calendar planning",
      "Unified performance analytics consolidating reach and engagement metrics across networks",
      "Automated brand deal tracker and pipeline management for high-velocity creators",
    ],
    objective:
      "Transforming fragmented social media management by placing agentic AI models directly into the creator's creative and operational loop.",
    githubUrl: "https://github.com/AryanPatel-AI/VYRO",
    image: "/images/projects/project-ai.jpg",
  },
  syncora: {
    title: "Syncora — Real-Time Watch Party & Stream Platform",
    category: "REAL-TIME SYSTEMS · WEBSOCKETS & REACT",
    type: "Collaborative Streaming Platform",
    status: "Live in Production",
    tech: "TypeScript · React 18 · Socket.IO · Node.js · Express · Tailwind CSS",
    summary:
      "A real-time collaborative YouTube watch party and live-stream viewing platform engineered with an intimate digital screening room aesthetic, server-authoritative playback synchronization, host approval workflows, and synchronized live chat.",
    features: [
      "Server-authoritative playback synchronization with elapsed time interpolation and anti-echo loop guards",
      "Real-time room creation with unique room codes, guest participant permissions, and host controls",
      "Synchronized YouTube live streams and video player embedding with responsive screening room UI",
      "Interactive real-time chat with message moderation, presence indicators, and anti-spam protection",
    ],
    objective:
      "Engineered an intimate, lag-free collaborative media experience eliminating playback drift across geographically distributed viewers through optimized WebSocket architectures.",
    githubUrl: "https://github.com/AryanPatel-AI/syncora",
    liveUrl: "https://syncora-kappa.vercel.app",
    image: "/images/projects/syncora.png",
  },
  "speech-to-text-ai": {
    title: "Speech-to-Text AI Assistant (Scribe)",
    category: "SPEECH AI & NLP · VERCEL PRODUCTION",
    type: "AI Transcription Web Platform",
    status: "Live in Production",
    tech: "Python Flask · Web Speech API · Deep Audio AI · Vercel",
    summary:
      "A clean, minimal, and futuristic AI-powered speech-to-text assistant (Scribe by Patel & Co.) that converts spoken audio and recordings into accurate real-time transcriptions online.",
    features: [
      "Instant Speech-to-Text transcription with real-time audio capture and high-accuracy parsing",
      "Upload audio files or record voice dynamically with ambient noise handling",
      "Futuristic dark-mode UI with fluid aurora background dynamics and typing text effects",
      "History management for past transcription sessions and exportable text outputs",
    ],
    objective:
      "Engineered an intuitive, distraction-free voice intelligence platform bridging real-time acoustics and textual cognition for creators, students, and professionals.",
    githubUrl: "https://github.com/AryanPatel-AI/Speech-to-Text-Assistant",
    liveUrl: "https://speech-to-text-ai-three.vercel.app/",
    image: "/images/projects/speech-to-text.png",
  },
  "face-recognition": {
    title: "Neural Biometric Vision",
    category: "COMPUTER VISION · PYTHON PIPELINE",
    type: "Biometric Vision System",
    status: "Completed Prototype",
    tech: "Python · OpenCV · Deep Learning · NumPy",
    summary:
      "Real-time facial landmark detection, vector embedding extraction, and multi-subject biometric identification system engineered in Python.",
    features: [
      "High-framerate video stream facial detection and bounding box localization",
      "128-dimensional facial embedding generation for robust vector distance matching",
      "Resistance to angle variation, variable lighting, and partial occlusions",
      "Local identity database management with real-time authentication logging",
    ],
    objective:
      "Exploring foundational computer vision mechanics and high-performance tensor transformations for real-time security and presence verification.",
    githubUrl: "https://github.com/AryanPatel-AI/FaceRecognition",
    image: "/images/projects/project-ml.jpg",
  },
  "ai-event-organiser": {
    title: "Full-Stack AI Event Organiser",
    category: "FULL-STACK AI · NEXT.JS & CONVEX",
    type: "Production Web Platform",
    status: "Completed Application",
    tech: "Next.js · Convex Reactive DB · Clerk Auth · Shadcn UI",
    summary:
      "Modern full-stack event organization ecosystem featuring real-time collaborative scheduling, secure Clerk user authentication, and AI-curated event recommendations.",
    features: [
      "Convex reactive real-time database ensuring instantaneous attendee and ticket updates",
      "Enterprise authentication and session protection implemented with Clerk",
      "Accessible, polished design system built with Tailwind CSS and Shadcn UI primitives",
      "Intelligent scheduling assistant optimizing itinerary and venue management",
    ],
    objective:
      "Demonstrating end-to-end full stack competence by synthesizing reactive backend sync, rock-solid security, and modern UI engineering.",
    githubUrl: "https://github.com/AryanPatel-AI/ai-event-organiser",
    image: "/images/projects/ai-event-hero.png",
  },
};

export function generateStaticParams() {
  return Object.keys(PROJECTS_MAP).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = PROJECTS_MAP[slug];
  if (!project) {
    return {
      title: "Project Architecture & Case Study",
      description:
        "System architecture, technical implementation, and case study by Aryan Patel.",
    };
  }
  return {
    title: `${project.title} — System Architecture & Case Study`,
    description: project.summary,
    alternates: {
      canonical: `/work/${slug}`,
    },
    openGraph: {
      title: `${project.title} | Aryan Patel`,
      description: project.summary,
      url: `/work/${slug}`,
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.title} | Aryan Patel`,
      description: project.summary,
    },
  };
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project =
    PROJECTS_MAP[slug] || {
      title: slug
        ? slug.split("-").map((w) => w.charAt(0).toUpperCase() + w.slice(1)).join(" ")
        : "TradeSphere Terminal",
      category: "BTECH AI & ENGINEERING",
      type: "Engineering System",
      status: "Active Work",
      tech: "Next.js · TypeScript · AI/ML · Python",
      summary:
        "An engineering project developed by Aryan Patel combining artificial intelligence, system design, and high-performance web architecture.",
      features: [
        "Architected with modern TypeScript and component modularity",
        "High performance optimization and clean code design",
        "Seamless integration with cloud and AI inference APIs",
      ],
      objective:
        "Building practical, explainable, and production-ready intelligent software systems.",
      githubUrl: "https://github.com/AryanPatel-AI",
    };

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
          <span>BTech AI Portfolio / 2026</span>
        </div>
      </header>

      {/* Main Container */}
      <main className="max-w-6xl mx-auto px-6 sm:px-10 py-10 sm:py-14">
        {/* Back Link & GitHub / Live Demo buttons */}
        <div className="flex items-center justify-between mb-8">
          <Link
            href="/work"
            className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] text-[#77573a] hover:text-[#211e19] uppercase transition-colors"
          >
            <span>←</span>
            <span>BACK TO WORK</span>
          </Link>

          <div className="flex items-center gap-2.5">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3.5 py-1 rounded-full border border-[#211e19] bg-[#211e19] !text-[#f8eddb] text-[10px] font-semibold tracking-wider hover:bg-[#433527] hover:border-[#433527] transition-all duration-200 shadow-2xs inline-flex items-center gap-1.5"
              >
                <span>Launch Live App</span>
                <span>↗</span>
              </a>
            )}
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1 rounded-full border border-[rgba(91,68,43,0.3)] bg-[#fcf7ee] !text-[#211e19] text-[10px] font-semibold tracking-wider hover:bg-[#211e19] hover:!text-[#f8eddb] hover:border-[#211e19] transition-all duration-200 shadow-2xs inline-flex items-center gap-1.5"
            >
              <span>View on GitHub</span>
              <span>↗</span>
            </a>
          </div>
        </div>

        {/* Project Header */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start pb-12 border-b border-[rgba(91,68,43,0.18)]">
          <div className="md:col-span-8">
            <span className="text-[10.5px] font-semibold tracking-[0.24em] text-[#b49368] uppercase block mb-3">
              {project.category}
            </span>
            <h1 className="font-['Playfair_Display'] text-4xl sm:text-5xl md:text-6xl font-normal text-[#211e19] mb-4">
              {project.title}
            </h1>
            <p className="text-[#554739] text-lg font-light leading-relaxed font-sans max-w-2xl">
              {project.summary}
            </p>
          </div>

          {/* Project Metadata Sidebar */}
          <div className="md:col-span-4 p-6 bg-[#f0e4d2] border border-[rgba(91,68,43,0.18)] rounded-xl shadow-xs">
            <span className="text-[10px] font-semibold tracking-[0.2em] text-[#806648] uppercase block mb-4">
              Project Specification
            </span>
            <div className="space-y-3 text-xs">
              <div className="flex justify-between border-b border-[rgba(91,68,43,0.15)] pb-2">
                <span className="text-[#77573a]">Type</span>
                <span className="text-[#211e19] font-medium">{project.type}</span>
              </div>
              <div className="flex justify-between border-b border-[rgba(91,68,43,0.15)] pb-2">
                <span className="text-[#77573a]">Status</span>
                <span className="text-[#211e19] font-medium">{project.status}</span>
              </div>
              <div className="flex justify-between border-b border-[rgba(91,68,43,0.15)] pb-2">
                <span className="text-[#77573a]">Stack</span>
                <span className="text-[#211e19] font-medium text-right ml-4">{project.tech}</span>
              </div>
              {project.liveUrl && (
                <div className="flex justify-between border-b border-[rgba(91,68,43,0.15)] pb-2">
                  <span className="text-[#77573a]">Live Link</span>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#806648] font-semibold hover:text-[#211e19] transition-colors truncate max-w-[200px]"
                  >
                    Launch Demo ↗
                  </a>
                </div>
              )}
              <div className="flex justify-between pt-1">
                <span className="text-[#77573a]">Author</span>
                <a
                  href="https://github.com/AryanPatel-AI"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#806648] font-semibold hover:text-[#211e19] transition-colors"
                >
                  @AryanPatel-AI ↗
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Live Interface Preview Banner */}
        {project.image && (
          <div className="my-10 bg-[#fcf7ee] border border-[rgba(91,68,43,0.18)] rounded-xl overflow-hidden shadow-xs">
            <div className="px-4 py-2.5 bg-[#f0e4d2] border-b border-[rgba(91,68,43,0.15)] flex items-center justify-between">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-[#d68a7a]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#e8c87e]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#8fb89c]" />
              </div>
              <span className="text-[10px] tracking-wider text-[#77573a] font-mono">
                {project.liveUrl ? project.liveUrl.replace(/^https?:\/\//, "").replace(/\/$/, "") : "production-interface"}
              </span>
              {project.liveUrl ? (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[10px] text-[#806648] font-semibold hover:text-[#211e19] transition-colors inline-flex items-center gap-1"
                >
                  <span>Open Live App</span>
                  <span>↗</span>
                </a>
              ) : (
                <span className="text-[10px] text-[#b49368]">Interface</span>
              )}
            </div>
            <div className="relative aspect-16/9 w-full bg-[#121217]">
              <Image
                src={project.image}
                alt={`${project.title} Interface Preview`}
                fill
                sizes="(max-width: 1200px) 100vw, 1200px"
                className="object-cover object-top"
                priority
              />
            </div>
          </div>
        )}

        {/* Key Features & Details */}
        <div className="py-10 grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="bg-[#fcf7ee] p-8 border border-[rgba(91,68,43,0.18)] rounded-xl shadow-xs">
            <h3 className="text-sm font-semibold tracking-[0.2em] text-[#806648] uppercase mb-5">
              Key Architectural Features
            </h3>
            <ul className="space-y-3.5 text-sm text-[#44382c] font-sans">
              {project.features.map((feature, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <span className="text-[#b49368] mt-0.5">✦</span>
                  <span className="leading-relaxed">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-[#fcf7ee] p-8 border border-[rgba(91,68,43,0.18)] rounded-xl shadow-xs flex flex-col justify-between">
            <div>
              <h3 className="text-sm font-semibold tracking-[0.2em] text-[#806648] uppercase mb-5">
                Engineering Rationale
              </h3>
              <p className="text-sm text-[#44382c] leading-relaxed font-sans mb-6">
                {project.objective}
              </p>
            </div>

            <div className="p-5 border border-[rgba(91,68,43,0.18)] bg-[#f0e4d2] rounded-lg">
              <span className="text-[10px] tracking-[0.2em] text-[#806648] uppercase block mb-2 font-semibold">
                Deployment &amp; Verification
              </span>
              <p className="text-xs text-[#554739] leading-relaxed">
                Live deployment and full source code with continuous development history are hosted on Vercel and GitHub.
              </p>
              <div className="mt-3 flex flex-wrap items-center gap-2">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1 rounded-full border border-[#211e19] bg-[#211e19] !text-[#f8eddb] text-[10px] font-semibold tracking-wider hover:bg-[#433527] hover:border-[#433527] transition-all duration-200 shadow-2xs inline-flex items-center gap-1.5"
                  >
                    <span>Launch Live App</span>
                    <span>↗</span>
                  </a>
                )}
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1 rounded-full border border-[rgba(91,68,43,0.3)] bg-[#fcf7ee] !text-[#211e19] text-[10px] font-semibold tracking-wider hover:bg-[#211e19] hover:!text-[#f8eddb] hover:border-[#211e19] transition-all duration-200 shadow-2xs inline-flex items-center gap-1.5"
                >
                  <span>Inspect on GitHub</span>
                  <span>→</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
