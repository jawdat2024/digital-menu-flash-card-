const fs = require('fs');
let code = fs.readFileSync('constants.ts', 'utf8');

const injection = `
(() => {
  // Step 1: Remove Mirdif redundant Cold Brew
  const mirdifMenu = RAW_BRANCH_MENUS['mirdif'];
  if (mirdifMenu) {
    const filteredCat = mirdifMenu.find(c => c.id === 'specialty-coffee' || c.title === 'FILTERED');
    if (filteredCat && filteredCat.subCategories) {
      filteredCat.subCategories = filteredCat.subCategories.filter(sub => sub.id !== 'cold-brew');
    }
  }

  // Step 2 & 3: Global EGG & MORE rename + Spelling corrections
  Object.values(RAW_BRANCH_MENUS).forEach(branchMenu => {
    branchMenu.forEach(cat => {
      // Category Navigation rename
      if (cat.id === 'eggs-more' || cat.title === 'EGG & MORE') {
        cat.title = 'Fruits, Seeds & Grains';
      }
      
      // Helper function to fix string fields
      const fixStrings = (obj) => {
        if (!obj) return;
        ['name', 'tastingNotes', 'ingredients', 'notes', 'description', 'title'].forEach(field => {
          if (typeof obj[field] === 'string') {
            obj[field] = obj[field]
              .replace(/Red grips/gi, 'Red grapes')
              .replace(/Peacan/gi, 'Pecan')
              .replace(/Wagyu meat/gi, 'Wagyu beef');
          }
        });
      };

      // Fix category fields if any
      fixStrings(cat);

      // Fix items
      if (cat.items) {
        cat.items.forEach(item => fixStrings(item));
      }

      // Fix subCategory items
      if (cat.subCategories) {
        cat.subCategories.forEach(sub => {
          fixStrings(sub);
          if (sub.items) {
            sub.items.forEach(item => fixStrings(item));
          }
        });
      }
    });
  });
})();
`;

if (!code.includes('Remove Mirdif redundant Cold Brew')) {
    code = code.replace(
        'export const BRANCH_MENUS = sortFilteredCoffeeByPrice(RAW_BRANCH_MENUS);',
        injection + '\nexport const BRANCH_MENUS = sortFilteredCoffeeByPrice(RAW_BRANCH_MENUS);'
    );
    fs.writeFileSync('constants.ts', code);
    console.log('Script injected into constants.ts!');
} else {
    console.log('Already injected!');
}
