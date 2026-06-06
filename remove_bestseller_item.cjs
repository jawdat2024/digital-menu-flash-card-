const fs = require('fs');

let code = fs.readFileSync('constants.ts', 'utf8');

const injection = `
(() => {
  // Task: Targeted Item Removal from "BESTSELLER"
  const targetItemName = "[INSERT ITEM NAME HERE]"; // The user can replace this if needed, or if it literally matches
  const targetBranches = ['dubai', 'alqana', 'khalifa', 'albateen']; // albateen corresponds to Al Bateen

  targetBranches.forEach(branchKey => {
      const branchMenu = RAW_BRANCH_MENUS[branchKey];
      if (branchMenu) {
          const bestsellerCat = branchMenu.find(c => c.id === 'highly-recommend' || c.title.toUpperCase().includes('BEST SELLER'));
          if (bestsellerCat && bestsellerCat.items) {
              bestsellerCat.items = bestsellerCat.items.filter(i => i.name !== targetItemName);
          }
      }
  });
})();
`;

if (!code.includes('Targeted Item Removal from "BESTSELLER"')) {
    code = code.replace(
        'export const BRANCH_MENUS = sortFilteredCoffeeByPrice(RAW_BRANCH_MENUS);',
        injection + '\nexport const BRANCH_MENUS = sortFilteredCoffeeByPrice(RAW_BRANCH_MENUS);'
    );
    fs.writeFileSync('constants.ts', code);
    console.log('Script injected into constants.ts!');
} else {
    console.log('Already injected!');
}
