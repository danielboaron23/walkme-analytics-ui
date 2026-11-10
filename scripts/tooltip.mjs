import { chromium } from "playwright";
const b = await chromium.launch();
const p = await b.newPage({ viewport:{width:1920,height:1080}, deviceScaleFactor:2 });
await p.goto("http://localhost:5173/", {waitUntil:"networkidle"});
await p.waitForTimeout(500);
await p.locator("button", { hasText: "Salesforce Lightning" }).first().click();
await p.waitForTimeout(700);
await p.locator("button", { hasText: "Smart Walk- Thrus" }).first().click();
await p.waitForTimeout(2900);
await p.locator("button", { hasText: "Time Off Approval" }).first().click();
await p.waitForTimeout(600);
// hover over the analytics chart (inside drawer). Find the chart svg in the panel.
const chart = p.locator("aside .recharts-surface").first();
const box = await chart.boundingBox();
// hover near Nov 21 (x ~ 70% across plot)
await p.mouse.move(box.x + box.width*0.62, box.y + box.height*0.5);
await p.waitForTimeout(500);
await p.screenshot({ path: ".my-tooltip.png", clip:{x:1260, y:56, width:660, height:560} });
await b.close(); console.log("captured tooltip");
