import { getSupabaseServerClient } from "../../../../lib/supabase/server.ts";
import { getInMemoryMessages } from "../../../../lib/messages.ts";

export const dynamic = "force-dynamic";

function isAuthorized(request: Request): boolean {
  const secretKey = process.env.ADMIN_SECRET_KEY || "aryan-admin-2026";
  const authHeader = request.headers.get("authorization");
  const customHeader = request.headers.get("x-admin-token");

  if (customHeader === secretKey) return true;
  if (authHeader && authHeader.replace(/^Bearer\s+/i, "").trim() === secretKey) return true;

  // Also support query param for testing in browser: ?token=...
  const url = new URL(request.url);
  if (url.searchParams.get("token") === secretKey) return true;

  return false;
}

export async function GET(request: Request) {
  if (!isAuthorized(request)) {
    return Response.json(
      { success: false, error: "Unauthorized. Valid administrator secret token required." },
      { status: 401 }
    );
  }

  const supabase = getSupabaseServerClient(true);
  if (supabase) {
    try {
      const { data, error } = await supabase
        .from("contact_messages")
        .select("*")
        .order("created_at", { ascending: false })
        .limit(50);

      if (!error && data) {
        return Response.json({ success: true, source: "supabase", count: data.length, data });
      }
    } catch (e) {
      console.warn("[Admin API] Supabase query failed, falling back:", e);
    }
  }

  const inMemory = getInMemoryMessages();
  return Response.json({
    success: true,
    source: "in-memory",
    count: inMemory.length,
    data: inMemory,
  });
}
