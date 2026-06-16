const fs = require('fs');
let code = fs.readFileSync('constants.ts', 'utf8');

const injection = `
(() => {
  // TASK 1: Khalifa Category Renaming
  const khalifaMenu = RAW_BRANCH_MENUS['khalifa'];
  if (khalifaMenu) {
     const eggsMoreCat = khalifaMenu.find(c => c.id === 'eggs-more' || c.title === 'Fruits, Seeds & Grains');
     if (eggsMoreCat) {
         eggsMoreCat.title = 'EGG&MORE';
     }
  }

  // TASK 2: Tunacado to Sandwiches Globally
  Object.values(RAW_BRANCH_MENUS).forEach(branchMenu => {
     let bestSellers = null;
     const highlyRec = branchMenu.find(c => c.id === 'highly-recommend' || c.title === 'BEST SELLER');
     if (highlyRec) bestSellers = highlyRec;

     let tunacado = null;
     if (bestSellers && bestSellers.items) {
         tunacado = bestSellers.items.find(i => i.name === 'Tunacado');
     }

     if (!tunacado) {
        // Find globally if not in best seller
        for (const cat of branchMenu) {
           if (cat.items) {
               const found = cat.items.find(i => i.name === 'Tunacado');
               if (found) tunacado = found;
           }
        }
     }

     if (tunacado) {
         let swCat = branchMenu.find(c => c.id === 'sandwiches' || c.title?.toUpperCase().includes('SANDWICHES'));
         if (swCat && swCat.items) {
             const existing = swCat.items.find(i => i.name === 'Tunacado');
             if (!existing) {
                 swCat.items.push(JSON.parse(JSON.stringify(tunacado)));
             }
         }
     }
  });

  // TASK 3: Smoothies into Signature drink
  const newAcai = {
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
  };

  Object.values(RAW_BRANCH_MENUS).forEach(branchMenu => {
      // Find smoothies globally
      const knownSmoothies = ["Strawberry Glaze Smoothie", "Blue Cloud Smoothie", "Pitaya Smoothie"];
      const matchingSmoothies = [];
      branchMenu.forEach(cat => {
         // Pull out smoothies from their old place and then hide or remove old category
         const processContainer = (container) => {
             if (container.items) {
                knownSmoothies.forEach(name => {
                    const idx = container.items.findIndex(i => i.name === name);
                    if (idx !== -1) {
                       matchingSmoothies.push(JSON.parse(JSON.stringify(container.items[idx])));
                       container.items.splice(idx, 1); // remove from old place
                    }
                });
             }
         };

         processContainer(cat);
         if (cat.subCategories) {
             cat.subCategories.forEach(sub => processContainer(sub));
             // if subCategory "smoothies" is now empty, delete it
             cat.subCategories = cat.subCategories.filter(sub => sub.id !== 'smoothies' || (sub.items && sub.items.length > 0));
         }
      });
      // also remove smoothies category if it's empty
      const isSmoothieCat = (c) => c.id === 'smoothies' || c.title === 'SMOOTHIES' || c.title === 'Smoothies';
      for (let i = branchMenu.length - 1; i >= 0; i--) {
          if (isSmoothieCat(branchMenu[i])) {
              if (!branchMenu[i].items || branchMenu[i].items.length === 0) {
                  branchMenu.splice(i, 1);
              }
          }
      }

      // Add to "Signature drink"
      // Wait, there might be a "Signature drink" category or we need to add it or it's a sub of signature-tea.
      let sigTeaCat = branchMenu.find(c => c.id === 'signature-tea');
      let sigDrinkContainer = null;
      if (sigTeaCat) {
          if (sigTeaCat.subCategories) {
              sigDrinkContainer = sigTeaCat.subCategories.find(s => s.id === 'signature-drinks' || s.title?.toUpperCase() === 'SIGNATURE DRINK' || s.title === 'Signature drink');
          }
      }
      if (!sigDrinkContainer) {
          sigDrinkContainer = branchMenu.find(c => c.id === 'signature-drinks' || c.title?.toUpperCase() === 'SIGNATURE DRINK' || c.title === 'Signature drink');
      }

      if (sigDrinkContainer && sigDrinkContainer.items) {
          // Push Acai
          let acaiFound = sigDrinkContainer.items.find(i => i.name === 'Açaí Smoothie');
          if (!acaiFound) {
              sigDrinkContainer.items.push(JSON.parse(JSON.stringify(newAcai)));
          } else {
              Object.assign(acaiFound, newAcai);
          }

          // Push the other 3
          matchingSmoothies.forEach(sm => {
             if (!sigDrinkContainer.items.find(i => i.name === sm.name)) {
                 sigDrinkContainer.items.push(sm);
             }
          });
      }
  });

})();
`;

if (!code.includes('TASK 1: Khalifa Category Renaming')) {
    code = code.replace(
        'export const BRANCH_MENUS = sortFilteredCoffeeByPrice(RAW_BRANCH_MENUS);',
        injection + '\nexport const BRANCH_MENUS = sortFilteredCoffeeByPrice(RAW_BRANCH_MENUS);'
    );
    fs.writeFileSync('constants.ts', code);
    console.log('Script injected into constants.ts!');
} else {
    console.log('Already injected!');
}
