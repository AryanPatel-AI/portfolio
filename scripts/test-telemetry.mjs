import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";

test("GET /api/health returns operational status and timestamp", async () => {
  assert.ok(fs.existsSync("./src/app/api/health/route.ts"), "health route.ts must exist");
  const { GET } = await import("../src/app/api/health/route.ts");

  const res = await GET();
  assert.equal(res.status, 200);
  const data = await res.json();
  assert.equal(data.status, "healthy");
  assert.ok(typeof data.uptime === "number");
  assert.ok(data.timestamp);
});

test("POST /api/vitals accepts valid metrics", async () => {
  assert.ok(fs.existsSync("./src/app/api/vitals/route.ts"), "vitals route.ts must exist");
  const { POST } = await import("../src/app/api/vitals/route.ts");

  const req = new Request("http://localhost:3000/api/vitals", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      name: "LCP",
      value: 1200,
      rating: "good",
      route: "/work",
    }),
  });
  const res = await POST(req);
  assert.equal(res.status, 200);
  const data = await res.json();
  assert.equal(data.success, true);
});
