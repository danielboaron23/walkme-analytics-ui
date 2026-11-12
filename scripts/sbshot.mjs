import { chromium } from "playwright";
const b = await chromium.launch();
const p = await b.newPage({ viewport:{width:1280,height:900}, deviceScaleFactor:1 });
const shots = [
  ["foundations-colors--palette", ".sb-colors.png", 1100],
  ["foundations-icons--ui-icons", ".sb-icons.png", 900],
  ["components-cards--kpi-cards", ".sb-kpi.png", 760],
  ["charts--top-systems-bar", ".sb-bar.png", 700],
];
for (const [id,out,h] of shots) {
  await p.goto(`http://localhost:6006/iframe.html?id=${id}&viewMode=story`, {waitUntil:"networkidle"});
  await p.waitForTimeout(900);
  await p.screenshot({ path: out, clip:{x:0,y:0,width:1280,height:h} });
}
await b.close(); console.log("captured sb shots");
