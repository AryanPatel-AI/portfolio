# Backend Architecture & Performance Infrastructure Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a robust, scalable backend infrastructure for the portfolio website, including Next.js Image optimization pipeline, rate-limited Contact API endpoint, cached GitHub metrics aggregator, and telemetry healthcheck endpoints to ensure ultra-smooth performance.

**Architecture:** Next.js 16 App Router Route Handlers (`src/app/api/`) coupled with Zod validation schemas, token-bucket in-memory rate limiting, server-side caching headers (Stale-While-Revalidate), and resilient fallback clients for external APIs.

**Tech Stack:** Next.js 16.4.3, React 19, TypeScript 5, Zod (schema validation), Node.js native test runner (`node:test` + `node:assert`).

**Spec:** `/Users/aryanpatel/.gemini/antigravity/brain/855dd9da-2ea7-474b-b9ad-e8faf0f722ec/backend-roadmap.md`

## Global Constraints
- Framework: Next.js 16 App Router (Node.js runtime for Route Handlers).
- Do not introduce heavy runtime frameworks; prefer standard Web Fetch API, Response, and Request.
- All API routes must return standard JSON schemas: `{ success: boolean, data?: any, error?: string }`.
- External service failures (e.g. GitHub API downtime) must fail gracefully without taking down portfolio pages.
- Zero breaking changes to existing visual design, themes, or font configurations.

## Review Focus
1. Malicious or oversized contact payload (buffer overflow / injection) -> Zod schema rejects with 400 Bad Request and descriptive errors.
2. Rapid automated form submission (bot spamming) -> In-memory rate limiter rejects with 429 Too Many Requests.
3. GitHub API downtime or rate limit hit -> `/api/github/stats` falls back to cached baseline metrics rather than crashing.
4. CORS and unauthorized HTTP methods on Route Handlers -> Returns 405 Method Not Allowed on non-supported verbs.
5. Large photography assets served without headers -> Next.js image pipeline converts to AVIF/WebP with long-term immutable caching.

---

### Task 1: Image Optimization & Performance Pipeline Configuration

**Files:**
- Modify: `next.config.ts`
- Create: `src/lib/images.ts`
- Create: `scripts/test-image-config.mjs`

**Interfaces:**
- Produces: `getOptimizedImageProps(src: string, alt: string)` in `src/lib/images.ts`

- [ ] **Step 1: Write the test script for image optimization configuration**

```javascript
// scripts/test-image-config.mjs
import test from "node:test";
import assert from "node:assert/strict";
import nextConfig from "../next.config.ts";

test("Next.js image configuration supports modern formats and device sizes", () => {
  assert.ok(nextConfig.images, "images configuration must be defined");
  assert.deepEqual(nextConfig.images.formats, ["image/avif", "image/webp"]);
  assert.ok(nextConfig.images.deviceSizes.length >= 6);
  assert.equal(nextConfig.images.minimumCacheTTL, 31536000);
});
```

- [ ] **Step 2: Run test to verify it fails**

Run: `node scripts/test-image-config.mjs`
Expected: FAIL with missing `images` property on `nextConfig`

- [ ] **Step 3: Implement image optimization settings in `next.config.ts` and `src/lib/images.ts`**

Add image settings to `nextConfig`:
```typescript
images: {
  formats: ["image/avif", "image/webp"],
  deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
  minimumCacheTTL: 31536000,
  qualities: [75, 85, 90],
}
```
Create `src/lib/images.ts` with helper to generate responsive image sizes and attributes.

- [ ] **Step 4: Run test to verify it passes**

Run: `node scripts/test-image-config.mjs`
Expected: PASS

- [ ] **Step 5: Commit**

```bash
git add next.config.ts src/lib/images.ts scripts/test-image-config.mjs
git commit -m "perf: configure next.config image optimization pipeline and formats"
```

---

### Task 2: Rate Limiting & Input Validation Utilities

**Files:**
- Create: `src/lib/rate-limit.ts`
- Create: `src/lib/validations/contact.ts`
- Create: `scripts/test-rate-limit.mjs`

**Interfaces:**
- Produces: `checkRateLimit(key: string, limit: number, windowMs: number): { allowed: boolean; remaining: number; reset: number }` in `src/lib/rate-limit.ts`
- Produces: `contactFormSchema` and `ContactFormData` in `src/lib/validations/contact.ts`

- [ ] **Step 1: Write the failing tests for rate limiting and validation**

```javascript
// scripts/test-rate-limit.mjs
import test from "node:test";
import assert from "node:assert/strict";
import { checkRateLimit } from "../src/lib/rate-limit.ts";
import { validateContactPayload } from "../src/lib/validations/contact.ts";

test("checkRateLimit permits requests within window and blocks exceeding", () => {
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

test("validateContactPayload catches empty name, invalid email, or short message", () => {
  const invalid = validateContactPayload({ name: "", email: "bad-email", message: "hi" });
  assert.equal(invalid.success, false);
  assert.ok(invalid.errors.length > 0);

  const valid = validateContactPayload({
    name: "John Doe",
    email: "john@example.com",
    subject: "Collaboration",
    message: "I would love to collaborate on an AI project with you.",
  });
  assert.equal(valid.success, true);
});
```

