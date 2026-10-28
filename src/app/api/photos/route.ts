import { getPhotographyStream } from "../../../lib/content.ts";

export const dynamic = "force-dynamic";

export async function GET() {
  const photos = await getPhotographyStream();

  return Response.json(
    {
      success: true,
      mode: "combined-chronological-stream",
      count: photos.length,
      data: photos,
    },
    {
      status: 200,
      headers: {
        "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400",
        "Content-Type": "application/json",
      },
    }
  );
}
