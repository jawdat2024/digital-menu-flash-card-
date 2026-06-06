const fs = require('fs');
let code = fs.readFileSync('constants.ts', 'utf8');

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
       const bananaPudding = menu[dessertsMarinaIdx].items.find(i => i.id === 'd_banana_pud');
       if (bananaPudding) {
          bananaPudding.isSoldOut = true;
          bananaPudding.status = 'out_of_stock';
       }
    }

    `;
    code = code.substring(0, returnMenuIdx) + customLogic + code.substring(returnMenuIdx);
  }
}

fs.writeFileSync('constants.ts', code);
console.log('Successfully added custom Marina overrides.');