- [ ] **Step 2: Run test to verify it fails**

Run: `node scripts/test-rate-limit.mjs`
Expected: FAIL with module not found

- [ ] **Step 3: Implement `src/lib/rate-limit.ts` and `src/lib/validations/contact.ts`**

Implement in-memory sliding-window token bucket in `rate-limit.ts` with automatic garbage collection of expired buckets.
Implement validation logic in `contact.ts` checking string lengths, email regex, and sanitizing HTML characters (`<`, `>`, `&`).

- [ ] **Step 4: Run test to verify it passes**

Run: `node scripts/test-rate-limit.mjs`
Expected: PASS

- [ ] **Step 5: Commit**

```bash
git add src/lib/rate-limit.ts src/lib/validations/contact.ts scripts/test-rate-limit.mjs
git commit -m "feat(backend): add token-bucket rate limiter and contact validation"
```

---

### Task 3: Contact API Route Handler (`POST /api/contact`)

**Files:**
- Create: `src/app/api/contact/route.ts`
- Create: `scripts/test-contact-api.mjs`

**Interfaces:**
- Consumes: `checkRateLimit` from `src/lib/rate-limit.ts`
- Consumes: `validateContactPayload` from `src/lib/validations/contact.ts`
- Produces: `POST /api/contact` HTTP handler responding with `{ success: boolean, message: string }`

- [ ] **Step 1: Write test for Contact API Route Handler**

```javascript
// scripts/test-contact-api.mjs
import test from "node:test";
import assert from "node:assert/strict";
import { POST } from "../src/app/api/contact/route.ts";

test("POST /api/contact returns 400 for invalid payload", async () => {
  const req = new Request("http://localhost:3000/api/contact", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name: "", email: "notanemail" }),
  });
  const res = await POST(req);
  assert.equal(res.status, 400);
  const data = await res.json();
  assert.equal(data.success, false);
});

test("POST /api/contact returns 200 for valid submission", async () => {
  const req = new Request("http://localhost:3000/api/contact", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-forwarded-for": "10.0.0.1",
    },
    body: JSON.stringify({
      name: "Aryan Fan",
      email: "visitor@domain.com",
      subject: "AI Project",
      message: "Great portfolio and computer vision models!",
    }),
  });
  const res = await POST(req);
  assert.equal(res.status, 200);
  const data = await res.json();
  assert.equal(data.success, true);
});
```

- [ ] **Step 2: Run test to verify it fails**

Run: `node scripts/test-contact-api.mjs`
Expected: FAIL with module not found

- [ ] **Step 3: Implement `src/app/api/contact/route.ts`**

1. Extract client IP from headers (`x-forwarded-for` or `cf-connecting-ip`).
2. Enforce rate limiting: 5 submissions per 10 minutes per IP. If exceeded, return HTTP 429.
3. Parse and validate JSON body using `validateContactPayload`. If invalid, return HTTP 400.
4. Log dispatch and return HTTP 200 with confirmation.

- [ ] **Step 4: Run test to verify it passes**

Run: `node scripts/test-contact-api.mjs`
Expected: PASS

- [ ] **Step 5: Commit**

```bash
git add src/app/api/contact/route.ts scripts/test-contact-api.mjs
git commit -m "feat(api): implement secure POST /api/contact route handler"
```

---

### Task 4: Dynamic GitHub Stats API Route with Stale-While-Revalidate (`GET /api/github/stats`)

**Files:**
- Create: `src/lib/github.ts`
- Create: `src/app/api/github/stats/route.ts`
- Create: `scripts/test-github-stats.mjs`

**Interfaces:**
- Produces: `fetchGitHubPortfolioStats()` in `src/lib/github.ts`
- Produces: `GET /api/github/stats` returning aggregated repository metrics

- [ ] **Step 1: Write test for GitHub aggregator**

```javascript
// scripts/test-github-stats.mjs
import test from "node:test";
import assert from "node:assert/strict";
import { getFallbackGitHubStats } from "../src/lib/github.ts";
import { GET } from "../src/app/api/github/stats/route.ts";

test("getFallbackGitHubStats returns sensible baseline data when offline", () => {
  const fallback = getFallbackGitHubStats();
  assert.ok(fallback.totalRepos >= 6);
  assert.ok(Array.isArray(fallback.topProjects));
  assert.ok(fallback.topProjects.find(p => p.name === "TradeSphere"));
});

test("GET /api/github/stats returns Cache-Control s-maxage headers", async () => {
  const req = new Request("http://localhost:3000/api/github/stats");
  const res = await GET(req);
  assert.equal(res.status, 200);
  assert.ok(res.headers.get("Cache-Control").includes("stale-while-revalidate"));
  const data = await res.json();
  assert.equal(data.success, true);
  assert.ok(data.stats);
});
```

- [ ] **Step 2: Run test to verify it fails**

