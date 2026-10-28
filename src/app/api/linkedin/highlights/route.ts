import { getLinkedInHighlights } from "../../../../lib/content.ts";

export const dynamic = "force-dynamic";

export async function GET() {
  const highlights = await getLinkedInHighlights();

  return Response.json(
    {
      success: true,
      count: highlights.length,
      data: highlights,
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
