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
  assert.ok(data.data.length >= 12);

  const sonmarg = data.data.find((p) => p.title.includes("Sonmarg"));
  assert.ok(sonmarg, "Must include Sonmarg portrait");
  assert.equal(sonmarg.instagramUrl, "https://www.instagram.com/p/DN8HhbGj6f9/");

  const jaipur = data.data.find((p) => p.title.includes("Jaipur Heritage"));
  assert.equal(jaipur, undefined, "Jaipur Heritage portrait must be removed per user request");

  const chittor = data.data.find((p) => p.title.includes("Chittorgarh"));
  assert.ok(chittor, "Must include Chittorgarh portrait");
  assert.equal(chittor.instagramUrl, "https://www.instagram.com/p/Decf_W-zsGN/");

  const amber = data.data.find((p) => p.title.includes("Amber Fort"));
  assert.ok(amber, "Must include Amber Fort landscape");
  assert.equal(amber.instagramUrl, "https://www.instagram.com/p/DeZHehET-Pg/");
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

test("GET /api/contact returns 405 Method Not Allowed", async () => {
  const { GET } = await import("../src/app/api/contact/route.ts");
  const res = await GET();
  assert.equal(res.status, 405);
  const data = await res.json();
  assert.equal(data.success, false);
  assert.ok(data.error.includes("Method Not Allowed"));
});

test("Verify contact message persistence generates compliant UUID and Resend reply-to", async () => {
  const fs = await import("node:fs");
  const emailSource = fs.readFileSync("src/lib/email.ts", "utf8");
  const contactRoute = fs.readFileSync("src/app/api/contact/route.ts", "utf8");

  // Verify Resend sets direct replyTo
  assert.ok(emailSource.includes("replyTo: payload.email"), "Must include replyTo: payload.email");
  assert.ok(emailSource.includes("escapeHtml"), "Must sanitize HTML entities in email template");

  // Verify messageId uses standard UUID
  assert.ok(contactRoute.includes("crypto.randomUUID()"), "Must generate standard RFC UUID for messageId");
  assert.ok(!contactRoute.includes('`msg_${Date.now()}'), "Must not use legacy non-UUID msg_ prefix");
});

test("OPTIONS /api/contact and /api/admin/messages return 204 with CORS headers", async () => {
  const { OPTIONS: contactOptions } = await import("../src/app/api/contact/route.ts");
  const { OPTIONS: adminOptions } = await import("../src/app/api/admin/messages/route.ts");

  const contactRes = await contactOptions();
  assert.equal(contactRes.status, 204);
  assert.equal(contactRes.headers.get("access-control-allow-origin"), "*");

  const adminRes = await adminOptions();
  assert.equal(adminRes.status, 204);
  assert.equal(adminRes.headers.get("access-control-allow-origin"), "*");
});

test("Verify all portraits are credited strictly to @___aryan___patel and not click_by_aryan", async () => {
  const fs = await import("node:fs");
  const photoClient = fs.readFileSync("src/app/photography/PhotographyClient.tsx", "utf8");
  const landscapeClient = fs.readFileSync("src/app/photography/[slug]/LandscapeCollectionClient.tsx", "utf8");

  // Ensure my-garden-portrait is credited to @___aryan___patel
  assert.ok(photoClient.includes('id: "my-garden-portrait"'));
  assert.ok(photoClient.includes('credit: "@___aryan___patel"'));
  assert.ok(!photoClient.includes('id: "my-garden-portrait",\n      title: "Sunlit Foliage & Character",\n      category: "Portraits",\n      caption:\n        "Natural ambient daylight portrait captured amidst lush botanical foliage and soft natural bokeh.",\n      src: "/images/portrait/my-garden-portrait.JPG",\n      aspect: "portrait",\n      camera: "Natural Light · Field Capture",\n      credit: "@click_by_aryan"'));

  // Ensure aryan-pillared-court is credited to @___aryan___patel and opens personal account
  assert.ok(photoClient.includes('id: "aryan-pillared-court"'));
  assert.ok(photoClient.includes('https://www.instagram.com/___aryan___patel/'));

  // Ensure LandscapeCollectionClient has portraits collection handle @___aryan___patel
  assert.ok(landscapeClient.includes('portraits: {\n    title: "Portraits & Human Nuance"'));
  assert.ok(landscapeClient.includes('handle: "@___aryan___patel"'));

  // Ensure no duplicate Aryan portrait in landscapes
  assert.ok(!photoClient.includes('src: "/images/photography/my-kashmir.jpg"'));
  assert.ok(!landscapeClient.includes('src: "/images/photography/my-kashmir.jpg"'));
});
