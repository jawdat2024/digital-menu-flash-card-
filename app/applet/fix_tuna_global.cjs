const fs = require('fs');
let code = fs.readFileSync('constants.ts', 'utf8');

const injection = `
(() => {
  // Ensure Tunacado is globally in Sandwiches
  let tunacadoRef = null;
  const anyBranchWithTuna = Object.values(RAW_BRANCH_MENUS).find(b => {
     for (const cat of b) {
        if (cat.items) {
           const found = cat.items.find(i => i.name === 'Tunacado');
           if (found) { tunacadoRef = JSON.parse(JSON.stringify(found)); return true; }
        }
     }
     return false;
  });

  if (tunacadoRef) {
      Object.values(RAW_BRANCH_MENUS).forEach(branchMenu => {
          let swCat = branchMenu.find(c => c.id === 'sandwiches' || c.title?.toUpperCase().includes('SANDWICHES'));
          if (!swCat) {
              // Create it
              swCat = {
                  id: "sandwiches",
                  title: "SANDWICHES & BAGEL'S",
                  items: []
              };
              // Add it before desserts
              const dessertsIdx = branchMenu.findIndex(c => c.id === 'desserts');
              if (dessertsIdx !== -1) {
                  branchMenu.splice(dessertsIdx, 0, swCat);
              } else {
                  branchMenu.push(swCat);
              }
          }
          if (swCat.items) {
             if (!swCat.items.find(i => i.name === 'Tunacado')) {
                 swCat.items.push(JSON.parse(JSON.stringify(tunacadoRef)));
             }
          }
      });
  }

  // Ensure Acaí Smoothie is correct
})();
`;

if (!code.includes('Ensure Tunacado is globally in Sandwiches')) {
    code = code.replace(
        'export const BRANCH_MENUS = sortFilteredCoffeeByPrice(RAW_BRANCH_MENUS);',
        injection + '\nexport const BRANCH_MENUS = sortFilteredCoffeeByPrice(RAW_BRANCH_MENUS);'
    );
    fs.writeFileSync('constants.ts', code);
    console.log('Script injected into constants.ts!');
} else {
    console.log('Already injected!');
}
