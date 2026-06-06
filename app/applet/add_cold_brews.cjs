const fs = require('fs');

let code = fs.readFileSync('constants.ts', 'utf8');

const injection = `
(() => {
  // Task: Global Addition to "FILTERED" Category
  const newColdBrews = [
    {
      id: "cb_cinn",
      name: "Cold Brew - cinnamon",
      price: "38",
      image: "https://iili.io/C27AgUB.jpg",
      status: "coming_soon"
    },
    {
      id: "cb_rogicha",
      name: "Cold Brew Ethiopia Rogicha",
      price: "38",
      image: "https://iili.io/B3OHMFV.jpg"
    },
    {
      id: "cb_kirimara",
      name: "Cold Brew Kenya Kirimara",
      price: "38",
      image: "https://iili.io/B3Ns6UG.jpg"
    },
    {
      id: "cb_colombia",
      name: "Cold Brew - Colombia classic",
      price: "38",
      image: "https://iili.io/C27AgUB.jpg"
    }
  ];

  Object.values(RAW_BRANCH_MENUS).forEach(branchMenu => {
      const filteredCat = branchMenu.find(c => c.title && c.title.toUpperCase() === 'FILTERED');
      if (filteredCat) {
          if (!filteredCat.items) {
             filteredCat.items = [];
          }
          newColdBrews.forEach(item => {
             if (!filteredCat.items.some(i => i.name === item.name || i.id === item.id)) {
                filteredCat.items.push(JSON.parse(JSON.stringify(item)));
             }
          });
      }
  });
})();
`;

if (!code.includes('Cold Brew - cinnamon')) {
    code = code.replace(
        'export const BRANCH_MENUS = sortFilteredCoffeeByPrice(RAW_BRANCH_MENUS);',
        injection + '\nexport const BRANCH_MENUS = sortFilteredCoffeeByPrice(RAW_BRANCH_MENUS);'
    );
    fs.writeFileSync('constants.ts', code);
    console.log('Script injected into constants.ts!');
} else {
    console.log('Already injected!');
}
