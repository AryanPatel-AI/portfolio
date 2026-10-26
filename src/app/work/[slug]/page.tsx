import Link from "next/link";

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
  },
  "ai-translator": {
    title: "Live AI Translator PWA",
    category: "SPEECH & NLP · SERVERLESS PWA",
    type: "Progressive Web App",
    status: "Production Ready",
    tech: "Python Flask · Web Speech API · deep-translator · Vercel",
    summary:
      "A high-accuracy, real-time live voice translation web application that continuously listens, transcribes speech, translates across international languages, and synthesizes natural audio output.",
    features: [
      "Continuous Speech-to-Text (STT) utilizing low-latency Web Speech APIs",
      "Deep translation backend engine with zero-cost serverless execution on Vercel",
      "Instant Text-to-Speech (TTS) natural audio playback for hands-free conversations",
      "Installable Progressive Web App (PWA) with offline caching and mobile home-screen integration",
    ],
    objective:
      "Breaking linguistic barriers through a zero-cost serverless architecture accessible instantly on any mobile or desktop browser without app store friction.",
    githubUrl: "https://github.com/AryanPatel-AI/aitranslator-webapp",
  },
  "speech-to-text-ai": {
    title: "Speech-to-Text AI Assistant",
    category: "DEEP LEARNING · HUGGING FACE SPACES",
    type: "AI Model Microservice",
    status: "Deployed on Hugging Face",
    tech: "Docker · Python · PyTorch · Hugging Face SDK",
    summary:
      "Containerized audio processing service leveraging deep speech recognition models to transcribe raw acoustics into punctuated, structured text streams.",
    features: [
      "Dockerized container pipeline deployed on Hugging Face Spaces for 24/7 availability",
      "Acoustic noise filtering and multi-speaker transcription tolerance",
      "API endpoints optimized for programmatic agentic querying and voice assistant integration",
      "Fast inference optimization with quantised weights for CPU/GPU instances",
    ],
    objective:
      "Providing a resilient, open-source audio understanding endpoint for multi-agent workflows and accessibility-first applications.",
    githubUrl: "https://github.com/AryanPatel-AI",
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
  },
};

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
        {/* Back Link & GitHub button */}
        <div className="flex items-center justify-between mb-8">
          <Link
            href="/work"
            className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] text-[#77573a] hover:text-[#211e19] uppercase transition-colors"
          >
            <span>←</span>
            <span>BACK TO WORK</span>
          </Link>

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

        {/* Key Features & Details */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 gap-12">
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
                Profile Verification
              </span>
              <p className="text-xs text-[#554739] leading-relaxed">
                Source code, continuous commits, and technical documentation are hosted on Aryan Patel&apos;s GitHub repository.
              </p>
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 px-3 py-1 rounded-full border border-[rgba(91,68,43,0.3)] bg-[#fcf7ee] !text-[#211e19] text-[10px] font-semibold tracking-wider hover:bg-[#211e19] hover:!text-[#f8eddb] hover:border-[#211e19] transition-all duration-200 shadow-2xs inline-flex items-center gap-1.5"
              >
                <span>Inspect repository code on GitHub</span>
                <span>→</span>
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
