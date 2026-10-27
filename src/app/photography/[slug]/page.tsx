import type { Metadata } from "next";
import LandscapeCollectionClient from "./LandscapeCollectionClient";

const COLLECTION_METADATA: Record<string, { title: string; desc: string }> = {
  portraits: {
    title: "Portraits & Human Nuance — Photography Collection",
    desc: "Environmental and studio portraiture observing human nuance, expression, natural shadows, and character across heritage corridors.",
  },
  landscapes: {
    title: "Mountain Ridges & Dal Lake — Photography Collection",
    desc: "High-altitude mountain vistas, Dal Lake shikaras and morning mists, and pine valleys across Kashmir by Aryan Patel.",
  },
  heritage: {
    title: "Sandstone Domes & Sacred Heritage — Photography Collection",
    desc: "Ancient sandstone bastions, sacred temple sanctums, and architectural geometry across Rajasthan and India.",
  },
};

export function generateStaticParams() {
  return [
    { slug: "portraits" },
    { slug: "landscapes" },
    { slug: "heritage" },
  ];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const meta = COLLECTION_METADATA[slug] || COLLECTION_METADATA.landscapes;

  return {
    title: meta.title,
    description: meta.desc,
    alternates: {
      canonical: `/photography/${slug}`,
    },
    openGraph: {
      title: `${meta.title} | Aryan Patel`,
      description: meta.desc,
      url: `/photography/${slug}`,
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: `${meta.title} | Aryan Patel`,
      description: meta.desc,
    },
  };
}

export default async function PhotographyCollectionPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  return <LandscapeCollectionClient slug={slug} />;
}
