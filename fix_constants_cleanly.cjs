const fs = require('fs');

let code = fs.readFileSync('constants.ts', 'utf8');

// Ensure golden rule handles fruits-and-grinds safely
const extractRegex = /const healthyBowls = extractAll\(\(c\) =>\s*\["fruits-grains", "fruits-gangs"\]\.includes\(c\.id\),\s*\);\s*if \(healthyBowls\.length > 0\) {[\s\S]*?newMenu\.push\(\);\s*}/g;

const properGoldenRule = [
  '  const healthyBowls = extractAll((c) =>',
  '    ["fruits-and-grinds", "fruits-grains", "fruits-gangs"].includes(c.id),',
  '  );',
  '  if (healthyBowls.length > 0) {',
  '    const allItems = healthyBowls.flatMap((c) => c.items || []);',
  '    const uniqueItems = Array.from(',
  '      new Map(allItems.map((item) => [item.id, item])).values(),',
  '    );',
  '    newMenu.push({',
  '      id: "fruits-and-grinds",',
  '      title: "FRUIT & GRINDS",',
  '      items: uniqueItems,',
  '    });',
  '  }'
].join('\n');

code = code.replace(extractRegex, properGoldenRule);

// We should remove the messy script I added at the end.
const endScriptRegex = /const baseFruitsAndGrinds = \{[\s\S]*?\}\);/g;
code = code.replace(endScriptRegex, '');
code = code.replace(/export const BRANCH_MENUS = sortFilteredCoffeeByPrice\(RAW_BRANCH_MENUS\);\nexport const BRANCH_MENUS = sortFilteredCoffeeByPrice\(RAW_BRANCH_MENUS\);/g, 'export const BRANCH_MENUS = sortFilteredCoffeeByPrice(RAW_BRANCH_MENUS);');

// Wait, if I remove my script, Marina will only have the BASE_MENU items (the 5 items), because the TWO MARINA-SPECIFIC ITEMS were added in my script!
// Right! For Marina, we should inject the Marina-specific items inside createMarinaMenu!
// Let's modify createMarinaMenu to add them.

const marinaOverrideRegex = /if \(cat\.id === "highly-recommend"\) \{/g;
const marinaFruitsInject = [
  '    if (cat.id === "fruits-and-grinds") {',
  '       return {',
  '          ...cat,',
  '          items: [',
  '             ...cat.items,',
  '             {',
  '               id: "fg_banana_dates",',
  '               name: "Banana, Dates & Yogurt",',
  '               price: "38",',
  '               image: "https://iili.io/q2j9Vwu.png",',
  '               ingredients: "Earl Grey Chia, fresh banana, sweet dates, creamy yogurt.",',
  '               branch: "Marina"',
  '             },',
  '             {',
  '               id: "fg_matcha_chia",',
  '               name: "Matcha Chia Pudding",',
  '               price: "38",',
  '               image: "https://iili.io/q2hpnov.png",',
  '               ingredients: "Premium Matcha-infused chia pudding, coconut milk, seasonal toppings.",',
  '               branch: "Marina"',
  '             }',
  '          ]',
  '       };',
  '    }',
  '    if (cat.id === "highly-recommend") {'
].join('\n');

code = code.replace(marinaOverrideRegex, marinaFruitsInject);

fs.writeFileSync('constants.ts', code);
console.log('Fixed constants.ts cleanly');
