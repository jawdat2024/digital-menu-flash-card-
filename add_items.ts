import fs from 'fs';
import path from 'path';

const constantsPath = path.join(process.cwd(), 'constants.ts');
let content = fs.readFileSync(constantsPath, 'utf8');

// 1. Add Tornado Chilli Egg to Al Qana
const tornadoEggStr = `{
          id: "egg_nduja_alqana",
          name: "Tornado Chilli Egg",
          price: "52",
          image: "https://iili.io/fvpnDhB.jpg",
          ingredients:
            "garlic and butter pita bread, creamy mayo, mama’s sauce, smoked yogurt, spicy beef nduja, microgreens, and a drizzle of smoked oil.",
          calories: 450,
          status: 'available' as const,
        },
        findItem("eggs-more", "egg_nduja") || {
          id: "sw_bacon",`;

const alQanaStart = content.indexOf('const createAlQanaMenu');
const alQanaEnd = content.indexOf('const createKhalifaMenu', alQanaStart);
let alQanaContent = content.substring(alQanaStart, alQanaEnd);

alQanaContent = alQanaContent.replace(
  '        {\n          id: "sw_bacon",',
  `        {\n          id: "egg_nduja_alqana",\n          name: "Tornado Chilli Egg",\n          price: "52",\n          image: "https://iili.io/fvpnDhB.jpg",\n          ingredients:\n            "garlic and butter pita bread, creamy mayo, mama’s sauce, smoked yogurt, spicy beef nduja, microgreens, and a drizzle of smoked oil.",\n          calories: 450,\n          status: 'available' as const,\n        },\n        {\n          id: "sw_bacon",`
);

content = content.substring(0, alQanaStart) + alQanaContent + content.substring(alQanaEnd);

// 2. Add Snickers coffee bean to Al Bateen
const alBateenStart = content.indexOf('const createAlBateenMenu');
const alBateenEnd = content.indexOf('const createAlQanaMenu', alBateenStart);

let alBateenContent = content.substring(alBateenStart, alBateenEnd);
alBateenContent = alBateenContent.replace(
  'findItem("desserts", "d_aseeda")!,',
  'findItem("desserts", "d_aseeda")!,\n        findItem("desserts", "d_snickers_coffee_bean")!,'
);

content = content.substring(0, alBateenStart) + alBateenContent + content.substring(alBateenEnd);

// 3. Add Snickers coffee bean to Khalifa City
const khalifaStart = content.indexOf('const createKhalifaMenu');
const khalifaEnd = content.indexOf('const createMarinaMenu', khalifaStart) > 0 
    ? content.indexOf('const createMarinaMenu', khalifaStart) 
    : content.length;

let khalifaContent = content.substring(khalifaStart, khalifaEnd);
khalifaContent = khalifaContent.replace(
  'findItem("desserts", "d_aseeda")!,',
  'findItem("desserts", "d_aseeda")!,\n        findItem("desserts", "d_snickers_coffee_bean")!,'
);

content = content.substring(0, khalifaStart) + khalifaContent + content.substring(khalifaEnd);

fs.writeFileSync(constantsPath, content, 'utf8');
