const fs = require('fs');

let code = fs.readFileSync('constants.ts', 'utf8');

// 1. Revert my previous custom logic snippet
const customLogicStart = code.indexOf('// 4. Custom Marina Overrides');
if (customLogicStart !== -1) {
  const customLogicEnd = code.indexOf('return menu;', customLogicStart);
  if (customLogicEnd !== -1) {
    code = code.substring(0, customLogicStart) + code.substring(customLogicEnd);
  }
}

// 2. Put a new one that properly clones Banana Pudding and removes 3 cheese croissant
const marinaStart = code.indexOf('marina: (() => {');
if (marinaStart !== -1) {
  const returnMenuIdx = code.indexOf('return menu;', marinaStart);
  if (returnMenuIdx !== -1) {
    const customLogic = `
    // 4. Custom Marina Overrides (Remove 3 Cheese Croissant & Out of Stock Banana Pudding)
    const bakedGoodsMarinaIdx = menu.findIndex(c => c.id === 'from-our-bakery' || c.id === 'baked-goods');
    if (bakedGoodsMarinaIdx !== -1) {
       menu[bakedGoodsMarinaIdx].items = menu[bakedGoodsMarinaIdx].items.filter(i => i.id !== 'bg_3cheese');
    }

    const dessertsMarinaIdx = menu.findIndex(c => c.id === 'desserts');
    if (dessertsMarinaIdx !== -1) {
       menu[dessertsMarinaIdx] = { ...menu[dessertsMarinaIdx] }; // clone category
       menu[dessertsMarinaIdx].items = menu[dessertsMarinaIdx].items.map(i => {
          if (i.id === 'd_banana_pud') {
             return { ...i, isSoldOut: true, status: 'out_of_stock' };
          }
          return i;
       });
    }

    `;
    code = code.substring(0, returnMenuIdx) + customLogic + code.substring(returnMenuIdx);
  }
}

// 3. We also need to fix the BASE_MENU which was accidentally modified
// Wait, BASE_MENU wasn't dumped to a file modified, it's evaluated freshly every time!
// Because we modify it at *RUNTIME* through the code executing `require('./constants.ts')`.
// In fact, the code itself doesn't have `isSoldOut` hardcoded in `constants.ts` because I didn't write it to the string `code` inside `constants.ts`!!
// I just wrote a script that modified the object at runtime!
// Ah... Wait, did I write my logic into `constants.ts`? Yes, I added the snippet to `constants.ts` literally.
// Let's check `constants.ts` content.
