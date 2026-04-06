import fs from 'fs';
import path from 'path';

const constantsPath = path.join(process.cwd(), 'constants.ts');
let content = fs.readFileSync(constantsPath, 'utf8');

const nicaraguaRegex = /\{\s*id:\s*"bean_nicaragua",\s*name:\s*"Nicaragua",\s*notes:\s*"Milk chocolate, sugar cane, and candied peanuts",\s*price:\s*0,\s*isNew:\s*false,\s*\}/;

const threeAfrica = `{
      id: "bean_three_africa",
      name: "Three Africa (The Bright Classic)",
      notes: "Caramel, Vanilla, Candied Tamarind",
      price: 0,
      isNew: false,
    }`;

const brazilChocolateRegex = /\{\s*id:\s*"bean_brazil_chocolate",\s*name:\s*"Brazil Chocolate",\s*notes:\s*"Chocolate biscuit, condensed milk, chestnut",\s*price:\s*1,\s*isNew:\s*true,\s*\}/;

const latinoBlend = `{
      id: "bean_latino_blend",
      name: "Latino Blend (The Crowd Pleaser)",
      notes: "Chocolate Biscuit, Condensed Milk, Chestnut",
      price: 1,
      isNew: true,
    }`;

const coconutRegex = /\{\s*id:\s*"bean_coconut",\s*name:\s*"Coconut",\s*notes:\s*"Coconut flakes, light chocolate, and vanilla cream",\s*price:\s*5,\s*isNew:\s*false,\s*\}/;

const colombiaPeach = `{
      id: "bean_colombia_peach",
      name: "Colombia Peach (The Tropical Refresh)",
      notes: "Peach, Vanilla Ice Cream, Lychee",
      price: 5,
      isNew: false,
    }`;

// Limit replacement to the Marina section to avoid accidental changes elsewhere
const marinaStartIdx = content.indexOf('const createMarinaMenu');
const marinaEndIdx = content.indexOf('const createDubaiMenu', marinaStartIdx);

let marinaContent = content.substring(marinaStartIdx, marinaEndIdx);

if (nicaraguaRegex.test(marinaContent)) {
  marinaContent = marinaContent.replace(nicaraguaRegex, threeAfrica);
} else {
  console.log('Could not find Nicaragua bean in Marina section');
}

if (brazilChocolateRegex.test(marinaContent)) {
  marinaContent = marinaContent.replace(brazilChocolateRegex, latinoBlend);
} else {
  console.log('Could not find Brazil Chocolate bean in Marina section');
}

if (coconutRegex.test(marinaContent)) {
  marinaContent = marinaContent.replace(coconutRegex, colombiaPeach);
} else {
  console.log('Could not find Coconut bean in Marina section');
}

content = content.substring(0, marinaStartIdx) + marinaContent + content.substring(marinaEndIdx);

fs.writeFileSync(constantsPath, content, 'utf8');
console.log('Updated Marina beans.');
