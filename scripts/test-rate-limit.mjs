import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";

test("checkRateLimit permits requests within window and blocks exceeding", async () => {
  assert.ok(fs.existsSync("./src/lib/rate-limit.ts"), "src/lib/rate-limit.ts must exist");
  const rateLimitMod = await import("../src/lib/rate-limit.ts");
  const { checkRateLimit } = rateLimitMod;

  const ip = "192.168.1.1";
  const first = checkRateLimit(ip, 2, 1000);
  assert.equal(first.allowed, true);
  assert.equal(first.remaining, 1);

  const second = checkRateLimit(ip, 2, 1000);
  assert.equal(second.allowed, true);
  assert.equal(second.remaining, 0);

  const third = checkRateLimit(ip, 2, 1000);
  assert.equal(third.allowed, false);
});

test("validateContactPayload catches empty name, invalid email, or short message", async () => {
  assert.ok(fs.existsSync("./src/lib/validations/contact.ts"), "src/lib/validations/contact.ts must exist");
  const contactMod = await import("../src/lib/validations/contact.ts");
  const { validateContactPayload } = contactMod;

  const invalid = validateContactPayload({ name: "", email: "bad-email", message: "hi" });
  assert.equal(invalid.success, false);
  assert.ok(invalid.errors && invalid.errors.length > 0);

  const valid = validateContactPayload({
    name: "John Doe",
    email: "john@example.com",
    subject: "Collaboration",
    message: "I would love to collaborate on an AI project with you.",
  });
  assert.equal(valid.success, true);
  assert.equal(valid.data.name, "John Doe");
  assert.equal(valid.data.email, "john@example.com");
});
