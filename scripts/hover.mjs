import { chromium } from "playwright";
const b = await chromium.launch();
const p = await b.newPage({ viewport:{width:1920,height:1080}, deviceScaleFactor:2 });
await p.goto("http://localhost:5173/", {waitUntil:"networkidle"});
await p.waitForTimeout(500);
await p.locator("button", { hasText: "Salesforce Lightning" }).first().click();
await p.waitForTimeout(700);
await p.locator("button", { hasText: "Smart Walk- Thrus" }).first().click();
await p.waitForTimeout(2900);
const name = p.locator("button", { hasText: "Time Off Approval" }).first();
const box = await name.boundingBox();
await name.hover();
await p.waitForTimeout(400);
// clip around the row (use box.y)
await p.screenshot({ path: ".my-hover.png", clip:{x:60, y:box.y-30, width:760, height:120} });
await b.close(); console.log("hover row y="+Math.round(box.y));
