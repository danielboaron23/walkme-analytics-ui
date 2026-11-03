import { chromium } from "playwright";

const url = process.argv[2] || "http://localhost:5173/";
const out = process.argv[3] || ".shot.png";
const w = Number(process.argv[4] || 1920);
const h = Number(process.argv[5] || 1080);
const full = process.argv[6] === "full";

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: w, height: h }, deviceScaleFactor: 2 });
await page.goto(url, { waitUntil: "networkidle" });
await page.waitForTimeout(900);
await page.screenshot({ path: out, fullPage: full, clip: full ? undefined : { x: 0, y: 0, width: w, height: h } });
await browser.close();
console.log("saved", out);
