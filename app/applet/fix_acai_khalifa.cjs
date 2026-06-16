const fs = require('fs');
let code = fs.readFileSync('constants.ts', 'utf8');

const injection = `
(() => {
  // Acaí Smoothie strictly mapped to Khalifa branch ID
  Object.keys(RAW_BRANCH_MENUS).forEach(branchId => {
      if (branchId !== 'khalifa') {
         RAW_BRANCH_MENUS[branchId].forEach(cat => {
            if (cat.items) {
               cat.items = cat.items.filter(i => i.name !== 'Açaí Smoothie');
            }
            if (cat.subCategories) {
               cat.subCategories.forEach(sub => {
                  if (sub.items) {
                     sub.items = sub.items.filter(i => i.name !== 'Açaí Smoothie');
                  }
               });
            }
         });
      }
  });

  // Ensure Acaí Smoothie is in Khalifa's Signature drink
  const khalifaMenu = RAW_BRANCH_MENUS['khalifa'];
  let sigDrinkKhalifa = null;
  if(khalifaMenu) {
     const sigTea = khalifaMenu.find(c => c.id === 'signature-tea');
     if (sigTea && sigTea.subCategories) {
        sigDrinkKhalifa = sigTea.subCategories.find(s => s.id === 'signature-drinks' || s.title?.toUpperCase().includes('SIGNATURE DRINK'));
     }
     if (!sigDrinkKhalifa) {
        sigDrinkKhalifa = khalifaMenu.find(c => c.id === 'signature-drinks' || c.title?.toUpperCase().includes('SIGNATURE DRINK'));
     }
  }

  if (sigDrinkKhalifa && sigDrinkKhalifa.items) {
     if (!sigDrinkKhalifa.items.find(i => i.name === 'Açaí Smoothie')) {
         sigDrinkKhalifa.items.push({
            id: "sm_acai",
            name: "Açaí Smoothie",
            price: "42",
            image: "https://iili.io/BBBfCDN.jpg",
            description: "Acai berry, banana, strawberry, peanut butter, coconut water, oat milk, and apple juice.",
            ingredients: "Acai berry, banana, strawberry, peanut butter, coconut water, oat milk, and apple juice.",
            calories: 350,
            publishStatus: "published",
            status: "active",
            isVisible: true
         });
     }
  }

  // Ensure Tunacado is also existing in BEST SELLER globally
  Object.values(RAW_BRANCH_MENUS).forEach(branchMenu => {
      const bestSeller = branchMenu.find(c => c.id === 'highly-recommend' || c.title === 'BEST SELLER');
      if (bestSeller && bestSeller.items) {
          if (!bestSeller.items.find(i => i.name === 'Tunacado')) {
             // Find tunacado
             let tunacado = null;
             branchMenu.forEach(c => {
                if (c.items && !tunacado) tunacado = c.items.find(i => i.name === 'Tunacado');
             });
             if (tunacado) bestSeller.items.push(JSON.parse(JSON.stringify(tunacado)));
          }
      }
  });

})();
`;

if (!code.includes('Acaí Smoothie strictly mapped to Khalifa branch ID')) {
    code = code.replace(
        'export const BRANCH_MENUS = sortFilteredCoffeeByPrice(RAW_BRANCH_MENUS);',
        injection + '\nexport const BRANCH_MENUS = sortFilteredCoffeeByPrice(RAW_BRANCH_MENUS);'
    );
    fs.writeFileSync('constants.ts', code);
    console.log('Script injected into constants.ts!');
} else {
    console.log('Already injected!');
}
