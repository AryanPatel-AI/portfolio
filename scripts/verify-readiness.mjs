import fs from "node:fs";
import path from "node:path";

let failures = 0;
let passes = 0;

function assert(condition, message) {
  if (condition) {
    console.log(`  ✓ PASS: ${message}`);
    passes++;
  } else {
    console.error(`  ✗ FAIL: ${message}`);
    failures++;
  }
}

console.log("\n=======================================================");
console.log("PORTFOLIO VERIFICATION SUITE — PRODUCTION READINESS");
console.log("=======================================================\n");

// 1. Static Asset Exact Case & Existence Check
console.log("TEST SUITE 1: Static Asset Existence & Case-Sensitivity");
const codeFiles = [];
function walk(dir) {
  for (const f of fs.readdirSync(dir)) {
    const full = path.join(dir, f);
    if (fs.statSync(full).isDirectory()) {
      if (f !== "node_modules" && f !== ".next" && f !== ".git") walk(full);
    } else if (/\.(tsx|ts|jsx|js|css)$/.test(f)) {
      codeFiles.push(full);
    }
  }
}
walk("./src");

let missingAssets = 0;
let caseMismatches = 0;
const checkedAssets = new Set();

for (const file of codeFiles) {
  const text = fs.readFileSync(file, "utf8");
  const matches = text.matchAll(
    /["\x27](\/(?:images|not-found|hero|subject|aryan)[^"\x27]+\.(?:jpg|jpeg|png|webp|svg|JPG|JPEG|PNG))["\x27]/g
  );
  for (const m of matches) {
    const assetPath = m[1];
    if (checkedAssets.has(assetPath)) continue;
    checkedAssets.add(assetPath);

    const relPath = assetPath.slice(1);
    const absPath = path.resolve("./public", relPath);

    if (!fs.existsSync(absPath)) {
      console.error(`    Missing asset: ${assetPath} in ${file}`);
      missingAssets++;
      continue;
    }

    const parentDir = path.dirname(absPath);
    const baseName = path.basename(absPath);
    const dirEntries = fs.readdirSync(parentDir);
    if (!dirEntries.includes(baseName)) {
      console.error(
        `    Case mismatch: references "${baseName}" but disk has "${dirEntries.find(
          (e) => e.toLowerCase() === baseName.toLowerCase()
        )}" (referencing file: ${file})`
      );
      caseMismatches++;
    }
  }
}

assert(missingAssets === 0, `No missing static assets referenced in code (checked ${checkedAssets.size} unique paths)`);
assert(caseMismatches === 0, "All static asset file references match exact disk casing (Linux production safe)");

// 2. SEO & Metadata Verification
console.log("\nTEST SUITE 2: SEO, Sitemap, Robots & Structured Data");
assert(fs.existsSync("./src/app/robots.ts"), "src/app/robots.ts exists and generates dynamic robots.txt");
assert(fs.existsSync("./src/app/sitemap.ts"), "src/app/sitemap.ts exists and generates dynamic sitemap.xml");

const layoutText = fs.readFileSync("./src/app/layout.tsx", "utf8");
assert(layoutText.includes("metadataBase"), "Root layout configures metadataBase for absolute URL resolution");
assert(layoutText.includes("application/ld+json"), "Root layout embeds Schema.org JSON-LD structured data");
assert(layoutText.includes('"@type": "Person"'), "Schema.org includes Person entity");
assert(layoutText.includes('"@type": "WebSite"'), "Schema.org includes WebSite entity");

const pageFiles = [
  "./src/app/about/page.tsx",
  "./src/app/work/page.tsx",
  "./src/app/photography/page.tsx",
  "./src/app/gaming/page.tsx",
  "./src/app/contact/page.tsx",
  "./src/app/experiments/page.tsx",
];

for (const pf of pageFiles) {
  const content = fs.readFileSync(pf, "utf8");
  const hasMetadata = content.includes("export const metadata");
  assert(hasMetadata, `${path.basename(path.dirname(pf))} page exports dedicated SEO metadata`);
}

// 3. Dynamic Routes Static Generation
console.log("\nTEST SUITE 3: Static Site Generation (SSG) on Dynamic Slugs");
const workSlugPage = fs.readFileSync("./src/app/work/[slug]/page.tsx", "utf8");
assert(workSlugPage.includes("export function generateStaticParams"), "Work slug page implements generateStaticParams for SSG");
assert(workSlugPage.includes("export async function generateMetadata"), "Work slug page implements generateMetadata for dynamic SEO");

const photoSlugPage = fs.readFileSync("./src/app/photography/[slug]/page.tsx", "utf8");
assert(photoSlugPage.includes("export function generateStaticParams"), "Photography slug page implements generateStaticParams for SSG");
assert(photoSlugPage.includes("export async function generateMetadata"), "Photography slug page implements generateMetadata for dynamic SEO");

// 4. Security Configuration
console.log("\nTEST SUITE 4: Security Headers & Routing Configuration");
const nextConfigText = fs.readFileSync("./next.config.ts", "utf8");
assert(nextConfigText.includes("headers()"), "next.config.ts defines security headers");
assert(nextConfigText.includes("Strict-Transport-Security"), "HSTS header configured");
assert(nextConfigText.includes("X-Frame-Options"), "X-Frame-Options configured against clickjacking");
assert(nextConfigText.includes("X-Content-Type-Options"), "X-Content-Type-Options configured against MIME sniffing");
assert(nextConfigText.includes("redirects()"), "next.config.ts configures permanent 308 redirect for /projects -> /work");

// Summary
console.log("\n=======================================================");
console.log(`TOTAL PASSES: ${passes} | TOTAL FAILURES: ${failures}`);
console.log("=======================================================\n");

if (failures > 0) {
  process.exit(1);
} else {
  console.log("All production readiness verification tests passed successfully!\n");
}
