const fs = require('fs');

let code = fs.readFileSync('constants.ts', 'utf8');

const injection = `
(() => {
  // Task: Targeted Item Removal from "BESTSELLER" for "Banana, Dates & Yogurt"
  const targetItemName = "Banana, Dates & Yogurt";
  // Checking typical branch keys. Al Bateen might be 'alBateen' or 'albateen' or 'bateen' or 'al_bateen'
  const targetBranches = ['dubai', 'alqana', 'khalifa', 'alBateen', 'albateen', 'bateen']; 

  targetBranches.forEach(branchKey => {
      const branchMenu = RAW_BRANCH_MENUS[branchKey];
      if (branchMenu) {
          const bestsellerCat = branchMenu.find(c => c.id === 'highly-recommend' || (c.title && c.title.toUpperCase().includes('BEST SELLER')));
          if (bestsellerCat && bestsellerCat.items) {
              bestsellerCat.items = bestsellerCat.items.filter(i => i.name !== targetItemName);
          }
      }
  });
})();
`;

if (!code.includes('Banana, Dates & Yogurt" from BESTSELLER')) {
    code = code.replace(
        'export const BRANCH_MENUS = sortFilteredCoffeeByPrice(RAW_BRANCH_MENUS);',
        injection + '\nexport const BRANCH_MENUS = sortFilteredCoffeeByPrice(RAW_BRANCH_MENUS);'
    );
    // Let's also remove the previously injected broken block so we don't pile up garbage, although it doesn't hurt.
    fs.writeFileSync('constants.ts', code);
    console.log('Script injected into constants.ts!');
} else {
    console.log('Already injected!');
}
