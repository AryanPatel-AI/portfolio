import type { Metadata } from "next";
import GamingClient from "./GamingClient";

export const metadata: Metadata = {
  title: "Competitive Gaming & Esports Persona — Aryan Patel",
  description:
    "Tactical shooter clutch highlights (Valorant/CS2), competitive esports scrims, setup specifications, and gaming creator reels by Aryan Patel (@_om_x_aryan).",
  alternates: {
    canonical: "/gaming",
  },
  openGraph: {
    title: "Competitive Gaming & Esports Persona | Aryan Patel",
    description:
      "Tactical shooter highlights, competitive esports scrims, and gaming creator reels by Aryan Patel.",
    url: "/gaming",
    images: [
      {
        url: "/images/projects/project-gaming.jpg",
        width: 1200,
        height: 630,
        alt: "Gaming and Esports Highlights by Aryan Patel",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Competitive Gaming & Esports Persona | Aryan Patel",
    description:
      "Tactical shooter clutch highlights and competitive esports gameplay.",
    images: ["/images/projects/project-gaming.jpg"],
  },
};

export default function GamingPage() {
  return <GamingClient />;
}
