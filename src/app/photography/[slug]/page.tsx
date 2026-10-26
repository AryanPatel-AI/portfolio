import LandscapeCollectionClient from "./LandscapeCollectionClient";

export default async function PhotographyCollectionPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  return <LandscapeCollectionClient slug={slug} />;
}