Run: `node scripts/test-github-stats.mjs`
Expected: FAIL with module not found

- [ ] **Step 3: Implement `src/lib/github.ts` and `src/app/api/github/stats/route.ts`**

1. In `src/lib/github.ts`, define repo list: `TradeSphere`, `ai-event-organiser`, `VYRO`, `FaceRecognition`, `aitranslator-webapp`.
2. Query GitHub public API (`https://api.github.com/repos/AryanPatel-AI/{repo}`) with `fetch` and timeout.
3. Fallback gracefully to offline static values if rate-limited or offline.
4. In `src/app/api/github/stats/route.ts`, return response with `Cache-Control: public, s-maxage=3600, stale-while-revalidate=86400`.

- [ ] **Step 4: Run test to verify it passes**

Run: `node scripts/test-github-stats.mjs`
Expected: PASS

- [ ] **Step 5: Commit**

```bash
git add src/lib/github.ts src/app/api/github/stats/route.ts scripts/test-github-stats.mjs
git commit -m "feat(api): add cached GET /api/github/stats route handler with fallback"
```

---

### Task 5: Health & Web Vitals Telemetry Routes (`GET /api/health`, `POST /api/vitals`)

**Files:**
- Create: `src/app/api/health/route.ts`
- Create: `src/app/api/vitals/route.ts`
- Create: `scripts/test-telemetry.mjs`

**Interfaces:**
- Produces: `GET /api/health` returning system uptime, status, and environment
- Produces: `POST /api/vitals` ingesting Core Web Vitals telemetry

- [ ] **Step 1: Write test for telemetry endpoints**

```javascript
// scripts/test-telemetry.mjs
import test from "node:test";
import assert from "node:assert/strict";
import { GET as getHealth } from "../src/app/api/health/route.ts";
import { POST as postVitals } from "../src/app/api/vitals/route.ts";

test("GET /api/health returns operational status and timestamp", async () => {
  const res = await getHealth();
  assert.equal(res.status, 200);
  const data = await res.json();
  assert.equal(data.status, "healthy");
  assert.ok(data.uptime >= 0);
});

test("POST /api/vitals accepts valid metrics", async () => {
  const req = new Request("http://localhost:3000/api/vitals", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name: "LCP", value: 1200, rating: "good", route: "/work" }),
  });
  const res = await postVitals(req);
  assert.equal(res.status, 200);
});
```

- [ ] **Step 2: Run test to verify it fails**

Run: `node scripts/test-telemetry.mjs`
Expected: FAIL with module not found

- [ ] **Step 3: Implement `/api/health` and `/api/vitals`**

Create route handlers returning health status and logging client performance metrics.

- [ ] **Step 4: Run test to verify it passes**

Run: `node scripts/test-telemetry.mjs`
Expected: PASS

- [ ] **Step 5: Commit**

```bash
git add src/app/api/health/route.ts src/app/api/vitals/route.ts scripts/test-telemetry.mjs
git commit -m "feat(telemetry): add healthcheck and web vitals ingestion endpoints"
```

---

### Task 6: Interactive Contact Form Client Integration

**Files:**
- Modify: `src/app/contact/ContactClient.tsx`
- Modify: `package.json` (add `"test"` script to run all test scripts)

**Interfaces:**
- Consumes: `POST /api/contact` from Task 3
- Produces: Interactive form component on `/contact` with error, loading, and success states

- [ ] **Step 1: Create unified test suite runner in `package.json`**

Update `package.json` scripts:
`"test:backend": "node scripts/test-image-config.mjs && node scripts/test-rate-limit.mjs && node scripts/test-contact-api.mjs && node scripts/test-github-stats.mjs && node scripts/test-telemetry.mjs"`

- [ ] **Step 2: Wire up interactive form in `ContactClient.tsx`**

1. Add state: `formData`, `status: "idle" | "submitting" | "success" | "error"`, `errorMessage: string`.
2. Implement `handleSubmit`: calls `POST /api/contact`.
3. Render user-friendly feedback alert on success and inline error message on failure.
4. Keep the direct `mailto:` card intact alongside the new interactive dispatch form.

- [ ] **Step 3: Run full backend test suite and Next.js production build**

Run: `npm run test:backend && npm run build`
Expected: All backend tests PASS and Next.js builds all routes successfully.

- [ ] **Step 4: Commit**

```bash
git add src/app/contact/ContactClient.tsx package.json
git commit -m "feat(contact): connect interactive message dispatch to /api/contact"
```

---

## Self-Review Checklist
- [x] **Spec coverage:** All key backend features from `backend-roadmap.md` (Image optimization, Contact API, Rate limiting, GitHub metrics ISR, Telemetry) have dedicated tasks.
- [x] **Step scan:** Each task has distinct failing test, implementation, pass verification, and commit steps.
- [x] **Type consistency:** Route responses consistently return `{ success: boolean, ... }`.
- [x] **Review Focus:** Covered invalid inputs, rate limit abuse, offline fallbacks, and image caching.
- [x] **Proportion:** Clear task boundaries without excessive transcripts.
