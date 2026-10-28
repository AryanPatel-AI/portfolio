import test from "node:test";
import assert from "node:assert/strict";

test("GET /api/projects returns approved project catalog", async () => {
  const { GET } = await import("../src/app/api/projects/route.ts");
  const res = await GET(new Request("http://localhost:3000/api/projects"));
  assert.equal(res.status, 200);

  const data = await res.json();
  assert.equal(data.success, true);
  assert.ok(data.data.length >= 6);

  const scribe = data.data.find((p) => p.name === "Speech-to-Text-Assistant" || p.id === "speech-to-text-ai");
  assert.ok(scribe, "Must include Speech-to-Text-Assistant");
  assert.equal(scribe.deployedUrl, "https://speech-to-text-ai-three.vercel.app/");

  const syncora = data.data.find((p) => p.name === "syncora" || p.id === "syncora");
  assert.ok(syncora, "Must include Syncora");
  assert.equal(syncora.deployedUrl, "https://client-lac-nu-17.vercel.app");

  const crop = data.data.find((p) => p.name === "Smart-crop-recommendation" || p.id === "smart-crop-recommendation");
  assert.ok(crop, "Must include Smart Crop Recommendation");

  const planner = data.data.find((p) => p.name === "Patel-And-Co.Planner" || p.id === "ai-event-organiser");
  assert.ok(planner, "Must include Patel & Co Planner");
  assert.equal(planner.displayBadge, "Work in Progress");
});

test("GET /api/photos returns single combined stream", async () => {
  const { GET } = await import("../src/app/api/photos/route.ts");
  const res = await GET();
  assert.equal(res.status, 200);

  const data = await res.json();
  assert.equal(data.success, true);
  assert.equal(data.mode, "combined-chronological-stream");
  assert.ok(data.data.length >= 8);

  const jaipur = data.data.find((p) => p.title.includes("Jaipur Heritage"));
  assert.ok(jaipur, "Must include Jaipur Heritage portrait");
  assert.equal(jaipur.instagramUrl, "https://www.instagram.com/p/De_8tShBI-o/");

  const chittor = data.data.find((p) => p.title.includes("Chittorgarh"));
  assert.ok(chittor, "Must include Chittorgarh portrait");
  assert.equal(chittor.instagramUrl, "https://www.instagram.com/p/Decf_W-zsGN/");
});

test("GET /api/linkedin/highlights returns 3 social proof highlights", async () => {
  const { GET } = await import("../src/app/api/linkedin/highlights/route.ts");
  const res = await GET();
  assert.equal(res.status, 200);

  const data = await res.json();
  assert.equal(data.success, true);
  assert.equal(data.data.length, 3);
  assert.ok(data.data.find((h) => h.id === "post-scribe-launch"));
  assert.ok(data.data.find((h) => h.id === "post-syncora-websockets"));
  assert.ok(data.data.find((h) => h.id === "post-ibm-certifications"));
});

test("POST /api/contact blocks bots with honeypot silently", async () => {
  const { POST } = await import("../src/app/api/contact/route.ts");
  const req = new Request("http://localhost:3000/api/contact", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      name: "Spam Bot",
      email: "bot@spam.com",
      message: "Buy cheap products now!",
      honeypot: "filled_by_bot",
    }),
  });
  const res = await POST(req);
  assert.equal(res.status, 200);
});

test("GET /api/admin/messages validates secret admin token", async () => {
  const { GET } = await import("../src/app/api/admin/messages/route.ts");

  // 1. Unauthorized
  const unauthReq = new Request("http://localhost:3000/api/admin/messages");
  const unauthRes = await GET(unauthReq);
  assert.equal(unauthRes.status, 401);

  // 2. Authorized via Bearer header
  const authReq = new Request("http://localhost:3000/api/admin/messages", {
    headers: { Authorization: "Bearer aryan-admin-2026" },
  });
  const authRes = await GET(authReq);
  assert.equal(authRes.status, 200);
  const data = await authRes.json();
  assert.equal(data.success, true);
  assert.ok(Array.isArray(data.data));
});
