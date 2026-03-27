import fs from 'fs';
import path from 'path';

const constantsPath = path.join(process.cwd(), 'constants.ts');
let content = fs.readFileSync(constantsPath, 'utf8');

// Task 1: Cold Brew (Khalifa Branch Only)
// Target: KHALIFA_BRANCH -> COLD_BREW_KENYA
// Action: Update src URL for product image.
// New Asset: https://iili.io/qjc71DB.png
// Find the Kenya Kirimara cold brew in Khalifa branch.
// It's around line 1767. Let's replace the image for cb_kenya in the cold-brew section of createKhalifaMenu.
const khalifaMenuRegex = /const createKhalifaMenu = \(\): MenuCategory\[\] => \{[\s\S]*?return \([\s\S]*?\];/;
const khalifaMenuMatch = content.match(khalifaMenuRegex);
// Wait, the return is `return [` not `return (`.
// Let's just do a string replacement for the specific block.
content = content.replace(
  /id: 'cb_kenya',[\s\S]*?name: 'Kenya Kirimara',[\s\S]*?tastingNotes: 'Wild Cherry, Brown Sugar, Raisins',[\s\S]*?price: '38',[\s\S]*?image: 'https:\/\/iili\.io\/f8yS6jj\.jpg',/g,
  `id: 'cb_kenya', 
          name: 'Kenya Kirimara',
          tastingNotes: 'Wild Cherry, Brown Sugar, Raisins', 
          price: '38', 
          image: 'https://iili.io/qjc71DB.png',`
);

// Task 2: New Product Deployment: Signature Drinks (Khalifa Branch)
// Target Category: SIGNATURE_DRINKS_TEA
// Item Details: Name: RUSH HOUR, Price: 33 AED, Image URL: https://iili.io/q2urMyF.jpg
// Action: Append new object to the branch product array.
// In createKhalifaMenu, the signature-drinks items array ends with sig_matcha_shake.
const sigDrinksRegex = /id: 'signature-drinks',[\s\S]*?title: 'Signature drink',[\s\S]*?items: \[([\s\S]*?)\]\.filter\(Boolean\)/;
// We need to make sure we only replace in createKhalifaMenu.
const khalifaSigDrinksRegex = /(const createKhalifaMenu = \(\): MenuCategory\[\] => \{[\s\S]*?id: 'signature-drinks',\s*title: 'Signature drink',\s*items: \[[\s\S]*?)(]\.filter\(Boolean\))/;
content = content.replace(khalifaSigDrinksRegex, `$1  { id: 'sig_rush_hour', name: 'RUSH HOUR', price: '33', image: 'https://iili.io/q2urMyF.jpg', ingredients: 'Signature drink', calories: 10, status: 'Available' },\n        $2`);

// Task 3: Global Asset Sync: Filtered Coffee (All Branches)
// Target: GLOBAL_ALL_BRANCHES -> FILTERED_COFFEE
// Action: Batch update the "Filtered" image asset across the entire database/state.
// New Asset: https://iili.io/qLf9mXt.jpg
content = content.replace(/https:\/\/iili\.io\/qjAjZAJ\.png/g, 'https://iili.io/qLf9mXt.jpg');

fs.writeFileSync(constantsPath, content, 'utf8');
console.log('Update complete.');
