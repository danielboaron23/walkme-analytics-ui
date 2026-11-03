import { chromium } from "playwright";
const b = await chromium.launch();
const p = await b.newPage({ viewport:{width:1920,height:1080}, deviceScaleFactor:1 });
await p.goto("http://localhost:5173/", {waitUntil:"networkidle"});
await p.waitForTimeout(500);
await p.locator("button", { hasText: "Salesforce Lightning" }).first().click();
await p.waitForTimeout(700);
await p.locator("button", { hasText: "Smart Walk- Thrus" }).first().click();
await p.waitForTimeout(2900);
// hover first Name cell
const name = p.locator("button", { hasText: "Time Off Approval" }).first();
await name.hover();
await p.waitForTimeout(400);
await p.screenshot({ path: ".my-hover.png", clip:{x:0,y:200,width:1100,height:360} });
// click to open drawer
await name.click();
await p.waitForTimeout(700);
await p.screenshot({ path: ".my-drawer.png", clip:{x:0,y:0,width:1920,height:1080} });
await b.close(); console.log("captured hover+drawer");
