import fs from 'fs';
import path from 'path';

const constantsPath = path.join(process.cwd(), 'constants.ts');
let content = fs.readFileSync(constantsPath, 'utf8');

// 1. Update Espresso Offering
const branchesToUpdate = ['createMirdifMenu', 'createAlBateenMenu', 'createAlQanaMenu'];

for (const branch of branchesToUpdate) {
  const startIdx = content.indexOf(`const ${branch}`);
  const nextBranchIdx = content.indexOf('const create', startIdx + 10);
  const endIdx = nextBranchIdx !== -1 ? nextBranchIdx : content.length;
  
  let branchContent = content.substring(startIdx, endIdx);
  
  branchContent = branchContent.replace(
    /name:\s*"Brazil Chocolate",\s*notes:\s*"Chocolate biscuit, condensed milk, chestnut",\s*price:\s*1,/g,
    'name: "Three Africa (The Bright Classic)",\n      notes: "Caramel, Vanilla, Candied Tamarind",\n      price: 0,'
  );
  
  content = content.substring(0, startIdx) + branchContent + content.substring(endIdx);
}

// 2. Add SWEET BREAKFAST to Dubai Mirdif
const mirdifStart = content.indexOf('const createMirdifMenu');
const mirdifEnd = content.indexOf('const createAlBateenMenu', mirdifStart);
let mirdifContent = content.substring(mirdifStart, mirdifEnd);

const mirdifArrayEnd = mirdifContent.lastIndexOf('  ];\n};');
if (mirdifArrayEnd !== -1) {
  const sweetBreakfast = `    {
      id: "sweet-breakfast-mirdif",
      title: "SWEET BREAKFAST",
      items: [
        {
          id: "sb_french_toast_mirdif",
          name: "French Toast",
          price: "66",
          image: "https://iili.io/q2ARzyG.jpg",
          ingredients: "Caramelized and served with vanilla ice cream, almond streusel, whipped vanilla cream, and rhubarb compote (option salted caramel, mix berries compote on the side).",
          calories: 650,
          status: "Available",
        }
      ]
    },
`;
  mirdifContent = mirdifContent.substring(0, mirdifArrayEnd) + sweetBreakfast + mirdifContent.substring(mirdifArrayEnd);
  content = content.substring(0, mirdifStart) + mirdifContent + content.substring(mirdifEnd);
} else {
  console.log("Could not find mirdifArrayEnd");
}

// 3. Add HEALTH BAR to Marina
const marinaStart = content.indexOf('const createMarinaMenu');
const marinaEnd = content.indexOf('const createDubaiMenu', marinaStart);
let marinaContent = content.substring(marinaStart, marinaEnd);

const marinaArrayEnd = marinaContent.lastIndexOf('  return marinaMenu;\n};');
if (marinaArrayEnd !== -1) {
  const healthBar = `  marinaMenu.push({
    id: "health-bar-marina",
    title: "HEALTH BAR",
    items: [
      {
        id: "hb_acai_smoothie_marina",
        name: "Acai Smoothie",
        price: "42",
        image: "https://iili.io/BBBfCDN.jpg",
        ingredients: "Acai berry, banana, strawberry, peanut butter, coconut water, oat milk, and apple juice.",
        calories: 320,
        status: "Available",
      }
    ]
  });\n\n`;
  marinaContent = marinaContent.substring(0, marinaArrayEnd) + healthBar + marinaContent.substring(marinaArrayEnd);
  content = content.substring(0, marinaStart) + marinaContent + content.substring(marinaEnd);
} else {
  console.log("Could not find marinaArrayEnd");
}

fs.writeFileSync(constantsPath, content, 'utf8');
console.log('Done!');
