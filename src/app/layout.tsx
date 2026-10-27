import type { Metadata } from "next";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://aryanpatel.dev";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Aryan Patel — AI, Systems & Photography",
    template: "%s | Aryan Patel",
  },
  description:
    "The official portfolio of Aryan Patel — BTech in Artificial Intelligence, creative software engineer, and fine art landscape & heritage photographer.",
  keywords: [
    "Aryan Patel",
    "Aryan Patel AI",
    "BTech Artificial Intelligence",
    "Creative Developer",
    "TradeSphere Terminal",
    "Indian Landscape Photography",
    "Rajasthan Architecture Photography",
    "Dal Lake Photography Kashmir",
    "Computer Vision Python",
    "Full Stack Next.js Engineer",
  ],
  authors: [{ name: "Aryan Patel", url: siteUrl }],
  creator: "Aryan Patel",
  publisher: "Aryan Patel",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    title: "Aryan Patel — AI, Systems & Photography",
    description:
      "BTech in Artificial Intelligence student, creative developer, and photographer documenting Indian heritage and high-performance software systems.",
    siteName: "Aryan Patel Portfolio",
    images: [
      {
        url: "/images/portrait/aryan-pillared-court.jpg",
        width: 1200,
        height: 800,
        alt: "Aryan Patel in heritage pillared colonnade",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Aryan Patel — AI, Systems & Photography",
    description:
      "BTech in Artificial Intelligence student, creative developer, and photographer.",
    images: ["/images/portrait/aryan-pillared-court.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${siteUrl}/#person`,
      name: "Aryan Patel",
      jobTitle: "Artificial Intelligence Engineer & Photographer",
      description:
        "BTech in Artificial Intelligence student, creative software developer, and photographer.",
      url: siteUrl,
      image: `${siteUrl}/images/portrait/IMG_0579.jpg`,
      sameAs: [
        "https://github.com/AryanPatel-AI",
        "https://www.linkedin.com/in/aryan-patel-ai/",
        "https://www.instagram.com/click_by_aryan/",
        "https://www.instagram.com/___aryan___patel/",
        "https://www.instagram.com/_om_x_aryan/",
      ],
      knowsAbout: [
        "Artificial Intelligence",
        "Machine Learning",
        "Computer Vision",
        "Full-Stack Web Development",
        "TypeScript",
        "Next.js",
        "Python",
        "Landscape Photography",
        "Heritage Architecture Photography",
      ],
      alumniOf: {
        "@type": "CollegeOrUniversity",
        name: "Invertis University",
      },
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: "Aryan Patel Portfolio",
      description:
        "The official portfolio of Aryan Patel — AI systems, creative engineering, and fine art photography.",
      publisher: {
        "@id": `${siteUrl}/#person`,
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
