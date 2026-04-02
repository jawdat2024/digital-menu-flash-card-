import fs from 'fs';

let content = fs.readFileSync('constants.ts', 'utf-8');

// The string that was inserted
const swBaconStr = `{ id: 'sw_bacon', name: 'Bacon & Egg Cheese Bun', price: '44', image: 'https://iili.io/qqEAsNj.jpg', ingredients: 'Brioche bun with crispy bacon, scrambled egg, cheddar cheese, kimchi ketchup.', calories: 550 },`;

// Undo the incorrect insertion
content = content.replace(new RegExp('\\n\\s*' + swBaconStr.replace(/[.*+?^\${}()|[\]\\]/g, '\\$&'), 'g'), '');

// Now we need to add sw_bacon to eggs-more properly.
// In BASE_MENU and branch menus, eggs-more has `items: [`
// In applyGoldenRuleLayout, it has `items: uniqueItems`
// So we only want to add it to `items: [` that are inside `eggs-more` category.

// Let's use a replacer function
content = content.replace(/id:\s*'eggs-more'[\s\S]*?items:\s*(?:\[|uniqueItems)/g, (match) => {
  if (match.endsWith('[')) {
    return match + `\n        ${swBaconStr}`;
  } else {
    // For uniqueItems, we don't need to add it because uniqueItems is built from the categories which already have it!
    return match;
  }
});

fs.writeFileSync('constants.ts', content, 'utf-8');
console.log("Fixed sw_bacon insertion");
