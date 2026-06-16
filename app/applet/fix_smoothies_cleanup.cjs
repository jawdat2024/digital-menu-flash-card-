const fs = require('fs');
let code = fs.readFileSync('constants.ts', 'utf8');

const injection = `
(() => {
  // Clear out the obsolete "Smoothies" category/subcategory
  Object.keys(RAW_BRANCH_MENUS).forEach(branchId => {
     RAW_BRANCH_MENUS[branchId].forEach(cat => {
         // If a top-level category is smoothies, and it has these items, clear it if it's just the smoothies
         if (cat.subCategories) {
             cat.subCategories = cat.subCategories.filter(s => s.id !== 'smoothies' || s.title?.toUpperCase() !== 'SMOOTHIES');
         }
     });
     RAW_BRANCH_MENUS[branchId] = RAW_BRANCH_MENUS[branchId].filter(cat => cat.id !== 'smoothies' || cat.title?.toUpperCase() !== 'SMOOTHIES');
     
     // Remove duplicates within 'signature-drinks'
     RAW_BRANCH_MENUS[branchId].forEach(cat => {
        const processDeDup = (container) => {
           if (container.items) {
               const seen = new Set();
               container.items = container.items.filter(i => {
                   if (seen.has(i.name)) return false;
                   seen.add(i.name);
                   return true;
               });
           }
        };
        processDeDup(cat);
        if (cat.subCategories) cat.subCategories.forEach(s => processDeDup(s));
     });
  });
})();
`;

if (!code.includes('Clear out the obsolete "Smoothies" category/subcategory')) {
    code = code.replace(
        'export const BRANCH_MENUS = sortFilteredCoffeeByPrice(RAW_BRANCH_MENUS);',
        injection + '\nexport const BRANCH_MENUS = sortFilteredCoffeeByPrice(RAW_BRANCH_MENUS);'
    );
    fs.writeFileSync('constants.ts', code);
    console.log('Script injected into constants.ts!');
} else {
    console.log('Already injected!');
}
