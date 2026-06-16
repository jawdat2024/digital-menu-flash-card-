const fs = require('fs');
let code = fs.readFileSync('constants.ts', 'utf8');

const injection = `
(() => {
  // 1. Add Acaí Smoothie to Khalifa Smoothies
  const khalifaMenu = RAW_BRANCH_MENUS['khalifa'];
  if (khalifaMenu) {
    const sigTea = khalifaMenu.find(c => c.id === 'signature-tea');
    if (sigTea && sigTea.subCategories) {
      const smoothies = sigTea.subCategories.find(sub => sub.id === 'smoothies');
      if (smoothies) {
        const newItem = {
          id: "sm_acai",
          name: "Açaí Smoothie",
          price: "42",
          image: "https://iili.io/BBBfCDN.jpg",
          description: "Acai berry, banana, strawberry, peanut butter, coconut water, oat milk, and apple juice.",
          ingredients: "Acai berry, banana, strawberry, peanut butter, coconut water, oat milk, and apple juice.",
          calories: 350
        };
        const existingIdx = smoothies.items.findIndex(i => i.name === 'Açaí Smoothie');
        if (existingIdx !== -1) {
            smoothies.items[existingIdx] = { ...smoothies.items[existingIdx], ...newItem };
        } else {
            smoothies.items.push(newItem);
        }
      }
    }
  }

  // 2. Filter the Juices Category (Global)
  Object.values(RAW_BRANCH_MENUS).forEach(branchMenu => {
    branchMenu.forEach(cat => {
      if (cat.id === 'juices' || cat.title?.toUpperCase() === 'JUICES') {
         if (cat.items) {
           cat.items = cat.items.filter(i => i.name.toLowerCase().includes('orange'));
         }
      }
      if (cat.subCategories) {
         cat.subCategories.forEach(sub => {
           if (sub.id === 'juices' || sub.title?.toUpperCase() === 'JUICES') {
             if (sub.items) {
               sub.items = sub.items.filter(i => i.name.toLowerCase().includes('orange'));
             }
           }
         });
      }
    });
  });

  // 3. Append Missing Sandwiches globally
  const newSandwiches = [
    {
      id: "sw_tuna",
      name: "Tunacado",
      price: "38",
      image: "https://iili.io/qqEgPdN.jpg",
      ingredients: "Joe's bread, pesto mayo, tuna mix, tomato slice, avocado slice.",
      calories: 480
    },
    {
      id: "sw_italian",
      name: "Cold Cut Italian",
      price: "38",
      image: "https://iili.io/qqEieVe.png",
      ingredients: "White slice bread with pesto oil, fresh mozzarella, tomato slice, tartufo salami, chorizo, baby Rocca, sun-dried tomatoes, balsamic glaze, organic olive oil.",
      calories: 580
    }
  ];

  Object.values(RAW_BRANCH_MENUS).forEach(branchMenu => {
    const swCat = branchMenu.find(c => c.id === 'sandwiches' || c.title?.toUpperCase() === 'SANDWICHES & BAGEL\\'S' || c.title?.toUpperCase() === 'SANDWICHES');
    if (swCat && swCat.items) {
       newSandwiches.forEach(sw => {
          if (!swCat.items.find(i => i.name === sw.name)) {
             swCat.items.push(JSON.parse(JSON.stringify(sw)));
          }
       });
    }
  });

})();
`;

if (!code.includes('Filter the Juices Category (Global)')) {
    code = code.replace(
        'export const BRANCH_MENUS = sortFilteredCoffeeByPrice(RAW_BRANCH_MENUS);',
        injection + '\nexport const BRANCH_MENUS = sortFilteredCoffeeByPrice(RAW_BRANCH_MENUS);'
    );
    fs.writeFileSync('constants.ts', code);
    console.log('Script injected into constants.ts!');
} else {
    console.log('Already injected!');
}
