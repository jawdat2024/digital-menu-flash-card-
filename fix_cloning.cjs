const fs = require('fs');
let code = fs.readFileSync('constants.ts', 'utf8');

const oldLogic = `    const dessertsMarinaIdx = menu.findIndex(c => c.id === 'desserts');
    if (dessertsMarinaIdx !== -1) {
       const bananaPudding = menu[dessertsMarinaIdx].items.find(i => i.id === 'd_banana_pud');
       if (bananaPudding) {
          bananaPudding.isSoldOut = true;
          bananaPudding.status = 'out_of_stock';
       }
    }`;

const newLogic = `    const dessertsMarinaIdx = menu.findIndex(c => c.id === 'desserts');
    if (dessertsMarinaIdx !== -1) {
       menu[dessertsMarinaIdx] = { ...menu[dessertsMarinaIdx] }; // Shallow clone category
       menu[dessertsMarinaIdx].items = menu[dessertsMarinaIdx].items.map(i => {
           if (i.id === 'd_banana_pud') {
               return { ...i, isSoldOut: true, status: 'out_of_stock' }; // Clone item and modify status
           }
           return i;
       });
    }`;

code = code.replace(oldLogic, newLogic);
fs.writeFileSync('constants.ts', code);
console.log('Fixed cloning!');
