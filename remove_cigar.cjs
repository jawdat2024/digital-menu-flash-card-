const fs = require('fs');

let code = fs.readFileSync('constants.ts', 'utf8');

const injection = `
(() => {
  // Global Item Deletion: "Cigar {tap filter}"
  Object.values(RAW_BRANCH_MENUS).forEach(branchMenu => {
      branchMenu.forEach(cat => {
          if (cat.items) {
              cat.items = cat.items.filter(i => i.name !== "Cigar {tap filter}" && i.name !== "Cuban Cigar {tap filter}");
          }
          if (cat.subCategories) {
              cat.subCategories.forEach(sub => {
                  if (sub.items) {
                      sub.items = sub.items.filter(i => i.name !== "Cigar {tap filter}" && i.name !== "Cuban Cigar {tap filter}");
                  }
              });
          }
      });
  });
})();
`;

if (!code.includes('Cigar {tap filter}')) {
    // Note: It's actually possible the code already has modifications or we need to replace at the end.
    // I will append it before export const BRANCH_MENUS
}

code = code.replace(
    'export const BRANCH_MENUS = sortFilteredCoffeeByPrice(RAW_BRANCH_MENUS);',
    injection + '\nexport const BRANCH_MENUS = sortFilteredCoffeeByPrice(RAW_BRANCH_MENUS);'
);

fs.writeFileSync('constants.ts', code);
console.log('Fixed globally!');
