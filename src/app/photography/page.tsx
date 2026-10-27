import type { Metadata } from "next";
import PhotographyClient from "./PhotographyClient";

export const metadata: Metadata = {
  title: "Photography Portfolio & Visual Archives — Aryan Patel",
  description:
    "Curated fine art photography featuring high-altitude Himalayan mountain vistas across Dal Lake, sacred sandstone architectural heritage of Rajasthan, and environmental portraiture by Aryan Patel.",
  alternates: {
    canonical: "/photography",
  },
  openGraph: {
    title: "Photography Portfolio & Visual Archives | Aryan Patel",
    description:
      "Curated fine art photography featuring Himalayan mountain vistas across Dal Lake, Rajasthan royal sandstone architecture, and environmental portraiture.",
    url: "/photography",
    images: [
      {
        url: "/images/photography/Dal_Lake.jpeg",
        width: 1200,
        height: 800,
        alt: "Dal Lake Shikaras and Reflections by Aryan Patel",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Photography Portfolio & Visual Archives | Aryan Patel",
    description:
      "Himalayan mountain vistas, Rajasthan royal heritage, and environmental portraiture.",
    images: ["/images/photography/Dal_Lake.jpeg"],
  },
};

export default function PhotographyPage() {
  return <PhotographyClient />;
}
