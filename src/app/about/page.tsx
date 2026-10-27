import type { Metadata } from "next";
import AboutClient from "./AboutClient";

export const metadata: Metadata = {
  title: "About Aryan Patel — AI Student, Systems Engineer & Photographer",
  description:
    "Learn about Aryan Patel, a BTech Artificial Intelligence student, creative developer, and photographer exploring the convergence of machine learning, trading systems, and heritage visual storytelling.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About Aryan Patel — AI Student, Systems Engineer & Photographer",
    description:
      "BTech Artificial Intelligence student, creative software developer, and photographer.",
    url: "/about",
    images: [
      {
        url: "/images/portrait/IMG_0579.jpg",
        width: 1200,
        height: 1600,
        alt: "Aryan Patel portrait",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Aryan Patel — AI Student & Photographer",
    description:
      "BTech Artificial Intelligence student, creative software developer, and photographer.",
    images: ["/images/portrait/IMG_0579.jpg"],
  },
};

export default function AboutPage() {
  return <AboutClient />;
}
