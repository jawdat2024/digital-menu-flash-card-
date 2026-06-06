const fs = require('fs');

let code = fs.readFileSync('constants.ts', 'utf8');

const injection = `
(() => {
  // Task 1: Propagate Fresh Juices from ALQANA to all EXCEPT Marina
  const alqanaMenu = RAW_BRANCH_MENUS['alqana'];
  let alqanaJuices = [];

  // find ALQANA juices
  for (const cat of alqanaMenu) {
    if (cat.items) {
      const juices = cat.items.filter(i => 
        ['orange', 'carrot', 'watermelon', 'green apple'].includes(i.name.toLowerCase().replace(' juice', '')) ||
        ['orange juice', 'carrot juice', 'watermelon juice', 'apple juice'].includes(i.name.toLowerCase())
      );
      if (juices.length) {
         juices.forEach(j => {
             if(!alqanaJuices.find(aj => aj.name === j.name)) alqanaJuices.push(JSON.parse(JSON.stringify(j)));
         });
      }
    }
    if (cat.subCategories) {
       for (const sub of cat.subCategories) {
          if (sub.items) {
            const juices = sub.items.filter(i => 
              ['orange', 'carrot', 'watermelon', 'green apple'].includes(i.name.toLowerCase().replace(' juice', '')) ||
              ['orange juice', 'carrot juice', 'watermelon juice', 'apple juice'].includes(i.name.toLowerCase())
            );
            if (juices.length) {
               juices.forEach(j => {
                   if(!alqanaJuices.find(aj => aj.name === j.name)) alqanaJuices.push(JSON.parse(JSON.stringify(j)));
               });
            }
          }
       }
    }
  }

  // Inject into all EXCEPT "marina"
  Object.keys(RAW_BRANCH_MENUS).forEach(branchName => {
    if (branchName !== 'marina') {
       const branchMenu = RAW_BRANCH_MENUS[branchName];
       // find juices category or signature-tea -> juices
       let juicesTarget = null;
       
       const sigTea = branchMenu.find(c => c.id === 'signature-tea');
       if (sigTea && sigTea.subCategories) {
          juicesTarget = sigTea.subCategories.find(s => s.id === 'juices');
       }
       
       if (!juicesTarget) {
          juicesTarget = branchMenu.find(c => c.id === 'juices');
       }

       // fallback to cold drinks or signature drinks? The prompt says "corresponding category".
       if (juicesTarget) {
          alqanaJuices.forEach(newJuice => {
             if (!juicesTarget.items.some(i => i.name.toLowerCase() === newJuice.name.toLowerCase())) {
                 juicesTarget.items.push(JSON.parse(JSON.stringify(newJuice)));
             }
          });
       }
    }
  });

  // Task 2: Global Addition of "Açaí Smoothie"
  // Data Object: Since price and image are not provided, initialize this item with default/null values for price, image, and description, keeping the data schema consistent.
  const newAcai = {
      id: "sm_acai_global_new",
      name: "Açaí Smoothie",
      price: null,
      image: null,
      description: null
  };

  Object.values(RAW_BRANCH_MENUS).forEach(branchMenu => {
      // Find relevant category, e.g., Smoothies or Cold Drinks
      let smoothiesTarget = null;
      
      const sigTea = branchMenu.find(c => c.id === 'signature-tea');
      if (sigTea && sigTea.subCategories) {
          smoothiesTarget = sigTea.subCategories.find(s => s.id === 'smoothies');
      }
      
      if (!smoothiesTarget) {
          smoothiesTarget = branchMenu.find(c => c.id === 'smoothies');
      }
      if (!smoothiesTarget) {
          // fallback to a known drinks category
          smoothiesTarget = branchMenu.find(c => c.id === 'signature-drinks') || sigTea;
      }

      const categoryToInject = smoothiesTarget || branchMenu[0]; // fallback to first category if really nothing found

      if (categoryToInject) {
          if (!categoryToInject.items?.some(i => i.id === newAcai.id)) {
              if (categoryToInject.items) {
                 categoryToInject.items.push(JSON.parse(JSON.stringify(newAcai)));
              }
          }
      }
  });

})();
`;

if (!code.includes('sm_acai_global_new')) {
    code = code.replace(
        'export const BRANCH_MENUS = sortFilteredCoffeeByPrice(RAW_BRANCH_MENUS);',
        injection + '\nexport const BRANCH_MENUS = sortFilteredCoffeeByPrice(RAW_BRANCH_MENUS);'
    );
    fs.writeFileSync('constants.ts', code);
    console.log('Fixed globally!');
} else {
    console.log('Already fixed!');
}
