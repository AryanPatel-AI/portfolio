import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";

test("getFallbackGitHubStats returns sensible baseline data when offline", async () => {
  assert.ok(fs.existsSync("./src/lib/github.ts"), "src/lib/github.ts must exist");
  const { getFallbackGitHubStats } = await import("../src/lib/github.ts");

  const fallback = getFallbackGitHubStats();
  assert.ok(fallback.totalRepos >= 5, "Must report at least 5 repositories");
  assert.ok(Array.isArray(fallback.topProjects), "Must include top projects list");
  assert.ok(fallback.topProjects.find((p) => p.name === "TradeSphere"), "Must include TradeSphere");
});

test("GET /api/github/stats returns Cache-Control s-maxage headers", async () => {
  assert.ok(fs.existsSync("./src/app/api/github/stats/route.ts"), "route.ts must exist");
  const { GET } = await import("../src/app/api/github/stats/route.ts");

  const req = new Request("http://localhost:3000/api/github/stats");
  const res = await GET(req);
  assert.equal(res.status, 200);
  const cacheControl = res.headers.get("Cache-Control");
  assert.ok(cacheControl && cacheControl.includes("stale-while-revalidate"), "Must configure SWR caching");
  const data = await res.json();
  assert.equal(data.success, true);
  assert.ok(data.stats, "Response must include stats payload");
});
