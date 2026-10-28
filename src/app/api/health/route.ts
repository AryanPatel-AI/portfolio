export const dynamic = "force-dynamic";

export async function GET() {
  const uptime = typeof process !== "undefined" && process.uptime ? process.uptime() : 0;

  return Response.json(
    {
      status: "healthy",
      service: "Aryan Patel Portfolio Platform",
      environment: process.env.NODE_ENV || "production",
      uptime: Math.round(uptime),
      timestamp: new Date().toISOString(),
    },
    {
      status: 200,
      headers: {
        "Cache-Control": "no-store, no-cache, must-revalidate",
        "Content-Type": "application/json",
      },
    }
  );
}
