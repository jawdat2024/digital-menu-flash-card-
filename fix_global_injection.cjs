const fs = require('fs');

let code = fs.readFileSync('constants.ts', 'utf8');

const injectionCode = `    (() => {
      const cat = BASE_MENU.find(c => c.id === 'fruits-and-grinds');
      return cat ? JSON.parse(JSON.stringify(cat)) : null;
    })(),`;

// Let's find all the literal returned arrays and inject the category.
// We'll look for \`id: "baked-goods"\` or \`id: "sandwiches"\` in those functions.
// Actually, earlier we did a loop over RAW_BRANCH_MENUS to push it! It's much cleaner!

const loopScript = `

Object.keys(RAW_BRANCH_MENUS).forEach(branch => {
   if (branch === 'marina') return; // Marina handles it through BASE_MENU mapping
   if (branch === 'alain') return; // alain handles it through BASE_MENU mapping

   const menu = RAW_BRANCH_MENUS[branch];
   // Check if it already has it
   if (menu.find(c => c.id === 'fruits-and-grinds')) return;

   const baseFruits = BASE_MENU.find(c => c.id === 'fruits-and-grinds');
   if (baseFruits) {
      const copy = JSON.parse(JSON.stringify(baseFruits));
      const insertIdx = menu.findIndex(c => c.id === 'baked-goods' || c.id === 'desserts' || c.id === 'sandwiches');
      if (insertIdx !== -1) {
          menu.splice(insertIdx, 0, copy);
      } else {
          menu.push(copy);
      }
   }
});
`;

if (!code.includes("if (branch === 'marina') return; // Marina handles it")) {
   code = code.replace('export const BRANCH_MENUS = sortFilteredCoffeeByPrice(RAW_BRANCH_MENUS);', loopScript + '\nexport const BRANCH_MENUS = sortFilteredCoffeeByPrice(RAW_BRANCH_MENUS);');
}

fs.writeFileSync('constants.ts', code);
console.log('Fixed globally using loops!');
