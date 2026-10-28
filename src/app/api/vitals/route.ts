export const dynamic = "force-dynamic";

export async function POST(request: Request) {
  try {
    const data = await request.json();

    // Log telemetry for performance observability
    if (data && typeof data.name === "string" && typeof data.value === "number") {
      console.log(`[Web Vitals Beacon] Metric: ${data.name} = ${data.value} (${data.rating || "n/a"}) on route: ${data.route || "/"}`);
    }

    return Response.json(
      {
        success: true,
        receivedAt: new Date().toISOString(),
      },
      { status: 200 }
    );
  } catch {
    return Response.json(
      { success: false, error: "Invalid metrics payload" },
      { status: 400 }
    );
  }
}
