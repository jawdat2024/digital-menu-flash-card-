const fs = require('fs');

let code = fs.readFileSync('constants.ts', 'utf8');

const globalDessertsOverride = `
(() => {
  // Add globally to 'desserts'
  const newDesserts = [
    {
      id: "d_1000_global",
      name: "1000 Layers( Mille Fuille)",
      ingredients: "Crispy layers of puff pastry with caramels sauce and  vanilla cream",
      price: "39.20",
      image: "https://iili.io/q2ATUt2.png"
    },
    {
      id: "d_snickers_global",
      name: "Snickers coffee bean",
      ingredients: "Rich chocolate snickers with an infusion of premium coffee beans.",
      price: "39.20",
      image: "https://iili.io/q2hTJNj.png"
    }
  ];

  Object.values(RAW_BRANCH_MENUS).forEach(branchMenu => {
      const dessertsCat = branchMenu.find(c => c.id === 'desserts');
      if (dessertsCat) {
          newDesserts.forEach(newItem => {
              if (!dessertsCat.items.some(i => i.name.toLowerCase() === newItem.name.toLowerCase() || i.name.toLowerCase().includes('mille fuille') && newItem.name.includes('Mille'))) {
                  dessertsCat.items.push(JSON.parse(JSON.stringify(newItem)));
              }
          });
      }
  });

})();
`;

if (!code.includes('d_snickers_global')) {
    code = code.replace(
        'export const BRANCH_MENUS = sortFilteredCoffeeByPrice(RAW_BRANCH_MENUS);',
        globalDessertsOverride + '\nexport const BRANCH_MENUS = sortFilteredCoffeeByPrice(RAW_BRANCH_MENUS);'
    );
    fs.writeFileSync('constants.ts', code);
    console.log('Fixed globally!');
} else {
    console.log('Already fixed!');
}
