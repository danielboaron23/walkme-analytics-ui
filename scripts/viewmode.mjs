import { chromium } from "playwright";
const b = await chromium.launch();
const p = await b.newPage({ viewport:{width:1920,height:1080}, deviceScaleFactor:1 });
await p.goto("http://localhost:5173/", {waitUntil:"networkidle"});
await p.waitForTimeout(500);
await p.locator("button", { hasText: "Salesforce Lightning" }).first().click();
await p.waitForTimeout(700);
await p.locator("button", { hasText: "Smart Walk- Thrus" }).first().click();
await p.waitForTimeout(2900);
await p.locator("button", { hasText: "Time Off Approval" }).first().click();
await p.waitForTimeout(600);
// open the view menu (the toggle button in the drawer header)
await p.locator("aside button").first().click();
await p.waitForTimeout(400);
await p.screenshot({ path: ".my-viewmenu.png", clip:{x:1500, y:56, width:420, height:260} });
// select Wide view
await p.locator("button", { hasText: "Wide view" }).click();
await p.waitForTimeout(600);
await p.screenshot({ path: ".my-wide.png", clip:{x:0, y:0, width:1920, height:1080} });
await b.close(); console.log("captured viewmenu+wide");
