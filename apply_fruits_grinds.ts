import fs from 'fs';
import path from 'fs';

const filepath = './constants.ts';
let content = fs.readFileSync(filepath, 'utf8');

// 1. Add new items to BASE_MENU healthy-bowls
const newItemsStr = `
      {
        id: "overnight_oat",
        name: "Overnight Oat",
        ingredients: "Oats are soaked in oat milk with mixed-berry compote, peanut butter, and cashews.",
        price: "42",
        image: "https://iili.io/fvyqMn1.jpg",
      },
      {
        id: "apple_cinnamon",
        name: "Apple Cinnamon",
        ingredients: "Cinnamon yogurt, granola, apple crumble, soft caramel, berry compote, honeycomb, raspberries, blueberries, blackberries, apple crisp, mixed nuts, and organic honey drizzle.",
        price: "42",
        image: "https://iili.io/qttz2I4.jpg",
      },
      {
        id: "exotic_sunrise",
        name: "Exotic Sunrise",
        ingredients: "Coconut yogurt, homemade granola, passion fruit, mango slices, exotic gel, and lime zest.",
        price: "42",
        image: "https://iili.io/qtt1Pz7.jpg",
      },
`;

const healthyBowlsTarget = `      {
        id: "bw7",
        name: "Matcha Chia Pudding",
        ingredients: "Matcha chia pudding, strawberries, raspberries",
        price: "36",
        image: "https://iili.io/q2j9EwF.png",
        calories: 280,
      },`;

if (content.includes(healthyBowlsTarget)) {
  content = content.replace(healthyBowlsTarget, healthyBowlsTarget + "\n" + newItemsStr);
  console.log("Added new items to BASE_MENU");
} else {
    // If not found above, just append to healthy-bowls array before closing brace
    const endOfHealthyBowls = content.indexOf(']', content.indexOf('id: "healthy-bowls"'));
    content = content.slice(0, endOfHealthyBowls) + newItemsStr + content.slice(endOfHealthyBowls);
    console.log("Added new items to BASE_MENU via bracket");
}

// 2. Helper to replace in function blocks
function replaceInFunc(funcName: string, itemsList: string[]) {
  const start = content.indexOf(`const ${funcName}`);
  if (start === -1) {
    console.log("Function not found:", funcName);
    return;
  }
  const categoryStart = content.indexOf('id: "healthy-bowls"', start);
  const itemsStart = content.indexOf('items: [', categoryStart);
  if (itemsStart === -1) return;
  const itemsEnd = content.indexOf(']', itemsStart);
  
  const oldItemsStr = content.substring(itemsStart, itemsEnd + 1);
  let newItemsStr = "items: [\n" + itemsList.map(item => '        findItem("healthy-bowls", "' + item + '")!,').join('\n') + "\n      ]";
  
  content = content.substring(0, itemsStart) + newItemsStr + content.substring(itemsEnd + 1);
  console.log("Updated", funcName);
}

// Al Qana, Khalifa, Mirdif -> Overnight Oat, Apple Cinnamon, Exotic Sunrise (and maybe keep Acai, Chia?)
// Prompt: "Update the menu data structure to inject new items into the "FRUIT & GRINDS" category... Target Branches: Al Qana, Khalifa, Dubai Mirdif ... Items to Add: [overnight_oat, apple_cinnamon, exotic_sunrise]"
// Assuming we should just add/replace those 3 alongside Acai (bw1) and Chia (bw3), same as before.
const commonItems = ['bw1', 'apple_cinnamon', 'overnight_oat', 'bw3', 'exotic_sunrise'];

replaceInFunc('createAlQanaMenu', commonItems);
replaceInFunc('createKhalifaMenu', commonItems);
replaceInFunc('createMirdifMenu', commonItems);

// Marina -> Apple Cinnamon
// Keep bw1, bw3, add apple_cinnamon. (Assuming overnight_oat and exotic_sunrise removed since they are only asked to add Apple Cinnamon, but wait, maybe they keep Overnight Oats and Exotic Sunrise under the old IDs? The prompt says "Items to add: Apple Cinnamon".)
// If I look at Marina's current items: bw1, bw3, bw2, bw5, bw4.
// If I replace bw5 with apple_cinnamon, should I leave bw2 and bw4?
const marinaItems = ['bw1', 'bw3', 'bw2', 'apple_cinnamon', 'bw4'];
replaceInFunc('createMarinaMenu', marinaItems);

fs.writeFileSync(filepath, content);
console.log("Done");
