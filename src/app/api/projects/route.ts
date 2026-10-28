import { getPortfolioProjects } from "../../../lib/content.ts";

export const dynamic = "force-dynamic";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const tag = searchParams.get("tag");

  let projects = await getPortfolioProjects();

  if (tag && tag !== "All") {
    projects = projects.filter((p) => p.category.toLowerCase().includes(tag.toLowerCase()));
  }

  return Response.json(
    {
      success: true,
      count: projects.length,
      data: projects,
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
