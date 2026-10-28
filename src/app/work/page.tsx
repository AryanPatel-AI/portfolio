import type { Metadata } from "next";
import WorkClient from "./WorkClient";

export const metadata: Metadata = {
  title: "Engineering Portfolio & AI Systems — Aryan Patel",
  description:
    "Featured AI projects, financial terminals (TradeSphere), real-time streaming platforms (Syncora), speech AI assistants, and verified IBM/LinkedIn certifications by Aryan Patel.",
  alternates: {
    canonical: "/work",
  },
  openGraph: {
    title: "Engineering Portfolio & AI Systems | Aryan Patel",
    description:
      "Featured AI projects, financial terminals (TradeSphere), real-time streaming platforms (Syncora), and computer vision pipelines.",
    url: "/work",
    images: [
      {
        url: "/images/projects/project-ml.jpg",
        width: 1200,
        height: 630,
        alt: "TradeSphere Terminal and AI Systems by Aryan Patel",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Engineering Portfolio & AI Systems | Aryan Patel",
    description:
      "Featured AI projects, financial terminals, and verified machine learning credentials.",
    images: ["/images/projects/project-ml.jpg"],
  },
};

export default function WorkPage() {
  return <WorkClient />;
}
