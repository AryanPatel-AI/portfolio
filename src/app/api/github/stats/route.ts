import { fetchGitHubPortfolioStats } from "../../../../lib/github.ts";

export const dynamic = "force-dynamic";

export async function GET() {
  const stats = await fetchGitHubPortfolioStats();

  return Response.json(
    {
      success: true,
      stats,
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
