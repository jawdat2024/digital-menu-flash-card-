const fs = require('fs');

let code = fs.readFileSync('constants.ts', 'utf8');

// The 6 items we need:
// Tunacado
// Sicky Date (or Sticky Date)
// Banana, Dates & Yogurt
// Matcha Cloud
// Burrata Pizza
// Açaí Smoothie

// First, drop the Marina specific "Best Seller Modification" entirely.
const marinaBestSellerStart = code.indexOf('// 1. Best Seller Modification');
if (marinaBestSellerStart !== -1) {
    // Look for the end of the best seller modification block
    const endStr = '    // 2. Category Deletion: "Juices"';
    const marinaBestSellerEnd = code.indexOf(endStr, marinaBestSellerStart);
    if (marinaBestSellerEnd !== -1) {
        code = code.substring(0, marinaBestSellerStart) + code.substring(marinaBestSellerEnd);
    }
}

// Next, let's inject a script block at the very end of the file, right before export const BRANCH_MENUS.
// Wait, the safest is to inject it where export const BRANCH_MENUS is.
// Let's replace the whole `export const BRANCH_MENUS = sortFilteredCoffeeByPrice(RAW_BRANCH_MENUS);`
// with a script that first goes through all RAW_BRANCH_MENUS, extracts the valid objects for the 6 items,
// and globally overrides the `highly-recommend` category inside RAW_BRANCH_MENUS for EVERY branch!

const globalOverride = `
(() => {
  // We need to set the highly-recommend category for every branch to EXACTLY 6 items:
  // Tunacado, Sicky Date (or Sticky date), Banana, Dates & Yogurt, Matcha Cloud, Burrata Pizza, Açaí Smoothie
  
  // Let's find one instance of each across all menus to clone:
  const targetNames = [
     'tunacado',
     'sticky date', // or sicky date
     'banana, dates',
     'matcha cloud',
     'burrata pizza',
     'açaí smoothie'
  ];

  let itemsFound = {};
  
  // First pass: scan all branches to find these objects
  Object.values(RAW_BRANCH_MENUS).forEach(branchMenu => {
      branchMenu.forEach(cat => {
         if (cat.items) {
             cat.items.forEach(item => {
                 let lowerName = item.name.toLowerCase();
                 targetNames.forEach(target => {
                     if (lowerName.includes(target) && !itemsFound[target]) {
                         itemsFound[target] = JSON.parse(JSON.stringify(item));
                     }
                 });
                 if (lowerName.includes('acai smoothie') && !itemsFound['açaí smoothie']) {
                     itemsFound['açaí smoothie'] = JSON.parse(JSON.stringify(item));
                 }
             });
         }
      });
  });

  const bestSellerItemsArray = [
     itemsFound['tunacado'],
     itemsFound['sticky date'],
     itemsFound['banana, dates'],
     itemsFound['matcha cloud'],
     itemsFound['burrata pizza'],
     itemsFound['açaí smoothie']
  ].filter(Boolean); // just in case

  // Now force-apply this to EVERY branch's 'highly-recommend'
  Object.keys(RAW_BRANCH_MENUS).forEach(branchKey => {
      const branchMenu = RAW_BRANCH_MENUS[branchKey];
      let bestSellerCat = branchMenu.find(c => c.id === 'highly-recommend');
      
      // If a branch doesn't have it, we shouldn't add it unless they all have it.
      // But typically they do.
      if (bestSellerCat) {
          bestSellerCat.items = JSON.parse(JSON.stringify(bestSellerItemsArray));
          // Reset any modified statuses if needed, or leave as is
      }
  });

})();
`;

if (!code.includes('itemsFound[\'tunacado\']')) {
    code = code.replace(
        'export const BRANCH_MENUS = sortFilteredCoffeeByPrice(RAW_BRANCH_MENUS);',
        globalOverride + '\\nexport const BRANCH_MENUS = sortFilteredCoffeeByPrice(RAW_BRANCH_MENUS);'
    );
}

fs.writeFileSync('constants.ts', code);
console.log('Fixed globally!');
