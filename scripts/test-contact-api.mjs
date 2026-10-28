import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";

test("POST /api/contact returns 400 for invalid payload", async () => {
  assert.ok(fs.existsSync("./src/app/api/contact/route.ts"), "route.ts must exist");
  const { POST } = await import("../src/app/api/contact/route.ts");

  const req = new Request("http://localhost:3000/api/contact", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name: "", email: "notanemail" }),
  });
  const res = await POST(req);
  assert.equal(res.status, 400);
  const data = await res.json();
  assert.equal(data.success, false);
  assert.ok(data.errors && data.errors.length > 0);
});

test("POST /api/contact returns 200 for valid submission", async () => {
  const { POST } = await import("../src/app/api/contact/route.ts");

  const req = new Request("http://localhost:3000/api/contact", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-forwarded-for": "10.0.0.1",
    },
    body: JSON.stringify({
      name: "Aryan Fan",
      email: "visitor@domain.com",
      subject: "AI Project Collaboration",
      message: "I really love your portfolio and computer vision models!",
    }),
  });
  const res = await POST(req);
  assert.equal(res.status, 200);
  const data = await res.json();
  assert.equal(data.success, true);
  assert.ok(data.message.includes("received"));
});
