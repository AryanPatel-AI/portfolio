import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";

test("Next.js image configuration supports modern formats and device sizes", () => {
  assert.ok(fs.existsSync("./next.config.ts"), "next.config.ts must exist");
  const configText = fs.readFileSync("./next.config.ts", "utf8");

  assert.ok(configText.includes("images:"), "next.config.ts must define images configuration");
  assert.ok(configText.includes('"image/avif"') && configText.includes('"image/webp"'), "Must support AVIF and WebP formats");
  assert.ok(configText.includes("deviceSizes:"), "Must configure responsive deviceSizes");
  assert.ok(configText.includes("minimumCacheTTL: 31536000"), "Must set 1-year immutable cache TTL for optimized images");
});

test("src/lib/images.ts provides responsive photography image props", async () => {
  assert.ok(fs.existsSync("./src/lib/images.ts"), "src/lib/images.ts must exist");
  const helperText = fs.readFileSync("./src/lib/images.ts", "utf8");
  assert.ok(helperText.includes("getOptimizedImageProps"), "Must export getOptimizedImageProps");
  assert.ok(helperText.includes("sizes"), "Must compute responsive sizes attribute");
});
